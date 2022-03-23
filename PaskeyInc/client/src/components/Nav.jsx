import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Logo from './images/Paskey, Inc..png';
import Logo2 from './images/2.png'

export default function Nav() {
    const [toggle, setToggle] = useState(false);

    return (
        
        <nav class="top-0 fixed z-50 w-screen flex flex-wrap items-center justify-between jus pt-3 shadow-xl navbar-expand-lg bg-gray-900 lg:bg-white">
            <div class="container mx-auto flex flex-wrap items-center justify-between shadow-xl">

                <div class="w-full px-6 relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start ">
                    <Link to='/Home' class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 pb-4 whitespace-nowrap uppercase">
                        <img className='w-28 h-28 rounded-md lg:hidden' src={Logo2} alt="Paskey, Inc. logo" />
                    </Link>

                    <button onClick={() => setToggle(!toggle)} class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                        <i class="text-white fas fa-bars"></i>
                    </button>
                </div>

                {   !toggle ? 

                        <div class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none hidden bg-blueGray-800">
                            <ul class="flex flex-col lg:flex-row list-none lg:mr-auto items-center">
                                <li class="inline-block text-center relative">
                                    <p className='text-sm font-bold text-yellow-600'>
                                        Welcome to Paskey!
                                    </p>
                                </li>
                                <li>
                                    <Link to='/' ><p class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"><i class="lg:text-blueGray-900 text-blueGray-400 fas fa-home text-xl leading-lg"></i><span class="lg:hidden inline-block ml-2">Home</span></p></Link>
                                </li>
                                <li>
                                    <Link to='/Gallery' ><p class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"><i class="lg:text-blueGray-900 text-blueGray-400 far fa-images text-2xl leading-lg"></i> <span class="lg:hidden inline-block ml-2">Gallery</span></p></Link>
                                </li>
                                <li class="flex items-center">
                                    <a class="lg:text-yellow-500 lg:hover:text-blueGray-200 text-blueGray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="https://www.facebook.com/Paskey-Incorporated-109443230591274/?ref=page_internal" rel="noreferrer" target="_blank"><i class="lg:text-blueGray-900 text-blueGray-400 text-xl fab fa-facebook text-lg leading-lg "></i><span class="lg:hidden inline-block ml-2">Find Us</span></a>
                                </li>
                                <li class="flex items-center">
                                    <p class="lg:text-white lg:hover:text-blueGray-400 text-blueGray-900 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"><i class="lg:text-blueGray-900 text-blueGray-400 fas fa-phone text-xl leading-lg"></i><span class="lg:hidden inline-block ml-2">281-941-9321</span></p>
                                </li>
                                <li class="flex items-center">
                                    <a class="lg:hover:text-blueGray-200 text-blueGray-400 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="https://www.linkedin.com" target="_blank"><i class="lg:text-blueGray-800 text-blueGray-900 fab fa-linkedin text-2xl leading-lg"></i><span class="lg:hidden inline-block ml-2">LinkedIn</span></a>
                                </li>
                            </ul>
                        </div>

                    :
                    
                    <div className='bg-gray-50 w-full'>
                        <ul className='float-right'>
                            <li>
                                <Link onClick={() => setToggle(!toggle)} to='/Home' ><p class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"><i class="lg:text-blueGray-200 text-blueGray-400 fas fa-home text-xl leading-lg"></i><span class="lg:hidden inline-block ml-2">Home</span></p></Link>
                            </li>
                            <li class="flex items-center">
                                <a onClick={() => setToggle(!toggle)} class="lg:text-yellow-500 lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="https://facebook.com" target="_blank"><i class="lg:text-blueGray-200 text-blueGray-400 text-2xl fab fa-facebook text-lg leading-lg "></i><span class="lg:hidden inline-block ml-2">Find Us</span></a>
                            </li>
                            <li class="flex items-center">
                                <p class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"><i class="lg:text-blueGray-200 text-blueGray-400 fas fa-phone text-xl leading-lg"></i><span class="lg:hidden inline-block ml-2">281-941-9321</span></p>
                            </li>
                            <li class="flex items-center">
                                <a onClick={() => setToggle(!toggle)} class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="https://www.linkedin.com" target="_blank"><i class="lg:text-blueGray-200 text-blueGray-400 fab fa-linkedin text-2xl leading-lg"></i><span class="lg:hidden inline-block ml-2">LinkedIn</span></a>
                            </li>
                        </ul>
                    </div>

                }
            </div>
            
        </nav>
    );
}