"use client"

export default function SectionWhyAttend() {
  const screenSize = useScreenSize();

  const layout = styles[screenSize];

  return (
    <section className={`mx-auto w-full px-4 flex flex-col items-center max-w-[1880px] py-4 ${layout.section}`}>
      {/* Header section */}
      <div className={`flex ${layout.text}`}>
        <h2 className={`font-bold ${layout.textTitle}`}>WHY ATTEND?</h2>
        <p className={`text-white font-normal font-Syne text-${layout.textSize} ${layout.textDescription}`}>
          Discover why ITC Talks is the must-attend event for IT enthusiasts, professionals, and future innovators
        </p>
      </div>

      {/* Cards grid */}
      <div className={`w-full ${layout.card}`}>
        {mockdata.whyAttend.map(
          (card: {
            number: string
            title: string
            description: string
          }): ReactElement => (
            <div key={card.number} className={layout.cardSize}>
              <WhyAttendCard {...card} />
            </div>
          ),
        )}
      </div>
    </section>
  )
}

/* package */
import type { ReactElement } from "react"

/* ui */
import WhyAttendCard from "@/components/sections/home/whyAttend/ui/WhyAttendCard"

/* data */
import mockdata from "./data/mockdata.json"
import { styles } from "./data/styles";

/* hooks */
import { useScreenSize } from "@/hooks/use-screen-size"