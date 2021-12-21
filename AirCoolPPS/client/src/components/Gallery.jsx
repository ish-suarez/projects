import React from 'react';

import crew from '../images/ACPcrew1.jpeg';
import crew1 from '../images/ACPcrew.jpeg';
import unit1 from '../images/ACPunit1.jpeg';
import unit2 from '../images/ACPunit2.jpeg';
import unit3 from '../images/ACPunit3.jpeg';
import working1 from '../images/ACPworking1.jpeg';
import working2 from '../images/ACPworking2.jpeg';
import working3 from '../images/ACPworking3.jpeg';
import working4 from '../images/ACPworking4.jpeg';
import working5 from '../images/ACPworking5.jpeg';




export default function Gallery() {
    // images array
    const images = [
        {
            image: crew,
            info: 'Air Cool PPS Crew'
        },
        {
            image: crew1,
            info: 'Air Cool PPS Crew'
        },
        {
            image: unit1,
            info: 'Bryant Units'
        },
        {
            image: unit2,
            info: 'Bryant Units'
        },
        {
            image: unit3,
            info: 'Air Cool PPS Crew Working'
        },
        {
            image: working1,
            info: 'Unit Installation'
        },
        {
            image: working2,
            info: 'AC Unit Being Lifted'
        },
        {
            image: working3,
            info: 'Commercial Installation'
        },
        {
            image: working4,
            info: 'Lift Being Prepped'
        },
        {
            image: working5,
            info: 'Rise to the Sky'
        }

    ]

    return(
        <div className='pt-40'>
            <h4 className='text-3xl font-extrabold text-center'>Air Cool PPS Crew and Memorable Moments</h4>

            {
                images.map(({image, info}, i) => (
                    <div key={i} className='my-10'>
                        <img className='w-full' src={image} alt={info} />
                        <p className='text-gray-400 text-right pr-4 mx-auto'>{info}</p>
                    </div>
                ))
            }
        </div>
    )
}