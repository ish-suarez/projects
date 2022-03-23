import React from 'react';

export default function Map() {
    return (
        <div className='w-screen mt-20'>
            <iframe className='m-auto' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.9184718619936!2d-95.03012628450332!3d29.664140082022463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x863f605b5ad9f0c1%3A0x252e92a0674fb109!2sPaskey%20Inc!5e0!3m2!1sen!2sus!4v1636930252251!5m2!1sen!2sus" width="700" height="400" style={{border: 0}} title='Paskey, Inc.' allowFullScreen="" loading="lazy"></iframe>
        </div>
    );
}