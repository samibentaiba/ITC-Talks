import { ReactElement } from "react";

interface CountdownDisplayProps {
  days: string;
  hours: string;
  minutes: string;
}
interface TimeBlockProps {
  value: string;
  label: string;
}
export default function CountdownDisplay(
  { days, hours, minutes }: CountdownDisplayProps,
): ReactElement {
  return (
    <div className="flex justify-center items-center space-x-4 md:space-x-8 mb-8">
      <TimeBlock value={days} label="Days" />
      <div className="text-4xl font-bold">:</div>
      {/*Separator*/}
      <TimeBlock value={hours} label="Hours" />
      <div className="text-4xl font-bold">:</div>
      {/*Separator*/}
      <TimeBlock value={minutes} label="Minutes" />
    </div>
  );
}

function TimeBlock({ value, label }: TimeBlockProps): ReactElement {
  return (
    <div className="text-center">
      <div className="text-5xl md:text-7xl font-bold">{value}</div>
      <div className="text-xs mt-2">{label}</div>
    </div>
  );
}
