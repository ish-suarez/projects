import React from 'react';

export default function PartnersCard({partner, image}) {
    return(
        <div className='mb-10 md:w-2/5 lg:w-2/6' >
            <div class=" mx-auto rounded-xl p-5">
                <div class=' flex items-center justify-center'>
                    <img className='h-[85px]' src={image} alt={`${partner} icon`} />
                    <div class="">
                        <h3 class="font-semibold text-center text-lg">{partner}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}