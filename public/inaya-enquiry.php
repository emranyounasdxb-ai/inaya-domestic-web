<?php
declare(strict_types=1);

// Fixed-recipient endpoint for the cPanel static export. No credentials are public.
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex, nofollow');
header('X-Content-Type-Options: nosniff');

function reply(int $status, array $body): never {
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    reply(405, ['ok' => false, 'error' => 'POST required']);
}
if (!in_array($_SERVER['HTTP_ORIGIN'] ?? '', ['https://inayadomestic.ae', 'https://www.inayadomestic.ae'], true)) {
    reply(403, ['ok' => false, 'error' => 'Invalid origin']);
}
if (stripos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') !== 0) {
    reply(415, ['ok' => false, 'error' => 'JSON required']);
}
if ((int)($_SERVER['CONTENT_LENGTH'] ?? 0) > 20000) {
    reply(413, ['ok' => false, 'error' => 'Request too large']);
}
$raw = file_get_contents('php://input', false, null, 0, 20001);
if ($raw === false || strlen($raw) > 20000) {
    reply(413, ['ok' => false, 'error' => 'Request too large']);
}
$request = json_decode($raw, true);
if (!is_array($request)) {
    reply(400, ['ok' => false, 'error' => 'Invalid JSON']);
}
$kind = $request['kind'] ?? '';
$types = ['contact' => 'Contact enquiry', 'booking' => 'Service enquiry', 'careers' => 'Career enquiry'];
if (!is_string($kind) || !isset($types[$kind]) || !is_array($request['fields'] ?? null)) {
    reply(422, ['ok' => false, 'error' => 'Invalid enquiry']);
}
$requestId = $request['requestId'] ?? '';
if (!is_string($requestId) || !preg_match('/^[a-zA-Z0-9-]{16,80}$/D', $requestId)) {
    reply(422, ['ok' => false, 'error' => 'Invalid request reference']);
}
$started = $request['startedAt'] ?? 0;
if (!is_numeric($started) || time() - (int)floor((float)$started / 1000) < 2 || time() - (int)floor((float)$started / 1000) > 86400) {
    reply(422, ['ok' => false, 'code' => 'form_time', 'serverTime' => time() * 1000, 'error' => 'Please review and submit the form again']);
}
$fields = $request['fields'];
if (isset($fields['website']) && $fields['website'] !== '') {
    reply(422, ['ok' => false, 'error' => 'Invalid enquiry']);
}
$limits = ['name' => 120, 'phone' => 40, 'email' => 254, 'service' => 160, 'position' => 160, 'nationality' => 100, 'area' => 160, 'plan' => 160, 'date' => 30, 'experience' => 30, 'message' => 5000];
$clean = [];
foreach ($limits as $key => $limit) {
    $value = $fields[$key] ?? '';
    if (!is_string($value) || strlen($value) > $limit || !preg_match('//u', $value)) {
        reply(422, ['ok' => false, 'field' => $key, 'error' => 'Invalid field: ' . $key]);
    }
    $clean[$key] = trim(preg_replace('/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/u', '', $value) ?? '');
}
if ($clean['name'] === '') {
    reply(422, ['ok' => false, 'field' => 'name', 'error' => 'Name required']);
}
if (!preg_match('/^[+\d(][\d\s()-]{6,39}$/D', $clean['phone']) || strlen(preg_replace('/\D/', '', $clean['phone'])) < 7) {
    reply(422, ['ok' => false, 'field' => 'phone', 'error' => 'Valid phone required']);
}
if (($kind === 'contact' && ($clean['email'] === '' || $clean['service'] === '' || $clean['message'] === '')) || ($clean['email'] !== '' && !filter_var($clean['email'], FILTER_VALIDATE_EMAIL))) {
    $field = ($clean['email'] === '' || !filter_var($clean['email'], FILTER_VALIDATE_EMAIL)) ? 'email' : ($clean['service'] === '' ? 'service' : 'message');
    reply(422, ['ok' => false, 'field' => $field, 'error' => 'Valid enquiry details required']);
}

$private = dirname(__DIR__) . '/tmp/inaya-website-forms';
if (!is_dir($private) && !@mkdir($private, 0700, true) && !is_dir($private)) {
    reply(503, ['ok' => false, 'error' => 'Delivery temporarily unavailable']);
}
$key = hash('sha256', $requestId);
$lock = @fopen($private . '/request-' . $key . '.lock', 'c');
if (!$lock || !flock($lock, LOCK_EX)) {
    reply(503, ['ok' => false, 'error' => 'Delivery temporarily unavailable']);
}
$receiptPath = $private . '/request-' . $key . '.json';
$payloadHash = hash('sha256', json_encode([$kind, $request['locale'] ?? 'en', $clean]));
function persistReceipt(string $path, array $receipt): bool {
    $json = json_encode($receipt);
    $temporary = $path . '.tmp';
    $file = @fopen($temporary, 'wb');
    if (!$file) return false;
    @chmod($temporary, 0600);
    $written = fwrite($file, $json);
    $saved = $written === strlen($json) && fflush($file) && fsync($file);
    fclose($file);
    if (!$saved || !@rename($temporary, $path)) {
        @unlink($temporary);
        return false;
    }
    return true;
}
if (is_file($receiptPath)) {
    $receipt = json_decode((string)file_get_contents($receiptPath), true);
    if (is_array($receipt) && ($receipt['ok'] ?? false) === true) {
        if (!hash_equals((string)($receipt['payloadHash'] ?? ''), $payloadHash)) {
            reply(409, ['ok' => false, 'error' => 'Request reference already used']);
        }
        reply(200, ['ok' => true, 'reference' => $receipt['reference']]);
    }
    // An interrupted/uncertain send must never automatically send again.
    reply(503, ['ok' => false, 'error' => 'Delivery requires office confirmation']);
}

// Limit by the actual remote address, never an untrusted forwarding header.
$ipKey = hash('sha256', (string)($_SERVER['REMOTE_ADDR'] ?? 'unknown'));
$rate = @fopen($private . '/rate-' . $ipKey . '.json', 'c+');
if (!$rate || !flock($rate, LOCK_EX)) {
    reply(503, ['ok' => false, 'error' => 'Delivery temporarily unavailable']);
}
$attempts = json_decode(stream_get_contents($rate) ?: '[]', true);
$now = time();
$attempts = is_array($attempts) ? array_values(array_filter($attempts, static fn($t) => is_int($t) && $t > $now - 86400)) : [];
if (count($attempts) >= 30 || count(array_filter($attempts, static fn($t) => $t > $now - 900)) >= 10) {
    header('Retry-After: 900');
    reply(429, ['ok' => false, 'error' => 'Please call the office or try later']);
}
$attempts[] = $now;
rewind($rate);
ftruncate($rate, 0);
fwrite($rate, json_encode($attempts));
fflush($rate);
flock($rate, LOCK_UN);
fclose($rate);

$reference = 'INAYA-' . gmdate('Ymd-His') . '-' . strtoupper(bin2hex(random_bytes(3)));
$subject = '[INAYA website] ' . $types[$kind] . ' ' . $reference;
$body = $types[$kind] . "\nReference: " . $reference . "\nLanguage: " . (($request['locale'] ?? '') === 'ar' ? 'Arabic' : 'English') . "\nReceived (UTC): " . gmdate('c') . "\n\n";
foreach ($clean as $key => $value) {
    if ($value !== '') $body .= ucfirst($key) . ":\n" . $value . "\n\n";
}
$body .= "Submitted through https://inayadomestic.ae/. This enquiry does not confirm a booking, job or interview.\n";
$headers = "From: INAYA Website <info@inayadomestic.ae>\r\nMIME-Version: 1.0\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: 8bit";
if ($clean['email'] !== '') $headers .= "\r\nReply-To: " . $clean['email'];

// Reserve this identifier durably BEFORE mail, retaining it if the final save fails.
if (!persistReceipt($receiptPath, ['ok' => false, 'reference' => $reference, 'payloadHash' => $payloadHash])) {
    reply(503, ['ok' => false, 'error' => 'Delivery temporarily unavailable']);
}
if (!@mail('info@inayadomestic.ae', $subject, $body, $headers, '-finfo@inayadomestic.ae')) {
    @unlink($receiptPath);
    error_log('INAYA website mail transport rejected reference ' . $reference);
    reply(503, ['ok' => false, 'error' => 'Delivery temporarily unavailable']);
}
$receipt = ['ok' => true, 'reference' => $reference];
if (!persistReceipt($receiptPath, $receipt + ['payloadHash' => $payloadHash])) {
    error_log('INAYA receipt needs office verification: ' . $reference);
    reply(503, ['ok' => false, 'error' => 'Delivery requires office confirmation']);
}
reply(200, $receipt);
