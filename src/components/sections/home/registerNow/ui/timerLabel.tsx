export default function TimerLabel() {
    return (
        <div className="self-stretch inline-flex justify-between items-center">
            {['DAYS', 'Hours', 'Minutes'].map((label) => (
                <div key={label} className="flex-1 text-center justify-start text-white text-xs sm:text-base font-normal font-Syne leading-loose">
                    {label}
                </div>
            ))}
        </div>
    )
}