import { Link } from "react-router-dom";

const links = [
  {
    label: "טיפול בחרדה",
    to: "/treatments/anxiety",
    dot: "bg-sky-400",
    hover: "hover:bg-sky-50 hover:border-sky-300 hover:text-sky-700",
  },
  {
    label: "טיפול בדיכאון",
    to: "/treatments/depression",
    dot: "bg-emerald-400",
    hover: "hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700",
  },
  {
    label: "טיפול בפוסט טראומה",
    to: "/treatments/ptsd",
    dot: "bg-amber-400",
    hover: "hover:bg-amber-50 hover:border-amber-300 hover:text-amber-700",
  },
];

const ConditionQuickLinks = () => {
  return (
    <div dir="rtl" className="container mx-auto px-6 pt-10">
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-card border border-border/60 text-sm font-medium text-foreground/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all ${l.hover}`}
          >
            <span className={`w-2 h-2 rounded-full ${l.dot}`} />
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ConditionQuickLinks;