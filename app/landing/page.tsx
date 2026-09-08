import type { Metadata } from 'next';
import { ArrowLeft, MapPin } from 'lucide-react';
import { cases } from '@/content/cases';
import './landing.css';

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
export default function LandingPage() {
  return <main id="main-content" className="landing-page landing-centered">
    <section className="landing-hero"><div className="landing-shell">
      <p className="landing-eyebrow">למי שמתמודד עם חרדה ודריכות בגוף, ניסה כבר הרבה — ומחפש דרך נוספת להרגיש טוב יותר</p>
      <h1>פחות חרדה ודריכות.<em>יותר שקט בגוף.</em></h1>
      <p className="landing-lead">טיפול נוירופונקטורה ממוקד בגירוי מערכת העצבים, לרבות באזור עצב הוואגוס באוזן. בלי צורך לשחזר טראומות או לפתוח פצעים מהעבר.</p>
      <p className="landing-wide-copy">בדיקת התאמה ומפגש ראשון בקליניקה: מיפוי אישי של התסמינים והתנסות בטיפול.</p>
      <CTA /><p className="landing-micro">ללא התחייבות מראש לסדרה · הטיפול עצמו אינו תרופתי</p>
    </div></section>
    <section className="landing-trust"><div className="landing-shell"><span>גישה אישית · מעקב מדיד · ידע ממדעי המוח</span><a href="#landing-stories">לסיפורים ולתוצאות מהקליניקה ←</a><a href="/science">למחקרים ולבסיס המדעי ←</a></div></section>
    <section className="landing-section"><div className="landing-shell">
      <p className="landing-overline">כשהחרדה מורגשת בגוף</p><h2>מבינים שאין סכנה.<br />ועדיין קשה להרפות.</h2>
      <p className="landing-wide-copy">אולי כבר ניסיתם שיחות, נשימות או תרופות, ועדיין משהו נשאר דרוך. זה לא אומר שחסר לכם כוח רצון. חרדה יכולה להתבטא גם בתגובות גופניות שקשה לשנות בכוח המחשבה בלבד.</p>
      <div className="landing-symptom-grid">{symptoms.map(([title,text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      <p className="landing-note">תסמינים חדשים או חריגים כמו לחץ בחזה, קוצר נשימה או דופק לא סדיר מצריכים בירור רפואי; אין להניח שמקורם בחרדה.</p>
    </div></section>
    <section className="landing-section landing-approach" id="landing-approach"><div className="landing-shell">
      <p className="landing-overline">מהגוף אל החוויה הנפשית · Bottom-Up</p><h2>מתחילים עם הגוף.<br />מכוונים ליותר ויסות.</h2>
      <p className="landing-wide-copy">הגישה הקלינית שלנו משתמשת בנוירופונקטורה: גירוי חשמלי מבוקר באמצעות מחטים עדינות ומכשור ייעודי. אזורי הגירוי והפרמטרים נבחרים לפי התסמינים והמטרות, ויכולים לכלול גירוי אוזני באזור המעוצבב על ידי ענף של עצב הוואגוס.</p>
      <div className="landing-feature-grid">
        <article><h3>בלי לשחזר את הטראומה</h3><p>אפשר לעבוד עם התסמינים כאן ועכשיו, ללא צורך לפרט את האירועים או לעבד אותם בשיחה במהלך הטיפול.</p></article>
        <article><h3>עבודה ממוקדת עם מערכת העצבים</h3><p>המטרה היא להקל על דריכות ועל תסמינים גופניים ולתמוך בוויסות. עוצמת הגירוי מותאמת לתחושה ולתגובה האישית.</p></article>
        <article><h3>מרשם אישי, בהשראת המחקר</h3><p>מחקרי גירוי עצבי ודיקור חשמלי מספקים כיוונים לטיפול. בקליניקה בוחנים את השינוי אצלכם ומתאימים את המרשם לאורך הדרך.</p></article>
      </div><a className="landing-text-link" href="/vagus-nerve">איך עצב הוואגוס קשור לטיפול? ←</a>
    </div></section>
    <section className="landing-section landing-measurement" id="landing-measurement"><div className="landing-shell">
      <p className="landing-overline">מסגרת ברורה · התאמה לאורך הדרך</p><h2>מגדירים מטרות.<br />עוקבים אחרי השינוי.</h2>
      <p className="landing-wide-copy">כאשר זה מתאים, אפשר להתחיל במסגרת של שמונה מפגשים, פעמיים בשבוע לאורך ארבעה שבועות. זו מסגרת להערכה ולטיפול; מספר המפגשים והקצב מותאמים למצב ולתגובה שלכם.</p>
      <div className="landing-feature-grid"><article><b className="landing-big-number">8</b><h3>מפגשים במסגרת הראשונית</h3><p>לפי התאמה אישית, ללא התחייבות מראש לסדרה.</p></article><article><b className="landing-big-number">45–60</b><h3>דקות בכל מפגש</h3><p>זמן להקשבה, לטיפול ולמעקב אחר התגובה.</p></article><article><h3>מדדים שמחוברים לחיים</h3><p>מדדי חרדה, שינה ותסמיני טראומה באמצעות שאלוני דיווח עצמי מתוקפים, לצד השינוי בתפקוד.</p></article></div>
      <p className="landing-wide-copy">אם אין שינוי, נבחן התאמה במרשם הטיפול. יש מטופלים שמגיבים לאט יותר מהמצופה — וזה בסדר. ההחלטה על ההמשך נעשית יחד, לפי המגמה והצרכים שלכם.</p>
    </div></section>
    <section className="landing-section landing-stories" id="landing-stories"><div className="landing-shell">
      <p className="landing-overline">חמישה סיפורים מהקליניקה</p><h2>מאחורי המספרים,<br />יש שינוי בחיי היומיום.</h2>
      <p className="landing-wide-copy">מקרים נבחרים מתוך המעקב בקליניקה, ללא פרטים מזהים. הסיפורים והחוויות מוצגים בתמצית, ולא כציטוטים ישירים.</p>
      <div className="landing-story-list">{stories.map((item,i) => <article className="landing-story" key={item.id}>
        <p className="landing-overline">0{i+1} · {item.topic}</p><h3>{item.title}</h3><p>{item.story}</p>
        <div className="landing-story-experience"><span>השינוי בחוויה האישית</span><p>{item.experience}</p></div>
        <dl className="landing-story-metrics">{item.metrics.filter(metric => /חרדה|דיכאון|שינה/.test(metric.label)).map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd><span>לפני <b>{metric.before}</b></span><span>אחרי <b>{metric.after}</b></span></dd><small>ירידה של {metric.before-metric.after} נקודות</small></div>)}</dl>
        <details><summary>משך המעקב והקשר קליני</summary><p>{item.followup}</p>{item.id === 'return-to-daily-life' && <p>מדד תסמיני הטראומה ירד מ־61 ל־28 — שינוי של 33 נקודות.</p>}</details>
      </article>)}</div>
      <p className="landing-note">אלה מקרים נבחרים עם שיפור, ולא שיעור הצלחה או תוצאה ממוצעת. השאלונים מתעדים שינוי בדיווח העצמי; ללא קבוצת ביקורת אי אפשר לייחס את השינוי לטיפול בלבד. התגובה ומידת השיפור משתנות.</p><a className="landing-text-link" href="/cases">לעוד סיפורים, כולל תוצאות חלקיות ומורכבות ←</a>
    </div></section>
    <section className="landing-section landing-offer" id="landing-first"><div className="landing-shell">
      <p className="landing-overline">הצעד הראשון</p><h2>מתחילים במפגש אחד.<br />מכירים, בודקים ומתנסים.</h2><p className="landing-wide-copy">המפגש הראשון נועד להכיר את התסמינים, הרקע הרפואי והמטרות שלכם, לבדוק התאמה ולהתנסות בטיפול.</p>
      <div className="landing-feature-grid"><article><p className="landing-overline">01</p><h3>מיפוי תסמינים קליני</h3><p>שיחה ושאלונים להערכת החרדה, הדריכות והשינה. מגדירים יחד מה חשוב לכם לשנות.</p></article><article><p className="landing-overline">02</p><h3>בניית מרשם אישי</h3><p>התאמת נקודות הגירוי ופרמטרי הטיפול לפי התסמינים, הרקע והמטרות.</p></article><article><p className="landing-overline">03</p><h3>טיפול ראשון</h3><p>התנסות בטיפול על מיטת הטיפולים, עם גירוי המותאם לתחושה שלכם.</p></article></div>
      <div className="landing-price"><span>עלות מפגש ראשון בקליניקה</span><strong>500<small>₪</small></strong><p>מיפוי אישי + טיפול מלא</p><CTA offer /><p className="landing-micro">ללא התחייבות מראש לסדרה<br />אין צורך לשחזר טראומות</p></div>
    </div></section>
    <section className="landing-section landing-faq"><div className="landing-shell"><p className="landing-overline">לפני שמגיעים</p><h2>אפשר לשאול.<br />אפשר לקחת רגע.</h2><div className="landing-faq-list">{faqs.map(([question,answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>
    <section className="landing-final"><div className="landing-shell"><p className="landing-eyebrow">NEURO•ZEN · המרכז לנוירופונקטורה בישראל</p><h2>אפשר להתחיל<br />מצעד אחד קטן.</h2><p>עילאי פארן · נוירופונקטורה ועבודה ממוקדת עם מערכת העצבים</p><CTA /><p className="landing-location"><MapPin size={16} aria-hidden="true" />שדרות שאול המלך 39, בית הדר דפנה, תל אביב</p><p><a href="tel:0548082487">054-808-2487</a></p></div></section>
  </main>;
}
