import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { ReactElement } from "react";

export default function FooterSocial(): ReactElement {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">FOLLOW US</h2>
      <div className="flex space-x-4">
        {[
          { href: "https://facebook.com", icon: <Facebook size={20} /> },
          { href: "https://instagram.com", icon: <Instagram size={20} /> },
          { href: "https://linkedin.com", icon: <Linkedin size={20} /> },
        ].map(({ href, icon }) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200"
          >
            {icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
