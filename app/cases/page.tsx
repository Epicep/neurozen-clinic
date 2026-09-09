import type { Metadata } from 'next';
import Link from 'next/link';
import { cases } from '@/content/cases';
import './cases.css';

export const metadata: Metadata = {
  title: 'מקרים מהקליניקה',
  description: 'סיפורים אישיים מתוך המעקב בקליניקת NeuroZen: חוויות המטופלים ושינויים במדדי חרדה, מצב רוח ושינה, ללא פרטים מזהים.',
  alternates: {canonical:'/cases'},
  openGraph: {title:'מקרים מהקליניקה | NeuroZen',description:'הסיפור שמאחורי המספרים: חוויות אישיות ושינוי לאורך הטיפול.',url:'/cases',locale:'he_IL',type:'website'}
};

export default function CasesPage() {
  return <main id="main-content" className="editorial-home reviewed-copy clinic-cases">
    <section className="copy-page-hero"><div className="editorial-shell copy-page-heading">
      <nav className="copy-breadcrumb" aria-label="פירורי לחם"><Link href="/">דף הבית</Link><span> / מקרים מהקליניקה</span></nav>
      <p className="editorial-eyebrow">הסיפור שמאחורי המספרים</p>
      <h1>מקרים מהקליניקה</h1>
      <div className="copy-intro"><p>לחזור לישון. לצאת מהמיטה. להרגיש פחות דרוכים, או למצוא שוב עניין בחיים. מאחורי כל מדד יש חוויה אישית — והיא במרכז הסיפורים שלפניכם.</p>
        <p>העמוד מציג תיאורים מתוך המעקב בקליניקה, לצד ציוני התחלה וסיום. הדגש הוא על מה שהשתנה בחיי היומיום, וגם על הקשיים שנותרו.</p>
        <div className="case-privacy-note"><strong>הפרטיות קודמת לסיפור.</strong><p>הציטוטים במרכאות מובאים מתוך דברי המטופלים. קטעים הושמטו לשמירה על הפרטיות ולמיקוד, ומסומנים ב־[…]. סיפורי הרקע מוצגים בתמצית, ללא שמות או פרטים מזהים.</p></div>
        <div className="copy-links"><Link href="/cases#stories">לסיפורי המטופלים</Link><Link href="/cases#reading">איך לקרוא את המדדים?</Link></div>
      </div>
    </div></section>
    <section id="reading" className="copy-section"><div className="editorial-shell copy-reading-width">
      <h2>מה המספרים מספרים?</h2>
      <p>בכל מדד מוצגים הציון לפני התהליך, הציון בסיומו והשינוי בנקודות. במדדים המוצגים כאן, ציון נמוך יותר משקף פחות תסמינים שדווחו. שמות המדדים מתארים בשפה פשוטה את מה שנמדד.</p>
      <p>אלו ציונים מתוך שאלוני דיווח עצמי. למדדים שונים יש סולמות שונים, ולכן אין להשוות את מספר הנקודות בין מדד חרדה למדד שינה או פוסט־טראומה. ציון בודד אינו אבחנה ואינו קביעה של החלמה.</p>
      <p>אלה מקרים נבחרים, ללא קבוצת ביקורת. הם אינם מייצגים שיעור הצלחה ואינם מאפשרים לקבוע שהטיפול לבדו גרם לשינוי. תגובה אישית, טיפול נוסף ונסיבות החיים עשויים להשפיע על התוצאה.</p>
    </div></section>
    <section id="stories" className="case-stories"><div className="editorial-shell">
      <div className="case-section-title"><p className="section-kicker">חוויות מתוך הדרך</p><h2>השינוי בחיים, לצד השינוי במדדים</h2></div>
      {cases.map(item=><article id={item.id} key={item.id} className="clinic-case">
        <header><p className="section-kicker">{item.topic} · {item.sessions} טיפולים</p><h3>{item.title}</h3></header>
        {item.quote && <aside className="case-experience" aria-label="חוויה אישית של המטופל או המטופלת"><span>חוויה אישית של המטופל/ת</span><blockquote>״{item.quote}״</blockquote>{item.quoteNote && <small>{item.quoteNote}</small>}</aside>}
        <div className="case-story-grid"><div><h4>נקודת ההתחלה</h4><p>{item.story}</p>
          {item.initialQuote && <aside className="case-experience case-initial-quote"><span>במילותיה, בתחילת הטיפול</span><blockquote>״{item.initialQuote}״</blockquote></aside>}
        </div><div className="case-results"><h4>השינוי שנמדד</h4>
          {item.metrics.length ? <dl className="case-metrics">{item.metrics.map(metric=>{
            const delta=metric.after-metric.before;
            return <div key={metric.label} className={`case-metric${delta>0?' metric-increase':''}`}><dt>{metric.label}</dt><dd><div className="metric-pair"><span><small>לפני</small><b>{metric.before}</b></span><span className="metric-arrow" aria-hidden="true">←</span><span><small>אחרי</small><b>{metric.after}</b></span></div><span className="metric-change">{delta===0?'ללא שינוי':`${delta>0?'עלייה':'ירידה'} של ${Math.abs(delta)} נקודות`}</span>{delta>0&&<small className="metric-context">יותר קשיים בדיווח בסיום</small>}</dd></div>;
          })}</dl>:<p className="case-no-scores">במקרה זה לא נמסרו ציוני התחלה וסיום. העדות האישית מוצגת בפני עצמה.</p>}
        </div></div>
        <details className="case-followup"><summary>התהליך ומה חשוב לדעת</summary><p>{item.followup}</p></details>
      </article>)}
    </div></section>
    <section className="copy-section copy-cta"><div className="editorial-shell copy-reading-width"><h2>מה הייתם רוצים לראות משתנה?</h2><p>אפשר להתחיל בשיחה על הקושי שלכם ועל המטרות האישיות. את ההתאמה לטיפול ואת הדרך נבנה לפי המצב שלכם.</p><div className="copy-links"><Link href="https://wa.me/972548082487">לבדיקת התאמה בוואטסאפ</Link><Link href="/science">למחקרים ולרקע המדעי</Link><Link href="/faq">לשאלות על הטיפול</Link></div></div></section>
  </main>;
}
