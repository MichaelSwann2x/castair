/** Castair design tokens — Attio-inspired, aviation-precise */
export const colors = {
  light: {
    background: "#ffffff",
    surface: "#fafafb",
    foreground: "#111111",
    muted: "#787878",
    border: "#e5e5e5",
    accent: "#111111",
    success: "#0f7b3a",
    warning: "#b45309",
    danger: "#b91c1c",
  },
  dark: {
    background: "#0d0e10",
    surface: "#121417",
    foreground: "#eff3f4",
    muted: "#97a0af",
    border: "#1c2536",
    accent: "#e5e5e5",
    success: "#22c55e",
    warning: "#f59e0b",
    danger: "#ef4444",
  },
} as const;

export const typography = {
  fontFamily: "Inter, system-ui, -apple-system, sans-serif",
  body: "14px",
  lineHeight: 1.5,
  headingWeight: 600,
} as const;
