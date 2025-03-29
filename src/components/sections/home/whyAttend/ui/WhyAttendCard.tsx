"use client";
import { type ReactElement, useEffect, useState } from "react";
import Image from "next/image";

interface WhyAttendCardProps {
  number: string;
  title: string;
  description: string;
}

export default function WhyAttendCard({
  number,
  title,
  description,
}: WhyAttendCardProps): ReactElement {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Set initial width
    setScreenWidth(window.innerWidth);

    // Update width on resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Desktop layout (>= 1320px)
  if (screenWidth >= 1024) {
    return (
      <div className="w-full h-full p-10 relative bg-stone-900 rounded-3xl overflow-hidden">
        {/* Title positioned exactly as in desktop image */}
        <div className="absolute left-[10%] top-[25%] text-white text-xl font-bold font-Syne uppercase">
          {title}
        </div>

        {/* Number SVG positioned exactly as in desktop image */}
        <div className="absolute h-[40%] w-[40%] left-[5%] top-[60%]">
          <Image
            src={`/images/${number}.svg`}
            fill
            alt={`${number}`}
            priority
          />
        </div>

        {/* Description positioned exactly as in desktop image */}
        <div className="absolute w-[45%] left-[50%] top-[60%] pb-8  text-white text-lg font-normal font-Syne">
          {description}
        </div>
      </div>
    );
  }

  // Tablet layout (768px - 1319px)
  if (screenWidth >= 768) {
    return (
      <div className="w-full p-14 h-[270px] relative bg-stone-900 rounded-3xl overflow-hidden">
        {/* Title positioned exactly as in tablet image */}
        <div className="text-white text-2xl font-bold font-Syne uppercase ">
          {title}
        </div>

        <div className="flex flex-row items-center">
          {/* Number SVG positioned exactly as in tablet image */}
          <div className="absolute h-[60%] w-[40%] right-[55%] top-[50%]">
            <Image
              src={`/images/${number}.svg`}
              fill
              alt={`${number}`}
              priority
            />
          </div>
          {/* Description positioned exactly as in Tablet image */}
          <div className="absolute w-[45%] left-[50%] top-[50%] pb-8  text-white text-xl font-normal font-Syne">
            {description}
          </div>
        </div>
      </div>
    );
  }

  // Mobile layout (< 768px)
  return (
    <div className="w-full h-[270px] relative bg-stone-900 rounded-3xl overflow-hidden p-8">
      {/* Title positioned exactly as in mobile image */}
      <div className="text-white text-xl font-bold font-Syne uppercase mb-6">
        {title}
      </div>

      {/* Description positioned exactly as in mobile image */}
      <div className="text-white text-lg  font-normal font-Syne text-center">
        {description}
      </div>
      {/* Number SVG positioned exactly as in mobile image */}
      <div className=" w-full absolute h-[90px] left-[0%] top-[70%] mb-4 flex justify-center">
        <Image
          src={`/images/${number}.svg`}
          width={200}
          height={200}
          alt={`${number}`}
          priority
          className="object-contain"
        />
      </div>

    </div>
  );
}
