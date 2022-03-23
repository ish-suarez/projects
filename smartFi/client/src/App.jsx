import React, { useContext, useEffect } from 'react';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import { AppContext } from './context/AppProvider';

// Components
import ProtectedRoutes from './protectedRoutes/ProtectedRoutes';
import Auth from './components/auth/Auth';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Footer from './components/footer/Footer';


export default function App() {
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.pathname 
  const home = from === '/' ? '/home' : from;
  console.log(home);
  
  const {logout, user} = useContext(AppContext);
  
  useEffect(() => {
    if (user.token){
      return navigate(home);
    }
  }, [user.token, navigate, home]);
  
  return (
    <div className=' h-screen'>

      {/* Navigation  */}
      <NavBar logout={logout} />
      
      {/* Log in sigh up */}
      <Routes>
        <Route path='/' element={<Auth />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}


