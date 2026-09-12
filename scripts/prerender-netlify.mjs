import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const output = path.join(root, 'netlify-dist');
const workerPath = path.join(root, 'dist', 'server', 'index.js');
const routes = ['/', '/about', '/accessibility', '/adhd', '/cases', '/depression', '/faq', '/landing', '/mental-health', '/mental-health/adhd', '/mental-health/anxiety', '/mental-health/depression', '/mental-health/ocd', '/mental-health/ptsd', '/neurology', '/neuropuncture', '/ocd', '/ocd-treatment', '/privacy', '/ptsd', '/science', '/vagus-nerve', '/welcome'];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(path.join(root, 'dist', 'client'), output, { recursive: true });

const workerUrl = pathToFileURL(workerPath);
workerUrl.searchParams.set('netlify-prerender', `${process.pid}-${Date.now()}`);
const worker = (await import(workerUrl.href)).default;
if (!worker || typeof worker.fetch !== 'function') throw new Error('The built Worker does not expose fetch().');

for (const route of routes) {
  let response = await worker.fetch(new Request(`http://localhost${route}`, { headers: { accept: 'text/html' } }), {
    ASSETS: { fetch: async () => new Response('Not found', { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
  const redirect = response.headers.get('location');
  if (response.status >= 300 && response.status < 400 && redirect) {
    response = await worker.fetch(new Request(new URL(redirect, `http://localhost${route}`), { headers: { accept: 'text/html' } }), {
      ASSETS: { fetch: async () => new Response('Not found', { status: 404 }) },
    }, { waitUntil() {}, passThroughOnException() {} });
  }
  if (!response.ok) throw new Error(`Could not prerender ${route}: ${response.status}`);
  const target = route === '/' ? path.join(output, 'index.html') : path.join(output, route.slice(1), 'index.html');
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, await response.text(), 'utf8');
}

console.log(`Prerendered ${routes.length} routes to netlify-dist/`);
