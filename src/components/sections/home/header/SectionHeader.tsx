import Link from "next/link";
import { Mail } from "lucide-react";
import { ReactElement } from "react";

export default function SectionHeader(): ReactElement {
  const navItems: string[] = ["Home", "About", "Agenda", "Speakers"];
  const menuLines: number[] = [12, 6, 18];

  return (
    <header className=" mx-auto w-screen px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] max-w-[1880px] flex items-center justify-between py-4 ">
      <nav className="hidden md:flex gap-[1rem] sm:gap-[1.5rem] md:gap-[2rem] lg:gap-[2.5rem]">
        {navItems.map(
          (text: string, i: number): ReactElement => (
            <Link
              key={i}
              href={`#${text.toLowerCase()}`}
              className="text-white hover:text-gray-300"
            >
              {text}
            </Link>
          )
        )}
      </nav>

      <p className="text-4xl font-bold font-syne uppercase text-white">
        ITC Talks
      </p>
      <button className="md:hidden text-white" aria-label="Menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M2.66675 6.16667C2.66675 5.52233 3.18908 5 3.83341 5H20.1668C20.8111 5 21.3334 5.52233 21.3334 6.16667C21.3334 6.811 20.8111 7.33333 20.1667 7.33333H3.83341C3.18908 7.33333 2.66675 6.811 2.66675 6.16667ZM7.33342 12C7.33342 11.3557 7.85575 10.8333 8.50008 10.8333H20.1667C20.8111 10.8333 21.3334 11.3557 21.3334 12C21.3334 12.6443 20.8111 13.1667 20.1667 13.1667H8.50008C7.85575 13.1667 7.33342 12.6443 7.33342 12ZM13.1667 17.8333C13.1667 17.189 13.6891 16.6667 14.3334 16.6667H20.1667C20.8111 16.6667 21.3334 17.189 21.3334 17.8333C21.3334 18.4777 20.8111 19 20.1667 19H14.3334C13.6891 19 13.1667 18.4777 13.1667 17.8333Z"
            fill="white"
          />
        </svg>
      </button>
      <Link
        href="mailto:contact.itc.talks@gmail.com"
        className="hidden md:flex items-center text-sm text-white hover:text-gray-300"
      >
        <Mail className="h-4 w-4 mr-2 font-syne" />
        contact.itc.talks@gmail.com
      </Link>
    </header>
  );
}
