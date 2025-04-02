"use client"

import type { ReactElement } from "react"
import Image from "next/image"
import "@/styles/button.css"

interface StartButtonProps {
  text: string
  onClick?: () => void
  className?: string
  deviceType?: "mobile" | "tablet" | "desktop"
}

export default function StartButton({
  text = "Register Now",
  onClick,
  className = "",
  deviceType = "desktop",
}: StartButtonProps): ReactElement {
  const getSizeClasses = () => {
    switch (deviceType) {
      case "mobile":
        return "text-base px-4 py-2 gap-2";
      case "tablet":
        return "text-lg px-6 py-3 gap-4";
      case "desktop":
      default:
        return "text-xl px-8 py-4 gap-6";
    }
  };

  return (
    <button
      className={`animated-gradient-button flex items-center justify-between rounded-full cursor-pointer hover:scale-101 transition-transform duration-300 ${getSizeClasses()} ${className}`}
      onClick={onClick}
    >
      <span className="font-medium select-none font-Syne text-white">{text}</span>
      <Image src="/images/arrow-empty.svg" alt="arrow empty" width={15} height={15} />
    </button>
  )
}
