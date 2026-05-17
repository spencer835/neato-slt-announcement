# Neato Company Update — Web Deck Build Brief

**Prepared for:** Claude Code
**Prepared by:** Spencer Jacobs
**Date:** May 18, 2026
**Deploy target:** Vercel (Next.js)

---

## 1. Project Overview

Build a single-page, long-scroll web experience to announce key promotions, formalize the Senior Leadership Team (SLT), and preview the next company-wide meeting. This will be shared internally via Slack as a link to the Vercel deployment.

**Audience:** Entire Neato company (~90 employees)
**Distribution:** Single Slack message in #general (or equivalent) with a link to the live URL
**Vibe:** Polished, confident, forward-looking. Not corporate, not over-hyped. Reads like a clear, intentional update from leadership.

---

## 2. Tech Stack & Setup

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Hosting:** Vercel
- **Optional libraries:**
  - `framer-motion` for subtle scroll/fade animations
  - `react-organizational-chart` OR custom SVG for the org chart slide
- **Repo:** New repo in spencer835 GitHub account, named `neato-slt-announcement` or similar

---

## 3. Visual Design Direction

### Brand Colors
Pull from Neato brand guidelines:
- **Primary:** Neato navy (deep blue-purple, approx. `#1a2540` or `#2A2D5C` — confirm from brand book)
- **Accent:** Neato pink (approx. `#F472B6` or similar bright pink from brand book)
- **Neutrals:** white, off-white (`#FAFAFA`), warm gray text

### Typography
- Headings: Clean modern sans-serif (Inter, Geist, or Söhne if available)
- Body: Same family, generous line-height
- Weights: 400 body, 600 sub-headings, 700-800 headlines

### Layout Principles
- Long-scroll single page, each section feels like a "slide"
- Generous vertical padding between sections (min 100vh feel, but don't force exactly 100vh — let content breathe)
- Mobile-responsive (40%+ of viewers will read on phone)
- Optional: floating right-side nav dots for jumping between sections
- Optional: thin scroll progress indicator at top

---

## 4. Page Structure (9 Sections)

### **Section 1 — Hero / Cover**

```
HEADLINE: [PLACEHOLDER — Spencer will finalize]
DATE: May 18, 2026
NEATO LOGO
```

**Build notes:**
- Full-viewport hero
- Large headline (placeholder text for now — leave as a `<h1>` element easy to swap)
- Subtle visual: brand color accent shapes, or a faded brand pattern in background
- Smooth fade-in animation on load

---

### **Section 2 — A Note From Spencer & Anthony**

**Content:**

> Team —
>
> Today is about three things: formalizing the leadership structure that's been quietly running this company, recognizing the people who've earned the next step, and giving you a clear picture of what we're building together.
>
> Read on.
>
> — Spencer & Anthony

**Build notes:**
- Centered text block, max-width ~700px for readability
- Treat the signoff "— Spencer & Anthony" as smaller, italic, right-aligned or left-aligned at end of letter
- Generous whitespace above and below

**Flag:** Spencer will revise this copy before final ship. Build it so the text is easy to swap in one place.

---

### **Section 3 — Introducing the SLT (What It Is)**

**Content:**

# Introducing the Senior Leadership Team

Neato now has a formal Senior Leadership Team — the operating layer of the company. Every department and every key function has a voice at this table.

**What the SLT owns:**

- Prioritizing key initiatives across the company
- Allocating the resources needed to deliver them
- Setting timelines and milestones
- Picking individual owners accountable for execution

This is how decisions get made, how priorities get set, and how the company moves forward together.

**Build notes:**
- Heading prominent, body text clear
- The "What the SLT owns" bullets should be visually distinct — possibly a card or callout box, or icon-prefixed list
- No photos on this slide — it's the conceptual intro

---

### **Section 4 — Promotions Announcement (Framing)**

**Content:**

# Key Promotions

We're announcing key promotions today. Some have been in effect for several months but were never formally announced. Others are new as of today.

Either way — these are people who have earned the next step, and we want the whole company to see it.

**Build notes:**
- Short intro slide that sets up Section 5
- Could be visually combined with Section 5 if you want — two sections feel like one chapter
- Centered text, no images

---

### **Section 5 — The Promotions (Visual Grid)**

**Format:** Each promotion as its own "pill" or card. Photo + name + new title. Clean grid layout, no clicks required, scannable in 10 seconds.

**8 promotions to display:**

| Name | New Title | Slack Image URL |
|---|---|---|
| Alexa Salter | Senior Director of People | https://avatars.slack-edge.com/2025-04-01/8714119104848_600ed516ee4064f0fe89_original.png |
| Briana Drago | Senior Director of Brand Management | https://avatars.slack-edge.com/2025-04-14/8748864140389_3a0c9d25c3eb60631c67_original.png |
| Cody North | Senior Director of Marketplace | https://avatars.slack-edge.com/2025-02-13/8452964150868_5ac0932f6fa2058cf667_original.jpg |
| Yousif Hammoudeh | Director of Business Intelligence | https://avatars.slack-edge.com/2025-02-14/8455772276547_bd3d6bb6371f9317e1bf_original.png |
| Alison Ratering | Director of Warehouse Operations | https://avatars.slack-edge.com/2025-10-13/9699695551281_84d4c5c43b602e149be4_original.png |
| Stacey Silva | Director of Performance Marketing | https://avatars.slack-edge.com/2025-08-04/9298904504099_c848acde7cea5ee78044_original.jpg |
| Conni Lathrop | Director of Project Management | https://avatars.slack-edge.com/2025-10-08/9678268239713_3455aedbac73aeb5df0e_original.png |
| Aziel Cabral | Senior Manager of Supply Chain | https://avatars.slack-edge.com/2025-03-07/8569106188051_c830c73bc496cd76ad76_original.png |

**Build notes:**
- Download all 8 images into `/public/team/` for performance (don't hot-link from Slack)
- Filename convention: lowercase first name (e.g., `alexa.png`, `bri.png`, `cody.jpg`)
- Card design:
  - Rounded corners (rounded-2xl or rounded-3xl)
  - Photo on top, circular crop, ~120-160px
  - Name in larger, bold font
  - Title below in smaller, muted color
  - Subtle border or soft shadow
  - Hover effect optional (slight lift)
- Grid: 4 columns on desktop, 2 columns on tablet, 1 column on mobile
- Generous gap between cards (gap-8 or gap-10)

---

### **Section 6 — Meet the SLT (Full Roster, Tiered)**

**Purpose:** Full SLT roster with photos. Higher titles at the top with visual separation between tiers.

**11 SLT members in 3 tiers:**

### Tier 1 — VPs (2 people)

| Name | Title | Image URL |
|---|---|---|
| Arun Srinivasan | VP of Marketing | https://avatars.slack-edge.com/2025-12-18/10149539849542_8ccef63a0302bc6e6845_original.jpg |
| Tom Abrams | VP of Partnerships | https://avatars.slack-edge.com/2025-05-12/8896200552321_bdad930d3cc08e5f80aa_original.jpg |

### Tier 2 — Senior Directors (3 people)

| Name | Title | Image URL |
|---|---|---|
| Alexa Salter | Senior Director of People | (same as above) |
| Briana Drago | Senior Director of Brand Management | (same as above) |
| Cody North | Senior Director of Marketplace | (same as above) |

### Tier 3 — Directors & Senior Manager (6 people)

| Name | Title | Image URL |
|---|---|---|
| Ofir Dahan | Director of Technology | https://avatars.slack-edge.com/2025-10-15/9718346311425_48aec09e068473d42cc3_original.png |
| Yousif Hammoudeh | Director of Business Intelligence | (same as above) |
| Alison Ratering | Director of Warehouse Operations | (same as above) |
| Stacey Silva | Director of Performance Marketing | (same as above) |
| Conni Lathrop | Director of Project Management | (same as above) |
| Aziel Cabral | Senior Manager of Supply Chain | (same as above) |

**Build notes:**
- 3-row tiered layout with visual gap between tiers (more padding/margin between rows than within rows)
- Tier 1: 2 cards centered
- Tier 2: 3 cards centered
- Tier 3: 6 cards (could be one row of 6 on desktop or two rows of 3)
- Each card identical style to Section 5 promotion cards (consistency)
- Mobile: collapse to single column, keep tier headers visible

---

### **Section 7 — Org Chart**

**Purpose:** Visual hierarchy showing reporting structure.

**Structure:**

```
                Anthony Connelly                 Spencer Jacobs
                CEO                              President
                (left side)                      (right side)
                     |                                |
        ┌────────────┼────────┐              ┌──────┬──┴──┬──────┬──────┐
        |        |   |       |               |      |     |      |      |
       Arun    Alexa Ofir   Yousif           Tom   Bri  Alison Aziel  Cody
                                              |     |
                                            Conni Stacey
                                                    ⋮ (dotted line to Spencer)
```

**Reporting lines:**

**Anthony's direct reports (4):**
- Arun Srinivasan
- Alexa Salter
- Ofir Dahan
- Yousif Hammoudeh

**Spencer's direct reports (5):**
- Tom Abrams
- Briana Drago
- Alison Ratering
- Aziel Cabral
- Cody North

**Second-tier reports:**
- Conni Lathrop → reports to Tom Abrams (solid line)
- Stacey Silva → reports to Briana Drago (solid line), with **dotted line to Spencer Jacobs**

**Build notes:**
- Two-sided tree: Anthony on left, Spencer on right, with a clear visual gap between sides
- Each card includes: photo, name, title
- Solid lines for direct reports
- Dotted line styling for the Stacey → Spencer relationship (use CSS `border-style: dashed` or SVG with dashed stroke)
- Higher tiers get slightly more visual weight (larger cards, bolder borders, or accent color)
- Recommended approach: Custom SVG-based chart for precise line control, OR use `react-organizational-chart` library with custom node components
- Mobile: collapse into vertical stacked tree or expandable accordion view

---

### **Section 8 — Preview of Next Company-Wide Meeting**

**Content:**

# What's Next

The SLT is doing the work to align and plan for our Q3 kickoff on July 1. At the next company-wide meeting in early June, here's what we'll bring:

**More Clarity**
Clear goals for the company and every department. What we're driving toward and how success is measured.

**More Feedback**
Feedback flowing up, down, and in both directions. Direct, regular, useful.

**More Alignment**
Understanding priorities. Balancing department needs against company-wide needs. Everyone rowing the same direction.

**Build notes:**
- Three-column layout on desktop (Clarity / Feedback / Alignment), stacked on mobile
- Each column: title + 1-2 sentence description
- Visually distinct from prose sections — these read as three pillars
- Could use icons or numbers (01, 02, 03) for each pillar

---

### **Section 9 — Close**

**Content:**

> [PLACEHOLDER — closing line to come]
>
> — Spencer & Anthony

**Build notes:**
- Final slide
- Centered, large text
- Simple signoff
- Spencer will fill in closing line before ship

---

## 5. Component Architecture

```
/app
  /page.tsx              -- main page, imports all sections
  /layout.tsx            -- shared layout, fonts, meta
  /globals.css           -- Tailwind + custom CSS

/components
  /sections
    Hero.tsx             -- Section 1
    Letter.tsx           -- Section 2
    SLTIntro.tsx         -- Section 3
    PromotionsIntro.tsx  -- Section 4
    Promotions.tsx       -- Section 5 (grid of 8)
    SLTRoster.tsx        -- Section 6 (tiered grid of 11)
    OrgChart.tsx         -- Section 7
    NextMeeting.tsx      -- Section 8 (three pillars)
    Close.tsx            -- Section 9
  /ui
    PersonCard.tsx       -- reusable card for promotions + SLT roster
    ChartNode.tsx        -- reusable card for org chart
    SectionWrapper.tsx   -- consistent padding/spacing for each section
    NavDots.tsx          -- optional floating right-side nav

/public
  /team                  -- all profile images, downloaded from Slack URLs above
    alexa.png
    bri.png
    cody.jpg
    yousif.png
    alison.png
    stacey.jpg
    conni.png
    aziel.png
    arun.jpg
    tom.jpg
    ofir.png
  /brand
    neato-logo.svg       -- Spencer to provide
```

---

## 6. Image Asset Handling

**Step 1:** Download all 11 profile images from the Slack URLs above into `/public/team/`.
**Step 2:** Use Next.js `<Image>` component for optimization.
**Step 3:** All images should be displayed as circular (use `rounded-full` and `aspect-square` with `object-cover`).
**Step 4:** Recommended display size: 120-160px on desktop, scales down on mobile.

**Filename mapping:**
```
arun.jpg     -> Arun Srinivasan
tom.jpg      -> Tom Abrams
alexa.png    -> Alexa Salter
bri.png      -> Briana Drago
cody.jpg     -> Cody North
ofir.png     -> Ofir Dahan
yousif.png   -> Yousif Hammoudeh
alison.png   -> Alison Ratering
stacey.jpg   -> Stacey Silva
conni.png    -> Conni Lathrop
aziel.png    -> Aziel Cabral
```

---

## 7. Data Structure (for clean component props)

Create a single data file at `/lib/team.ts`:

```typescript
export type SLTMember = {
  name: string;
  title: string;
  image: string;
  tier: "VP" | "SrDirector" | "Director" | "SrManager";
  reportsTo: "anthony" | "spencer" | "tom" | "bri";
  dottedLineTo?: "spencer";
  isPromotedToday: boolean;
};

export const sltMembers: SLTMember[] = [
  // VPs
  { name: "Arun Srinivasan", title: "VP of Marketing", image: "/team/arun.jpg", tier: "VP", reportsTo: "anthony", isPromotedToday: false },
  { name: "Tom Abrams", title: "VP of Partnerships", image: "/team/tom.jpg", tier: "VP", reportsTo: "spencer", isPromotedToday: false },

  // Senior Directors
  { name: "Alexa Salter", title: "Senior Director of People", image: "/team/alexa.png", tier: "SrDirector", reportsTo: "anthony", isPromotedToday: true },
  { name: "Briana Drago", title: "Senior Director of Brand Management", image: "/team/bri.png", tier: "SrDirector", reportsTo: "spencer", isPromotedToday: true },
  { name: "Cody North", title: "Senior Director of Marketplace", image: "/team/cody.jpg", tier: "SrDirector", reportsTo: "spencer", isPromotedToday: true },

  // Directors
  { name: "Ofir Dahan", title: "Director of Technology", image: "/team/ofir.png", tier: "Director", reportsTo: "anthony", isPromotedToday: false },
  { name: "Yousif Hammoudeh", title: "Director of Business Intelligence", image: "/team/yousif.png", tier: "Director", reportsTo: "anthony", isPromotedToday: true },
  { name: "Alison Ratering", title: "Director of Warehouse Operations", image: "/team/alison.png", tier: "Director", reportsTo: "spencer", isPromotedToday: true },
  { name: "Stacey Silva", title: "Director of Performance Marketing", image: "/team/stacey.jpg", tier: "Director", reportsTo: "bri", dottedLineTo: "spencer", isPromotedToday: true },
  { name: "Conni Lathrop", title: "Director of Project Management", image: "/team/conni.png", tier: "Director", reportsTo: "tom", isPromotedToday: true },

  // Senior Manager
  { name: "Aziel Cabral", title: "Senior Manager of Supply Chain", image: "/team/aziel.png", tier: "SrManager", reportsTo: "spencer", isPromotedToday: true },
];

export const promotions = sltMembers.filter(m => m.isPromotedToday);
```

This makes every section a clean filter/map operation on a single source of truth.

---

## 8. Responsive Behavior

| Section | Desktop | Tablet | Mobile |
|---|---|---|---|
| Hero | Centered, large text | Same | Smaller text |
| Letter | Max-width 700px, centered | Same | Full width with padding |
| SLT Intro | Two-column (text + visual) or full prose | Single column | Single column |
| Promotions Intro | Centered prose | Same | Same |
| Promotions Grid | 4 columns | 2 columns | 1 column |
| SLT Roster | Tiered: 2 / 3 / 6 cards | Tiered: 2 / 3 / 3+3 | All single column with tier headers |
| Org Chart | Full horizontal tree | Simplified horizontal | Vertical accordion or stacked tree |
| Next Meeting | 3 columns | 3 columns or 2+1 | 1 column |
| Close | Centered | Same | Same |

---

## 9. Optional Enhancements

If time permits after core build:

- **Scroll progress indicator:** thin bar at top showing how far through the page
- **Floating nav dots:** right-side vertical dots, each linking to a section, with the active section highlighted
- **Fade-in animations:** as each section enters viewport, content fades in (use `framer-motion` with `useInView`)
- **Custom OG image:** for when the URL gets shared (Slack link previews etc.)
- **Print stylesheet:** in case anyone wants to print or save as PDF

---

## 10. Deployment

1. Push to GitHub
2. Connect repo to Vercel
3. Deploy to production
4. **Custom domain optional:** could be `slt.neato.com` or `next.neato.com` if Spencer wants. Otherwise default `*.vercel.app` URL works fine for one-time announcement.

---

## 11. Items Spencer Will Finalize Before Ship

These are placeholders in the current spec. Spencer will provide final copy before ship:

1. **Hero headline** (Section 1)
2. **Letter copy refinement** (Section 2) — current draft is a starting point
3. **Closing line** (Section 9)
4. **Neato logo file** (drop into `/public/brand/`)
5. **Final brand color hex codes** — confirm from official brand book

---

## 12. Pre-Launch Checklist

Before sharing the URL company-wide:

- [ ] All 11 photos download and display correctly
- [ ] All names spelled correctly (verify against Slack handles)
- [ ] All new titles match SLT roster exactly
- [ ] Org chart reporting lines match spec (Anthony's 4, Spencer's 5, Conni → Tom, Stacey → Bri w/ dotted to Spencer)
- [ ] Mobile experience tested on actual phone
- [ ] Page loads fast (Lighthouse score check)
- [ ] OG image / preview renders correctly when link is pasted in Slack
- [ ] Spencer and Anthony both review and approve before send
- [ ] Slack titles for all 11 SLT members updated to match new titles (separate task — Alexa)

---

## 13. Slack Distribution Message

When the URL is live, post this in #general (or equivalent):

```
Team —

Some big news to share. Promotions, our formalized Senior Leadership Team, and a look at where we're going from here.

Read the full update: [VERCEL URL]

— Spencer & Anthony
```

---

**End of brief. Build away.**
