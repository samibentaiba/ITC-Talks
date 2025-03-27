import Speakers from "./ui/Speakers";
import AboutUs from "./ui/AboutUs";
import { ReactElement } from "react";
export default function SectionAboutNSpeakers(): ReactElement {
  return (
    <section className=" mx-auto w-screen px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] max-w-[1880px] flex items-center justify-between py-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <AboutUs />
        <Speakers />
      </div>
    </section>
  );
}
