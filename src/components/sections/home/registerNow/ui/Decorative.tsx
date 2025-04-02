export default function Decorative() {
    const screenSize = useScreenSize();

    const styles = {
        desktop: {
            starSize: "w-96 h-96",
            rightStar: "right-[-1rem] top-[50%]",
            leftStar: "left-[-1rem] top-[50%]",
        },
        tablet: {
            starSize: "w-72 h-72",
            rightStar: "left-[77%] top-[70%]",
            leftStar: "right-[77%] top-[70%]",
        },
        mobile: {
            starSize: "w-48 h-48",
            rightStar: "left-[70%] top-[60%]",
            leftStar: "right-[70%] top-[60%]",
        },
    }[screenSize];

    return (
        <>
            <Image src="/images/rightstar.svg" alt="right" width={500} height={500} className={`absolute origin-top-left ${styles.starSize} ${styles.rightStar}`} />
            <Image src="/images/leftstar.svg" alt="left" width={500} height={500} className={`absolute origin-top-left ${styles.starSize} ${styles.leftStar}`} />
        </>
    )
}

import Image from "next/image";

/* hooks */
import { useScreenSize } from "@/hooks/use-screen-size";