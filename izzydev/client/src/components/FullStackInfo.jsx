import React from 'react';
import FullStackInfoCard from './FullStackInfoCard';
import FullStackLanguage from './FullStackLanguage';

export default function FullStackInfo() {

    // Fullstack Info
    const fullStackInfo = {
        frontend: {
            frontName: 'Front-end',
            frontIcon: 'https://img.icons8.com/dotty/65/000000/application-window.png',
            frontLanguages: ['HTML', 'Javascript', 'React.js', 'Git', `API's`, 'HTTP', 'Axios'],
            frontInfo: `This is what your your device receives.
            
            The website you are looking at now is the "front-end".
            Front-end developments is used for showing off your services and information about your business, 
            admin dashboards for you to manage inventory, stock, etc.`
        },
        backend: {
            backName: 'Back-end',
            backIcon: 'https://img.icons8.com/external-tal-revivo-solid-tal-revivo/65/000000/external-mining-process-cryptocurrency-on-a-backend-server-database-solid-tal-revivo.png',
            backLanguages: ['node.js', 'express', 'Mongodb', 'postgresql', 'mysql', 'nginx'],
            backInfo: `This is the code running on the server. The server will get information back to the client (front-end).

            Backend code involves databases, RESTful API services, and many more things that does not get seen by the users of your website.
            
            Uses for a back-end would be storage of data, and things that need verified like user authentication.`
        }
    }

    const {frontName, frontLanguages, frontIcon, frontInfo} = fullStackInfo.frontend;

    const {backName, backLanguages, backIcon, backInfo} = fullStackInfo.backend;

    return(
        <div id='FullStackInfo' className='px-5 pt-5 xl:px-20 2xl:px-56 mt-3'>
            <h3 className='tracking-tighter text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center font-extrabold text-purple-700'>What is a Full Stack Web Developer?</h3>

            <div className='flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-12 my-5'>
                {/* FrontEnd info container */}
                <FullStackInfoCard name={frontName} languages={frontLanguages} icon={frontIcon} info={frontInfo} />
                
                {/* Backend info container */}
                <FullStackInfoCard name={backName} languages={backLanguages} icon={backIcon} info={backInfo} />
            </div>
        </div>
    );
}