import type { ReactElement } from "react"
import Image from "next/image"
interface WhyAttendCardProps {
  number: string
  title: string
  description: string
}

export default function WhyAttendCard({ number, title, description }: WhyAttendCardProps): ReactElement {
  return (
    <div className="w-full h-full relative bg-stone-900 rounded-3xl overflow-hidden p-4 sm:p-6">
      {/* Title positioned at top */}
      <div className="text-white text-xl font-bold font-Syne uppercase leading-loose m-6">{title}</div>

      <div className="flex flex-row gap-[10%] items-start absolute md:top-[50%] sm:top-[30%] top-[40%]">
        {/* Number SVG */}
        <div className="w-[60%] md:w-[40%] h-full">
          <Image src={`/images/${number}.svg`} width={300} height={200} className="h-40" alt={`${number}`} priority />
        </div>

        {/* Description positioned to the right of the number */}
        <div className="text-white text-xl  font-normal font-Syne leading-relaxed  max-w-[60%] md:max-w-[45%]">
          {description}
        </div>
      </div>
    </div>
  )
}

