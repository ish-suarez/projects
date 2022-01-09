import React from 'react';

export default function residentialServices() {
    
    // Residential service Object
    const residentialServices = [
        {
            name: 'Attic System',
            image: 'https://img.icons8.com/dotty/80/000000/central-air-conditioning.png'
        },
        {
            name: 'Ductless System',
            image: 'https://img.icons8.com/carbon-copy/100/000000/air-conditioner.png'
        },
        {
            name: 'Single and Two Stage Systems',
            image: 'https://img.icons8.com/external-wanicon-lineal-wanicon/90/000000/external-air-conditioner-home-electronic-wanicon-lineal-wanicon.png'
        }
    ]
    return(
        <div>
            {/* AC unit Service and set up */}
            <div className='px-5 mb-5 mt-20'>
                <div className='flex items-center mb-5'>
                    <img className='mr-5' src="https://img.icons8.com/ios/50/000000/central-air-conditioning.png" alt='Service icon'/>
                    <h4 className='text-xl font-extrabold mb-3'>Air Conditioners</h4>
                </div>
                <div className='sm:ml-[70px]'>
                    <h3 className='text-md font-bold mb-2 leading-6'>Need service or looking for a new air conditioning system? </h3>
                    <p className='text-sm text-gray-500'>
                        Our technicians will work with you to ensure you and your family have comfortable summers for years to come. 
                        Having efficient air conditioning is becoming a necessity. Let us help you!
                    </p>

                </div>
            </div>

            {residentialServices.map(({name, image}, i) => (
                <div className='mb-10 mt-10' key={i} >
                    <div class="max-w-xs mx-auto bg-white rounded-xl p-5 drop-shadow-2xl m-2">
                        <div class='mt-10 mb-5'>
                            <img className='mx-auto' src={image} alt={`${name} icon`} />
                        </div>
                        <div class="">
                            <h3 class="font-semibold text-center text-2xl">{name}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}