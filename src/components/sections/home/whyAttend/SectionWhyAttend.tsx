import WhyAttendCard from "@/components/sections/home/whyAttend/ui/WhyAttendCard";
import { ReactElement } from "react";
import mockdata from "./mockdata.json";
export default function SectionWhyAttend(): ReactElement {
  return (
    <section className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 max-w-[1880px] flex flex-col items-center py-4">
      <div className="self-stretch flex justify-between items-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0">
          WHY ATTEND?
        </h2>
        <p className="text-sm md:text-base max-w-md">
          Discover why ITC Talks is the must-attend event for IT students,
          professionals, and future innovators.
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
