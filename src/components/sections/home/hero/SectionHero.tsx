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
      <ComingSoon />
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

function ComingSoon() {
  return (
    <div className="coming-soon">
      <h2 className="coming-soon-title">COMING SOON</h2>
      <p className="text-sm mt-4">
        APRIL 8, 2025 • Auditorium, Saad Dahlab University
      </p>
    </div>
  );
}

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const scrollToImage = (index: number) => {
    scrollContainerRef.current?.scrollTo({
      left:
        (scrollContainerRef.current.children[index] as HTMLElement)
          ?.offsetLeft || 0,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        scrollToImage(
          (currentIndex + (e.key === "ArrowLeft" ? -1 : 1) + images.length) %
            images.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <div
      className="scrollbar-hide relative "
      
    >
      {isDesktop ? (
        <div
          ref={scrollContainerRef}
          className="flex snap-x snap-mandatory overflow-x-auto gap-[40px] scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {images.map(({ src, alt, caption }, index) => (
            <div
              key={index}
              className="flex-shrink-0 scrollbar-hide snap-center "
              
            >
              <div
                className=" w-[693px] h-[388px] scrollbar-hide overflow-hidden rounded-2xl"
                
              >
                <Image
                  src={src}
                  alt={alt}
                  width={693}
                  height={388}
                  className="object-cover"
                  
                />
              </div>
              <p className="text-white text-lg mt-2">{caption}</p>
            </div>
          ))}
        </div>
      ) : (
        <div
          ref={scrollContainerRef}
          className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {images.map(({ src, alt, caption }, index) => (
            <div
              key={index}
              className="flex-shrink-0 scrollbar-hide w-full snap-center px-4 py-4"
            >
              <div className="relative aspect-[4/3] scrollbar-hide w-full overflow-hidden rounded-2xl">
                <Image src={src} alt={alt} fill className="object-cover" />
              </div>
              <p className="text-white text-lg mt-2">{caption}</p>
            </div>
          ))}
        </div>
      )}
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
    <p className="font-normal leading-loose">
      — Be part of a day filled with expert insights, engaging talks, and great
      conversations
    </p>
  </div>
);

const HeroActions = ({ btnSize }: { btnSize: string }) => (
  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    <button className={`hero-button ${btnSize}`}>
      <span className="text-stone-900 font-medium">
        Reserve Your Spot Today
      </span>
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
    caption: "Great Community",
  },
  {
    src: "/images/itc-talks-5th.png",
    alt: "Two people looking at a phone together",
    caption: "Great Team",
  },
  {
    src: "/images/sharing-ideas.png",
    alt: "Auditorium with green seats and presentation screen",
    caption: "Great Audience",
  },
];
