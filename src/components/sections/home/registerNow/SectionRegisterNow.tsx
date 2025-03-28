import CountdownTimer from "@/components/sections/home/registerNow/ui/CountdownTimer";
import { ReactElement } from "react";

export default function SectionRegisterNow(): ReactElement {
  return (
    <section className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 max-w-[1880px] flex flex-col items-center py-4">
      <div className="flex flex-col md:flex-row justify-between mb-4 md:mb-8 w-full">
        <h2 className="text-3xl sm:text-4xl md:text-9xl font-bold mb-2 md:mb-6">
          Register Now
        </h2>
        <p className="w-96 text-white text-xl font-normal font-Syne leading-relaxed">
          Secure your spot at ITC Talks 6th Edition and join the future of IT
          innovation
        </p>
      </div>
      <CountdownTimer />
    </section>
  );
}
