import React from 'react';

// Images
import HeaderPic from '../images/coding.jpeg';
import Coding from '../images/coding2.jpeg';

// Components
import Header from './Header';
import FullStackInfo from './FullStackInfo';
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import Footer from './Footer';

export default function Home() {
    return(
        <main className=''>

            {/* Header Component */}
            <Header />

            {/* What is a FSWD Component*/}
            <FullStackInfo />
            
            {/* About Me Container */}
            <div className='md:flex md:items-center md:justify-center my-5 lg:my-10'>

                {/* images that change depending on screen size */}
                <div className='md:hidden max-h-[170px] sm:max-h-[280px] md:w-1/2 overflow-hidden'>
                    <img className='' src={HeaderPic} loading='lazy' alt="Coding" />
                </div>
                <div className='hidden md:block md:w-1/2 xl:h-[760px] xl:h-auto 2xl:w-1/4 overflow-hidden'> 
                    <img className='' src={Coding} loading='lazy' alt="" />
                </div>

                {/* About Me Component */}
                <AboutMe />
            </div>

            {/* Contact Me Component */}
            <ContactMe />

            {/* Footer */}
            <Footer />
        </main>
    );
}