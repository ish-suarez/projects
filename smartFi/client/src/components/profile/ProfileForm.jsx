import React from 'react';

export default function ProfileForm({inputs: {firstName, lastName, phone}, handleProfileEdit, handleChange, normalizeInput}) {


    const inputData = [
        {
            label: 'First Name',
            type: 'text',
            name: 'firstName',
            value: firstName,
            placeholder: 'First Name'
        },
        {
            label: 'Last Name',
            type: 'text',
            name: 'lastName',
            value: lastName,
            placeholder: 'Last Name'
        },{
            label: 'Phone',
            type: 'text',
            name: 'phone',
            value: normalizeInput(phone),
            placeholder: '###-###-####'
        },
    ]

    return (
        <div>
            <p className='py-5 text-center text-2xl font-semibold text-neutral-900'>Personal Information</p>
            <form className='text-center flex flex-wrap justify-center items-center border-b-2 pb-4'>
                <div className='text-center flex flex-col space-y-3 flex-wrap justify-center items-center py-2 px-4'>
                    {
                        inputData.map((item, i) => (
                            <div key={i} className=''>
                                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='firstName'>
                                    {item.label}
                                </label>
                                <input className='shadow appearance-none border rounded w-3/4 py-2 px-3 text-center text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    type={item.type}
                                    name={item.name}
                                    value={item.value}
                                    onChange={handleChange}
                                    placeholder={item.placeholder}
                                />
                            </div>
                        ))
                    }
                </div>
                <button onClick={handleProfileEdit} className='text-sm py-3 my-3 bg-slate-800 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='button'>Submit Changes</button>
            </form>
        </div>
    )
}