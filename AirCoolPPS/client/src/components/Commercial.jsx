import React from 'react';

import Commercial1 from '../images/ACPworking3.jpeg';
import Commercial2 from '../images/ACPworking5.jpeg';

export default function Commercial() {

    const commercialImages = [Commercial1, Commercial2];

    return(
        <div id='Commercial' className='pt-20 '>
            <div className='px-5 mb-5 2xl:w-1/2 2xl:m-auto'>
                <div className='flex items-center mb-5'>
                    <img className='mr-5' src="https://img.icons8.com/external-others-phat-plus/64/000000/external-conservation-ecology-outline-others-phat-plus.png" alt='Conservation building'/>
                    <h4 className='text-xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold mb-3'>Commercial</h4>
                </div>
                <div className='sm:ml-20'>
                    <h3 className='text-md xl:text-3xl font-bold mb-2 leading-6'>
                        We can reduce your business' energy costs by providing your business with the best air conditioning and heating solutions.
                    </h3>
                    <p className='text-sm xl:text-xl 2xl:text-2xl text-gray-500'>
                        Let's work together to provide you the quality services you expect and deserve. 
                        We will schedule the work you need when it is convenient for your business.
                        Call us for all your business needs: heating, maintenance, filters, ventilation, refrigeration and air conditioning requirements.
                    </p>

                </div>
            </div>

            <div className='mb-10 mt-20' >
                    <div class="max-w-xs xl:max-w-lg mx-auto bg-white rounded-xl p-5 drop-shadow-2xl m-2">
                        <div class=' flex mt-10 mb-5'>
                            <img className='mx-auto' src='https://img.icons8.com/ios/65/000000/low-price.png' alt='lower price' />
                            <div class="">
                                <h3 class="font-semibold text-center text-2xl xl:text-3xl uppercase">Lower your energy cost</h3>
                            </div>
                        </div>
                    </div>
                </div>

            <div className='sm:flex sm:justify-center sm:items-center' >
                {commercialImages.map((image, i) => <img key={i} className='my-10 drop-shadow-xl sm:mx-4 sm:w-1/3 object-down-size' src={image} alt='Commercial Work' />)}

            </div>
            
        </div>
    );
}