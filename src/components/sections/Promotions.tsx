import { promotions } from "@/src/lib/team";
import { PersonCard } from "@/src/components/ui/PersonCard";
import { SectionWrapper } from "@/src/components/ui/SectionWrapper";

export function Promotions() {
  return (
    <SectionWrapper
      id="promotions"
      background="warm"
      eyebrow="Section 5"
      title="The people stepping into new roles."
      description="Eight promotions across People, Brand, Marketplace, Operations, BI, Performance Marketing, Project Management, and Supply Chain."
      contentClassName="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
    >
      {promotions.map((member) => (
        <PersonCard
          key={member.name}
          name={member.name}
          title={member.title}
          image={member.image}
          featured
          newBadge={member.isNewThisWeek}
        />
      ))}
    </SectionWrapper>
  );
}
