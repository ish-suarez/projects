import React from 'react';

import Logo2 from './images/2.png';

import Excavation from './images/excavationSites/ExcavatedSite.jpeg';

export default function Header() {
    return (
        <div className='w-screen flex'>
            {/* Name and Logo Container */}
            <div className='w-1/2 flex space-y-20 align-items-center justify-center space-x-14 m-auto'>

                <img className=' w-1/4 mt-14 rounded-full shadow-xl hidden lg:block' src={Logo2} alt="Paskey, Inc. Logo" />

                <div className='flex flex-col space-y-1'>
                    <p className='text-gray-500 text-md text-left'><strong className='text-yellow-600 text-3xl'>The Leaders</strong></p>
                    
                    <p className='text-gray-500 text-md'>in the</p>
                        
                    <p>
                        <strong className='text-yellow-600 text-3xl'>Civil Construction Industry</strong>
                    </p>

                    <p className='text-gray-500 text-md'>Serving the Greater Houston Area</p>

                </div>
            </div>

            {/* Picture Container */}
            <div className='w-1/2'>
                <img className='w-full object-cover object-center' style={{clipPath: `polygon(27% 0, 100% 0, 100% 100%, 0% 100%)`}} src={Excavation} alt="" />
            </div>
        </div>
    )
}