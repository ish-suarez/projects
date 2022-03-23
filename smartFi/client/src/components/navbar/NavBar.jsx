import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import Collapse from 'react-collapse';
import { AppContext } from '../../context/AppProvider';


// Components
import Links from './Links';
import Logo from '../../images/smartfi_logo.jpg';

export default function NavBar({logout}) {

    const {user} = useContext(AppContext);
    const token = user.token;
    const id = user._id;
    const logUserOut = async (id, nav) => {
        await logout(id);
        setNav(!nav);
    }

    const time = new Date().getHours();
    const dayMessage = time => `Good ${time < 12 ? 'Morning' : time < 18 ? 'Afternoon' : 'Evening'}`;

    // -------------- Nav Content
    const [nav, setNav] = useState(false);
    // Navigation Links
    const navigation = [
        {name: 'Home', to: '/home', style: !token ? 'hidden' : ''},
        {name: 'Profile', to: '/profile', style: !token ? 'hidden' : ''},
        {name: 'Accounts', to: '#', style: !token ? 'hidden' : ''},
        {name: 'Log In', to: '/', style: token ? 'hidden' : ''},
        {name: 'Contact Us', to: '#'}
    ];

    return(
        <nav id='Top' className='top-0 absolute z-50 w-full antialiased border-t-4 border-slate-900 bg-stone-900'>
            
            {/* Logo Container */}
            <div className='w-full flex items-center justify-between py-3 px-5 xl:px-20 2xl:px-80'>
                {
                    !user.token ? 
                        <Link to='/home' className='flex items-center 2xl:pl-8'>
                            <img className='w-10' src={Logo} alt="Smartfi Logo" />
                            <h1 className='font-bold text-lg text-neutral-50 hover:text-gray-500'>martFi</h1>
                        </Link>
                    : 
                        <Link to='/home' className='2xl:pl-8'> 
                            <h2 className='font-bold text-lg text-neutral-50 hover:text-gray-500' >{dayMessage(time)}, {user.username}</h2>
                        </Link> 
                }
                <button 
                    onClick={() => setNav(!nav)}
                    className='md:hidden rounded-lg text-white text-lg'
                >
                    <i className="fas fa-bars "></i>
                </button>

                {/* Larger Screen Navigation */}
                <ul className='hidden text-center md:visible md:flex text-blueGray-600 mx-5 space-x-8 lg:space-x-5 text-md'>
                    {
                        navigation.map(({name, to, style}, i) => <li key={i} className={`${style} text-slate-200`}><Links name={name} to={to} /></li>  )
                    }
                    {token && <li className='block text-center w-full text-slate-200'><p className='py-4 block cursor-pointer' onClick={() => logUserOut(id, nav)} >Log Out</p></li>}

                </ul>
            </div>


            {/* small screen navigation */}
            <Collapse isOpened={nav}>
                <ul className='w-full py-3 flex flex-col justify-center items-center md:hidden shadow-md  ReactCollapse--collapse relative bg-slate-50 border-b-2 border-slate-700' >    
                    {navigation.map(({name, to, style}, i) => (
                        <li 
                            key={i}
                            onClick={() => setNav(!nav)}
                            className={`block m-auto text-center w-full ${style}`}
                        >
                            <Links name={name} to={to} />
                        </li>
                    ))}
                    {token && <li className='block m-auto text-center w-full cursor-pointer'><p className='py-4 block' onClick={() => logUserOut(id, nav)} >Log Out</p></li>}
                </ul>
            </Collapse>
        </nav>
    )
}