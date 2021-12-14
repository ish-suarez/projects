import React, {useState} from 'react';

export default function ContactUs() {
    // Use State Hook for input
    const [input, setInput] = useState([]);

    // Handle Change for Contact Form
    const handelChange = e => {
        e.preventDefault();

    }
    return(
        <div>
            <h2 className='text-3xl font-extrabold text-center mb-5'>Contact us</h2>
            <form className='text-center flex flex-col space-y-10 px-5 border py-8'>
                <input className='rounded-md drop-shadow-md active:outline-none py-3' 
                    name='name'
                    type="text"
                    placeholder='Your Name'
                    required
                />
                <input className='rounded-md drop-shadow-md active:outline-none py-3'
                    name='email'
                    type="email"
                    placeholder='Your Email'
                    required
                />
                <input className='rounded-md drop-shadow-md active:outline-none py-3'
                    name='phone'
                    type="tel"
                    placeholder='832-000-2222'
                    required
                />
                <textarea className='rounded-md drop-shadow-md active:outline-none py-3'
                    name='message'
                    type='text'
                    placeholder='Brief Message...'
                />

                <button className='focus:outline-none active:shadow-lg hover:bg-blue-600 bg-blue-500 py-3 rounded-lg text-gray-50'>
                    Send
                </button>
            </form>

        </div>
    )
}