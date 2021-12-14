import React, {useState} from 'react';

export default function ContactUs() {


    // Use State Hook for input and Initial State
    const initialInput = {
        name: '',
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

    const [name, email, phone, message] = input
    return(
        <div>
            <h2 className='text-3xl font-extrabold text-center mb-5'>Contact us</h2>
            <form className='text-center flex flex-col space-y-10 px-5 border py-8' onSubmit={}>
                <input className='rounded-md drop-shadow-md active:outline-none py-3' 
                    name='name'
                    type="text"
                    value={name}
                    onChange={handelChange}
                    placeholder='Your Name'
                    required
                />
                <input className='rounded-md drop-shadow-md active:outline-none py-3'
                    name='email'
                    type="email"
                    value={email}
                    onChange={handelChange}
                    placeholder='example@youremail.com'
                    required
                />
                <input className='rounded-md drop-shadow-md active:outline-none py-3'
                    name='phone'
                    type="tel"
                    value={normalizeInput(phone)}
                    onChange={handelChange}
                    minLength='14'
                    maxLength='14'
                    placeholder='832-000-2222'
                    required
                />
                <textarea className='rounded-md drop-shadow-md active:outline-none py-3'
                    name='message'
                    type='text'
                    value={message}
                    onChange={handelChange}
                    placeholder='Brief Message...'
                />

                <button className='focus:outline-none active:shadow-lg hover:bg-blue-600 bg-blue-500 py-3 rounded-lg text-gray-50'>
                    Send
                </button>
            </form>

        </div>
    )
}