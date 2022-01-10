import React, {lazy}  from 'react';

// images
import CBA from '../images/cb-logo2.png';
import ksbj from '../images/ksbj.jpeg';
import RT from '../images/roadside-towing.jpeg';
import wraps from '../images/xwrapz.jpeg';
import interstate from '../images/interstate3.jpeg';

// Components
const PartnersCard = lazy(() => import('./PartnersCard'));

export default function Partners() {
    
    // Offer Array
    const partners = [
        {
            partner: '',
            image: CBA
        },
        {
            partner: '',
            image: interstate
        },
        {
            partner: '',
            image: RT
        },
        {
            partner: '',
            image: wraps
        },
        {
            partner: '',
            image: ksbj
        }
    ]

    return(
        <div id='Partners' className='lg:w-screen text-center lg:text-left pt-16 px-5 lg:flex lg:items-center'>
            {/* Partners Header */}
            <div className='lg:w-1/3 xl:pl-28'>
                <p className='uppercase text-md text-red-500 mb-2'>who are our partners?</p>
                <h2 className='font-extrabold text-2xl mb-3'>Meet Our Trusted Partners</h2>
                <p className='text-sm text-gray-600 mb-5'>We work with several local partners to provide you the services you need.</p>
            </div>
            
            {/* Partners container */}
            <div className='mt-10 sm:flex sm:flex-wrap sm:justify-center sm:items-center sm:space-x-10 lg:space-x-0 lg:w-2/3'>
                {partners.map(({partner, image}, i) => <PartnersCard key={i} partner={partner} image={image} />)}
            </div>
        </div>
    );
}