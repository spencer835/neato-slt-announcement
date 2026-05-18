import { ChartNode } from "@/src/components/ui/ChartNode";
import { SectionWrapper } from "@/src/components/ui/SectionWrapper";
import { founderLeads, sltMembers } from "@/src/lib/team";

const memberByName = Object.fromEntries(sltMembers.map((member) => [member.name, member]));
const founderById = Object.fromEntries(founderLeads.map((founder) => [founder.id, founder]));

const desktopNodes = [
  { key: "anthony", type: "founder", x: 240, y: 20, width: 160, height: 140, scale: 160 / 204 },
  { key: "spencer", type: "founder", x: 900, y: 20, width: 160, height: 140, scale: 160 / 204 },
  { key: "Arun Srinivasan", type: "member", x: 40, y: 200, width: 140, height: 100, scale: 140 / 172 },
  { key: "Tom Abrams", type: "member", x: 700, y: 200, width: 140, height: 100, scale: 140 / 172 },
  { key: "Alexa Salter", type: "member", x: 470, y: 330, width: 120, height: 100, scale: 120 / 172 },
  { key: "Briana Drago", type: "member", x: 960, y: 330, width: 120, height: 100, scale: 120 / 172 },
  { key: "Cody North", type: "member", x: 1140, y: 330, width: 120, height: 100, scale: 120 / 172 },
  { key: "Ofir Dahan", type: "member", x: 190, y: 460, width: 120, height: 100, scale: 120 / 172 },
  { key: "Yousif Hammoudeh", type: "member", x: 330, y: 460, width: 120, height: 100, scale: 120 / 172 },
  { key: "Conni Lathrop", type: "member", x: 710, y: 460, width: 120, height: 100, scale: 120 / 172 },
  { key: "Alison Ratering", type: "member", x: 850, y: 460, width: 120, height: 100, scale: 120 / 172 },
  { key: "Stacey Silva", type: "member", x: 990, y: 460, width: 120, height: 100, scale: 120 / 172 },
  { key: "Aziel Cabral", type: "member", x: 1180, y: 460, width: 120, height: 100, scale: 120 / 172 },
] as const;

const solidPaths = [
  { key: "anthony-arun", d: "M 320 160 L 320 200 L 110 200" },
  { key: "anthony-alexa", d: "M 320 160 L 320 200 L 530 200 L 530 330" },
  { key: "anthony-ofir", d: "M 320 160 L 320 200 L 250 200 L 250 460" },
  { key: "anthony-yousif", d: "M 320 160 L 320 200 L 390 200 L 390 460" },
  { key: "spencer-tom", d: "M 980 160 L 980 200 L 770 200" },
  { key: "spencer-bri", d: "M 980 160 L 980 200 L 1020 200 L 1020 330" },
  { key: "spencer-cody", d: "M 980 160 L 980 200 L 1200 200 L 1200 330" },
  { key: "spencer-alison", d: "M 980 160 L 980 200 L 910 200 L 910 460" },
  { key: "spencer-aziel", d: "M 980 160 L 980 200 L 1240 200 L 1240 460" },
  { key: "tom-conni", d: "M 770 300 L 770 340 L 770 460" },
  { key: "bri-stacey", d: "M 1020 430 L 1020 460 L 1050 460" },
] as const;

const dottedPaths = [
  {
    key: "stacey-spencer",
    d: "M 1050 460 L 1050 420 L 980 420 L 980 160",
  },
  {
    key: "stacey-anthony",
    d: "M 1050 460 L 1050 440 L 320 440 L 320 160",
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
        <div className="relative mx-auto h-[640px] w-[1320px]">
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1320 640"
            fill="none"
          >
            {solidPaths.map((path) => (
              <path
                key={path.key}
                d={path.d}
                stroke="#000000"
                strokeWidth="1.5"
                fill="none"
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
