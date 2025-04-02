"use client"

import Image from "next/image"
import type { ReactElement } from "react"
import Link from "next/link"
export default function SectionSponsors(): ReactElement {
  const sponsors = [
    { brand: "Amazon", src: "/images/companylogo.svg" },
    { brand: "Dribbble", src: "/images/companylogo1.svg" },
    { brand: "HubSpot", src: "/images/companylogo2.svg" },
    { brand: "Notion", src: "/images/companylogo3.svg" },
    { brand: "Gumroad", src: "/images/companylogo4.svg" },
  ]

  const allSponsors = [...sponsors, ...sponsors]

  return (
    <section className="bg-black py-12 overflow-hidden">
      <div className="relative">
        <div className="flex desktop-marquee mobile-marquee ">
          {allSponsors.map(
            (sponsor: { brand: string; src: string }, index: number): ReactElement => (
              <Link href={`https://www.${sponsor.brand}.com`} key={`${sponsor.brand}-${index}`} className="flex justify-center mx-[5%] min-w-[20%] md:min-w-[10%]">

                <Image
                  src={sponsor.src || "/placeholder.svg"}
                  alt={sponsor.brand}
                  width={100}
                  height={100}
                  className="brightness-0 invert cursor-pointer"
                />
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  )
}

