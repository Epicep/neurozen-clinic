import type { Metadata } from 'next';
import { ArrowLeft, MapPin } from 'lucide-react';
import { cases } from '@/content/cases';
import './landing.css';
import LeadForm from './LeadForm';

export const metadata: Metadata = {
  title: 'יותר שקט בגוף | נוירופונקטורה ב־NeuroZen',
  description: 'טיפול נוירופונקטורה ממוקד לחרדה ודריכות, עם מעקב אישי והתנסות במפגש ראשון בתל אביב.',
  robots: { index: false, follow: false },
};
const whatsapp = 'https://wa.me/972548082487?text=' + encodeURIComponent('שלום, אשמח לבדוק התאמה ולתאם מפגש ראשון בנוירופונקטורה.');
const symptoms = [
  ['דפיקות לב ולחץ בחזה', 'מועקה ותחושת מחנק יכולות ללוות חרדה, גם כשלא מזהים סכנה ברורה.'],
  ['עוררות־יתר ושינה קלה', 'הראש רוצה לנוח, אבל הגוף נשאר דרוך וקשה להרפות.'],
  ['מחשבות בלופ ובדיקות חוזרות', 'עיסוק בדופק ובנשימה, מחשבות שלא מרפות ועומס מתמשך.'],
  ['קיפאון, כבדות או ניתוק', 'תחושה שהגוף עייף וכבד, ושקשה לחזור לפעולות היומיומיות.'],
];
const stories = ['quieter-anxiety', 'less-intrusive-thoughts', 'less-body-checking', 'renewed-interest', 'return-to-daily-life'].map(id => cases.find(item => item.id === id)!);
const faqs = [
  ['האם צריך לדבר על מה שגרם לחרדה או לחשוף דברים אישיים?', 'אין צורך לשחזר אירועים או לפרט את סיפור הטראומה. המפגש מתמקד בתסמינים ובמטרות שלכם. כן נשוחח על רקע רפואי ועל טיפולים קיימים כדי להתאים את הטיפול.'],
  ['האם הטיפול מתאים למי שכבר לוקח תרופות או מעדיף טיפול שאינו תרופתי?', 'אפשר לבדוק התאמה בשני המצבים. הטיפול עצמו אינו כולל תרופות ויכול להשתלב לצד טיפול קיים. שינוי או הפסקה של תרופות נעשים רק בהתייעצות עם הרופא המטפל.'],
  ['האם מתחייבים מראש לכל שמונת המפגשים?', 'לא. מתחילים במפגש ראשון לבדיקת התאמה והתנסות. לאחר מכן בוחנים יחד את התגובה ואת ההמלצה להמשך, ללא התחייבות מראש לסדרה.'],
  ['איך הטיפול מרגיש? האם זה כואב?', 'משתמשים במחטים דקות, סטריליות וחד־פעמיות ובגירוי חשמלי המותאם לתחושה שלכם. ההחדרה עשויה להיות מורגשת והגירוי עשוי להרגיש כמו פעימות או רטט. אפשר להחליש או לעצור בכל עת. ייתכנו למשל רגישות מקומית או שטף דם קטן.'],
  ['האם התוצאות נשמרות לאחר סיום הסדרה?', 'המטרה היא שינוי שמורגש גם בחיי היומיום. משך השיפור משתנה מאדם לאדם ותלוי גם במצב ובטיפולים נוספים. נבחן יחד את השינוי לאורך הדרך ואת הצורך במעקב או בהמשך טיפול.'],
];
function CTA({ offer = false }: { offer?: boolean }) {
  return <a className="landing-cta" href={whatsapp} target="_blank" rel="noopener noreferrer">{offer ? 'לתיאום מפגש ראשון ב־500 ₪' : 'לבדיקת התאמה ותיאום מפגש ראשון'}<ArrowLeft size={18} aria-hidden="true" /></a>;
}
function InlineCTA() {
  return <a className="landing-inline-cta" href="#landing-form">רוצים לבדוק התאמה? השאירו פרטים ←</a>;
}
export default function LandingPage() {
  return <main id="main-content" className="landing-page landing-centered">
    <section className="landing-hero"><div className="landing-shell">
      <p className="landing-eyebrow">למי שהחרדה והדריכות כבר מורגשות בגוף</p>
      <h1>80% שיפור בחרדה<br /><em>בתוך 8 טיפולים</em></h1>
      <p className="landing-lead">טיפול ממוקד להפעלת עצב הוואגוס — בלי צורך בכדורים, לדבר על העבר או לשחזר טראומות.</p>
      <p className="landing-wide-copy">בדיקת התאמה ומפגש ראשון בקליניקה: מיפוי אישי של התסמינים והתנסות בטיפול.</p>
      <CTA /><p className="landing-micro">ללא התחייבות מראש לסדרה · הטיפול עצמו אינו תרופתי</p>
    </div></section>
    <section className="landing-axis-visual" aria-label="ציר מוח–עצב הוואגוס–גוף">
      <div className="landing-shell">
        <img src="/treatment-device-wide.png" alt="מכשיר גירוי חשמלי עדין במהלך טיפול בקליניקה" />
        <p>מתחילים עם הגוף · מכוונים למערכת העצבים</p>
      </div>
    </section>
    <section className="landing-trust"><div className="landing-shell"><span>גישה אישית · מעקב מדיד · מדעי המוח</span><a href="#landing-stories">לסיפורים ולתוצאות מהקליניקה ←</a><a href="/science">למחקרים ולבסיס המדעי ←</a></div></section>
    <section className="landing-section"><div className="landing-shell">
      <p className="landing-overline">כשהחרדה מורגשת בגוף</p><h2>מבינים שאין סכנה.<br />ועדיין קשה להרפות.</h2>
      <p className="landing-wide-copy">אולי כבר ניסיתם שיחות, נשימות או תרופות, ועדיין משהו נשאר דרוך. זה לא אומר שחסר לכם כוח רצון. חרדה יכולה להתבטא גם בתגובות גופניות שקשה לשנות בכוח המחשבה בלבד.</p>
      <div className="landing-symptom-grid">{symptoms.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div><InlineCTA />
    </div></section>
    <section className="landing-section landing-approach" id="landing-approach"><div className="landing-shell">
      <p className="landing-overline">מהגוף אל החוויה הנפשית · Bottom-Up</p><h2>עוקפים את השיחות<br />ומתקשרים ישירות עם מערכת העצבים.</h2>
      <p className="landing-wide-copy">הגישה הקלינית שלנו — נוירופונקטורה: גירוי חשמלי מבוקר באמצעות מחטים עדינות ומכשור ייעודי. אזורי הגירוי והפרמטרים נבחרים לפי המצב הנוירולוגי והתסמינים, ויכולים לכלול גירוי של ענף של עצב הוואגוס.</p>
      <div className="landing-treatment-photo"><img src="/treatment-session-wide.png" alt="מכשירי גירוי חשמלי וזרמים עדינים במהלך טיפול בקליניקה" /></div>
      <div className="landing-feature-grid">
        <article><h3>בלי לשחזר את הטראומה</h3><p>אפשר לעבוד עם התסמינים כאן ועכשיו, ללא צורך לפרט את האירועים או לעבד אותם בשיחה במהלך הטיפול.</p></article>
        <article><h3>עבודה ממוקדת עם מערכת העצבים</h3><p>המטרה היא להקל על דריכות ועל תסמינים גופניים ולתמוך בוויסות. עוצמת הגירוי מותאמת לתחושה ולתגובה האישית.</p></article>
        <article><h3>מרשם אישי, מבוסס מחקר וניסיון קליני</h3><p>בניית המרשם משלבת ידע ממחקרי גירוי עצבי ודיקור חשמלי עם הניסיון הקליני. בקליניקה בוחנים את השינוי אצלכם ומתאימים את המרשם לאורך הדרך.</p></article>
      </div><a className="landing-text-link" href="/vagus-nerve">איך עצב הוואגוס קשור לטיפול? ←</a><InlineCTA />
    </div></section>
    <section className="landing-section landing-measurement" id="landing-measurement"><div className="landing-shell">
      <p className="landing-overline">מסגרת ברורה · התאמה לאורך הדרך</p><h2>מגדירים מטרות.<br />עוקבים אחרי השינוי.</h2>
      <p className="landing-wide-copy">רוב המטופלים מגיעים לשיפור של כ־80% במדד החרדה לאחר שמונה טיפולים. מספר המפגשים והקצב מותאמים למצב ולתגובה האישית.</p>
      <div className="landing-feature-grid"><article><b className="landing-big-number">8</b><h3>טיפולים בממוצע</h3><p>לפי התאמה אישית, ללא התחייבות מראש לסדרה.</p></article><article><b className="landing-big-number">45–60</b><h3>דקות בכל מפגש</h3><p>זמן להקשבה, לטיפול ולמעקב אחר התגובה.</p></article><article><h3>מדדים שמחוברים לחיים</h3><p>מדדי חרדה, שינה ותסמיני טראומה באמצעות שאלוני דיווח עצמי מתוקפים, לצד השינוי בתפקוד.</p></article></div>
      <p className="landing-wide-copy">אם נדרש המשך, אפשר להמשיך בטיפולים בעלות מוזלת. לאחר הערכה מחדש של המצב והמדדים, מחליטים יחד על ההמשך לפי המגמה והצרכים שלכם.</p><InlineCTA />
    </div></section>
    <section className="landing-section landing-stories" id="landing-stories"><div className="landing-shell">
      <p className="landing-overline">חמישה סיפורים מהקליניקה</p><h2>מאחורי המספרים,<br />יש שינוי בחיי היומיום.</h2>
      <p className="landing-wide-copy">מקרים נבחרים מתוך המעקב בקליניקה, ללא פרטים מזהים. לצד המדדים, הבאנו את המילים שבהן מטופלים תיארו את השינוי.</p>
      <div className="landing-story-list">{stories.map((item,i) => <article className="landing-story" key={item.id}>
        <p className="landing-overline">0{i+1} · {item.topic}</p><h3>{item.title}</h3><p>{item.story}</p>
        {item.quote && <div className="landing-story-experience"><span>חוויה אישית של המטופל/ת</span><blockquote className="landing-story-quote">״{item.quote}״</blockquote></div>}
        {item.id === 'less-intrusive-thoughts' && <p className="landing-note">לצד השיפור בתפקוד, המטופל הפחית תרופות בהתייעצות ובליווי הרופא המטפל.</p>}
        {item.id === 'return-to-daily-life' && <p className="landing-note">בנוסף, דיווח על פחות התקפי זעם והתפרצויות בבית.</p>}
        <dl className="landing-story-metrics">{item.metrics.map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd><span>לפני <b>{metric.before}</b></span><span>אחרי <b>{metric.after}</b></span></dd><small>ירידה של {metric.before-metric.after} נקודות</small></div>)}</dl>
        <details><summary>משך המעקב והקשר קליני</summary><p>{item.followup}</p></details>
      </article>)}</div>
      <a className="landing-text-link" href="/cases">לעוד סיפורים, כולל תוצאות חלקיות ומורכבות ←</a><InlineCTA />
    </div></section>
    <section className="landing-section landing-offer" id="landing-first"><div className="landing-shell">
      <p className="landing-overline">הצעד הראשון</p><h2>מתחילים במפגש אחד.<br />מכירים, בודקים ומתנסים.</h2><p className="landing-wide-copy">המפגש הראשון נועד להכיר את התסמינים, הרקע הרפואי והמטרות שלכם, לבדוק התאמה ולהתנסות בטיפול.</p>
      <div className="landing-feature-grid"><article><p className="landing-overline">01</p><h3>מיפוי תסמינים קליני</h3><p>שיחה ושאלונים להערכת החרדה, הדריכות והשינה. מגדירים יחד מה חשוב לכם לשנות.</p></article><article><p className="landing-overline">02</p><h3>בניית מרשם אישי</h3><p>התאמת נקודות הגירוי ופרמטרי הטיפול לפי התסמינים, הרקע והמטרות.</p></article><article><p className="landing-overline">03</p><h3>טיפול ראשון</h3><p>התנסות בטיפול על מיטת הטיפולים, עם גירוי המותאם לתחושה שלכם.</p></article></div>
      <div className="landing-contact-options">
        <div className="landing-price"><h3>לתיאום ישירות בוואטסאפ</h3><span>עלות מפגש ראשון בקליניקה</span><strong>500<small>₪</small></strong><p>מיפוי אישי + טיפול מלא</p><CTA offer /><p className="landing-micro">ללא התחייבות מראש לסדרה<br />אין צורך לשחזר טראומות</p></div>
        <div className="landing-form-card" id="landing-form"><h3>או השאירו פרטים</h3><p>נחזור אליכם לבדיקת התאמה ולתיאום מפגש ראשון.</p><LeadForm /></div>
      </div>
    </div></section>
    <section className="landing-section landing-faq"><div className="landing-shell"><p className="landing-overline">לפני שמגיעים</p><h2>אפשר לשאול.<br />אפשר לקחת רגע.</h2><div className="landing-faq-list">{faqs.map(([question,answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section className="landing-final"><div className="landing-shell"><p className="landing-eyebrow">NEURO•ZEN · המרכז לנוירופונקטורה בישראל</p><h2>אפשר להתחיל<br />מצעד אחד קטן.</h2><p>עילאי פארן · נוירופונקטורה ועבודה ממוקדת עם מערכת העצבים</p><CTA /><p className="landing-location"><MapPin size={16} aria-hidden="true" />שדרות שאול המלך 39, בית הדר דפנה, תל אביב</p><p><a href="tel:0548082487">054-808-2487</a></p></div></section>
    <section className="landing-disclaimer" aria-label="מידע רפואי חשוב"><div className="landing-shell"><p>תסמינים חדשים או חריגים כמו לחץ בחזה, קוצר נשימה או דופק לא סדיר מצריכים בירור רפואי; אין להניח שמקורם בחרדה. שינוי או הפסקת תרופות נעשים רק בהתייעצות עם הרופא המטפל.</p></div></section>
  </main>;
}
