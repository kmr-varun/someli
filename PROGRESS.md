# Someli.ai — Build Progress

## Current Work
**Section:** 2 — Logos Marquee 1
**Figma Node:** `225:6190`
**Status:** not started
**Stopped at:** —
**Next step:** Run `get_design_context` on node `225:6190`, take screenshot, identify all logos and marquee timing, download logo assets, build `components/sections/LogosSection.tsx` (reused for both marquee sections)

---

## Sections

- [x] 0 — Header              → `components/Header.tsx`
- [x] 1 — Hero                → `components/sections/HeroSection.tsx`
- [ ] 2 — Logos Marquee 1     → `components/sections/LogosSection.tsx`
- [ ] 3 — Growth Engine       → `components/sections/GrowthEngineSection.tsx`
- [ ] 4 — Features Overview   → `components/sections/FeaturesSection.tsx`
- [ ] 5 — Proven Impact Stats → `components/sections/ProvenImpactSection.tsx`
- [ ] 6 — Logos Marquee 2     → reuses `components/sections/LogosSection.tsx`
- [ ] 7 — Content Management  → `components/sections/ContentManagementSection.tsx`
- [ ] 8 — Before / After      → `components/sections/BeforeAfterSection.tsx`
- [ ] 9 — How It Works        → `components/sections/HowItWorksSection.tsx`
- [ ] 10 — Reach Calculator   → `components/sections/ReachCalculatorSection.tsx`
- [ ] 11 — Pricing            → `components/sections/PricingSection.tsx`
- [ ] 12 — Blog               → `components/sections/BlogSection.tsx`
- [ ] 13 — Certifications     → `components/sections/CertificationsSection.tsx`
- [ ] 14 — Footer             → `components/Footer.tsx`

---

## Shared Setup

- [x] `app/layout.tsx` — Montserrat (weights 400/500/600/700/800), updated metadata
- [x] `app/globals.css` — design tokens (colors, font CSS variables) via `@theme inline {}`
- [x] `app/page.tsx` — assembly file, imports Header + HeroSection

---

## Verification Protocol (per section)

After each section is coded, before marking `[x] done`:

1. Run dev server (`yarn dev`)
2. Chrome DevTools MCP → `navigate_page` → `http://localhost:3000`
3. `resize_page` → 1440×900
4. `take_screenshot` → compare to Figma `get_screenshot` side by side
5. `list_console_messages` → must be zero errors
6. Fix any visual differences, re-screenshot to confirm
7. Update `PROGRESS.md`

---

## Component Registry

### Header
- **File:** `components/Header.tsx`
- **Props:** none (static)
- **Assets used:** `public/assets/logo.png`, `public/assets/icons/chevron-down.svg`
- **Decisions:** Logo PNG not SVG. Nav dots are literal `•` chars. Asymmetric `pl-7 pr-10` on buttons.

### HeroSection
- **File:** `components/sections/HeroSection.tsx`
- **Props:** none (static)
- **Assets used:** `public/assets/hero/network-mockup.png`, `public/assets/hero/stars.svg`, `public/assets/hero/arrow-play.svg`, `public/assets/hero/avatars/avatar-1..4.png`, `public/assets/hero/icons/users.svg`, `public/assets/hero/icons/handshake.png`, `public/assets/hero/icons/chart.svg`, `public/assets/hero/icons/dollar.svg`, `public/assets/hero/icons/user-star.svg`
- **Decisions:** Component 12 (network viz + LinkedIn card) rendered as single static PNG. Stat row positioned via `paddingLeft: 746px` / `paddingRight: 75px` to match Figma `x=746` coordinate. Several Figma asset URLs returned SVG data despite `.png` extension — renamed on disk. `font-['Inter:*']` used inside stat cards per Figma (stat card font is Inter, not Montserrat).

---

## Assets

- `public/assets/logo.png` — Someli logo
- `public/assets/icons/chevron-down.svg` — nav chevron
- `public/assets/hero/network-circle.png` — circular network visualization (background layer, transparent bg, 953×953)
- `public/assets/hero/linkedin-card.png` — social post card (foreground layer, 486×591)
- `public/assets/hero/stars.svg` — 5-star rating strip
- `public/assets/hero/arrow-play.svg` — arrow for "See how it works"
- `public/assets/hero/avatars/avatar-1..4.png` — social proof avatar stack
- `public/assets/hero/icons/users.svg` — stat icon: engagement
- `public/assets/hero/icons/handshake.png` — stat icon: trust
- `public/assets/hero/icons/chart.svg` — stat icon: reach
- `public/assets/hero/icons/dollar.svg` — stat icon: conversion
- `public/assets/hero/icons/user-star.svg` — stat icon: brand

---

## Decisions Log

- Logo from Figma was PNG despite `.svg` extension in node name — saved as `logo.png`.
- Nav bullet dots: literal `•` characters, not CSS `list-disc`.
- Hero Component 12 rendered as static screenshot PNG — too complex (rotating circles, abs-positioned cards, connector lines) to recreate in code.
- Several hero icon assets returned SVG data with `.png` extension — all renamed to `.svg` on disk.
- Stat row `paddingLeft: 746px` matches Figma `x=746` canvas coordinate for the stats container.
