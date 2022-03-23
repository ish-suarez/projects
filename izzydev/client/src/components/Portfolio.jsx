import React from 'react';

// Images 
import Fortbend from '../images/fortbendra.png';
import FortbendMobile from '../images/fortbendraMobile.png';
import AirCool from '../images/aircool.png';
import AirCoolMobile from '../images/aircoolMobile.png';
import Paskey from '../images/paskey.png';

//Components
import Footer from './Footer';


export default function Portfolio() {

    return(
        <div className='text-center px-5'>
            <h4 className='text-3xl text-purple-700 font-extrabold 2xl:text-5xl 2xl:font-extrabold' >Portfolio</h4>

            <div className='pb-10 px-5 m-auto lg:flex lg:justify-center lg:flex-wrap'>
                <div className='lg:w-1/2'>
                    <div className=' my-10 h-auto -space-y-40 lg:-space-y-60 2xl:w-full 2xl:flex 2xl:justify-center 2xl:-space-x-48 2xl:space-y-14 '>
                        <img loading='lazy' className=' lg:w-full 2xl:w-5/6 border shadow-2xl' src={Fortbend} alt="" />
                        <img loading='lazy' className='m-auto mr-5 w-1/4 drop-shadow-2xl' src={FortbendMobile} alt="" />
                    </div>
                    <a className='hover:text-gray-400 hover:text-lg' href='https://fortbendra.izzydev.com' target='_blank' rel='noreferrer'> Visit Me </a>
                </div>

                <div className='lg:w-1/2'>
                    <div className='my-10 h-auto -space-y-40 lg:-space-y-60 2xl:w-full 2xl:flex 2xl:justify-center  2xl:-space-x-48 2xl:space-y-14'>
                        <img loading='lazy' className='2xl:w-5/6 border shadow-2xl' src={AirCool} alt="" />
                        <img loading='lazy' className='m-auto mr-5 w-1/4 drop-shadow-2xl' src={AirCoolMobile} alt="" />
                    </div>
                    <a className='hover:text-gray-400 hover:text-lg' href='https://aircoolpps.izzydev.com' target='_blank' rel='noreferrer'> Visit Me </a>
                </div>

                <div className='lg:w-1/2 2xl:mt-20'>

                    <img loading='lazy' className='my-10 m-auto 2xl:w-5/6 2xl:m-auto drop-shadow-2xl' src={Paskey} alt="" />
                </div>
                
            </div>

            <Footer />
        </div>
    );
}