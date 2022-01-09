import React from 'react';

import Partners from './Partners';

export default function Footer() {
    return(
        <div className='text-center'>
            {/* Facebook and Instagram Icons */}
            <div className='flex items-center justify-center px-5 mb-4'>
                <a href='#' target='_blank' rel='noreferrer'>
                    <img
                        className=''
                        src="https://img.icons8.com/fluency/30/000000/facebook-new.png"
                        alt='Facebook'
                    />
                </a>

                <a href='#' target='_blank' rel='noreferrer'>
                    <img 
                        src="https://img.icons8.com/fluency/30/000000/instagram-new.png"
                        alt='Instagram'
                    />
                </a>
            </div>

            <div>
                <p className='text-sm text-gray-500' >Fort Bend Roadside Assistance © 2021</p>
            </div>

            <div className='mt-16 pb-10'>
                <p className='text-sm text-gray-400'>Demo by <a href="https://izzydev.com" target='_blank' rel='noreferrer'>izzydev.com</a> © 2021 </p>
                <a className='text-xs text-gray-300' href="https://icons8.com/" target='_blank' rel='noreferrer'> Icon Source</a>
            </div>
        </div>
    );
}