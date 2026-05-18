export type SLTMember = {
  name: string;
  title: string;
  image: string;
  tier: "VP" | "SrDirector" | "Director" | "SrManager";
  reportsTo: "anthony" | "spencer" | "tom" | "bri";
  dottedLineTo?: "spencer";
  isPromotedToday: boolean;
  isNewThisWeek?: boolean;
};

export type FounderLead = {
  id: "anthony" | "spencer";
  name: string;
  title: string;
  image: string;
  initials: string;
};

export const sltMembers: SLTMember[] = [
  {
    name: "Arun Srinivasan",
    title: "VP of Marketing",
    image: "/team/arun.jpg",
    tier: "VP",
    reportsTo: "anthony",
    isPromotedToday: false,
  },
  {
    name: "Tom Abrams",
    title: "VP of Partnerships",
    image: "/team/tom.jpg",
    tier: "VP",
    reportsTo: "spencer",
    isPromotedToday: false,
  },
  {
    name: "Alexa Salter",
    title: "Senior Director of People",
    image: "/team/alexa.png",
    tier: "SrDirector",
    reportsTo: "anthony",
    isPromotedToday: true,
  },
  {
    name: "Briana Drago",
    title: "Senior Director of Brand Management",
    image: "/team/bri.png",
    tier: "SrDirector",
    reportsTo: "spencer",
    isPromotedToday: true,
  },
  {
    name: "Cody North",
    title: "Senior Director of Marketplace",
    image: "/team/cody.jpg",
    tier: "SrDirector",
    reportsTo: "spencer",
    isPromotedToday: true,
  },
  {
    name: "Ofir Dahan",
    title: "Director of Technology",
    image: "/team/ofir.png",
    tier: "Director",
    reportsTo: "anthony",
    isPromotedToday: false,
  },
  {
    name: "Yousif Hammoudeh",
    title: "Director of Business Intelligence",
    image: "/team/yousif.png",
    tier: "Director",
    reportsTo: "anthony",
    isPromotedToday: true,
  },
  {
    name: "Alison Ratering",
    title: "Director of Warehouse Operations",
    image: "/team/alison.png",
    tier: "Director",
    reportsTo: "spencer",
    isPromotedToday: true,
  },
  {
    name: "Stacey Silva",
    title: "Director of Performance Marketing",
    image: "/team/stacey.jpg",
    tier: "Director",
    reportsTo: "bri",
    dottedLineTo: "spencer",
    isPromotedToday: true,
    isNewThisWeek: true,
  },
  {
    name: "Conni Lathrop",
    title: "Director of Project Management",
    image: "/team/conni.png",
    tier: "Director",
    reportsTo: "tom",
    isPromotedToday: true,
    isNewThisWeek: true,
  },
  {
    name: "Aziel Cabral",
    title: "Senior Manager of Supply Chain",
    image: "/team/aziel.png",
    tier: "SrManager",
    reportsTo: "spencer",
    isPromotedToday: true,
  },
];

export const promotions = sltMembers.filter((member) => member.isPromotedToday);

export const sltTiers = [
  {
    label: "Tier 1",
    heading: "VPs",
    members: sltMembers.filter((member) => member.tier === "VP"),
  },
  {
    label: "Tier 2",
    heading: "Senior Directors",
    members: sltMembers.filter((member) => member.tier === "SrDirector"),
  },
  {
    label: "Tier 3",
    heading: "Directors & Senior Manager",
    members: sltMembers.filter(
      (member) => member.tier === "Director" || member.tier === "SrManager",
    ),
  },
] as const;

export const founderLeads: FounderLead[] = [
  {
    id: "anthony",
    name: "Anthony Connelly",
    title: "CEO",
    image: "/team/anthony.png",
    initials: "AC",
  },
  {
    id: "spencer",
    name: "Spencer Jacobs",
    title: "President",
    image: "/team/spencer.jpg",
    initials: "SJ",
  },
];
