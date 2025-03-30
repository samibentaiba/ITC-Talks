"use client"

import { useEffect, useState } from "react"
import CountdownTimer from "@/components/sections/home/registerNow/ui/CountdownTimer"

export default function SectionRegisterNow() {
  const [screenSize, setScreenSize] = useState<"desktop" | "tablet" | "mobile">("desktop")

  // Screen size detection with useEffect and event listener
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1320) {
        setScreenSize("desktop")
      } else if (width >= 768 && width < 1320) {
        setScreenSize("tablet")
      } else {
        setScreenSize("mobile")
      }
    }

    // Set initial size
    handleResize()

    // Add event listener for resize
    window.addEventListener("resize", handleResize)

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 max-w-[1880px] flex flex-col items-center py-4">
      {/* Dynamic layout based on screen size */}
      {screenSize === "desktop" && (
        // Desktop: Grid-based layout
        <div className="grid grid-cols-1 gap-8 w-full">
          <div className="grid grid-cols-2 gap-8 w-full">
            <h2 className="text-6xl lg:text-9xl font-bold">Register Now</h2>
            <p className="text-white text-xl flex items-end w-[50%] justify-end align-top self-start place-self-end  font-normal font-Syne leading-relaxed ">
              Secure your spot at ITC Talks 6th Edition and join the future of IT innovation
            </p>
          </div>
          <CountdownTimer layout={screenSize} />
        </div>
      )}

      {screenSize === "tablet" && (
        // Tablet: Two-column alternating layout
        <div className="flex flex-col gap-6 w-full">
          
            <h2 className="text-4xl md:text-6xl font-bold">Register Now</h2>
            <p className="text-white text-lg font-normal font-Syne leading-relaxed">
              Secure your spot at ITC Talks 6th Edition and join the future of IT innovation
            </p>
          
          <CountdownTimer layout={screenSize} />
        </div>
      )}

      {screenSize === "mobile" && (
        // Mobile: Stacked vertical layout
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Register Now</h2>
          <p className="text-white text-base sm:text-lg font-normal font-Syne leading-relaxed mb-4">
            Secure your spot at ITC Talks 6th Edition and join the future of IT innovation
          </p>
          <CountdownTimer layout={screenSize} />
        </div>
      )}
    </section>
  )
}

