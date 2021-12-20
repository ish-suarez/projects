import React from 'react';

import ContactMailto from './contactMailto';

export default function ContactInfo() {

    const contactInfo = {
        numbers: [ '713-474-6953', '832-745-0369', '832-758-6353', '832-343-8623' ],
        email: 'info@aircoolpps.com'
    }
    return(
        <div>

            <div className='border bg-blueGray-100 px-5 py-4 mb-14 rounded-lg shadow-lg'>
                <h3 className='text-center text-red-500 text-3xl font-bold mb-5'>
                    Give us a call
                </h3>

                <ul className='mb-5'>
                    {
                        contactInfo.numbers.map((number, i) => (
                            <li key={i} className='w-3/5 m-auto text-center mb-3 text-lg tracking-wider border-b-2' >
                                <a className='text-blueGray-500 hover:text-gray-400' href={`tel:+1-${number}`}>{number}</a>
                            </li>
                        ))
                    }
                </ul>
                
            </div>
            {/* Email Contact Info */}
            <div className='px-5'>
                <div className='flex space-x-4 mb-5 tracking-tight'>
                    <img 
                        src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-email-email-flatart-icons-outline-flatarticons.png"
                        alt='Email'
                    />

                    <h3 className='text-xl font-bold text-blueGray-600 hover:text-gray-400'>
                        <ContactMailto label={`Email Us at - ${contactInfo.email}`} mailto={`mailto:${contactInfo.email}`} />
                    </h3>

                </div>

                <p className='text-sm mb-5 tracking-tight text-blueGray-500'>
                    WE WILL RESPOND TO ANY EMAILS WITHIN 24 HOURS 
                    AND ARE ALWAYS AVAILABLE TO SPEAK DURING BUSINESS HOURS.
                </p>

                <p className='text-sm mb-5 tracking-tight text-blueGray-500'>
                    Please contact us with any questions you may have. 
                    We can answer any preliminary inquiries and set up a meeting
                    to uncover what kind air conditioning system you are hoping
                    to buy or begin the free evaluation process.
                </p>

            </div>
        </div>
    );
}