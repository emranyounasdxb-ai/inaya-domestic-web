import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('cPanel root uses a language-aware HTTP redirect and preserves proven FTP deployment', async () => {
  const workflow = await readFile('.github/workflows/deploy-cpanel.yml', 'utf8');
  const htaccess = workflow.match(/cat > out\/\.htaccess <<'EOF'\r?\n([\s\S]*?)\r?\n\s*EOF/)?.[1];
  assert.ok(htaccess, 'generated cPanel .htaccess found');
  assert.match(htaccess, /RewriteCond %\{HTTP_HOST\} \^www\\\.inayadomestic\\\.ae\$ \[NC\]/);
  assert.match(htaccess, /RewriteRule \^ https:\/\/inayadomestic\.ae%\{REQUEST_URI\} \[R=301,L,NE\]/);
  assert.ok(htaccess.indexOf('RewriteCond %{HTTP_HOST}') < htaccess.indexOf('RewriteCond %{HTTP:Accept-Language}'));
  assert.match(htaccess, /RewriteCond %\{HTTP:Accept-Language\} \^ar\(\[-,;\]\|\$\) \[NC\]/);
  assert.match(htaccess, /RewriteRule \^\$ \/ar\/ \[R=302,L\]/);
  assert.match(htaccess, /RewriteRule \^\$ \/en\/ \[R=302,L\]/);
  assert.match(htaccess, /RewriteRule \^contact\/\?\$ https:\/\/inayadomestic\.ae\/en\/contact\/ \[R=301,L\]/);
  assert.ok(htaccess.indexOf('RewriteRule ^contact/?$') < htaccess.indexOf('RewriteCond %{HTTP:Accept-Language}'));
  assert.doesNotMatch(htaccess, /QSD|RewriteRule \^en\/contact/);
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

test('exported pages remove shared visa promises, retain neutral transfer FAQs and prioritize the service hero once', async () => {
  for (const locale of ['en', 'ar']) {
    for (const route of ['services', 'services/recruitment', 'services/maid-visa', 'services/maid-replacement', 'services/sponsorship-transfer', 'services/background-verification']) {
      const html = await readFile(`out/${locale}/${route}/index.html`, 'utf8');
      assert.doesNotMatch(html, /Hassle-free visa processing|Easy sponsorship transfer|Full assistance with maid visa application|Smooth maid transfer and sponsorship change services|معالجة تأشيرة دون عناء|نقل كفالة سهل|مساعدة كاملة في تقديم وتأشيرة الخادمة|خدمات نقل الخادمة وتغيير الكفالة بسلاسة/);
    }
    const transfer = await readFile(`out/${locale}/services/sponsorship-transfer/index.html`, 'utf8');
    const body = transfer.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
    assert.match(body, locale === 'ar' ? /الدعم المتاح لحالتك والمتطلبات والرسوم المطبقة/ : /support available for your case, applicable requirements and fees/);
    assert.doesNotMatch(body, /Request Matching|اطلب المطابقة|Transfer step guidance|Document checklist review|إرشاد خطوات النقل|مراجعة قائمة المستندات/);
    assert.doesNotMatch(body, /not (?:yet )?confirmed|لم يتأكد|غير مؤكد هنا/);
    const monthly = await readFile(`out/${locale}/services/monthly-maid-contract/index.html`, 'utf8');
    const hero = monthly.match(/<img\b[^>]*src="\/images\/services\/monthly-maid-contract\.webp"[^>]*>/)?.[0];
    assert.ok(hero);
    assert.match(hero, /fetchPriority="high"/i);
    assert.match(hero, /loading="eager"/);
    assert.equal([...monthly.matchAll(/<link\b[^>]*rel="preload"[^>]*href="\/images\/services\/monthly-maid-contract\.webp"[^>]*>/g)].length, 1, 'one hero preload');
    for (const route of ['', 'maid-services-ajman', 'services/monthly-maid-contract']) {
      const html = await readFile(`out/${locale}/${route ? route + '/' : ''}index.html`, 'utf8');
      assert.doesNotMatch(html, /<link\b[^>]*rel="preload"[^>]*as="font"/, 'unused locale fonts are not eagerly fetched');
    }
    const ajman = await readFile(`out/${locale}/maid-services-ajman/index.html`, 'utf8');
    assert.match(ajman, new RegExp(`href="/${locale}/pricing/"`));
    for (const slug of ['live-in-maid', 'full-time-maid', 'part-time-maid', 'monthly-maid-contract', 'nanny']) {
      const html = await readFile(`out/${locale}/services/${slug}/index.html`, 'utf8');
      assert.match(html, new RegExp(`href="/${locale}/maid-services-ajman/"`));
    }
  }
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
