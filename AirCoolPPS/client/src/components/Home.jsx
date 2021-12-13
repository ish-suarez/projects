import React, {lazy, Suspense} from 'react';
import Spinner from './Spinner';

const Header = lazy(() => import('./Header'));
const WhyUs = lazy(() => import('./WhyUs'));
const Offers = lazy(() => import('./Offers'));
const AboutUs = lazy(() => import('./AboutUs'));


export default function Home() {

    return (
        <main className='w-screen'>
            <Suspense fallback={<Spinner />} >
                
                <Header />
                <WhyUs />
                <Offers />
                <AboutUs />

            </Suspense>

        </main>
    );
}