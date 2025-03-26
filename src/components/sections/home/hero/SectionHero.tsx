"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "@/styles/hero.css";
export default SectionHero;

function SectionHero() {
  return (
    <section className="hero-section">
      <MainText />
      <ImageCarousel />
    </section>
  );
}

function MainText() {
  return (
    <main className="hero-main">
      <div className="hero-content">
        <div className="hero-desktop">
          <HeroText size="text-7xl" />
          <HeroActions btnSize="px-6 py-3 text-xl" />
        </div>
        <div className="hero-tablet">
          <HeroText size="text-5xl" />
          <HeroActions btnSize="px-6 py-3 text-lg" />
        </div>
        <div className="hero-mobile">
          <HeroText size="text-4xl" />
          <HeroActions btnSize="w-full px-6 py-3 text-base" />
        </div>
      </div>
    </main>
  );
}
export function ComingSoon() {
  return (
    <div className="w-full h-38 relative justify-center flex items-center">
      <Image src="images/ComingSoon.svg" fill alt="coming soon" />
      <div className="w-screen px-24 py-4 top-[114px] absolute bg-[#1C1A1A] border-t  border-opacity-10 inline-flex justify-between items-start overflow-hidden" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
        <div className="justify-start text-[#a0a0a0] whitespace-nowrap text-opacity-60 opacity-0 md:text-xl text-xs font-normal font-syne uppercase leading-loose">April 8, 2025</div>
        <div className="justify-start text-[#a0a0a0] whitespace-nowrap  text-opacity-60 opacity-0  md:text-xl text-xs font-normal font-syne leading-loose">Auditorium, Saad Dahlab University</div>
      </div>
      <div className="w-screen max-w-[1720px] px-6 md:px-6  top-[114px] mx-auto absolute bg-[#1C1A1A] border-t  border-opacity-10 inline-flex justify-between items-start overflow-hidden" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
        <div className="justify-start text-[#a0a0a0] whitespace-nowrap text-opacity-60   md:text-xl text-xs font-normal font-syne uppercase leading-loose">April 8, 2025</div>
        <div className="justify-start text-[#a0a0a0] whitespace-nowrap text-opacity-60  md:text-xl text-xs font-normal font-syne leading-loose">Auditorium, Saad Dahlab University</div>
      </div>
    </div>
  );
}

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollToImage = (index: number) => {
    scrollContainerRef.current?.scrollTo({
      left: (scrollContainerRef.current.children[index] as HTMLElement)?.offsetLeft || 0,
      behavior: "smooth"
    });
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        scrollToImage((currentIndex + (e.key === "ArrowLeft" ? -1 : 1) + images.length) % images.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="scrollbar-hide relative ">
      <div ref={scrollContainerRef} className="flex snap-x snap-mandatory overflow-x-auto gap-[40px] scrollbar-hide scroll-smooth" style={{ scrollbarWidth: "none" }}>
        {images.map(({ src, alt, caption }, index) => (
          <div key={index} className="flex-shrink-0 snap-center">
            <div className="relative sm:w-[310px] sm:h-[173px] w-[310px] h-[173px]  md:w-[668px] md:h-[374px] lg:w-[693px] lg:h-[388px] overflow-hidden rounded-2xl">
              <Image src={src} alt={alt} fill className="object-cover" />
            </div>
            <p className="text-white text-lg mt-2">{caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const HeroText = ({ size }: { size: string }) => (
  <div className="flex flex-col gap-4 mb-8">
    <h1 className={`font-normal ${size}`}>
      ITC Talks 6th Edition
      <br />
      Join the Conversation!
    </h1>
    <p className="font-normal leading-loose">— Be part of a day filled with expert insights, engaging talks, and great conversations</p>
  </div>
);

const HeroActions = ({ btnSize }: { btnSize: string }) => (
  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    <button className={`hero-button ${btnSize}`}>
      <span className="text-stone-900 font-medium">Reserve Your Spot Today</span>
    </button>
    <div className="flex gap-4 mt-2 md:mt-0">
      <ArrowButton Icon={ChevronLeft} />
      <ArrowButton Icon={ChevronRight} />
    </div>
  </div>
);

const ArrowButton = ({ Icon }: { Icon: typeof ChevronLeft }) => (
  <button className="arrow-button">
    <Icon className="w-5 h-5 text-stone-900" />
  </button>
);

const images = [
  {
    src: "/images/itc-stairs.png",
    alt: "Large group of people gathered on stairs",
    caption: "Great Community"
  },
  {
    src: "/images/itc-talks-5th.png",
    alt: "Two people looking at a phone together",
    caption: "Great Team"
  },
  {
    src: "/images/sharing-ideas.png",
    alt: "Auditorium with green seats and presentation screen",
    caption: "Great Audience"
  }
];
