import React, {lazy, useRef} from 'react';
import Spinner from './Spinner';

const Header = lazy(() => import('./Header'));
const WhyUs = lazy(() => import('./WhyUs'));
const Offers = lazy(() => import('./Offers'));
const AboutUs = lazy(() => import('./AboutUs'));
const Services = lazy(() => import('./Services'));
const ContactUs = lazy(() => import('./ContactUsForm'));


export default function Home() {

    const components = [
        {
            c: <Header />,
            title: 'Header'
        },
        {
            c: <WhyUs />,
            title: 'WhyUs'
        },
        {
            c: <Offers />,
            title: 'Offers'
        },
        {
            c: <AboutUs />,
            title: 'AboutUs'
        },
        {
            c: <Services />,
            title: 'Services'
        },
        {
            c: <ContactUs />,
            title: 'ContactUs'
        }

    ];

    // navRef
    const navRef = useRef(null);
    const navReveal = useRef([]);
    navReveal.current = [];

    const addToRef = (ref) => {
        if(ref && !navReveal.current.includes(ref)){
            navReveal.current.push(ref);
        }
        console.log(navReveal.current);
    }

    return (
        <main>
            {
                components.map(({c, title}, i) => (
                    <div 
                        key={i} 
                        id={title}
                        title={title}
                        ref={addToRef}
                        >
                        {c}
                    </div>
                ))
            }
        </main>
        
    );
}