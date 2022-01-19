import React, {useState} from 'react';
import {NavHashLink} from '@xzar90/react-router-hash-link';
import {Collapse} from 'react-collapse'
import Logo from '../icons/ACPlogo.svg';

import {scrollTo} from './utils';

import NavBarLinks from './NavBarLinks';


export default function NavBar() {
    // Toggle Navbar
    const [nav, setNav] = useState(false);

    // NavLink Active
    const [active, setActive] = useState(false);

    // scroll Click 
    const handleScroll = id => scrollTo(id)

    // nav Content
    const navigation = [
        {name: 'Home', toId: '/#'},
        {name: 'Why Us?', toId: '/#WhyUs'},
        {name: 'About Us', toId: '/#AboutUs'},
        {name: 'Services', toId: '/#Residential'},
        {name: 'Contact Us', toId: '/#ContactUs'},
        {name: 'Gallery', toId: '/Gallery'},
        {name: 'Our Info', toId: '/ContactUs'}
    ]
    


    return (
        <nav className='top-0 fixed z-50 w-screen antialiased border-t-4 border-red-500 bg-white md:px-5'>
            <div className=' w-screen flex items-center justify-between py-4 2xl:px-80'>
                <NavHashLink smooth to='/#' >
                    <img className='w-24 pl-6' src={Logo} alt="Air Cool PPS Logo" />
                </NavHashLink>

                {/* svg icon */}
                <i onClick={() => setNav(!nav)} className=' md:hidden fas fa-bars mr-5 text-gray-700 rounded-lg text-lg cursor-pointer' ></i>
                
                {/* Larger Screen Navigation */}
                <ul className='hidden md:visible md:flex text-blueGray-600 mx-5 lg:space-x-5 text-md'>
                    {
                        navigation.map(({name, toId}, i) => <NavBarLinks key={i} name={name} toId={toId} /> )
                    }
                </ul>
            </div>


            <Collapse  isOpened={nav}>
                <div className='w-full py-5 shadow-md ReactCollapse--collapse bg-gray-100 border-b-2 border-blue-400'>
                    <ul className='relative'>
                        {
                            navigation.map(({name, toId}, i) => (
                                <li 
                                    key={i} 
                                    onClick={() => setNav(!nav)} 
                                    className='text-right pr-2 p-3 hover:bg-white'
                                >
                                    <NavHashLink
                                        smooth 
                                        to={toId}
                                        className={({isActive}) => isActive ? 'text-blue-500' : ''}
                                        >
                                        {name}
                                    </NavHashLink>
                                </li>  
                            ))
                        }
                    </ul>
                </div>

            </Collapse>
            
        </nav>
    )
}