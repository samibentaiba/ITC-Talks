import CountdownTimer from "@/components/sections/home/registerNow/ui/CountdownTimer";
import { ReactElement } from "react";

export default function SectionRegisterNow(): ReactElement {
  return (
    <section className="container mx-auto px-4 md:px-6 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0">
          REGISTER NOW
        </h2>
        <p className="text-sm md:text-base max-w-md">
          Secure your spot at ITC Talks 6th Edition and join the future of IT
          innovation
        </p>
      </div>

      <CountdownTimer />
    </section>
  );
}
