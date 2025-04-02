export default function Timer() {
    const screenSize = useScreenSize();

    const styles = {
        desktop: {
            timerSize: "text-[200px] leading-[200px]",
        },
        tablet: {
            timerSize: "text-[140px]",
        },
        mobile: {
            timerSize: "text-[70px]",
        },
    }[screenSize];

    return (
        <div className={`self-stretch text-center justify-start text-white font-normal font-Syne ${styles.timerSize}`}>
            00:00:00
        </div>
    )
}

import { useScreenSize } from "@/hooks/use-screen-size";