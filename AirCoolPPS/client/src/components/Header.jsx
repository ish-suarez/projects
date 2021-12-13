import React from 'react';

import CrewPic from '../images/ACPcrew.jpeg'


export default function Header() {
    return (
        <header className='antialiased pt-36'>
            
            {/* Header Container */}
            <div className='px-5 mb-5'>
                
                <div>
                    <h2 className='relative text-4xl tracking-tight leading-10 font-extrabold text-blueGray-800' >
                        Air Cool P.P.S.
                        <br></br>
                        <span className='text-3xl'>Your <span className='text-blue-500'>air conditioning</span> and <span className='text-red-500'>heating</span> solution.</span>
                    </h2>
                    <p className='mt-5 text-gray-500' >Serving the Greater Houston Area and surrounding counties.</p>
                </div>
                
                {/* Learn and Contact Buttons */}
                <div className='flex flex-col py-5 space-y-3'>
                    <button className='focus:outline-none active:shadow-lg hover:bg-blue-600 bg-blue-500 py-2 rounded-lg text-gray-50'>Contact Us</button>
                    <button className='focus:outline-none active:shadow-lg hover:bg-blue-300 bg-blue-200 py-2 rounded-lg text-blue-500'>Learn More</button>
                </div>
            </div>

            {/* Image Container */}
            <div>
                <img src={CrewPic} alt="Air Cool PPS Crew" />
            </div>

        </header>
    );
}