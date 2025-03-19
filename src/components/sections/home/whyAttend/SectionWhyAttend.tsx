import WhyAttendCard from "@/components/sections/home/whyAttend/ui/WhyAttendCard";
import { ReactElement } from "react";
import mockdata from "./mockdata.json";
export default function SectionWhyAttend(): ReactElement {
  return (
    <section className="container mx-auto px-4 md:px-6 py-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0">
          WHY ATTEND?
        </h2>
        <p className="text-sm md:text-base max-w-md">
          Discover why ITC Talks is the must-attend event for IT students,
          professionals, and future innovators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockdata.whyAttend.map((
          card: { number: string; title: string; description: string },
        ): ReactElement => <WhyAttendCard key={card.number} {...card} />)}
      </div>
    </section>
  );
}
