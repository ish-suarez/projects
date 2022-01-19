import React from 'react';

import CrewPic from '../images/ACPworking1.jpeg';

export default function AboutUs() {
    return (
        <div className='pt-5 md:flex md:flex-row-reverse'>

            <div className='px-5 md:w-1/2 2xl:w-2/3 2xl:px-40'>
                <h3 className='uppercase text-md sm:text-2xl md:text-3xl lg:text-4xl text-center md:text-left tracking-tight leading-10 text-blue-500'>Who are we?</h3>
                <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center md:text-left tracking-tight mb-5 font-extrabold text-blueGray-800'> About us at Air Cool PPS</p>
                <p className='text-center md:text-left md:w-auto sm:w-2/3 xl:w-1/2 xl:m-0 sm:m-auto text-sm xl:text-lg tracking-tight leading-7 text-gray-500'>
                    We are a <strong className='text-blue-600'>family-owned</strong> business in Texas. Leading the market with more than 10 years of experience in air conditioning and heating services.
                    Our top tier quality, positions us as the most trusted name when it comes to AC/Heating. We work with top brands, and offer extraordinary air conditioning and heating <strong className='text-red-600'>specials</strong>.
                </p>
            </div>

            <div className='overflow-hidden sm:max-h-[320px] md:max-h-auto md:w-1/2 2xl:max-h-[350px] 2xl:w-1/3'>
                <img className='object-scale-down sm:w-full drop-shadow-lg bg-center bg-cover' src={CrewPic} alt="Air Cool PPS Crew" />
            </div>
        </div>
    );
}