import React from 'react';

export default function Thermostat() {
    return(
        <div className='2xl:w-1/2 2xl:m-auto'>
            {/* AC unit Service and set up */}
            <div className='px-5 mb-20 mt-20 '>
                <div className='flex items-center mb-5'>
                    <img className='mr-5' src="https://img.icons8.com/external-itim2101-lineal-itim2101/64/000000/external-air-conditioner-internet-of-things-itim2101-lineal-itim2101.png" alt='Service icon'/>
                    <h4 className='text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold mb-3'>Thermostats</h4>
                </div>
                <div className='sm:ml-20'>
                    <h3 className='text-md xl:text-3xl 2xl:text-4xl font-bold mb-2 leading-6'>Looking to service your existing thermostat or upgrade to an smart thermostat? </h3>
                    <p className='text-sm xl:text-2xl text-gray-500'>
                        Take control of your comfort with an automated and programmable
                        thermostat that will make your life easier and save you money.
                    </p>

                </div>
            </div>

        </div>
    );
}