# Someli.ai — Build Progress

## Current Work
**Section:** 0 — Header
**Figma Node:** `337:10773`
**Status:** not started
**Stopped at:** —
**Next step:** Run `get_design_context` on node `337:10773`, download logo and chevron assets, then build `components/Header.tsx`

---

## Sections

- [ ] 0 — Header              → `components/Header.tsx`
- [ ] 1 — Hero                → `components/sections/HeroSection.tsx`
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

- [ ] `app/layout.tsx` — replace Geist with Montserrat (weights 400/500/600/700/800), update metadata
- [ ] `app/globals.css` — add CSS custom properties for all design tokens (colors, font)
- [ ] `app/page.tsx` — assembly file, import sections as they are built

> **Do shared setup as part of Section 0 (Header), since the font and CSS variables are needed from the start.**

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

> Components are added here as they are built. Check this before creating anything new.

_(empty — no components built yet)_

---

## Assets

> Assets are logged here as they are downloaded. Check `public/assets/` and this list before downloading again.

_(empty — no assets downloaded yet)_

---

## Decisions Log

> Non-obvious implementation decisions that must be preserved across sessions.

_(empty — no decisions recorded yet)_
