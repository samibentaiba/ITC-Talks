"use client";
import StartButton from "../../../ui/StartButton";
import { useScreenSize } from "@/hooks/use-screen-size";

export default function SectionAgenda() {
  const screenSize = useScreenSize();


  const layout = styles[screenSize];

  return (
    <section className={layout.section} id="agenda">
      <div className={layout.header}>
        <h2 className={layout.headerTitle}>AGENDA</h2>
        <p className={layout.headerText}>
          April 8, 2025 | Auditorium, Saad Dahlab University
        </p>
      </div>
      <div className={layout.Agenda}>
        <Schedule styles={layout} screenSize={screenSize}/>
        <StartButton text="Register now" deviceType={screenSize} />
      </div>
    </section>
  )
}

import { Schedule } from "./ui/Schedule";
import { styles } from "./data/style";