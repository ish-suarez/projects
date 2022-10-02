import Link from 'next/link'
import { useEffect, useState } from 'react';
import { fontMatch } from '../lib';

const positions = [
  {name: 'Full Stack Developer'},
  {name: 'Software Developer'},
  {name: 'Backend Developer'},
  {name: 'Frontend Developer'}

];


const Header = () => {
  const [ position, setPosition ] = useState(positions[0]);
  const [ index, setIndex ] = useState(0)

  useEffect(() => {
    const timerId = setInterval(() => setIndex( i => (++i) % positions.length), 7000);
    return () => clearInterval(timerId);
  }, [])

  useEffect(() => {
    setPosition(positions[index])
  }, [index])

  return  (
    <header className='relative pt-40 pb-20  px-5 w-full
                      sm:pl-10 
                      md:pl-20 md:py-32
                      lg:py-42
                      xl:pl-60'>  
      <div className={`relative font-aton flex flex-col max-w-sm

                      `}>
        <p className='text-5xl text-zinc-200 h-52'>
          Hi, I am <span className='font-name text-zinc-50 text-4xl'>Hector</span>, and I am a <br></br><span className={`${fontMatch(position.name)}`}>{position.name}</span>.
        </p>
        <Link href={'/ContactMe'}>
          <button className=' transition duration-500 ease-in-out text-xl text-zinc-100 self-end bg-neutral-200/40 px-3 py-1 rounded-sm 
                            hover:scale-105 hover:shadow-md hover:shadow-neutral-100 hover:text-zinc-50 hover:bg-neutral-300/40
                            sm:mr-20'>
            Contact me
          </button>

        </Link>
      </div>
    </header>
  )
}

const MyOverview = () => {
  return (
    <div className='text-zinc-50 flex flex-col font-aton relative px-9 pb-40 space-y-6 max-w-md
                    sm:max-w-lg sm:px-5
                    md:mr-20
                    lg:w-2/3 
                    xl:pr-20 xl:max-w-xl xl:w-3/4
                    2xl:max-w-2xl 2xl:pr-40'>
      <p>Hello, I was born and raised in Aibonito, Puerto Rico. I enjoy building cool stuff for the internet. Web development is a passion of mine that allows me to challenge myself to be better than I was yesterday.</p>
      <p>A quote inspired me to start developing, and it goes, "A mind is like a parachute, it only works when open".</p>
    </div> 
  )
}


export default function Home() {
  return (
    <div className='flex flex-col items-center h-full py-5
                    sm:items-end sm:h-screen
                    '>
        <Header />
        <MyOverview />
    </div>
  )
}
