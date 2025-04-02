export default function SectionComingSoon() {
    return (
        <div className="coming-soon-c animate-fade-in-down">
            <Image
                src="images/ComingSoon.svg"
                fill
                className="coming-soon-i"
                alt="coming soon"
            />
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

import Image from "next/image";