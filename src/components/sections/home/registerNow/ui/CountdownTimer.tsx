"use client";

import { ReactElement, useEffect, useState } from "react";
import CountdownDisplay from "./CountdownDisplay";
import DecorativeElements from "./DecorativeElements";
import RegisterButton from "./RegisterButton";

export default function CountdownTimer(): ReactElement {
  const [days, setDays] = useState<string>("00");
  const [hours, setHours] = useState<string>("00");
  const [minutes, setMinutes] = useState<string>("00");

  useEffect((): () => void => {
    const targetDate = new Date("April 8, 2025").getTime();

    const updateCountdown = (): void => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setDays(
          String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        );
        setHours(
          String(
            Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          ).padStart(2, "0"),
        );
        setMinutes(
          String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
            .padStart(2, "0"),
        );
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);

    return (): void => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-12 px-4 md:px-8 bg-black rounded-lg overflow-hidden">
      <DecorativeElements />
      <div className="text-center mb-4">
        <p className="text-sm text-gray-400">Registrations ends in:</p>
      </div>
      <CountdownDisplay days={days} hours={hours} minutes={minutes} />
      <RegisterButton />
    </div>
  );
}
