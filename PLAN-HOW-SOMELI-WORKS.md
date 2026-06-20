# How Someli Works Page — Implementation Plan

**Figma Node:** `470:12331`  
**Page Type:** Standalone landing page (`/how-someli-works`)  
**Canvas Width:** 1440px  
**Total Height:** ~4521px

---

## Executive Summary

This is a **new standalone page** (not part of the home page) that deep-dives into how the Someli AI platform works. It features:

1. **Hero section** with 3-layer architecture visualization
2. **Stats bar** (dark) with 5 key metrics
3. **Three-card accordion** explaining each layer in detail (Brand Intelligence, AI Content Engine, Distribution & Insights)
4. **Tech stack showcase** section
5. **Partnership logos marquee**
6. **Footer** with CTA

The page reuses Header and Footer from the home page, but introduces several **new components** and interaction patterns.

---

## Page Structure (7 sections)

| # | Section Name | Node ID | Height | Description |
|---|---|---|---|---|
| 0 | Header | `470:12333` | 96px | Same as home page — reuse `components/Header.tsx` |
| 1 | Hero | `470:12334` | ~690px | Left: heading + CTAs, Right: 3-layer isometric visualization |
| 2 | Stats Bar | `470:13115` | ~176px | Dark section with 5 stat items (60+ Countries, 50K+ Advocates, etc.) |
| 3 | How It Works Cards | `470:13001` | ~1587px | White section with pill, heading, and 3 large cards with left sidebar progress indicator |
| 4 | Tech Stack | `470:12470` | ~600px | "Built on a modern, secure, and scalable tech stack" + tech pills |
| 5 | Partnerships Marquee | `470:12648` | ~241px | "OUR PARTNERSHIPS" + infinite scrolling logos |
| 6 | Footer | `470:12705` | ~1182px | Same as home page — reuse `components/Footer.tsx` |

---

## Section Breakdown

### Section 1: Hero (`470:12334`)

**Layout:** Two-column — left content (611px width), right visualization

**Left Column:**
- Pill label: "HOW SOMELI WORKS" (orange bg `rgba(237,107,82,0.16)`)
- Heading (60px bold):
  - "One platform."
  - "Three layers."
  - "Exponential impact." (gradient text `from-[#df8251] to-[#d54050]`)
- Subtext (18px): "Someili turns your brand into a global employee advocacy engine..."
- Two CTAs:
  - "Take a Product Tour" (outlined)
  - "Book a Demo" (ghost)

**Right Column (`530:9127`):**
- **Isometric 3-layer visualization** (complex SVG composition):
  - Large orange arrow/path flowing upward
  - 3 rounded pill cards stacked vertically:
    - **01** Brand intelligence layer (white text on orange gradient bg)
    - **02** AI Content Engine (white text on orange gradient bg)
    - **03** Distribution and Insights Layer (white text on orange gradient bg)
  - Each card has icon + number + label
  - Cards positioned at angles with `rotate` transforms

**Background:** White with Union pattern overlay (node `470:12347`)

**Assets needed:**
- `union-bg.svg` (background pattern)
- `vector-1.svg` through `vector-5.svg` (isometric arrow + pill shapes)
- `group.svg` (pill card background shape)
- Icons for each layer (brand intelligence, content engine, distribution)

**Component file:** `app/how-someli-works/HeroSection.tsx`

---

### Section 2: Stats Bar (`470:13115`)

**Layout:** Dark section (`#111` bg) with background pattern overlay (same as home page dark sections)

**Content:** 5 stat items arranged horizontally with equal spacing

Each stat item has:
- Large number (40px bold, **transparent text with shadow effect** — same as home page)
- Icon (14-22px width, varies per item)
- Label (12px uppercase, white, tracking `0.96px`)

**Stats:**
1. **60+** — Countries (globe icon)
2. **50K+** — Employee Advocates (people icon)
3. **Logistics** — & Supply Chain (box icon)
4. **Enterprise** — Grade Security (shield icon)
5. **Scalable** — Secure & Compliant (lock icon)

**Assets needed:**
- `background-pattern.png` (dark section bg — already exists from home page)
- 5 stat icons (Vector6 through Vector10)

**Component file:** `app/how-someli-works/StatsBarSection.tsx`

**Note:** Text rendering for large numbers uses `text-[transparent]` with NO actual color — verify exact shadow/stroke approach from Figma.

---

### Section 3: How It Works Cards (`470:13001`)

**Layout:** White section, centered column layout (1200px content width)

**Header:**
- Pill label: "Smart Workflow" (orange bg `rgba(247,103,57,0.16)`)
- Heading (60px bold): "How Someli AI works"
- Subtext (18px): "AI + Strategy + Consistency + Influence that grows your businesss" [sic — typo in design]

**Three Cards (`470:13009`):**

Each card is **1200px wide**, **border `2px rgba(0,0,0,0.06)`**, **rounded `24px`**, **shadow**.

**Card Structure:**
- **Left sidebar (243px width):** 
  - Number label (28px bold) — "01/", "02/", "03/"
  - Icon (24px)
  - Heading (32px bold, line-height `1.4`, tracking `-2px`)
- **Right content area (flex-1):**
  - Bold heading (20px, line-height `1.5`)
  - 3 bullet points with checkmark icons (16px regular text)
  - Dashboard mockup image (512×321px) in bordered frame

**Card States:**
- **Card 1 (Brand Intelligence):** Left sidebar has **gradient bg** `from-[#df8251] to-[#d54050]`, **white text**
- **Card 2 & 3:** Left sidebar has **light orange bg** `rgba(247,103,57,0.06)`, **orange text** `#f76739`

**Left Progress Indicator (`470:13105`):**
- Absolutely positioned at `left: 67px, top: 538.52px`
- 3 circular dots connected by vertical lines
- Dot 1 (top) has orange bg `rgba(237,107,82,0.2)` with solid inner circle
- Dots 2 & 3 are outlined circles
- Lines are thin vertical strokes

**Assets needed:**
- `checkmark.svg` (bullet icon)
- `account-overview-dashboard-1.png` (Card 1 & 2 mockup — same image)
- `account-overview-dashboard-3.png` (Card 3 mockup — different crop)
- Brand intelligence icon (SVG parts: `g3472`, `g3473`, `g3476`, `g3480`, `g3484`)
- AI content icon (`vector11.svg`)
- Distribution icon (reuse `vector11.svg`)
- Progress dots: `ellipse-6.svg`, `ellipse-7.svg`, `ellipse-8.svg`
- Progress lines: `line-1.svg`, `line-2.svg`

**Component file:** `app/how-someli-works/HowItWorksCardsSection.tsx`

**Important:** This is **NOT an accordion** — all 3 cards are visible simultaneously, no tab switching. Card 1 is visually "active" by default (gradient sidebar).

---

### Section 4: Tech Stack (`470:12470`)

**Layout:** White section with Union pattern overlay (same as Hero)

**Left Column:**
- Heading (60px bold): "Built on a modern, secure, and scalable tech stack."

**Right Column:**
- Grid of tech pills (2 rows):
  - **Row 1:** 3 equal-width pills (NLP, Generative AI, SOC 2 Type II)
  - **Row 2:** 3 pills (Multi-Channel Publishing APIs, SEO Ready (Roadmap), Predictive Analytics)
- Pill style: white bg, `0.877px` border `rgba(0,0,0,0.08)`, rounded `7.263px`, centered text
- Text: **16.26px bold** `#ff5722` (note: different orange shade), font `Inter`

**Assets needed:**
- `union-bg-1.svg` (background pattern — reuse from Hero)

**Component file:** `app/how-someli-works/TechStackSection.tsx`

---

### Section 5: Partnerships Marquee (`470:12648`)

**Layout:** White section with Union pattern overlay

**Content:**
- Label (17px uppercase, tracking `1.36px`): "OUR PARTNERSHIPS"
- Infinite scrolling logo strip (35px height)

**Logo Strip:**
- Same logos as home page Sections 2 & 6 (logomark + logotype variations)
- Infinite scroll animation (20-25s duration, pause on hover)

**Assets needed:**
- Reuse logos from home page: `logomark.svg`, `logotype.svg`, `logotype-1.svg`, `logotype-2.svg`
- `union-bg-2.svg` (background pattern)

**Component file:** Reuse `components/sections/LogosSection.tsx` from home page with `label="OUR PARTNERSHIPS"` prop

---

### Section 6: Footer (`470:12705`)

**Reuse:** `components/Footer.tsx` from home page

**Changes from home page Footer:**
- CTA heading: "From content to connection, from connection to revenue, that's the Someli advantage." (48px, centered)
- CTA button text: "Book a Demo →" (with arrow)

**Note:** This is a **different variant** of the footer. Options:
1. Add `variant` prop to existing Footer component
2. Create separate `FooterAlt.tsx` component
3. Make CTA heading/button configurable via props

**Recommendation:** Add props to existing `Footer.tsx`:
```tsx
interface FooterProps {
  ctaHeading?: string;
  ctaButtonText?: string;
}
```

---

## New Components to Build

| Component | File | Figma Node | Reusable? |
|---|---|---|---|
| `HowSomeliWorksHero` | `app/how-someli-works/HeroSection.tsx` | `470:12334` | No (page-specific) |
| `StatsBar` | `app/how-someli-works/StatsBarSection.tsx` | `470:13115` | Yes (could be used elsewhere) |
| `HowItWorksCards` | `app/how-someli-works/HowItWorksCardsSection.tsx` | `470:13001` | No (page-specific) |
| `TechStack` | `app/how-someli-works/TechStackSection.tsx` | `470:12470` | No (page-specific) |
| — | Reuse `LogosSection.tsx` | `470:12648` | ✅ Already exists |
| — | Update `Footer.tsx` with props | `470:12705` | ✅ Already exists |

---

## Routing Setup

**Create:** `app/how-someli-works/page.tsx`

```tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './HeroSection';
import StatsBarSection from './StatsBarSection';
import HowItWorksCardsSection from './HowItWorksCardsSection';
import TechStackSection from './TechStackSection';
import LogosSection from '@/components/sections/LogosSection';

export default function HowSomeliWorksPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsBarSection />
        <HowItWorksCardsSection />
        <TechStackSection />
        <LogosSection label="OUR PARTNERSHIPS" />
        <Footer 
          ctaHeading="From content to connection, from connection to revenue, that's the Someli advantage."
          ctaButtonText="Book a Demo →"
        />
      </main>
    </>
  );
}
```

**Metadata:**
```tsx
export const metadata = {
  title: 'How Someli Works | Someli AI',
  description: 'One platform. Three layers. Exponential impact. Learn how Someli AI turns your brand into a global employee advocacy engine.',
};
```

---

## Design System Notes

### Colors (same as home page)
- Primary orange: `#ED6B52`
- Gradient start: `#DF8251`
- Gradient end: `#D54050`
- Dark bg: `#111`
- Body text: `#222`
- Muted text: `#444`
- Tech pill orange: `#FF5722` (new — slightly different shade)

### Typography
- All fonts: **Montserrat** (weights 400, 700, 800)
- Exception: Tech pills use **Inter Bold**

### Pill Labels
- Background: `rgba(237,107,82,0.16)` or `rgba(247,103,57,0.16)` (two variants)
- Border: `rgba(237,107,82,0.15)` or `rgba(247,103,57,0.15)`
- Text: `#ED6B52` or `#F76739`
- Padding: `15px 15px 7px 7px`
- Border-radius: `9999px`
- Font-size: `10-12px`
- Uppercase + letter-spacing `0.96px - 1px`

---

## Interactive Elements

### None Required (All Static)

This page has **no client-side interactivity**:
- No tabs/accordions — all 3 cards visible simultaneously
- No scroll animations
- No hover effects beyond standard button hovers
- Marquee animation reuses home page logic

**All components can be Server Components** except:
- `<LogosSection>` (already client component for animation)

---

## Asset Download Strategy

### Priority Order

**Phase 1: Critical Path Assets**
1. Hero isometric visualization parts (Vectors 1-5, Group, icons)
2. Union background patterns (3 variations)
3. Dashboard mockups (2 images)
4. Checkmark icon

**Phase 2: Secondary Assets**
1. Stats bar icons (5 icons)
2. Progress indicator dots + lines
3. Brand intelligence icon parts (complex SVG)

**Phase 3: Reusable Assets**
- Logos (already exist from home page)
- Background patterns (verify if same as home page)

---

## Build Order (Sequential)

### Session 1: Setup + Hero
1. Create `app/how-someli-works/page.tsx` route file
2. Download all Hero assets
3. Build `HeroSection.tsx` — focus on left column first, then tackle isometric visualization
4. Test at 1440px viewport

### Session 2: Stats Bar
1. Download stats icons
2. Build `StatsBarSection.tsx`
3. Verify transparent text rendering approach

### Session 3: How It Works Cards
1. Download dashboard mockups, checkmark, progress assets
2. Build `HowItWorksCardsSection.tsx` — build one card first, then replicate 3×
3. Position left progress indicator

### Session 4: Tech Stack + Finish
1. Build `TechStackSection.tsx`
2. Verify `LogosSection` reuse works with new label
3. Update `Footer.tsx` with optional props
4. Full-page visual verification with Chrome DevTools MCP

---

## Challenges & Decisions

### Challenge 1: Hero Isometric Visualization (`530:9127`)

**Issue:** Complex nested SVG structure with rotations, masks, and layered elements

**Options:**
1. **Export as single static image** (PNG/SVG) — simplest, not maintainable
2. **Recreate in code** with absolute positioning + transforms — exact but fragile
3. **Export individual SVG parts** + compose in React — modular, maintainable

**Recommendation:** Option 3 — Export arrow path, pill shapes, icons separately. Use absolute positioning with exact pixel values from Figma.

**Figma nodes to export:**
- `530:9140` — Background arrow/path
- `530:9101`, `530:9110`, `530:9118` — 3 pill cards (export as styled divs + background SVGs)
- Icons: `530:9128`, `530:9132`, `530:9136`

### Challenge 2: Stats Bar Transparent Text

**Issue:** Large stat numbers (60+, 50K+) appear as **transparent text** in design context

**Questions:**
1. Is this `-webkit-text-stroke` approach (outlined text)?
2. Is this `color: transparent` with background gradient?
3. Is this actually just white text with low opacity?

**Action:** Before implementing Section 2, run `get_design_context` on one stat item (e.g., `530:9142`) to get computed styles.

### Challenge 3: Footer CTA Variant

**Issue:** Footer CTA text differs from home page — need flexible component

**Decision:** Update `Footer.tsx` to accept optional props:
```tsx
interface FooterProps {
  ctaHeading?: string;
  ctaButtonText?: string;
}

// Default to home page values
const defaultHeading = "Ready to 10x your reach?";
const defaultButtonText = "Book a Demo";
```

---

## Asset Inventory

### New Assets (Not in Home Page)

**Hero:**
- `union-bg.svg` (hero background pattern)
- `isometric-arrow-path.svg` (main arrow)
- `pill-card-bg.svg` (rounded pill shape for cards)
- `icon-brand-intelligence.svg` (complex, 5-part SVG)
- `icon-content-engine.svg`
- `icon-distribution.svg`

**Stats Bar:**
- `icon-countries.svg` (globe)
- `icon-advocates.svg` (people)
- `icon-logistics.svg` (box)
- `icon-security.svg` (shield)
- `icon-compliance.svg` (lock/check)

**How It Works Cards:**
- `checkmark-orange.svg`
- `dashboard-layer-1.png` (Cards 1 & 2)
- `dashboard-layer-3.png` (Card 3, different crop)
- `progress-dot-active.svg`
- `progress-dot-inactive.svg`
- `progress-line.svg`

**Tech Stack:**
- None (just text pills)

**Partnerships:**
- None (reuse home page logos)

---

## Visual Verification Checklist

Before marking page complete:

- [ ] Run dev server at `http://localhost:3000/how-someli-works`
- [ ] Chrome DevTools MCP → `navigate_page`
- [ ] `resize_page` → 1440×900
- [ ] `take_screenshot` at scroll positions: top (0), stats bar (~700), cards (~1200), tech stack (~2800), footer (~3500)
- [ ] Compare each section screenshot to Figma `get_screenshot` of corresponding node
- [ ] `list_console_messages` → zero errors
- [ ] Verify fonts loaded (Montserrat, Inter)
- [ ] Verify all images loaded (no 404s)
- [ ] Test marquee animation (should scroll smoothly, pause on hover)
- [ ] Verify gradient text renders correctly on "Exponential impact."

---

## Success Criteria

**Page is complete when:**

1. All 6 sections render pixel-perfect at 1440px width
2. Route `/how-someli-works` is accessible
3. Header and Footer match home page exactly
4. All assets loaded (no broken images)
5. Typography matches Figma (Montserrat + Inter)
6. Colors match exactly (including gradient text)
7. Spacing/padding matches Figma values
8. No TypeScript errors
9. No console errors in browser
10. Marquee animation works
11. Page metadata is set

---

## Estimated Effort

**Total:** ~4-6 hours

- Setup + Hero: 90 min
- Stats Bar: 30 min
- How It Works Cards: 120 min (most complex section)
- Tech Stack: 30 min
- Integration + Testing: 60 min

---

## Next Steps

When ready to begin:

1. **Read this plan** — Review all sections and challenges
2. **Run `get_design_context` on individual sections** — Start with Hero (`470:12334`)
3. **Download assets in batches** — Use asset URLs from design context
4. **Build incrementally** — One section at a time, verify each before moving on
5. **Update PROGRESS.md** — Track which sections are complete

---

## Questions to Resolve Before Starting

1. **Stats Bar text rendering:** What is the exact CSS approach for transparent stat numbers?
2. **Hero isometric visualization:** Should we export as single image or recreate with SVG parts?
3. **Footer variant:** Add props to existing Footer.tsx or create new FooterAlt.tsx component?
4. **Dashboard mockup crops:** Are Cards 1 & 2 using identical image with same crop, or different images?

**Recommendation:** Start with Hero section, as it's the most visually complex. Once we solve the isometric visualization approach, the rest of the page will flow smoothly.
