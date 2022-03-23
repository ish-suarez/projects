import React, {useState, createContext, useEffect} from 'react';
import {auth, userApi} from '../api';

export const AppContext = createContext();


userApi.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

export default function AppProvider(props) {

    // Set User State && Error State and Handling
    const appState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token'),
        errMsg: ''
    }
    const [userState, setUserState] = useState(appState);
    const authErr = errMsg => setUserState(prevState => ({...prevState, errMsg}));
    const resetErr = () => setUserState(prevState => ({...prevState, errMsg: ''}));

    const signup = (credentials) => {
        auth.post(`/signup`, credentials)
            .then(res => {
                console.log(res)
                const {user, token} = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prevState => ({...prevState, user, token}))
            })
            .catch(err => authErr(err.response.data.errMsg))
    }

    // Functions to Gain Access to Server and Database
    const login = (credentials) => {
        auth.post(`/login`, credentials)
            .then(res => {
                const {user, token} = res.data
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', token)
                setUserState(prevState => ({...prevState, user, token}));                
            })
            .catch(err => authErr(err.response.data.errMsg));
    }

    const logout = (userId) => {
        auth.put(`/logout/${userId}`)
            .then(() => {
                localStorage.removeItem('user')
                localStorage.removeItem('token')
                setUserState({ user: {}, token: '' })
            })
            .catch(err => authErr(err.response.data.errMsg))
    }
    

    const getUserData = (userId) => {
        userApi.get(`/user/${userId}`)
            .then(res => setUserState(prevState => ({...prevState, user: res.data})))
            .catch(err => err.response.data.errMsg)
    }

    useEffect(() => {
        getUserData(appState.user._id)
    }, [appState.user._id])  

    const editPersonalInfo = (updates, userId) => {
        userApi.put(`/user/${userId}`, updates)
            .then(res => {
                const user = res.data;
                localStorage.setItem('user', JSON.stringify(user));
                const userUpdates = res.data.profile;
                console.log(userUpdates, 'profile should be updated');
                setUserState(prevState => ({...prevState, user: {...prevState.user, profile: userUpdates }}));
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const editAddressInfo = (updates, userId) => {
        userApi.put(`/user/${userId}`, updates)
            .then(res => {
                const user = res.data;
                localStorage.setItem('user', JSON.stringify(user));
                const userUpdates = res.data.profile;
                console.log(userUpdates, 'address should be updated');
                setUserState(prevState => ({...prevState, user: {...prevState.user, profile: userUpdates}}))
            })
    }

    return (
        <AppContext.Provider value={{...userState, signup, login, logout, resetErr, editPersonalInfo, editAddressInfo}}>
            {props.children}
        </AppContext.Provider>
    )
}