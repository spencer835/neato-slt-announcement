# Neato SLT Announcement

Single-page Neato announcement deck built with Next.js 16, Tailwind CSS v4, and TypeScript.

## Stack

- Next.js 16 App Router
- Tailwind CSS v4 with CSS `@theme` tokens
- TypeScript strict mode
- Local Neato brand assets and TWK Lausanne fonts

## Commands

```bash
pnpm install
pnpm dev
pnpm tsc
pnpm lint
pnpm build
```

## Structure

- `app/` application entrypoints and global styles
- `src/components/sections/` the 9 deck sections
- `src/components/ui/` shared cards and layout wrappers
- `src/lib/team.ts` single source of truth for SLT roster and promotions
- `public/` fonts, brand assets, and team photos
