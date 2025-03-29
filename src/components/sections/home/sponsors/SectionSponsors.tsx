"use client"

import Image from "next/image"
import type { ReactElement } from "react"

export default function SectionSponsors(): ReactElement {
  const sponsors = [
    { brand: "Amazon", src: "/images/companylogo.svg" },
    { brand: "Dribbble", src: "/images/companylogo1.svg" },
    { brand: "HubSpot", src: "/images/companylogo2.svg" },
    { brand: "Notion", src: "/images/companylogo3.svg" },
    { brand: "Gumroad", src: "/images/companylogo4.svg" },
  ]

  // Duplicate sponsors for seamless infinite scroll
  const allSponsors = [...sponsors, ...sponsors]

  return (
    <section className="bg-black py-12 overflow-hidden">
      <div className="relative">
        <div className="flex desktop-marquee mobile-marquee ">
          {allSponsors.map(
            (sponsor: { brand: string; src: string }, index: number): ReactElement => (
              <div key={`${sponsor.brand}-${index}`} className="flex justify-center mx-[5%] min-w-[20%] md:min-w-[10%]">
                <Image
                  src={sponsor.src || "/placeholder.svg"}
                  alt={sponsor.brand}
                  width={100}
                  height={100}
                  className="brightness-0 invert" // Makes logos white
                />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

