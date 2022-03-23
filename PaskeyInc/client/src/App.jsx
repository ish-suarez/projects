import React, {Suspense, lazy} from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.css';

const Nav = lazy(() => import('./components/Nav'));
const Home = lazy(() => import('./components/Home'));
const Gallery = lazy(() => import('./components/Gallery'));
const Footer = lazy(() => import('./components/Footer'));


export default function App() {

  return (
    <div className="h-screen bg-gray-100 font-serif subpixel-antialiased">
      <Suspense fallback={<div>Loading...</div>}>
        {/* Nav Component*/}
        <Nav />

        {/* Routes Container */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Gallery' element={<Gallery />} />
        </Routes>

        {/* Footer Component */}
        <Footer />

      </Suspense>
    </div>
  );
}

