# Someli.ai — Build Progress

## Current Work
**Section:** 9 — How It Works
**Figma Node:** `233:10577`
**Status:** not started
**Stopped at:** Section 8 completed and verified - Before/After section rendering correctly with overlapping cards and grid background
**Next step:** Run `get_design_context` and `get_screenshot` on node 233:10577, identify the 3-tab accordion structure (Brand Intelligence, AI Content Engine, Distribution & Insights), then implement HowItWorksSection.tsx

---

## Sections

- [x] 0 — Header              → `components/Header.tsx`
- [x] 1 — Hero                → `components/sections/HeroSection.tsx`
- [x] 2 — Logos Marquee 1     → `components/sections/LogosSection.tsx`
- [x] 3 — Growth Engine       → `components/sections/GrowthEngineSection.tsx`
- [x] 4 — Features Overview   → `components/sections/FeaturesSection.tsx`
- [x] 5 — Proven Impact Stats → `components/sections/ProvenImpactSection.tsx`
- [x] 6 — Logos Marquee 2     → reuses `components/sections/LogosSection.tsx` with label="Our Partnerships"
- [x] 7 — Content Management  → `components/sections/ContentManagementSection.tsx`
- [x] 8 — Before / After      → `components/sections/BeforeAfterSection.tsx`
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

### FeaturesSection
- **File:** `components/sections/FeaturesSection.tsx`
- **Props:** none (static)
- **Assets used:** `public/assets/features/dashboard-mockup.png`
- **Decisions:** Five feature cards positioned absolutely over centered dashboard mockup. Card positions match exact Figma coordinates (top/left values). Dashboard image uses Next.js Image with exact percentage-based overflow positioning to match Figma's scaled/cropped view.

### ProvenImpactSection
- **File:** `components/sections/ProvenImpactSection.tsx`
- **Props:** none (client component - uses Framer Motion)
- **Assets used:** `public/assets/proven-impact/icon-increase.svg`, `public/assets/proven-impact/icon-group.svg`, `public/assets/proven-impact/grid-pattern.svg`
- **Decisions:** Grid background pattern applied via inline CSS `backgroundImage` (same as Hero). Large outlined numbers use 8-directional text-shadow approach with brand orange (`#ED6B52`) - avoids webkit-text-stroke internal artifacts. Fully dynamic via `stats` array - change number text directly. Infinite vertical scroll animation using Framer Motion (20s linear duration, seamless loop with duplicated stats). Fade gradients with `z-10` to overlay animated content. Pill label uses Inter font per Figma (only element that doesn't use Montserrat).

### ContentManagementSection
- **File:** `components/sections/ContentManagementSection.tsx`
- **Props:** none (client component - uses hover effects)
- **Assets used:** `public/assets/content-management/dashboard-screenshot.png`, `public/assets/content-management/social-icon.svg`
- **Decisions:** Three device cards rendered with `-rotate-[10deg]` transform. All three use the same dashboard screenshot image. All cards start at `opacity-30` with gray numbers - on hover, card transitions to full opacity and number color changes to orange (`#ED6B52`). Hover effect uses Tailwind `group` utilities with 300ms transitions. Cards have simple border `rgba(255,255,255,0.1)` without fx effects. Social platforms pill positioned below with white border on dark background. Pill label uses Inter font per Figma design context.

### BeforeAfterSection
- **File:** `components/sections/BeforeAfterSection.tsx`
- **Props:** none (static)
- **Assets used:** `public/assets/before-after/grid-pattern.png`, `public/assets/before-after/x-icon.svg`, `public/assets/before-after/check-icon.svg`
- **Decisions:** Two overlapping cards — "Before Someli" (white bg, orange border, positioned left with `top-[50px]`) and "After Someli" (gradient bg from `#DF8251` to `#D54050`, positioned right with `top-0`, higher z-index). Cards use exact pixel values from Figma (278.72px and 348.96px widths, 22.3px border radius). Grid background pattern applied via inline CSS `backgroundImage` (same as Hero and Proven Impact sections). Pill label uses Space Grotesk font per Figma design context.

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
