import React from 'react';

import CrewPic from '../images/ACPcrew.jpeg';

import { scrollTo } from './utils';


export default function Header() {

    const handleScroll = id => scrollTo(id)

    return (
        <header className='antialiased pt-36 mb-10 md:flex md:flex-row-reverse md:items-center md:justify-center'>
            
            {/* Header Container */}
            <div className='px-5 mb-5 md:w-1/2 xl:pr-20 2xl:px-24'>
                
                <div>
                    <h2 className='sm:text-center md:text-left sm:text-5xl 2xl:text-6xl relative text-4xl tracking-tight leading-10 font-extrabold text-blueGray-800' >
                        Air Cool P.P.S.
                        <br></br>
                        <span className='text-3xl xl:text-4xl 2xl:text-5xl'>Your <span className='text-blue-500'>air conditioning</span> and <span className='text-red-500'>heating</span> solution.</span>
                    </h2>
                    <p className='sm:text-center xl:text-xl 2xl:text-2xl  md:text-left mt-5 text-gray-500' >Serving the Greater Houston Area and surrounding counties.</p>
                </div>
                
                {/* Learn and Contact Buttons */}
                <div className='hidden flex flex-col sm:flex-row sm:justify-center sm:items-center sm:space-y-0 sm:space-x-3 py-5 space-y-3'>
                    <button onClick={() => handleScroll({id: 'ContactUs'})} className='sm:w-1/4 focus:outline-none active:shadow-lg hover:bg-blue-600 bg-blue-500 py-3 rounded-lg text-gray-50'>Contact Us</button>
                    <button onClick={() => handleScroll({id: 'WhyUs'})} className='sm:w-1/4 focus:outline-none active:shadow-lg hover:bg-blue-300 bg-blue-200 py-3 rounded-lg text-blue-500'>Learn More</button>
                </div>
            </div>

            {/* Image Container */}
            <div className='overflow-hidden sm:max-h-[400px] 2xl:max-h-[600px] md:w-1/2'>
                <img className='sm:m-auto sm:w-3/4 md:w-full' src={CrewPic} alt="Air Cool PPS Crew" />
            </div>

        </header>
    );
}