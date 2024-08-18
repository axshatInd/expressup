import { Fugaz_One } from "next/font/google";
import React from "react";
import Button from "./Button";
import Calendar from "./Calendar";
import link from "next/link";
import CallToAction from "./CallToAction";
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Hero() {
  return (
    <div className="py-4 md:py-10 flex flex-col gap-8 sm:gap-10">
      <h1
        className={
          "text-5xl sm:text-6xl md:text-7xl text-center " + fugaz.className
        }
      >
        <span className="textGradient">ExpressUp</span> lets you record your{" "}
        <span className="textGradient">Daily Mood!</span>
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px] font-semibold">
        "Every Day Tells a Story,{" "}
        <span className="text-indigo-600 font-semibold">What's Yours?</span>"
      </p>
      <CallToAction />
      <Calendar demo />
    </div>
  );
}
