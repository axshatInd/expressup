import React from 'react';
import { gradients, baseRating } from '@/utils';
import { Fugaz_One } from 'next/font/google';

const months = { 'January': 'Jan', 'February': 'Feb', 'March': 'Mar', 'April': 'Apr', 'May': 'May', 'June': 'Jun', 'July': 'Jul', 'August': 'Aug', 'September': 'Sept', 'October': 'Oct', 'November': 'Nov', 'December': 'Dec' };
const now = new Date();
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

const data = {
  "15": 2, "16": 4, "17": 1, "18": 3, "19": 5, "20": 2, "21": 4, "22": 1, "23": 3, "24": 5,
};

export default function Calendar(props) {
  const { demo } = props;
  const year = 2024;
  const month = 'August';
  const monthNow = new Date(year, Object.keys(months).indexOf(month), 1);
  const firstDayOfMonth = monthNow.getDate();
  const daysInMonth = new Date(year, Object.keys(month).indexOf(month) + 1, 0).getDate();

  const daysToDisplay = firstDayOfMonth + daysInMonth;
  const numRows = Math.floor(daysToDisplay / 7) + (daysToDisplay % 7 ? 1 : 0);

  return (
    <div className='flex flex-col overflow-hidden gap-1 py-4 sm:py-6 md:py-10'>
      {[...Array(numRows).keys()].map((row, rowIndex) => {
        return (
          <div key={rowIndex} className='grid grid-cols-7 gap-1'>
            {dayList.map((dayOfWeek, dayOfWeekIndex) => {
              let dayIndex = (rowIndex * 7) + dayOfWeekIndex - (firstDayOfMonth - 1);

              let dayDisplay = dayIndex > daysInMonth ? false : (row === 0 && dayOfWeekIndex < firstDayOfMonth) ? false : true;

              let isToday = dayIndex === now.getDate();
              let color = demo
                ? gradients.amber[baseRating[dayIndex]]
                : dayIndex in data ? gradients.amber[data[dayIndex]] : 'white';

              if (!dayDisplay) {
                return (
                  <div className="bg-white" key={dayOfWeekIndex} />
                );
              }

              return (
                <div
                  style={{ background: color }}
                  className={
                    'text-xs sm:text-sm border border-solid p-2 flex items-center gap-2 justify-between rounded-lg' +
                    (isToday ? ' border-red-400' : ' border-red-100') +
                    (color === 'white' ? ' text-black-400' : ' text-white')
                  }
                  key={dayOfWeekIndex}>
                  <p className='font-semibold'>{dayIndex}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
