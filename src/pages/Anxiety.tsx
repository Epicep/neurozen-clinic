import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const WA = "https://wa.me/972548082487";

export default function Anxiety() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <SEO
        title="טיפול בחרדה ללא תרופות | Neuro•Zen"
        description="טיפול טבעי בחרדה מבוסס מדע קשיח בעזרת נוירופונקטורה. איפוס מערכת האזעקה הפנימית ללא תופעות לוואי. תל אביב."
        path="/anxiety"
      />
      <Header />
      <main className="text-[#2C3E50] font-sans antialiased selection:bg-teal-100 pt-20">
        {/* Hero */}
        <section className="relative overflow-hidden py-20 md:py-32 border-b border-stone-200/60 bg-gradient-to-b from-[#FAF9F5] to-[#FDFCF7]">
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="inline-block px-4 py-1.5 bg-teal-50 text-teal-800 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-teal-100">
              נוירופונקטורה בתל אביב
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-stone-900 leading-[1.15] mb-6">
              טיפול בחרדה ללא תרופות : <span className="font-semibold text-teal-600 block mt-2">לאפס את מערכת האזעקה הפנימית:</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-600 font-light max-w-3xl mx-auto leading-relaxed">
              אם אתם מחפשים טיפול טבעי בחרדה שמבוסס על מדע קשיח ומציע טיפול מהיר בחרדה ללא תופעות לוואי – הגעתם למקום הנכון.
            </p>
            <div className="mt-10">
              <a href="#cta" className="inline-block px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full transition-all shadow-md hover:shadow-lg text-lg">
                תיאום שיחת ייעוץ
              </a>
            </div>
          </div>
        </section>

        {/* Core Problem */}
        <section className="py-20 bg-white border-b border-stone-200/40">
          <div className="max-w-3xl mx-auto px-6">
            <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase block mb-3">הבעיה המרכזית (The Core Problem)</span>
            <h2 className="text-3xl font-light text-stone-900 mb-8 leading-tight">
              המחיר הפיזי של מערכת עצבים שיצאה מאיזון
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed text-base md:text-lg">
              <p>
                חרדה איננה רק "מחשבה מטרידה" או תחושת דאגה זמנית – היא מצב של עוררות-יתר סימפתטית כרונית. הגוף שלכם מתנהג כאילו הוא נמצא תחת מתקפה מתמדת: דופק מהיר, נשימה שטחית, מתח שרירים בלתי פוסק, הזעות, נדודי שינה חריפים, ותחושה פנימית קבועה של חוסר שקט הם חלק מהתסמינים הנפוצים לחרדה.
              </p>
              <p>
                במצב זה, המוח שלכם מוצף בכימיה שגורמת לעוררות, בעוד שהבלמים הטבעיים שלו משותקים. רבים שואלים את עצמם איך להרגיע חרדה באופן טבעי כשהגוף מסרב להקשיב למילים, והטיפולים המסורתיים מציעים פתרונות תרופתיים, חשובים ומצילי חיים, אך מלווים בתופעות לוואי ולא בהכרח מתאים לשימוש טווח ארוך או בטיפול שיחות שאינו נוגע בשורש הפיזיולוגי.
              </p>
            </div>
          </div>
        </section>

        {/* Science */}
        <section className="py-20 bg-[#FAF9F5] border-b border-stone-200/40">
          <div className="max-w-4xl mx-auto px-6">
            <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase block mb-3 text-center">המדע שלנו (The Science)</span>
            <h2 className="text-3xl font-light text-stone-900 text-center mb-12">נוירופונקטורה (Neuropuncture)</h2>
            <div className="grid md:grid-cols-2 gap-8 text-stone-600 text-base leading-relaxed mb-10">
              <div className="space-y-6 bg-white p-8 rounded-2xl border border-stone-200/40 shadow-sm">
                <p>
                  Neuropuncture שפותחה בארה"ב ומיושמת ב-Neuro•Zen באופן בלעדי בישראל, משתמשת ברשת העצבים הפריפריאלית והמרכזית כרשת חומרה פיזית. באמצעות גירוי חשמלי עדין בתדרים ורוחבי פולס מתוכנתים במדויק, אנו מפעילים מחדש את מערכת הוויסות הטבעית של המוח.
                </p>
                <p>
                  בעזרת גירוי המכוון בדיוק לענף עצב הוואגוס באוזן, אנו משתמשים בטכנולוגיית שינוי תדרים מהיר המונע אדפטציה של מערכת העצבים וממקסם את פעילות הפארא-סימפטטית, מה שמעלה מיידית את שונות קצב הלב (HRV) ומאפס את ציר ה-HPA.
                </p>
              </div>
              <div className="space-y-6 bg-white p-8 rounded-2xl border border-stone-200/40 shadow-sm flex flex-col justify-between">
                <p>
                  במקביל, אנו משלבים איזורים נוספים כדי לעורר את המסלול הכולינרגי האנטי-דלקתי, המוריד את רמות הדלקת הסיסטמית ולהמריץ ייצור של BDNF – "הדשן הביולוגי" שמחבר מחדש את חיווט המוח ומרגיע את האמיגדלה.
                </p>
                <div className="bg-stone-50 p-5 rounded-xl border border-stone-200/60 text-xs text-stone-500 leading-relaxed">
                  💡 הבהרה קלינית חשובה: מרפאת Neuro•Zen נשענת על מדעי המוח היישומיים ועל נתונים קליניים כבסיס ידע מדעי מוצק. הקליניקה אינה מבצעת בדיקות מעבדה או בדיקות שתן דיאגנוסטיות בשטחה (On-site), אלא משתמשת במדדים אלו כמקור ידע מבוסס להבנת הפעילות הביולוגיות של הגוף.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Evidence */}
        <section className="py-20 bg-white border-b border-stone-200/40">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-10">
              <span className="text-teal-600 font-semibold text-xs tracking-wider uppercase block mb-3">הוכחה קלינית</span>
              <h2 className="text-3xl font-light text-stone-900">תוצאות קליניות בקליניקת תל אביב</h2>
            </div>
            <div className="bg-teal-50/40 p-8 rounded-2xl border border-teal-100 text-stone-700 leading-relaxed text-base md:text-lg">
              <h3 className="font-semibold text-teal-900 mb-4 text-xl">הצלחה קלינית מתועדת במצבי חרדה קיצוניים:</h3>
              <p>
                מטופלת בת 36, אשר סבלה מחרדה חריפה, התקפי פאניקה יומיומיים ופוסט-טראומה שהחמירו בעקבות המלחמה, עברה את מרשם הטיפול הממוקד ב-Neuro•Zen. בסיום 8 מפגשים בלבד (פעמיים בשבוע למשך חודש), הציגה המטופלת שיפור יוצא דופן של 80.6% במדד ה-PCL-5. החרדה ירדה לווליום נמוך משמעותית, השינה חזרה לתפקוד מלא והיא הצליחה להשתקם ולחזור לשגרה ללא צורך בהתערבויות תרופתיות.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#FAF9F5] border-b border-stone-200/40">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-light text-stone-900 text-center mb-12">שאלות נפוצות (FAQ)</h2>
            <div className="space-y-4">
              {[
                {
                  q: "כיצד משפיעה נוירופונקטורה על חרדה באופן מהיר כל כך?",
                  a: "הזרם החשמלי המדויק עוקף את הצורך במחשבה מודעת או מילולית ומשפיע ישירות על הסיבים העצביים המוליכים למוח. על ידי הפעלת ענף עצב הוואגוס ונקודות פריפריאליות, אנו משנים את האיזון הנוירוכימי בגזע המוח תוך דקות, ומאפשרים למערכת הפארא-סימפתטית להוריד את קצב הלב ולהפסיק את תגובת הסטרס באופן ."
                },
                {
                  q: "האם הטיפול כואב?",
                  a: "לא. הטיפול ב-Neuro•Zen מתוכנן להיות נעים ומרגיע במיוחד. השימוש הוא במחטים דקיקות וגמישות ביותר, ועוצמת הגירוי החשמלי נקבעת תחת בקרה מלאה ואישית שלכם. רוב המטופלים חווים תחושה נעימה של תפיחות או זרם קל ומדווחים על הרפיה פיזית ומנטלית כבר בדקות הראשונות."
                },
                {
                  q: "האם הטיפול יכול להחליף את הטיפול הקיים שלי?",
                  a: "כן, במקרים רבים הטיפול מהווה אלטרנטיבה מעולה המאפשרת לאנשים לשפר את תסמיני החרדה באופן טבעי ולהגיע לשינוי גדול באורח החיים. עם זאת, הטיפול שלנו משתלב בצורה בטוחה וסינרגטית לחלוטין לצד טיפול פסיכותרפי או תרופתי קיים, ומסייע להוריד את \"העומס האלוסטטי\" של הגוף כדי להקל על תהליך ההחלמה הכללי."
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

        {/* CTA */}
        <section id="cta" className="py-20 bg-stone-900 text-[#FAF9F5] text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-4xl font-light mb-6">רוצים להחזיר את השקט למערכת העצבים שלכם?</h2>
            <p className="text-stone-300 text-lg mb-8 max-w-2xl mx-auto font-light">
              תאמו עוד היום שיחת התייעצות אישית בקליניקה שלנו בשאול המלך 39, תל אביב.
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
