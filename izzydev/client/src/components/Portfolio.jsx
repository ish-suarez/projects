import React from "react";

// Images
import Fortbend from "../images/fortbendra.png";
import FortbendMobile from "../images/fortbendraMobile.png";
import AirCool from "../images/aircool.png";
import AirCoolMobile from "../images/aircoolMobile.png";
import Paskey from "../images/paskey.png";

//Components
import Footer from "./Footer";

export default function Portfolio() {

  return (
    <div className="text-center px-5">
      <h4 className="text-3xl text-purple-700 font-extrabold 2xl:text-5xl 2xl:font-extrabold">
        Portfolio
      </h4>

      <div className="pb-10 px-5 m-auto md:flex md:flex-col md:items-center lg:flex lg:flex-wrap lg:justify-center lg:space-x-28 xl:space-x-10 2xl:space-x-2 2xl:flex-nowrap">
        <div className="md:w-1/2 lg:w-1/3 xl:w-1/4 ">
          <div className=" my-10 h-auto -space-y-40 2xl:h-64 2xl:w-full 2xl:flex 2xl:justify-center 2xl:-space-x-48 2xl:space-y-14 ">
            <img
              loading="lazy"
              className="lg:w-full 2xl:w-5/6 border shadow-2xl"
              src={Fortbend}
              alt="website demo"
            />
            <img
              loading="lazy"
              className="m-auto mr-5 w-1/5 drop-shadow-2xl "
              src={FortbendMobile}
              alt="website demo"
            />
          </div>
          <a
            className="hover:text-purple-700 hover:text-lg"
            href="https://fortbendra.izzydev.com"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Visit Me{" "}
          </a>
        </div>

        <div className="md:w-1/2 lg:w-1/3 xl:w-1/4">
          <div className="my-10 h-auto -space-y-40 2xl:h-64 2xl:w-full 2xl:flex 2xl:justify-center 2xl:-space-x-48 2xl:space-y-14">
            <img
              loading="lazy"
              className="2xl:w-5/6 border shadow-2xl"
              src={AirCool}
              alt="website demo"
            />
            <img
              loading="lazy"
              className="m-auto mr-5 w-1/5 drop-shadow-2xl"
              src={AirCoolMobile}
              alt="website demo"
            />
          </div>
          <a
            className="hover:text-purple-700 hover:text-lg"
            href="https://aircoolpps.izzydev.com"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Visit Me{" "}
          </a>
        </div>

        <div className="md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:mt-10">
          <img
            loading="lazy"
            className="my-10 m-auto 2xl:w-5/6 2xl:m-auto drop-shadow-2xl"
            src={Paskey}
            alt="website demo"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
