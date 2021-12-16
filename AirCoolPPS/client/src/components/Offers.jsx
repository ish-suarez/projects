import React from 'react';

export default function Offers() {

    // Offer Array
    const offers = [
        {
            offer: 'Free Estimates',
            information: ' We promise to deliver on-time, fair estimates, high-quality installations, custom duct fabrication, prompt repair and maintenance services to every customer',
            image: 'https://img.icons8.com/external-wanicon-lineal-wanicon/64/000000/external-cost-business-model-canvas-wanicon-lineal-wanicon.png',
            source: 'icons8.com'
        },
        {
            offer: '24/7 service available',
            information: ' Our highly trained and experienced technicians can make sure your house is comfortable all year and with 24 hour service available you can have peace of mind knowing that Air Cool PPS has you covered no matter what!',
            image: 'https://img.icons8.com/external-parzival-1997-flat-parzival-1997/64/000000/external-help-financial-advisor-parzival-1997-flat-parzival-1997.png',
            source: 'icons8.com'
        },
        {
            offer: ' 0% interest and 100% financing available',
            information: ' Air Cool PPS is your source for quality, friendly, and dependable heating and air conditioning service in Houston area',
            image: 'https://img.icons8.com/dotty/65/000000/duration-finance.png',
            source: 'icons8.com'
        },
        {
            offer: ' 40% Off',
            information: 'Installation, cleaning and repair.',
            image: 'https://img.icons8.com/external-justicon-lineal-justicon/64/000000/external-discount-black-friday-justicon-lineal-justicon-1.png',
            source: 'icons8.com'
        }
    ]

    return(
        <div className='mb-32 mt-16'>
            {offers.map((offer, i) => (
                <div className='mb-10' key={i} >
                    <div class="max-w-xs mx-auto bg-white rounded-xl p-5 drop-shadow-2xl m-2">
                        <div class='mt-10 flex items-center space-x-3'>
                            <img src={offer.image} alt={`${offer.offer} icon`} />
                            <div class="">
                                <h3 class="font-semibold text-center text-2xl">{offer.offer}</h3>
                            </div>
                        </div>
                        <p className='text-sm text-gray-500 mt-2 text-center leading-6'> 
                            {offer.information}
                        </p>
                    </div>
                </div>
            ))}
            
        </div>
        
    );
}