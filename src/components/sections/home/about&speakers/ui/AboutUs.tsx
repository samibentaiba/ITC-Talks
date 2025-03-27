import Image from "next/image";
import type { ReactElement } from "react";

export default function AboutUs(): ReactElement {
  return (
    <div className="bg-[#e6e6e6] w-full rounded-2xl p-8 md:p-12 shadow-sm">
      <div className="flex flex-col md:flex-row justify-between w-full items-between">
        <div className=" flex  gap-[40px] w-full self-stretch justify-between flex-col">
          <div className="flex justify-between items-stretch w-full">

            <h2 className="text-[40px] font-syne font-bold uppercase text-[#1C1A1A]">
              ABOUT US
            </h2>

            <Image
              src="images/itc-logo.svg"
              alt="ITC Logo"
              width={50}
              height={50}
            />
          </div>

          <p className="text-[#333333] max-w-[80%]">
            ITC is a scientific club at Saad Dahlab University, founded in 2018
            by passionate IT students.
            <br />
            Our mission is to enhance the knowledge and skills of our members
            while supporting the growth of the STEAM community in Blida.
          </p>

          <Image
            src="images/sharing-is-caring.svg"
            alt="sharing is caring"
            width={500}
            height={80}
            className="mx-auto"
          />
          
        </div>
      </div>
    </div>
  );
}
