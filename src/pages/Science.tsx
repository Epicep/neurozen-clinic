import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Brain, Zap, Activity, Stethoscope, BookOpen, ExternalLink } from "lucide-react";
import SEO from "@/components/SEO";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const sections = [
  {
    icon: Zap,
    title: "נוירוכימיה: שחרור המוליכים העצביים",
    text: (
      <>
        הדיקור הנוירולוגי מעורר את המערכת האופיואידית האנדוגנית של הגוף. מחקרים מוכיחים כי גירוי נקודות ספציפיות מוביל לשחרור <strong>אנדורפינים</strong> ואנקהפלינים, הפועלים כמשככי כאב טבעיים וכמווסתים רגשיים עוצמתיים.
      </>
    ),
    links: [
      { label: "The Role of Endogenous Opioids in Acupuncture (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/14990755/" },
    ],
    visual: "Neural Synapse Diagram",
  },
  {
    icon: Brain,
    title: "נוירו-פלסטיות: 'דשן למוח' (BDNF)",
    text: (
      <>
        אחד הגילויים המרתקים הוא היכולת של שיטת ה-Neuropuncture להעלות את רמות ה-<strong>BDNF</strong> (Brain-Derived Neurotrophic Factor). זהו חלבון קריטי התומך בהישרדות נוירונים ומעודד צמיחה של סינפסות חדשות. זהו המפתח ל<strong>'חיווט מחדש'</strong> של המוח – תהליך המאפשר לשינוי הטיפולי להפוך לקבוע.
      </>
    ),
    links: [
      { label: "Acupuncture and Neuroplasticity: The role of BDNF (PMC)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10283049/" },
    ],
  },
  {
    icon: Activity,
    title: "ויסות עצב הוואגוס והמערכת האוטונומית",
    text: (
      <>
        השימוש בטכניקות כמו <strong>SGM</strong> ו-<strong>tVNS</strong> מאפשר גירוי מדויק של עצב הוואגוס – ה'בלם' המרכזי של מערכת הסטרס. מחקרים מראים שגירוי זה מוריד רמות קורטיזול ומחזיר את הגוף לאיזון (Homeostasis).
      </>
    ),
    links: [
      { label: "Vagus Nerve Stimulation and Autonomic Regulation (PMC)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8613407/" },
      { label: "Autonomic Effects of Acupuncture (PubMed)", url: "https://pubmed.ncbi.nlm.nih.gov/9646895/" },
    ],
    visual: "Vagus Nerve Pathway Diagram",
  },
  {
    icon: Stethoscope,
    title: "הוכחה קלינית: המקרה של פרקינסון (PD)",
    text: (
      <>
        הנוירופונקטורה הוכיחה יעילות משמעותית בשיפור איכות החיים והתפקוד המוטורי של מטופלים המתמודדים עם מחלת הפרקינסון.
      </>
    ),
    links: [
      { label: "Efficacy of Neuropuncture in Parkinson's Disease (OASK)", url: "https://oaskpublishers.com/assets/article-pdf/the-efficacy-of-neuropuncture-electrical-acupuncture-treatment-of-patients-with-parkinsons-disease.pdf" },
    ],
  },
  {
    icon: BookOpen,
    title: "ביסוס השיטה והאותנטיות המדעית",
    text: (
      <>
        המתודולוגיה של ד&quot;ר מייקל קורדינו מגדירה מחדש את האותנטיות של הדיקור דרך משקפי מדעי המוח המודרניים.
      </>
    ),
    links: [
      { label: "Neuropuncture: Solidifying Acupuncture's Authenticity (JAIM)", url: "https://jaimonline.org/neuropuncture-solidifying-acupunctures-authenticity/" },
      { label: "Evidence-Based Neuropuncture (Liebertpub)", url: "https://www.liebertpub.com/doi/full/10.1089/acu.2020.1514" },
    ],
  },
];

const Science = () => {
  return (
    <div className="min-h-screen bg-background font-heebo" dir="rtl">
      <SEO
        title="המדע והמחקר מאחורי נוירופונקטורה | Neuro•Zen"
        description="סקירת מנגנונים ומקורות מחקריים בנושאי דיקור חשמלי, נוירופלסטיות, עצב הוואגוס, כאב ושיקום נוירולוגי."
        path="/science"
        pageType="CollectionPage"
      />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-accent/30 to-background">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            {...fadeUp}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            המדע והמחקר ב-Neuro•<span className="text-primary">Zen</span>
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            הנוירופונקטורה אינה רק טכניקה; היא שפה מדעית המבוססת על אלפי מחקרים קליניים וביולוגיים. להלן המנגנונים המרכזיים שדרכם הטיפול פועל על מערכת העצבים:
          </motion.p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl space-y-16">
          {sections.map((section, index) => (
            <motion.article
              key={index}
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-card rounded-2xl border-0 p-8 md:p-10 shadow-[0_4px_40px_-12px_hsl(220_60%_20%/0.08)] hover:shadow-[0_12px_50px_-12px_hsl(220_60%_20%/0.14)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <section.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  {section.title}
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                {section.text}
              </p>

              {section.visual && (
                <div className="w-full h-48 rounded-xl bg-muted/50 border border-border/40 flex items-center justify-center mb-6">
                  <span className="text-muted-foreground/60 text-sm">[{section.visual}]</span>
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                {section.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium border border-primary/15 hover:border-primary/40 hover:shadow-sm transition-all duration-200"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Science;
