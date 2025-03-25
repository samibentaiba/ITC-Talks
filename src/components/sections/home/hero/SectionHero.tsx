"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ChevronLeft, ChevronRight } from "lucide-react";
// Removed unused import

export default function SectionHero() {
  return (
    <section className="container mx-auto px-4 md:px-6 pt-8 md:pt-12 lg:pt-16">
      <main className="bg-black flex items-center justify-center p-4">
        <div className="w-full text-white">
          <div className="lg:flex hidden justify-between items-start">
            <HeroText size="text-7xl" />
            <HeroActions btnSize="px-6 py-3 text-xl" />
          </div>
          <div className="md:flex hidden lg:hidden flex-col">
            <HeroText size="text-5xl" />
            <HeroActions btnSize="px-6 py-3 text-lg" />
          </div>
          <div className="flex flex-col md:hidden">
            <HeroText size="text-4xl" />
            <HeroActions btnSize="w-full px-6 py-3 text-base" />
          </div>
        </div>
      </main>
      <ImageCarousel />
      <div className="mt-8 md:mt-12 text-center">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800">
          COMING SOON
        </h2>
        <p className="text-sm mt-4">
          APRIL 8, 2025 • Auditorium, Saad Dahlab University
        </p>
      </div>
    </section>
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
    <button
      className={`bg-white rounded-full shadow-lg hover:bg-gray-200 transition ${btnSize}`}
    >
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
  <button className="w-10 h-10 bg-white rounded-full shadow-[0px_1px_2px_0px_rgba(1,71,255,0.60)] flex items-center justify-center hover:bg-gray-200 transition">
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

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const scrollToImage = (index: number) => {
    scrollContainerRef.current?.scrollTo({
      left: (scrollContainerRef.current.children[index] as HTMLElement)?.offsetLeft || 0,
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
    <div className="w-full bg-black">
      {isDesktop ? (
        <div className="flex gap-4 p-4 mx-auto">
          {images.map(({ src, alt, caption }, index) => (
            <div key={index} className="flex-1 min-w-0">
              <div className="relative h-[388px] w-full overflow-hidden rounded-2xl">
                <Image src={src} alt={alt} fill />
              </div>
              <p className="text-white text-lg mt-2">{caption}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide scroll-smooth"
            onScroll={() =>
              setCurrentIndex(
                Math.round(
                  (scrollContainerRef.current?.scrollLeft ?? 0) /
                    (scrollContainerRef.current?.clientWidth ?? 1)
                )
              )
            }
          >
            {images.map(({ src, alt, caption }, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full snap-center px-4 py-4"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  <Image src={src} alt={alt} fill className="object-cover" />
                </div>
                <p className="text-white text-lg mt-2">{caption}</p>
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  currentIndex === index ? "bg-white" : "bg-white/30"
                )}
                onClick={() => scrollToImage(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
