"use client"
import type { ReactElement } from "react"
import Image from "next/image"
import { useEffect, useState } from "react"
import mockdata from "./mockdata.json"

export default function SectionAgenda(): ReactElement {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1600)
      setIsDesktop(window.innerWidth >= 1600)
    }

    // Initial check
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (isMobile) {
    return <MobileAgenda />
  }

  if (isTablet) {
    return <TabletAgenda />
  }

  return <DesktopAgenda />
}

function DesktopAgenda(): ReactElement {
  return (
    <section className="mx-auto flex-col w-full px-10 max-w-[1880px] flex items-center justify-between py-4">
      <div className="flex flex-row justify-between mb-8 w-full">
        <h2 className="text-9xl font-bold mb-6">AGENDA</h2>
        <p className="text-sm max-w-[15%] mb-0">April 8, 2025 | Auditorium, Saad Dahlab University</p>
      </div>
      <div className="self-stretch p-14 bg-[#1C1A1A] w-full rounded-[48px] inline-flex flex-col justify-start items-center gap-20">
        <Schedule />
        <button
          className="flex items-center gap-8 justify-between px-8 py-4 rounded-full"
          style={{
            borderRadius: "100px",
            background: "linear-gradient(85deg, rgba(195, 65, 36, 0.7) 1.59%, rgba(1, 71, 255, 0.5) 121.45%)",
          }}
        >
          <span className="text-xl font-medium font-Syne">Register Now</span>
          <Image src="images/arrow-empty.svg" alt="arrow empty" width={15} height={15} />
        </button>
      </div>
    </section>
  )
}

function TabletAgenda(): ReactElement {
  return (
    <section className="mx-auto flex-col w-full p-[24px] max-w-[1880px] flex items-center justify-between">
      <div className="flex flex-col mb-4 w-full">
        <h2 className="text-8xl font-bold mb-2">AGENDA</h2>
        <p className="text-2xl max-w-full mb-4">April 8, 2025 | Auditorium, Saad Dahlab University</p>
      </div>
      <div className="self-stretch p-4 bg-[#1C1A1A] w-full rounded-[24px] inline-flex flex-col justify-start items-center gap-10">
        <TabletSchedule />
        <button
          className="flex items-center gap-2 justify-between px-4 py-3 rounded-full"
          style={{
            borderRadius: "100px",
            background: "linear-gradient(85deg, rgba(195, 65, 36, 0.7) 1.59%, rgba(1, 71, 255, 0.5) 121.45%)",
          }}
        >
          <span className="text-base font-medium font-Syne">Register Now</span>
          <Image src="images/arrow-empty.svg" alt="arrow empty" width={15} height={15} />
        </button>
      </div>
    </section>
  )
}

function MobileAgenda(): ReactElement {
  return (
    <section className="mx-auto flex-col w-full px-[16px] max-w-[1880px] flex items-center justify-between">
      <div className="flex flex-col mb-4 w-full">
        <h2 className="text-3xl font-bold mb-2">AGENDA</h2>
        <p className="text-xs max-w-full mb-4">April 8, 2025 | Auditorium, Saad Dahlab University</p>
      </div>
      <div className="self-stretch p-4 bg-[#1C1A1A] w-full rounded-[24px] inline-flex flex-col justify-start items-center gap-10">
        <MobileSchedule />
        <button
          className="flex items-center gap-2 justify-between px-4 py-3 rounded-full"
          style={{
            borderRadius: "100px",
            background: "linear-gradient(85deg, rgba(195, 65, 36, 0.7) 1.59%, rgba(1, 71, 255, 0.5) 121.45%)",
          }}
        >
          <span className="text-base font-medium font-Syne">Register Now</span>
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
    className={`flex-1 px-14 py-10 ${
      border ? "border-r border-white border-opacity-60" : ""
    } flex justify-start items-start gap-10`}
  >
    <div className="justify-start text-white text-4xl font-bold font-Syne">{time}</div>
    <div className="flex-1 inline-flex flex-col justify-start items-start gap-5">
      <div className="self-stretch justify-start text-white text-4xl font-bold font-Syne">{title}</div>
      <div className="self-stretch justify-start text-white text-opacity-80 text-xl font-normal font-Syne leading-loose">
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
      <div className="text-white text-xl font-bold font-Syne">{title}</div>
      <div className="text-white text-xl font-bold font-Syne">{time}</div>
    </div>
    <div className="self-stretch text-white text-opacity-80 text-sm font-normal font-Syne leading-relaxed">
      {description}
    </div>
  </div>
)
const TabletScheduleItem = ({
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
      <div className="text-white text-3xl font-bold font-Syne">{title}</div>
      <div className="text-white text-3xl font-bold font-Syne">{time}</div>
    </div>
    <div className="self-stretch text-white text-opacity-80 text-2xl font-normal font-Syne leading-relaxed">
      {description}
    </div>
  </div>
)
const TabletSchedule = () => (
  <div className="self-stretch flex flex-col justify-start items-start">
    {mockdata.flat().map((item, index) => (
      <TabletScheduleItem key={index} time={item.time} title={item.title} description={item.description} />
    ))}
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
          <ScheduleItem
            key={i}
            time={item.time}
            title={item.title}
            description={item.description}
            border={i < row.length - 1}
          />
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

