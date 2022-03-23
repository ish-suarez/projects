import React from 'react';
import FullStackLanguage from './FullStackLanguage';

export default function FullStackInfoCard({name, languages, icon, info}) {
    return(
        <div className='md:w-1/2 md:px-2 flex flex-col flex-wrap justify-center items-center'>
            <div className='flex justify-center items-center mb-5'>
                <img src={icon} loading='lazy' alt="Dev Icon" />
                <h4 className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold my-4 text-blueGray-600'>{name}</h4>
            </div>
            <div className='flex flex-wrap justify-center items-center mb-3'>
                {languages.map((language, i) => <FullStackLanguage key={i} language={language} /> )}
            </div>
            <p className='leading-7 text-sm 2xl:text-lg sm:text-md md:text-lg 2xl:w-3/4 text-blueGray-600 text-center'>{info}</p>
        </div>
    );
}