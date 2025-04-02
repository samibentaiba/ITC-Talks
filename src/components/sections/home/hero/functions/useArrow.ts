import { useEffect } from "react";

interface ArrowFunction {
    scrollContainerRef: React.MutableRefObject<HTMLDivElement | null>;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
    currentIndex: number;
    images: { src: string; alt: string; caption: string }[];
}

export default function useArrow({ setCurrentIndex, scrollContainerRef, currentIndex, images }: ArrowFunction) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                const direction = e.key === "ArrowLeft" ? -1 : 1;
                const newIndex = (currentIndex + direction + images.length) % images.length;

                setCurrentIndex(newIndex);

                const targetElement = scrollContainerRef.current?.children[newIndex] as HTMLElement | null;
                if (targetElement) {
                    scrollContainerRef.current?.scrollTo({
                        left: targetElement.offsetLeft,
                        behavior: "smooth",
                    });
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex, images.length]);
}
