import React from 'react';


import Picture2 from './images/Curtis_Phone_730.jpeg';
import Picture4 from './images/excavator1.jpeg';
import Cypress from './images/cypressWork/cypressWork1.jpeg';


export default function Gallery() {
    return (
        <div>
            {/* Pictures */}
            <div className='w-2/3 flex flex-wrap justify-center px-20 bg-white p-5 space-x-2 space-y-2 m-auto mt-20'>

                <img className='w-72' src={Cypress} alt="" />

                {/* <img className='w-72' src={Picture1} alt="" />  */}
                <img className='w-72' src={Picture2} alt="" />
                
                <img className='w-72 ' src={Picture4} alt="" />
                {/* <img className='w-72' src={Picture5} alt="" /> */}
            </div>
        </div>
    );
}
