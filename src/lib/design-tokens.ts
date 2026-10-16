/** Castair design tokens — Kimpton.ai inspired: precise, technical, calm */
export const colors = {
  light: {
    background: "#fafafa",
    surface: "#ffffff",
    surfaceElevated: "#ffffff",
    foreground: "#0a0a0a",
    muted: "#737373",
    border: "#e5e5e5",
    accent: "#171717",
    accentSoft: "#f5f5f5",
    success: "#15803d",
    warning: "#b45309",
    danger: "#b91c1c",
    highlight: "#3b82f6",
  },
  dark: {
    background: "#09090b",
    surface: "#0f0f12",
    surfaceElevated: "#18181b",
    foreground: "#fafafa",
    muted: "#a1a1aa",
    border: "#27272a",
    accent: "#fafafa",
    accentSoft: "#27272a",
    success: "#22c55e",
    warning: "#f59e0b",
    danger: "#ef4444",
    highlight: "#60a5fa",
  },
} as const;

export const typography = {
  fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  body: "14px",
  lineHeight: 1.5,
  headingWeight: 600,
  trackingTight: "-0.025em",
} as const;

export const motion = {
  fast: "150ms",
  base: "200ms",
  slow: "300ms",
  ease: "cubic-bezier(0.16, 1, 0.3, 1)",
} as const;
