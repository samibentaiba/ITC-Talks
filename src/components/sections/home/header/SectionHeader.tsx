"use client";

import Link from "next/link";
import { Mail, X } from "lucide-react";
import { type ReactElement, useState } from "react";
import { motion } from "framer-motion";

export default function SectionHeader(): ReactElement {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems: { name: string; id: string }[] = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Agenda", id: "agenda" },
    { name: "Speakers", id: "speakers" },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      if (id === "agenda") {
        const offset = 200; // Extra padding for agenda
        const top =
          section.getBoundingClientRect().top + window.scrollY - offset;
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
        {navItems.map(({ name, id }) => (
          <button
            key={id}
            onClick={() => handleScroll(id)}
            className="text-white cursor-pointer hover:text-gray-300"
          >
            {name}
          </button>
        ))}
      </nav>

      <p className="text-4xl font-bold font-syne absolute md:left-[45%] left-[30%] sm:left-[37%] lg:left-[45%] uppercase text-white">
        ITC Talks
      </p>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-white"
        aria-label="Menu"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <MenuIcon />}
      </button>

      {/* Contact Link (Desktop) */}
      <Link
        href="mailto:contact.itc.talks@gmail.com"
        className="hidden md:flex items-center text-sm text-white hover:text-gray-300"
      >
        <Mail className="h-4 w-4 mr-2" />
        contact.itc.talks@gmail.com
      </Link>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: mobileMenuOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 right-0 bottom-0 w-full md:w-[400px] bg-black z-50 flex flex-col"
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col flex-grow justify-center px-8">
          {navItems.map(({ name, id }) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className="text-white text-4xl font-bold font-syne uppercase mb-8 hover:text-gray-300"
            >
              {name}
            </button>
          ))}
        </div>

        <div className="p-8 flex justify-center">
          <Link
            href="mailto:contact.itc.talks@gmail.com"
            className="flex items-center text-sm text-white hover:text-gray-300"
          >
            <Mail className="h-4 w-4 mr-2" />
            contact.itc.talks@gmail.com
          </Link>
        </div>
      </motion.div>
    </header>
  );
}

// SVG Menu Icon Component
const MenuIcon = () => (
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
);
