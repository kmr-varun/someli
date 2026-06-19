# Someli.ai — Our Story Page Build Progress

## Current Work
**Section:** 1 — Hero
**Figma Node:** `265:12030`
**Status:** not started
**Stopped at:** Initial setup complete — route and PROGRESS file created
**Next step:** Run `get_design_context` on `265:12030` (Hero section) to get all text, colors, spacing, and assets

---

## Sections

- [x] 0 — Header                → reuses `components/Header.tsx` (already built)
- [ ] 1 — Hero                  → `components/sections/our-story/OurStoryHeroSection.tsx`
- [ ] 2 — From Idea to Impact   → `components/sections/our-story/IdeaToImpactSection.tsx`
- [ ] 3 — Mission & Vision      → `components/sections/our-story/MissionVisionSection.tsx`
- [ ] 4 — Team                  → `components/sections/our-story/TeamSection.tsx`
- [ ] 5 — Logos Marquee 1       → reuses `components/sections/LogosSection.tsx` (label="Businesses That Grow With Someli")
- [ ] 6 — Principles            → `components/sections/our-story/PrinciplesSection.tsx`
- [ ] 7 — Partnerships Marquee  → reuses `components/sections/LogosSection.tsx` (label="Our Partnerships")
- [x] 8 — Footer                → reuses `components/Footer.tsx` (already built)

---

## Page Info

- **Route:** `app/our-story/page.tsx`
- **Figma Page Node:** `264:10695`
- **Canvas Width:** 1440px
- **Total Height:** 5440px

---

## Section Map (Figma Node IDs)

| # | Figma Node ID | Name | Height | Notes |
|---|---|---|---|---|
| 0 | `337:10788` | Header | 96px | Reuse existing |
| 1 | `265:12030` | Hero | 560px | Grid bg, "Built in the MENA region. For the world" + line art illustration |
| 2 | `266:12086` | From Idea to Impact | 1060px | Dark section — story timeline with team photos |
| 3 | `266:12235` | Mission & Vision | 547px | Grid bg, "Mission" heading + body text, stat cards on right |
| 4 | `266:12528` | A Team That's In Your Corner | 677px | Dark section — team member photo cards |
| 5 | `266:12435` | Logos Marquee | 218px | "Businesses That Grow With Someli" + scrolling logos |
| 6 | `320:5642` | Principles | 738px | "Principles that guide us" — values cards |
| 7 | `266:12718` | Partnerships Marquee | 258px | "OUR PARTNERSHIPS" + scrolling logos |
| 8 | `337:11078` | Footer | 1317px | Reuse existing footer |

---

## Reusable Components (from home page)

- `components/Header.tsx` — identical header
- `components/Footer.tsx` — identical footer
- `components/sections/LogosSection.tsx` — used for sections 5 and 7 with different labels

---

## New Components Needed

| Component | File | Figma Node | Notes |
|---|---|---|---|
| OurStoryHeroSection | `components/sections/our-story/OurStoryHeroSection.tsx` | `265:12030` | Grid bg, heading, subtext, line art |
| IdeaToImpactSection | `components/sections/our-story/IdeaToImpactSection.tsx` | `266:12086` | Dark, timeline/story with photos |
| MissionVisionSection | `components/sections/our-story/MissionVisionSection.tsx` | `266:12235` | Grid bg, mission/vision text + stat cards |
| TeamSection | `components/sections/our-story/TeamSection.tsx` | `266:12528` | Dark, team member cards |
| PrinciplesSection | `components/sections/our-story/PrinciplesSection.tsx` | `320:5642` | Values/principles cards |

---

## Component Registry

*(Will be populated as sections are built)*

---

## Decisions Log

*(Will be populated as work progresses)*
