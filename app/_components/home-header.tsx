"use client";

import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(true);

  // Check if the blur should be active based on localStorage or scroll position
  useEffect(() => {
    // Retrieve the stored scroll state from localStorage
    const storedScrollState = localStorage.getItem("isScrolled");
    if (storedScrollState) {
      setIsScrolled(JSON.parse(storedScrollState));
    }

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
        localStorage.setItem("isScrolled", JSON.stringify(true)); // Save state to localStorage
      } else {
        setIsScrolled(false);
        localStorage.setItem("isScrolled", JSON.stringify(false)); // Save state to localStorage
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full p-4 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg bg-opacity-50 bg-black/30" : "bg-transparent"
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
