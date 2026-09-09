'use client';
import { FormEvent, useState } from 'react';

const GOOGLE_APPS_SCRIPT_URL = 'PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';

export default function LeadForm() {
  const [sending, setSending] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    const data = new FormData(event.currentTarget);
    try {
      await fetch(GOOGLE_APPS_SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: data });
    } finally {
      window.location.href = '/thank-you.html';
    }
  }
  return <form onSubmit={submit} className="landing-lead-form" dir="rtl">
    <label>שם מלא<input name="fullName" required autoComplete="name" /></label>
    <label>טלפון<input name="phone" type="tel" required autoComplete="tel" /></label>
    <label>תסמין עיקרי<select name="mainSymptom" defaultValue="" required><option value="" disabled>בחירת תסמין</option><option>דפיקות לב ודריכות בגוף</option><option>קשיי שינה ועוררות מתמדת</option><option>מחשבות טורדניות ולופים</option><option>אחר</option></select></label>
    <button type="submit" disabled={sending}>{sending ? 'שולח פרטים...' : 'לבדיקת התאמה ותיאום מפגש ב־500 ₪ ←'}</button>
  </form>;
}
