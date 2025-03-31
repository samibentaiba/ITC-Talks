import type React from "react";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITC Talks 6th Edition",
  description: "Join the Conversation at ITC Talks 6th Edition",
};
import SectionHeader from "@/components/sections/home/header/SectionHeader";
import SectionFooter from "@/components/sections/home/footer/SectionFooter";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <div className="sticky top-0 z-50 bg-black shadow-md">
          <SectionHeader />
        </div>

        <div className="min-h-screen flex  flex-col ">{children}</div>

        <SectionFooter />
      </body>
    </html>
  );
}
