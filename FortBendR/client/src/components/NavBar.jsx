import React, {useState} from 'react';
import {NavHashLink} from '@xzar90/react-router-hash-link';
import {Collapse} from 'react-collapse'
import Logo from '../icons/fb-logo.jpg';



export default function NavBar() {
    // Toggle Navbar
    const [nav, setNav] = useState(false);

    // nav Content
    const navigation = [
        {name: 'Services', toId: '/#Services'},
        {name: 'Why Us?', toId: '/#WhyUs'},
        {name: 'About Us', toId: '/#AboutUs'},
        {name: 'Partners', toId: '/#Partners'}
    ];
    


    return (
        <nav className='top-0 absolute z-50 w-screen antialiased border-t-4 border-red-500 bg-white'>
            <div className=' w-screen flex items-center justify-between py-2 xl:px-20 2xl:px-80'>
                <NavHashLink smooth to='/#' className='2xl:pl-8'>
                    <img className='w-28 h-18 pl-6' src={Logo} alt="Fort bend ra logo" />
                </NavHashLink>

                {/* svg icon */}
                <i onClick={() => setNav(!nav)} className='md:hidden fas fa-bars mr-5 text-gray-700 rounded-lg text-lg cursor-pointer' ></i>

                {/* Larger Screen Navigation */}
                <ul className='hidden md:visible md:flex text-blueGray-600 mx-5 space-x-8 lg:space-x-5 text-md'>
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
            </div>

            {/* Collapsed Navigation Content */}
            <Collapse  isOpened={nav}>
                <div className='w-full py-5 shadow-md ReactCollapse--collapse bg-gray-100 border-b-2 border-red-500'>
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
                                        className='hover:text-gray-400'
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