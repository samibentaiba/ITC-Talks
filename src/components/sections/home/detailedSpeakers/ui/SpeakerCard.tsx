import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

type speaker = {
  name: string;
  title: string;
  description: string;
  image: string;
};

export default function SpeakerCard(
  { name, title, description, image }: speaker,
): ReactElement {
  return (
    <div className="bg-gray-200 rounded-lg overflow-hidden flex flex-col md:flex-row">
      <div className="p-4 md:p-6 flex-1">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-black">{name}</h3>
            <p className="text-sm text-gray-600">{title}</p>
          </div>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-600"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
              </path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </Link>
        </div>
        <p className="text-sm text-gray-700">{description}</p>
      </div>
      <div className="md:w-1/2 h-48 md:h-auto relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover grayscale"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
