"use client";

import type { ReactElement } from "react";
import Image from "next/image";
import { useWindowSize } from "@/hooks/use-window-size";

const classes: Record<
  | "footer"
  | "container"
  | "leftSection"
  | "title"
  | "menuItem"
  | "copyright"
  | "rightSection"
  | "sectionTitle"
  | "sectionText"
  | "iconsContainer"
  | "icon"
  | "poweredByContainer",
  string
> = {
  footer:
    "mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 max-w-[1880px] flex flex-col items-center py-4",
  container:
    "self-stretch bg-zinc-200 rounded-[48px] inline-flex justify-between items-center",
  leftSection: "px-20 inline-flex flex-col justify-start items-start gap-16",
  title: "justify-start text-stone-900 text-3xl font-bold font-Syne uppercase",
  menuItem:
    "self-start justify-start text-stone-900 text-xl font-normal font-Syne leading-loose cursor-pointer",
  copyright:
    "justify-start text-stone-900 text-opacity-60 text-xl font-normal font-Syne leading-loose",
  rightSection:
    "w-[547px] h-full p-20 bg-blue-700 gap-20 rounded-[48px] inline-flex flex-col justify-start items-start g",
  sectionTitle:
    "self-stretch justify-start text-white text-3xl font-bold font-Syne uppercase",
  sectionText:
    "self-stretch justify-start text-white text-opacity-80 text-xl font-normal font-Syne leading-loose",
  iconsContainer: "inline-flex justify-start items-center gap-5",
  icon: "w-7 h-7 bg-white bg-opacity-80",
  poweredByContainer: "relative overflow-hidden",
};

export default function SectionFooter() {
  const { width } = useWindowSize();
  const isMobile = width !== undefined && width < 768;
  const isTablet = width !== undefined && width >= 768 && width < 1320;
  const isDesktop = width !== undefined && width >= 1320;

  const menuItems = ["Home", "About", "Agenda", "Speakers"];
  const socialIcons = [
    "/images/Facebook.svg",
    "/images/Instagram.svg",
    "/images/LinkedIn.svg",
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      if (id === "agenda") {
        const offset = 200; // Extra padding for agenda
        const top =
          section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      } else {
        section.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };
  // Mobile layout (stacked vertical)
  if (isMobile) {
    return (
      <footer className="mx-auto w-full px-4 py-4 flex flex-col items-center">
        <div className="self-stretch bg-zinc-200 rounded-[24px] flex flex-col w-full">
          {/* Top section with title and menu */}
          <div className="px-8 py-6 flex flex-col items-center text-center gap-6">
            <div className="text-stone-900 text-2xl font-bold font-Syne uppercase">
              ITC Talks
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleScroll(item.toLocaleLowerCase())}
                  className="text-stone-900 text-base font-normal cursor-pointer  font-Syne"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="text-stone-900 text-opacity-60 text-sm font-normal font-Syne text-center mt-4">
              © 2025 Copyright ITC Talks. All rights reserved.
            </div>
          </div>

          {/* Blue section */}
          <div className="w-full bg-blue-700 p-8 rounded-[24px] flex flex-col items-center gap-8">
            <InfoSection
              title="EVENT LOCATION"
              content="Auditorium, Saad Dahlab University"
              isMobile={true}
            />
            <InfoSection title="FOLLOW US" isMobile={true}>
              <div className="flex justify-center items-center gap-4">
                {socialIcons.map((src, index) => (
                  <Image
                    key={index}
                    src={src || "/placeholder.svg"}
                    alt="Social Icon"
                    width={24}
                    height={24}
                  />
                ))}
              </div>
            </InfoSection>
            <InfoSection title="POWERED BY" isMobile={true}>
              <div className="relative h-6 w-8">
                <Image
                  src="/images/WhiteItc.svg"
                  alt="Powered By Logo"
                  width={32}
                  height={24}
                />
              </div>
            </InfoSection>
          </div>
        </div>
      </footer>
    );
  }

  // Tablet layout (two columns alternating)
  if (isTablet) {
    return (
      <footer className="mx-auto w-full px-6 py-4 flex flex-col items-center">
        <div className="self-stretch bg-zinc-200 rounded-[36px] flex flex-col w-full">
          {/* Top section with title and menu */}
          <div className="px-12 py-10 flex flex-col items-start gap-10">
            <div className="text-stone-900 text-2xl font-bold font-Syne uppercase">
              ITC Talks
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleScroll(item.toLocaleLowerCase())}
                  className="text-stone-900 text-lg font-normal cursor-pointer font-Syne"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="text-stone-900 text-opacity-60 text-base font-normal font-Syne mt-4">
              © 2025 Copyright ITC Talks. All rights reserved.
            </div>
          </div>

          {/* Blue section */}
          <div className="w-full bg-blue-700 p-12 rounded-[36px] flex flex-col items-start gap-12">
            <InfoSection
              title="EVENT LOCATION"
              content="Auditorium, Saad Dahlab University"
              isTablet={true}
            />
            <InfoSection title="FOLLOW US" isTablet={true}>
              <div className="flex items-center gap-4">
                {socialIcons.map((src, index) => (
                  <Image
                    key={index}
                    src={src || "/placeholder.svg"}
                    alt="Social Icon"
                    width={28}
                    height={28}
                  />
                ))}
              </div>
            </InfoSection>
            <InfoSection title="POWERED BY" isTablet={true}>
              <div className="relative h-6 w-8">
                <Image
                  src="/images/WhiteItc.svg"
                  alt="Powered By Logo"
                  width={32}
                  height={24}
                />
              </div>
            </InfoSection>
          </div>
        </div>
      </footer>
    );
  }

  // Desktop layout (original layout)
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.leftSection}>
          <div className={classes.title}>ITC Talks</div>
          <div className="flex flex-col justify-start items-start gap-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={classes.menuItem}
                onClick={() => handleScroll(item.toLocaleLowerCase())}
              >
                {item}
              </button>
            ))}
          </div>
          <div className={classes.copyright}>
            © 2025 Copyright ITC Talks. All rights reserved.
          </div>
        </div>
        <div className={classes.rightSection}>
          <InfoSection
            title="EVENT LOCATION"
            content="Auditorium, Saad Dahlab University"
          />
          <InfoSection title="FOLLOW US">
            <div className={classes.iconsContainer}>
              {socialIcons.map((src, index) => (
                <Image
                  key={index}
                  src={src || "/placeholder.svg"}
                  alt="Social Icon"
                  width={30}
                  height={30}
                />
              ))}
            </div>
          </InfoSection>
          <InfoSection title="POWERED BY">
            <div className={classes.poweredByContainer}>
              <Image
                src="/images/WhiteItc.svg"
                alt="Powered By Logo"
                width={37}
                height={30}
              />
            </div>
          </InfoSection>
        </div>
      </div>
    </footer>
  );
}

function InfoSection({
  title,
  content,
  children,
  isMobile,
  isTablet,
}: {
  title: string;
  content?: string;
  children?: ReactElement;
  isMobile?: boolean;
  isTablet?: boolean;
}) {
  if (isMobile) {
    return (
      <div className="flex flex-col justify-center items-center gap-2 text-center w-full">
        <div className="text-white text-xl font-bold font-Syne">{title}</div>
        {content ? (
          <div className="text-white text-opacity-80 text-sm font-normal font-Syne">
            {content}
          </div>
        ) : (
          children
        )}
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="flex flex-col justify-start items-start gap-3 w-full">
        <div className="text-white text-2xl font-bold font-Syne">{title}</div>
        {content ? (
          <div className="text-white text-opacity-80 text-base font-normal font-Syne">
            {content}
          </div>
        ) : (
          children
        )}
      </div>
    );
  }

  return (
    <div className="self-stretch flex flex-col justify-start items-start gap-4">
      <div className={classes.sectionTitle}>{title}</div>
      {content ? (
        <div className={classes.sectionText}>{content}</div>
      ) : (
        children
      )}
    </div>
  );
}
