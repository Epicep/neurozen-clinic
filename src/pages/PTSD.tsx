import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const WA = "https://wa.me/972548082487";

export default function PTSD() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SEO
        title="טיפול בפוסט טראומה (PTSD) ללא תרופות | Neuro•Zen"
        description="שיטת נוירופונקטורה מתקדמת המשקמת את המוח ומחזירה את מערכת העצבים להומאוסטזיס – טיפול טבעי בפוסט טראומה ללא מילים וללא תרופות."
        path="/ptsd"
        pageType="MedicalWebPage"
      />
      <Header />
      <main className="text-[#2C3E50] font-sans antialiased selection:bg-teal-100 pt-20">
        <section className="relative overflow-hidden py-20 md:py-32 border-b border-stone-200/60 bg-gradient-to-b from-[#FAF9F5] to-[#FDFCF7]">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-800 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-teal-100">
              המרכז הישראלי לנוירופונקטורה ונוירומודולציה מתקדמת
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-stone-900 leading-[1.15] mb-6">
              לשחרר את הטראומה מהגוף: <span className="font-semibold text-teal-600 block mt-2">טיפול בפוסט טראומה ללא תרופות וללא מילים</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed">
              גלו את נוירופונקטורה השיטה המתקדמת ביותר שמציעה טיפול טבעי בפוסט טראומה / PTSD, המשקם את המוח ומחזיר את מערכת העצבים להומאוסטזיס פיזיולוגי מלא.
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
            <h2 className="text-3xl font-light text-stone-900 mb-8 leading-tight">החתימה הפיזית של הטראומה: כשהגוף מסרב לשחרר את העבר</h2>
            <div className="space-y-6 text-stone-600 leading-relaxed text-base md:text-lg">
              <p>
                פוסט-טראומה (PTSD) אינה בעיה של "זיכרון רע" – היא פציעה נוירו-ביולוגית ואימונולוגית. המערכת הסימפתטית שלכם תקועה לצמיתות במצב דריכות גבוה ("הילחם או ברח"), מה שמביא להתפרצויות זעם בלתי מוסברות, פלאשבקים חודרניים, דריכות מתמדת, נדודי שינה כרוניים, כאבים פיזיים וקהות רגשית עמוקה שמנתקת אתכם מהקרובים לכם.
              </p>
              <p>
                רבים שואלים את עצמם איך לטפל בפוסט טראומה באופן מהיר ויעיל, מבלי להיאלץ להציף שוב ושוב את אירועי העבר בטיפולי שיחות ממושכים ומכאיבים, ומבלי לפתח תלות קבועה בתרופות מטשטשות. הטיפול ב-Neuro•Zen מציע טיפול ממוקד בטראומה שעוקף את העיבוד המילולי וניגש ישירות למערכת העצבים שבה מודפס הכאב.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FAF9F5] border-b border-stone-200/40">
          <div className="max-w-3xl mx-auto px-6">
            <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase block mb-3 text-center">המדע שלנו</span>
            <h2 className="text-3xl font-light text-stone-900 text-center mb-8">מדוע נוירופונקטורה עוקפת את חסימת הסטרס?</h2>
            <div className="space-y-6 text-stone-600 leading-relaxed text-base md:text-lg bg-white p-8 rounded-2xl border border-stone-200/40 shadow-sm">
              <p>בניגוד לגישות המנסות לחסום באופן פסיבי וזמני את מערכת העצבים, ב-Neuro•Zen מציעה נוירומודולציה אקטיבית ומשקמת- נוירופונקטורה:</p>
              <p>
                בעזרת גירוי ואגלי לא-פולשני באוזן, אנו מכוונים לרוחבי פולס מדויקים ביותר המבוססים על ספרות המחקר העדכנית ביותר: פולסים המגייסים את גזע המוח כדי לשחרר GABA וסרוטונין שמנטרלים את היפראקטיביות האמיגדלה (מרכז הפחד) ומשפרים דרמטית את ה-HRV.
              </p>
              <p>
                בנוסף, שימוש בפולסים ארוכים המפעילים את המסלול האנטי-דלקתי הוואגלי-כולינרגי ומעודדים ייצור BDNF לשיקום פלסטי של ההיפוקמפוס הפגוע.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white border-b border-stone-200/40">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase block mb-3">הוכחה קלינית&nbsp;</span>
              <h2 className="text-3xl font-light text-stone-900">סיפורי הצלחה ושיקום</h2>
            </div>
            <div className="bg-teal-50/40 p-8 rounded-2xl border border-teal-100 text-stone-700 leading-relaxed text-base md:text-lg">
              <h3 className="font-semibold text-teal-900 mb-4 text-xl">איפוס התפרצויות הזעם של לוחם מילואים:</h3>
              <p>
                גבר בן 30, סטודנט לתואר שני בתקופת שירות מילואים פעיל, הגיע לקליניקה כשהוא מתמודד עם PTSD, חרדה ודיכאון חמורים. הקושי הגדול ביותר שלו היה התפרצויות זעם וכעס בלתי נשלטים שפגעו קשות בבת זוגו ובסביבתו. הוא עבר סדרה של 8 מפגשים ממוקדים (חודש ימים, פעמיים בשבוע). בסיום הסדרה מדד ה-PTSD שלו (PCL-5 צנח מ-61 ל-28 – ציון תקין לחלוטין), התפרצויות הזעם נעלמו כלא היו והשינה השתקמה. בפולו-אפ שנערך כ-5 חודשים לאחר מכן, ולאחר שעבר סבב מילואים נוסף ואף פציעה, המטופל דיווח: "התפרצויות הזעם לא חזרו, אני שומר על רגעים שקטים. האפקט חד משמעית נשאר".
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
                  q: "כיצד מתבצע הטיפול הממוקד בטראומה מבלי לדבר עליה?",
                  a: "טראומה מודפסת בגוף ובמערכת העצבים האוטונומית, ולא רק בזיכרון המילולי. על ידי גירוי ישיר של העצבים המקשרים למוח (כמו עצב הוואגוס ועצבים סומטיים פריפריאליים), אנו מאפסים את תגובת הדריכות של הגוף ועוזרים לו לחוות מחדש תחושת ביטחון ורגיעה פיזית עמוקה, מבלי שתצטרכו להציף או לשתף את פרטי האירוע הטראומטי הכואב."
                },
                {
                  q: "האם תוצאות הטיפול נשמרות לאורך זמן?",
                  a: "כן. בניגוד לפתרונות חוסמים זמנית, הדיקור החשמלי והנוירופונקטורה מבצעים \"אימון מחדש\" וחיווט מחדש של הנוירונים במוח (נוירופלסטיות). נתוני המעקב והפולו-אפ הרשמיים של הקליניקה (חודש ו-3 חודשים לאחר סיום הטיפול) מראים בצורה מובהקת כי המטופלים משמרים את האפקט, מנהלים אורח חיים תקין ומצליחים להתמודד עם טריגרים ואירועי סטרס עתידיים בצורה שקטה ויציבה."
                },
                {
                  q: "כמה מפגשים כוללת הסדרה ומתי מרגישים הקלה?",
                  a: "המרשם הטיפולי הבסיסי בקליניקה מורכב מסדרה אינטנסיבית וממוקדת של 8 מפגשים, המתפרסים על פני חודש ימים (פעמיים בשבוע). מרבית המטופלים מדווחים על הקלה ראשונית מורגשת בדריכות הגופנית, ירידה בווליום של החרדה ושיפור ניכר באיכות השינה כבר לאחר המפגש ה-2 או ה-3, כאשר האפקט נבנה ומצטבר ממפגש למפגש."
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
            <h2 className="text-3xl md:text-4xl font-light mb-6">הגיע הזמן לשחרר את הגוף שלכם ממצב המלחמה</h2>
            <p className="text-stone-300 text-lg mb-8 max-w-2xl mx-auto font-light">
              תאמו פגישת אבחון וייעוץ מקצועית עם עילאי פארן בקליניקה הממוקמת בשאול המלך 39, תל אביב, ועשו את הצעד הראשון והבטוח לעבר שחרור עמוק ויציב מהטראומה.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-full transition-all text-lg shadow-lg">
              תיאום שיחת ייעוץ
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
