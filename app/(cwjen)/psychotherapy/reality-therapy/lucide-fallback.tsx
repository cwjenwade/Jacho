import React from 'react';

type IconProps = { size?: number; className?: string };

const Base = ({ children, size = 16, className = '' }: React.PropsWithChildren<IconProps>) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    {children}
  </svg>
);

export const Users = (props: IconProps) => (
  <Base {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Base>
);

export const ShieldCheck = (props: IconProps) => (
  <Base {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </Base>
);

export const Trophy = (props: IconProps) => (
  <Base {...props}>
    <path d="M18 8a6 6 0 0 1-6 6" />
    <path d="M6 8a6 6 0 0 0 6 6" />
    <path d="M8 21h8" />
    <path d="M12 14v7" />
  </Base>
);

export const Wind = (props: IconProps) => (
  <Base {...props}>
    <path d="M3 8h13a3 3 0 1 1 0 6H6" />
  </Base>
);

export const Smile = (props: IconProps) => (
  <Base {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <path d="M9 9h.01" />
    <path d="M15 9h.01" />
  </Base>
);

export const Car = (props: IconProps) => (
  <Base {...props}>
    <rect x="1" y="7" width="22" height="7" rx="2" />
    <path d="M5 17v2" />
    <path d="M19 17v2" />
  </Base>
);

export const MapPin = (props: IconProps) => (
  <Base {...props}>
    <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </Base>
);

export const Target = (props: IconProps) => (
  <Base {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </Base>
);

export const HelpCircle = (props: IconProps) => (
  <Base {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 1 1 5.82 1c0 2-3 2-3 4" />
    <path d="M12 17h.01" />
  </Base>
);

export const ClipboardList = (props: IconProps) => (
  <Base {...props}>
    <path d="M9 2h6l1 4H8l1-4z" />
    <path d="M7 8h10v12H7z" />
    <path d="M9 12h6" />
    <path d="M9 16h6" />
  </Base>
);

export const CheckCircle2 = (props: IconProps) => (
  <Base {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
  </Base>
);

export const BrainCircuit = (props: IconProps) => (
  <Base {...props}>
    <path d="M8 9a4 4 0 1 1 8 0" />
    <path d="M3 13h2" />
    <path d="M19 13h2" />
  </Base>
);

export const HeartHandshake = (props: IconProps) => (
  <Base {...props}>
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
  </Base>
);
