import Speakers from "./ui/Speakers";
import AboutUs from "./ui/AboutUs";
import { ReactElement } from "react";
export default function SectionAboutNSpeakers(): ReactElement {
  return (
    <section className="container mx-auto px-4 md:px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AboutUs />
        <Speakers />
      </div>
    </section>
  );
}
