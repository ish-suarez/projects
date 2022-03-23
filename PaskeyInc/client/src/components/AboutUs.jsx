import React from 'react';
import ExcavatedSite from './images/excavationSites/ExcavatedSite3.jpeg';


export default function AboutUs() {
    return (
        <div className='w-screen flex items-center mt-5'>

            <img className='w-1/2' style={{clipPath: 'polygon(90% 0, 77% 53%, 92% 100%, 0 100%, 0 0)'}} src={ExcavatedSite} alt="" />

            <div className='w-1/2'>
                <p className='text-lg text-yellow-600'><strong className='text-yellow-600 text-3xl' >WHO ARE WE?</strong></p>
                <p className='text-2xl mt-3 text-gray-500'>About Us</p>
                <p className='w-3/5 text-xl text-gray-800 mt-2'>We are leaders in civil construction. We pride our self in our commitment to our community. Building your city and ours.</p>

            </div>
        </div>
    )
}