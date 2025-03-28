import WhyAttendCard from "@/components/sections/home/whyAttend/ui/WhyAttendCard";
import { ReactElement } from "react";
import mockdata from "./mockdata.json";
export default function SectionWhyAttend(): ReactElement {
  return (
    <section className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 max-w-[1880px] flex flex-col items-center py-4">
      <div className="flex flex-col md:flex-row justify-between mb-4 md:mb-8 w-full">
        <h2 className="text-3xl sm:text-4xl md:text-9xl font-bold mb-2 md:mb-6">
          WHY ATTEND?
        </h2>
        <p className="w-96 text-white text-xl font-normal font-Syne leading-relaxed">
          Discover why ITC Talks is the must-attend event for IT enthusiasts,
          professionals, and future innovators
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] justify-between items-stretch w-full h-[580px]">
        {mockdata.whyAttend.map(
          (card: {
            number: string;
            title: string;
            description: string;
          }): ReactElement => (
            <WhyAttendCard key={card.number} {...card} />
          )
        )}
      </div>
    </section>
  );
}
