import React from 'react';
import { Fugaz_One } from "next/font/google"; // Import the font

// Apply the font
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Button(props) {
    const { text, dark } = props;
    return (
        <button className={
            'rounded-full overflow-hidden duration-200 hover:opacity-80 border-2 border-solid ' + 
            (dark ? 'text-white bg-gradient-to-r from-[#4a5568] to-[#2d3748] border-none' : 'text-[#2d3748] bg-gradient-to-r from-[#edf2f7] to-[#e2e8f0] border-none')
        }>
            <p className={ 'px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 ' + fugaz.className}>
                {text}
            </p>
        </button>
    );
}
