import React from 'react';

export default function Thermostat() {
    return(
        <div>
            {/* AC unit Service and set up */}
            <div className='px-5 mb-20 mt-20'>
                <div className='flex items-center mb-5'>
                    <img className='mr-5' src="https://img.icons8.com/external-itim2101-lineal-itim2101/64/000000/external-air-conditioner-internet-of-things-itim2101-lineal-itim2101.png" alt='Service icon'/>
                    <h4 className='text-xl font-extrabold mb-3'>Thermostats</h4>
                </div>
                <h3 className='text-md font-bold mb-2 leading-6'>Looking to service your existing thermostat or upgrade to an smart thermostat? </h3>
                <p className='text-sm text-gray-500'>
                    Take control of your comfort with an automated and programmable
                    thermostat that will make your life easier and save you money.
                </p>
            </div>

        </div>
    );
}