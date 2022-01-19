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
        <div className='2xl:flex 2xl:flex-row-reverse xl:mt-10 '>
            {/* AC unit Service and set up */}
            <div className='px-5 mb-5 mt-20 2xl:w-2/3 2xl:pl-24'>
                <div className='flex items-center mb-5'>
                    <img className='mr-5' src="https://img.icons8.com/ios/50/000000/central-air-conditioning.png" alt='Service icon'/>
                    <h4 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold mb-3'>Air Conditioners</h4>
                </div>
                <div className='sm:ml-20'>
                    <h3 className='text-md xl:text-2xl 2xl:text-3xl font-bold mb-2 leading-6'>Need service or looking for a new air conditioning system? </h3>
                    <p className='text-sm xl:text-lg 2xl:text-2xl xl:w-2/3 text-gray-500'>
                        Our technicians will work with you to ensure you and your family have comfortable summers for years to come. 
                        Having efficient air conditioning is becoming a necessity. Let us help you!
                    </p>

                </div>
            </div>

            <div className='sm:flex sm:items-center sm:justify-center 2xl:w-1/3 2xl:pl-40'>
                {residentialServices.map(({name, image}, i) => (
                    <div className='my-10 sm:my-2' key={i} >
                        <div class="max-w-xs mx-auto bg-white sm:bg-transparent rounded-xl p-5 drop-shadow-2xl m-2">
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
        </div>
    );
}