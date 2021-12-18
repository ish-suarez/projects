import React from 'react';

import ContactMailto from './contactMailto';

export default function ContactUs() {

    const contactInfo = {
        numbers: [ '713-474-6953', '832-745-0369', '832-758-6353', '832-343-8623' ],
        email: 'info@aircoolpps.com'
    }

    return(
        <div className='mt-32'>
            {/* Service Header */}
            <div className='px-5 mb-12'>
                <h2 className='relative text-4xl tracking-tight leading-10 font-extrabold text-blueGray-800' >
                    <span className='text-3xl'>Your <span className='text-blue-500'>air conditioning</span> and <span className='text-red-500'>heating</span> services.</span>
                </h2>
                    <p className='mt-5 text-gray-500' >Serving the Greater Houston Area and surrounding counties.</p>
            </div>

            {/* Map Element */}
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d687505.7415960568!2d-95.39427513670609!3d29.850480369415997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sair%20cool%20pps!5e0!3m2!1sen!2sus!4v1639797079727!5m2!1sen!2sus"
                className='w-screen h-[27rem]' 
                title='Air Cool P.P.S.'  
                allowfullscreen="" 
                loading="lazy">
            </iframe>

            

            {/* Contact Info */}
            <div>
                <h3>
                    Give us a call
                </h3>

                <ul>
                    {
                        contactInfo.numbers.map((number, i) => (
                            <li key={i}>{number}</li>
                        ))
                    }
                </ul>

                <h3>
                    <ContactMailto label={`Email Us at - ${contactInfo.email}`} mailto={`mailto:${contactInfo.email}`} />
                </h3>
            </div>
            


            
        </div>
    );
}