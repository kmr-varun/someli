@AGENTS.md

# Someli.ai — Pixel-Perfect Figma-to-Code Implementation Guide

---

## SESSION START — DO THIS FIRST, EVERY TIME

**Before doing anything else at the start of every session:**

1. `Read PROGRESS.md` — find current section status and exactly where work stopped
2. `ls components/ components/sections/ public/assets/` — verify what actually exists on disk (never assume)
3. Report to the user: what is done, what is in progress, what is next
4. Wait for the user to confirm before starting work

**When the user says "continue":**

1. Read `PROGRESS.md` → find the `## Current Work` block
2. Read the source file for the in-progress section (if it exists)
3. Run `get_design_context` on the current section's Figma node ID — re-verify all design values (never use memory)
4. Run `get_screenshot` on the same node — visual reference
5. Resume from exactly the "Next step" line in `PROGRESS.md`
6. On finishing a section: update `PROGRESS.md` before ending the session

---

## ANTI-HALLUCINATION RULES — NO EXCEPTIONS

1. **Never write pixel values, colors, or spacing from memory.** Always `get_design_context` first.
2. **Never assume a file or component exists.** Always `ls` or `find` to verify before referencing it.
3. **Never assume an asset has been downloaded.** Always `ls public/assets/` to verify.
4. **Never mark a section `[x] done`** without taking a `get_screenshot` and comparing it visually to the Figma.
5. **Never start a new section** while the current one is `[~] in progress` — finish and mark done first.
6. **Always update `PROGRESS.md`** as the last action of every session, before responding to the user.
7. **If `PROGRESS.md` and the actual files disagree** — trust the files, update `PROGRESS.md` to match reality.

---

## Stack

- **Framework:** Next.js 16.2.9 — App Router. Read `node_modules/next/dist/docs/` before writing any code.
- **React:** 19.2.4
- **TypeScript:** strict
- **Styling:** Tailwind CSS v4 — uses `@import "tailwindcss"` in `globals.css`, NOT a `tailwind.config.js`. CSS variables go in `@theme inline {}` blocks.
- **Fonts:** Loaded via `next/font/google`. Currently Geist is scaffolded — **replace with Montserrat** for all UI text.

---

## Workflow Rules (MUST FOLLOW — NO EXCEPTIONS)

1. **Never build in bulk.** Work one section at a time. Do not implement multiple sections in a single task unless explicitly asked.
2. **Never assume anything about a section.** Always call `get_design_context` with the section's Figma node ID before writing any code for it.
3. **Full-page bulk builds are only allowed** when explicitly asked AND all required components for that page already exist.
4. **Before starting any section:** take a screenshot of it, read the design context, identify every sub-component, font, color, spacing value, and asset.
5. **Exact assets only.** Download SVGs and images directly from Figma — never approximate or recreate them manually. Use `get_design_context` to get asset URLs, then download to `public/assets/`.
6. **Exact values only.** No rounding colors, font sizes, spacing, or border radii. Copy exactly from Figma. If uncertain, ask.
7. **Reuse before creating.** Check `components/` before building anything new. If a near-identical component exists, extend it rather than duplicating.
8. **If any detail is ambiguous — stop and ask** before writing code.

---

## Figma File

- **File key:** `YfcN5oFEfazZ5ZFk4cy1FE`
- **Page:** `Design` (node `0:1`)
- **Two top-level sections on the canvas:**
  - `Components` (node `120:43123`) — all reusable components/variants
  - `Home Page Final` (node `233:11011`) — the home page layout

---

## Home Page Section Map

The home page lives inside frame `225:6019` ("Home Page V2"), wrapped by `225:6020`.  
Canvas width: **1440px**. All sections are full-width.

| # | Figma Node ID | Name (internal) | Height | Description |
|---|---|---|---|---|
| 0 | `337:10773` | Header | 96px | Sticky nav — logo, nav links, Login + Book Demo buttons |
| 1 | `225:6035` | Hero | 790px | Grid bg, heading, CTAs, star rating, LinkedIn card mockup, 5 stat items at bottom |
| 2 | `225:6190` | Logos Marquee 1 | 258px | "BUSINESSES THAT GROW WITH SOMELI" + infinite scrolling logo strip |
| 3 | `225:6247` | Growth Engine | 709px | Dark section — "Your team is your greatest growth engine" + testimonial card + benefit pills |
| 4 | `225:6275` | Features / CMS Overview | 811px | White — "One Central System…" heading + feature list + dashboard mockup |
| 5 | `225:6301` | Proven Impact Stats | 847px | Grid bg — large outlined counter numbers (3-5x, 10x etc.) + "Teams using Someli…" copy |
| 6 | `225:6391` | Logos Marquee 2 | 258px | "OUR PARTNERSHIPS" + same infinite logo strip |
| 7 | `225:6448` | Content Management | 975px | Dark — "Content Management Made Seamless" + 3 device mockups + social platform pills |
| 8 | `225:6477` | Before / After | 595px | Grid bg — "From invisible to in-demand" + overlapping Before/After comparison cards |
| 9 | `233:10577` | How Someli AI Works | 1739px | White — 3-tab accordion (Brand Intelligence, AI Content Engine, Distribution & Insights) |
| 10 | `225:6598` | Reach Calculator CTA | 734px | Dark — "See your potential. Multiply your reach." + interactive reach calculator widget |
| 11 | `225:6658` | Pricing | 1277px | White — single pricing plan card + feature checklist + 30-day guarantee badge |
| 12 | `337:10878` | Blog | 867px | White — "Latest from Blogs" + 3-card blog grid |
| 13 | `233:10683` | Certifications | 501px | White — "OUR CERTIFICATIONS" pill + 5 bordered logo boxes |
| 14 | `337:11016` | Footer | 1182px | Dark — full-width CTA + logo + 4-column nav + social icons |

---

## Design System

### Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-brand` | `#ED6B52` | Primary CTA, links, accents, pill labels, icon strokes |
| `--color-brand-gradient-start` | `#E5593A` | Gradient start (dark orange) |
| `--color-brand-gradient-end` | `#F0845A` | Gradient end (light orange) |
| `--color-dark-bg` | `#0D0D0D` | Dark sections (Growth Engine, Content Mgmt, Reach Calc, Footer) |
| `--color-body` | `#222222` | Body text on white |
| `--color-muted` | `#666666` | Secondary / caption text |
| `--color-pill-bg` | `#FDDDD7` | Salmon pill label background |
| `--color-white` | `#FFFFFF` | White sections |
| `--color-border` | `#E5E5E5` | Card borders, dividers |

Dark section text is white (`#FFFFFF`) and secondary text is `rgba(255,255,255,0.6)`.

### Typography

**Font family: Montserrat** — loaded via `next/font/google` with subsets `['latin']`, weights `[400, 500, 600, 700, 800]`.  
Apply as CSS variable `--font-montserrat` and set on `body`.

| Role | Weight | Size | Line Height | Notes |
|---|---|---|---|---|
| H1 hero | 800 (ExtraBold) | 64px | 1.1 | "10x your reach…" |
| H2 section | 800 (ExtraBold) | 48–56px | 1.1 | Dark section headings |
| H3 card | 700 (Bold) | 28–32px | 1.2 | |
| Body large | 400 | 18px | 1.6 | Hero subtext |
| Body | 400 | 16px | 1.6 | General body copy |
| Label pill | 700 | 11–12px | 1 | ALL CAPS, letter-spacing 0.1em |
| Nav links | 400 | 14px | 1 | Regular weight |
| Nav active | 700 | 14px | 1 | Bold weight |
| CTA buttons | 700 | 16px | 1 | Bold |
| Stat numbers (outlined) | 800 | 96–120px | 1 | Text stroke only, no fill (sections 5) |

### Buttons

Two variants. Both are `rounded-full`. The `•` dot prefix is part of the button text in the design.

```
Outlined pill:   border border-[#ED6B52] text-[#ED6B52] font-bold px-7 py-[14px] rounded-full text-[16px]
Ghost (no border): text-[#ED6B52] font-bold px-7 py-[14px] rounded-full text-[16px]
```

On dark sections, filled buttons use the brand orange gradient as background with white text.

### Section Pill Labels

Small all-caps labels above section headings:
```
bg-[#FDDDD7] text-[#ED6B52] text-[11px] font-bold tracking-[0.1em] uppercase rounded-full px-4 py-1.5
```

On dark sections the pill uses a slightly different treatment — confirm per-section with Figma.

### Grid Background Pattern

Used on white sections (Hero, Proven Impact Stats, Before/After). It is a subtle grid of thin lines (`~1.9px` width) spanning the full section. Implemented as a CSS background:
```css
background-image: 
  linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px);
background-size: 46px 46px;
```
The exact grid data is a complex Figma boolean-operation (node `225:6036`) — match it visually, do not try to export it as SVG.

### Container / Layout

- Max content width: **1440px** (full canvas), inner content at `px-24` (96px each side) matching Figma.
- Most sections use `px-24` horizontal padding at 1440px.
- Flexbox and grid are both used — check Figma per section.

---

## Reusable Components

Build these as isolated components in `components/` as you encounter them. Check `components/` first before creating new ones.

| Component | File (to create) | Figma node | Notes |
|---|---|---|---|
| `<Header>` | `components/Header.tsx` | `337:10773` | Sticky, white bg, responsive nav |
| `<Footer>` | `components/Footer.tsx` | `337:11016` | Dark bg, 4-col nav |
| `<Button>` | `components/Button.tsx` | `105:556` (Components section) | outlined / ghost / filled variants |
| `<SectionLabel>` | `components/SectionLabel.tsx` | — | Salmon pill label |
| `<LogoMarquee>` | `components/LogoMarquee.tsx` | `225:6190`, `225:6391` | Infinite scroll animation, reused twice |
| `<StatItem>` | `components/StatItem.tsx` | Hero bottom stats | Icon + metric value + description |
| `<BlogCard>` | `components/BlogCard.tsx` | `337:10878` | Image + title + author + date |

---

## Animation Patterns

**Never guess timing or easing. Always check Figma prototype settings or ask before implementing.**

### Logo Marquee (Sections 2 & 6)
- Two identical strips placed back-to-back, translated left continuously.
- Duration: ~20–25s linear infinite — **confirm exact value from Figma prototype**.
- CSS approach:
```css
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
```
- Pause on hover.

### Outlined Counter Numbers (Section 5 — Proven Impact)
- Large numbers (3-5x, 10x, etc.) with **text stroke only, no fill** — use `-webkit-text-stroke`.
- These are visible in the design as large ghost/outlined type that scrolls into view.
- On scroll-into-view: fade in from opacity 0 + slight translateY (confirm exact values from Figma prototype/notes).

### Scroll Fade-In Sections
- Sections animate in as they enter the viewport.
- Use `IntersectionObserver` with `threshold: 0.15`.
- Default: `opacity: 0 → 1`, `translateY(24px) → 0`, `duration: 600ms`, `easing: ease-out`.
- Stagger child elements by 100ms offsets when applicable.
- **Confirm per section** — not all sections animate the same way.

### Before/After Cards (Section 8)
- The "After Someli" card overlaps on top of "Before Someli" card.
- The overlap is a static layout (not animated slider) — visually offset with z-index and negative margin/absolute positioning.

### How Someli AI Works Tabs (Section 9)
- Three numbered tabs (01, 02, 03). Active tab shows its content panel + right-side mockup.
- On click: tab content switches, right panel image crossfades.
- The left number indicator animates (orange → active state).

### Reach Calculator (Section 10)
- Input field for "Your Brand Reach" — on change, recalculates "Employee Networks" and "More Reach" outputs.
- Pure client-side JS math — no API call.

---

## Asset Strategy

1. **All SVGs and images** must be downloaded from Figma asset URLs (from `get_design_context`) and saved to `public/assets/`.
2. **Logo** (Header/Footer): `public/assets/logo.svg` — node `I337:10773;328:10693`.
3. **Chevron/dropdown arrow**: small 7×4px SVG — node `I337:10773;431:6717`.
4. **LinkedIn card mockup** (Hero right side): Complex component — node `225:6117` (`Component 12`). Download as PNG/SVG from Figma.
5. **Hero network visualization**: Part of `Component 12` — export the whole component as a single asset.
6. **Device mockups** (Section 7): Three images — 3-Week Content Planner, Strategic Content Library, Branded Posts & Reels.
7. **Blog post images**: Placeholder images from Figma — download and save to `public/assets/blog/`.
8. **Star rating icons**: Download from Figma node `225:6111`.
9. **Stat icons** (Hero bottom): 5 icons — users group, handshake, chart, dollar circle, user-star — nodes `225:6120`, `225:6135`, `225:6152`, `225:6166`, `225:6179`.

---

## File / Folder Conventions

```
app/
  page.tsx              ← Home page (assembles sections)
  layout.tsx            ← Root layout, font setup
  globals.css           ← Tailwind v4 + CSS custom properties
components/
  Header.tsx
  Footer.tsx
  Button.tsx
  SectionLabel.tsx
  LogoMarquee.tsx
  StatItem.tsx
  BlogCard.tsx
  sections/
    HeroSection.tsx
    LogosSection.tsx       ← reused for both marquee sections
    GrowthEngineSection.tsx
    FeaturesSection.tsx
    ProvenImpactSection.tsx
    ContentManagementSection.tsx
    BeforeAfterSection.tsx
    HowItWorksSection.tsx
    ReachCalculatorSection.tsx
    PricingSection.tsx
    BlogSection.tsx
    CertificationsSection.tsx
public/
  assets/
    logo.svg
    icons/
    mockups/
    logos/               ← partner/client logos for marquee
    blog/
```

---

## Per-Section Build Checklist

Before implementing any section, complete ALL of these steps:

- [ ] Run `get_design_context` on the section's Figma node ID
- [ ] Take a screenshot with `get_screenshot`
- [ ] Identify every text string, font weight, size, color
- [ ] Identify every spacing value (padding, gap, margin)
- [ ] Identify every border, shadow, border-radius
- [ ] List all assets needed (SVGs, images) and download them
- [ ] Check `components/` for reusable components
- [ ] Confirm any animation parameters (duration, easing, trigger)
- [ ] If anything is unclear — **ask before coding**

---

## Key Constraints

- All pages are **static Server Components** unless interactivity is required (tabs, calculator, scroll animations).
- Interactive parts (tabs, calculator, marquee, scroll triggers) use `'use client'` components imported into Server Component pages.
- No external animation libraries unless asked — use CSS animations and `IntersectionObserver`.
- No component libraries (shadcn, MUI, etc.) unless explicitly requested.
- Every pixel value, color, and font must match Figma exactly — no creative interpretation.

---

## Chrome DevTools MCP — Visual Verification Protocol

The Chrome DevTools MCP plugin is available and **must be used** for visual verification after every section is implemented. It provides live browser control: screenshots, DOM inspection, console errors, and network requests.

### When to use it

| Trigger | Action |
|---|---|
| After writing a section's code | Start dev server, navigate to localhost, take screenshot, compare to Figma |
| Any console error during dev | Use `get_console_message` / `list_console_messages` to read errors |
| Font or color looks wrong | Use `evaluate_script` to inspect computed styles on the element |
| Asset not loading | Use `list_network_requests` to check if the request is being made and its status |
| Animation looks off | Use `take_screenshot` at different scroll positions to verify states |

### Standard verification workflow (run after every section)

```
1. Bash: `cd /Users/thundr/workstation/zeta/someli && yarn dev` (run in background)
2. navigate_page → http://localhost:3000
3. take_screenshot → compare side-by-side with Figma get_screenshot
4. list_console_messages → check for errors or warnings
5. If visual differences found → evaluate_script to inspect computed styles
6. Fix discrepancies, then take_screenshot again to confirm
```

### Specific checks per section type

**Typography:** After rendering, verify font is Montserrat (not system fallback):
```js
// evaluate_script
getComputedStyle(document.querySelector('h1')).fontFamily
```

**Colors:** Verify exact hex matches:
```js
// evaluate_script
getComputedStyle(document.querySelector('.your-element')).backgroundColor
```

**Spacing:** Verify padding/gap matches Figma values:
```js
// evaluate_script
getComputedStyle(document.querySelector('.your-element')).padding
```

**Animations:** Navigate to section, take screenshot at rest state and scrolled-in state.

**Responsive:** Use `resize_page` to check at 1440px (design width) and 1280px minimum:
```
resize_page → width: 1440, height: 900
```

### Rules

1. **Never mark a section done without a browser screenshot** compared to the Figma screenshot.
2. **Zero console errors allowed** before marking a section done.
3. **Always verify at 1440px width** — that is the design canvas width.
4. If screenshot comparison reveals differences > minor sub-pixel rounding: fix before moving on.
5. Load the Chrome DevTools MCP tool schemas with `ToolSearch select:mcp__plugin_chrome-devtools-mcp_chrome-devtools__take_screenshot,mcp__plugin_chrome-devtools-mcp_chrome-devtools__navigate_page,mcp__plugin_chrome-devtools-mcp_chrome-devtools__list_console_messages` before first use each session.

---

## Section Complete Checklist

Before marking any section `[x] done` in `PROGRESS.md`:

- [ ] All code written and saved
- [ ] All assets downloaded to `public/assets/` and referenced correctly
- [ ] `get_screenshot` taken and visually compared to Figma — no obvious differences
- [ ] TypeScript compiles without errors (`next build` or at minimum no red squiggles)
- [ ] Component added to `app/page.tsx`
- [ ] `PROGRESS.md` updated: section moved to `[x] done`, component registry entry added, next section set as current

---

## PROGRESS.md Format Reference

`PROGRESS.md` must always follow this exact structure so any session can parse it correctly:

```markdown
## Current Work
**Section:** <number> — <name>
**Figma Node:** <node-id>
**Status:** not started | in progress | done
**Stopped at:** <one sentence describing exactly where we stopped>
**Next step:** <one sentence describing the very next action to take>

## Sections
- [x] 0 — Header        → components/Header.tsx
- [~] 1 — Hero          → components/sections/HeroSection.tsx  ← IN PROGRESS
- [ ] 2 — ...

## Component Registry
### <ComponentName>
- **File:** path/to/Component.tsx
- **Props:** prop: type, prop: type
- **Assets used:** public/assets/...
- **Decisions:** any non-obvious choices made (e.g. "used CSS grid not flex because...")
```

The `## Current Work` block is the most important — it is the entry point for every "continue" command.
