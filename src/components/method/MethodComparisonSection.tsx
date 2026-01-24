import { motion } from "framer-motion";
import { Scroll, Brain, Stethoscope, Target, BookOpen, Microscope } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const comparisonData = [
  {
    aspect: "מבוסס על",
    icon: BookOpen,
    tcm: "פילוסופיה עתיקה, צ'י ומרידיאנים",
    neuropuncture: "נוירו-אנטומיה, פיזיולוגיה ומחקרים קליניים",
  },
  {
    aspect: "אבחון",
    icon: Stethoscope,
    tcm: "דופק, לשון וחוסר איזון אנרגטי",
    neuropuncture: "בדיקה נוירולוגית, אורתופדית וממצאי דימות (MRI/CT)",
  },
  {
    aspect: "המטרה",
    icon: Target,
    tcm: "איזון זרימת האנרגיה בגוף",
    neuropuncture: "ויסות עצבי (Neuromodulation) ושיקום רקמות",
  },
];

const MethodComparisonSection = () => {
  return (
    <section className="py-24 bg-muted/30 neural-mesh-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ההבדל בין דיקור מסורתי לנוירופונקטורה
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            השוואה מדעית בין הגישות
          </p>
        </motion.div>

        {/* Desktop Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:block max-w-5xl mx-auto"
        >
          <div className="bg-card rounded-3xl shadow-card border border-border/50 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-b-2 border-border">
                  <TableHead className="text-right py-6 px-8 text-base font-semibold text-foreground w-1/4">
                    היבט
                  </TableHead>
                  <TableHead className="text-right py-6 px-8 text-base font-semibold w-[37.5%]">
                    <div className="flex items-center gap-3">
                      <Scroll className="w-5 h-5 text-amber-600" />
                      <span className="text-amber-700">דיקור סיני מסורתי (TCM)</span>
                    </div>
                  </TableHead>
                  <TableHead className="text-right py-6 px-8 text-base font-semibold w-[37.5%]">
                    <div className="flex items-center gap-3">
                      <Brain className="w-5 h-5 text-primary" />
                      <span className="text-primary">נוירופונקטורה (Neuropuncture)</span>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row, index) => (
                  <TableRow
                    key={row.aspect}
                    className={index !== comparisonData.length - 1 ? "border-b border-border/50" : ""}
                  >
                    <TableCell className="py-6 px-8 font-medium text-foreground">
                      <div className="flex items-center gap-3">
                        <row.icon className="w-5 h-5 text-muted-foreground" />
                        {row.aspect}
                      </div>
                    </TableCell>
                    <TableCell className="py-6 px-8 text-muted-foreground bg-amber-50/30">
                      {row.tcm}
                    </TableCell>
                    <TableCell className="py-6 px-8 text-foreground bg-accent/30 font-medium">
                      {row.neuropuncture}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {comparisonData.map((row, index) => (
            <motion.div
              key={row.aspect}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden"
            >
              <div className="p-4 bg-muted/50 border-b border-border/50">
                <div className="flex items-center gap-3 font-semibold text-foreground">
                  <row.icon className="w-5 h-5 text-primary" />
                  {row.aspect}
                </div>
              </div>
              <div className="p-4 space-y-4">
                <div className="p-3 bg-amber-50/50 rounded-xl">
                  <div className="flex items-center gap-2 text-xs text-amber-700 font-medium mb-2">
                    <Scroll className="w-4 h-4" />
                    דיקור מסורתי
                  </div>
                  <p className="text-sm text-muted-foreground">{row.tcm}</p>
                </div>
                <div className="p-3 bg-accent/50 rounded-xl">
                  <div className="flex items-center gap-2 text-xs text-primary font-medium mb-2">
                    <Microscope className="w-4 h-4" />
                    נוירופונקטורה
                  </div>
                  <p className="text-sm text-foreground font-medium">{row.neuropuncture}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodComparisonSection;
