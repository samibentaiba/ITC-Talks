import Image from "next/image";
import { ReactElement } from "react";

export default function SectionSponsors(): ReactElement {
  const sponsors = ["Amazon", "Dribbble", "HubSpot", "Notion", "Gumroad"];

  return (
    <section className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
        {sponsors.map((sponsor: string): ReactElement => (
          <div key={sponsor} className="flex justify-center">
            <Image
              src="/placeholder.svg?height=30&width=100"
              alt={sponsor}
              width={100}
              height={30}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
