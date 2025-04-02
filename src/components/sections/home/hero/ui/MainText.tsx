export default function MainText({
    scrollToImage,
}: {
    scrollToImage: (index: number) => void;
}) {
    const screenSize = useScreenSize();

    const layout = styles[screenSize];

    return (
        <main className="hero-main">
            <div className="w-full text-white">
                <div className={`hero-${layout.element}`}>
                    <HeroText size={layout.textSize} />
                    <HeroActions
                        scrollToImage={scrollToImage}
                        btnSize={layout.btnSize}
                    />
                </div>
            </div>
        </main>
    );
}

/* hooks */
import { useScreenSize } from "@/hooks/use-screen-size";

/* ui */
import HeroActions from "./HeroActions";
import HeroText from "./HeroText";

/* data */
import { styles } from "../data/styles";