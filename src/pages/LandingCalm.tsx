import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Activity,
  UserCheck,
  Feather,
  Layers,
  ChevronDown,
  Phone,
} from "lucide-react";
import logo from "@/assets/clinic-logo.png";
import nervousSystem from "@/assets/lp-nervous-system.jpg";

const WA = "https://wa.me/972548082487";

const symptoms = [
  "דפיקות לב, מועקה בחזה או קוצר נשימה.",
  "שינה לא רציפה, יקיצות, דריכות בלילה.",
  "תחושת קיפאון, ניתוק, חוסר אונים או ערפול מנטלי.",
  "מחשבות טורדניות ולופים שקשה לעצור.",
  "עצבנות, הצפה, תגובתיות גבוהה בבית או בזוגיות.",
  "קושי לדבר על מה שעברת, או תחושה שטיפול שיחתי מציף מדי.",
];

const trustItems = [
  { icon: Activity, title: "מדידה", text: "שאלונים קליניים מתוקפים ומעקב מסודר." },
  { icon: UserCheck, title: "התאמה אישית", text: "מרשם קליני לפי מפת הסימפטומים שלך." },
  { icon: Feather, title: "טיפול עדין", text: "מכויל לסף התחושה האישי, לא פולשני." },
  { icon: Layers, title: "שילוב", text: "משתלב לצד טיפול פסיכולוגי או תרופתי קיים." },
];

const cases = [
  {
    stat: "19 ← 5",
    statLabel: "GAD-7",
    kind: "פוסט־טראומה צבאית",
    quote: "חזרה לתפקוד ויכולת למצוא שקט ברגעים לא שקטים.",
    full: "לוחם מילואים עם PTSD וחרדה קשה דיווח לאחר תהליך על חזרה לתפקוד, שיפור בשינה ויכולת טובה יותר למצוא שקט ברגעים לא שקטים. במדדים הקליניים נרשמה ירידה מ־19 ל־5 ב־GAD-7, ומ־61 ל־28 ב־PCL-5.",
  },
  {
    stat: "12 ← 2",
    statLabel: "מדד חרדה",
    kind: "חרדה עם תסמינים גופניים",
    quote: "אחרי הטיפול החמישי הבנתי שהמוח שלי חזר לעצמו אחרי שנים.",
    full: "מטופלת שסבלה במשך 3 שנים מגלי חרדה, דפיקות לב ונימולים בידיים דיווחה: \u201cאחרי הטיפול החמישי הבנתי שהמוח שלי חזר לעצמו אחרי שנים\u201d. במדד החרדה נרשמה ירידה מ־12 ל־2.",
  },
  {
    stat: "בן 24",
    statLabel: "חרדה כרונית",
    kind: "מחשבות טורדניות",
    quote: "ירידה משמעותית בתסמינים ושיפור בתפקוד.",
    full: "מטופל בן 24 עם חרדה כרונית, תסמינים פיזיים ומחשבות טורדניות דיווח על ירידה משמעותית בתסמינים ושיפור בתפקוד. שינוי בשימוש בתרופות נעשה בהדרגה ובליווי הרופא המטפל בלבד.",
  },
  {
    stat: "בת 37",
    statLabel: "חרדה קיומית",
    kind: "קיפאון ומחנק",
    quote: "אני כבר לא בהישרדות קיומית.",
    full: "מטופלת בת 37 שהגיעה עם תחושת קיפאון, מחנק וחרדה קיומית דיווחה בסיום: \u201cאני כבר לא בהישרדות קיומית\u201d. במדדי החרדה והטראומה נרשמה ירידה לטווח מינימלי/תקין בשאלונים הקליניים.",
  },
];

const faqs = [
  {
    q: "האם צריך לדבר על הטראומה?",
    a: "לא. אין צורך לשחזר אירועים, לספר פרטים או להיכנס לתוכן רגשי קשה. האבחון מתמקד במפת הסימפטומים ובמצב מערכת העצבים.",
  },
  {
    q: "האם זה מחליף טיפול פסיכולוגי או תרופתי?",
    a: "לא בהכרח. הטיפול יכול להשתלב לצד טיפול פסיכולוגי או תרופתי קיים. כל שינוי תרופתי נעשה רק בהדרגה ובליווי/ייעוץ הרופא המטפל.",
  },
  {
    q: "האם הטיפול כואב?",
    a: "הטיפול עדין ביותר, מכויל אישית לסף התחושה של המטופל, אינו פולשני ובעל פרופיל בטיחות גבוה במיוחד.",
  },
  {
    q: "מתי מרגישים שינוי?",
    a: "אצל חלק מהמטופלים הטבה ראשונית מורגשת סביב המפגש ה־3 או ה־4, אך התגובה משתנה מאדם לאדם ואין התחייבות לתוצאה מסוימת.",
  },
  {
    q: "האם חייבים להתחייב לסדרה?",
    a: "לא. המטרה של הדף היא להזמין למפגש ראשון בלבד: אבחון מקיף והתנסות בטיפול ב־500 ₪.",
  },
];

const CTAButton = ({ className = "" }: { className?: string }) => (
  <a
    href={WA}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-[0_10px_30px_-12px_hsl(var(--primary)/0.6)] transition-all hover:brightness-110 hover:shadow-[0_14px_40px_-12px_hsl(var(--primary)/0.7)] ${className}`}
  >
    <Phone className="h-5 w-5" />
    לתיאום טיפול ראשון
  </a>
);

const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={`py-16 md:py-24 ${className}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="container mx-auto max-w-4xl px-6"
    >
      {children}
    </motion.div>
  </section>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-6 text-2xl font-extrabold leading-snug text-secondary md:text-3xl">
    {children}
  </h2>
);

const LandingCalm = () => {
  const [openCase, setOpenCase] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div dir="rtl" className="min-h-screen bg-background pb-24 md:pb-0">
      <Helmet>
        <title>ויסות מערכת העצבים בחרדה ופוסט־טראומה | Neuro•Zen תל אביב</title>
        <meta
          name="description"
          content="אבחון נוירולוגי מקיף והתנסות בטיפול ראשון ב־500 ₪ בתל אביב. ויסות מערכת העצבים בחרדה, עוררות־יתר ופוסט־טראומה, ללא צורך לדבר על הטראומה."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Logo bar */}
      <header className="py-6">
        <div className="container mx-auto max-w-6xl px-6">
          <img src={logo} alt="Neuro•Zen" className="h-9 w-auto" />
        </div>
      </header>

      {/* HERO */}
      <section className="pb-12 pt-4 md:pb-20">
        <div className="container mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div className="text-right">
            <h1 className="text-3xl font-extrabold leading-[1.25] text-secondary md:text-[2.75rem]">
              כשהגוף נשאר על מצב חירום,
              <br />
              קשה &ldquo;פשוט להירגע&rdquo;
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              ב־Neuro•Zen בתל אביב מטפלים בחרדה, עוררות־יתר ופוסט־טראומה דרך ויסות
              מערכת העצבים, בגישה נוירולוגית עדינה ומדידה, ללא צורך לשחזר טראומה או
              לדבר על מה שכואב.
            </p>
            <div className="mt-9">
              <CTAButton />
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                לתיאום אבחון נוירולוגי מקיף והתנסות בטיפול ראשון ב־500 ₪. אין
                התחייבות לסדרה. מגיעים, מאבחנים, מרגישים את הטיפול בגוף, ואז מחליטים
                יחד אם נכון להמשיך.
              </p>
            </div>
          </div>
          <div className="order-first md:order-last">
            <img
              src={nervousSystem}
              alt="איור אנטומי עדין של מערכת העצבים ומסלול עצב הוואגוס"
              width={1024}
              height={1024}
              className="mx-auto w-full max-w-sm md:max-w-md"
              style={{
                maskImage:
                  "radial-gradient(circle at 50% 50%, black 55%, transparent 78%)",
                WebkitMaskImage:
                  "radial-gradient(circle at 50% 50%, black 55%, transparent 78%)",
              }}
            />
          </div>
        </div>
      </section>

      {/* PAIN */}
      <Section className="bg-muted/40">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            אם אתה חי עם דופק שקופץ בלי סיבה ברורה, שינה קלה מדי, דריכות תמידית,
            מועקה בחזה, מחשבות שלא עוצרות או תחושה שהגוף לא ירד מאז ממצב הישרדותי,
            יכול להיות שהבעיה כבר לא נמצאת רק &ldquo;בראש&rdquo;.
          </p>
          <p>
            במצבי חרדה מתמשכת ו־PTSD, מערכת העצבים האוטונומית עלולה להיתקע במצב
            Fight or Flight. הגוף ממשיך לקרוא סכנה גם כשהסכנה כבר לא שם.
          </p>
          <p className="font-medium text-secondary">
            ב־Neuro•Zen העבודה היא לא לשכנע אותך להירגע. העבודה היא לתת למערכת
            העצבים גירוי נוירולוגי מבוקר, עדין ומדויק, כדי לעזור לה לחזור לוויסות.
          </p>
        </div>
      </Section>

      {/* WHO */}
      <Section>
        <H2>למי זה מתאים</H2>
        <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
          הטיפול מיועד לאנשים שמתמודדים עם חרדה, התקפי פאניקה, סטרס מתמשך,
          עוררות־יתר ופוסט־טראומה צבאית או אזרחית. זה רלוונטי במיוחד אם אתה מזהה
          אצלך אחד או יותר מהדברים הבאים:
        </p>
        <ul className="grid gap-3 md:grid-cols-2">
          {symptoms.map((s) => (
            <li
              key={s}
              className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4 text-[15px] leading-relaxed text-muted-foreground"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
              {s}
            </li>
          ))}
        </ul>
      </Section>

      {/* MECHANISM */}
      <Section className="bg-muted/40">
        <H2>מהי נוירופונקטורה</H2>
        <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>
            נוירופונקטורה היא שיטת דיקור רפואית־נוירולוגית המבוססת על מדעי המוח,
            נוירו־אנטומיה ומחקרים קליניים.
          </p>
          <p>
            במהלך הטיפול משתמשים במחטים עדינות, סטריליות וחד־פעמיות, הממוקמות בסמוך
            לעצבים פריפריאליים ובאזורים רלוונטיים בקרקפת. המחטים מחוברות למכשור
            רפואי ייעודי שמעביר פולסים חשמליים עדינים בתדרים ספציפיים.
          </p>
          <p>
            המטרה היא גירוי נוירולוגי מבוקר של מסלולים עצביים הקשורים לוויסות,
            הרגעה, שינה, עוררות ותגובה למצבי דחק.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-border/60 bg-card p-8">
          <h3 className="mb-4 text-xl font-bold text-secondary">
            עצב הוואגוס: הבלם הפיזיולוגי של הגוף
          </h3>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              עצב הוואגוס הוא אחד המסלולים המרכזיים של המערכת הפארא־סימפתטית, זו
              שאחראית על Rest &amp; Digest.
            </p>
            <p>
              כאשר הגוף נמצא זמן רב במצב הישרדותי, הבלם הזה עלול להיחלש. התוצאה יכולה
              להרגיש כמו אזעקה פנימית שלא נכבית: דופק, מתח שרירי, קושי לנשום עמוק,
              שינה קלה, דריכות ומחשבות רצות.
            </p>
            <p>
              בנוירופונקטורה עובדים על גירוי המסלולים הוואגאליים כדי לסייע בשיפור הטון
              הוואגאלי, הורדת עוררות־יתר ותמיכה בחזרה הדרגתית לוויסות.
            </p>
          </div>
        </div>
      </Section>

      {/* BOTTOM-UP */}
      <Section>
        <H2>היתרון למתמודדי טראומה: טיפול Bottom-Up</H2>
        <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>
            הרבה אנשים עם PTSD או חרדה כבר ניסו לדבר, להבין, לנתח, להסביר לעצמם.
            לפעמים זה עוזר. לפעמים זה גם מציף.
          </p>
          <p>
            כאן אין צורך לספר את הסיפור מחדש, לשחזר אירועים או להיכנס לפרטים
            מכאיבים.
          </p>
          <p>
            הטיפול פועל מלמטה למעלה: דרך הגוף ומערכת העצבים אל המוח. המטופל שוכב
            במנוחה, והעבודה מתבצעת דרך גירוי נוירולוגי עדין שמכוון למסלולי ויסות
            רלוונטיים.
          </p>
        </div>
      </Section>

      {/* FIRST SESSION */}
      <Section className="bg-muted/40">
        <H2>איך נראה המפגש הראשון</H2>
        <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>המפגש הראשון הוא אבחון נוירולוגי מקיף + התנסות בטיפול.</p>
          <p>
            במפגש נבדקת מפת הסימפטומים שלך: חרדה, שינה, עוררות, תגובתיות, תסמינים
            גופניים, היסטוריה רלוונטית ומטרות טיפוליות. לפי זה נבנה מרשם קליני מותאם
            אישית, ולא מסלול אחיד לכולם.
          </p>
          <p>
            לאחר מכן מתנסים בטיפול עצמו, כדי להבין איך הגוף מגיב, איך התחושה בפועל,
            ומה נכון להמשך.
          </p>
          <p className="text-xl font-bold text-secondary">
            עלות המפגש הראשון: 500 ₪ בלבד.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-border/60 bg-card p-8">
          <h3 className="mb-4 text-xl font-bold text-secondary">מה קורה אם ממשיכים</h3>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              אם לאחר המפגש הראשון מחליטים יחד שיש התאמה, לרוב מדובר בסדרה תחומה של 8
              מפגשים, בדרך כלל כחודש אינטנסיבי של פעמיים בשבוע.
            </p>
            <p>אין כאן התחייבות מראש. ההחלטה על המשך נעשית רק אחרי אבחון והתנסות.</p>
            <p>ברקע, עלות 7 המפגשים הנותרים בסדרה היא 3,900 ₪.</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <CTAButton />
          <p className="mt-3 text-sm text-muted-foreground">ללא התחייבות לסדרה</p>
        </div>
      </Section>

      {/* MEASUREMENT */}
      <Section>
        <H2>מדידה ולא תחושות באוויר</H2>
        <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>
            ב־Neuro•Zen העבודה נעשית בגישת Medical Mindset: התאמה אישית, מדידה
            ומעקב.
          </p>
          <p>
            המעקב יכול לכלול שאלונים רפואיים בינלאומיים מתוקפים כמו GAD-7 לחרדה,
            PCL-5 לפוסט־טראומה ו־ISI לשינה, לצד ניטור מדדי שונות קצב לב HRV כאשר
            רלוונטי.
          </p>
          <p>
            המטרה היא לא להסתמך רק על &ldquo;איך נדמה שזה מרגיש&rdquo;, אלא לעקוב
            אחרי שינוי בצורה מסודרת וזהירה.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border/60 bg-card p-5 text-right"
            >
              <item.icon className="mb-3 h-6 w-6 text-primary" />
              <h3 className="mb-1 font-bold text-secondary">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CASES */}
      <Section className="bg-muted/40">
        <H2>מקרים מהקליניקה</H2>
        <div className="grid gap-5 md:grid-cols-2">
          {cases.map((c, i) => (
            <div
              key={c.full}
              className="rounded-2xl border border-border/60 bg-card p-6 text-right"
            >
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {c.kind}
              </span>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-primary">{c.stat}</span>
                <span className="text-sm text-muted-foreground">{c.statLabel}</span>
              </div>
              <p className="mt-4 leading-relaxed text-secondary">&ldquo;{c.quote}&rdquo;</p>
              <button
                type="button"
                onClick={() => setOpenCase(openCase === i ? null : i)}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                aria-expanded={openCase === i}
              >
                לקריאת המקרה המלא
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${openCase === i ? "rotate-180" : ""}`}
                />
              </button>
              {openCase === i && (
                <p className="mt-4 border-t border-border/60 pt-4 text-[15px] leading-relaxed text-muted-foreground">
                  {c.full}
                </p>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* PRACTITIONER */}
      <Section>
        <H2>על המטפל</H2>
        <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>
            Neuro•Zen הוקמה על ידי עילאי פארן, מומחה ומדריך לנוירופונקטורה, מנהל
            פעילות נוירופונקטורה בישראל, עם רקע וניסיון קליני בבתי חולים ובאקדמיה.
          </p>
          <p>
            עילאי מתמחה בוויסות המערכת הנוירולוגית והאוטונומית במצבי חרדה,
            עוררות־יתר, התקפי פאניקה, סטרס מתמשך ופוסט־טראומה.
          </p>
        </div>
        <div className="mt-8 rounded-2xl border border-border/60 bg-card p-8">
          <h3 className="mb-4 text-xl font-bold text-secondary">הוכחות סמכות</h3>
          <div className="space-y-3 leading-relaxed text-muted-foreground">
            <p>
              עילאי התארח ב־YNET בכתבת מומחה על הקשר בין חרדה, הגוף ועצב הוואגוס.
            </p>
            <p>
              בנוסף, בראיון טלוויזיוני הוצגה הדגמה קלינית של העבודה עם גירוי
              נוירולוגי עדין והוסבר כיצד ניתן לעבוד עם מערכת העצבים בלי לחייב את
              המטופל לדבר על האירועים עצמם.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-muted/40">
        <H2>שאלות נפוצות</H2>
        <div className="divide-y divide-border/60 overflow-hidden rounded-2xl border border-border/60 bg-card">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
                className="flex w-full items-center justify-between gap-4 p-5 text-right"
              >
                <span className="font-bold text-secondary">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-primary transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                />
              </button>
              {openFaq === i && (
                <p className="px-5 pb-5 leading-relaxed text-muted-foreground">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section>
        <div className="rounded-3xl border border-border/60 bg-card p-10 text-center">
          <h2 className="text-2xl font-extrabold leading-snug text-secondary md:text-3xl">
            אם הגוף שלך מרגיש תקוע על מצב חירום, אפשר להתחיל בצעד אחד בלבד.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            לתיאום אבחון נוירולוגי מקיף והתנסות בטיפול ראשון ב־Neuro•Zen תל אביב
          </p>
          <p className="mt-3 font-bold text-secondary">500 ₪ | ללא התחייבות לסדרה</p>
          <div className="mt-8">
            <CTAButton />
          </div>
        </div>
      </Section>

      <footer className="border-t border-border/60 py-8 text-center text-sm text-muted-foreground">
        Neuro•Zen — שאול המלך 39, תל אביב | 054-808-2487
      </footer>

      {/* Sticky mobile CTA */}
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed inset-x-0 bottom-0 z-50 block bg-primary py-4 text-center text-base font-bold text-primary-foreground shadow-[0_-6px_24px_-8px_hsl(var(--primary)/0.5)] md:hidden"
      >
        אבחון + טיפול ראשון ב־500 ₪
      </a>
    </div>
  );
};

export default LandingCalm;
