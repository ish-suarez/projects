import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { fontMatch } from '../../lib';

const navigationLinks = [
    {
        to: '/',
        linkName: 'Home'
    },
    {
        to: '/Portfolio',
        linkName: 'Portfolio'
    },
    {
        to: '/#AboutUs',
        linkName: 'About Us'
    },
    {
        to: '/#ContactUs',
        linkName: 'Contact Us'
    },

];

const positions = [
    {name: 'Full Stack Developer'},
    {name: 'Software Developer'},
    {name: 'Backend Developer'},
    {name: 'Frontend Developer'}

];


const NavLink = ({ to, children } )=> {
    return (
        <Link scroll href={to} as={to}>{ children }</Link>
    );
}

const MobileNav = ({ open, setOpen, position, pathname }) => {

    return (
        <div className={`z-20 py-4 fixed top-0 bg-zinc-300/80 left-0 w-full transform ${open ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className=" relative flex flex-col">
                <Link href='/#' as={'/#'} >
                    <div className='px-4 cursor-pointer w-9/12 flex flex-col text-xl font-semibold text-zinc-700'>
                        <span className="border-b-2 border-zinc-300 font-fullstack">Izzy Dev</span>
                        <span className={`text-sm ml-7 ${fontMatch(position.name)}`}>{position.name}</span>
                    </div>
                </Link>

                <div className="flex flex-col w-full py-2">
                    {
                        navigationLinks.map(({ to, linkName }, i) => (
                            <NavLink key={linkName} to={to}>
                                <p className={`${pathname === to ? 'hidden' : ''} font-fullstack cursor-pointer py-4 pl-7 text-zinc-800 transition duration-200 ease-in-out text-xl font-medium hover:text-zinc-100 hover:bg-zinc-300`} onClick={() => setTimeout(open => {setOpen(open)}, 100)}>{ linkName }</p>
                            </NavLink>
                        ))
                    }
                </div>
                
            </div>
        </div>
    )
}

export default function Navbar() {

    // NavBar set to be hidden when app is scrolled down and reappear when app is scrolled up
    const [ show, setShow ] = useState(true)
    const [ lastScrollY, setLastScrollY ] = useState(0)

    const controlNav = () => {
        if(typeof window !== 'undefined') {
            if(window.scrollY > lastScrollY) {
                setShow(false)
            } else {
                setShow(true)
            }

            setLastScrollY(window.scrollY)
        }
    }

    useEffect(() => {
        if(typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNav);

            return () => {
                window.removeEventListener('scroll', controlNav);
            }
        }
    }, [lastScrollY])

    // Cycle through Positions
    const [open, setOpen ] = useState(false);

    const [ position, setPosition ] = useState(positions[0]);
    const [ index, setIndex ] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => setIndex( i => (++i) % positions.length), 7000);
        return () => clearInterval(timerId)
    }, []);

    useEffect(() => {
        setPosition(positions[index]);
    }, [index])


    const { pathname } = useRouter()


    return (
        <nav className={` fixed bg-gray-50/30 backdrop-blur-sm ${open && 'bg-transparent'} ${!show && 'hidden'} w-full z-40 flex filter drop-shadow-md px-4 py-4 h-20 items-center
                        md:justify-between`}>
            <MobileNav pathname={pathname} position={position} open={open} setOpen={setOpen} />
            <Link className={``} href='/'>
                <div className={`font-fullstack cursor-pointer w-9/12 flex flex-col text-xl font-semibold text-zinc-700 
                                ${open ? 'hidden transition ease-in-out' : ''}
                                sm:w-1/2
                                md:w-2/5`}>
                    <span className="border-b-2 border-zinc-300">Izzy Dev</span>
                    <span className={`text-sm ml-7 ${fontMatch(position.name)}`}>{position.name}</span>
                </div>
            </Link>

            <div className='w-3/12 flex justify-end items-center float-right absolute right-5 cursor-pointer
                            sm:w-1/2 md:relative'>
                <div className="z-50 flex relative w-8 h-10 flex-col justify-around scale-75 items-center md:hidden" onClick={() => {
                        setOpen(!open)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-[2px] w-full bg-zinc-500 rounded-lg transform transition duration-300 ease-in-out ${open ? " text-zinc-400 rotate-45 translate-y-3.5" : ""}`} />
                        <span className={`h-[2px] w-full bg-zinc-500 rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                        <span className={`h-[2px] w-full bg-zinc-500 rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className='hidden md:flex md:items-start md:space-x-3 font-software absolute -top-9'>
                    {
                        navigationLinks.map(({ to, linkName }) => (
                            <NavLink key={linkName} to={to}>
                                <p className={`${pathname === to ? 'hidden' : ''} cursor-pointer text-white text-xs hover:text-zinc-500 transition duration-300 ease-in-out `}>{linkName}</p>
                            </NavLink>
                        ))
                    }
                </div>
            </div>
        </nav>
    )
}