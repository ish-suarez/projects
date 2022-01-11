import React from 'react';

export default function OffersCard({offer, information, image}) {
    return(
        <div className='my-10 md:m-0 lg:mx-auto 2xl:m-auto' >
            <div class="max-w-md sm:max-w-sm lg:max-w-xs mx-auto rounded-xl p-5 drop-shadow-2xl m-2 md:m-0">
                <div class='w-2/3 m-auto sm:w-auto sm:px-10 flex items-center justify-around'>
                    <img  src={image} alt={`${offer} icon`} />
                    <div className=''>
                        <h3 class="font-extrabold text-center text-2xl sm:text-3xl">{offer}</h3>
                    </div>
                </div>
                <p className='text-sm sm:text-lg text-gray-500 mt-2 text-center leading-6 sm:text-left sm:text-center sm:mt-5'> 
                    {information}
                </p>
            </div>
        </div>
    );
}