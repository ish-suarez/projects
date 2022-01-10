import React from 'react';
import {NavHashLink} from '@xzar90/react-router-hash-link';



export default function Footer() {
    
    // nav Content
    const navigation = [
        {name: 'Services', toId: '/#Services'},
        {name: 'Why Us?', toId: '/#WhyUs'},
        {name: 'About Us', toId: '/#AboutUs'},
        {name: 'Partners', toId: '/#Partners'}
    ];


    return(
        <div className='text-center'>
            {/* Larger Screen Navigation */}
            <ul className='flex flex-wrap space-x-5 justify-center items-center text-blueGray-600  text-lg my-10'>
                    {navigation.map(({name, toId}, i) => (
                        <li key={i}>
                            <NavHashLink
                                smooth 
                                to={toId}
                                className='hover:text-gray-400'
                            >
                                {name}
                            </NavHashLink>
                        </li>
                    ))}
                </ul>

            {/* Facebook and Instagram Icons */}
            <div className='flex items-center justify-center px-5 mb-4'>
                <a href='#' target='_blank' rel='noreferrer'>
                    <img
                        className=''
                        src="https://img.icons8.com/fluency/30/000000/facebook-new.png"
                        alt='Facebook'
                    />
                </a>

                <a href='#' target='_blank' rel='noreferrer'>
                    <img 
                        src="https://img.icons8.com/fluency/30/000000/instagram-new.png"
                        alt='Instagram'
                    />
                </a>
            </div>

            <div>
                <p className='text-sm text-gray-500' >Fort Bend Roadside Assistance © 2022</p>
            </div>

            <div className='mt-16 pb-10'>
                <p className='text-sm text-gray-400'>Demo by <a href="https://izzydev.com" target='_blank' rel='noreferrer'>izzydev.com</a> © 2022 </p>
                <a className='text-xs text-gray-300' href="https://icons8.com/" target='_blank' rel='noreferrer'> Icon Source</a>
            </div>
        </div>
    );
}