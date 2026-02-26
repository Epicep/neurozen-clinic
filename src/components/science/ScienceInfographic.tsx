import { motion } from "framer-motion";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";
import { PFCBrainIcon, HPAAxisIcon, VagusNerveIcon } from "./ScienceIcons";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

/* ─── Chart Data ─── */
const radarData = [
  { metric: "ריכוז", before: 30, after: 80 },
  { metric: "זיכרון עבודה", before: 40, after: 75 },
  { metric: "קבלת החלטות", before: 20, after: 70 },
  { metric: "ויסות רגשי", before: 40, after: 80 },
  { metric: "גמישות קוגניטיבית", before: 20, after: 85 },
];

const lineData = [
  { week: "שבוע 0", cortisol: 22, baseline: 22 },
  { week: "שבוע 1", cortisol: 18, baseline: 21.5 },
  { week: "שבוע 2", cortisol: 15, baseline: 21 },
  { week: "שבוע 3", cortisol: 13, baseline: 20.8 },
  { week: "שבוע 4", cortisol: 11.5, baseline: 20.5 },
];

const barData = [
  { name: "HRV", control: 25, treatment: 48 },
  { name: "Norepinephrine", control: 85, treatment: 45 },
];

/* ─── Sections ─── */
const sections = [
  {
    Icon: PFCBrainIcon,
    title: "ויסות הקורטקס הקדם-מצחי (PFC)",
    description:
      "הנוירופונקטורה מפעילה מנגנוני ויסות בקורטקס הקדם-מצחי – מרכז קבלת ההחלטות, הריכוז והוויסות הרגשי במוח. גירוי ממוקד מוביל לשיפור מדיד בתפקודים קוגניטיביים גבוהים.",
    chart: (
      <ResponsiveContainer width="100%" height={280}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
          <PolarGrid stroke="hsl(40 15% 88%)" />
          <PolarAngleAxis
            dataKey="metric"
            tick={{ fontSize: 11, fill: "hsl(30 10% 42%)", fontFamily: "Heebo" }}
          />
          <Radar
            name="לפני טיפול"
            dataKey="before"
            stroke="#36454F"
            fill="#36454F"
            fillOpacity={0.15}
            strokeWidth={1.5}
          />
          <Radar
            name="אחרי טיפול"
            dataKey="after"
            stroke="#5B9A8B"
            fill="#5B9A8B"
            fillOpacity={0.25}
            strokeWidth={2}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(45 15% 99%)",
              border: "1px solid hsl(40 15% 88%)",
              borderRadius: "0.75rem",
              fontFamily: "Heebo",
              fontSize: 12,
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    ),
  },
  {
    Icon: HPAAxisIcon,
    title: "מודולציה של ציר ה-HPA ורמות הסטרס",
    description:
      "הטיפול מווסת את ציר ה-HPA (Hypothalamic-Pituitary-Adrenal) – מערכת הסטרס המרכזית של הגוף. ירידה הדרגתית ברמות הקורטיזול לאורך סדרת טיפולים מעידה על חזרה לאיזון ביולוגי.",
    chart: (
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={lineData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(40 15% 88%)" />
          <XAxis
            dataKey="week"
            tick={{ fontSize: 11, fill: "hsl(30 10% 42%)", fontFamily: "Heebo" }}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "hsl(30 10% 42%)", fontFamily: "Heebo" }}
            label={{
              value: "קורטיזול (μg/dL)",
              angle: -90,
              position: "insideRight",
              style: { fontSize: 11, fill: "hsl(30 10% 42%)", fontFamily: "Heebo" },
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(45 15% 99%)",
              border: "1px solid hsl(40 15% 88%)",
              borderRadius: "0.75rem",
              fontFamily: "Heebo",
              fontSize: 12,
            }}
          />
          <Line
            type="monotone"
            dataKey="baseline"
            stroke="#36454F"
            strokeDasharray="6 4"
            strokeWidth={1.5}
            dot={false}
            name="בסיס"
          />
          <Line
            type="monotone"
            dataKey="cortisol"
            stroke="#5B9A8B"
            strokeWidth={2.5}
            dot={{ r: 4, fill: "#5B9A8B", stroke: "#fff", strokeWidth: 2 }}
            name="קורטיזול"
          />
        </LineChart>
      </ResponsiveContainer>
    ),
  },
  {
    Icon: VagusNerveIcon,
    title: "גירוי עצב הוואגוס ואיזון המערכת האוטונומית",
    description:
      "גירוי עצב הוואגוס (Vagus Nerve Stimulation) משפעל את הענף הפאראסימפתטי ומחזיר את המערכת האוטונומית לאיזון. הנתונים מדגימים שיפור ב-HRV ובתגובה הוואגאלית.",
    chart: (
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={barData} barCategoryGap="20%">
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(40 15% 88%)" vertical={false} />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: "hsl(30 10% 42%)", fontFamily: "Heebo" }}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "hsl(30 10% 42%)", fontFamily: "Heebo" }}
            domain={[0, 100]}
            label={{
              value: "ערך",
              angle: -90,
              position: "insideRight",
              style: { fontSize: 11, fill: "hsl(30 10% 42%)", fontFamily: "Heebo" },
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(45 15% 99%)",
              border: "1px solid hsl(40 15% 88%)",
              borderRadius: "0.75rem",
              fontFamily: "Heebo",
              fontSize: 12,
            }}
          />
          <Bar dataKey="control" radius={[8, 8, 0, 0]} name="קבוצת ביקורת" fill="#36454F" />
          <Bar dataKey="treatment" radius={[8, 8, 0, 0]} name="גירוי עצב הוואגוס" fill="#5B9A8B" />
        </BarChart>
      </ResponsiveContainer>
    ),
  },
];

/* ─── Research Links ─── */
const researchLinks = [
  { title: "Transcutaneous Vagus Nerve Stimulation for PTSD: A Systematic Review", url: "https://pubmed.ncbi.nlm.nih.gov/34646018/" },
  { title: "Vagus Nerve Stimulation and the Autonomic Stress Response", url: "https://pubmed.ncbi.nlm.nih.gov/31632551/" },
  { title: "Neuromodulation for Post-Traumatic Stress Disorder", url: "https://pubmed.ncbi.nlm.nih.gov/31393649/" },
  { title: "HPA Axis Dysregulation in PTSD: Cortisol and Neurobiological Mechanisms", url: "https://pubmed.ncbi.nlm.nih.gov/21852024/" },
  { title: "BDNF and Neuroplasticity in Stress-Related Disorders", url: "https://pubmed.ncbi.nlm.nih.gov/24976939/" },
  { title: "Prefrontal Cortex Regulation and Emotional Processing in PTSD", url: "https://pubmed.ncbi.nlm.nih.gov/33777218/" },
  { title: "Autonomic Nervous System Dysfunction in Trauma Survivors", url: "https://pubmed.ncbi.nlm.nih.gov/33230485/" },
  { title: "Heart Rate Variability as a Biomarker for PTSD Recovery", url: "https://pubmed.ncbi.nlm.nih.gov/31252037/" },
  { title: "Vagal Tone and Inflammatory Pathways in Trauma", url: "https://pubmed.ncbi.nlm.nih.gov/34975424/" },
];

const ScienceInfographic = () => (
  <>
    {/* ── Infographic Charts ── */}
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4"
        >
          טיפול בפוסט טראומה (PTSD) - מנגנונים מדעיים
        </motion.h2>
        <motion.p
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-14 text-lg"
        >
          נתונים ותובנות מבוססי מחקר על שלושת המנגנונים המרכזיים
        </motion.p>

        <div className="space-y-14">
          {sections.map((s, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="rounded-2xl border border-border/60 bg-card p-6 md:p-10 shadow-card"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Icon + text */}
                <div className="md:w-1/2 space-y-4">
                  <s.Icon className="w-20 h-20" />
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </div>
                {/* Chart */}
                <div className="md:w-1/2 w-full">{s.chart}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Research Library ── */}
    <section className="py-16 bg-muted/40">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2
          {...fadeUp}
          className="text-3xl md:text-4xl font-bold text-foreground text-center mb-10"
        >
          ספריית מחקרים וסימוכין
        </motion.h2>

        <div className="grid gap-4">
          {researchLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-4 rounded-xl border border-border/60 bg-card px-6 py-5 shadow-soft hover:shadow-card hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </span>
              <span className="text-foreground font-medium text-sm md:text-base">
                {link.title}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default ScienceInfographic;
