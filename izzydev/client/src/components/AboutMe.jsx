import React from 'react';

export default function AboutMe() {
    return(
        <div className='md:w-1/2 2xl:w-3/4 2xl:px-40 xl:px-10 px-5 my-5'>
            <h3 className='text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-purple-700 my-3'>Who am I?</h3>
            <div>
                <p className='text-sm sm:text-lg md:leading-6 lg:leading-9 text-blueGray-700 2xl:w-3/4'>
                    Hello, nice to meet you, I am a 27 year old, a Full Stack Developer, experienced and educated
                    in numerous programming languages. 
                        <br></br>
                        <br></br>
                    Using those languages, I can solve problems using code, 
                    build modern apps and websites for businesses. 
                        <br></br>
                        <br></br>
                    It is a well known fact that businesses without an online presence are missing out.
                    Social media has helped that greatly but the overarching problem may still be there.
                    70-80% of people research a company online before visiting in-person or making a purchase.
                    It's also noted that 53% of people leave if your website does not load in 3 seconds. 
                    Roughly 60% of visitors will not stay on your website even if it's fast if it's not mobile responsive. 
                        <br></br>
                        <br></br>
                    Want to grow your business, make more sales? I can guide you through the process of building your own website
                    that is fast and mobile responsive to help you generate more income for your business.
                </p>
            </div>
        </div>
    );
}