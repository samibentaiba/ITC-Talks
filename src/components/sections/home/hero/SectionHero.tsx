"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";
import "@/styles/hero.css";

export default SectionHero;

function SectionHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToImage = (direction: number) => {
    const newIndex = (currentIndex + direction + images.length) % images.length;
    scrollContainerRef.current?.scrollTo({
      left:
        (scrollContainerRef.current.children[newIndex] as HTMLElement)
          ?.offsetLeft || 0,
      behavior: "smooth",
    });
    setCurrentIndex(newIndex);
  };

  return (
    <section className="hero-section animate-fade-in-down">
      <MainText scrollToImage={scrollToImage} />
      <ImageCarousel
        scrollContainerRef={scrollContainerRef}
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
      />
    </section>
  );
}

function MainText({
  scrollToImage,
}: {
  scrollToImage: (index: number) => void;
}) {
  return (
    <main className="hero-main">
      <div className="w-full text-white">
        <div className="hero-desktop">
          <HeroText size="text-7xl" />
          <HeroActions
            scrollToImage={scrollToImage}
            btnSize="px-6 py-3 text-xl"
          />
        </div>
        <div className="hero-tablet">
          <HeroText size="text-5xl" />
          <HeroActions
            scrollToImage={scrollToImage}
            btnSize="px-6 py-2 text-lg"
          />
        </div>
        <div className="hero-mobile">
          <HeroText size="text-3xl" />
          <HeroActions
            scrollToImage={scrollToImage}
            btnSize="w-full px-6 py-2 text-sm"
          />
        </div>
      </div>
    </main>
  );
}

function ImageCarousel({
  scrollContainerRef,
  setCurrentIndex,
  currentIndex,
}: {
  scrollContainerRef: React.MutableRefObject<HTMLDivElement | null>;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  currentIndex: number;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        const direction = e.key === "ArrowLeft" ? -1 : 1;
        setCurrentIndex(
          (prevIndex) => (prevIndex + direction + images.length) % images.length
        );
        scrollContainerRef.current?.scrollTo({
          left:
            (
              scrollContainerRef.current.children[
                (currentIndex + direction + images.length) % images.length
              ] as HTMLElement
            )?.offsetLeft || 0,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="scrollbar-hide relative animate-fade-in-up delay-200">
      <div
        ref={scrollContainerRef}
        className="imagecarousel-demicontainer scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {images.map(({ src, alt, caption }, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-center animate-fade-in-right delay-300"
          >
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
  <div className="herotext-container animate-fade-in-left delay-100">
    <h1 className={`herotext-h1-text ${size}`}>
      ITC Talks 6th Edition
      <br />
      Join the Conversation!
    </h1>
    <p className="font-normal ">
      — Be part of a day filled with expert insights, engaging talks, and great conversations
    </p>
  </div>
);

const HeroActions = ({
  btnSize,
  scrollToImage,
}: {
  btnSize: string;
  scrollToImage: (index: number) => void;
}) => (
  <div className="heroactions-container animate-fade-in-up delay-200">
    <button className={`hero-button ${btnSize}`}>
      <span className="text-stone-900 font-medium">
        Reserve Your Spot Today
      </span>
    </button>
    <div className="flex gap-2 md:gap-4 animate-fade-in-up delay-300">
      <ArrowButton
        Icon={RiArrowLeftFill}
        direction="left"
        scrollToImage={scrollToImage}
      />
      <ArrowButton
        Icon={RiArrowRightFill}
        direction="right"
        scrollToImage={scrollToImage}
      />
    </div>
  </div>
);

const ArrowButton = ({
  Icon,
  direction,
  scrollToImage,
}: {
  Icon: typeof RiArrowLeftFill;
  direction: "left" | "right";
  scrollToImage: (index: number) => void;
}) => (
  <button
    className="arrow-button"
    onClick={() => scrollToImage(direction === "left" ? -1 : 1)}
  >
    <Icon className="w-5 h-5 md:w-8 md:h-5 sm:w-6 sm:h-6 text-stone-900" />
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

export function ComingSoon() {
  return (
    <div className="coming-soon-c animate-fade-in-down">
      <Image
        src="images/ComingSoon.svg"
        fill
        className="coming-soon-i"
        alt="coming soon"
      />
      <div
        className="coming-soon-tc border-opacity-10 animate-fade-in-left delay-100"
        style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}
      >
        <div className="coming-soon-t uppercase opacity-0 font-syne text-opacity-60 ">
          April 8, 2025
        </div>
        <div className="coming-soon-t opacity-0 font-syne text-opacity-60 ">
          Auditorium, Saad Dahlab University
        </div>
      </div>
      <div
        className="coming-soon-tc max-w-[1720px] border-opacity-10 animate-fade-in-right delay-200"
        style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}
      >
        <div className="coming-soon-t uppercase font-syne text-opacity-60 ">
          April 8, 2025
        </div>
        <div className="coming-soon-t font-syne text-opacity-60 ">
          Auditorium, Saad Dahlab University
        </div>
      </div>
    </div>
  );
}
