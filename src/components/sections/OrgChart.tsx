import { ChartNode } from "@/src/components/ui/ChartNode";
import { SectionWrapper } from "@/src/components/ui/SectionWrapper";
import { founderLeads, sltMembers } from "@/src/lib/team";

const anthonyReports = sltMembers.filter((member) => member.reportsTo === "anthony");
const spencerReports = sltMembers.filter((member) => member.reportsTo === "spencer");
const conni = sltMembers.find((member) => member.name === "Conni Lathrop");
const stacey = sltMembers.find((member) => member.name === "Stacey Silva");

export function OrgChart() {
  return (
    <SectionWrapper
      id="org-chart"
      background="cool"
      eyebrow="Section 7"
      title="How the SLT is structured"
      description="Anthony and Spencer lead parallel operating lanes, with clear direct reports and one dotted-line relationship for Stacey Silva into Spencer."
      contentClassName="space-y-10"
    >
      <div className="hidden overflow-x-auto rounded-[2rem] border border-line bg-white/70 p-6 xl:block">
        <div className="relative mx-auto h-[700px] w-[1180px]">
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1180 700"
            fill="none"
          >
            <g stroke="#d2cfc8" strokeWidth="2">
              <line x1="260" y1="110" x2="260" y2="160" />
              <line x1="140" y1="160" x2="380" y2="160" />
              <line x1="140" y1="160" x2="140" y2="206" />
              <line x1="220" y1="160" x2="220" y2="206" />
              <line x1="300" y1="160" x2="300" y2="206" />
              <line x1="380" y1="160" x2="380" y2="206" />

              <line x1="860" y1="110" x2="860" y2="160" />
              <line x1="620" y1="160" x2="1100" y2="160" />
              <line x1="620" y1="160" x2="620" y2="206" />
              <line x1="740" y1="160" x2="740" y2="206" />
              <line x1="860" y1="160" x2="860" y2="206" />
              <line x1="980" y1="160" x2="980" y2="206" />
              <line x1="1100" y1="160" x2="1100" y2="206" />

              <line x1="620" y1="354" x2="620" y2="404" />
              <line x1="740" y1="354" x2="740" y2="404" />
            </g>
            <line
              x1="740"
              y1="354"
              x2="860"
              y2="110"
              stroke="#ec5b91"
              strokeWidth="2.5"
              strokeDasharray="7 6"
            />
          </svg>

          <div className="absolute left-[166px] top-0">
            <ChartNode
              variant="founder"
              name={founderLeads[0].name}
              title={founderLeads[0].title}
              initials={founderLeads[0].initials}
            />
          </div>
          <div className="absolute left-[766px] top-0">
            <ChartNode
              variant="founder"
              name={founderLeads[1].name}
              title={founderLeads[1].title}
              initials={founderLeads[1].initials}
            />
          </div>

          {anthonyReports.map((member, index) => (
            <div
              key={member.name}
              className="absolute top-[206px]"
              style={{ left: `${54 + index * 80}px` }}
            >
              <ChartNode variant="member" name={member.name} title={member.title} image={member.image} />
            </div>
          ))}

          {spencerReports.map((member, index) => (
            <div
              key={member.name}
              className="absolute top-[206px]"
              style={{ left: `${534 + index * 120}px` }}
            >
              <ChartNode variant="member" name={member.name} title={member.title} image={member.image} />
            </div>
          ))}

          {conni ? (
            <div className="absolute left-[534px] top-[404px]">
              <ChartNode
                variant="member"
                name={conni.name}
                title={conni.title}
                image={conni.image}
              />
            </div>
          ) : null}
          {stacey ? (
            <div className="absolute left-[654px] top-[404px]">
              <ChartNode
                variant="member"
                name={stacey.name}
                title={stacey.title}
                image={stacey.image}
              />
            </div>
          ) : null}

          <div className="absolute bottom-4 left-6 rounded-full border border-line bg-canvas px-4 py-2 text-sm text-ink-muted">
            Solid lines show direct reports. Dashed line marks Stacey&apos;s
            dotted-line relationship to Spencer.
          </div>
        </div>
      </div>

      <div className="space-y-6 xl:hidden">
        <div className="rounded-[2rem] border border-line bg-white/80 p-6">
          <div className="mb-5 flex items-center gap-4">
            <ChartNode
              variant="founder"
              name={founderLeads[0].name}
              title={founderLeads[0].title}
              initials={founderLeads[0].initials}
            />
            <div>
              <p className="type-eyebrow text-ink-faint">Anthony&apos;s side</p>
              <p className="type-body mt-2 text-ink-muted">
                Direct reports across Marketing, People, Technology, and BI.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {anthonyReports.map((member) => (
              <ChartNode
                key={member.name}
                variant="member"
                name={member.name}
                title={member.title}
                image={member.image}
                className="w-full"
              />
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-line bg-white/80 p-6">
          <div className="mb-5 flex items-center gap-4">
            <ChartNode
              variant="founder"
              name={founderLeads[1].name}
              title={founderLeads[1].title}
              initials={founderLeads[1].initials}
            />
            <div>
              <p className="type-eyebrow text-ink-faint">Spencer&apos;s side</p>
              <p className="type-body mt-2 text-ink-muted">
                Direct reports across Partnerships, Brand, Operations, Supply
                Chain, and Marketplace.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {spencerReports.map((member) => (
              <ChartNode
                key={member.name}
                variant="member"
                name={member.name}
                title={member.title}
                image={member.image}
                className="w-full"
              />
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {conni ? (
              <div className="rounded-[1.5rem] border border-line bg-canvas p-4">
                <p className="type-eyebrow text-ink-faint">Reports to Tom</p>
                <div className="mt-3">
                  <ChartNode
                    variant="member"
                    name={conni.name}
                    title={conni.title}
                    image={conni.image}
                    className="w-full"
                  />
                </div>
              </div>
            ) : null}
            {stacey ? (
              <div className="rounded-[1.5rem] border border-blossom/30 bg-blossom-soft/60 p-4">
                <p className="type-eyebrow text-ink-faint">Reports to Bri + dotted line to Spencer</p>
                <div className="mt-3">
                  <ChartNode
                    variant="member"
                    name={stacey.name}
                    title={stacey.title}
                    image={stacey.image}
                    className="w-full"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
