"useclient";

import SectionHeader from "@/components/sections/home/header/SectionHeader";
import SectionHero from "@/components/sections/home/hero/SectionHero";
import SectionSponsors from "@/components/sections/home/sponsors/SectionSponsors";
import SectionAboutNSpeakers from "@/components/sections/home/about&speakers/SectionAboutNSpeakers";
import SectionAgenda from "@/components/sections/home/agenda/SectionAgenda";
import SectionDetailedSpeakers from "@/components/sections/home/detailedSpeakers/SectionDetailedSpeakers";
import SectionWhyAttend from "@/components/sections/home/whyAttend/SectionWhyAttend";
import SectionFooter from "@/components/sections/home/footer/SectionFooter";
import SectionRegisterNow from "@/components/sections/home/registerNow/SectionRegisterNow";
import { ComingSoon } from "@/components/sections/home/hero/SectionHero";
export default function Home() {
  return (
    <main className="bg-black min-h-screen overflow-hidden  text-white">
      {/* Hero Section */}
      <SectionHero />
      {/* ComingSoon */}
      <ComingSoon />
      {/* Sponsors */}
      <SectionSponsors />
      {/* About & Speakers */}
      <SectionAboutNSpeakers id="speakers" />
      {/* Agenda */}
      <SectionAgenda />
      {/* Detailed Speakers Section */}
      <SectionDetailedSpeakers />
      {/* Why Attend Section */}
      <SectionWhyAttend />
      {/* Register Now Section */}
      <SectionRegisterNow />
    </main>
  );
}
