import { ReactElement } from "react";

interface WhyAttendCardProps {
  number: string;
  title: string;
  description: string;
}

export default function WhyAttendCard(
  { number, title, description }: WhyAttendCardProps,
): ReactElement {
  return (
    <div className="bg-gray-900 rounded-lg p-6">
      <div className="flex items-start space-x-4 mb-4">
        <div className="text-5xl font-bold bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          {number}
        </div>
      </div>
      <h3 className="text-lg font-bold uppercase mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}
