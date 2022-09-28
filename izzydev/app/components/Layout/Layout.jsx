import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('./Navbar'), {ssr: false})
const Footer = dynamic(() => import('./Footer'), {ssr: false})

export default function Layout({children}) {
    const websiteTitle = 'Izzy Dev'
    return(
        <div className='z-40 flex flex-col' style={
            {
                backgroundImage: `url('/images/head-image.avif')`,
                objectFit: 'cover'
            }}>
            <Head>
                <title>{websiteTitle}</title>
                <meta name="og:title" content={websiteTitle} />
            </Head>
            <Navbar />
            <main className='z-0' >
                {children}
            </main>
            <Footer />

        </div>
    )
}