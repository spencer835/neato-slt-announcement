import { SectionWrapper } from "@/src/components/ui/SectionWrapper";

const PILLARS = [
  {
    number: "01",
    title: "More Clarity",
    copy:
      "Clear goals for the company and every department. What we're driving toward and how success is measured.",
  },
  {
    number: "02",
    title: "More Feedback",
    copy:
      "Feedback flowing up, down, and in both directions. Direct, regular, useful.",
  },
  {
    number: "03",
    title: "More Alignment",
    copy:
      "Understanding priorities. Balancing department needs against company-wide needs. Everyone rowing the same direction.",
  },
];

export function NextMeeting() {
  return (
    <SectionWrapper
      id="next"
      background="deep"
      eyebrow="Section 8"
      title="What the SLT is bringing into the next company-wide meeting"
      description="The SLT is doing the work to align and plan for our Q3 kickoff on July 1. At the next company-wide meeting in early June, here's what we'll bring."
      contentClassName="grid gap-6 lg:grid-cols-3"
    >
      {PILLARS.map((pillar) => (
        <div
          key={pillar.number}
          className="rounded-[2rem] border border-white/12 bg-white/6 p-8"
        >
          <p className="text-sm font-semibold tracking-[0.18em] text-blossom">
            {pillar.number}
          </p>
          <h3 className="type-display-small mt-6 text-3xl text-canvas">
            {pillar.title}
          </h3>
          <p className="type-body mt-4 text-lg text-canvas/78">{pillar.copy}</p>
        </div>
      ))}
    </SectionWrapper>
  );
}
