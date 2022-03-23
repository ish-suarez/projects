import React, {lazy, useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {NavHashLink} from '@xzar90/react-router-hash-link';


// Components
import NavBar from './components/NavBar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';


function App() {

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
    <div className='w-full h-full subpixel-antialiased'>
      {/* NavBar Component */}
      <NavBar />

      {/* Top Icon */}
      <NavHashLink smooth to='#Top'>
          {
            isVisible && (
              <img className='ease-in-out bg-blueGray-200 drop-shadow-lg rounded-full p-2 right-0 bottom-20 mb-4 mr-3 fixed z-2' src="https://img.icons8.com/external-those-icons-fill-those-icons/30/000000/external-up-arrows-those-icons-fill-those-icons.png"   alt='Top of page'/>
            )
          }
        </NavHashLink>

      {/* Pages */}
      <div className='mt-20'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Portfolio' element={<Portfolio />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
