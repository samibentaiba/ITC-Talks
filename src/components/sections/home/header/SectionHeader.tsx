"use client";
export default function SectionHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      if (id === "agenda") {
        const offset = 200; // Extra padding for agenda
        const top = section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      } else {
        section.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      setMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header className="mx-auto w-screen px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] max-w-[1880px] flex items-center justify-between relative py-4">
      {/* Desktop Nav */}

      <nav className="hidden md:flex gap-[1rem] sm:gap-[1.5rem] md:gap-[2rem] lg:gap-[2.5rem]">
        <NavItems handleScroll={handleScroll} styles="text-white cursor-pointer hover:text-gray-300"/>
      </nav>

      <p className="text-4xl font-bold select-none font-syne md:absolute lg:absolute md:left-[45%] left-[20%] sm:left-[25%] lg:left-[45%] uppercase text-white">
        ITC Talks
      </p>
      {/* Mobile Menu Toggle */}

      <button className="md:hidden text-white" aria-label="Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X size={24} /> : <MenuIcon />}

      </button>

      {/* Contact Link (Desktop) */}
      <Link href="mailto:contact.itc.talks@gmail.com" className="hidden md:flex items-center text-sm text-white hover:text-gray-300">
        <Mail className="h-4 w-4 mr-2" />
        contact.itc.talks@gmail.com
      </Link>

      {/* Mobile Menu */}

      <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} handleScroll={handleScroll} />
    </header>
  );
}

/* package */
import Link from "next/link";
import { Mail, X } from "lucide-react";
import { useState } from "react";

/* ui */
import MenuIcon from "./ui/MenuIcon";
import MobileMenu from "./ui/MobileMenu";
import NavItems from "./ui/NavItems";