import React, {lazy} from 'react';

// Pictures
import Amazon from '../images/Amazon.png';
import Enterprise from '../images/enterpriseLogo.png';
import MetroStar from '../images/metroStar.jpeg';
import Martins from '../images/martinsLogo.jpeg';

// Component 
const NotableCard = lazy(() => import('./NotableCard'));


export default function NotableService() {
    // Notable Companies
    const companies = [
        {
            name: 'Amazon',
            image: Amazon
        },
        {
            name: 'Enterprise',
            image: Enterprise
        },
        {
            name: 'Metro Star',
            image: MetroStar
        },
        {
            name: 'Martins Pastry',
            image: Martins
        }
    ]

    return (
        <div className='px-5 pt-10'>
            {/* Header */}
            <div>
                <h2 className='uppercase text-center text-red-600'>who have we provided service to?</h2>
                <p className='text-center text-2xl my-3 font-extrabold'>Notable Services</p>
                <h3 className='text-sm text-gray-500'>We have a solid reputation serving local businesses such as: Amazon, Enterprise, Metro Star and Martin's Famous Pastry Shoppe.</h3>
            </div>

            {/* Card */}
            <div className='py-10 sm:flex sm:flex-wrap sm:space-y-5 sm:items-center sm:justify-center'>
                {companies.map(({name, image}, i) => <NotableCard key={i} image={image} name={name} />)}
            </div>
        </div>
    );
}