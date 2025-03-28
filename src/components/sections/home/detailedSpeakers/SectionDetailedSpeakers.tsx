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
    <section className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 max-w-[1880px] flex flex-col items-center py-4">
      <div className="self-stretch flex justify-between items-center mb-8">
        <div className="text-white text-8xl font-bold font-['Syne'] uppercase">
          Speakers
        </div>
        <div className="w-96 text-white text-xl font-normal font-['Syne'] leading-loose">
          Meet the IT experts shaping the future of technology
        </div>
      </div>
      <div className="grid grid-cols-4  grid-row-1 justify-between gap-[40px] items-stretch  w-full">
        <DataCard
          name={speakers[0].name}
          title={speakers[0].title}
          description={speakers[0].description}
        />
        <ImageCard name={speakers[0].name} image={speakers[0].image} />
        <DataCard
          name={speakers[1].name}
          title={speakers[1].title}
          description={speakers[1].description}
        />
        <ImageCard name={speakers[1].name} image={speakers[1].image} />
        <DataCard
          name={speakers[2].name}
          title={speakers[2].title}
          description={speakers[2].description}
        />
        <ImageCard name={speakers[2].name} image={speakers[2].image} />
        <DataCard
          name={speakers[3].name}
          title={speakers[3].title}
          description={speakers[3].description}
        />
        <ImageCard name={speakers[3].name} image={speakers[3].image} />
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
      typeof speaker.image === "string"
  )
) {
  throw new Error("Invalid mockdata format. Please check mockdata.json");
}


function ImageCard({ image, name }: { image: string; name: string }) {
  return (
      <img className="w-full h-full object-cover" src={image} alt={name} />
  );
}

function DataCard({
  name,
  title,
  description,
}: {
  name: string;
  title: string;
  description: string;
}) {
  return (
    <div className="w-full h-[612px] p-10 bg-zinc-200 rounded-3xl flex flex-col justify-between items-start">
      <div className="w-full flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="text-stone-900 text-3xl font-semibold font-['Syne']">
            {name}
          </div>
          <div className="w-9 h-9 bg-stone-900 bg-opacity-60" />
        </div>
        <div className="text-stone-900 text-opacity-60 text-xl font-normal font-['Syne']">
          {title}
        </div>
      </div>
      <div className="text-stone-900 text-opacity-80 text-xl font-medium font-['Syne'] leading-loose">
        {description}
      </div>
    </div>
  );
}
