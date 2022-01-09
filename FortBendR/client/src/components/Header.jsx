import React, { useState } from 'react';
import {Collapse} from 'react-collapse';
import { NavHashLink } from '@xzar90/react-router-hash-link';

import FRAVehicle from '../images/FRAvehicle.jpeg';
import ContactInfo from './ContactInfo';

import { scrollTo } from './utils';


export default function Header() {

    const handleScroll = id => scrollTo(id);

    const [activeContact, setActiveContact] = useState(false);

    return (
        <header className='antialiased pt-24'>
            
            {/* Header Container */}
            <div className='px-5'>
                
                <div>
                    <h2 className='relative text-4xl tracking-tight leading-10 font-extrabold text-red-700' >
                        Fort Bend Roadside Assistance
                        <br></br>
                        <span className='text-3xl text-blueGray-600'>Your <span className='text-yellow-600'>Roadside Assistance Needs</span></span>
                    </h2>
                    <p className='mt-5 text-gray-500' >Serving Fort Bend counties, Greater Houston Area and surrounding counties. </p>
                </div>
                
                {/* Learn and Contact Scroll To Buttons */}
                <div className='flex flex-col sm:flex-row py-5 sm:space-x-3 space-y-3 sm:space-y-0 sm:items-center sm:justify-center '>
                    <div className=''>
                        <button 
                            onClick={() => setActiveContact(!activeContact)} 
                            className='w-full focus:outline-none active:shadow-lg hover:bg-red-600 bg-red-700 py-3 sm:py-4 sm:px-8 rounded-lg text-gray-50'
                            >
                                <NavHashLink smooth to='/#Info'>
                                    Contact Us Now
                                </NavHashLink>
                                
                        </button>
                        {/* Collapse Contact Info */}
                        <Collapse isOpened={activeContact}>
                            <ContactInfo />
                        </Collapse>
                    </div>
                    <div>
                        <button 
                            onClick={() => handleScroll({id: 'WhyUs'})} 
                            className='w-full focus:outline-none active:shadow-lg hover:bg-yellow-300 bg-yellow-500 py-3 sm:py-4 sm:px-8 rounded-lg text-yellow-700'
                            >
                                Learn More
                        </button>
                    </div>
                </div>
            </div>
            {/* Image Container */}
            <div>
                <img className='w-full sm:h-[35rem]' src={FRAVehicle} alt="Air Cool PPS Crew" />
            </div>
        </header>
    );
}