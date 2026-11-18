import { readFile } from 'node:fs/promises';

const origin = 'https://neurozen-clinic.com';
const key = '1fbc5a6d9fe0ae38a233b61122eff69a';
const dryRun = process.argv.includes('--dry-run');
const paths = process.argv.slice(2).filter((arg) => arg !== '--dry-run');

if (paths.length === 0) {
  console.error('Usage: node scripts/submit-indexnow.mjs [--dry-run] /changed-page/ [...]');
  process.exitCode = 1;
} else {
  const sitemap = await readFile(new URL('../public/sitemap.xml', import.meta.url), 'utf8');
  const allowed = new Set([...sitemap.matchAll(/<loc>(https:\/\/neurozen-clinic\.com\/[^<]*)<\/loc>/g)].map((match) => match[1]));
  const urlList = [...new Set(paths.map((path) => {
    if (!path.startsWith('/') || path.startsWith('//') || path.includes('?') || path.includes('#')) {
      throw new Error(`Expected a clean site path: ${path}`);
    }
    const url = new URL(path, origin).href;
    if (!allowed.has(url)) throw new Error(`URL is not in the public sitemap: ${url}`);
    return url;
  }))];
  const keyFile = await readFile(new URL(`../public/${key}.txt`, import.meta.url), 'utf8');
  if (keyFile.trim() !== key) throw new Error('IndexNow ownership key does not match its file');

  const payload = {
    host: new URL(origin).host,
    key,
    keyLocation: `${origin}/${key}.txt`,
    urlList,
  };
  if (dryRun) {
    console.log(JSON.stringify(payload, null, 2));
  } else {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(`IndexNow returned HTTP ${response.status}: ${await response.text()}`);
    console.log(`IndexNow accepted ${urlList.length} updated URL(s): HTTP ${response.status}`);
  }
}
