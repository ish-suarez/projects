import React, {useState} from 'react';
import {NavHashLink} from '@xzar90/react-router-hash-link';



export default function NavBarCard({name, toId}) {
    // nav useState
    const [nav, setNav] = useState(false);

    return(
        <li
            className='text-right pr-5 p-3 hover:bg-white'
        >
            <NavHashLink
                smooth 
                to={toId}
                className='block text-lg 2xl:text-xl hover:text-gray-400'
            >
                {name}
            </NavHashLink>
        </li>
    );
}