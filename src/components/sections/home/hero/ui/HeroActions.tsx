export default function HeroActions({ 
    btnSize, 
    scrollToImage 
}:{ 
    btnSize: string; 
    scrollToImage: (index: number) => void 
}) {
    return (
        <div className="heroactions-container animate-fade-in-up delay-200">
            <button className={`hero-button cursor-pointer ${btnSize}`}>
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
    )
}

import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";

import ArrowButton from "./ArrowButton";