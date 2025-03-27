import Image from "next/image";
import type { ReactElement } from "react";

export default function Speakers(): ReactElement {
  // Define the speaker images with their direct URLs
  const speakers = [
    {
      id: 1,
      src: "/Image.png",
      alt: "Speaker 1",
    },
    {
      id: 2,
      src: "/Image1.png",
      alt: "Speaker 2",
    },
    {
      id: 3,
      src: "/Image2.png",
      alt: "Speaker 3",
    },
    {
      id: 4,
      src: "/Image3.png",
      alt: "Speaker 4",
    },
  ];

  return (
    <div
      className="bg-[#0147FF] rounded-2xl p-8  flex items-stretch  self-stretch justify-between flex-col md:p-12 text-white"
      id="speakers"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[40px] font-syne font-bold uppercase ">SPEAKERS</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24 48C37.2548 48 48 37.2549 48 24C48 10.7451 37.2548 0 24 0C10.7452 0 0 10.7451 0 24C0 37.2549 10.7452 48 24 48ZM22.1755 16.8649C21.616 16.8649 21.1625 17.3065 21.1625 17.8513C21.1625 18.3961 21.616 18.8378 22.1755 18.8378H28.3253L17.1616 29.7096C16.766 30.0948 16.766 30.7194 17.1616 31.1046C17.5571 31.4899 18.1985 31.4899 18.5941 31.1046L29.7578 20.2329V26.2218C29.7578 26.7667 30.2114 27.2083 30.7708 27.2083C31.3303 27.2083 31.7838 26.7667 31.7838 26.2218V17.8513C31.7838 17.3065 31.3303 16.8649 30.7708 16.8649H22.1755Z"
            fill="white"
            fill-opacity="0.8"
          />
        </svg>
      </div>

      <p className="text-white/90 mb-8 max-w-md">
        Hear from top IT experts, innovators, and professionals shaping the
        future of technology.
      </p>

      <div className="flex flex-col justify-center items-center md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex -space-x-4">
          {speakers.map((speaker, index) => (
            <Image
              key={speaker.id}
              src={speaker.src || "/placeholder.svg"}
              alt={speaker.alt}
              width={64}
              height={64}
              className={`rounded-full border-2 border-[#0147FF] z-${
                30 - index * 10
              }`}
            />
          ))}
        </div>

        <button className=" hover:bg-white/10 border text-lg  transition-colors rounded-full px-8 md:py-3 py-5 flex items-center gap-2 text-[#ffffff]">
          <span className="font-medium md:text-lg">Learn More</span>
          <Image
            src="images/arrow-empty.svg"
            alt="Arrow"
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  );
}
