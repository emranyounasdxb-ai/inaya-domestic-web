import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

test('approved identity and hours match visible bilingual content and visa scope retains authority limits', async () => {
  const legalName = 'INAYA DOMESTIC WORKERS SERVICES (S.P.S - L.L.C)';
  for (const locale of ['en', 'ar']) {
    const about = await readFile(`out/${locale}/about/index.html`, 'utf8');
    assert.ok(about.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '').includes(legalName), 'visible legal identity');
    const contact = await readFile(`out/${locale}/contact/index.html`, 'utf8');
    const nodes = [...contact.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
      .flatMap(match => JSON.parse(match[1])['@graph'] ?? []);
    const organization = nodes.find(node => node['@id'] === 'https://inayadomestic.ae/#organization');
    assert.equal(organization.legalName, legalName);
    assert.deepEqual(organization.openingHoursSpecification.dayOfWeek, ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday']);
    assert.equal(organization.openingHoursSpecification.opens, '09:00');
    assert.equal(organization.openingHoursSpecification.closes, '21:00');
    const visible = contact.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
    assert.match(visible, locale === 'en' ? /Saturday–Thursday: 9:00 AM–9:00 PM\. Friday: Closed/ : /السبت إلى الخميس: 9 صباحاً إلى 9 مساءً\. الجمعة: مغلق/);
    for (const route of ['maid-visa', 'sponsorship-transfer']) {
      const html = await readFile(`out/${locale}/services/${route}/index.html`, 'utf8');
      const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
      for (const phrase of locale === 'en'
        ? ['document guidance', 'application submission', 'status change', 'medical processing', 'Emirates ID processing', 'insurance processing', 'end-to-end case processing']
        : ['إرشاد المستندات', 'تقديم الطلبات', 'تعديل الوضع', 'إجراءات الفحص الطبي', 'الهوية الإماراتية', 'التأمين', 'من البداية إلى النهاية']) assert.ok(body.includes(phrase), `${locale}/${route}: ${phrase}`);
      assert.match(body, locale === 'en' ? /Government approval and outcomes are not guaranteed/ : /لا تضمن عناية الموافقة الحكومية أو النتيجة/);
      assert.match(body, locale === 'en' ? /not clinical care or treatment/ : /ليس الرعاية السريرية أو العلاج/);
      assert.doesNotMatch(body, /guidance or submission|whether proposed support includes application submission|الإرشاد أو تقديم الطلب/);
    }
    for (const route of ['terms', 'privacy-policy', 'faq']) {
      const html = await readFile(`out/${locale}/${route}/index.html`, 'utf8');
      const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
      assert.match(body, locale === 'en' ? /locally/ : /محلياً/);
      assert.doesNotMatch(body, /You can submit the request form|The team reviews your request, then contacts you|يقوم الفريق بمراجعة الطلب ثم يتواصل معك/);
    }
  }
});

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
    assert.match(body, locale === 'ar' ? /يشمل الدعم المتكامل/ : /Complete visa-processing support/);
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
      const fontPreloads = [...html.matchAll(/<link\b[^>]*rel="preload"[^>]*as="font"[^>]*>/g)].map(match => match[0]);
      assert.equal(fontPreloads.length, locale === 'ar' ? 3 : 0, 'only the three critical used Arabic font faces are preloaded');
      if (locale === 'ar') {
        assert.deepEqual(fontPreloads.map(tag => tag.match(/href="([^"]+)"/)[1]).sort(), ['/fonts/inaya-arabic-body-core-eb3aa9ff2a7a.woff2', '/fonts/inaya-arabic-body-latin.woff2', '/fonts/inaya-arabic-heading-700.woff2']);
        for (const tag of fontPreloads) assert.match(tag, /crossorigin="(?:anonymous)?"/i, 'empty crossorigin is the equivalent anonymous mode emitted by React');
      }
    }
    const ajman = await readFile(`out/${locale}/maid-services-ajman/index.html`, 'utf8');
    assert.match(ajman, new RegExp(`href="/${locale}/pricing/"`));
    for (const slug of ['live-in-maid', 'full-time-maid', 'part-time-maid', 'monthly-maid-contract', 'nanny']) {
      const html = await readFile(`out/${locale}/services/${slug}/index.html`, 'utf8');
      assert.match(html, new RegExp(`href="/${locale}/maid-services-ajman/"`));
    }
  }
});

test('Arabic fonts are locale-scoped, preserve exact original faces and fallbacks, and keep homepage card images lazy', async () => {
  const font = await readFile('public/fonts/inaya-arabic-body-core-eb3aa9ff2a7a.woff2');
  assert.equal(font.subarray(0, 4).toString(), 'wOF2');
  assert.equal(createHash('sha256').update(font).digest('hex'), 'eb3aa9ff2a7a7ccafbd858042afbf9378a64df6db01a6a89eb190af6ac6c0c37');
  assert.ok(font.length < 56000, 'Arabic body font remains below 56 KB');
  assert.match(await readFile('public/fonts/OFL-NotoSansArabic.txt', 'utf8'), /SIL OPEN FONT LICENSE Version 1\.1/);
  assert.match(await readFile('public/fonts/OFL-IBMPlexSansArabic.txt', 'utf8'), /SIL OPEN FONT LICENSE Version 1\.1/);
  const exactFaces = {
    'inaya-arabic-body-latin.woff2': '20d51311e187e0ff5be9d6fe24f099e97be6cc583078d6f271c74d68920cd1e0',
    'inaya-arabic-heading-400.woff2': '4ed189e8653e9303ec1e1448a6025f838ecd19fe4a5f4f7889b8394b3c5378fb',
    'inaya-arabic-heading-500.woff2': 'bf2b68e78ca6e9c6e560634ecc33c1f11947b9ffaff1b6d9b42730ce85f696da',
    'inaya-arabic-heading-600.woff2': '0ccee44455f545eb6b4083f77e5d15e7c9cd514007870167c8c69d1ba7631e26',
    'inaya-arabic-heading-700.woff2': 'c6e0419cba62fba9e573686eaa1b503cae2f332e4ab1b0acff5cde599dee5d7a'
  };
  for (const [name, expected] of Object.entries(exactFaces)) {
    const bytes = await readFile(`public/fonts/${name}`);
    assert.equal(createHash('sha256').update(bytes).digest('hex'), expected, `${name}: unmodified existing typography`);
  }
  for (const locale of ['en', 'ar']) {
    const html = await readFile(`out/${locale}/index.html`, 'utf8');
    const body = html.match(/<body\b[^>]*>/)?.[0];
    if (locale === 'ar') {
      assert.match(body, /INAYA Arabic Body/);
      assert.match(body, /Noto Sans Arabic Fallback/);
      assert.match(body, /INAYA Arabic Heading/);
      assert.match(body, /IBM Plex Sans Arabic Fallback/);
    } else assert.doesNotMatch(body, /INAYA Arabic (?:Body|Heading)/);
    const cards = [...html.matchAll(/<a\b[^>]*class="[^"]*curated-discipline-card[^>]*>([\s\S]*?)<\/a>/g)];
    assert.equal(cards.length, 3);
    for (const card of cards) {
      assert.match(card[1], /<picture\b/);
      assert.match(card[1], /srcSet="\/optimized\/images\/services\//);
      assert.match(card[1], /<img\b[^>]*loading="lazy"/);
    }
  }
  const css = await readFile('app/curated-discipline-images.css', 'utf8');
  assert.doesNotMatch(css, /background-image:|display: none/);
  assert.match(css, /\.curated-discipline-card > picture\s*\{\s*display: block;/);
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
