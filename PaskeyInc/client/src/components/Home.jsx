import React, {lazy} from 'react';

const Header = lazy(() => import('./Header'));
const AboutUS = lazy(() => import('./AboutUs'));
const Services = lazy(() => import('./Services'));
const Map = lazy(() => import('./MapContainer'));



export default function Home() {
    return (
        <div className=' mx-auto bg-gray-900 md:bg-gray-50 pt-14 pb-24 shadow-xl'>
            {/* Header for Home */}
            <Header />

            {/* Service Overview */}
            <AboutUS />

            {/* Services */}
            <Services />

            {/* Map */}
            <Map />

        </div>
    );
}


