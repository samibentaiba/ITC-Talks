"use client";

export default function SectionFooter() {
  const screenSize = useScreenSize();
  const layout = styles[screenSize];

  const info = {
    info: layout.info,
    infoTitle: layout.infoTitle,
    infoText: layout.infoText
  }

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <footer className={`mx-auto w-full flex flex-col items-center py-4 ${layout.footer}`}>
      <div className={`self-stretch bg-zinc-200 ${layout.container}`}>
        <div className={layout.leftSection}>
          <div className={layout.title}>ITC Talks</div>
          <nav className={layout.menu}>
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item.toLowerCase())}
                className={layout.menuItem}
              >
                {item}
              </button>
            ))}
          </nav>
          <div className={layout.copyright}>
            © 2025 Copyright ITC Talks. All rights reserved.
          </div>
        </div>

        <div className={layout.rightSection}>
          <InfoSection title="EVENT LOCATION" content="Auditorium, Saad Dahlab University" styles={info} />
          <InfoSection title="FOLLOW US" styles={info}>
            <div className={layout.iconsContainer}>
              {socialIcons.map((src, index) => (
                <Image key={index} src={src} alt="Social Icon" width={layout.size} height={layout.size} />
              ))}
            </div>
          </InfoSection>
          <InfoSection title="POWERED BY" styles={info}>
            <div className={layout.poweredByContainer}>
              <Image src="/images/WhiteItc.svg" alt="Powered By Logo" width={layout.size + 8} height={layout.size} />
            </div>
          </InfoSection>
        </div>
      </div>
    </footer>
  );
}

/* ui */
import InfoSection from "./ui/InfoSection";

/* package */
import Image from "next/image";

/* hooks */
import { useScreenSize } from "@/hooks/use-screen-size";

/* data */
import { styles } from "./data/style";
import { menuItems, socialIcons } from "./data/Items";