"use client";


export default function SectionHero() {
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
    <section className="hero-section animate-fade-in-down" id="home">
      <MainText scrollToImage={scrollToImage} />
      <ImageCarousel
        scrollContainerRef={scrollContainerRef}
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
        images={images}
      />
    </section>
  );
}

/* ui */
import MainText from "./ui/MainText";
import ImageCarousel from "./ui/ImageCarousel";

/* package */
import { useState, useRef } from "react";

/* styles */
import "@/styles/hero.css";

/* data */
import { images } from "./data/images";