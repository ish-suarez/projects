import React, {lazy} from 'react';

const OffersCard = lazy(() => import('./OffersCard'));

export default function Offers() {

    // Offer Array
    const services = [
        {
            offer: 'Tire Repair',
            information: 'Stuck on the road with a flat or in need of an emergency tire change? Give us a call. You can make an appointment for us to come out to you, at home or work.',
            image: 'https://img.icons8.com/ios/50/000000/flat-tire.png',
            source: 'icons8.com'
        },
        {
            offer: '24/7 Service Available',
            information: 'Roadside Service around the clock.',
            image: 'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-service-automobile-kiranshastry-lineal-kiranshastry.png',
            source: 'icons8.com'
        },
        {
            offer: 'Battery Services',
            information: 'We can give your battery a jump or we can supply you with a battery from our partners at Interstate Batteries supply us with the batteries your car needs. All at an affordable price.',
            image: 'https://img.icons8.com/dotty/80/000000/car-battery.png',
            source: 'icons8.com'
        },
        {
            offer: 'Vehicle Towing',
            information: 'Our partners at Roadlink Towing will get your vehicle towed where you need it.',
            image: 'https://img.icons8.com/external-itim2101-lineal-itim2101/64/000000/external-tow-truck-automotive-itim2101-lineal-itim2101.png',
            source: 'icons8.com'
        },
        {
            offer: 'Other Incidents',
            information: 'Have any other issues, contact us and we can help you.',
            image: 'https://img.icons8.com/external-those-icons-lineal-those-icons/48/000000/external-cone-construction-industry-those-icons-lineal-those-icons.png',
            source: 'icons8.com'
        },
        {
            offer: 'We Get Gas to You',
            information: 'We will get you some gas to keep you safely on the road.',
            image: 'https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-fuel-industry-kiranshastry-lineal-kiranshastry.png',
            source: 'icons8.com'
        }

    ]

    return(
        <div id='Services' className='pt-10'>
            <div className='mb-10'>
                <p className='text-3xl text-center font-semibold tracking-tight leading-10'>
                    <span className='text-red-600 font-extrabold'>Fort Bend Roadside Assistance</span> Services
                </p>
            </div>
            
            {/* Offer Card Map */}
            <div className='md:flex md:flex-wrap md:items-center md:justify-center my-5 xl:mx-28 2xl:mx-96'>
                {services.map(({offer, information, image}, i) => <OffersCard key={i} offer={offer} information={information} image={image} />)}
            </div>

        </div>
        
    );
}