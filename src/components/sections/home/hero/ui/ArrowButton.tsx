export default function ArrowButton({
    Icon,
    direction,
    scrollToImage,
}: {
    Icon: typeof RiArrowLeftFill;
    direction: "left" | "right";
    scrollToImage: (index: number) => void;
}) {
    return (
        <button
            className="arrow-button cursor-pointer"
            onClick={() => scrollToImage(direction === "left" ? -1 : 1)}
        >
            <Icon className="w-5 h-5 md:w-8 md:h-5 sm:w-6 sm:h-6 text-stone-900" />
        </button>
    )
}

import { RiArrowLeftFill } from "react-icons/ri";