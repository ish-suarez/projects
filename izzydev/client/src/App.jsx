import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { NavHashLink } from "@xzar90/react-router-hash-link";

// Components
import NavBar from "./components/nav-bar/NavBar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

export default function App() {
  // To top button fade out logic
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const toggleTopButtonVisibility = () => {
      if (window.pageYOffset > 550) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleTopButtonVisibility);

    return () =>
      window.removeEventListener("scroll", toggleTopButtonVisibility);
  }, []);

  return (
    <div className="w-full h-full subpixel-antialiased">
      {/* NavBar Component */}
      <NavBar />

      {/* Top Icon */}
      <NavHashLink smooth to="#Top">
        {isVisible && (
          <img
            className="motion-safe:animate-[bounce_3s_infinite] ease-in-out bg-blueGray-200 drop-shadow-lg rounded-full p-2 right-0 bottom-20 mb-4 mr-3 fixed z-2"
            src="https://img.icons8.com/external-those-icons-fill-those-icons/20/000000/external-up-arrows-those-icons-fill-those-icons.png"
            alt="Top of page"
          />
        )}
      </NavHashLink>

      {/* Pages */}
      <div className="mt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  );
}