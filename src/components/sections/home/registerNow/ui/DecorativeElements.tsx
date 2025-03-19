import { ReactElement } from "react";

export default function DecorativeElements(): ReactElement {
  return (
    <>
      <div className="absolute left-0 bottom-0 opacity-70">
        <svg
          width="150"
          height="150"
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0L50 0L50 50L0 50L0 0Z" fill="#6A1B9A" />
          <path d="M50 0L100 0L100 50L50 50L50 0Z" fill="#4527A0" />
          <path d="M0 50L50 50L50 100L0 100L0 50Z" fill="#283593" />
          <path d="M50 50L100 50L100 100L50 100L50 50Z" fill="#1565C0" />
          <path d="M100 0L150 0L150 50L100 50L100 0Z" fill="#0277BD" />
          <path d="M100 50L150 50L150 100L100 100L100 50Z" fill="#00838F" />
          <path d="M0 100L50 100L50 150L0 150L0 100Z" fill="#00695C" />
          <path d="M50 100L100 100L100 150L50 150L50 100Z" fill="#2E7D32" />
          <path d="M100 100L150 100L150 150L100 150L100 100Z" fill="#558B2F" />
        </svg>
      </div>

      <div className="absolute right-0 bottom-0 opacity-70">
        <svg
          width="150"
          height="150"
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="75" cy="75" r="75" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(75 75) rotate(90) scale(75)"
            >
              <stop stopColor="#6A1B9A" />
              <stop offset="0.333" stopColor="#1565C0" />
              <stop offset="0.667" stopColor="#00838F" />
              <stop offset="1" stopColor="#2E7D32" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
