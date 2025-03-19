import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactElement } from "react";

export default function SectionHero(): ReactElement {
  const images = [
    { alt: "Great Audience", text: "Great Audience" },
    { alt: "Great Community", text: "Great Community" },
    { alt: "Great Team", text: "Great Team" },
  ];
  const imgSrc =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Landing%20-%201desktop-a4ChykhHoKnPfynhhPAshlIyNpDkvt.png";

  return (
    <section className="container mx-auto px-4 md:px-6 pt-8 md:pt-12 lg:pt-16">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            ITC Talks 6th Edition
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Join the Conversation!
          </h3>
          <p className="text-gray-400 mb-6">
            — Be part of a day filled with expert insights, engaging talks, and
            great conversations
          </p>
        </div>
        <button className="bg-white text-black rounded-full px-6 py-2 font-medium hover:bg-gray-200 transition mt-4 md:mt-0">
          Reserve Your Spot Today
        </button>
      </div>

      <div className="mt-8 md:mt-12 relative grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((
          { alt, text }: { alt: string; text: string },
          index: number,
        ): ReactElement => (
          <div key={index} className="relative overflow-hidden rounded-lg">
            <Image
              src={imgSrc}
              alt={alt}
              width={400}
              height={300}
              className="w-full h-40 md:h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 w-full text-sm">
              {text}
            </div>
          </div>
        ))}
        <div className="absolute right-0 bottom-0 flex space-x-2 p-4">
          {[ChevronLeft, ChevronRight].map((Icon, i: number): ReactElement => (
            <button
              key={i}
              className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30"
            >
              <Icon className="h-5 w-5" />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 md:mt-12 text-center">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800">
          COMING SOON
        </h2>
        <p className="text-sm mt-4">
          APRIL 8, 2025 • Auditorium, Saad Dahlab University
        </p>
      </div>
    </section>
  );
}
