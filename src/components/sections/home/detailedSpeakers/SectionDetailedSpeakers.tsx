"use client"
import { speakers, Speaker } from "./mockdata";
import { ReactElement } from "react";
import { DataCard, ImageCard } from "./ui/SpeakerCard";

import { useEffect, useState } from "react"

export default function App() {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1320)
    }

    // Initial check
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="bg-black min-h-screen">
      {isDesktop ? <SectionDetailedSpeakers /> : <ResponsiveSpeakersLayout />}
    </div>
  )
}


function SectionDetailedSpeakers(): ReactElement {
  return (
    <section className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 max-w-[1880px] flex flex-col items-center py-4">
      <div className="self-stretch flex justify-between items-center mb-8">
        <div className="text-white text-8xl font-bold font-Syne uppercase">
          Speakers
        </div>
        <div className="w-96 text-white text-xl font-normal font-Syne leading-loose">
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
        <ImageCard name={speakers[2].name} image={speakers[2].image} />
        <DataCard
          name={speakers[2].name}
          title={speakers[2].title}
          description={speakers[2].description}
        />

        <ImageCard name={speakers[3].name} image={speakers[3].image} />
        <DataCard
          name={speakers[3].name}
          title={speakers[3].title}
          description={speakers[3].description}
        />
      </div>
    </section>
  );
}
function ResponsiveSpeakersLayout() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1320)
    }

    // Initial check
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Mobile layout
  if (isMobile) {
    return (
      <section className="mx-auto w-full px-4 max-w-[1880px] flex flex-col items-center py-4 bg-black">
        <div className="self-stretch flex flex-col items-start mb-6">
          <div className="text-white text-4xl font-bold font-Syne uppercase mb-4">Speakers</div>
          <div className="text-white text-lg font-normal font-Syne leading-relaxed">
            Meet the IT experts shaping the future of technology
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {speakers.map((speaker, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="w-full aspect-[3/4]">
                <ImageCard name={speaker.name} image={speaker.image} />
              </div>
              <DataCard name={speaker.name} title={speaker.title} description={speaker.description} />
            </div>
          ))}
        </div>
      </section>
    )
  }

  // Tablet layout
  if (isTablet) {
    return (
      <section className="mx-auto w-full px-6 max-w-[1880px] flex flex-col items-center py-6 bg-black">
        <div className="self-stretch flex flex-col  justify-between items-start mb-8 gap-4">
          <div className="text-white text-6xl font-bold font-Syne uppercase">Speakers</div>
          <div className="text-white text-xl font-normal font-Syne leading-loose w-full">
            Meet the IT experts shaping the future of technology
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 w-full">
          {speakers.map((speaker, index) => {
            // For each speaker, we need to create both a data card and an image card
            const isEven = index % 2 === 0
            return (
              <div key={index} className="contents">
                {isEven ? (
                  <>
                    <DataCard name={speaker.name} title={speaker.title} description={speaker.description} />
                    <div className="w-full h-full">
                      <ImageCard name={speaker.name} image={speaker.image} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-full h-full">
                      <ImageCard name={speaker.name} image={speaker.image} />
                    </div>
                    <DataCard name={speaker.name} title={speaker.title} description={speaker.description} />
                  </>
                )}
              </div>
            )
          })}
        </div>
      </section>
    )
  }

  // Default to the original desktop layout
  return null
}
if (
  !Array.isArray(speakers) ||
  !speakers.every(
    (speaker: Speaker): boolean =>
      typeof speaker.name === "string" &&
      typeof speaker.title === "string" &&
      typeof speaker.description === "string" &&
      typeof speaker.image === "string"
  )
) {
  throw new Error("Invalid mockdata format. Please check mockdata.json");
}
