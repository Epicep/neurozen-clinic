import { Link } from "react-router-dom";

const links = [
  {
    label: "טיפול בחרדה",
    to: "/treatments/anxiety",
    dot: "bg-sky-500",
    bg: "bg-sky-50 border-sky-200 text-sky-800",
    hover: "hover:bg-sky-100 hover:border-sky-400",
  },
  {
    label: "טיפול בדיכאון",
    to: "/treatments/depression",
    dot: "bg-emerald-500",
    bg: "bg-emerald-50 border-emerald-200 text-emerald-800",
    hover: "hover:bg-emerald-100 hover:border-emerald-400",
  },
  {
    label: "טיפול בפוסט טראומה",
    to: "/treatments/ptsd",
    dot: "bg-amber-500",
    bg: "bg-amber-50 border-amber-200 text-amber-900",
    hover: "hover:bg-amber-100 hover:border-amber-400",
  },
];

const ConditionQuickLinks = () => {
  return (
    <div dir="rtl" className="container mx-auto px-6 pt-10">
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={`inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-full border-2 text-base md:text-lg font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all ${l.bg} ${l.hover}`}
          >
            <span className={`w-3 h-3 rounded-full ${l.dot} shadow-sm`} />
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ConditionQuickLinks;