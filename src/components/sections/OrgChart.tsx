import { ChartNode } from "@/src/components/ui/ChartNode";
import { SectionWrapper } from "@/src/components/ui/SectionWrapper";
import { founderLeads, sltMembers } from "@/src/lib/team";

const memberByName = Object.fromEntries(sltMembers.map((member) => [member.name, member]));
const founderById = Object.fromEntries(founderLeads.map((founder) => [founder.id, founder]));

const desktopNodes = [
  { key: "anthony", type: "founder", x: 270, y: 20, width: 200, height: 156, scale: 200 / 204 },
  { key: "spencer", type: "founder", x: 850, y: 20, width: 200, height: 156, scale: 200 / 204 },
  { key: "Arun Srinivasan", type: "member", x: 60, y: 240, width: 160, height: 130, scale: 160 / 172 },
  { key: "Alexa Salter", type: "member", x: 250, y: 280, width: 160, height: 130, scale: 160 / 172 },
  { key: "Ofir Dahan", type: "member", x: 440, y: 320, width: 160, height: 130, scale: 160 / 172 },
  { key: "Yousif Hammoudeh", type: "member", x: 60, y: 470, width: 160, height: 130, scale: 160 / 172 },
  { key: "Tom Abrams", type: "member", x: 720, y: 240, width: 160, height: 130, scale: 160 / 172 },
  { key: "Briana Drago", type: "member", x: 910, y: 280, width: 160, height: 130, scale: 160 / 172 },
  { key: "Cody North", type: "member", x: 1100, y: 280, width: 160, height: 130, scale: 160 / 172 },
  { key: "Alison Ratering", type: "member", x: 720, y: 470, width: 160, height: 130, scale: 160 / 172 },
  { key: "Aziel Cabral", type: "member", x: 1100, y: 470, width: 160, height: 130, scale: 160 / 172 },
  { key: "Conni Lathrop", type: "member", x: 720, y: 605, width: 160, height: 130, scale: 160 / 172 },
  { key: "Stacey Silva", type: "member", x: 910, y: 605, width: 160, height: 130, scale: 160 / 172 },
] as const;

const solidPaths = [
  { key: "anthony-arun", d: "M 370 176 L 370 210 L 140 210 L 140 240" },
  { key: "anthony-alexa", d: "M 370 176 L 370 220 L 330 220 L 330 280" },
  { key: "anthony-ofir", d: "M 370 176 L 370 230 L 520 230 L 520 320" },
  { key: "anthony-yousif", d: "M 370 176 L 370 240 L 140 240 L 140 470" },
  { key: "spencer-tom", d: "M 950 176 L 950 210 L 800 210 L 800 240" },
  { key: "spencer-bri", d: "M 950 176 L 950 220 L 990 220 L 990 280" },
  { key: "spencer-cody", d: "M 950 176 L 950 230 L 1180 230 L 1180 280" },
  { key: "spencer-alison", d: "M 950 176 L 950 240 L 800 240 L 800 470" },
  { key: "spencer-aziel", d: "M 950 176 L 950 250 L 1180 250 L 1180 470" },
  { key: "tom-conni", d: "M 800 370 L 800 430 L 800 430 L 800 605" },
  { key: "bri-stacey", d: "M 990 410 L 990 470 L 990 470 L 990 605" },
] as const;

const dottedPaths = [
  {
    key: "stacey-spencer",
    d: "M 990 605 L 990 530 L 950 530 L 950 176",
  },
  {
    key: "stacey-anthony",
    d: "M 990 605 L 990 545 L 370 545 L 370 176",
  },
] as const;

const mobileSections = [
  {
    founderId: "anthony",
    heading: "Anthony Connelly — CEO",
    directReports: [
      "Arun Srinivasan",
      "Alexa Salter",
      "Ofir Dahan",
      "Yousif Hammoudeh",
    ],
    secondaryReports: {},
  },
  {
    founderId: "spencer",
    heading: "Spencer Jacobs — President",
    directReports: [
      "Tom Abrams",
      "Briana Drago",
      "Cody North",
      "Alison Ratering",
      "Aziel Cabral",
    ],
    secondaryReports: {
      "Tom Abrams": ["Conni Lathrop"],
      "Briana Drago": ["Stacey Silva"],
    },
  },
] as const;

function getSecondaryReports(
  section: (typeof mobileSections)[number],
  name: string,
): readonly string[] {
  if (name in section.secondaryReports) {
    return section.secondaryReports[name as keyof typeof section.secondaryReports];
  }

  return [];
}

function getReportsToCopy(name: string) {
  switch (name) {
    case "Conni Lathrop":
      return "reports to Tom Abrams";
    case "Stacey Silva":
      return "reports to Briana Drago, with dotted lines to Anthony & Spencer";
    default:
      return "";
  }
}

export function OrgChart() {
  return (
    <SectionWrapper
      id="org-chart"
      background="cool"
      eyebrow="Section 7"
      title="How the SLT is structured"
      description="Anthony and Spencer lead parallel operating lanes, with reporting lines drawn to actual managers and Stacey Silva carrying two advisory links into the founders."
      contentClassName="space-y-10"
    >
      <div className="hidden overflow-x-auto rounded-[2rem] border border-line bg-white/70 p-6 xl:block">
        <div className="relative mx-auto h-[740px] w-[1320px]">
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1320 740"
            fill="none"
          >
            {solidPaths.map((path) => (
              <path
                key={path.key}
                d={path.d}
                stroke="var(--color-line)"
                strokeOpacity="0.3"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}

            {dottedPaths.map((path) => (
              <path
                key={path.key}
                d={path.d}
                stroke="var(--color-blossom)"
                strokeWidth="2"
                strokeDasharray="10 6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}

            <text
              x="1008"
              y="518"
              fill="var(--color-blossom)"
              fontSize="11"
              letterSpacing="0.14em"
              textAnchor="start"
            >
              ADVISORY
            </text>
          </svg>

          {desktopNodes.map((node) => {
            if (node.type === "founder") {
              const founder = founderById[node.key];

              if (!founder) {
                return null;
              }

              return (
                <div
                  key={node.key}
                  className="absolute overflow-hidden"
                  style={{ left: `${node.x}px`, top: `${node.y}px`, width: `${node.width}px`, height: `${node.height}px` }}
                >
                  <div style={{ transform: `scale(${node.scale})`, transformOrigin: "top left" }}>
                    <ChartNode
                      variant="founder"
                      name={founder.name}
                      title={founder.title}
                      image={founder.image}
                      initials={founder.initials}
                    />
                  </div>
                </div>
              );
            }

            const member = memberByName[node.key];

            if (!member) {
              return null;
            }

            return (
              <div
                key={node.key}
                className="absolute overflow-hidden"
                style={{ left: `${node.x}px`, top: `${node.y}px`, width: `${node.width}px`, height: `${node.height}px` }}
              >
                <div style={{ transform: `scale(${node.scale})`, transformOrigin: "top left" }}>
                  <ChartNode variant="member" name={member.name} title={member.title} image={member.image} />
                </div>
              </div>
            );
          })}

          <div className="absolute bottom-4 left-6 rounded-full border border-line bg-canvas px-4 py-2 text-sm text-ink-muted">
            Solid lines show direct reports. Blossom dashed lines mark Stacey&apos;s advisory links to Anthony and Spencer.
          </div>
        </div>
      </div>

      <div className="space-y-5 xl:hidden">
        {mobileSections.map((section) => {
          const founder = founderById[section.founderId];

          if (!founder) {
            return null;
          }

          const totalCount =
            1 +
            section.directReports.length +
            Object.values(section.secondaryReports).reduce((sum, reports) => sum + reports.length, 0);

          return (
            <section
              key={section.founderId}
              className="rounded-[2rem] border border-line bg-white/80 p-6"
            >
              <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                  <p className="type-eyebrow text-ink-faint">Founder Group</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-ink">
                    {section.heading}
                  </h3>
                </div>
                <p className="text-sm text-ink-muted">{totalCount} people</p>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1.5rem] border border-line bg-canvas p-4">
                  <ChartNode
                    variant="founder"
                    name={founder.name}
                    title={founder.title}
                    image={founder.image}
                    initials={founder.initials}
                    className="w-full"
                  />
                </div>

                {section.directReports.map((name) => {
                  const member = memberByName[name];

                  if (!member) {
                    return null;
                  }

                  return (
                    <div key={name} className="space-y-3">
                      <div className="rounded-[1.5rem] border border-line bg-canvas p-4">
                        <ChartNode
                          variant="member"
                          name={member.name}
                          title={member.title}
                          image={member.image}
                          className="w-full"
                        />
                      </div>

                      {getSecondaryReports(section, name).map((secondaryName) => {
                        const secondaryMember = memberByName[secondaryName];

                        if (!secondaryMember) {
                          return null;
                        }

                        return (
                          <div
                            key={secondaryName}
                            className="ml-5 rounded-[1.5rem] border border-line bg-blossom-soft/35 p-4"
                          >
                            <ChartNode
                              variant="member"
                              name={secondaryMember.name}
                              title={secondaryMember.title}
                              image={secondaryMember.image}
                              className="w-full"
                            />
                            <p className="mt-3 text-sm text-ink-muted">
                              {getReportsToCopy(secondaryMember.name)}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
