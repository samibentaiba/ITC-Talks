import AgendaColumn from "./ui/AgendaColumn";
import AgendaButton from "./ui/AgendaButton";
import mockdata from "./mockdata.json";
import { ReactElement } from "react";

export default function SectionAgenda(): ReactElement {
  return (
    <section className=" flex-col w-full px-[1rem] sm:px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] max-w-[1880px] flex items-center justify-between py-4 ">
      <div className="flex justify-between mb-8 w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">AGENDA</h2>
        <p className="text-sm max-w-[15%]">{mockdata.info}</p>
      </div>

      <div className="self-stretch p-14 bg-stone-900 w-full rounded-[48px] inline-flex flex-col justify-start items-center gap-20">
        <div className="self-stretch flex flex-col justify-start items-start">
          <div className="self-stretch border-b border-white border-opacity-60 inline-flex justify-start items-start">
            <div className="flex-1 px-14 pb-10 border-r border-white border-opacity-60 flex justify-start items-start gap-10">
              <div className="justify-start text-white text-4xl font-bold font-['Syne']">
                9:00 AM
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-5">
                <div className="self-stretch justify-start text-white text-4xl font-bold font-['Syne']">
                  Check-in
                </div>
                <div className="self-stretch justify-start text-white text-opacity-80 text-xl font-normal font-['Syne'] leading-loose">
                  Arrive early to get settled and enjoy a smooth start to the
                  event.
                </div>
              </div>
            </div>
            <div className="flex-1 px-14 pb-10 flex justify-start items-start gap-10">
              <div className="justify-start text-white text-4xl font-bold font-['Syne']">
                11:45 AM
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-5">
                <div className="self-stretch justify-start text-white text-4xl font-bold font-['Syne']">
                  Quiz
                </div>
                <div className="self-stretch justify-start text-white text-opacity-80 text-xl font-normal font-['Syne'] leading-loose">
                  Test your knowledge with a fun and engaging quiz related to
                  the topics covered.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch border-b border-white border-opacity-60 inline-flex justify-start items-start">
            <div className="flex-1 px-14 py-10 border-r border-white border-opacity-60 flex justify-start items-start gap-10">
              <div className="justify-start text-white text-4xl font-bold font-['Syne']">
                9:45 AM
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-5">
                <div className="self-stretch justify-start text-white text-4xl font-bold font-['Syne']">
                  Opening Ceremony
                </div>
                <div className="self-stretch justify-start text-white text-opacity-80 text-xl font-normal font-['Syne'] leading-loose">
                  Welcome message and overview of the day’s exciting schedule.
                </div>
              </div>
            </div>
            <div className="flex-1 px-14 py-10 flex justify-start items-start gap-10">
              <div className="justify-start text-white text-4xl font-bold font-['Syne']">
                12:00 PM
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-5">
                <div className="self-stretch justify-start text-white text-4xl font-bold font-['Syne']">
                  Lunch Break
                </div>
                <div className="self-stretch justify-start text-white text-opacity-80 text-xl font-normal font-['Syne'] leading-loose">
                  Enjoy a break and network with fellow attendees.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch border-b border-white border-opacity-60 inline-flex justify-start items-start">
            <div className="flex-1 px-14 py-10 border-r border-white border-opacity-60 flex justify-start items-start gap-10">
              <div className="justify-start text-white text-4xl font-bold font-['Syne']">
                10:00 AM
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-5">
                <div className="self-stretch justify-start text-white text-4xl font-bold font-['Syne']">
                  1st Speaker
                </div>
                <div className="self-stretch justify-start text-white text-opacity-80 text-xl font-normal font-['Syne'] leading-loose">
                  Hear from a leading expert in the IT field as they share their
                  insights and experiences.
                </div>
              </div>
            </div>
            <div className="flex-1 px-14 py-10 flex justify-start items-start gap-10">
              <div className="justify-start text-white text-4xl font-bold font-['Syne']">
                1:00 PM
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-5">
                <div className="self-stretch justify-start text-white text-4xl font-bold font-['Syne']">
                  4th Speaker
                </div>
                <div className="self-stretch justify-start text-white text-opacity-80 text-xl font-normal font-['Syne'] leading-loose">
                  Another expert takes the stage to provide insights into the
                  latest trends in the tech world.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch border-b border-white border-opacity-60 inline-flex justify-start items-start">
            <div className="flex-1 px-14 py-10 border-r border-white border-opacity-60 flex justify-start items-start gap-10">
              <div className="justify-start text-white text-4xl font-bold font-['Syne']">
                10:30 AM
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-5">
                <div className="self-stretch justify-start text-white text-4xl font-bold font-['Syne']">
                  2nd Speaker
                </div>
                <div className="self-stretch justify-start text-white text-opacity-80 text-xl font-normal font-['Syne'] leading-loose">
                  Gain valuable knowledge from another speaker shaping the
                  future of technology.
                </div>
              </div>
            </div>
            <div className="flex-1 px-14 py-10 flex justify-start items-start gap-10">
              <div className="justify-start text-white text-4xl font-bold font-['Syne']">
                1:30 PM
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-5">
                <div className="self-stretch justify-start text-white text-4xl font-bold font-['Syne']">
                  5th Speaker
                </div>
                <div className="self-stretch justify-start text-white text-opacity-80 text-xl font-normal font-['Syne'] leading-loose">
                  Learn from a thought leader with practical advice and
                  real-world experience.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch border-b border-white border-opacity-60 inline-flex justify-start items-start">
            <div className="flex-1 px-14 py-10 border-r border-white border-opacity-60 flex justify-start items-start gap-10">
              <div className="justify-start text-white text-4xl font-bold font-['Syne']">
                11:00 AM
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-5">
                <div className="self-stretch justify-start text-white text-4xl font-bold font-['Syne']">
                  3rd Speaker
                </div>
                <div className="self-stretch justify-start text-white text-opacity-80 text-xl font-normal font-['Syne'] leading-loose">
                  A thought-provoking talk that will inspire and challenge your
                  thinking.
                </div>
              </div>
            </div>
            <div className="flex-1 px-14 py-10 flex justify-start items-start gap-10">
              <div className="justify-start text-white text-4xl font-bold font-['Syne']">
                2:00 PM
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-5">
                <div className="self-stretch justify-start text-white text-4xl font-bold font-['Syne']">
                  Q&A
                </div>
                <div className="self-stretch justify-start text-white text-opacity-80 text-xl font-normal font-['Syne'] leading-loose">
                  Ask questions, engage with the speakers, and deepen your
                  understanding of key topics.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-start">
            <div className="flex-1 px-14 pt-10 border-r border-white border-opacity-60 flex justify-start items-start gap-10">
              <div className="justify-start text-white text-4xl font-bold font-['Syne']">
                11:30 AM
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-5">
                <div className="self-stretch justify-start text-white text-4xl font-bold font-['Syne']">
                  Q&A
                </div>
                <div className="self-stretch justify-start text-white text-opacity-80 text-xl font-normal font-['Syne'] leading-loose">
                  Get your questions answered and dive deeper into the topics
                  discussed.
                </div>
              </div>
            </div>
            <div className="flex-1 px-14 pt-10 flex justify-start items-start gap-10">
              <div className="justify-start text-white text-4xl font-bold font-['Syne']">
                2:15 PM
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-5">
                <div className="self-stretch justify-start text-white text-4xl font-bold font-['Syne']">
                  Closing Ceremony
                </div>
                <div className="self-stretch justify-start text-white text-opacity-80 text-xl font-normal font-['Syne'] leading-loose">
                  Wrap up the event with final thoughts and acknowledgements.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-size="Large"
          data-type="Filled"
          className="px-10 py-5 bg-gradient-to-l from-orange-700 to-blue-700/0 rounded-[100px] inline-flex justify-center items-center gap-5"
        >
          <div className="justify-start text-white text-xl font-medium font-['Syne']">
            Register Now
          </div>
          <div className="w-4 h-4 bg-white" />
        </div>
      </div>
    </section>
  );
}

type Session = {
  time: string;
  title: string;
  description: string;
};

type MockData = {
  info: string;
  morningSessions: Session[];
  afternoonSessions: Session[];
};

const mockdataTyped: MockData = mockdata;

if (
  typeof mockdataTyped.info !== "string" ||
  !Array.isArray(mockdataTyped.morningSessions) ||
  !mockdataTyped.morningSessions.every(
    (session: Session): boolean =>
      typeof session.time === "string" &&
      typeof session.title === "string" &&
      typeof session.description === "string"
  ) ||
  !Array.isArray(mockdataTyped.afternoonSessions) ||
  !mockdataTyped.afternoonSessions.every(
    (session) =>
      typeof session.time === "string" &&
      typeof session.title === "string" &&
      typeof session.description === "string"
  )
) {
  throw new Error("Invalid mockdata format. Please check mockdata.json");
}
