import { useContext} from 'react';
import {Navigate, Outlet, useLocation} from 'react-router-dom';
import {AppContext} from '../context/AppProvider';

const useAuth = () => {
    const {user} = useContext(AppContext);
    return user.token;
}

const ProtectedRoutes = () => {
    let location = useLocation();
    console.log(location.pathname, 'Location from protected route')
    let from = location.pathname || '/home'
    const isAuth = useAuth();

    return isAuth ? <Outlet /> : <Navigate to='/' replace state={{from}} />
}

export default ProtectedRoutes;