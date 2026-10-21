# Isolated HTTP contract test: PHP mail is captured locally; no email is sent.
import os,json,time,uuid,socket,subprocess,urllib.request,urllib.error,hashlib,tempfile,shutil
from pathlib import Path
php=shutil.which('php')
assert php, 'PHP is required for the delivery endpoint test'
temporary=tempfile.TemporaryDirectory(prefix='inaya-form-test-')
root=Path(temporary.name)
(root/'public').mkdir()
shutil.copyfile(Path(__file__).resolve().parents[1]/'public/inaya-enquiry.php',root/'public/inaya-enquiry.php')
capture=root/'captured-mail.txt'
sendmail=root/'fake-sendmail'
sendmail.write_text('#!/bin/sh\ncat >> "'+str(capture)+'"\nprintf "\\nEND-INAYA-MAIL\\n" >> "'+str(capture)+'"\n')
sendmail.chmod(0o700)
with socket.socket() as free:
 free.bind(('127.0.0.1',0));port=free.getsockname()[1]
http_log = (root / 'php-qa-server.log').open('w')
process = subprocess.Popen([php, '-d', 'sendmail_path=/bin/sh '+str(sendmail), '-S', '127.0.0.1:'+str(port), '-t', str(root / 'public')], stdout=http_log, stderr=subprocess.STDOUT)
results = []

def request(payload=None, method='POST', origin='https://inayadomestic.ae', content_type='application/json'):
    encoded = json.dumps(payload).encode() if isinstance(payload, dict) else payload
    req = urllib.request.Request('http://127.0.0.1:'+str(port)+'/inaya-enquiry.php', data=encoded, method=method, headers={'Origin': origin, 'Content-Type': content_type})
    try:
        response = urllib.request.urlopen(req, timeout=20)
    except urllib.error.HTTPError as error:
        response = error
    return response.code, json.loads(response.read().decode())

def expect(name, expected, *args, **kwargs):
    status, body = request(*args, **kwargs)
    assert status == expected, (name, status, body)
    results.append({'test': name, 'status': status, 'passed': True})
    return body

try:
    for _ in range(30):
        try:
            connection = socket.create_connection(('127.0.0.1', port), timeout=0.5)
            connection.close()
            break
        except OSError:
            time.sleep(0.1)
    payload = {'kind': 'contact', 'locale': 'en', 'requestId': str(uuid.uuid4()), 'startedAt': int(time.time() * 1000) - 5000, 'fields': {'name': 'INAYA WEBSITE QA - no service required', 'phone': '+971000000000', 'email': 'info@inayadomestic.ae', 'service': 'housemaid', 'message': 'Authorized delivery test only. Please disregard this synthetic enquiry. No booking or candidate application is requested.'}}
    expect('GET is rejected', 405, method='GET')
    expect('Cross-origin is rejected', 403, payload, origin='https://example.invalid')
    expect('Non-JSON is rejected', 415, b'hello', content_type='text/plain')
    expect('Malformed JSON is rejected', 400, b'{')
    expect('Oversized body is rejected', 413, b'x' * 20001)
    missing = dict(payload, fields={})
    expect('Missing required fields are rejected', 422, missing)
    bad_email = dict(payload, fields=dict(payload['fields'], email='not-an-email'))
    expect('Invalid email is rejected', 422, bad_email)
    assert request(bad_email)[1]['field'] == 'email'
    stale = dict(payload, startedAt=int(time.time() * 1000) - 172800000)
    expired = expect('Old tab receives a recoverable server timestamp', 422, stale)
    assert expired['code'] == 'form_time' and isinstance(expired['serverTime'], int)
    rate_dir = root / 'tmp/inaya-website-forms'
    rate_dir.mkdir(parents=True, exist_ok=True)
    rate_path = rate_dir / ('rate-' + hashlib.sha256(b'127.0.0.1').hexdigest() + '.json')
    rate_path.write_text(json.dumps([int(time.time())] * 10))
    expect('Rate limit is enforced', 429, payload)
    rate_path.write_text('[]')
    accepted = expect('Mail transport accepts synthetic enquiry', 200, payload)
    assert accepted.get('ok') is True and accepted.get('reference', '').startswith('INAYA-')
    duplicate = expect('Repeated request returns the same reference', 200, payload)
    assert duplicate == accepted
    modified = dict(payload, fields=dict(payload['fields'], message='Different enquiry with the same identifier'))
    expect('Identifier cannot be reused for different data', 409, modified)
    assert len(capture.read_text().split('END-INAYA-MAIL')) - 1 == 1, 'duplicate must not send a second mail'
    assert 'info@inayadomestic.ae' in capture.read_text()
    recovered = dict(stale, requestId=str(uuid.uuid4()), startedAt=expired['serverTime'] - 2000,
        fields=dict(payload['fields'], phone='(050) 000-0000'))
    expect('Refreshed timestamp and parenthesized phone are accepted', 200, recovered)
    blocked = dict(payload, requestId=str(uuid.uuid4()))
    blocked_path = rate_dir / ('request-' + hashlib.sha256(blocked['requestId'].encode()).hexdigest() + '.json')
    Path(str(blocked_path) + '.tmp').mkdir()
    expect('Reservation write failure rejects before mail', 503, blocked)
    assert capture.read_text().count('END-INAYA-MAIL') == 2
    Path(str(blocked_path) + '.tmp').rmdir()
    # Simulate quota/storage failure after transport acceptance, before final receipt.
    sendmail.write_text(sendmail.read_text() + 'mkdir "' + str(blocked_path) + '.tmp"\n')
    expect('Final receipt write failure is not reported as success', 503, blocked)
    expect('Uncertain delivery is never mailed again on retry', 503, blocked)
    assert capture.read_text().count('END-INAYA-MAIL') == 3
    assert json.loads(blocked_path.read_text())['ok'] is False
    result = {'tests': results, 'passed': len(results), 'mailTransportAccepted': True, 'inboxDeliveryConfirmed': False, 'reference': accepted['reference'], 'expectedRealMessages': 3, 'privateTestServer': '127.0.0.1:18473'}
    print('BACKEND_TESTS_PASS', len(results), 'MAIL_REFERENCE', accepted['reference'], flush=True)
finally:
    process.terminate()
    process.wait(timeout=5)
    http_log.close()
    temporary.cleanup()
