import { scheduleData } from "../data/mockdata";
type deviceType = "desktop" | "mobile" | "tablet";


type ScheduleProps = {
    styles: Record<string, string>;
    screenSize: deviceType;
};

export const Schedule = ({ styles, screenSize }: ScheduleProps) => (
    <div className={`${styles.AgendaElement}`}>
        {scheduleData.map((row, index) => (
            <div
                key={index}
                className={`${screenSize === "desktop" ? (index < scheduleData.length - 1 ? "border-b border-white border-opacity-60" : "") : ""} ${styles.AgendaDue}`}
            >
                {row.map((item, i) => (
                    <ScheduleItem
                        key={i}
                        time={item.time}
                        title={item.title}
                        description={item.description}
                        border={i < row.length - 1}
                        styles={styles}
                        screenSize={screenSize}
                    />
                ))}
            </div>
        ))}
    </div>
);

import { ScheduleItem } from "./ScheduleItem";
