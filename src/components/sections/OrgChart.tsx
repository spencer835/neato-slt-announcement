import { ChartNode } from "@/src/components/ui/ChartNode";
import { SectionWrapper } from "@/src/components/ui/SectionWrapper";
import { founderLeads, sltMembers } from "@/src/lib/team";

const memberByName = Object.fromEntries(sltMembers.map((member) => [member.name, member]));

const desktopNodes = [
  { key: "anthony", type: "founder", x: 206, y: 20, width: 204, height: 156, row: "Founders" },
  { key: "spencer", type: "founder", x: 934, y: 20, width: 204, height: 156, row: "Founders" },
  { key: "Arun Srinivasan", type: "member", x: 176, y: 214, width: 172, height: 132, row: "VP" },
  { key: "Tom Abrams", type: "member", x: 966, y: 214, width: 172, height: 132, row: "VP" },
  { key: "Alexa Salter", type: "member", x: 126, y: 392, width: 172, height: 132, row: "Sr Director" },
  { key: "Briana Drago", type: "member", x: 786, y: 392, width: 172, height: 132, row: "Sr Director" },
  { key: "Cody North", type: "member", x: 1016, y: 392, width: 172, height: 132, row: "Sr Director" },
  { key: "Ofir Dahan", type: "member", x: 96, y: 570, width: 172, height: 132, row: "Director" },
  { key: "Yousif Hammoudeh", type: "member", x: 306, y: 570, width: 172, height: 132, row: "Director" },
  { key: "Alison Ratering", type: "member", x: 666, y: 570, width: 172, height: 132, row: "Director" },
  { key: "Stacey Silva", type: "member", x: 876, y: 570, width: 172, height: 132, row: "Director" },
  { key: "Conni Lathrop", type: "member", x: 1086, y: 570, width: 172, height: 132, row: "Director" },
  { key: "Aziel Cabral", type: "member", x: 876, y: 748, width: 172, height: 132, row: "Sr Manager" },
] as const;

const desktopNodeMap = Object.fromEntries(desktopNodes.map((node) => [node.key, node]));

const rowGuides = [
  { label: "Founders", y: 98 },
  { label: "VP", y: 280 },
  { label: "Sr Director", y: 458 },
  { label: "Director", y: 636 },
  { label: "Sr Manager", y: 814 },
] as const;

const solidConnections = [
  ["anthony", "Arun Srinivasan"],
  ["spencer", "Tom Abrams"],
  ["anthony", "Alexa Salter"],
  ["spencer", "Briana Drago"],
  ["spencer", "Cody North"],
  ["anthony", "Ofir Dahan"],
  ["anthony", "Yousif Hammoudeh"],
  ["spencer", "Alison Ratering"],
  ["Briana Drago", "Stacey Silva"],
  ["Tom Abrams", "Conni Lathrop"],
  ["spencer", "Aziel Cabral"],
] as const;

const dottedConnections = [
  { from: "anthony", to: "Stacey Silva", fromOffsetX: -32, toOffsetX: -28, elbowOffsetY: -18 },
  { from: "spencer", to: "Stacey Silva", fromOffsetX: 28, toOffsetX: 28, elbowOffsetY: 18 },
] as const;

const mobileTierGroups = [
  { label: "Founders", members: founderLeads.map((founder) => founder.name) },
  { label: "VPs", members: ["Arun Srinivasan", "Tom Abrams"] },
  { label: "Senior Directors", members: ["Alexa Salter", "Briana Drago", "Cody North"] },
  {
    label: "Directors",
    members: ["Ofir Dahan", "Yousif Hammoudeh", "Alison Ratering", "Stacey Silva", "Conni Lathrop"],
  },
  { label: "Senior Manager", members: ["Aziel Cabral"] },
] as const;

function getDesktopAnchor(key: keyof typeof desktopNodeMap | string) {
  const node = desktopNodeMap[key];

  if (!node) {
    throw new Error(`Missing desktop node for ${key}`);
  }

  return {
    centerX: node.x + node.width / 2,
    topY: node.y,
    bottomY: node.y + node.height,
  };
}

function buildOrthogonalPath(
  fromKey: string,
  toKey: string,
  offsets?: {
    fromOffsetX?: number;
    toOffsetX?: number;
    elbowOffsetY?: number;
  },
) {
  const from = getDesktopAnchor(fromKey);
  const to = getDesktopAnchor(toKey);
  const elbowY =
    from.bottomY +
    Math.max(34, Math.min(74, (to.topY - from.bottomY) / 2)) +
    (offsets?.elbowOffsetY ?? 0);
  const fromX = from.centerX + (offsets?.fromOffsetX ?? 0);
  const toX = to.centerX + (offsets?.toOffsetX ?? 0);

  return `M ${fromX} ${from.bottomY} L ${fromX} ${elbowY} L ${toX} ${elbowY} L ${toX} ${to.topY}`;
}

function getReportsToCopy(name: string) {
  switch (name) {
    case "Arun Srinivasan":
      return "reports to Anthony Connelly";
    case "Tom Abrams":
      return "reports to Spencer Jacobs";
    case "Alexa Salter":
      return "reports to Anthony Connelly";
    case "Briana Drago":
      return "reports to Spencer Jacobs";
    case "Cody North":
      return "reports to Spencer Jacobs";
    case "Ofir Dahan":
      return "reports to Anthony Connelly";
    case "Yousif Hammoudeh":
      return "reports to Anthony Connelly";
    case "Alison Ratering":
      return "reports to Spencer Jacobs";
    case "Stacey Silva":
      return "reports to Briana Drago (dotted to Anthony & Spencer)";
    case "Conni Lathrop":
      return "reports to Tom Abrams";
    case "Aziel Cabral":
      return "reports to Spencer Jacobs";
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
        <div className="relative mx-auto h-[920px] w-[1360px]">
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1360 920"
            fill="none"
          >
            {rowGuides.map((row) => (
              <g key={row.label}>
                <text
                  x="12"
                  y={row.y}
                  fill="var(--color-ink-muted)"
                  fontSize="13"
                  letterSpacing="0.18em"
                  textAnchor="start"
                >
                  {row.label.toUpperCase()}
                </text>
                <line
                  x1="110"
                  y1={row.y}
                  x2="1348"
                  y2={row.y}
                  stroke="var(--color-line)"
                  strokeOpacity="0.22"
                />
              </g>
            ))}

            {solidConnections.map(([from, to]) => (
              <path
                key={`${from}-${to}`}
                d={buildOrthogonalPath(from, to)}
                stroke="var(--color-line)"
                strokeOpacity="0.9"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}

            {dottedConnections.map((connection) => (
              <path
                key={`${connection.from}-${connection.to}-${connection.toOffsetX}`}
                d={buildOrthogonalPath(connection.from, connection.to, connection)}
                stroke="var(--color-blossom)"
                strokeWidth="1.8"
                strokeDasharray="8 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}

            <text
              x="1038"
              y="504"
              fill="var(--color-blossom)"
              fontSize="12"
              letterSpacing="0.14em"
              textAnchor="start"
            >
              DOTTED
            </text>
          </svg>

          {desktopNodes.map((node) => {
            if (node.type === "founder") {
              const founder = founderLeads.find((lead) => lead.id === node.key);

              if (!founder) {
                return null;
              }

              return (
                <div
                  key={node.key}
                  className="absolute"
                  style={{ left: `${node.x}px`, top: `${node.y}px` }}
                >
                  <ChartNode
                    variant="founder"
                    name={founder.name}
                    title={founder.title}
                    image={founder.image}
                    initials={founder.initials}
                  />
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
                className="absolute"
                style={{ left: `${node.x}px`, top: `${node.y}px` }}
              >
                <ChartNode variant="member" name={member.name} title={member.title} image={member.image} />
              </div>
            );
          })}

          <div className="absolute bottom-4 left-6 rounded-full border border-line bg-canvas px-4 py-2 text-sm text-ink-muted">
            Solid lines show direct reports. Blossom dashed lines mark Stacey&apos;s advisory links to Anthony and Spencer.
          </div>
        </div>
      </div>

      <div className="space-y-5 xl:hidden">
        {mobileTierGroups.map((group) => (
          <section key={group.label} className="rounded-[2rem] border border-line bg-white/80 p-6">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="type-eyebrow text-ink-faint">{group.label}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-ink">
                  {group.label}
                </h3>
              </div>
              <p className="text-sm text-ink-muted">{group.members.length} people</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {group.members.map((name) => {
                const founder = founderLeads.find((lead) => lead.name === name);

                if (founder) {
                  return (
                    <div key={name} className="rounded-[1.5rem] border border-line bg-canvas p-4">
                      <ChartNode
                        variant="founder"
                        name={founder.name}
                        title={founder.title}
                        image={founder.image}
                        initials={founder.initials}
                        className="w-full"
                      />
                    </div>
                  );
                }

                const member = memberByName[name];

                if (!member) {
                  return null;
                }

                return (
                  <div
                    key={name}
                    className="rounded-[1.5rem] border border-line bg-canvas p-4"
                  >
                    <ChartNode
                      variant="member"
                      name={member.name}
                      title={member.title}
                      image={member.image}
                      className="w-full"
                    />
                    <p className="mt-3 text-sm text-ink-muted">{getReportsToCopy(member.name)}</p>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </SectionWrapper>
  );
}
