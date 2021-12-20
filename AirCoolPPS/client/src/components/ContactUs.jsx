import React from 'react';

import ContactUsHeader from './ContactUsHeader';
import ContactInfo from './ContactInfo';
import ContactUsForm from './ContactUsForm';

export default function ContactUs() {


    return(
        <div className='mt-32'>
            <ContactUsHeader />
            <ContactInfo />
            <ContactUsForm />
        </div>
    );
}