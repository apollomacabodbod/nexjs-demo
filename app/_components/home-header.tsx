"use client";

import { useState,  useEffect } from "react";

const Header = () => {
  
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setScrolling(isScrolling);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
      className={`fixed top-[0em] left-[0] w-screen z-[10]  p-4 transition-all duration-300 ${
        scrolling ? "backdrop-blur-lg bg-opacity-50 bg-black/30" : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="text-gray-800">Home</a></li>
            <li><a href="#about" className="text-gray-800">About</a></li>
            <li><a href="#contact" className="text-gray-800">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
