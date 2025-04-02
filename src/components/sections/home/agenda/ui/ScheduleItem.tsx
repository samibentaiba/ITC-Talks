type deviceType = "desktop" | "mobile" | "tablet";

type ScheduleItemProps = {
    time: string;
    title: string;
    description: string;
    border: boolean;
    styles: Record<string, string>;
    screenSize: deviceType;
}

export const ScheduleItem = ({
    time,
    title,
    description,
    border,
    styles,
    screenSize
}: ScheduleItemProps) => (
    <div
        className={`${screenSize === "desktop" ? (border ? "border-r border-white border-opacity-60" : "") : ""} ${styles.element}`}
    >
        <div className={`${screenSize !== "desktop" ? styles.elementText : ""}`}>
            <div className={`${styles.elementTime}`}>
                {time}
            </div>

            {
                screenSize !== "desktop" ?
                    (
                        <div className={`${styles.elementTextTitle}`}>
                            {title}
                        </div>
                    ) : ""
            }
        </div>
        <div className={`${screenSize === "desktop" ? styles.elementText : ""}`}>
            {
                screenSize === "desktop" ?
                    (
                        <div className={`${styles.elementTextTitle}`}>
                            {title}
                        </div>
                    ) : ""
            }
            <div className={`${styles.elementTextDescription}`}>
                {description}
            </div>
        </div>
    </div>
);