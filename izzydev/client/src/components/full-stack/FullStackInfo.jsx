import React from "react";
import FullStackInfoCard from "./FullStackInfoCard";

export default function FullStackInfo() {
  // Fullstack Info
  const fullStackInfo = {
    frontend: {
      frontName: "Frontend",
      frontIcon:
        "https://img.icons8.com/dotty/65/000000/application-window.png",
      frontLanguages: [
        "HTML",
        "Javascript",
        "React.js",
        "Python",
        "Git",
        `API's`,
        "HTTP",
        "HTTPS",
        "Axios",
      ],
      frontInfo: `
    
            Front-end developments is used for showing off your services and information about what your business, 
            admin dashboards such as: inventory management, CMS, micro-services your company may need.`,
    },
    backend: {
      backName: "Backend",
      backIcon:
        "https://img.icons8.com/external-tal-revivo-solid-tal-revivo/65/000000/external-mining-process-cryptocurrency-on-a-backend-server-database-solid-tal-revivo.png",
      backLanguages: [
        "node.js",
        "express",
        "Mongodb",
        "postgresql",
        "mysql",
        "nginx",
        "ruby on rails"
      ],
      backInfo: `Backend development is code that runs in the background. It is what makes the machine tick.

                Your database connection happens back here along with other critical functionalities, functions and methods to be implemented 
                
                into the frontend for their development. This is just a snapshot of what a backend developer can do.`,
    },
  };

  const { frontName, frontLanguages, frontIcon, frontInfo } =
    fullStackInfo.frontend;

  const { backName, backLanguages, backIcon, backInfo } = 
    fullStackInfo.backend;

  return (
    <div id="FullStackInfo" className="px-5 pt-5 xl:px-20 2xl:px-56 mt-3">
      <h3 className="tracking-tighter text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-center font-extrabold text-purple-700">
        What is a Full Stack Web Developer?
      </h3>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-5 md:space-y-12 my-5">
        {/* FrontEnd info container */}
        <FullStackInfoCard
          name={frontName}
          languages={frontLanguages}
          icon={frontIcon}
          info={frontInfo}
        />
        
        {/* Backend info container */}
        <FullStackInfoCard
          name={backName}
          languages={backLanguages}
          icon={backIcon}
          info={backInfo}
        />
      </div>
    </div>
  );
}
