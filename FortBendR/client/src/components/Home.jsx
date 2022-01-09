import React, {lazy, useRef} from 'react';

const Header = lazy(() => import('./Header'));
const WhyUs = lazy(() => import('./WhyUs'));
const Offers = lazy(() => import('./Offers'));
const Partners = lazy(() => import('./Partners'));
const AboutUs = lazy(() => import('./AboutUs'));
const NotableService = lazy(() => import('./NotableService'));


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
            c: <Partners />, 
            title: 'Partners'
        },
        {
            c: <NotableService />,
            title: 'NotableService'
        }
    ];

    // navRef
    const navReveal = useRef([]);
    navReveal.current = [];

    const addToRef = (ref) => {
        if(ref && !navReveal.current.includes(ref)){
            navReveal.current.push(ref);
        }
        console.log(navReveal.current);
    }

    return (
        <main className='pt-10'>
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