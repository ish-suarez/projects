import React from 'react';
import Picture2 from './images/Curtis_Phone_730.jpeg';


export default function Services() {
    return (
        <div className='w-screen flex mt-5'>

            <div className='w-1/2 flex flex-col items-center justify-center'>

                    {/* Service Heading */}
                    <div>
                        <p className='text-lg text-yellow-600'><strong className='text-yellow-600 text-3xl' >WHAT DO WE DO?</strong></p>
                        <p className='text-2xl mt-3 text-gray-500'>Services</p>
                    </div>
                    
                    {/* Service Description */}
                    <div>
                        <div className='mt-6 flex space-x-4 items-center mr-5'>
                            <i class="fas fa-drafting-compass text-blueGray-100 bg-yellow-500 text-3xl p-2 ml-16 rounded-md"></i>
                            <p className='text-xl'>Land Plotting and Design</p>
                        </div>

                        <div className='mt-6 flex space-x-4 items-center'>
                            <i class="fas fa-road bg-yellow-500 text-blueGray-100 text-3xl p-2 ml-16 rounded-md"></i>
                            <p className='text-xl'>Road Development</p>
                        </div>

                        <div className='mt-6 flex space-x-4 items-center'>
                            <img className="bg-yellow-500 text-blueGray-100 text-3xl p-2 ml-16 rounded-md" src="https://img.icons8.com/external-wanicon-lineal-wanicon/35/ffffff/external-excavator-construction-wanicon-lineal-wanicon.png" alt='excavator'/>
                            <p className='text-xl'>Excavation</p>
                        </div>
                    </div>
                    

                
            </div>
            
            <img style={{clipPath: 'polygon(100% 0, 100% 53%, 100% 100%, 26% 100%, 4% 0)'}} className='w-1/2' src={Picture2} alt="" />

        </div>
    );
}