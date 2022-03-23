import React from 'react';

export default function AuthSignup({
    handleChange,
    handleSignup, 
    errMsg,
    inputs: 
    {username, password, email}
}) {
    return(
        <form className='' onSubmit={handleSignup}>
            {/* Email */}
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                    Email
                </label>
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type='text'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    placeholder='Email'
                    required
                />
            </div>

            {/* Username */}
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
                    Username
                </label>
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type='text'
                    name='username'
                    value={username}
                    onChange={handleChange}
                    placeholder='Username'
                    required
                />
            </div>


            {/* Password */}
            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                    Password
                </label>
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    placeholder='********'
                    minLength='8'
                    required
                />
            </div>

            {/* Error Message */}
            <p className='text-red-600'>{errMsg}</p>
            
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="button">
                Sign Up
            </button>

        </form>
    )
}