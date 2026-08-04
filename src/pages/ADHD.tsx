import { useState, type ReactNode } from "react";
import { Brain, CheckCircle2, Play, Target, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const WA = "https://wa.me/972548082487";

const symptoms = [
  ["קשה להתחיל", "גם כשהמשימה ברורה, המעבר מהכוונה לפעולה מרגיש כבד."],
  ["מתחיל ולא מסיים", "משימות נשארות פתוחות כשהקשב עובר לדבר הבא."],
  ["דחיינות חוזרת", "דברים חשובים נדחים עד שהלחץ הופך למנוע לפעולה."],
  ["מוסחות גבוהה", "רעש, טלפון או מחשבה פנימית מסיטים את הקשב במהירות."],
  ["קושי בניהול זמן", "משימות נמשכות יותר מהצפוי והתחייבויות מתפספסות."],
  ["תחושת פער", "יש יכולת, אבל קשה להביא אותה לידי ביטוי באופן עקבי."],
];

const brainAreas = [
  { title: "הקורטקס הפרה־פרונטלי", copy: "תכנון, זיכרון עבודה ושליטה בדחפים." },
  { title: "הגרעינים הבזליים", copy: "התחלת פעולה, מוטיבציה ומערכת התגמול." },
  { title: "רשת ברירת המחדל", copy: "נדידת מחשבות והמעבר בין מנוחה למיקוד." },
];

export default function ADHD() {
  const [activeArea, setActiveArea] = useState(0);

  return (
    <div dir="rtl" className="min-h-screen bg-[#f5f1e8] text-[#203136]">
      <SEO path="/adhd" />
      <Header />
      <main>
        <section className="relative min-h-[92vh] overflow-hidden bg-[#071318] pt-28 text-[#f4f0e6]">
          <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_.95fr]">
            <div className="relative z-10">
              <p className="mb-5 text-xs font-bold tracking-[.18em] text-[#d8a44a]">ADHD במבוגרים · נוירופונקטורה בתל אביב</p>
              <h1 className="max-w-3xl text-5xl font-medium leading-[1.03] tracking-[-.04em] md:text-7xl">כשהקושי אינו רק להתרכז</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#c8d2d1] md:text-xl">
                אתה יודע מה צריך לעשות, אבל מתקשה להתחיל, להתמיד או לסיים. ADHD משפיע על רשתות הקשב, המוטיבציה והשליטה בדחפים. בקליניקה הטיפול מתמקד במנגנונים האלה באמצעות נוירופונקטורה.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={WA} className="rounded-full bg-[#25d366] px-7 py-4 font-bold text-[#072813]">לשיחת התאמה בוואטסאפ</a>
                <a href="#recognition" className="rounded-full border border-white/20 px-7 py-4 font-semibold text-white">להבין איך זה עובד</a>
              </div>
              <p className="mt-4 text-sm text-[#94a6a5]">השיחה נועדה לבדוק התאמה ואינה התחייבות לטיפול.</p>
            </div>
            <AttentionBrain />
          </div>
        </section>

        <section id="recognition" className="bg-white py-24 md:py-32">
          <SectionTitle eyebrow="החוויה היומיומית" title="האם זה נשמע מוכר?">
            אצל מבוגרים ADHD מופיע פעמים רבות פחות כתנועתיות חיצונית ויותר כקושי בהתארגנות, התחלת משימות, ניהול זמן ושמירה על מיקוד.
          </SectionTitle>
          <div className="mx-auto mt-14 grid max-w-6xl gap-4 px-6 md:grid-cols-3">
            {symptoms.map(([title, copy], i) => (
              <article key={title} className="rounded-3xl border border-[#e5ded1] bg-[#fbfaf6] p-7 transition hover:-translate-y-1 hover:shadow-xl">
                <span className="mb-5 inline-grid h-9 w-9 place-items-center rounded-full bg-[#efe6d3] text-sm font-bold text-[#7b591c]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 text-[#617176]">{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#071318] px-6 py-24 text-center text-[#f4f0e6] md:py-32">
          <p className="text-xs font-bold tracking-[.18em] text-[#d8a44a]">שינוי נקודת המבט</p>
          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-medium md:text-6xl">זה לא בהכרח חוסר כוח רצון</h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#b9c8c7] md:text-xl">
            ADHD הוא מצב נוירו־התפתחותי המשפיע על היכולת לווסת קשב, לעכב גירויים, להניע פעולה ולשמור על מטרה לאורך זמן. הקושי יכול להיות אמיתי גם אצל אדם אינטליגנטי, יצירתי ובעל מוטיבציה.
          </p>
        </section>

        <AttentionFilter />

        <section className="py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="text-xs font-bold tracking-[.18em] text-[#9b6e1e]">הבסיס הנוירולוגי</p>
              <h2 className="mt-4 text-4xl font-medium md:text-6xl">מה קורה במוח ב־ADHD?</h2>
              <p className="mt-6 text-lg leading-8 text-[#617176]">ADHD קשור לשינויים באופן שבו רשתות מוחיות פועלות ומתקשרות זו עם זו. מערכות אלה מעורבות בתכנון, זיכרון עבודה, התחלת פעולה, שליטה בדחפים, מוטיבציה והיכולת להישאר ממוקדים במשימה.</p>
              <p className="mt-4 text-lg leading-8 text-[#617176]">גם דופמין ונוראדרנלין ממלאים תפקיד מרכזי בוויסות הקשב והתגמול.</p>
            </div>
            <div className="rounded-3xl border border-[#e3ddcf] bg-white p-7">
              <Brain className="mx-auto h-40 w-40 text-[#c29a52]" strokeWidth={1.1} />
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {brainAreas.map((area, i) => <button key={area.title} onClick={() => setActiveArea(i)} className={`rounded-full border px-4 py-2 text-sm ${activeArea === i ? "border-[#071318] bg-[#071318] text-white" : "border-[#ded6c7] bg-white"}`}>{area.title}</button>)}
              </div>
              <div className="min-h-28 pt-6 text-center"><h3 className="font-bold">{brainAreas[activeArea].title}</h3><p className="mt-2 text-[#617176]">{brainAreas[activeArea].copy}</p></div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24 md:py-32">
          <SectionTitle eyebrow="הגישה הטיפולית" title="טיפול המכוון למנגנונים במערכת העצבים">
            נוירופונקטורה היא שיטת נוירומודולציה המשתמשת בגירוי חשמלי עדין ומדויק של נקודות עצביות. הטיפול ב־ADHD מתמקד ברשתות הקשורות לקורטקס הפרה־פרונטלי, לגרעינים הבזליים ולמערכות הקשב.
          </SectionTitle>
          <div className="mx-auto mt-14 grid max-w-6xl gap-4 px-6 md:grid-cols-3">
            {[
              [Zap, "נוירומודולציה ממוקדת", "הטיפול בנוי סביב רשתות ומנגנונים עצביים מוגדרים."],
              [Target, "מרשם טיפולי עקבי", "הטיפול מבוסס על מנגנוני הליבה של ההפרעה ולא על כל תסמין רגעי."],
              [CheckCircle2, "שילוב בטיפול הקיים", "ניתן לשלב לצד טיפול רפואי, פסיכולוגי או אימון להפרעת קשב."],
            ].map(([Icon, title, copy]: any) => <article key={title} className="border-t-2 border-[#d8a44a] bg-[#f8f5ee] p-8"><Icon className="mb-5 text-[#9b6e1e]" /><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 text-[#617176]">{copy}</p></article>)}
          </div>
        </section>

        <TreatmentTimeline />
        <Measurement />
        <AudioPlaceholder />
        <FAQ />

        <section className="bg-[#071318] px-6 py-24 text-center text-[#f4f0e6] md:py-32">
          <p className="text-xs font-bold tracking-[.18em] text-[#d8a44a]">שיחת התאמה</p>
          <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-medium md:text-6xl">לבדוק אם הגישה מתאימה לך</h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-[#bdcac9]">אם אובחנת עם ADHD והקושי משפיע על העבודה, הלימודים או ההתנהלות היומיומית, אפשר להתחיל בשיחה קצרה.</p>
          <a href={WA} className="mt-8 inline-flex rounded-full bg-[#25d366] px-8 py-4 font-bold text-[#072813]">לשיחת התאמה בוואטסאפ</a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function SectionTitle({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <div className="mx-auto max-w-3xl px-6 text-center"><p className="text-xs font-bold tracking-[.18em] text-[#9b6e1e]">{eyebrow}</p><h2 className="mt-4 text-4xl font-medium md:text-6xl">{title}</h2><p className="mt-6 text-lg leading-8 text-[#617176]">{children}</p></div>;
}

function AttentionBrain() {
  return <div className="relative grid min-h-[380px] place-items-center lg:min-h-[520px]"><svg viewBox="0 0 600 500" className="w-full max-w-xl drop-shadow-[0_0_30px_rgba(216,164,74,.16)]" role="img" aria-label="המחשה סכמטית של רשתות קשב במוח"><path d="M150 318C65 260 90 132 188 113c38-78 173-79 213-4 104 3 146 126 76 199-35 37-94 49-146 34-63 39-138 30-181-24Z" fill="none" stroke="#cbbd9c" strokeWidth="2" opacity=".65"/><path d="M207 112c-20 72-3 166 61 223M340 100c33 63 31 161-18 245M126 223c98-38 222-41 359 4" fill="none" stroke="#8fa3a1" strokeWidth="1.4" opacity=".28"/><path d="M208 174C277 205 331 226 407 271" fill="none" stroke="#d8a44a" strokeWidth="4" strokeDasharray="8 10" className="motion-safe:animate-pulse"/><circle cx="208" cy="174" r="13" fill="#d8a44a"/><circle cx="407" cy="271" r="12" fill="#d8a44a"/><circle cx="295" cy="222" r="20" fill="none" stroke="#d8a44a" strokeWidth="2" className="motion-safe:animate-ping"/></svg></div>;
}

function AttentionFilter() {
  return <section className="bg-[#0b1d22] py-24 text-[#f4f0e6] md:py-32"><SectionTitle eyebrow="המחשה" title="כאשר כל גירוי מתחרה על הקשב">כאשר מנגנוני הבקרה מתקשים להעדיף מידע אחד ולדכא מידע אחר, גם משימה פשוטה יכולה לדרוש מאמץ רב.</SectionTitle><div className="mx-auto mt-14 grid max-w-6xl gap-5 px-6 md:grid-cols-2">{["ויסות קשב יעיל","קושי בוויסות הקשב"].map((t,i)=><div key={t} className="rounded-3xl border border-white/10 bg-white/[.03] p-6"><h3 className="text-xl font-bold">{t}</h3><div className="relative mt-5 h-64 overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_center,rgba(216,164,74,.13),transparent_44%)]"><div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d8a44a] shadow-[0_0_40px_rgba(216,164,74,.2)]"/>{Array.from({length:i?14:7}).map((_,n)=><i key={n} style={{animationDelay:`${n*.35}s`,left:`${8+(n*17)%82}%`,top:`${7+(n*23)%84}%`}} className={`absolute h-2.5 w-2.5 rounded-full bg-[#d8a44a] shadow-[0_0_14px_#d8a44a] motion-safe:animate-pulse ${!i && n%2===0?"opacity-20":""}`}/>)}</div><p className="mt-5 text-[#b8c6c5]">{i?"יותר גירויים ממשיכים להתחרות בו־זמנית על משאבי הקשב.":"חלק מהגירויים דועכים, והמידע הרלוונטי מקבל עדיפות."}</p></div>)}</div><p className="mx-auto mt-5 max-w-6xl px-6 text-sm text-[#849695]">המחשה רעיונית בלבד; אינה מייצגת בדיקה מוחית או אבחנה אישית.</p></section>;
}

function TreatmentTimeline() {
  const steps=[["01","הערכה וטיפול ראשון","מיפוי הקשיים, ההיסטוריה הרפואית והיעדים."],["02","סדרה ראשונית","בדרך כלל שמונה טיפולים, פעמיים בשבוע."],["03","מעקב מובנה","מעקב אחר תסמינים ומטרות תפקודיות."],["04","הערכה מחדש","החלטה על המשך, שינוי תדירות או סיום."]];
  return <section className="bg-[#ede8dd] py-24 md:py-32"><SectionTitle eyebrow="תהליך ברור" title="איך נראה התהליך?">מהפגישה הראשונה ועד הערכת התוצאות, כל שלב מוגדר מראש.</SectionTitle><div className="mx-auto mt-14 grid max-w-6xl gap-4 px-6 md:grid-cols-4">{steps.map(([n,t,c])=><article key={n} className="rounded-3xl bg-white p-7"><div className="text-3xl font-bold text-[#d8a44a]">{n}</div><h3 className="mt-4 text-xl font-bold">{t}</h3><p className="mt-3 text-[#617176]">{c}</p></article>)}</div></section>;
}

function Measurement() {
  return <section className="bg-white py-24 md:py-32"><div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2"><div><p className="text-xs font-bold tracking-[.18em] text-[#9b6e1e]">מדידה</p><h2 className="mt-4 text-4xl font-medium md:text-6xl">לא מסתמכים רק על רושם כללי</h2><p className="mt-6 text-lg leading-8 text-[#617176]">לפני תחילת הטיפול ממלאים את שאלון ASRS ומגדירים מטרות תפקודיות אישיות. לאחר הסדרה ממלאים את השאלון מחדש ובוחנים את השינוי לצד ההתנהלות היומיומית.</p><p className="mt-4 text-sm text-[#617176]">השאלון אינו מחליף אבחון רפואי.</p></div><div className="rounded-3xl border border-[#dcd3c2] bg-[#f8f5ee] p-8"><p className="text-xs font-bold tracking-[.18em] text-[#9b6e1e]">ASRS · מעקב קליני</p><h3 className="mt-5 font-bold">הערכה בתחילת התהליך</h3><div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e3dbc9]"><i className="block h-full w-2/3 bg-[#d8a44a]"/></div><h3 className="mt-7 font-bold">מטרות תפקודיות</h3><p className="mt-2 text-[#617176]">התחלת משימות · שמירה על מיקוד · ניהול זמן · השלמת עבודה</p><h3 className="mt-7 font-bold">הערכה חוזרת</h3><div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e3dbc9]"><i className="block h-full w-2/5 bg-[#d8a44a]"/></div><p className="mt-4 text-xs text-[#7b8587]">הנתונים בתצוגה סכמטיים בלבד.</p></div></div></section>;
}

function AudioPlaceholder() {
  return <section className="bg-[#071318] py-24 text-[#f4f0e6] md:py-32"><div className="mx-auto max-w-5xl px-6"><p className="text-xs font-bold tracking-[.18em] text-[#d8a44a]">בקרוב</p><h2 className="mt-4 text-4xl font-medium md:text-6xl">דקה על ADHD ועל דרך הטיפול</h2><div className="mt-10 grid items-center gap-6 rounded-3xl border border-white/10 bg-white/[.03] p-7 md:grid-cols-[90px_1fr_auto]"><div className="grid h-20 w-20 place-items-center rounded-full bg-[#d8a44a] text-2xl font-bold text-[#071318]">ע״פ</div><div><h3 className="text-xl font-bold">הסבר קצר בקולו של עילאי פארן</h3><div className="mt-4 h-8 opacity-70 [background:repeating-linear-gradient(90deg,#d8a44a_0_3px,transparent_3px_8px)]"/><p className="mt-3 text-sm text-[#94a6a5]">קובץ האודיו והתמלול יתווספו כאן.</p></div><button disabled className="grid h-14 w-14 place-items-center rounded-full bg-[#d8a44a] text-[#071318] opacity-70"><Play /></button></div></div></section>;
}

function FAQ() {
  const faqs=[["האם הטיפול מתאים גם למבוגרים?","כן. אצל מבוגרים ADHD מתבטא לעיתים פחות בתנועתיות חיצונית ויותר בדחיינות, קושי בהתארגנות, ניהול זמן, מוסחות ואי־שקט פנימי."],["האם ניתן לשלב את הטיפול עם תרופות?","כן. הטיפול יכול להשתלב לצד טיפול תרופתי, פסיכולוגי או אימון להפרעת קשב. כל שינוי בתרופות נעשה מול הרופא המטפל."],["האם צריך אבחון לפני שמתחילים?","מומלץ להגיע לאחר אבחון מסודר. שאלון ASRS משמש למעקב ואינו מחליף אבחון רפואי."],["האם הטיפול כואב?","הגירוי מתבצע מעט מעל סף התחושה, וכל מטופל בוחר את העוצמה הנוחה עבורו. אין צורך להגיע לכאב."]];
  return <section className="py-24 md:py-32"><SectionTitle eyebrow="שאלות נפוצות" title="מה חשוב לדעת לפני שפונים?">תשובות קצרות לשאלות המרכזיות על התאמה ותהליך הטיפול.</SectionTitle><div className="mx-auto mt-10 max-w-4xl px-6">{faqs.map(([q,a])=><details key={q} className="border-b border-[#d8d0c1] py-6"><summary className="cursor-pointer text-lg font-bold">{q}</summary><p className="mt-4 leading-7 text-[#617176]">{a}</p></details>)}</div></section>;
}
