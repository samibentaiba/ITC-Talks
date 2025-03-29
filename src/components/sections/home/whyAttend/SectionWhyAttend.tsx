import WhyAttendCard from "@/components/sections/home/whyAttend/ui/WhyAttendCard"
import type { ReactElement } from "react"
import mockdata from "./mockdata.json"

export default function SectionWhyAttend(): ReactElement {
  return (
    <section className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 max-w-[1880px] flex flex-col items-center py-4">
      {/* Header section - stacked on mobile, side by side on desktop */}
      <div className="flex flex-col lg:flex-row justify-between mb-4 md:mb-8 w-full">
        <h2 className="text-8xl lg:text-9xl w-full font-bold ">WHY ATTEND?</h2>
        <p className="w-[40%]  md:w-[70%]  lg:w-[30%] text-white text-base sm:text-lg md:text-xl font-normal font-Syne ">
          Discover why ITC Talks is the must-attend event for IT enthusiasts, professionals, and future innovators
        </p>
      </div>

      {/* Cards grid - 1 column on mobile/tablet, 2 columns on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-[40px] w-full">
        {mockdata.whyAttend.map(
          (card: {
            number: string
            title: string
            description: string
          }): ReactElement => (
            <div key={card.number} className="md:min-h-[270px] sm:min-h-[170px]">
              <WhyAttendCard {...card} />
            </div>
          ),
        )}
      </div>
    </section>
  )
}

