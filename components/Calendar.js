"use client";
import { baseRating, gradients } from "@/utils";
import { Fugaz_One } from "next/font/google";
import React, { useState } from "react";

const months = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sept",
  October: "Oct",
  November: "Nov",
  December: "Dec",
};
const monthsArr = Object.keys(months);
const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function Calendar(props) {
  const { demo, completeData, handleSetMood } = props;
  const now = new Date();
  const currMonth = now.getMonth();
  const [selectedMonth, setSelectMonth] = useState(monthsArr[currMonth]);
  const [selectedYear, setSelectedYear] = useState(now.getFullYear());

  const numericMonth = monthsArr.indexOf(selectedMonth);
  const data = completeData?.[selectedYear]?.[numericMonth] || {};

  function handleIncrementMonth(val) {
    if (numericMonth + val < 0) {
      setSelectedYear((prev) => prev - 1);
      setSelectMonth(monthsArr[11]);
    } else if (numericMonth + val > 11) {
      setSelectedYear((prev) => prev + 1);
      setSelectMonth(monthsArr[0]);
    } else {
      setSelectMonth(monthsArr[numericMonth + val]);
    }
  }

  const monthNow = new Date(selectedYear, numericMonth, 1);
  const firstDayOfMonth = monthNow.getDay();
  const daysInMonth = new Date(selectedYear, numericMonth + 1, 0).getDate();
  const totalCells = firstDayOfMonth + daysInMonth;

  const numRows = Math.ceil(totalCells / 7);

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-5 gap-4">
        <button
          onClick={() => handleIncrementMonth(-1)}
          className="text-indigo-400 text-lg sm:text-xl hover:opacity-60"
        >
          <i className="fa-solid fa-circle-chevron-left"></i>
        </button>
        <p className={"text-center col-span-3 textGradient " + fugaz.className}>
          {selectedMonth}, {selectedYear}
        </p>
        <button
          onClick={() => handleIncrementMonth(1)}
          className="text-indigo-400 text-lg sm:text-xl hover:opacity-60"
        >
          <i className="fa-solid fa-circle-chevron-right"></i>
        </button>
      </div>
      <div className="flex flex-col gap-1 py-4 sm:py-6 md:py-10">
        <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold">
          {dayList.map((day, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-700 to-gray-500 text-white p-2 font-bold rounded-lg shadow-lg"
            >
              {day[0]}
            </div>
          ))}
        </div>
        {[...Array(numRows)].map((_, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-7 gap-1">
            {dayList.map((_, dayOfWeekIndex) => {
              const dayIndex =
                rowIndex * 7 + dayOfWeekIndex - (firstDayOfMonth - 1);
              const isToday =
                dayIndex === now.getDate() &&
                numericMonth === now.getMonth() &&
                selectedYear === now.getFullYear();
              const color = demo
                ? gradients.indigo[baseRating[dayIndex]]
                : dayIndex in data
                ? gradients.indigo[data[dayIndex]]
                : "white";

              return dayIndex > 0 && dayIndex <= daysInMonth ? (
                <div
                  key={dayOfWeekIndex}
                  style={{ background: color }}
                  className={
                    "text-xs sm:text-sm border p-2 flex items-center justify-center rounded-lg " +
                    (isToday ? "border-indigo-400" : "border-indigo-100") +
                    (color === "white" ? " text-indigo-400" : " text-white")
                  }
                >
                  {dayIndex}
                </div>
              ) : (
                <div key={dayOfWeekIndex} className="bg-white" />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
