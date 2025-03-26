import Link from "next/link";
import { Mail } from "lucide-react";
import { ReactElement } from "react";

export default function SectionHeader(): ReactElement {
  const navItems: string[] = ["Home", "About", "Agenda", "Speakers"];
  const menuLines: number[] = [12, 6, 18];

  return (
    <header className=" mx-auto w-screen px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] max-w-[1800px] flex items-center justify-between py-4 ">
      <nav className="hidden md:flex gap-[1rem] sm:gap-[1.5rem] md:gap-[2rem] lg:gap-[2.5rem]">
        {navItems.map(
          (text: string, i: number): ReactElement => (
            <Link key={i} href={`#${text.toLowerCase()}`} className="text-white hover:text-gray-300">
              {text}
            </Link>
          )
        )}
      </nav>

      <button className="md:hidden text-white" aria-label="Menu">
        <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}>
          {menuLines.map(
            (y: number, i: number): ReactElement => (
              <line key={i} x1={3} y1={y} x2={21} y2={y} strokeLinecap="round" strokeLinejoin="round" />
            )
          )}
        </svg>
      </button>

      <p className="text-4xl font-bold font-syne uppercase text-white">ITC Talks</p>

      <Link href="mailto:contact.itc.talks@gmail.com" className="hidden md:flex items-center text-sm text-white hover:text-gray-300">
        <Mail className="h-4 w-4 mr-2 font-syne" />
        contact.itc.talks@gmail.com
      </Link>
    </header>
  );
}
