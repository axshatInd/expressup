import React from 'react';
import { Fugaz_One } from "next/font/google"; // Import the font

// Apply the font
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Button(props) {
    const { text, dark, full } = props;
    return (
        <button className={
            'relative rounded-full overflow-hidden duration-200 hover:opacity-60 border-2 ' +
            (dark ? 
                'text-white bg-gradient-to-r from-[#FF9A8B] via-[#FF6F91] to-[#C6A0C6] border-white shadow-md shadow-[#4a4a4a]' 
                : 
                'text-white bg-gradient-to-r from-[#FF9A8B] via-[#FF6F91] to-[#C6A0C6] border-transparent shadow-md shadow-[#4a4a4a]' + (full ? 'grid place-items-center w-full ' : ' ')
            )
        }>
            <p className={'px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 ' + fugaz.className}>
                {text}
            </p>
        </button>
    );
}
