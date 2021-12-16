import React, {lazy, Suspense} from 'react';
import Spinner from './Spinner';

const Header = lazy(() => import('./Header'));
const WhyUs = lazy(() => import('./WhyUs'));
const Offers = lazy(() => import('./Offers'));
const AboutUs = lazy(() => import('./AboutUs'));
const Services = lazy(() => import('./Services'));
const ContactUs = lazy(() => import('./ContactUsForm'));

export default function Home() {

    return (
        <main className='w-screen'>
            <Header />
            <WhyUs />
                <Suspense fallback={<Spinner />} >
                    
                    <Offers />
                    <Services />

                </Suspense>
            <AboutUs />
            <ContactUs />

        </main>
    );
}