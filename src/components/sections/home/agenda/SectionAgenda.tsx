"use client";
import type { ReactElement } from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import StartButton from "./ui/AgendaButton";

export default function SectionAgenda(): ReactElement {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1600);
      setIsDesktop(window.innerWidth >= 1600);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return <MobileAgenda />;
  }

  if (isTablet) {
    return <TabletAgenda />;
  }

  return <DesktopAgenda />;
}

function DesktopAgenda(): ReactElement {
  return (
    <section className="mx-auto flex-col w-full px-10 max-w-[1880px] flex items-center justify-between py-4">
      <div className="flex flex-row justify-between mb-8 w-full">
        <h2 className="text-9xl font-bold mb-6">AGENDA</h2>
        <p className="text-sm max-w-[15%] mb-0">
          April 8, 2025 | Auditorium, Saad Dahlab University
        </p>
      </div>
      <div className="self-stretch p-14 bg-[#1C1A1A] w-full rounded-[3rem] inline-flex flex-col justify-start items-center gap-20">
        <Schedule />
        <StartButton text="Register now"/>
      </div>
    </section>
  );
}

function TabletAgenda(): ReactElement {
  return (
    <section className="mx-auto flex-col w-full p-[24px] max-w-[1880px] flex items-center justify-between">
      <div className="flex flex-col mb-4 w-full">
        <h2 className="text-8xl font-bold mb-2">AGENDA</h2>
        <p className="text-2xl max-w-full mb-4">
          April 8, 2025 | Auditorium, Saad Dahlab University
        </p>
      </div>
      <div className="self-stretch p-4 bg-[#1C1A1A] w-full rounded-[24px] inline-flex flex-col justify-start items-center gap-10">
        <TabletSchedule />
        <button
          className="flex items-center gap-2 justify-between px-4 py-3 rounded-full"
          style={{
            borderRadius: "100px",
            background:
              "linear-gradient(85deg, rgba(195, 65, 36, 0.7) 1.59%, rgba(1, 71, 255, 0.5) 121.45%)",
          }}
        >
          <span className="text-base font-medium font-Syne">Register Now</span>
          <Image
            src="images/arrow-empty.svg"
            alt="arrow empty"
            width={15}
            height={15}
          />
        </button>
      </div>
    </section>
  );
}

function MobileAgenda(): ReactElement {
  return (
    <section className="mx-auto flex-col w-full px-[16px] max-w-[1880px] flex items-center justify-between">
      <div className="flex flex-col mb-4 w-full">
        <h2 className="text-3xl font-bold mb-2">AGENDA</h2>
        <p className="text-xs max-w-full mb-4">
          April 8, 2025 | Auditorium, Saad Dahlab University
        </p>
      </div>
      <div className="self-stretch p-4 bg-[#1C1A1A] w-full rounded-[24px] inline-flex flex-col justify-start items-center gap-10">
        <MobileSchedule />
        <button
          className="flex items-center gap-2 justify-between px-4 py-3 rounded-full"
          style={{
            borderRadius: "100px",
            background:
              "linear-gradient(85deg, rgba(195, 65, 36, 0.7) 1.59%, rgba(1, 71, 255, 0.5) 121.45%)",
          }}
        >
          <span className="text-base font-medium font-Syne">Register Now</span>
          <Image
            src="images/arrow-empty.svg"
            alt="arrow empty"
            width={15}
            height={15}
          />
        </button>
      </div>
    </section>
  );
}

const ScheduleItem = ({
  time,
  title,
  description,
  border,
}: {
  time: string;
  title: string;
  description: string;
  border: boolean;
}) => (
  <div
    className={`flex-1 px-14 py-10 ${
      border ? "border-r border-white border-opacity-60" : ""
    } flex justify-start items-start gap-10`}
  >
    <div className="justify-start text-white text-4xl font-bold font-Syne">
      {time}
    </div>
    <div className="flex-1 inline-flex flex-col justify-start items-start gap-5">
      <div className="self-stretch justify-start text-white text-4xl font-bold font-Syne">
        {title}
      </div>
      <div className="self-stretch justify-start text-white text-opacity-80 text-xl font-normal font-Syne leading-loose">
        {description}
      </div>
    </div>
  </div>
);

const MobileScheduleItem = ({
  time,
  title,
  description,
}: {
  time: string;
  title: string;
  description: string;
}) => (
  <div className="w-full px-4 py-6 border-b border-white border-opacity-60 flex flex-col justify-start items-start gap-3">
    <div className="flex justify-between w-full">
      <div className="text-white text-xl font-bold font-Syne">{title}</div>
      <div className="text-white text-xl font-bold font-Syne">{time}</div>
    </div>
    <div className="self-stretch text-white text-opacity-80 text-sm font-normal font-Syne leading-relaxed">
      {description}
    </div>
  </div>
);
const TabletScheduleItem = ({
  time,
  title,
  description,
}: {
  time: string;
  title: string;
  description: string;
}) => (
  <div className="w-full px-4 py-6 border-b border-white border-opacity-60 flex flex-col justify-start items-start gap-3">
    <div className="flex justify-between w-full">
      <div className="text-white text-3xl font-bold font-Syne">{title}</div>
      <div className="text-white text-3xl font-bold font-Syne">{time}</div>
    </div>
    <div className="self-stretch text-white text-opacity-80 text-2xl font-normal font-Syne leading-relaxed">
      {description}
    </div>
  </div>
);
const TabletSchedule = () => (
  <div className="self-stretch flex flex-col justify-start items-start">
    {[
      [
        {
          time: "9:00 AM",
          title: "Check-in",
          description:
            "Arrive early to get settled and enjoy a smooth start to the event.",
          border: true,
        },
        {
          time: "9:45 AM",
          title: "Opening Ceremony",
          description:
            "Welcome message and overview of the day's exciting schedule.",
          border: true,
        },
      ],
      [
        {
          time: "10:00 AM",
          title: "1st Speaker",
          description:
            "Hear from a leading expert in the IT field as they share their insights and experiences.",
          border: true,
        },
        {
          time: "10:30 AM",
          title: "2nd Speaker",
          description:
            "Gain valuable knowledge from another speaker shaping the future of technology.",
          border: true,
        },
      ],
      [
        {
          time: "11:00 AM",
          title: "3rd Speaker",
          description:
            "A thought-provoking talk that will inspire and challenge your thinking.",
          border: true,
        },
        {
          time: "11:30 AM",
          title: "Q&A",
          description:
            "Get your questions answered and dive deeper into the topics discussed.",
          border: true,
        },
      ],
      [
        {
          time: "11:45 AM",
          title: "Quiz",
          description:
            "Test your knowledge with a fun and engaging quiz related to the topics covered.",
          border: false,
        },
        {
          time: "12:00 PM",
          title: "Lunch Break",
          description: "Enjoy a break and network with fellow attendees.",
          border: false,
        },
      ],
      [
        {
          time: "1:00 PM",
          title: "4th Speaker",
          description:
            "Another expert takes the stage to provide insights into the latest trends in the tech world.",
          border: false,
        },
        {
          time: "1:30 PM",
          title: "5th Speaker",
          description:
            "Learn from a thought leader with practical advice and real-world experience.",
          border: false,
        },
      ],
      [
        {
          time: "2:00 PM",
          title: "Q&A",
          description:
            "Ask questions, engage with the speakers, and deepen your understanding of key topics.",
          border: false,
        },
        {
          time: "2:15 PM",
          title: "Closing Ceremony",
          description:
            "Wrap up the event with final thoughts and acknowledgements.",
          border: false,
        },
      ],
    ]

      .flat()
      .map((item, index) => (
        <TabletScheduleItem
          key={index}
          time={item.time}
          title={item.title}
          description={item.description}
        />
      ))}
  </div>
);

const Schedule = () => (
  <div className="self-stretch flex flex-col justify-start items-start">
    {[
      [
        {
          time: "9:00 AM",
          title: "Check-in",
          description:
            "Arrive early to get settled and enjoy a smooth start to the event.",
          border: true,
        },
        {
          time: "11:45 AM",
          title: "Quiz",
          description:
            "Test your knowledge with a fun and engaging quiz related to the topics covered.",
          border: false,
        },
      ],

      [
        {
          time: "9:45 AM",
          title: "Opening Ceremony",
          description:
            "Welcome message and overview of the day's exciting schedule.",
          border: true,
        },
        {
          time: "12:00 PM",
          title: "Lunch Break",
          description: "Enjoy a break and network with fellow attendees.",
          border: false,
        },
      ],

      [
        {
          time: "10:00 AM",
          title: "1st Speaker",
          description:
            "Hear from a leading expert in the IT field as they share their insights and experiences.",
          border: true,
        },
        {
          time: "1:00 PM",
          title: "4th Speaker",
          description:
            "Another expert takes the stage to provide insights into the latest trends in the tech world.",
          border: false,
        },
      ],

      [
        {
          time: "10:30 AM",
          title: "2nd Speaker",
          description:
            "Gain valuable knowledge from another speaker shaping the future of technology.",
          border: true,
        },
        {
          time: "1:30 PM",
          title: "5th Speaker",
          description:
            "Learn from a thought leader with practical advice and real-world experience.",
          border: false,
        },
      ],

      [
        {
          time: "11:00 AM",
          title: "3rd Speaker",
          description:
            "A thought-provoking talk that will inspire and challenge your thinking.",
          border: true,
        },
        {
          time: "2:00 PM",
          title: "Q&A",
          description:
            "Ask questions, engage with the speakers, and deepen your understanding of key topics.",
          border: false,
        },
      ],

      [
        {
          time: "11:30 AM",
          title: "Q&A",
          description:
            "Get your questions answered and dive deeper into the topics discussed.",
          border: true,
        },
        {
          time: "2:15 PM",
          title: "Closing Ceremony",
          description:
            "Wrap up the event with final thoughts and acknowledgements.",
          border: false,
        },
      ],
    ].map((row, index) => (
      <div
        key={index}
        className={`self-stretch ${
          index <
          [
            [
              {
                time: "9:00 AM",
                title: "Check-in",
                description:
                  "Arrive early to get settled and enjoy a smooth start to the event.",
                border: true,
              },
              {
                time: "11:45 AM",
                title: "Quiz",
                description:
                  "Test your knowledge with a fun and engaging quiz related to the topics covered.",
                border: false,
              },
            ],

            [
              {
                time: "9:45 AM",
                title: "Opening Ceremony",
                description:
                  "Welcome message and overview of the day's exciting schedule.",
                border: true,
              },
              {
                time: "12:00 PM",
                title: "Lunch Break",
                description: "Enjoy a break and network with fellow attendees.",
                border: false,
              },
            ],

            [
              {
                time: "10:00 AM",
                title: "1st Speaker",
                description:
                  "Hear from a leading expert in the IT field as they share their insights and experiences.",
                border: true,
              },
              {
                time: "1:00 PM",
                title: "4th Speaker",
                description:
                  "Another expert takes the stage to provide insights into the latest trends in the tech world.",
                border: false,
              },
            ],

            [
              {
                time: "10:30 AM",
                title: "2nd Speaker",
                description:
                  "Gain valuable knowledge from another speaker shaping the future of technology.",
                border: true,
              },
              {
                time: "1:30 PM",
                title: "5th Speaker",
                description:
                  "Learn from a thought leader with practical advice and real-world experience.",
                border: false,
              },
            ],

            [
              {
                time: "11:00 AM",
                title: "3rd Speaker",
                description:
                  "A thought-provoking talk that will inspire and challenge your thinking.",
                border: true,
              },
              {
                time: "2:00 PM",
                title: "Q&A",
                description:
                  "Ask questions, engage with the speakers, and deepen your understanding of key topics.",
                border: false,
              },
            ],

            [
              {
                time: "11:30 AM",
                title: "Q&A",
                description:
                  "Get your questions answered and dive deeper into the topics discussed.",
                border: true,
              },
              {
                time: "2:15 PM",
                title: "Closing Ceremony",
                description:
                  "Wrap up the event with final thoughts and acknowledgements.",
                border: false,
              },
            ],
          ].length -
            1
            ? "border-b border-white border-opacity-60"
            : ""
        } inline-flex justify-start items-start`}
      >
        {row.map((item, i) => (
          <ScheduleItem
            key={i}
            time={item.time}
            title={item.title}
            description={item.description}
            border={i < row.length - 1}
          />
        ))}
      </div>
    ))}
  </div>
);

const MobileSchedule = () => (
  <div className="self-stretch flex flex-col justify-start items-start">
    {[
      [
        {
          time: "9:00 AM",
          title: "Check-in",
          description:
            "Arrive early to get settled and enjoy a smooth start to the event.",
          border: true,
        },
        {
          time: "9:45 AM",
          title: "Opening Ceremony",
          description:
            "Welcome message and overview of the day's exciting schedule.",
          border: true,
        },
      ],
      [
        {
          time: "10:00 AM",
          title: "1st Speaker",
          description:
            "Hear from a leading expert in the IT field as they share their insights and experiences.",
          border: true,
        },
        {
          time: "10:30 AM",
          title: "2nd Speaker",
          description:
            "Gain valuable knowledge from another speaker shaping the future of technology.",
          border: true,
        },
      ],
      [
        {
          time: "11:00 AM",
          title: "3rd Speaker",
          description:
            "A thought-provoking talk that will inspire and challenge your thinking.",
          border: true,
        },
        {
          time: "11:30 AM",
          title: "Q&A",
          description:
            "Get your questions answered and dive deeper into the topics discussed.",
          border: true,
        },
      ],
      [
        {
          time: "11:45 AM",
          title: "Quiz",
          description:
            "Test your knowledge with a fun and engaging quiz related to the topics covered.",
          border: false,
        },
        {
          time: "12:00 PM",
          title: "Lunch Break",
          description: "Enjoy a break and network with fellow attendees.",
          border: false,
        },
      ],
      [
        {
          time: "1:00 PM",
          title: "4th Speaker",
          description:
            "Another expert takes the stage to provide insights into the latest trends in the tech world.",
          border: false,
        },
        {
          time: "1:30 PM",
          title: "5th Speaker",
          description:
            "Learn from a thought leader with practical advice and real-world experience.",
          border: false,
        },
      ],
      [
        {
          time: "2:00 PM",
          title: "Q&A",
          description:
            "Ask questions, engage with the speakers, and deepen your understanding of key topics.",
          border: false,
        },
        {
          time: "2:15 PM",
          title: "Closing Ceremony",
          description:
            "Wrap up the event with final thoughts and acknowledgements.",
          border: false,
        },
      ],
    ]
      .flat()
      .map((item, index) => (
        <MobileScheduleItem
          key={index}
          time={item.time}
          title={item.title}
          description={item.description}
        />
      ))}
  </div>
);
