import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import path from 'node:path';

const output = path.resolve('netlify-dist');
const conditions = {
  fibromyalgia: 'pain',
  'peripheral-neuropathy': 'pain',
  'trigeminal-neuralgia': 'pain',
  'parkinsons-disease': 'neurology',
  'post-stroke-rehabilitation': 'neurology',
  'functional-neurological-disorder': 'neurology',
};
const pages = [...Object.keys(conditions), 'pain', 'neurology'];
const html = slug => readFile(path.join(output, slug, 'index.html'), 'utf8');

test('expanded pages have complete static content, canonical URLs and working internal destinations', async () => {
  const sitemap = await readFile(path.join(output, 'sitemap.xml'), 'utf8');
  for (const slug of pages) {
    const body = await html(slug);
    assert.equal((body.match(/<h1(?:\s|>)/g) ?? []).length, 1, slug);
    assert.match(body, /<html[^>]*lang="he"[^>]*dir="rtl"/);
    assert.ok(body.includes(`rel="canonical" href="https://neurozen-clinic.com/${slug}/"`), slug);
    assert.ok(sitemap.includes(`<loc>https://neurozen-clinic.com/${slug}/</loc>`), slug);
    assert.ok(body.includes('https://wa.me/972548082487'), slug);
    assert.ok(!body.includes(':::after'), slug);
    for (const [, href] of body.matchAll(/<a[^>]*href="([^"]+)"/g)) {
      if (!href.startsWith('/') && !href.startsWith('#')) continue;
      const url = new URL(href.replaceAll('&amp;', '&'), `https://neurozen-clinic.com/${slug}/`);
      const target = path.join(output, url.pathname, 'index.html');
      const targetBody = await readFile(target, 'utf8');
      if (url.hash) assert.ok(targetBody.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${slug}: ${href}`);
    }
    for (const [, asset] of body.matchAll(/(?:href|src)="(\/assets\/[^"?]+)"/g)) await access(path.join(output, asset));
  }
});

test('condition pages point back to their hub in visible and structured navigation', async () => {
  for (const [slug, hub] of Object.entries(conditions)) {
    const body = await html(slug);
    const nav = body.match(/<nav class="copy-breadcrumb"[^>]*>([\s\S]*?)<\/nav>/)?.[1];
    assert.ok(nav?.includes(`href="/${hub}/"`), slug);
    const data = [...body.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(x => JSON.parse(x[1]));
    const crumbs = data.find(x => x['@type'] === 'BreadcrumbList').itemListElement;
    assert.equal(crumbs.length, 3, slug);
    assert.equal(crumbs[1].item, `https://neurozen-clinic.com/${hub}/`, slug);
    assert.equal(crumbs[2].position, 3, slug);
  }
  for (const [slug, hub] of Object.entries(conditions)) assert.ok((await html(hub)).includes(`href="/${slug}/"`), slug);
});

test('reviewed content and release exclusions are preserved', async () => {
  const parkinsons = await html('parkinsons-disease');
  for (const required of ['UPDRS', 'DBS', '23301468', '60 אנשים', 'בדם', 'זמן נטילת התרופה']) assert.ok(parkinsons.includes(required), required);
  assert.ok(!(await html('functional-neurological-disorder')).includes('פרכוס'));
  assert.ok((await html('functional-neurological-disorder')).includes('תנועות לא רצוניות'));
  assert.ok((await html('post-stroke-rehabilitation')).includes('גירוי תוך כדי תרגול'));
  assert.ok((await html('peripheral-neuropathy')).includes('סוגי סיבי העצב'));
  await assert.rejects(access(path.join(output, 'brain-explorer')));
  await assert.rejects(access(path.join(output, 'brain-atlas')));
  assert.equal(await readFile(path.join(output, 'google1cf6f145e50b16dc.html'), 'utf8'), await readFile('public/google1cf6f145e50b16dc.html', 'utf8'));
});
