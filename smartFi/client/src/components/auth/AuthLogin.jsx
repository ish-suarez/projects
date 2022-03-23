import React from 'react';

export default function AuthLogin({
    handleChange,
    handleLogin, 
    errMsg,
    inputs: 
    {username, password}
}) {
    return(
        <form className='' onSubmit={handleLogin}>
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

            <div className='flex items-center justify-between'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button' >
                    Log In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="##">
                    Forgot Password?
                </a>
            </div>


        </form>
    )
}