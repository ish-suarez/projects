import React from 'react';

export default function NotableCard({name, image}) {
    return(
        <div className='flex flex-col justify-center items-center'>
            <img className='h-[100px]' src={image} alt={name} />
        </div>
    );
}