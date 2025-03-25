"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "@/styles/hero.css";

// Main SectionHero Component
export default function SectionHero() {
  return (
    <section className="hero-section">
      <MainText />
      <ImageCarousel />
      <ComingSoon />
    </section>
  );
}

// MainText Component
function MainText() {
  return (
    <main className="hero-main">
      <div className="hero-content">
        {/* Desktop View */}
        <div className="hero-desktop">
          <HeroText size="text-7xl" />
          <HeroActions btnSize="px-6 py-3 text-xl" />
        </div>
        {/* Tablet View */}
        <div className="hero-tablet">
          <HeroText size="text-5xl" />
          <HeroActions btnSize="px-6 py-3 text-lg" />
        </div>
        {/* Mobile View */}
        <div className="hero-mobile">
          <HeroText size="text-4xl" />
          <HeroActions btnSize="w-full px-6 py-3 text-base" />
        </div>
      </div>
    </main>
  );
}

// ComingSoon Component
function ComingSoon() {
  return (
    <div className="coming-soon">
      <h2 className="coming-soon-title">COMING SOON</h2>
      <p className="text-sm mt-4">APRIL 8, 2025 • Auditorium, Saad Dahlab University</p>
    </div>
  );
}

// ImageCarousel Component
function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  // Scroll to specific image
  const scrollToImage = (index: number) => {
    scrollContainerRef.current?.scrollTo({
      left: (scrollContainerRef.current.children[index] as HTMLElement)?.offsetLeft || 0,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  // Handle keyboard navigation
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
    <div className="carousel-container">
      {isDesktop ? (
        // Desktop Carousel
        <div className="carousel-desktop">
          {images.map(({ src, alt, caption }, index) => (
            <div key={index} className="flex-1 min-w-0">
              <div className="carousel-image-container">
                <Image src={src} alt={alt} fill />
              </div>
              <p className="text-white text-lg mt-2">{caption}</p>
            </div>
          ))}
        </div>
      ) : (
        // Mobile Carousel
        <div className="relative">
          <div ref={scrollContainerRef} className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide scroll-smooth">
            {images.map(({ src, alt, caption }, index) => (
              <div key={index} className="flex-shrink-0 w-full snap-center px-4 py-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image src={src} alt={alt} fill className="object-cover" />
                </div>
                <p className="text-white text-lg mt-2">{caption}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// HeroText Component
const HeroText = ({ size }: { size: string }) => (
  <div className="flex flex-col gap-4 mb-8">
    <h1 className={`font-normal ${size}`}>
      ITC Talks 6th Edition
      <br />
      Join the Conversation!
    </h1>
    <p className="font-normal leading-loose">
      — Be part of a day filled with expert insights, engaging talks, and great conversations
    </p>
  </div>
);

// HeroActions Component
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

// ArrowButton Component
const ArrowButton = ({ Icon }: { Icon: typeof ChevronLeft }) => (
  <button className="arrow-button">
    <Icon className="w-5 h-5 text-stone-900" />
  </button>
);

// Images Data
const images = [
  { src: "/images/itc-stairs.png", alt: "Large group of people gathered on stairs", caption: "Great Community" },
  { src: "/images/itc-talks-5th.png", alt: "Two people looking at a phone together", caption: "Great Team" },
  { src: "/images/sharing-ideas.png", alt: "Auditorium with green seats and presentation screen", caption: "Great Audience" },
];
