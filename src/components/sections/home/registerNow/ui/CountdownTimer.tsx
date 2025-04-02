"use client";

import type { ReactElement } from "react";
import StartButton from "@/components/ui/StartButton";
import { ScreenSize } from "@/hooks/use-screen-size";

type CountdownTimerProps = {
  layout: ScreenSize;
};

const LAYOUT_STYLES = {
  desktop: {
    containerHeight: "h-[580px]",
    contentWidth: "w-[840px] left-[calc(50%-420px)] top-[100px]",
  },
  tablet: {
    containerHeight: "h-[580px]",
    contentWidth: "w-[600px] left-[calc(50%-300px)] top-[80px]",
  },
  mobile: {
    containerHeight: "h-[414px]",
    contentWidth: "w-full px-6 top-[60px] left-0",
  },
};

export default function CountdownTimer({ layout }: CountdownTimerProps): ReactElement {
  const styles = LAYOUT_STYLES[layout];

  return (
    <div className={`self-stretch relative bg-stone-900 rounded-[48px] overflow-hidden ${styles.containerHeight} w-full`}>
      {/* Decorative Elements */}
      <Decorative />

      {/* Countdown Content */}
      <div className={`absolute inline-flex flex-col justify-start items-center gap-6 md:gap-10 ${styles.contentWidth}`}>
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
          
          <div className="self-stretch text-center justify-start text-white text-base md:text-xl font-normal font-Syne leading-loose">
            Registrations ends in:
          </div>


          <Timer />

          <TimerLabel />

        </div>
        <StartButton text="Register now" deviceType={layout} />
      </div>
    </div>
  );
}

/* other ui */
import Decorative from "./Decorative";
import Timer from "./timer";
import TimerLabel from "./timerLabel";