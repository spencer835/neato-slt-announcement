import { SectionWrapper } from "@/src/components/ui/SectionWrapper";

const OWNERSHIP_POINTS = [
  "Prioritizing key initiatives across the company",
  "Allocating the resources needed to deliver them",
  "Setting timelines and milestones",
  "Picking individual owners accountable for execution",
];

export function SLTIntro() {
  return (
    <SectionWrapper
      id="slt-intro"
      background="cool"
      eyebrow="Section 3"
      title="Introducing the Senior Leadership Team"
      description={
        <>
          <p>
            Neato now has a formal Senior Leadership Team — the operating layer
            of the company. Every department and every key function has a voice
            at this table.
          </p>
          <p className="mt-4">
            This is how decisions get made, how priorities get set, and how the
            company moves forward together.
          </p>
        </>
      }
      contentClassName="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]"
    >
      <div className="rounded-[2rem] border border-line bg-white/70 p-8 sm:p-10">
        <p className="type-eyebrow text-ink-muted">What the SLT owns</p>
        <ul className="mt-6 space-y-4">
          {OWNERSHIP_POINTS.map((point, index) => (
            <li key={point} className="flex gap-4">
              <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blossom text-sm font-semibold text-white">
                {index + 1}
              </span>
              <span className="type-body text-lg text-ink">{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-grid rounded-[2rem] border border-line p-8 sm:p-10">
        <div className="rounded-[1.75rem] border border-line bg-canvas px-6 py-8">
          <p className="type-eyebrow text-ink-faint">Operating Model</p>
          <div className="mt-6 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-1">
            {[
              ["Voice", "Every key function represented."],
              ["Ownership", "Named leaders carry decisions into execution."],
              ["Cadence", "Timelines and milestones stay visible."],
              ["Alignment", "Department priorities stay tied to company goals."],
            ].map(([label, copy]) => (
              <div key={label} className="rounded-2xl border border-line/90 bg-white/80 p-5">
                <p className="text-base font-semibold tracking-[-0.02em] text-ink">
                  {label}
                </p>
                <p className="type-body mt-2 text-base text-ink-muted">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
