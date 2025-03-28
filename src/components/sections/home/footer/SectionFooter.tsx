import FooterNav from "./ui/FooterNav";
import FooterSocial from "./ui/FooterSocial";
import FooterLocation from "./ui/FooterLocation";
import FooterPoweredBy from "./ui/FooterPoweredBy";
import { ReactElement } from "react";

export default function SectionFooter(): ReactElement {
  return (
    <footer  className="mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 max-w-[1880px] flex flex-col items-center py-4">
      
      <div className="self-stretch bg-zinc-200 rounded-[48px] inline-flex justify-between items-center">
        <div className="p-20 inline-flex flex-col justify-start items-start gap-20">
          <div className="justify-start text-stone-900 text-3xl font-bold font-Syne uppercase">
            ITC Talks
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="self-stretch justify-start text-stone-900 text-xl font-normal font-Syne leading-loose">
              Home
            </div>
            <div className="self-stretch justify-start text-stone-900 text-xl font-normal font-Syne leading-loose">
              About
            </div>
            <div className="self-stretch justify-start text-stone-900 text-xl font-normal font-Syne leading-loose">
              Agenda
            </div>
            <div className="self-stretch justify-start text-stone-900 text-xl font-normal font-Syne leading-loose">
              Speakers
            </div>
          </div>
          <div className="justify-start text-stone-900 text-opacity-60 text-xl font-normal font-Syne leading-loose">
            © 2025 Copyright ITC Talks. All rights reserved.
          </div>
        </div>
        <div className="w-[547px] p-20 bg-blue-700 rounded-[48px] inline-flex flex-col justify-start items-start gap-20">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch justify-start text-white text-3xl font-bold font-Syne uppercase">
              Event Location
            </div>
            <div className="self-stretch justify-start text-white text-opacity-80 text-xl font-normal font-Syne leading-loose">
              Auditorium, Saad Dahlab University
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch justify-start text-white text-3xl font-bold font-Syne uppercase">
              Follow US
            </div>
            <div className="inline-flex justify-start items-center gap-5">
              <div className="w-7 h-7 bg-white bg-opacity-80" />
              <div className="w-7 h-7 bg-white bg-opacity-80" />
              <div className="w-7 h-7 bg-white bg-opacity-80" />
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch justify-start text-white text-3xl font-bold font-Syne uppercase">
              Powered By
            </div>
            <div className="w-9 h-7 relative overflow-hidden">
              <div className="w-1.5 h-3.5 left-0 top-[16.68px] absolute bg-white bg-opacity-80" />
              <div className="w-9 h-5 left-0 top-[8.32px] absolute bg-white bg-opacity-80" />
              <div className="w-5 h-3.5 left-[16.85px] top-[16.68px] absolute bg-white bg-opacity-80" />
              <div className="w-1.5 h-1.5 left-[8.43px] top-0 absolute bg-white bg-opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
