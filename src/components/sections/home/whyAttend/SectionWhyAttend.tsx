"use client"
import WhyAttendCard from "@/components/sections/home/whyAttend/ui/WhyAttendCard"
import type { ReactElement } from "react"

import { useEffect, useState } from "react"
import mockdata from "./mockdata.json"
export default function App() {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    // Initial check
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <>{isDesktop ? <SectionWhyAttend /> : <ResponsiveWhyAttend />}</>
}
function SectionWhyAttend(): ReactElement {
  return (
    <section className="mx-auto h-[800px] w-full px-4 sm:px-6 md:px-8 lg:px-10 max-w-[1880px] flex flex-col items-center py-4">
      {/* Header section - side by side on desktop */}
      <div className="flex flex-row justify-between mb-8 w-full">
        <h2 className="text-9xl font-bold">WHY ATTEND?</h2>
        <p className="w-[30%] text-white text-xl font-normal font-Syne">
          Discover why ITC Talks is the must-attend event for IT enthusiasts, professionals, and future innovators
        </p>
      </div>

      {/* Cards grid - 2 columns on desktop */}
      <div className="grid grid-cols-2 gap-[40px] h-[80%] w-full">
        {mockdata.whyAttend.map(
          (card: {
            number: string
            title: string
            description: string
          }): ReactElement => (
            <div key={card.number} className="max-h-[270px]">
              <WhyAttendCard {...card} />
            </div>
          ),
        )}
      </div>
    </section>
  )
}

function ResponsiveWhyAttend() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }

    // Initial check
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  if (isMobile) {
    return (
      <section className="mx-auto w-full px-4 max-w-[1880px] flex flex-col items-center py-4">
        {/* Header section - stacked on mobile */}
        <div className="flex flex-col mb-6 w-full">
          <h2 className="text-3xl font-bold mb-2">WHY ATTEND?</h2>
          <p className="text-white text-sm font-normal font-Syne mb-4">
            Discover why ITC Talks is the must-attend event for IT enthusiasts, professionals, and future innovators
          </p>
        </div>

        {/* Cards stack - 1 column on mobile */}
        <div className="flex flex-col gap-4 w-full">
          {mockdata.whyAttend.map(
            (card: {
              number: string
              title: string
              description: string
            }): ReactElement => (
              <div key={card.number} className="min-h-[200px]">
                <WhyAttendCard {...card} />
              </div>
            ),
          )}
        </div>
      </section>
    )
  }

  // Tablet layout
  if (isTablet) {
    return (
      <section className="mx-auto w-full px-4 sm:px-6 md:px-8 max-w-[1880px] flex flex-col items-center py-4">
        {/* Header section - stacked on tablet */}
        <div className="flex flex-col mb-6 w-full">
          <h2 className="text-4xl font-bold mb-2">WHY ATTEND?</h2>
          <p className="text-white text-base font-normal font-Syne mb-4">
            Discover why ITC Talks is the must-attend event for IT enthusiasts, professionals, and future innovators
          </p>
        </div>

        {/* Cards stack - 1 column on tablet */}
        <div className="flex flex-col gap-4 w-full">
          {mockdata.whyAttend.map(
            (card: {
              number: string
              title: string
              description: string
            }): ReactElement => (
              <div key={card.number} className="h-[270px]">
                <WhyAttendCard {...card} />
              </div>
            ),
          )}
        </div>
      </section>
    )
  }

  // Default to null (should never reach here)
  return null
}

