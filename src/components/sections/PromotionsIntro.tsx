import { SectionWrapper } from "@/src/components/ui/SectionWrapper";

export function PromotionsIntro() {
  return (
    <SectionWrapper
      id="promotions-intro"
      background="canvas"
      eyebrow="Section 4"
      title="Key Promotions"
      description={
        <>
          <p>
            We&apos;re announcing key promotions today. Some have been in effect
            for several months but were never formally announced. Others are new
            as of today.
          </p>
          <p className="mt-4">
            Either way — these are people who have earned the next step, and we
            want the whole company to see it.
          </p>
        </>
      }
      className="min-h-[60vh]"
      contentClassName="max-w-4xl"
    >
      <div className="flex flex-wrap gap-3">
        {["8 promotions", "11 SLT members", "1 operating team"].map((pill) => (
          <span
            key={pill}
            className="rounded-full border border-line bg-white/80 px-4 py-2 text-sm text-ink-muted"
          >
            {pill}
          </span>
        ))}
      </div>
    </SectionWrapper>
  );
}
