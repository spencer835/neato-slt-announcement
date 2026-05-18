import { Hero } from "@/src/components/sections/Hero";
import { Letter } from "@/src/components/sections/Letter";
import { NextMeeting } from "@/src/components/sections/NextMeeting";
import { OrgChart } from "@/src/components/sections/OrgChart";
import { Promotions } from "@/src/components/sections/Promotions";
import { PromotionsIntro } from "@/src/components/sections/PromotionsIntro";
import { SLTIntro } from "@/src/components/sections/SLTIntro";
import { SLTRoster } from "@/src/components/sections/SLTRoster";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <Letter />
      <SLTIntro />
      <PromotionsIntro />
      <Promotions />
      <SLTRoster />
      <OrgChart />
      <NextMeeting />
    </main>
  );
}
