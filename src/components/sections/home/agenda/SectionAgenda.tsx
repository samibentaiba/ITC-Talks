import AgendaColumn from "./ui/AgendaColumn";
import AgendaButton from "./ui/AgendaButton";
import mockdata from "./mockdata.json";
import { ReactElement } from "react";

export default function SectionAgenda(): ReactElement {
  return (
    <section className="container mx-auto px-4 md:px-6 py-12" id="agenda">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">AGENDA</h2>
      <div className="flex justify-between mb-8">
        <p className="text-sm">
          {mockdata.info}
        </p>
      </div>

      <div className="bg-gray-900 rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AgendaColumn
            sessions={mockdata.morningSessions}
          />
          <AgendaColumn
            sessions={mockdata.afternoonSessions}
          />
        </div>

        <div className="mt-8 text-center">
          <AgendaButton />
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
      typeof session.description === "string",
  ) ||
  !Array.isArray(mockdataTyped.afternoonSessions) ||
  !mockdataTyped.afternoonSessions.every(
    (session) =>
      typeof session.time === "string" &&
      typeof session.title === "string" &&
      typeof session.description === "string",
  )
) {
  throw new Error("Invalid mockdata format. Please check mockdata.json");
}
