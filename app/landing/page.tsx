import type { Metadata } from 'next';
import { Activity, ArrowLeft, Check, HeartPulse, MapPin, Moon, Repeat2, Snowflake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'מפגש ראשון בנוירופונקטורה',
  description: 'מפגש ראשון בנוירופונקטורה בקליניקת NeuroZen בתל אביב: מיפוי תסמינים, היכרות עם מערכת העצבים והתנסות בטיפול.',
  robots: { index: false, follow: false },
};

const whatsapp = 'https://wa.me/972548082487?text=' + encodeURIComponent('שלום, אשמח לתאם מפגש ראשון ב־500 ₪: מיפוי תסמינים והתנסות בנוירופונקטורה.');
const symptoms = [
  ['דפיקות לב ומועקה בחזה', 'גם כשאין סכנה ברורה מולך.', HeartPulse],
  ['שינה קלה ודריכות', 'הגוף עייף. המערכת עדיין ערה.', Moon],
  ['מחשבות טורדניות ולופים', 'קשה להניח למחשבה ולהמשיך הלאה.', Repeat2],
  ['קיפאון, ניתוק או Freeze', 'כשהתגובה היא דווקא להיעצר.', Snowflake],
] as const;
const faqs = [
  ['האם צריך לדבר על הטראומה?', 'לא. אין צורך לשחזר אירועים או לפרט מה קרה. המפגש מתמקד בתסמינים ובתגובה של מערכת העצבים.'],
  ['האם חייבים להתחייב לסדרה?', 'לא. מתחילים במפגש אחד בלבד. אם מחליטים להמשיך, דנים יחד בתדירות המתאימה.'],
  ['איך הטיפול מרגיש?', 'הגירוי עדין ומותאם לתחושה שלכם. אפשר לבקש להחליש או לעצור בכל עת.'],
] as const;

function CTA({ short = false }: { short?: boolean }) {
  return <a className="landing-cta" href={whatsapp} target="_blank" rel="noopener noreferrer">{short ? 'לתיאום טיפול ראשון' : 'לתיאום מפגש ראשון ב־500 ₪'}<ArrowLeft size={18} aria-hidden="true" /></a>;
}

export default function LandingPage() {
  return <main id="main-content" className="landing-page">
    <section className="landing-hero">
      <div className="landing-shell landing-hero-grid">
        <div className="landing-hero-copy">
          <p className="landing-eyebrow"><span />למי שהחרדה כבר מורגשת בגוף</p>
          <h1>דפיקות לב, דריכות,<br />שינה קלה או מחשבות<br />שלא עוצרות?<em>בואו לבדוק טיפול שמכוון לוויסות מערכת העצבים</em></h1>
          <p className="landing-lead"><strong>מפגש ראשון ב־500 ₪:</strong> מיפוי תסמינים ומצב מערכת העצבים והתנסות בנוירופונקטורה, בלי התחייבות לסדרה ובלי לשחזר טראומה.</p>
          <CTA />
          <p className="landing-micro">טיפול עדין <i /> מרשם קליני אישי <i /> מדידה לאורך הדרך</p>
        </div>
        <div className="landing-visual"><span>הקשר בין הגוף למערכת העצבים</span><img src="/production-hero.png" alt="איור של המוח ומערכת העצבים" /><b>עצב הוואגוס<small>חיבור בין המוח לגוף</small></b><small>איור להמחשה · הגישה נשענת על ידע ממדעי המוח</small></div>
      </div>
    </section>

    <section className="landing-trust"><div className="landing-shell"><span>גישה אישית · מדידה · ידע ממדעי המוח</span><a href="#landing-measurement"><Activity size={18} />מדידה קלינית לאורך הדרך</a><a href="/science">למחקרים ולרקע המדעי <ArrowLeft size={15} /></a></div></section>

    <section className="landing-section landing-symptoms"><div className="landing-shell"><div className="landing-section-intro"><p className="landing-overline">כשהגוף נשאר דרוך</p><h2>זה לא ״סתם לחץ״<br />כשזה כבר יושב בגוף</h2><p>חרדה, התקפי פאניקה ועוררות־יתר יכולים להרגיש גם כך:</p></div><div className="landing-symptom-grid">{symptoms.map(([title, text, Icon]) => <article key={title}><Icon size={25} strokeWidth={1.4} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="landing-section landing-approach" id="landing-approach"><div className="landing-shell"><p className="landing-overline">הגישה הטיפולית</p><h2>נוירופונקטורה מכוונת<br />לוויסות מערכת העצבים</h2><p className="landing-wide-copy">גירוי נוירולוגי מבוקר באמצעות מחטים עדינות, סטריליות וחד־פעמיות, המחוברות למכשור רפואי ייעודי. המרשם הקליני מותאם לתסמינים ולתגובה האישית.</p><div className="landing-flow"><span>עוררות־יתר</span><ArrowLeft size={18} /><span>גירוי נוירולוגי מבוקר</span><ArrowLeft size={18} /><span>ויסות מערכת העצבים</span></div></div></section>

    <section className="landing-section landing-bottom-up"><div className="landing-shell landing-two-col"><div><p className="landing-overline">הגוף כנקודת התחלה</p><strong className="landing-bottom-word">Bottom<br />Up <span>↗</span></strong></div><div><h2>לא חייבים לדבר על הטראומה<br />כדי להתחיל לעבוד עם הגוף</h2><ul>{['אין צורך לשחזר אירועים.', 'אין צורך לפרט מה קרה.', 'המפגש מתמקד בתסמינים ובתגובה של מערכת העצבים.'].map(item => <li key={item}><Check size={18} />{item}</li>)}</ul><p>אפשר להגיע כמו שאתם, ולהתחיל מהמקום שבו הגוף נמצא עכשיו.</p></div></div></section>

    <section className="landing-section landing-offer" id="landing-first"><div className="landing-shell landing-two-col"><div><p className="landing-overline">הצעד הראשון</p><h2>מתחילים במפגש<br />אחד בלבד</h2><p>מרחב להכיר, לשאול ולבדוק אם נוירופונקטורה מתאימה למצב שלכם.</p><ol><li><b>01</b>מיפוי תסמינים ומצב מערכת העצבים</li><li><b>02</b>בניית מרשם קליני אישי</li><li><b>03</b>התנסות בטיפול נוירופונקטורה</li></ol></div><div className="landing-price"><span>מפגש ראשון בקליניקה</span><strong>500<small>₪</small></strong><b><Check size={15} />ללא התחייבות לסדרה</b><p>מיפוי אישי + התנסות בטיפול</p><CTA short /></div></div></section>

    <section className="landing-section landing-measurement" id="landing-measurement"><div className="landing-shell"><p className="landing-overline">מדידה, לצד ההקשבה</p><h2>לא עובדים רק לפי תחושה</h2><p className="landing-wide-copy">שאלונים קליניים מאפשרים לתעד את נקודת ההתחלה ולעקוב אחר שינויים בתסמינים לאורך הדרך.</p><div className="landing-measures"><article><Activity size={20} /><strong>מדד חרדה</strong><p>מעקב אחר עוצמת תסמיני החרדה.</p></article><article><Activity size={20} /><strong>מדד פוסט־טראומה</strong><p>מעקב אחר תסמינים הקשורים לפוסט־טראומה.</p></article><article><Activity size={20} /><strong>מדד שינה</strong><p>מעקב אחר חומרת קשיי השינה.</p></article></div></div></section>

    <section className="landing-section landing-faq"><div className="landing-shell landing-two-col"><div><p className="landing-overline">לפני שמגיעים</p><h2>אפשר לשאול.<br />אפשר לקחת רגע.</h2></div><div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="landing-final"><div className="landing-shell"><p className="landing-eyebrow"><span />רק צעד ראשון</p><h2>רוצים לבדוק אם הטיפול מתאים<br />למערכת העצבים שלכם?</h2><p>מפגש ראשון ב־500 ₪: מיפוי תסמינים והתנסות בטיפול.</p><CTA /><small>בלי התחייבות לסדרה. בלי צורך לשחזר טראומה.</small><p className="landing-location"><MapPin size={16} />שאול המלך 39, תל אביב</p></div></section>
  </main>;
}
