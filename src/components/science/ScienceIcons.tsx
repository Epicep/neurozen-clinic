const PFCBrainIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="40" cy="38" rx="28" ry="26" stroke="hsl(168 55% 42%)" strokeWidth="1.5" opacity="0.5" />
    <path
      d="M22 44c-2-6 0-14 4-20s10-10 16-10c6 0 12 4 16 10s6 14 4 20"
      stroke="hsl(215 40% 22%)" strokeWidth="1.8" strokeLinecap="round" fill="none"
    />
    <path
      d="M40 14c-2 4-4 10-4 16s1 12 4 14c3-2 4-8 4-14s-2-12-4-16z"
      stroke="hsl(215 40% 22%)" strokeWidth="1.2" fill="none" opacity="0.4"
    />
    {/* PFC highlight area */}
    <path
      d="M28 22c3-5 7-8 12-8s9 3 12 8"
      stroke="hsl(168 55% 42%)" strokeWidth="2.5" strokeLinecap="round" fill="none"
    />
    <ellipse cx="40" cy="20" rx="10" ry="6" fill="hsl(168 55% 42%)" opacity="0.12" />
    <circle cx="40" cy="19" r="2" fill="hsl(168 55% 42%)" opacity="0.6" />
    {/* Neural connections */}
    <circle cx="32" cy="30" r="1.2" fill="hsl(215 40% 22%)" opacity="0.3" />
    <circle cx="48" cy="30" r="1.2" fill="hsl(215 40% 22%)" opacity="0.3" />
    <circle cx="36" cy="40" r="1" fill="hsl(215 40% 22%)" opacity="0.2" />
    <circle cx="44" cy="40" r="1" fill="hsl(215 40% 22%)" opacity="0.2" />
    <text x="40" y="72" textAnchor="middle" fontSize="7" fill="hsl(168 55% 42%)" fontFamily="Heebo" fontWeight="600">PFC</text>
  </svg>
);

const HPAAxisIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Brain (top) */}
    <ellipse cx="40" cy="16" rx="14" ry="10" stroke="hsl(215 40% 22%)" strokeWidth="1.5" fill="none" />
    <path d="M33 14c2-3 5-4 7-4s5 1 7 4" stroke="hsl(168 55% 42%)" strokeWidth="2" strokeLinecap="round" />
    {/* Hypothalamus dot */}
    <circle cx="40" cy="20" r="2.5" fill="hsl(168 55% 42%)" opacity="0.7" />
    {/* Downward pathway */}
    <line x1="40" y1="26" x2="40" y2="36" stroke="hsl(168 55% 42%)" strokeWidth="1.5" strokeDasharray="2 2" />
    {/* Pituitary */}
    <ellipse cx="40" cy="40" rx="5" ry="3" stroke="hsl(215 40% 22%)" strokeWidth="1.2" fill="hsl(168 55% 42%)" opacity="0.15" />
    <circle cx="40" cy="40" r="1.5" fill="hsl(168 55% 42%)" opacity="0.5" />
    {/* Downward to adrenals */}
    <line x1="40" y1="43" x2="32" y2="56" stroke="hsl(168 55% 42%)" strokeWidth="1.5" strokeDasharray="2 2" />
    <line x1="40" y1="43" x2="48" y2="56" stroke="hsl(168 55% 42%)" strokeWidth="1.5" strokeDasharray="2 2" />
    {/* Adrenal glands */}
    <ellipse cx="30" cy="60" rx="6" ry="4" stroke="hsl(215 40% 22%)" strokeWidth="1.2" fill="hsl(168 55% 42%)" opacity="0.1" />
    <ellipse cx="50" cy="60" rx="6" ry="4" stroke="hsl(215 40% 22%)" strokeWidth="1.2" fill="hsl(168 55% 42%)" opacity="0.1" />
    {/* Feedback arrow */}
    <path d="M56 56c4-8 4-18 2-28" stroke="hsl(215 40% 22%)" strokeWidth="1" strokeDasharray="3 2" opacity="0.4" />
    <text x="40" y="76" textAnchor="middle" fontSize="7" fill="hsl(168 55% 42%)" fontFamily="Heebo" fontWeight="600">HPA</text>
  </svg>
);

const VagusNerveIcon = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Outer ear */}
    <path
      d="M52 20c6 4 10 12 10 22s-4 18-10 22"
      stroke="hsl(215 40% 22%)" strokeWidth="1.5" fill="none" strokeLinecap="round"
    />
    <path
      d="M48 24c4 3 7 10 7 18s-3 15-7 18"
      stroke="hsl(215 40% 22%)" strokeWidth="1.3" fill="none" strokeLinecap="round"
    />
    {/* Inner ear structure */}
    <path
      d="M44 30c2 2 4 6 4 12s-2 10-4 12"
      stroke="hsl(215 40% 22%)" strokeWidth="1.2" fill="none" opacity="0.6"
    />
    {/* Tragus / concha area */}
    <ellipse cx="42" cy="42" rx="4" ry="6" stroke="hsl(215 40% 22%)" strokeWidth="1" fill="none" opacity="0.4" />
    {/* Vagus branch highlight */}
    <path
      d="M38 36c-2 2-3 5-3 8s1 5 3 7"
      stroke="hsl(168 55% 42%)" strokeWidth="2.5" strokeLinecap="round" fill="none"
    />
    <circle cx="37" cy="42" r="3" fill="hsl(168 55% 42%)" opacity="0.2" />
    <circle cx="37" cy="42" r="1.5" fill="hsl(168 55% 42%)" opacity="0.6" />
    {/* Nerve pathway going down */}
    <path
      d="M37 50c-4 4-8 8-12 14"
      stroke="hsl(168 55% 42%)" strokeWidth="1.5" strokeDasharray="2 2" strokeLinecap="round"
    />
    <circle cx="24" cy="66" r="2" fill="hsl(168 55% 42%)" opacity="0.4" />
    <text x="40" y="76" textAnchor="middle" fontSize="6" fill="hsl(168 55% 42%)" fontFamily="Heebo" fontWeight="600">VAGUS</text>
  </svg>
);

export { PFCBrainIcon, HPAAxisIcon, VagusNerveIcon };
