import React from 'react';

import ContactMailto from './contactMailto';

export default function ContactInfo() {

    const contactInfo = {
        numbers: [
            {
                number: ['281-713-4567'],
                image: 'https://img.icons8.com/ios/40/000000/outgoing-call.png'
            }
        ],
        email: [
            {
                address: 'info@fortbendra.com',
                image: 'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-email-email-flatart-icons-outline-flatarticons.png'
            }
        ]
    }
    return(
        <div className='mt-5'>

            <div className='border bg-blueGray-100 px-5 py-4 mb-2 rounded-lg shadow-lg'>
                <ul className='py-3'>
                    {/* Phone Info */}
                    {
                        contactInfo.numbers.map(({number, image}, i) => (
                            <li key={i} className='w-max px-4 m-auto mb-1 tracking-wider hover:bg-white hover:rounded-md ' >
                                
                                <a className='flex flex-col justify-center items-center text-red-600 font-extrabold active:text-red-500 hover:text-gray-400 text-xl' href={`tel:+1-${number}`}>
                                    <span>
                                        <img className='my-2' src={image} alt="" />
                                    </span>
                                    <span>
                                        {number}
                                    </span>
                                </a>
                            </li>
                        ))
                    }
                    {/* Email Contact Info */}
                    {
                        contactInfo.email.map(({address, image}, i) => (
                            <div className='flex flex-col' key={i}>
                                
                                <h3 className='text-xl text-center font-bold'>
                                    <ContactMailto image={image} label={`For Further Inquires Please Email Us  ${address}`} mailto={`mailto:${address}`} />
                                </h3>
                            </div>
                        ))
                    }
                </ul>
                
            </div>
        </div>
    );
}