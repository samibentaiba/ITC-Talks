"use client";

import type { ReactElement } from "react";
import Image from "next/image";
import StartButton from "@/components/ui/StartButton";

type CountdownTimerProps = {
  layout: "desktop" | "tablet" | "mobile";
};

export default function CountdownTimer({
  layout,
}: CountdownTimerProps): ReactElement {
  return (
    <div
      className={`self-stretch relative bg-stone-900 rounded-[48px] overflow-hidden
      ${layout === "mobile" ? "h-[414px]" : "h-[580px]"} w-full`}
    >
      {/* Responsive positioning of decorative elements */}
      <Image
        src="/images/rightstar.svg"
        alt="right"
        width={500}
        height={500}
        className={`
          ${
            layout === "desktop"
              ? "w-96 h-96 right-[-1rem] top-[50%]"
              : layout === "tablet"
              ? "w-72 h-72 left-[77%] top-[70%]"
              : "w-48 h-48 left-[70%] top-[60%]"
          } 
          absolute origin-top-left
        `}
      />
      <Image
        src="/images/leftstar.svg"
        alt="left"
        width={500}
        height={500}
        className={`
          ${
            layout === "desktop"
              ? "w-96 h-96 left-[-1rem] top-[50%]"
              : layout === "tablet"
              ? "w-72 h-72 right-[77%] top-[70%]"
              : "w-48 h-48 right-[70%] top-[60%]"
          } 
          absolute origin-top-left
        `}
      />

      {/* Responsive content layout */}
      <div
        className={`
        ${
          layout === "desktop"
            ? "w-[840px] left-[calc(50%-420px)] top-[100px]"
            : layout === "tablet"
            ? "w-[600px] left-[calc(50%-300px)] top-[80px]"
            : "w-full px-6 top-[60px] left-0"
        } 
        absolute inline-flex flex-col justify-start items-center gap-6 md:gap-10
      `}
      >
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
          <div className="self-stretch text-center justify-start text-white text-base md:text-xl font-normal font-Syne leading-loose">
            Registrations ends in:
          </div>
          <div
            className={`self-stretch text-center justify-start text-white font-normal font-Syne
            ${
              layout === "desktop"
                ? "text-[200px] leading-[200px]"
                : layout === "tablet"
                ? "text-[140px] "
                : "text-[80px] "
            }`}
          >
            00:00:00
          </div>
          <div
            className={`self-stretch  inline-flex justify-between items-center`}
          >
            <div className="flex-1 text-center justify-start text-white text-xs sm:text-base font-normal font-Syne leading-loose">
              DAYS
            </div>
            <div className="flex-1 text-center justify-start text-white text-xs sm:text-base font-normal font-Syne leading-loose">
              Hours
            </div>
            <div className="flex-1 text-center justify-start text-white text-xs sm:text-base font-normal font-Syne leading-loose">
              Minutes
            </div>
          </div>
        </div>
        <StartButton text="Register now" deviceType={layout} />
      </div>
    </div>
  );
}
