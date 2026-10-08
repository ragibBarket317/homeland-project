type IconProps = { className?: string };

const base = { viewBox: "0 0 24 24", "aria-hidden": true } as const;
const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2 } as const;

export const PhoneIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg {...base} fill="currentColor" className={className}>
    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1z" />
  </svg>
);

export const MailIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg {...base} {...stroke} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const ArrowRightIcon = ({ className = "h-4 w-4" }: IconProps) => (
  <svg {...base} {...stroke} className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ChevronDownIcon = ({ className = "h-3 w-3" }: IconProps) => (
  <svg {...base} {...stroke} strokeWidth={3} className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const MenuIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg {...base} {...stroke} className={className}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg {...base} {...stroke} className={className}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const PlayIcon = ({ className = "h-3.5 w-3.5" }: IconProps) => (
  <svg {...base} fill="currentColor" className={className}>
    <path d="M7 4.5v15l13-7.5z" />
  </svg>
);

export const PauseIcon = ({ className = "h-3.5 w-3.5" }: IconProps) => (
  <svg {...base} fill="currentColor" className={className}>
    <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
  </svg>
);

export const WhatsAppIcon = ({ className = "h-5 w-5" }: IconProps) => (
  <svg {...base} {...stroke} strokeLinejoin="round" className={className}>
    <path d="M3 21l1.6-4.8A9 9 0 1 1 8 19.6z" />
    <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8a4 4 0 0 1-2-2l.8-1-1-2z" fill="currentColor" stroke="none" />
  </svg>
);
