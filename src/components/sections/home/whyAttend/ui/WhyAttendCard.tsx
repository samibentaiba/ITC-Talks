import { ReactElement } from "react";
import Image from "next/image";
interface WhyAttendCardProps {
  number: string;
  title: string;
  description: string;
}

export default function WhyAttendCard({
  number,
  title,
  description,
}: WhyAttendCardProps): ReactElement {
  return (
    <div className="w-full h-full max-h-[270px] relative bg-stone-900 rounded-3xl overflow-hidden">
      <Image
        src={`images/${number}.svg`}
        width={300}
        height={200}
        alt={`${number}`}
        className="left-[5%] top-[55%]  absolute justify-start"
      />

      <div className="left-[10%] top-[60px] absolute justify-start text-white text-xl font-bold font-Syne uppercase leading-loose">
        {title}
      </div>
      <div className="w-[40%] left-[400px] top-[150px] absolute justify-start text-white text-lg font-normal font-Syne leading-loose">
        {description}
      </div>
    </div>
  );
}
