import SpeakerCard from "@/components/sections/home/detailedSpeakers/ui/SpeakerCard";
import mockdata from "./mockdata.json";
import { ReactElement } from "react";

type Speaker = {
  name: string;
  title: string;
  description: string;
  image: string;
};

const speakers: Speaker[] = mockdata.speakers;

export default function SectionDetailedSpeakers(): ReactElement {
  return (
    <section
      className="container mx-auto px-4 md:px-6 py-16"
      id="speakers-detail"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0">
          SPEAKERS
        </h2>
        <p className="text-sm md:text-base max-w-md">
          Meet the IT experts shaping the future of technology
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {speakers.map((speaker: Speaker, index: number): ReactElement => (
          <SpeakerCard key={index} {...speaker} />
        ))}
      </div>
    </section>
  );
}

if (
  !Array.isArray(mockdata.speakers) ||
  !mockdata.speakers.every(
    (speaker: Speaker): boolean =>
      typeof speaker.name === "string" &&
      typeof speaker.title === "string" &&
      typeof speaker.description === "string" &&
      typeof speaker.image === "string",
  )
) {
  throw new Error("Invalid mockdata format. Please check mockdata.json");
}
