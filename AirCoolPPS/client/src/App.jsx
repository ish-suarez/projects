import React, {lazy, Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import Spinner from './components/Spinner';

const NavBar = lazy(() => import('./components/NavBar'));
const Home = lazy(() => import('./components/Home'))

export default function App() {
  return (
    <div className=" bg-white h-screen">
      <Suspense fallback={<Spinner />} >
        {/* NavBar */}
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
        {/* Page Header */}



      </Suspense>
    
    </div>
  );
}

