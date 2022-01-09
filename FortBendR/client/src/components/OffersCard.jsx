import React from 'react';

export default function OffersCard({offer, information, image}) {
    return(
        <div className='my-10 md:m-0' >
            <div class="max-w-md sm:max-w-sm mx-auto rounded-xl p-5 drop-shadow-2xl m-2 md:m-0">
                <div class='sm:px-10 flex items-center justify-around'>
                    <img  src={image} alt={`${offer} icon`} />
                    <div className=''>
                        <h3 class="font-extrabold text-center text-2xl">{offer}</h3>
                    </div>
                </div>
                <p className='text-sm text-gray-500 mt-2 text-center leading-6 sm:text-left sm:text-center sm:mt-5'> 
                    {information}
                </p>
            </div>
        </div>
    );
}