import Image from "next/image";
import { ReactElement } from "react";

export default function AboutUs(): ReactElement {
  return (
    <div className="bg-gray-800 rounded-lg p-8" id="about">
      <h2 className="text-2xl font-bold mb-6">ABOUT US</h2>
      <div className="flex justify-between items-start">
        <div className="max-w-md">
          <p className="text-sm mb-4">
            ITC is a scientific club at Saad Dahlab University, founded in 2018
            by passionate IT students.
          </p>
          <p className="text-sm mb-4">
            Our mission is to enhance the knowledge and skills of our members
            while supporting the growth of the STEAM community in Blida.
          </p>
          <p className="text-xl font-bold text-[#a06060] mt-8">
            "Sharing is Caring"
          </p>
        </div>
        <div>
          <Image
            src="/placeholder.svg?height=50&width=50"
            alt="ITC Logo"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
}
