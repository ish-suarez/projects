import React from 'react';
import {NavHashLink} from '@xzar90/react-router-hash-link';


export default function NavBarLinks({name, to}) {
    return(
        <li className='text-right pr-5 p-3 hover:bg-white' >
            <NavHashLink 
                to={to}
                smooth
                className='block text-lg 2xl:text-xl hover:text-gray-400'
            >
                {name}
            </NavHashLink>
        </li>
    )
}