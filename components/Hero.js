import { Fugaz_One, Inter } from "next/font/google";
import React from 'react'
const fugaz = Fugaz_One({ subsets: ["latin"],weight: ['400'] }); 

export default function Hero() {
  return (
    <div className='py-4 md:py-10 flex flex-col gap-4 sm:gap-8'>
        <h1 className={'text-5xl sm:text-6xl md:text-7xl text-center ' + fugaz.className}><span className='textGradient'>ExpressUp</span> lets you express your <span className='textGradient'>Daily Mood!</span></h1>
        <p className='text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px] '>Create your mood record and see how you feel <span className='font-semibold'>EVERY DAY</span></p>

    </div>
  )
}
