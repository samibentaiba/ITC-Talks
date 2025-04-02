interface ImageItem {
    src: string;
    alt: string;
    caption: string;
}

interface ImagesFunctions {
    scrollContainerRef: MutableRefObject<HTMLDivElement | null>;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
    currentIndex: number;
    images: ImageItem[];
}

export default function ImageCarousel({ setCurrentIndex, scrollContainerRef, currentIndex, images }: ImagesFunctions) {
    
    useArrow({ setCurrentIndex, scrollContainerRef, currentIndex, images });

    return (
        <div className="scrollbar-hide relative animate-fade-in-up delay-200">
            <div
                ref={scrollContainerRef}
                className="imagecarousel-demicontainer scrollbar-hide"
                style={{ scrollbarWidth: "none" }}
            >
                {images.map(({ src, alt, caption }, index) => (
                    <div key={index} className="flex-shrink-0 snap-center animate-fade-in-right delay-300">
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

/* package */
import { MutableRefObject } from "react";
import Image from "next/image";

/* ui */
import useArrow from "../functions/useArrow";