import React from "react";
import { NavHashLink } from "@xzar90/react-router-hash-link";
import "animate.css";

// Image
import Izzy from '../images/izzy.jpeg';

export default function Header() {
  return (
    <div className="w-full bg-white pt-10 2xl:px-56">
      <div className="flex flex-col md:flex-row items-center pb-10">
        <div className=" max-h-[300px] sm:max-h-[400px] h-[700px] 2xl:max-h-[700px] md:w-1/2 md:h-72 lg:h-[350px] xl:h-[450px] 2xl:h-[650px] overflow-hidden mb-3">
          <img
            loading="lazy"
            className="animate__animated animate__fadeInLeft lg:animate__fadeInLeft w-3/4 m-auto drop-shadow-xl"
            src={Izzy}
            alt="Izzy"
          />
        </div>

        <div className="animate__animated animate__fadeInRight md:w-1/2">
          <h3 className="tracking-tighter mb-1 text-4xl sm:text-5xl xl:text-6xl font-extrabold text-purple-700 ">
            Hector Suarez
          </h3>
          <span className="text-lg xl:text-xl text-blueGray-500">
            Full Stack Web Developer
          </span>
          <div className="mt-4 lg:mt-6">
            <NavHashLink
              smooth
              className="inline-flex items-center py-2 md:py-3 md:px-6 px-4 text-sm sm:text-md md:text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              to="/#ContactMe"
            >
              Hire Me
            </NavHashLink>
          </div>
        </div>
      </div>
    </div>
  );
}
