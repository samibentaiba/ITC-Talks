"use client";

import { ReactElement } from "react";
import Image from "next/image";
export default function CountdownTimer(): ReactElement {
  return (
    <div className="self-stretch h-[580px] w-full relative bg-stone-900 rounded-[48px] overflow-hidden">
      <Image
        src="images/rightstar.svg"
        alt="right"
        
        width={500}
        height={500}
        className="w-96 h-96 right-[-1rem] top-[13rem] absolute origin-top-left "
      />
      <Image
        src="images/leftstar.svg"
        alt="left"
        
        width={500}
        height={500}
        className="w-96 h-96 left-[-1rem] top-[13rem] absolute origin-top-left "
      />
      <div className="w-[840px] left-[440px] top-[100px] absolute inline-flex flex-col justify-start items-center gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
          <div className="self-stretch text-center justify-start text-white text-xl font-normal font-Syne leading-loose">
            Registrations ends in:
          </div>
          <div className="self-stretch text-center justify-start text-white text-[200px] font-normal font-Syne leading-[200px]">
            00:00:00
          </div>
          <div className="self-stretch inline-flex justify-between items-center">
            <div className="flex-1 text-center justify-start text-white text-base font-normal font-Syne leading-loose">
              DAYS
            </div>
            <div className="flex-1 text-center justify-start text-white text-base font-normal font-Syne leading-loose">
              Hours
            </div>
            <div className="flex-1 text-center justify-start text-white text-base font-normal font-Syne leading-loose">
              Minutes
            </div>
          </div>
        </div>
        <button
          className="flex items-center gap-2 sm:gap-4 justify-between px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full"
          style={{
            borderRadius: "100px",
            background:
              "linear-gradient(85deg, rgba(195, 65, 36, 0.7) 1.59%, rgba(1, 71, 255, 0.5) 121.45%)",
          }}
        >
          <span className="text-base sm:text-lg md:text-xl font-medium font-Syne">
            Register Now
          </span>
          <Image
            src="images/arrow-empty.svg"
            alt="arrow empty"
            width={15}
            height={15}
          />
        </button>
      </div>
    </div>
  );
}
