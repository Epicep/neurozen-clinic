'use client';
import { FormEvent, useState } from 'react';


export default function LeadForm() {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setSending(true);
    const data = new FormData(event.currentTarget);
    const query = new URLSearchParams(window.location.search);
    data.set('landingPage', window.location.origin + window.location.pathname);
    data.set('utmSource', query.get('utm_source') || '');
    data.set('utmMedium', query.get('utm_medium') || '');
    data.set('utmCampaign', query.get('utm_campaign') || '');
    data.set('utmContent', query.get('utm_content') || '');
    data.set('utmTerm', query.get('utm_term') || '');
    data.set('adId', query.get('ad_id') || '');
    try {
      const body = new URLSearchParams();
      data.forEach((value, key) => body.set(key, String(value)));
      const response = await fetch('/.netlify/functions/submit-lead', { method: 'POST', body });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error('Lead not confirmed');
      const lead = { id: `lead-${Date.now()}-${Math.random().toString(36).slice(2)}`, at: Date.now() };
      try { sessionStorage.setItem('neurozen-confirmed-lead', JSON.stringify(lead)); } catch (_) {}
      window.dispatchEvent(new CustomEvent('neurozen:lead-confirmed', { detail: lead }));
      await new Promise(resolve => setTimeout(resolve, 500));
      window.location.href = '/thank-you.html';
    } catch {
      setError('השליחה לא הושלמה. הפרטים נשארו בטופס — אפשר לנסות שוב או לפנות אלינו ישירות.');
    } finally {
      setSending(false);
    }
  }
  return <form onSubmit={submit} className="landing-lead-form" dir="rtl">
    <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="landing-honeypot" />
    <label>שם מלא<input name="fullName" required autoComplete="name" /></label>
    <label>טלפון<input name="phone" type="tel" required autoComplete="tel" /></label>
    <label>תסמין עיקרי<select name="mainSymptom" defaultValue="" required><option value="" disabled>בחירת תסמין</option><option>דפיקות לב ודריכות בגוף</option><option>קשיי שינה ועוררות מתמדת</option><option>מחשבות טורדניות ולופים</option><option>אחר</option></select></label>
    <button type="submit" disabled={sending}>{sending ? 'שולח פרטים...' : 'לבדיקת התאמה ותיאום מפגש ב־500 ₪ ←'}</button>
    {error && <div role="alert"><p>{error}</p><a href="https://wa.me/972548082487">שליחת הודעה בוואטסאפ</a> · <a href="tel:0548082487">התקשרו אלינו</a></div>}
  </form>;
}
