import React from 'react';
import Residential1 from '../images/ACPunit1.jpeg';
import Residential2 from '../images/ACPunit2.jpeg';

export default function Residential() {

    const images = [Residential1, Residential2]

    return(
        <div>
            <div className='px-5 text-center mb-10'>
                <h2 className='text-3xl font-extrabold text-grayBlue-600' >Our Services</h2>
            </div>
            <div className='px-5 mb-5'>
                <div className='flex items-center mb-5'>
                    <img className='mr-5' src="https://img.icons8.com/ios/64/000000/service.png" alt='Service icon'/>
                    <h4 className='text-xl font-extrabold mb-3'>Residential</h4>
                </div>
                <h3 className='text-md font-bold mb-2 leading-6'>Keep your family comfortable and healthy during hot and cold days.</h3>
                <p className='text-sm text-gray-500'>
                    Air Cool PPS' skilled technicians will repair and service your air conditioner.
                    We provide expert replacement and installation of heating and cooling systems for your home's comfort. 
                    We are available 24 hours, we are ready to keep your home heating and cooling system working its best.
                </p>
            </div>
            
            {images.map(image => (<img className='my-10 drop-shadow-xl' src={image} alt='Air conditioning residential service' />))}

        </div>
    )
}