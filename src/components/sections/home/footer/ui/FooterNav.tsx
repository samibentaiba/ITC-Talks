import Link from "next/link";
import { ReactElement } from "react";
export default function FooterNav() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">ITC TALKS</h2>
      <nav className="space-y-2">
        {[
          { href: "/", label: "Home" },
          { href: "#about", label: "About" },
          { href: "#agenda", label: "Agenda" },
          { href: "#speakers", label: "Speakers" },
        ].map((
          { href, label }: { href: string; label: string },
        ): ReactElement => (
          <div key={href}>
            <Link href={href} className="text-sm hover:underline">
              {label}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}
