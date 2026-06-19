# Someli.ai — Pricing Page Build Progress

## Current Work
**Section:** All sections complete! ✅
**Figma Node:** —
**Status:** done
**Stopped at:** All 9 sections wired up in app/pricing/page.tsx
**Next step:** Full-page visual verification with Chrome DevTools MCP, or responsive optimizations if requested

---

## Sections

- [x] 0 — Header              → reuses `components/Header.tsx` (already built)
- [x] 1 — Hero                → `components/sections/pricing/PricingHeroSection.tsx`
- [x] 2 — Tab Bar             → `components/sections/pricing/PricingMarqueeBar.tsx`
- [x] 3 — Pricing Cards       → reuses `components/sections/PricingSection.tsx` (already built)
- [x] 4 — Logos Marquee 1     → reuses `components/sections/LogosSection.tsx` (label="Businesses That Grow With Someli")
- [x] 5 — Stats + Testimonial → `components/sections/pricing/StatsTestimonialSection.tsx`
- [x] 6 — FAQs               → `components/sections/pricing/FAQSection.tsx`
- [x] 7 — Partnerships Marquee → reuses `components/sections/LogosSection.tsx` (label="Our Partnerships")
- [x] 8 — Footer              → reuses `components/Footer.tsx` (already built)

---

## Page Info

- **Route:** `app/pricing/page.tsx`
- **Figma Page Node:** `267:13446`
- **Canvas Width:** 1440px
- **Total Height:** 4934px

---

## Section Map (Figma Node IDs)

| # | Figma Node ID | Name | Height | Notes |
|---|---|---|---|---|
| 0 | `337:10803` | Header | 96px | Reuse existing — instance of same header |
| 1 | `267:13462` | Hero | 560px | Grid bg, "Simple Pricing. Serious Growth." + right-side illustration |
| 2 | `267:13524` | Tab Bar | 132px | Horizontal pricing plan toggle/navigation strip |
| 3 | `267:14155` | Pricing Cards | 1204px | "One plan..." heading + 3-col layout (features / price card / benefits+guarantee) |
| 4 | `267:14382` | Logos Marquee | 258px | "Businesses That Grow With Someli" + scrolling logos |
| 5 | `267:14525` | Stats + Testimonial | 609px | Left: 2.5x/10x/30 Days bars. Right: "Rated 5 Stars..." copy |
| 6 | `267:13857` | FAQs | 705px | "FAQ's" heading + 4 accordion rows |
| 7 | `267:13800` | Partnerships Marquee | 258px | "OUR PARTNERSHIPS" + scrolling logos |
| 8 | `337:11140` | Footer | 1213px | Reuse existing footer |

---

## Reusable Components (from home page)

- `components/Header.tsx` — identical header
- `components/Footer.tsx` — identical footer
- `components/sections/LogosSection.tsx` — used for sections 4 and 7 with different labels
- `components/SectionLabel.tsx` — pill labels (if exists)

---

## New Components Needed

| Component | File | Figma Node | Notes |
|---|---|---|---|
| PricingHeroSection | `components/sections/pricing/PricingHeroSection.tsx` | `267:13462` | Grid bg, heading, subtext, illustration |
| PricingTabBar | `components/sections/pricing/PricingTabBar.tsx` | `267:13524` | Horizontal tabs/toggle strip |
| ~~PricingCardsSection~~ | reuses `components/sections/PricingSection.tsx` | `267:14155` | Identical to home page pricing — same 3-col layout |
| StatsTestimonialSection | `components/sections/pricing/StatsTestimonialSection.tsx` | `267:14525` | Bar chart stats + "Rated 5 Stars" testimonial |
| FAQSection | `components/sections/pricing/FAQSection.tsx` | `267:13857` | Accordion with 4 questions |

---

## Component Registry

*(Will be populated as sections are built)*

---

## Decisions Log

*(Will be populated as work progresses)*
