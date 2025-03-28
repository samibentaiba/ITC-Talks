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
    <section className="mx-auto flex-col w-full px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] max-w-[1720px] flex items-center justify-between py-4">
      <div className="self-stretch inline-flex justify-between items-center">
        <div className="justify-start text-white text-8xl font-bold font-['Syne'] uppercase">
          Speakers
        </div>
        <div className="w-96 justify-start text-white text-xl font-normal font-['Syne'] leading-loose">
          Meet the IT experts shaping the future of technology
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-10">
        {Array.from(
          { length: Math.ceil(speakers.length / 2) },
          (_, rowIndex) => (
            <div
              key={rowIndex}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "40px",
                alignSelf: "stretch",
              }}
            >
              {speakers
                .slice(rowIndex * 2, rowIndex * 2 + 2)
                .map((speaker, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "40px",
                    }}
                  >
                    <div className="w-[400px] h-[612px] p-10 bg-zinc-200 rounded-3xl inline-flex flex-col justify-between items-start">
                      <div className="self-stretch flex flex-col justify-start items-start gap-1">
                        <div className="self-stretch inline-flex justify-between items-center">
                          <div className="justify-start text-stone-900 text-3xl font-semibold font-['Syne']">
                            {speaker.name}
                          </div>
                          <div className="w-9 h-9 bg-stone-900 bg-opacity-60" />
                        </div>
                        <div className="self-stretch justify-start text-stone-900 text-opacity-60 text-xl font-normal font-['Syne']">
                          {speaker.title}
                        </div>
                      </div>
                      <div className="self-stretch justify-start text-stone-900 text-opacity-80 text-xl font-medium font-['Syne'] leading-loose">
                        {speaker.description}
                      </div>
                    </div>
                    <div className="w-[400px] h-[612px] relative rounded-3xl overflow-hidden">
                      <img
                        className="w-[400px] h-[612px] left-0 top-0 absolute"
                        src={speaker.image}
                        alt={speaker.name}
                      />
                    </div>
                  </div>
                ))}
            </div>
          )
        )}
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
