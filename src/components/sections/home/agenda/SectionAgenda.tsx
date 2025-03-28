"use client"  
import type { ReactElement } from "react"
import Image from "next/image"
import { useMediaQuery } from "@/hooks/use-media-query"
import mockdata from "./mockdata.json"
export default function SectionAgenda(): ReactElement {
  const isMobile = useMediaQuery("(max-width: 767px)")
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)")

  return (
    <section className="mx-auto flex-col w-full px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] max-w-[1880px] flex items-center justify-between py-4">
      <div className="flex flex-col md:flex-row justify-between mb-4 md:mb-8 w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-6">AGENDA</h2>
        <p className="text-xs sm:text-sm max-w-full md:max-w-[15%] mb-4 md:mb-0">
          April 8, 2025 | Auditorium, Saad Dahlab University
        </p>
      </div>
      <div className="self-stretch p-4 sm:p-8 md:p-14 bg-[#1C1A1A] w-full rounded-[24px] sm:rounded-[36px] md:rounded-[48px] inline-flex flex-col justify-start items-center gap-10 md:gap-20">
        {isMobile ? <MobileSchedule /> : <Schedule />}
        <button
          className="flex items-center gap-2 sm:gap-4 justify-between px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full"
          style={{
            borderRadius: "100px",
            background: "linear-gradient(85deg, rgba(195, 65, 36, 0.7) 1.59%, rgba(1, 71, 255, 0.5) 121.45%)",
          }}
        >
          <span className="text-base sm:text-lg md:text-xl font-medium font-Syne">Register Now</span>
          <Image src="images/arrow-empty.svg" alt="arrow empty" width={15} height={15} />
        </button>
      </div>
    </section>
  )
}

const ScheduleItem = ({
  time,
  title,
  description,
  border,
}: {
  time: string
  title: string
  description: string
  border: boolean
}) => (
  <div
    className={`flex-1 px-4 sm:px-8 md:px-14 py-6 md:py-10 ${
      border ? "border-r border-white border-opacity-60" : ""
    } flex justify-start items-start gap-4 sm:gap-6 md:gap-10`}
  >
    <div className="justify-start text-white text-2xl sm:text-3xl md:text-4xl font-bold font-Syne">{time}</div>
    <div className="flex-1 inline-flex flex-col justify-start items-start gap-2 sm:gap-3 md:gap-5">
      <div className="self-stretch justify-start text-white text-xl sm:text-2xl md:text-4xl font-bold font-Syne">
        {title}
      </div>
      <div className="self-stretch justify-start text-white text-opacity-80 text-sm sm:text-base md:text-xl font-normal font-Syne leading-normal md:leading-loose">
        {description}
      </div>
    </div>
  </div>
)

const MobileScheduleItem = ({
  time,
  title,
  description,
}: {
  time: string
  title: string
  description: string
}) => (
  <div className="w-full px-4 py-6 border-b border-white border-opacity-60 flex flex-col justify-start items-start gap-3">
    <div className="flex justify-between w-full">
      <div className="text-white text-xl font-bold font-Syne">{time}</div>
      <div className="text-white text-xl font-bold font-Syne">{title}</div>
    </div>
    <div className="self-stretch text-white text-opacity-80 text-sm font-normal font-Syne leading-relaxed">
      {description}
    </div>
  </div>
)

const Schedule = () => (
  <div className="self-stretch flex flex-col justify-start items-start">
    {mockdata.map((row, index) => (
      <div
        key={index}
        className={`self-stretch ${
          index < mockdata.length - 1 ? "border-b border-white border-opacity-60" : ""
        } inline-flex justify-start items-start`}
      >
        {row.map((item, i) => (
          <ScheduleItem key={i} {...item} />
        ))}
      </div>
    ))}
  </div>
)

const MobileSchedule = () => (
  <div className="self-stretch flex flex-col justify-start items-start">
    {mockdata.flat().map((item, index) => (
      <MobileScheduleItem key={index} time={item.time} title={item.title} description={item.description} />
    ))}
  </div>
)



