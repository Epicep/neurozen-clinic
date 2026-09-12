import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';

const { default: worker } = await import('../dist/server/index.js');
const routes = ['/', '/about', '/faq', '/mental-health', '/mental-health/anxiety', '/mental-health/depression', '/mental-health/ptsd', '/mental-health/ocd', '/mental-health/adhd', '/neurology', '/neuropuncture', '/science', '/cases', '/vagus-nerve', '/landing', '/privacy', '/accessibility'];
const html = new Map();

// The old test expected a development marker that is absent from the site's layout.
// Exercise the real production contract instead: RTL pages, content and navigation.
test('all clinic pages render RTL content and usable navigation', async () => {
  assert.equal(typeof worker.fetch, 'function');
  const hosting=JSON.parse(await readFile(new URL('../dist/.openai/hosting.json',import.meta.url),'utf8'));
  assert.equal(hosting.project_id,'appgprj_6a70565f4fec819189abeb689742b376');
  for (const route of routes) {
    const response=await worker.fetch(new Request(`http://localhost${route}`,{headers:{accept:'text/html'}}),{ASSETS:{fetch:async()=>new Response('Not found',{status:404})}},{waitUntil(){},passThroughOnException(){}});
    assert.equal(response.status,200,route);
    assert.match(response.headers.get('content-type')??'',/^text\/html\b/);
    const body=await response.text();
    html.set(route,body);
    assert.match(body,/<html[^>]*lang="he"[^>]*dir="rtl"/,route);
    assert.equal((body.match(/<h1(?:\s|>)/g)??[]).length,1,`${route}: one primary heading`);
    assert.match(body,/id="main-content"/,route);
    assert.match(body,/href="https:\/\/wa.me\/972548082487"/,route);
    assert.ok(!body.includes(':::after'),`${route}: no content markers`);
    for (const [,href] of body.matchAll(/<a[^>]*href="(\/[^\"]*)"/g)) {
      const [target,anchor]=href.split('#');
      assert.ok(routes.includes(target || route),`${route}: unknown target ${href}`);
      if(anchor && (!target || target===route)) assert.ok(body.includes(`id="${anchor}"`),`${route}: missing anchor ${anchor}`);
    }
  }
});

test('approved practical information, research links and case figures remain present',()=>{
  const faq=html.get('/faq');
  assert.ok(faq.includes('45–60 דקות'));
  assert.ok(faq.includes('אין חובה להתחייב מראש'));
  assert.ok(faq.includes('הטיפול מיועד לכל הגילאים'));
  assert.ok(faq.includes('התאמה במרשם הטיפול'));
  assert.ok(faq.includes('17:00'));
  assert.ok((faq.match(/<details/g)??[]).length>=20);
  assert.ok(html.get('/').includes('טיפול ממוקד במערכת העצבים'));
  assert.ok(html.get('/').includes('id="process"'));
  assert.ok(html.get('/').includes('id="treatments"'));
  for (const route of ['/mental-health/anxiety','/mental-health/depression','/mental-health/ptsd','/mental-health/ocd','/mental-health/adhd','/neurology','/neuropuncture']) assert.ok(html.get(route).includes('href="/science"'),route);
  assert.ok(html.get('/mental-health/ptsd').includes('מדד תסמיני פוסט־טראומה'));
  assert.ok(html.get('/mental-health/ptsd').includes('ל־28'));
});

test('research references, expandable methods and cross-page section links resolve',()=>{
  const science = html.get('/science');
  assert.ok(!science.includes('העמוד בבנייה'));
  assert.ok(!science.includes('נמצא בהכנה'));
  assert.equal((science.match(/class="research-details"/g)??[]).length,13);
  const sources = new Set([...science.matchAll(/<a[^>]*href="(https:\/\/(?:pubmed\.ncbi\.nlm\.nih\.gov|pmc\.ncbi\.nlm\.nih\.gov|jamanetwork\.com|journals\.plos\.org)[^"]*)"/g)].map(match=>match[1]));
  assert.equal(sources.size,10);
  for (const [route,body] of html) {
    for (const [,target,anchor] of body.matchAll(/<a[^>]*href="(\/[^"#]*)#([^"]+)"/g)) {
      assert.ok(html.get(target||route)?.includes(`id="${anchor}"`),`${route}: missing target ${target}#${anchor}`);
    }
  }
  assert.ok(science.includes('נמוכה עד נמוכה מאוד'));
  assert.ok(science.includes('מחקר מנגנון בבעלי חיים'));
  for (const source of ['oaskpublishers.com/assets/article-pdf','journals.sagepub.com/doi/full/10.1089/acu.2020.1514','jaimonline.org/neuropuncture-solidifying-acupunctures-authenticity']) assert.ok(science.includes(source),source);
  assert.ok(science.includes('2 מטופלים'));
});

test('clinic cases preserve mixed outcomes and publish only anonymized copy',()=>{
  const page = html.get('/cases');
  assert.equal((page.match(/class="clinic-case"/g)??[]).length,13,'duplicate source case is merged');
  for (const forbidden of ['GAD-7','PHQ-9','PCL-5','לוריוון','פריזמה','כריתת','מילואים','נישואין','לגיל 18','docs.google.com']) assert.ok(!page.includes(forbidden),`private or technical source detail: ${forbidden}`);
  assert.ok(page.includes('תמצית העדות בניסוח מעובד'));
  assert.ok(page.includes('תחושה אישית של שינוי קל בלבד'));
  assert.ok(page.includes('עלייה של 2 נקודות'));
  assert.ok(page.includes('במקרה זה לא נמסרו ציוני התחלה וסיום'));
  assert.ok(page.includes('ירידה של 33 נקודות'));
  assert.ok(page.includes('ירידה של 24 נקודות'));
  assert.ok(page.includes('ללא שינוי'));
  assert.ok(!/\d\s*%/.test(page),'no percentages presented as the main result');
});

test('vagus page replaces placeholder and distinguishes stimulation methods',()=>{
  const page=html.get('/vagus-nerve');
  assert.ok(!page.includes('העמוד בבנייה'));
  assert.ok(!page.includes('נמצא בהכנה'));
  for(const term of ['taVNS','paVNS','ABVN','מחטים','פרקינסון','מחלות מעי','כאב']) assert.ok(page.includes(term));
  assert.ok(page.includes('אינו מבודד את תרומת הגירוי באוזן לבדו'));
  assert.equal((page.match(/<details/g)??[]).length,5);
  assert.ok(page.includes('href="/science#auricular"'));
  assert.ok(page.includes('href="/cases"'));
});
