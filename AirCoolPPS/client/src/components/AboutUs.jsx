import React from 'react';

export default function AboutUs() {
    return (
        <div className='container mb-10 mt-16 px-5'>

            <h3 className='uppercase text-md text-center tracking-tight leading-10 text-blue-500'>Who are we?</h3>
            <p className='text-2xl text-center tracking-tight mb-5 font-extrabold text-blueGray-800'> About us at Air Cool PPS</p>
            <p className='text-center text-sm tracking-tight leading-7 text-gray-500'>
                We are a <strong className='text-blue-600'>family-owned</strong> business in Texas. Leading the market with more than 10 years of experience in air conditioning and heating services.
                Our top tier quality, positions us as the most trusted name when it comes to AC/Heating. We work with top brands, and offer extraordinary air conditioning and heating <strong className='text-red-600'>specials</strong>.
            </p>
        </div>
    );
}