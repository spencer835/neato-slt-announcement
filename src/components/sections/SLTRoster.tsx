import { sltTiers } from "@/src/lib/team";
import { PersonCard } from "@/src/components/ui/PersonCard";
import { SectionWrapper } from "@/src/components/ui/SectionWrapper";

export function SLTRoster() {
  return (
    <SectionWrapper
      id="roster"
      background="canvas"
      eyebrow="Section 6"
      title="Meet the SLT"
      description="The operating group formalizing priorities, resources, timelines, and accountability across the company."
      contentClassName="space-y-12"
    >
      {sltTiers.map((tier, index) => (
        <div
          key={tier.heading}
          className={index === 0 ? "" : "border-t border-line/80 pt-12"}
        >
          <div className="mb-6 flex items-end justify-between gap-6">
            <div>
              <p className="type-eyebrow text-ink-faint">{tier.label}</p>
              <h3 className="type-display-small mt-2 text-3xl sm:text-4xl">
                {tier.heading}
              </h3>
            </div>
            <p className="hidden text-sm text-ink-muted sm:block">
              {tier.members.length} members
            </p>
          </div>
          <div
            className={
              tier.label === "Tier 1"
                ? "mx-auto grid max-w-4xl gap-6 md:grid-cols-2"
                : tier.label === "Tier 2"
                  ? "mx-auto grid max-w-5xl gap-6 md:grid-cols-3"
                  : "grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            }
          >
            {tier.members.map((member) => (
              <PersonCard
                key={member.name}
                name={member.name}
                title={member.title}
                image={member.image}
              />
            ))}
          </div>
        </div>
      ))}
    </SectionWrapper>
  );
}
