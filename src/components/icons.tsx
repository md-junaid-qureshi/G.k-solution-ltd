import type { SVGProps, ReactElement } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const defaults: IconProps = {
  size: 15,
  strokeWidth: 1.25,
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function icon(fn: (p: IconProps) => ReactElement) {
  return fn;
}

export const IconInstagram = icon(({ size = defaults.size, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaults} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
));

export const IconLinkedin = icon(({ size = defaults.size, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaults} {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
));

export const IconFacebook = icon(({ size = defaults.size, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaults} {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
));

export const IconYoutube = icon(({ size = defaults.size, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaults} {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
));

export const IconWhatsApp = icon(({ size = defaults.size, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" {...defaults} {...props}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
));

