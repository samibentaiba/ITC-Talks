import { ArrowRight } from "lucide-react";
import { ReactElement } from "react";

export default function AgendaButton(): ReactElement {
  return (
    <button className="bg-red-700 hover:bg-red-800 text-white rounded-md px-6 py-3 font-medium transition flex items-center mx-auto">
      Register Now
      <ArrowRight className="ml-2 h-4 w-4" />
    </button>
  );
}
