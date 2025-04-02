"use client";

import { type ReactElement } from "react";
import Image from "next/image";
import { useScreenSize } from "@/hooks/use-screen-size";

interface WhyAttendCardProps {
  number: string;
  title: string;
  description: string;
}

export default function WhyAttendCard({
  number,
  title,
  description,
}: WhyAttendCardProps): ReactElement {
  const screenSize = useScreenSize();

  const styles = {
    desktop: {
      container: "h-full p-10",
      title: "text-2xl absolute left-[10%] top-[25%]",
      description: "absolute w-[45%] left-[50%] top-[60%] pb-8 text-lg",
      number: "h-[40%] w-[40%] left-[5%] top-[60%]"
    },
    tablet: {
      container: "h-[270px] p-14",
      title: "text-2xl",
      description: "absolute w-[45%] left-[50%] top-[50%] pb-8 text-xl",
      number: "h-[60%] w-[40%] right-[55%] top-[50%]"
    },
    mobile: {
      container: "h-[270px] p-12",
      title: "text-xl mb-6 text-center",
      description: "text-lg text-center",
      number: "w-full h-[90px] left-[0%] top-[70%] mb-4 flex justify-center"
    }
  }[screenSize];

  return (
    <div className={`w-full relative bg-stone-900 overflow-hidden rounded-3xl ${styles.container}`}>
      <div className={`text-white font-bold font-Syne uppercase ${styles.title}`}>{title}</div>
      <div className={`text-white font-normal font-Syne ${styles.description}`}>{description}</div>
      <div className={`absolute ${styles.number}`}>
        <Image
          src={`/images/${number}.svg`}
          fill={screenSize !== "mobile"}
          width={screenSize === "mobile" ? 200 : undefined}
          height={screenSize === "mobile" ? 200 : undefined}
          alt={`${number}`}
          priority
          className={screenSize === "mobile" ? "object-contain" : ""}
        />
      </div>
    </div>
  );
}
