import React from 'react';


// Images 
import vehicleWork from '../images/vehicleWork.jpeg';

export default function AboutUs() {
    return (
        <div className='pt-10 lg:flex lg:items-center'>
            {/* Filler Picture */}
            <div className='sm:max-h-[250px] lg:max-h-[500px] lg:max-w-[550px] overflow-hidden my-10'>
                <img src={vehicleWork} alt='Working on car' />
            </div>

            {/* About Us info */}
            <div className='px-5 xl:px-20 xl:pr-52'>
                <h3 className='uppercase text-md text-center lg:text-left tracking-tight leading-10 text-red-500'>Who are we?</h3>
                <p className='text-2xl text-center lg:text-left tracking-tight mb-5 font-extrabold text-blueGray-800'> About <span className='text-red-600'>Fort Bend Roadside Assistance</span></p>
                <p className='lg:text-left  text-sm  tracking-tight leading-7 text-gray-500'>
                    Fort Bend Roadside Assistance is a small, family owned and operated 
                    business started by Chris. Years of service and experience gets him the highest praise from his customers.
                    <br></br>
                    <br></br>
                    Honest practices and reliable service. That is what we offer at Fort Bend Roadside Assistance. 
                    Working with dependable partners to get you the services you need.
                </p>
            </div>

        </div>
    );
}