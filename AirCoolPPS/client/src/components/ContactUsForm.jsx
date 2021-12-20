import React, {useState} from 'react';

export default function ContactUs() {


    // Use State Hook for input and Initial State
    const initialInput = {
        firstName: '',
        lastName: '',
        email: '',
        phone: parseInt() || '',
        message: ''

    };

    const [input, setInput] = useState(initialInput);

    // Handle Change for Contact Form
    const handelChange = e => {
        const {name, value} = e.target;
        setInput(prevInput => ({...prevInput, [name]: value}))
    };

    // Makes phone number in (xxx)xxx-xxxx format
    const normalizeInput = (value, previousValue) => {
        if (!value) return value;
        const currentValue = value.replace(/[^\d]/g, '');
        const cvLength = currentValue.length;
        
        if (!previousValue || value.length > previousValue.length) {
            if (cvLength < 4) return currentValue;
            if (cvLength < 7) return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3)}`;
            return `(${currentValue.slice(0, 3)}) ${currentValue.slice(3, 6)}-${currentValue.slice(6, 10)}`;
        }
    };
    
    // Inputs for Form
    const {firstName, lastName, email, phone, message} = input;

    return(
        <div className='mt-20'>
            <h2 className='text-3xl font-extrabold text-center text-blue-500 mb-5'>
                Contact us
            </h2>
            <form className='text-center flex flex-col space-y-10 px-5 py-8'>
                <input className='rounded-md drop-shadow-lg focus:ring-0 focus:drop-shadow-xl border-0 focus:bg-gray-100 focus:drop-shadow-none focus:outline-none bg-blueGray-200 border py-3 px-2' 
                    name='firstName'
                    type="text"
                    onChange={handelChange}
                    value={firstName}
                    placeholder='First Name'
                    required
                />
                <input className='rounded-md drop-shadow-lg focus:ring-0 focus:drop-shadow-xl border-0 focus:bg-gray-100 focus:drop-shadow-none focus:outline-none bg-blueGray-200 border py-3 px-2' 
                    name='lastName'
                    type="text"
                    onChange={handelChange}
                    value={lastName}
                    placeholder='Last Name'
                    required
                />
                <input className='rounded-md drop-shadow-lg focus:ring-0 focus:drop-shadow-xl border-0 focus:bg-gray-100 focus:drop-shadow-none focus:outline-none bg-blueGray-200 border py-3 px-2'
                    name='email'
                    type="email"
                    onChange={handelChange}
                    value={email}
                    placeholder='example@youremail.com'
                    required
                />
                <input className='rounded-md drop-shadow-lg focus:ring-0 focus:drop-shadow-xl border-0 focus:bg-gray-100 focus:drop-shadow-none focus:outline-none bg-blueGray-200 border py-3 px-2'
                    name='phone'
                    type="tel"
                    onChange={handelChange}
                    value={normalizeInput(phone)}
                    placeholder='832-000-2222'
                    required
                />
                <textarea className='rounded-md drop-shadow-lg focus:ring-0 focus:drop-shadow-xl border-0 focus:bg-gray-100 focus:drop-shadow-none focus:outline-none bg-blueGray-200 border py-3 px-2'
                    name='message'
                    type='text'
                    onChange={handelChange}
                    value={message}
                    placeholder='Brief Message...'
                />

                <button className='focus:outline-none active:shadow-lg hover:bg-blue-600 bg-blue-500 py-3 rounded-lg text-gray-50'>
                    Send
                </button>
            </form>

        </div>
    )
}