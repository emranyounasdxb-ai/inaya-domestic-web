import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('cPanel root uses a language-aware HTTP redirect and preserves proven FTP deployment', async () => {
  const workflow = await readFile('.github/workflows/deploy-cpanel.yml', 'utf8');
  const htaccess = workflow.match(/cat > out\/\.htaccess <<'EOF'\r?\n([\s\S]*?)\r?\n\s*EOF/)?.[1];
  assert.ok(htaccess, 'generated cPanel .htaccess found');
  assert.match(htaccess, /RewriteCond %\{HTTP:Accept-Language\} \^ar\(\[-,;\]\|\$\) \[NC\]/);
  assert.match(htaccess, /RewriteRule \^\$ \/ar\/ \[R=302,L\]/);
  assert.match(htaccess, /RewriteRule \^\$ \/en\/ \[R=302,L\]/);
  assert.match(htaccess, /Header always merge Vary Accept-Language/);
  assert.match(htaccess, /Header always set Cache-Control "private, no-store"/);
  assert.match(workflow, /on:\s*\n\s*push:\s*\n\s*branches:\s*\n\s*- main/);
  assert.match(workflow, /lftp -u "\$CPANEL_FTP_USER","\$CPANEL_FTP_PASSWORD" "\$CPANEL_FTP_HOST" <<EOF/);
  assert.match(workflow, /set ftp:ssl-allow no/);
  assert.match(workflow, /mirror --reverse --verbose --parallel=2/);
  assert.match(workflow, /\.\/out\/ "\$CPANEL_FTP_SERVER_DIR"/);
  assert.doesNotMatch(workflow, /set ftp:ssl-(?:force|protect-data) yes/);
  assert.doesNotMatch(workflow, /set ssl:verify-certificate yes/);
});

test('both FAQ exports include all 100 answers in initial HTML while showing one category', async () => {
  for (const locale of ['en', 'ar']) {
    const html = await readFile(`out/${locale}/faq/index.html`, 'utf8');
    const document = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
    const panels = [...document.matchAll(/<div\b[^>]*data-faq-panel="[^"]+"[^>]*>/g)].map((match) => match[0]);
    assert.equal(panels.length, 5, `${locale}: category panels`);
    assert.equal(panels.filter((panel) => /\bhidden(?:="")?/.test(panel)).length, 4, `${locale}: inactive panels`);
    assert.equal([...document.matchAll(/<details\b/g)].length, 100, `${locale}: FAQ count`);
    assert.match(document, locale === 'en' ? /Are your prices fixed\?/ : /هل الأسعار ثابتة؟/, `${locale}: inactive pricing answer is present`);
  }
});
