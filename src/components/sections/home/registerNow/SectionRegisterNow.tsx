"use client";

export default function SectionRegisterNow() {
  const screenSize = useScreenSize();

  const layoutConfig = styles[screenSize];

  return (
    <section className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 max-w-[1880px] flex flex-col items-center py-4">
      <div className={layoutConfig.containerClass}>
        <div className={layoutConfig.contentClass}>
          <h2 className={`${layoutConfig.titleSize} font-bold`}>Register Now</h2>
          <p className={`text-white font-normal font-Syne leading-relaxed ${layoutConfig.textSize}`}>
            Secure your spot at ITC Talks 6th Edition and join the future of IT innovation
          </p>
        </div>
        <CountdownTimer layout={screenSize} />
      </div>
    </section>
  );
}

/* data */
import { styles } from "./data/styles";

/* hooks */
import { useScreenSize } from "@/hooks/use-screen-size";

/* ui */
import CountdownTimer from "@/components/sections/home/registerNow/ui/CountdownTimer";