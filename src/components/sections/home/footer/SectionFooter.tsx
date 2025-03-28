import { ReactElement } from "react";

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
  | "poweredByContainer"
  | "poweredByItem1"
  | "poweredByItem2"
  | "poweredByItem3"
  | "poweredByItem4",
  string
> = {
  footer:
    "mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-10 max-w-[1880px] flex flex-col items-center py-4",
  container:
    "self-stretch bg-zinc-200 rounded-[48px] inline-flex justify-between items-center",
  leftSection: "px-20 inline-flex flex-col justify-start items-start gap-16",
  title: "justify-start text-stone-900 text-3xl font-bold font-Syne uppercase",
  menuItem:
    "self-stretch justify-start text-stone-900 text-xl font-normal font-Syne leading-loose",
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
  poweredByContainer: "w-9 h-7 relative overflow-hidden",
  poweredByItem1:
    "w-1.5 h-3.5 left-0 top-[16.68px] absolute bg-white bg-opacity-80",
  poweredByItem2: "w-9 h-5 left-0 top-[8.32px] absolute bg-white bg-opacity-80",
  poweredByItem3:
    "w-5 h-3.5 left-[16.85px] top-[16.68px] absolute bg-white bg-opacity-80",
  poweredByItem4:
    "w-1.5 h-1.5 left-[8.43px] top-0 absolute bg-white bg-opacity-80",
};
export default function SectionFooter() {
  const menuItems = ["Home", "About", "Agenda", "Speakers"];
  const socialIcons = Array(3).fill(null);
  const poweredByItems = Array(4).fill(null);

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.leftSection}>
          <div className={classes.title}>ITC Talks</div>
          <div className="flex flex-col justify-start items-start gap-4">
            {menuItems.map((item, index) => (
              <div key={index} className={classes.menuItem}>
                {item}
              </div>
            ))}
          </div>
          <div className={classes.copyright}>
            © 2025 Copyright ITC Talks. All rights reserved.
          </div>
        </div>
        <div className={classes.rightSection}>
          <InfoSection
            title="Event Location"
            content="Auditorium, Saad Dahlab University"
          />
          <InfoSection title="Follow US">
            <div className={classes.iconsContainer}>
              {socialIcons.map((_, index) => (
                <div key={index} className={classes.icon} />
              ))}
            </div>
          </InfoSection>
          <InfoSection title="Powered By">
            <div className={classes.poweredByContainer}>
              {poweredByItems.map((_, index) => (
                <div
                  key={index}
                  className={
                    classes[`poweredByItem${index + 1}` as keyof typeof classes]
                  }
                />
              ))}
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
}: {
  title: string;
  content?: string;
  children?: ReactElement;
}) {
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
