import React from 'react';

export default function NotableCard({name, image}) {
    return(
        <div className='flex flex-col flex-wrap justify-center items-center sm:w-1/2 lg:w-1/2 '>
            <img className='h-[100px]' src={image} alt={name} />
        </div>
    );
}