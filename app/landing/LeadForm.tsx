'use client';
import { FormEvent, useState } from 'react';

const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbynUtAHg39aV7TWvb00qDTuQ35wKJcY9I2-WkVrlK_WyuQJ-OfRgX9AsOv3q5lU2QPT/exec';

export default function LeadForm() {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    if (!GOOGLE_APPS_SCRIPT_URL.startsWith('https://script.google.com/macros/s/')) {
      setError('הטופס אינו זמין כרגע. אפשר לשלוח לנו הודעה בוואטסאפ או להתקשר, ונשמח לעזור.');
      return;
    }
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
      await fetch(GOOGLE_APPS_SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: data });
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
