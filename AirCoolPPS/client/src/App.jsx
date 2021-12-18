import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/NavBar';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className=" bg-white h-screen">
        <NavBar />
        {/* NavBar */}
        
        {/* Site Routes */}
        <Routes>  
          <Route path='/' element={<Home />}/>
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/ContactUs' element={<ContactUs />} />
        </Routes>

        {/* Footer */}
        <Footer />
    
    </div>
  );
}

