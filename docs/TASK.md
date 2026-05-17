# TASK — Build Neato SLT Announcement Deck

**Authoritative product spec:** `./docs/BRIEF.md` — read it first. That file specifies 9 sections, all content, all team data, image URLs, component architecture, responsive behavior. Build exactly what it specifies.

This file (`./docs/TASK.md`) adds the **build decisions** the brief left open: stack details, design system, deploy target, verification gates.

---

## Goal

Build a single-page, long-scroll web deck announcing Neato's Senior Leadership Team and 8 promotions. Internal share via Slack link. Polished, Vercel-style, confident.

Same design DNA as the Austin Bazaar pitch deck (`~/projects/austin-bazaar-zildjian` — study `src/app/globals.css`, `src/components/presentation/SlideFrame.tsx`, and the slide components) — but with Neato branding.

---

## Stack (lock these in)

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript strict
- **Styling:** Tailwind v4 (CSS-based `@theme`, no JS config — match the Austin deck pattern in `globals.css`)
- **Package manager:** pnpm
- **Hosting:** Vercel (production deploy)
- **Optional:** `framer-motion` for scroll fade-ins (Section 9 of brief lists this as optional — implement if you have time)
- **Optional:** `clsx` for className composition (Austin deck uses this — match)

DO NOT use Tailwind v3 with `tailwind.config.ts`. The Austin deck uses v4 with `@theme {}` in globals.css. Match that.

---

## Pre-staged assets (already in `public/`)

These are ALREADY downloaded — don't re-fetch:

```
public/
  fonts/
    TWKLausanne-350.woff2
    TWKLausanne-450.woff2
    TWKLausanne-600.woff2
  brand/
    neato-wordmark.svg   (the full "Neato" wordmark — use this on hero + close)
    neato-icon.svg       (just the "N" icon — use sparingly, maybe nav)
  team/
    arun.jpg  tom.jpg  alexa.png  bri.png  cody.jpg
    ofir.png  yousif.png  alison.png  stacey.jpg
    conni.png  aziel.png
```

All 11 photos are pre-downloaded. Use `next/image` for optimization. Display circular (`rounded-full`, `aspect-square`, `object-cover`).

---

## Design system (Neato-branded, Austin-deck patterns)

### Fonts

Use TWK Lausanne for everything. Pre-loaded fonts at `/public/fonts/`. `@font-face` rules in `globals.css` should match the Austin deck.

```css
@font-face { font-family: 'TWK Lausanne'; src: url('/fonts/TWKLausanne-350.woff2') format('woff2'); font-weight: 350; }
@font-face { font-family: 'TWK Lausanne'; src: url('/fonts/TWKLausanne-450.woff2') format('woff2'); font-weight: 400; }
@font-face { font-family: 'TWK Lausanne'; src: url('/fonts/TWKLausanne-600.woff2') format('woff2'); font-weight: 600; }
```

### Color palette — Neato (Vercel-mono style, NOT navy/pink as briefly written)

The brief mentions "Neato navy + Neato pink" but Neato's actual canonical design system (cloned at `~/projects-ref/neato-design-system`) is intentionally monochromatic. We go **clean Vercel-mono** with one warm accent — same spirit as Austin deck's flamingo pink accent over almond-milk neutrals.

Use these as `@theme` tokens in `globals.css`:

```css
@theme {
  /* Surfaces — warm off-whites */
  --color-canvas: #fafaf8;          /* primary page background */
  --color-canvas-warm: #f5f3ed;     /* secondary, slightly warmer */
  --color-canvas-cool: #f0f1f3;     /* tertiary, slightly cooler */
  --color-ink: #1a1a1a;             /* primary text, near-black */
  --color-ink-muted: #6b6b6b;       /* secondary text */
  --color-ink-faint: #9a9a9a;       /* tertiary text */
  --color-line: #e5e3dd;            /* hairline borders */

  /* Accents — single warm pink + a deep contrast */
  --color-blossom: #ec5b91;         /* primary accent — Neato pink */
  --color-blossom-soft: #fde8f0;    /* pink wash for callouts */
  --color-deep: #0e1726;            /* hero contrast / dark mode accent */

  /* Type families */
  --font-sans: 'TWK Lausanne', ui-sans-serif, system-ui, sans-serif;
}
```

### Type scale (match Austin deck exactly)

```css
.type-display-large { font-family: var(--font-sans); font-weight: 600; letter-spacing: -0.03em; line-height: 1; }
.type-display-medium { font-family: var(--font-sans); font-weight: 600; letter-spacing: -0.02em; line-height: 1; }
.type-display-small { font-family: var(--font-sans); font-weight: 600; letter-spacing: 0; line-height: 1.05; }
.type-body { font-family: var(--font-sans); font-weight: 400; letter-spacing: -0.01em; line-height: 1.5; }
.type-eyebrow { font-family: var(--font-sans); font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; font-size: 0.75rem; }
```

### Section background variants

Each of the 9 sections gets its OWN background variant — long-scroll feels like distinct "slides" while staying one page. Suggested rotation:

| Section | Background | Why |
|---|---|---|
| 1. Hero | `canvas-warm` with subtle `blossom` shape accent | Set the brand tone |
| 2. Letter from S&A | `canvas` | Clean, quiet, intimate |
| 3. SLT Intro | `canvas-cool` | Conceptual shift |
| 4. Promotions intro | `canvas` | Set up |
| 5. Promotions grid | `canvas-warm` | Celebratory |
| 6. SLT Roster | `canvas` | Clean, scannable |
| 7. Org Chart | `canvas-cool` | Diagram-friendly |
| 8. What's Next | `deep` with light text (inverse) | Forward-looking, dramatic |
| 9. Close | `canvas-warm` | Bookend the hero |

This isn't dogma — adjust if you have a better feel.

### Component patterns

Build small reusable components per brief Section 5:

```
src/components/
  ui/
    PersonCard.tsx        — circular photo + name + title (used in Promotions + Roster)
    SectionWrapper.tsx    — consistent padding/max-width per section
    NavDots.tsx           — optional right-side floating nav (if you have time)
  sections/
    Hero.tsx              — Section 1
    Letter.tsx            — Section 2
    SLTIntro.tsx          — Section 3
    PromotionsIntro.tsx   — Section 4
    Promotions.tsx        — Section 5 (filter on isPromotedToday)
    SLTRoster.tsx         — Section 6 (group by tier)
    OrgChart.tsx          — Section 7
    NextMeeting.tsx       — Section 8
    Close.tsx             — Section 9
```

### Single source of truth for team data

Create `src/lib/team.ts` exactly per BRIEF.md section 7. All sections should read from this.

---

## Section-specific implementation notes

### Section 7 — Org Chart (the hard one)

The brief specifies a two-sided tree (Anthony left, Spencer right) with the dotted-line Stacey→Spencer relationship. Two approaches:

**Recommended:** Custom SVG-based chart for precise line control. Render each person as a positioned card, then `<line>` or `<path>` connectors. Use `border-style: dashed` on the CSS box OR `stroke-dasharray="6 4"` on SVG paths for the dotted relationship.

**Alternative:** `react-organizational-chart` library with custom node components. Faster to scaffold but less control.

Go with custom SVG. The layout described in BRIEF.md section 7 is small enough (11 nodes + 2 founders) that hand-positioning is straightforward.

Anthony's reports (4 — left side, top-down):
1. Arun Srinivasan (VP Marketing)
2. Alexa Salter (Sr Dir People)
3. Ofir Dahan (Dir Tech)
4. Yousif Hammoudeh (Dir BI)

Spencer's reports (5 — right side, top-down):
1. Tom Abrams (VP Partnerships) → has Conni Lathrop reporting
2. Briana Drago (Sr Dir Brand Mgmt) → has Stacey Silva reporting (Stacey ALSO dotted-line to Spencer)
3. Alison Ratering (Dir Warehouse Ops)
4. Aziel Cabral (Sr Mgr Supply Chain)
5. Cody North (Sr Dir Marketplace)

Second-tier nodes (Conni, Stacey) sit BELOW their primary manager.

Founders Anthony Connelly (CEO) and Spencer Jacobs (President) sit at top — equal visual weight. NO photo for them in the org chart node — just name + title in a styled card (we don't have their photos available; use a placeholder circle with their initials or a subtle silhouette).

Actually correction: we don't have Anthony or Spencer photos pre-staged. Use the initials approach (e.g., `AC` and `SJ` rendered inside a colored circle) — clean, no missing-image errors.

Mobile fallback: stack vertically as collapsible groups (Anthony's side first, Spencer's side second) OR a simpler stacked text list with reporting indicators. Use your judgment.

### Hero placeholder text

The brief leaves the hero headline as `[PLACEHOLDER]`. Use something safe but on-tone for now — Spencer will swap before ship. Suggestion:

```
Eyebrow: "May 18, 2026"
Headline: "Where we're going from here."
Subhead (optional): "Leadership, promotions, and what's next."
```

Make it easy to swap — define `HERO_HEADLINE` etc as constants near the top of the Hero component.

### Letter copy

Use the draft from BRIEF.md verbatim. Wrap it so swap is one-line — single string constant in Letter.tsx.

### Close placeholder

Brief leaves the closing line as `[PLACEHOLDER]`. Use something neutral and signoff-able:

```
"More to come. Excited for what's next."
— Spencer & Anthony
```

Spencer will swap before ship.

---

## Repo + deploy

### Create the repo

```bash
gh repo create spencer835/neato-slt-announcement --public --source=. --remote=origin --description "Neato SLT announcement deck — internal company update for May 2026"
```

(Or `--private` if you prefer — Spencer prefers public for personal projects unless told otherwise. Default to public.)

### First commit

Standard:
```
feat: initial Neato SLT announcement deck

- 9-section long-scroll web deck per docs/BRIEF.md
- Next.js 16 + Tailwind v4 + TWK Lausanne
- Pre-staged team photos, fonts, Neato wordmark
- Design DNA from Austin Bazaar deck adapted to Neato palette
```

### Deploy to Vercel — Production

Owner's Vercel team is `spencers-projects-15db00b7`. Deploy directly to prod (this is a static announcement — no preview needed):

```bash
vercel link --yes --project=neato-slt-announcement --scope=spencers-projects-15db00b7
vercel --prod --yes
```

If the project doesn't exist on Vercel yet, `vercel link` will offer to create it — accept. NO env vars needed for this deck (no DB, no API keys).

After deploy, verify HTTP 200 on the prod alias before declaring done.

---

## Verification gate (ALL must pass before declaring done)

1. `pnpm tsc --noEmit` — clean
2. `pnpm lint` — clean
3. `pnpm build` — clean, no errors, no warnings on the team images
4. All 11 photos render in browser test (circular, no broken-image icons)
5. Live prod URL returns HTTP 200
6. View source on the prod URL: text content for all 9 sections is present (curl the page, grep for "Senior Leadership Team", "Key Promotions", "Org Chart" anchor text, "What's Next", and at least 8 promoted names)
7. Mobile responsive: at 375px viewport (iPhone SE) the grid collapses to single column and remains readable
8. Org chart renders without overflow on desktop (1280px) and gracefully degrades on mobile

If any check fails, fix it and re-verify. Do NOT call `sendToOwnChannel` until ALL pass.

---

## End with

Print:
- The live Vercel prod URL
- The Vercel inspector URL for the deployment
- One-paragraph summary of what shipped: section count, key design choices made (palette, type scale, org chart approach), anything you flagged for Spencer's review

Do NOT:
- Add a custom domain (defer to Spencer — `.vercel.app` URL is fine for one-time announce)
- Send Slack messages (Spencer does the distribution)
- Run `sendToOwnChannel` if any verification step failed — surface the failure instead

---

## Out of scope

- Backend / API routes (this is a static deck)
- Auth / login
- CMS integration
- A/B testing
- Analytics
- Custom domain setup
- Email signup forms
- Comments / reactions

Keep it tight. The brief is a comprehensive PRD already — execute what's there, don't expand scope.
