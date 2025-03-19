import { ArrowRight } from "lucide-react";
import { ReactElement } from "react";

export default function RegisterButton(): ReactElement {
  return (
    <div className="text-center">
      <button className="bg-gradient-to-r from-red-700 to-purple-800 hover:from-red-800 hover:to-purple-900 text-white rounded-md px-6 py-3 font-medium transition flex items-center mx-auto">
        Register Now
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  );
}
