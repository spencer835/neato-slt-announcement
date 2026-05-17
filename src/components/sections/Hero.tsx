import Image from "next/image";
import { SectionWrapper } from "@/src/components/ui/SectionWrapper";

const HERO_DATE = "May 18, 2026";
const HERO_HEADLINE = "Where we're going from here.";
const HERO_SUBHEAD = "Leadership, promotions, and what's next.";

export function Hero() {
  return (
    <SectionWrapper
      id="hero"
      background="warm"
      className="min-h-screen"
      contentClassName="flex min-h-[calc(100vh-10rem)] flex-col justify-between"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8rem] top-[-5rem] h-72 w-72 rounded-full bg-blossom/14 blur-3xl sm:h-96 sm:w-96"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-[-6rem] h-52 w-52 rounded-full bg-white/80 blur-3xl"
      />
      <div className="flex items-center justify-between gap-8">
        <div className="type-eyebrow text-ink-muted">{HERO_DATE}</div>
        <Image
          src="/brand/neato-wordmark.svg"
          alt="Neato"
          width={120}
          height={42}
          className="h-auto w-[108px] sm:w-[126px]"
          priority
        />
      </div>
      <div className="max-w-5xl py-14 sm:py-20">
        <h1 className="type-display-large max-w-4xl text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem]">
          {HERO_HEADLINE}
        </h1>
        <p className="type-body mt-8 max-w-2xl text-xl text-ink-muted sm:text-2xl">
          {HERO_SUBHEAD}
        </p>
      </div>
      <div className="flex items-end justify-between gap-8">
        <p className="type-body max-w-xl text-base text-ink-muted sm:text-lg">
          A clear look at the formal Senior Leadership Team, the people stepping
          into new roles, and the operating rhythm guiding what comes next.
        </p>
        <div className="hidden items-center gap-3 rounded-full border border-line bg-white/70 px-4 py-2 text-sm text-ink-muted md:flex">
          <span className="h-2 w-2 rounded-full bg-blossom" />
          Internal company update
        </div>
      </div>
    </SectionWrapper>
  );
}
