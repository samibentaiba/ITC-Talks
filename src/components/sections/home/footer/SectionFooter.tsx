import FooterNav from "./ui/FooterNav";
import FooterSocial from "./ui/FooterSocial";
import FooterLocation from "./ui/FooterLocation";
import FooterPoweredBy from "./ui/FooterPoweredBy";
import { ReactElement } from "react";

export default function SectionFooter(): ReactElement {
  return (
    <footer className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-gray-200 p-8 text-black">
          <FooterNav />
          <div className="text-xs text-gray-600">
            © 2025 Copyright ITC Talks. All rights reserved.
          </div>
        </div>

        <div className="bg-blue-600 p-8 text-white">
          <FooterLocation />
          <FooterSocial />
          <FooterPoweredBy />
        </div>
      </div>
    </footer>
  );
}
