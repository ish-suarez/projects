import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import {Collapse} from 'react-collapse'
import Logo from '../icons/ACPlogo.svg';



export default function NavBar() {
    // Toggle Navbar
    const [nav, setNav] = useState(false);


    // nav Content
    const navigation = [
        {name: 'Home', to: '/'},
        {name: 'Residential', to: '/Residential'},
        {name: 'Commercial', to: '/Commercial'},
        {name: 'Video', to: '/Video'}, 
        {name: 'Contact', to: '/Contact'}
    ]

    

    return (
        <nav className='top-0 fixed z-50 w-screen antialiased border-t-4 border-red-500 bg-white'>
            <div className=' w-screen flex items-center justify-between py-4'>
                <img className='w-24 pl-6' src={Logo} alt="Air Cool PPS Logo" />

                {/* svg icon */}
                <i onClick={() => setNav(!nav)} className='fas fa-bars mr-5 text-gray-700 rounded-lg text-lg cursor-pointer' ></i>
            </div>

            <Collapse  isOpened={nav}>
                <div className='w-full py-5 shadow-md ReactCollapse--collapse bg-gray-100 border-b-2 border-blue-400'>
                    <ul className='relative'>
                        {navigation.map(({name, to, i}) => (<li className='text-right pr-2 p-3 hover:bg-white'><NavLink  className={({isActive}) => isActive ? 'text-right p-3 text-blue-500' : 'text-right p-3 hover:bg-white'}  to={to} key={i} id={name} >{name}</NavLink></li>  ))}
                    </ul>
                </div>

            </Collapse>
            
        </nav>
    )
}