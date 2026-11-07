"""Verify the bounded HSTS amendment with real Apache HTTP and verified TLS."""
import argparse
import hashlib
import http.client
import json
import os
from pathlib import Path
import re
import shutil
import socket
import ssl
import subprocess
import tempfile
import time
from email.utils import parsedate_to_datetime


ROOT = Path(__file__).resolve().parents[1]
CONFIG = ROOT / '.github' / 'cpanel.htaccess'
BASELINE_SHA256 = '3f2968bc3b98a1c7f30e8cf760c2ec8d799df04d56c4216f50cdb324c43a33c5'
ADDITION = (
    '  # Approved five-minute HSTS policy: HTTPS apex/www only, without subdomain or preload opt-in.\n'
    '  Header always set Strict-Transport-Security "max-age=300" '
    '"expr=%{HTTPS} == \'on\' && req_novary(\'Host\') =~ m#^(?:www\\.)?inayadomestic\\.ae(?::443)?$#i"\n'
)
APPROVED_HOST = re.compile(r'^(?:www\.)?inayadomestic\.ae(?::443)?$', re.I)
DENIED_HOSTS = [
    'mail.inayadomestic.ae', 'staging.inayadomestic.ae', 'other.test',
    'inayadomestic.ae.evil.test', 'www.inayadomestic.ae.evil.test',
    'inayadomesticXae', 'inayadomestic.ae:80', 'www.inayadomestic.ae:444',
]


def source_contract():
    current = CONFIG.read_text(encoding='utf-8').replace('\r\n', '\n')
    assert current.count(ADDITION) == 1, 'Exactly the approved comment and HSTS directive'
    assert current.count('Header always set Strict-Transport-Security') == 1
    assert '<IfModule mod_headers.c>\n' + ADDITION in current
    previous = current.replace(ADDITION, '')
    assert hashlib.sha256(previous.encode()).hexdigest() == BASELINE_SHA256, \
        'Every pre-HSTS rewrite, cache and compression setting must remain unchanged'
    return previous, current


def free_ports():
    # Hold both sockets until both distinct unprivileged ports have been chosen.
    with socket.socket() as plain, socket.socket() as secure:
        plain.bind(('127.0.0.1', 0))
        secure.bind(('127.0.0.1', 0))
        return plain.getsockname()[1], secure.getsockname()[1]


def certificate(folder, openssl):
    names = sorted({'inayadomestic.ae', 'www.inayadomestic.ae'} |
                   {host.split(':')[0] for host in DENIED_HOSTS})
    extensions = folder / 'server.ext'
    extensions.write_text(
        'basicConstraints=critical,CA:FALSE\n'
        'keyUsage=critical,digitalSignature,keyEncipherment\n'
        'extendedKeyUsage=serverAuth\n'
        'subjectAltName=' + ','.join('DNS:' + name for name in names) + '\n',
        encoding='utf-8')
    commands = [
        ['req', '-x509', '-newkey', 'rsa:2048', '-nodes', '-sha256', '-days', '1',
         '-subj', '/CN=INAYA temporary integration CA',
         '-addext', 'basicConstraints=critical,CA:TRUE',
         '-addext', 'keyUsage=critical,keyCertSign,cRLSign',
         '-keyout', str(folder / 'ca.key'), '-out', str(folder / 'ca.pem')],
        ['req', '-new', '-newkey', 'rsa:2048', '-nodes', '-sha256',
         '-subj', '/CN=inayadomestic.ae', '-keyout', str(folder / 'server.key'),
         '-out', str(folder / 'server.csr')],
        ['x509', '-req', '-in', str(folder / 'server.csr'),
         '-CA', str(folder / 'ca.pem'), '-CAkey', str(folder / 'ca.key'),
         '-CAcreateserial', '-days', '1', '-sha256', '-extfile', str(extensions),
         '-out', str(folder / 'server.pem')],
    ]
    for command in commands:
        result = subprocess.run([openssl, *command], capture_output=True, text=True, timeout=30)
        if result.returncode:
            raise RuntimeError(f'Temporary certificate generation failed ({result.returncode}): {result.stderr}')
    context = ssl.create_default_context(cafile=str(folder / 'ca.pem'))
    assert context.check_hostname and context.verify_mode == ssl.CERT_REQUIRED
    return context


def request(case, ports, context):
    secure = case['scheme'] == 'https'
    sock = socket.create_connection(('127.0.0.1', ports[1 if secure else 0]), timeout=5)
    try:
        if secure:
            # Connect locally, but verify the actual requested hostname and CA.
            sock = context.wrap_socket(sock, server_hostname=case['host'].split(':')[0])
        headers = {'Host': case['host'], 'Connection': 'close',
                   'Accept-Language': case.get('language', 'en'), **case.get('headers', {})}
        wire = f"{case.get('method', 'GET')} {case['path']} HTTP/1.1\r\n"
        wire += ''.join(f'{key}: {value}\r\n' for key, value in headers.items()) + '\r\n'
        sock.sendall(wire.encode('ascii'))
        response = http.client.HTTPResponse(sock, method=case.get('method', 'GET'))
        response.begin()
        content = response.read()
        result = {'status': response.status, 'bodySha256': hashlib.sha256(content).hexdigest()}
        for name in ['Strict-Transport-Security', 'Location', 'Cache-Control', 'Pragma',
                     'Vary', 'Content-Type', 'ETag', 'Last-Modified']:
            result[name.lower()] = response.headers.get_all(name, [])
        # Expires can move with Date; compare its effective lifetime, not wall time.
        result['expiresLifetime'] = []
        for expires in response.headers.get_all('Expires', []):
            try:
                value = (parsedate_to_datetime(expires) -
                         parsedate_to_datetime(response.headers['Date'])).total_seconds()
            except (ValueError, TypeError):
                value = expires
            result['expiresLifetime'].append(value)
        return result
    finally:
        sock.close()


def cases():
    result = []
    routes = [('/en/', 200), ('/', 302), ('/unknown-unrelated-page/', 404),
              ('/product/retired.htm', 410), ('/_next/static/example.js', 200),
              ('/favicon.ico', 200), ('/home', 301), ('/en/booking/?service=nanny', 200)]
    for scheme in ['http', 'https']:
        for host in ['inayadomestic.ae', 'www.inayadomestic.ae']:
            for path, status in routes:
                result.append({'scheme': scheme, 'host': host, 'path': path,
                               'status': 301 if host.startswith('www.') else status})
        for host in ['INAYADOMESTIC.AE', 'WWW.INAYADOMESTIC.AE',
                     'inayadomestic.ae:443', 'www.inayadomestic.ae:443']:
            result.append({'scheme': scheme, 'host': host, 'path': '/en/',
                           'status': 301 if host == 'WWW.INAYADOMESTIC.AE' else 200})
        for host in DENIED_HOSTS:
            for path, status in [('/en/', 200), ('/product/retired.htm', 410)]:
                result.append({'scheme': scheme, 'host': host, 'path': path, 'status': status})
        result.append({'scheme': scheme, 'host': 'inayadomestic.ae', 'path': '/',
                       'language': 'ar-AE,ar;q=0.9', 'status': 302})
        result.append({'scheme': scheme, 'host': 'inayadomestic.ae', 'path': '/en/',
                       'method': 'HEAD', 'status': 200})
    for host in ['inayadomestic.ae', 'www.inayadomestic.ae']:
        for headers in [{'X-Forwarded-Proto': 'https'}, {'Forwarded': 'proto=https'},
                        {'X-Forwarded-Ssl': 'on', 'Front-End-Https': 'on'}]:
            result.append({'scheme': 'http', 'host': host, 'path': '/en/',
                           'status': 301 if host.startswith('www.') else 200,
                           'headers': headers})
    return result


def apache_checks(previous, current):
    import grp
    import pwd
    apache, openssl = shutil.which('apache2'), shutil.which('openssl')
    assert apache and openssl, 'Apache and OpenSSL are required for real HTTPS integration'
    with tempfile.TemporaryDirectory(prefix='inaya-hsts-') as temporary:
        folder = Path(temporary)
        document = folder / 'site'
        for name in ['en/index.html', 'ar/index.html', 'en/booking/index.html',
                     '_next/static/example.js', 'favicon.ico']:
            target = document / name
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text('unchanged integration fixture\n', encoding='utf-8')
        htaccess = document / '.htaccess'
        htaccess.write_text(previous, encoding='utf-8')
        context, ports = certificate(folder, openssl), free_ports()
        user, group = pwd.getpwuid(os.getuid()).pw_name, grp.getgrgid(os.getgid()).gr_name
        modules = ['mpm_event', 'authz_core', 'dir', 'mime', 'rewrite', 'headers',
                   'expires', 'socache_shmcb', 'ssl']
        lines = [f'ServerRoot "{folder}"', f'DefaultRuntimeDir "{folder}"',
                 f'PidFile "{folder / "apache.pid"}"', 'ServerName inayadomestic.ae',
                 f'Listen 127.0.0.1:{ports[0]}', f'Listen 127.0.0.1:{ports[1]}',
                 f'User {user}', f'Group {group}', f'ErrorLog "{folder / "error.log"}"',
                 'LogLevel warn']
        lines += [f'LoadModule {name}_module /usr/lib/apache2/modules/mod_{name}.so'
                  for name in modules]
        lines += ['TypesConfig /etc/mime.types', f'DocumentRoot "{document}"',
                  f'<Directory "{document}">', 'AllowOverride All',
                  'Options FollowSymLinks', 'Require all granted', '</Directory>',
                  f'SSLSessionCache "shmcb:{folder / "ssl-cache"}(512000)"',
                  f'<VirtualHost 127.0.0.1:{ports[1]}>', 'ServerName inayadomestic.ae',
                  'ServerAlias *', 'SSLEngine on',
                  f'SSLCertificateFile "{folder / "server.pem"}"',
                  f'SSLCertificateKeyFile "{folder / "server.key"}"', '</VirtualHost>']
        config = folder / 'apache.conf'
        config.write_text('\n'.join(lines) + '\n', encoding='utf-8')
        subprocess.run([apache, '-t', '-f', str(config)], check=True, timeout=10)
        process = subprocess.Popen([apache, '-f', str(config), '-DFOREGROUND'],
                                   stdout=subprocess.DEVNULL, stderr=subprocess.PIPE)
        checks = cases()
        try:
            for _ in range(100):
                if process.poll() is not None:
                    raise RuntimeError(process.stderr.read().decode(errors='replace'))
                try:
                    request(checks[0], ports, context)
                    break
                except OSError:
                    time.sleep(0.1)
            else:
                raise RuntimeError('Temporary Apache did not start')
            before = [request(case, ports, context) for case in checks]
            htaccess.write_text(current, encoding='utf-8')
            rows = []
            for case, baseline in zip(checks, before):
                assert baseline['status'] == case['status'], (case, baseline)
                assert baseline['strict-transport-security'] == [], (case, baseline)
                actual = request(case, ports, context)
                expected = ['max-age=300'] if (case['scheme'] == 'https' and
                                              APPROVED_HOST.fullmatch(case['host'])) else []
                actual_hsts = actual.pop('strict-transport-security')
                assert actual_hsts == expected, (case, 'actual HSTS', actual_hsts, 'expected HSTS', expected)
                baseline.pop('strict-transport-security')
                assert actual == baseline, ('HSTS must not change status, body, redirects or cache', case, actual, baseline)
                assert not any('host' in value.lower() for value in actual['vary']), (case, actual)
                rows.append({**case, 'hsts': expected, 'unchangedResponse': True})
            return {'status': 'passed', 'cases': len(rows), 'requests': len(rows) * 2,
                    'tlsCertificateAndHostnameVerified': True, 'checks': rows}
        except Exception:
            if (folder / 'error.log').exists():
                print((folder / 'error.log').read_text(encoding='utf-8', errors='replace'))
            raise
        finally:
            process.terminate()
            try:
                process.wait(timeout=10)
            except subprocess.TimeoutExpired:
                process.kill()
                process.wait(timeout=5)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--contract-only', action='store_true')
    parser.add_argument('--report', type=Path)
    args = parser.parse_args()
    previous, current = source_contract()
    result = {'sourceContract': 'passed', 'priorConfigSha256': BASELINE_SHA256}
    if args.contract_only:
        result['apacheIntegration'] = 'not-run'
    else:
        result.update(apache_checks(previous, current))
    if args.report:
        args.report.parent.mkdir(parents=True, exist_ok=True)
        args.report.write_text(json.dumps(result, indent=2) + '\n', encoding='utf-8')
    print(json.dumps({key: value for key, value in result.items() if key != 'checks'}))
