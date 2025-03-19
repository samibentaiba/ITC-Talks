import React, { ReactElement } from "react";

type session = {
  time: string;
  title: string;
  description: string;
};
export default function AgendaColumn(
  { sessions }: { sessions: session[] },
): ReactElement {
  return (
    <div className="border-b border-gray-700 pb-6 md:border-b-0 md:border-r md:pr-6">
      {sessions.map((session: session, index: number): ReactElement => (
        <AgendaItem
          key={index}
          time={session.time}
          title={session.title}
          description={session.description}
        />
      ))}
    </div>
  );
}
function AgendaItem({ time, title, description }: session): ReactElement {
  return (
    <div className="flex justify-between items-start mb-6">
      <div className="w-24 text-right pr-4">
        <p className="font-bold">{time}</p>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
}
