const upstream = 'https://script.google.com/macros/s/AKfycbynUtAHg39aV7TWvb00qDTuQ35wKJcY9I2-WkVrlK_WyuQJ-OfRgX9AsOv3q5lU2QPT/exec';
const headers = { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' };
const reply = (statusCode, body) => ({ statusCode, headers, body: JSON.stringify(body) });

export async function handler(event) {
  if (event.httpMethod !== 'POST') return reply(405, { ok: false });
  if (!event.body || event.body.length > 12000 || event.isBase64Encoded) return reply(400, { ok: false });
  const data = new URLSearchParams(event.body);
  if (data.get('website')) return reply(400, { ok: false });
  if (!data.get('fullName')?.trim() || !data.get('phone')?.trim()) return reply(400, { ok: false });
  const fields = ['fullName', 'phone', 'mainSymptom', 'landingPage', 'utmSource', 'utmMedium', 'utmCampaign', 'utmContent', 'utmTerm', 'adId'];
  const body = new URLSearchParams();
  for (const key of fields) body.set(key, (data.get(key) || '').slice(0, 500));
  try {
    const response = await fetch(upstream, { method: 'POST', body, signal: AbortSignal.timeout(20000) });
    const result = await response.json();
    if (!response.ok || result.ok !== true) return reply(502, { ok: false });
    return reply(200, { ok: true });
  } catch (_) {
    return reply(502, { ok: false });
  }
}
