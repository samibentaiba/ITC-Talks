import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ReactElement } from "react";

export default function Speakers(): ReactElement {
  return (
    <div className="bg-blue-600 rounded-lg p-8" id="speakers">
      <div className="flex justify-between items-start">
        <h2 className="text-2xl font-bold mb-6">SPEAKERS</h2>
        <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
          <span className="text-blue-600 font-bold">3</span>
        </div>
      </div>
      <p className="text-sm mb-6">
        Hear from top IT experts, innovators, and professionals shaping the
        future of technology.
      </p>
      <div className="flex items-center mb-6">
        <div className="flex -space-x-2">
          {[1, 2, 3].map((index: number): ReactElement => (
            <Image
              key={index}
              src={`/placeholder.svg?height=40&width=40`}
              alt={`Speaker ${index}`}
              width={40}
              height={40}
              className="rounded-full border-2 border-blue-600"
            />
          ))}
        </div>
      </div>
      <div>
        <button className="bg-white text-blue-600 rounded-full px-6 py-2 font-medium hover:bg-gray-100 transition flex items-center">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
