# Castair Design System (Attio-inspired)

## Philosophy
Ruthless reduction. Precise data UI. Quiet power. Every element earns its place. Designed for hangar-floor and office use under pressure.

## Typography
- Primary: Inter (system fallback: system-ui, -apple-system, sans-serif)
- Tabular numerals for all measurements, times, part numbers
- Headings: weight 600, slight negative letter-spacing
- Body: 14px / 1.5

## Colour Tokens (light)
- background: #ffffff
- surface / card: #fafafb
- foreground: #111111
- muted: #787878
- border: #e5e5e5
- accent / primary action: #111111 (near-black)
- success (airworthy): #0f7b3a
- warning (deferred / watch): #b45309
- danger (grounded / reject): #b91c1c

## Colour Tokens (dark)
- background: #0d0e10
- surface: #121417
- foreground: #eff3f4
- muted: #97a0af
- border: #1c2536
- accent: #e5e5e5

## Components
- Cards: white/dark surface, 1px inner border or ultra-subtle shadow (0 1px 3px rgba(0,0,0,0.05)), generous padding, no heavy chrome
- Tables / grids: dense, sortable, filterable, Attio-style relational views
- Status chips: minimal, colour-coded by airworthiness state
- Activity timeline: full attribution of every agent + human action
- Approval gates: explicit, high-contrast, require identity confirmation

## Layout
- Left navigation (collapsible)
- Main workspace with view switcher (List / Board / Timeline / Aircraft)
- Right detail / agent panel
- Command palette (Cmd/Ctrl+K) for quick agent invocation and search

## Voice
Calm, precise, no fluff. Speaks to licensed inspectors and CAMO engineers. Human Voice core enforces natural language in all agent outputs.
