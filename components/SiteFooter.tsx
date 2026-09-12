import Link from "next/link";

export default function SiteFooter() {
  return <footer className="editorial-footer"><div className="editorial-shell editorial-footer-grid">
    <div className="editorial-footer-brand"><p>NEURO<span>•</span>ZEN</p><small>נוירופונקטורה בתל אביב<br />טיפול ממוקד במערכת העצבים, עם מטרות אישיות ומעקב לאורך הדרך.</small></div>
    <div><strong>הקליניקה</strong><p>עילאי פארן<br />שאול המלך 39, בית הדר דפנה, תל אביב</p><a href="https://wa.me/972548082487">וואטסאפ</a><a href="tel:0548082487" dir="ltr">054-808-2487</a></div>
    <div><strong>להכיר את הטיפול</strong><Link href="/neuropuncture">נוירופונקטורה</Link><Link href="/vagus-nerve">עצב הוואגוס והגירוי האוזני</Link><Link href="/mental-health">בריאות הנפש</Link><Link href="/neurology">נוירולוגיה ושיקום</Link><Link href="/science">מחקרים</Link><Link href="/cases">מקרים מהקליניקה</Link><Link href="/about">אודות</Link></div>
    <div><strong>מידע למטופלים</strong><Link href="/faq">שאלות ותשובות</Link><Link href="/privacy">מדיניות פרטיות</Link><Link href="/accessibility">הצהרת נגישות</Link></div>
  </div><p className="editorial-shell copy-footer-note">המידע באתר הוא כללי. ההתאמה לטיפול נקבעת באופן אישי, והטיפול אינו מחליף אבחון או מעקב רפואי.</p></footer>;
}
