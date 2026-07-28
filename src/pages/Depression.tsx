import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const WA = "https://wa.me/972548082487";

export default function Depression() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SEO
        title="טיפול בדיכאון ללא תרופות | Neuro•Zen"
        description="אלטרנטיבה קלינית מבוססת מדע לצאת מדיכאון ללא כדורים – שפעול מוליכים עצביים ונוירופלסטיות בעזרת נוירופונקטורה בתל אביב."
        path="/depression"
        pageType="MedicalWebPage"
      />
      <Header />
      <main className="text-[#2C3E50] font-sans antialiased selection:bg-teal-100 pt-20">
        <section className="relative overflow-hidden py-20 md:py-32 border-b border-stone-200/60 bg-gradient-to-b from-[#FAF9F5] to-[#FDFCF7]">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-800 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-teal-100">
              נוירופונקטורה בתל אביב
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-stone-900 leading-[1.15] mb-6">
              טיפול בדיכאון ללא תרופות&nbsp;
            </h1>
            <p className="text-lg md:text-xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed">
              גלו אלטרנטיבה קלינית ומבוססת מדע שנועדה לעזור לכם לצאת מדיכאון ללא כדורים, באמצעות שפעול אקטיבי של מוליכים עצביים ונוירופלסטיות.
            </p>
            <div className="mt-10">
              <a href="#cta" className="inline-block px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full transition-all shadow-md hover:shadow-lg text-lg">
                תיאום שיחת ייעוץ
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white border-b border-stone-200/40">
          <div className="max-w-3xl mx-auto px-6">
            <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase block mb-3">הבעיה המרכזית&nbsp;</span>
            <h2 className="text-3xl font-light text-stone-900 mb-8 leading-tight">הפיזיולוגיה של הדיכאון: חציבה תחת ערפל כבד</h2>
            <div className="space-y-6 text-stone-600 leading-relaxed text-base md:text-lg">
              <p>
                דיכאון קליני או תחושת דכדוך כרונית אינם מייצגים "חולשה מנטלית". כאשר אתם נמצאים בדיכאון, המוח שלכם חווה שחיקה פיזית ודלקתית אמיתית. אתם חווים קהות רגשית עמוקה, אנהדוניה (חוסר יכולת ליהנות מדברים שאהבתם), עייפות פיזית קשה, "ערפל מוחי" וקושי קוגניטיבי לקבל החלטות פשוטות. רבים מנסים למצוא טיפול טבעי בדיכאון כי הם חוששים מתופעות הלוואי של כדורים פסיכיאטריים או מהתלות בהם.
              </p>
              <p>
                כאשר המערכת הדופמינרגית והסרוטונרגית שלכם חוות תת-פעילות כרונית כתוצאה מעומס סטרס פיזיולוגי, מה שאתם צריכים הוא לא אלחשים זמניים, אלא טיפול מהיר בדיכאון קליני שמפעיל מחדש את המנגנון הנוירולוגי לייצור סרוטונין ודופמין בגוף.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF9F5] border-b border-stone-200/40">
          <div className="max-w-3xl mx-auto px-6">
            <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase block mb-3 text-center">המדע שלנו</span>
            <h2 className="text-3xl font-light text-stone-900 text-center mb-8">כיצד נוירופונקטורה מעוררת מחדש את המוח?</h2>
            <div className="bg-white p-8 rounded-2xl border border-stone-200/40 shadow-sm text-stone-600 leading-relaxed text-base md:text-lg">
              <p>
                נוירופונקטורה, פועלת באופן פנימי ואקטיבי: היא מעוררת את המוח לייצר יותר סרוטונין ודופמין באופן טבעי, מפחיתה נוירו-דלקת שמעכבת ייצור נוירוטרנסמיטורים, ומעודדת צמיחת קשרים סינפטיים חדשים המאפשרים למוח להשתקם מהדיכאון באופן ביולוגי עצמאי.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white border-b border-stone-200/40">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase block mb-3">הוכחה קלינית&nbsp;</span>
              <h2 className="text-3xl font-light text-stone-900">תוצאות חסרות תקדים בשיקום מערכת העצבים</h2>
            </div>
            <div className="bg-teal-50/40 p-8 rounded-2xl border border-teal-100 text-stone-700 leading-relaxed text-base md:text-lg">
              <h3 className="font-semibold text-teal-900 mb-4 text-xl">הקפטן שחזר להשיט את הספינה:</h3>
              <p>
                מטופל בן 33, שהתמודד עם דיכאון וחרדה כרוניים במשך קרוב ל-6 שנים ועבר בין תרופות ואנשי מקצוע, הגיע לקליניקה במצב של קהות וייאוש. הוא תיאר את הדיכאון שלו כספינת פיראטים סוערת שבה הקפטן אדיש לחלוטין ואיבד שליטה. לאחר סדרה ממוקדת של 8 מפגשים בלבד בשיטת נוירופונקטורה, המדדים שלו הציגו שיפור של 81% ברמת הדיכאון (PHQ-9 צנח מ-21 ל-4). המטופל שיתף: "הים הפך רגוע, השמיים התבהרו, והקפטן קיבל בחזרה את התשוקה לחיות". הוריו סיכמו את השינוי במשפט המרגש: "אנחנו מרגישים שקיבלנו את הבן שלנו בחזרה".
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF9F5] border-b border-stone-200/40">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-light text-stone-900 text-center mb-12">שאלות נפוצות (FAQ)</h2>
            <div className="space-y-4">
              {[
                {
                  q: "כיצד הטיפול עוזר לצאת מדיכאון ללא כדורים?",
                  a: "התרופות הפסיכיאטריות הנפוצות מונעות ספיגה חוזרת של סרוטונין קיים. נוירופונקטורה, לעומת זאת, פועלת באופן פנימי ואקטיבי: היא מעוררת את המוח לייצר יותר סרוטונין ודופמין באופן טבעי, מפחיתה נוירו-דלקת שמעכבת ייצור נוירוטרנסמיטורים, ומעודדת צמיחת קשרים סינפטיים חדשים המאפשרים למוח להשתקם מהדיכאון באופן ביולוגי עצמאי."
                },
                {
                  q: "תוך כמה זמן מתחילים להרגיש בשינוי?",
                  a: "למרות ששיקום עמוק ומבני של מערכת העצבים לוקח מספר שבועות, מטופלים רבים מדווחים על הקלה ב\"ערפל המוחי\", שיפור באיכות השינה ועלייה ברמות האנרגיה כבר במפגשים ה-2 וה-3. האפקט הנוירומודולטורי מצטבר ממפגש למפגש."
                },
                {
                  q: "האם הטיפול בטוח לחלוטין?",
                  a: "בהחלט. הטיפול ב-Neuro•Zen מבוצע על ידי עילאי פארן, מומחה לשיטת Neuropuncture. הטיפול הוא זעיר-פולשני, מבוצע באמצעות מחטים חד-פעמיות וסטריליות, תחת פיקוח הדוק ומבוסס על מרשמים מדעיים בטוחים לחלוטין וללא תופעות לוואי סיסטמיות."
                }
              ].map((f, i) => (
                <div key={i} className="bg-white rounded-xl border border-stone-200/60 overflow-hidden shadow-sm transition-all">
                  <button onClick={() => toggleFaq(i)} className="w-full text-right px-6 py-5 font-semibold text-stone-950 flex justify-between items-center focus:outline-none">
                    <span>{f.q}</span>
                    <span className="text-teal-600 text-xl font-light">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-4">{f.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="py-20 bg-stone-900 text-[#FAF9F5] text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-light mb-6">מחזירים את האור ומעוררים את מסלולי האנרגיה והתגמול שלכם</h2>
            <p className="text-stone-300 text-lg mb-8 max-w-2xl mx-auto font-light">
              אל תישארו לבד תחת ערפל הדיכאון. צרו איתנו קשר עוד היום בקליניקה בתל אביב (שאול המלך 39) ותאמו פגישת ייעוץ.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-full transition-all text-lg shadow-lg">
              תאום שיחת ייעוץ.
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
