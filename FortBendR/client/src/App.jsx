import React, { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import {NavHashLink} from '@xzar90/react-router-hash-link'

import Home from './components/Home';
import NavBar from './components/NavBar';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function App() {

  // To top button fade out logic
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if(window.pageYOffset > 350) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [])

  return (
    <div className="antialiased  bg-white h-screen">
        {/* NavBar */}
        <NavBar />

        {/* Top Icon */}
        <NavHashLink smooth to='#top'>
          {
            isVisible && (
              <img className='ease-in-out bg-blueGray-200 drop-shadow-lg rounded-full p-2 right-0 bottom-0 mb-4 mr-3 fixed z-2' src="https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-up-arrows-those-icons-fill-those-icons.png"   alt='Top of page'/>
            )
          }
        </NavHashLink>
        
        {/* Site Routes */}
        <Routes>  
          <Route path='/' element={<Home />}/>
          <Route path='/ContactUs' element={<ContactUs />} />
        </Routes>

        {/* Footer */}
        <Footer />
    
    </div>
  );
}

