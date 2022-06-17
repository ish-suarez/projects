import React, { useState } from "react";
import { NavHashLink } from "@xzar90/react-router-hash-link";
import { Collapse } from "react-collapse";

import NavBarLinks from "./NavBarLinks";

export default function NavBar() {
  const [nav, setNav] = useState(false);

  const navigation = [
    { name: "Portfolio", to: "/Portfolio" },
    { name: "Full Stack Info", to: "/#FullStackInfo" },
    { name: "Contact Me", to: "/#ContactMe" },
  ];

  return (
    <nav
      id="Top"
      className="top-0 absolute z-50 w-full antialiased border-t-4 border-purple-600 bg-white"
    >
      {/* Logo Container */}
      <div className="w-full flex items-center justify-between py-3 px-5 xl:px-20 2xl:px-80">
        <NavHashLink smooth to="/" className="2xl:pl-8">
          <h1 className="font-bold text-lg text-purple-900 hover:text-gray-500">
            IzzyDev.com
          </h1>
        </NavHashLink>

        <button
          onClick={() => setNav(!nav)}
          className="md:hidden text-gray-700 rounded-lg text-lg"
        >
          <i className="fas fa-bars text-lg text-blueGray-600 px-1"></i>
        </button>

        {/* Larger Screen Navigation */}
        <ul className="hidden md:visible md:flex text-blueGray-600 mx-5 space-x-8 lg:space-x-5 text-md">
          {navigation.map(({ name, to }, i) => (
            <NavBarLinks key={i} name={name} to={to} />
          ))}
        </ul>
      </div>

      <Collapse isOpened={nav}>
        <ul
          className="w-full md:hidden py-5 shadow-md  ReactCollapse--collapse relative bg-gray-100 border-b-2 border-purple-500"
          onClick={() => setNav(!nav)}
        >
          {navigation.map(({ name, to }, i) => (
            <NavBarLinks key={i} name={name} to={to} />
          ))}
        </ul>
      </Collapse>
    </nav>
  );
}
