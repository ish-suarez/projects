import React, {lazy, Suspense} from 'react';

import Spinner from './Spinner';
import Residential1 from '../images/ACPunit1.jpeg';
import Residential2 from '../images/ACPunit2.jpeg';


const AcServices = lazy(() => import('./acServices'));
const Thermostat = lazy(() => import('./Thermostat'));

export default function Residential() {

    const images = [Residential1, Residential2]

    

    return(
        <div id='Residential' className='pt-20'>
            {/* Residential Overview */}
            <div className='px-5 text-center  mb-10'>
                <h2 className='text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-grayBlue-600' >Our Services</h2>
            </div>

            <div className='2xl:flex'>
                <div className='px-5 mb-5 2xl:w-2/3 2xl:pl-80'>
                    <div className='flex items-center mb-5'>
                        <img className='mr-5' src="https://img.icons8.com/ios/64/000000/service.png" alt='Service icon'/>
                        <h4 className='text-xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold mb-3'>Residential</h4>
                    </div>
                    <div className='sm:ml-20'>
                        <h3 className='text-md xl:text-2xl 2xl:text-3xl font-bold mb-2 leading-6'>Keep your family comfortable and healthy during hot and cold days.</h3>
                        <p className='text-sm xl:text-lg 2xl:text-2xl text-gray-500'>
                            Air Cool PPS' skilled technicians will repair and service your air conditioner.
                            We provide expert replacement and installation of heating and cooling systems for your home's comfort. 
                            We are available 24 hours, we are ready to keep your home heating and cooling system working its best.
                        </p>

                    </div>
                </div>
                

                {/* Home AC units */}
                <div className='sm:flex sm:items-center sm:justify-center 2xl:w-1/3'>
                    {images.map((image, i) => (
                        <div className='overflow-hidden max-h-[600px] sm:max-h-[430px]'>
                            <img key={i} className='my-10 drop-shadow-xl sm:m-auto w-full sm:w-3/4' src={image} alt='Air conditioning residential service' />
                        </div>
                    ))}
                </div>

            </div>
            

            <Suspense fallback={<Spinner />} >
                <AcServices />
                <Thermostat />
            </Suspense>
            
            

        </div>
    );
}