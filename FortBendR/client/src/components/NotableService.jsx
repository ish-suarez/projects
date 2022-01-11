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
        <div className=' px-5 pt-10 lg:w-screen lg:flex lg:flex-row-reverse lg:items-center'>
            {/* Header */}
            <div className='lg:w-1/2 lg:pl-10 xl:px-24 xl:pr-48'>
                <h2 className='uppercase text-center sm:text-lg lg:text-left text-red-600'>see who trusted our services</h2>
                <p className='text-center sm:text-3xl lg:text-left text-2xl my-3 font-extrabold'>Notable Customers</p>
                <h3 className='text-sm text-center sm:text-lg lg:text-left lg:m-auto text-gray-500'>We have a solid reputation serving local businesses such as: Amazon, Enterprise, Metro Star and Martin's Famous Pastry Shoppe.</h3>
            </div>

            {/* Card */}
            <div className='lg:w-1/2 py-10 sm:flex sm:flex-wrap sm:space-y-5 lg:space-y-0 lg:justify-between sm:items-center sm:justify-center'>
                {companies.map(({name, image}, i) => <NotableCard key={i} image={image} name={name} />)}
            </div>
        </div>
    );
}