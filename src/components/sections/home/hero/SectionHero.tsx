"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";
import "@/styles/hero.css";
export default SectionHero;

function SectionHero() {
  return (
    <section className="hero-section ">
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
          <HeroActions btnSize="px-6 py-2 text-lg" />
        </div>
        <div className="hero-mobile">
          <HeroText size="text-3xl" />
          <HeroActions btnSize="w-full px-6 py-2 text-sm" />
        </div>
      </div>
    </main>
  );
}
export function ComingSoon() {
  return (
    <div className="coming-soon-container">
      <Image src="images/ComingSoon.svg" fill className="coming-soon-image" alt="coming soon" />
      <div className="coming-soon-fc border-opacity-10" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
        <div className="coming-soon-ftfc font-syne text-opacity-60 ">April 8, 2025</div>
        <div className="coming-soon-stfc font-syne text-opacity-60 ">Auditorium, Saad Dahlab University</div>
      </div>
      <div className="coming-soon-sc border-opacity-10" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
        <div className="coming-soon-ftsc font-syne text-opacity-60 ">April 8, 2025</div>
        <div className="coming-soon-stsc font-syne text-opacity-60 ">Auditorium, Saad Dahlab University</div>
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
      <div ref={scrollContainerRef} className="imagecarousel-demicontainer scrollbar-hide" style={{ scrollbarWidth: "none" }}>
        {images.map(({ src, alt, caption }, index) => (
          <div key={index} className="flex-shrink-0 snap-center">
            <div className="imagecarousel-image-container">
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
  <div className="herotext-container">
    <h1 className={`herotext-h1-text ${size}`}>
      ITC Talks 6th Edition
      <br />
      Join the Conversation!
    </h1>
    <p className="font-normal ">— Be part of a day filled with expert insights, engaging talks, and great conversations</p>
  </div>
);

const HeroActions = ({ btnSize }: { btnSize: string }) => (
  <div className="heroactions-container">
    <button className={`hero-button ${btnSize}`}>
      <span className="text-stone-900 font-medium">Reserve Your Spot Today</span>
    </button>
    <div className="flex gap-2 md:gap-4">
      <ArrowButton Icon={RiArrowLeftFill} />
      <ArrowButton Icon={RiArrowRightFill} />
    </div>
  </div>
);

const ArrowButton = ({ Icon }: { Icon: typeof RiArrowLeftFill }) => (
  <button className="arrow-button">
    <Icon className="w-5 h-5 md:w-8 md:h-5 sm:w-6 sm:h-6 text-stone-900" />
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
