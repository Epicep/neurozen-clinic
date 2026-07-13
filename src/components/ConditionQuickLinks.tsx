import { Link } from "react-router-dom";

const links = [
  { label: "טיפול בחרדה", to: "/treatments/anxiety" },
  { label: "טיפול בדיכאון", to: "/treatments/depression" },
  { label: "טיפול בפוסט טראומה", to: "/treatments/ptsd" },
];

const ConditionQuickLinks = () => {
  return (
    <div dir="rtl" className="container mx-auto px-6 pt-16">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="px-5 py-2.5 rounded-full bg-card border border-border/60 text-sm font-medium text-foreground/80 hover:text-primary hover:border-primary/50 hover:shadow-sm transition-all"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ConditionQuickLinks;