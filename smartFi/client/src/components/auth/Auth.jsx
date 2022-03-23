import React, {useState, useContext} from 'react';
import {AppContext} from '../../context/AppProvider';

// Components
import AuthSignup from './AuthSignup';
import AuthLogin from './AuthLogin';


// Input State
const initInputs = {email: '', username: '', password: ''};

export default function Auth() {

    // Set Inputs
    const [input, setInput] = useState(initInputs);
    const [formType, setFormType] = useState(false);

    const {login, signup, errMsg, resetErr} = useContext(AppContext);

    // Handle Events
    const handleChange = e => {
        const {name, value}  = e.target;
        setInput(prevInput => ({...prevInput, [name]: value}));
    }
    const handleLogin = (e) => {
        e.preventDefault()
        login(input);
    }

    const handleSignup = e => {
        e.preventDefault();
        signup(input);
        console.log('Hello?')
    }

    const changeForm = () => {
        setFormType(prev => !prev);
        resetErr();
    }

    return(
        <div className='py-24 w-full bg-slate-900'>
            <div className='mb-20 h-1/2'>
                <div className='text-center px-5 text-white mb-4'>
                    <p className='text-2xl text-slate-200 font-bold mb-2'>A New Way to Finance</p>
                    <p className='text-sm text-slate-300'>Decentralized financing brought to your finger tips, brows, purchase, spend. All while using a decentralized blockchain.</p>
                </div>
                <img loading='lazy' src="https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" alt="" />
            </div>
            <div className='max-w-xs mx-auto'>
                {!formType ? 
                    <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                        <div className='mb-4'>
                            <p className='text-2xl text-center font-extrabold'>Sign Up and Become a Member</p>
                        </div>
                        <div>
                            <AuthSignup 
                                handleChange={handleChange}
                                handleSignup={handleSignup}
                                inputs={input}
                                errMsg={errMsg}
                            />
                        </div>
                        <p className='text-sm text-center mt-4 cursor-pointer' onClick={() => changeForm()}>Already a member?</p>
                    </div>

                :    

                    <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                        <div className='mb-4'>
                            <p className='text-2xl text-center font-extrabold'>Welcome back SmartFier</p>
                        </div>
                        <div>
                            <AuthLogin
                                handleChange={handleChange}
                                handleLogin={handleLogin}
                                inputs={input}
                                errMsg={errMsg}
                            />
                        </div>
                        <p className='text-sm text-center mt-4 cursor-pointer' onClick={() => changeForm()}>Not a Member?</p>
                    </div>
                }
            </div>
        </div>
    )
}