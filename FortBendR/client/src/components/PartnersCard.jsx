import React from 'react';

export default function PartnersCard({partner, image}) {
    return(
        <div className='mb-10' >
            <div class="max-w-md sm:max-w-xs mx-auto bg-white rounded-xl p-5 drop-shadow-2xl m-2">
                <div class='flex items-center justify-center'>
                    <img className='h-[85px]' src={image} alt={`${partner} icon`} />
                    <div class="">
                        <h3 class="font-semibold text-center text-lg">{partner}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}