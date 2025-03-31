"use client"

import type { ReactElement } from "react"
import Image from "next/image"
import "@/styles/button.css"

interface StartButtonProps {
  text: string
  onClick?: () => void
  className?: string
}

export default function StartButton({
  text = "Register Now",
  onClick,
  className = "",
}: StartButtonProps): ReactElement {
  return (
    <button
      className={`animated-gradient-button flex items-center gap-2 justify-between px-7 py-3 rounded-full cursor-pointer hover:scale-105 transition-transform duration-300 ${className}`}
      onClick={onClick}
    >
      <span className="text-lg font-medium font-Syne text-white">{text}</span>
      <Image src="/images/arrow-empty.svg" alt="arrow empty" width={15} height={15} />
    </button>
  )
}