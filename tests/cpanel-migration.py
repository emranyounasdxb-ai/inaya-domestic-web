"""Exercise the production migration rules with Apache, not Next's dev server."""
import argparse
import json
import os
from pathlib import Path
import re
import shutil
import socket
import subprocess
import tempfile
import time
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
CONFIG = ROOT / '.github' / 'cpanel.htaccess'
ORIGIN = 'https://inayadomestic.ae'
LEGACY_MEDIA_ALIAS = (
    '/wp-content/uploads/2025/10/inaya-dishwashing-maid-ajman-cleaning-service.png',
    '/images/services/housekeeping.webp',
)
ALIASES = {
    '/home': '/en/',
    '/ar-الرئيسية': '/ar/',
    '/ar/blog/-الأدلة': '/ar/blog/',
    '/ar/services-الخدمات': '/ar/services/',
    '/en/why-choose-inaya': '/en/about/',
    '/ar/why-choose-inaya': '/ar/about/',
    '/ar/domestic-worker-services-uae': '/ar/services/',
    '/domestic-worker-services-ajman': '/en/maid-services-ajman/',
    '/ar/domestic-worker-services-ajman': '/ar/maid-services-ajman/',
    '/professional-maid-agency-ajman': '/en/maid-services-ajman/',
    '/privacy-policy': '/en/privacy-policy/',
    '/terms-and-conditions': '/en/terms/',
    '/ar/terms-and-conditions': '/ar/terms/',
    '/top-10-maid-hiring-mistakes-in-uae-and-how-to-avoid-them':
        '/en/blog/uae-domestic-worker-hiring-process/',
    '/ar/mohre-domestic-worker-rules-2025-complete-guide-to-legal-hiring-in-uae':
        '/ar/blog/uae-domestic-worker-hiring-process/',
}


def contract():
    xml = ET.parse(ROOT / 'out' / 'sitemap.xml')
    urls = [n.text for n in xml.findall(
        '{http://www.sitemaps.org/schemas/sitemap/0.9}url/'
        '{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
    pages = [urllib.parse.urlsplit(url).path for url in urls]
    assert len(pages) == 294, f'Unexpected current sitemap inventory: {len(pages)}'
    # Preserve the complete historical inventory and order. The new four-guide
    # cohort appends eight URLs after all 284 previously reviewed canonical URLs.
    additions = json.loads((ROOT / 'tests' / 'fixtures' /
                            'four-guides-addition-20261029-before.json').read_text(encoding='utf-8'))
    assert len(additions['canonicalUrls']) == 284
    assert urls[:284] == additions['canonicalUrls'], 'The complete prior 284-route inventory and order changed'
    new_slugs = additions['newSlugs']
    assert new_slugs == [
        'uae-domestic-worker-rights-employer-duties',
        'domestic-worker-centre-reviews-checklist',
        'domestic-workers-meaning-roles-uae',
        'choosing-domestic-worker-centre-across-emirates',
    ], 'Exactly the four separately reviewed new topics are permitted'
    new_urls = [f'{ORIGIN}/{locale}/blog/{slug}/'
                for slug in new_slugs for locale in ['en', 'ar']]
    assert urls[284:] == new_urls, 'Only the eight reviewed new guide URLs may be appended'
    review = json.loads((ROOT / 'tests' / 'fixtures' /
                         'keyword-articles-reviewed-20261024.json').read_text(encoding='utf-8'))
    previous = review['previousCanonicalUrls']
    assert len(previous) == 232, 'The independently reviewed previous inventory is fixed'
    original = previous + [f"{ORIGIN}/{locale}/blog/{article['slug']}/"
                           for article in review['articles'] for locale in ['en', 'ar']]
    assert len(original) == 274, 'Preserve all original canonical URLs'
    assert urls[:274] == original, 'Original 274 canonical URLs and order changed'
    archives = [f'{ORIGIN}/{locale}/blog/page/{page}/'
                for page in range(2, 7) for locale in ['en', 'ar']]
    assert urls[274:284] == archives, 'The ten reviewed archive URLs retain their exact original positions'
    assert len(set(pages)) == len(pages), 'Every canonical route remains distinct'
    text = CONFIG.read_text(encoding='utf-8')
    targets = re.findall(r'^\s*RewriteRule \S+ https://inayadomestic\.ae(/\S+) \[R=301,L\]$',
                         text, re.M)
    media_target = ROOT / 'out' / LEGACY_MEDIA_ALIAS[1].lstrip('/')
    assert media_target.is_file(), 'Observed legacy image requires its exported replacement'
    for target in targets:
        if target == LEGACY_MEDIA_ALIAS[1]:
            continue  # This one verified image alias is an asset, not a sitemap page.
        assert target in pages, f'Redirect target absent from sitemap: {target}'
        assert (ROOT / 'out' / target.lstrip('/') / 'index.html').is_file(), target
    workflow = (ROOT / '.github' / 'workflows' / 'deploy-cpanel.yml').read_text(encoding='utf-8')
    assert 'cp .github/cpanel.htaccess out/.htaccess' in workflow
    assert "cat > out/.htaccess <<'EOF'" not in workflow, 'Duplicated deployment rules'
    return pages


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


def apache_checks(pages):
    import grp
    import pwd
    apache = shutil.which('apache2')
    assert apache, 'Apache is required for real migration integration checks'
    with tempfile.TemporaryDirectory(prefix='inaya-apache-') as temporary:
        folder = Path(temporary)
        document = folder / 'site'
        document.mkdir()
        for route in pages:
            directory = document / route.lstrip('/')
            directory.mkdir(parents=True, exist_ok=True)
            (directory / 'index.html').write_text('current INAYA route', encoding='utf-8')
        for asset in ['_next/static/example.js', 'favicon.ico', 'favicon-48x48.png',
                      'inaya-enquiry.php', '404.html']:
            target = document / asset
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text('fixture asset', encoding='utf-8')
        media_target = document / LEGACY_MEDIA_ALIAS[1].lstrip('/')
        media_target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(ROOT / 'out' / LEGACY_MEDIA_ALIAS[1].lstrip('/'), media_target)
        shutil.copyfile(ROOT / 'out' / 'company-information.json', document / 'company-information.json')
        shutil.copyfile(CONFIG, document / '.htaccess')
        # The CI process and Apache run as the same unprivileged user.
        user = pwd.getpwuid(os.getuid()).pw_name
        group = grp.getgrgid(os.getgid()).gr_name
        with socket.socket() as sock:
            sock.bind(('127.0.0.1', 0))
            port = sock.getsockname()[1]
        config = folder / 'apache.conf'
        modules = ['mpm_event', 'authz_core', 'dir', 'mime', 'rewrite', 'headers', 'expires']
        lines = [f'ServerRoot "{folder}"', f'DefaultRuntimeDir "{folder}"',
                 f'PidFile "{folder / "apache.pid"}"', 'ServerName localhost',
                 f'Listen 127.0.0.1:{port}', f'User {user}', f'Group {group}',
                 f'ErrorLog "{folder / "error.log"}"', 'LogLevel warn']
        lines += [f'LoadModule {name}_module /usr/lib/apache2/modules/mod_{name}.so'
                  for name in modules]
        lines += ['TypesConfig /etc/mime.types', f'DocumentRoot "{document}"', f'<Directory "{document}">',
                  'AllowOverride All', 'Options FollowSymLinks', 'Require all granted',
                  '</Directory>']
        config.write_text('\n'.join(lines) + '\n', encoding='utf-8')
        subprocess.run([apache, '-t', '-f', str(config)], check=True)
        process = subprocess.Popen([apache, '-f', str(config), '-DFOREGROUND'],
                                   stdout=subprocess.DEVNULL, stderr=subprocess.PIPE)
        opener = urllib.request.build_opener(NoRedirect)

        def request(route, host='inayadomestic.ae', language='en'):
            encoded = urllib.parse.quote(route, safe='/?=&%')
            req = urllib.request.Request(f'http://127.0.0.1:{port}{encoded}', headers={
                'Host': host, 'Accept-Language': language})
            try:
                with opener.open(req, timeout=5) as response:
                    return response.status, response.headers.get('Location')
            except urllib.error.HTTPError as error:
                return error.code, error.headers.get('Location')

        try:
            for _ in range(100):
                if process.poll() is not None:
                    raise RuntimeError(process.stderr.read().decode(errors='replace'))
                try:
                    request('/en/')
                    break
                except urllib.error.URLError:
                    time.sleep(0.1)
            else:
                raise RuntimeError('Apache did not start')
            count = 0

            def expect(route, status, location=None, path_only=False, **kwargs):
                nonlocal count
                actual = request(route, **kwargs)
                if path_only and actual[1]:
                    actual = actual[0], urllib.parse.urlsplit(actual[1]).path
                assert actual == (status, location), (route, actual, status, location)
                count += 1

            # Every current canonical route must survive the retirement rules.
            for route in pages:
                expect(route, 200)
            # The shared data representation must remain a real JSON file under
            # Apache's production rewrite rules, independent of language routing.
            for language in ['en', 'ar-AE,ar;q=0.9']:
                req = urllib.request.Request(f'http://127.0.0.1:{port}/company-information.json', headers={
                    'Host': 'inayadomestic.ae', 'Accept-Language': language})
                with opener.open(req, timeout=5) as response:
                    assert response.status == 200
                    assert response.headers.get_content_type() == 'application/json'
                    assert response.read() == (ROOT / 'out' / 'company-information.json').read_bytes()
                count += 1
            for source, target in ALIASES.items():
                for suffix in ['', '/']:
                    expect(source + suffix, 301, ORIGIN + target)
            for route in ['/product/strai62557325.htm', '/product/', '/tag/caregivers-ajman/',
                          '/category/old-category/', '/author/old-editor/',
                          '/wp-includes/js/wp-emoji-release.min.js?ver=6.9',
                          '/disclaimer', '/disclaimer/', '/ar/disclaimer/',
                          '/?feed=rss2', '/?p=1', '/en/?feed=rss2', '/ar/?p=1',
                          '/?utm_source=old&feed=rss2&x=1']:
                expect(route, 410)
            for route in ['/_next/static/example.js', '/favicon.ico', '/inaya-enquiry.php',
                          '/en/booking/?service=nanny', '/ar/booking/?service=executive-nannies',
                          '/en/?page=1', '/en/?feed=rss2-example', '/en/contact/?feed=rss2']:
                expect(route, 200)
            expect('/', 302, '/en/', path_only=True)
            expect('/', 302, '/ar/', path_only=True, language='ar-AE,ar;q=0.9')
            expect('/en/', 301, ORIGIN + '/en/', host='www.inayadomestic.ae')
            expect('/wp-content/uploads/2025/10/inaya-favicon-512x512-1-150x150.png',
                   301, '/favicon-48x48.png', path_only=True)
            expect(LEGACY_MEDIA_ALIAS[0], 301, ORIGIN + LEGACY_MEDIA_ALIAS[1])
            expect(LEGACY_MEDIA_ALIAS[1], 200)
            expect('/wp-content/uploads/2025/10/another-unmatched-image.png', 404)
            expect('/unknown-unrelated-page/', 404)
            print(f'Apache integration passed: {count} requests; {len(pages)} current routes intact.')
        finally:
            process.terminate()
            process.wait(timeout=10)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--contract-only', action='store_true')
    args = parser.parse_args()
    current = contract()
    print('Migration targets and single deployment source verified.')
    if not args.contract_only:
        apache_checks(current)
