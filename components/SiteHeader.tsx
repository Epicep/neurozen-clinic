"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["נוירופונקטורה", "/neuropuncture"],
  ["תהליך הטיפול", "/#process"],
  ["מחקרים", "/science"],
  ["מקרים מהקליניקה", "/cases"],
  ["אודות", "/about"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="editorial-header">
    <div className="editorial-header-inner">
      <Link href="/" className="editorial-logo" onClick={() => setOpen(false)}>
        <span>NEURO<span>•</span>ZEN</span><small>המרכז לנוירופונקטורה בישראל</small>
      </Link>
      <nav aria-label="ניווט ראשי">
        <Link href="/#treatments">תחומי טיפול</Link>
        <Link href="/mental-health">בריאות הנפש</Link>
        {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <a className="editorial-header-cta" href="https://wa.me/972548082487" target="_blank" rel="noreferrer">לבדיקת התאמה בוואטסאפ</a>
      <button type="button" className="editorial-menu-button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} onKeyDown={event => { if (event.key === 'Escape') setOpen(false); }}>{open ? "סגירה" : "תפריט"}<span aria-hidden="true">{open ? ' ×' : ' ☰'}</span></button>
    </div>
    {open && <nav id="mobile-navigation" className="editorial-mobile-menu" aria-label="ניווט במובייל" onKeyDown={event => { if (event.key === 'Escape') setOpen(false); }}>
      <Link href="/#treatments" onClick={() => setOpen(false)}>תחומי טיפול</Link>
      <Link href="/mental-health" onClick={() => setOpen(false)}>בריאות הנפש</Link>
      {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      <a href="https://wa.me/972548082487">לבדיקת התאמה בוואטסאפ</a>
    </nav>}
  </header>;
}
