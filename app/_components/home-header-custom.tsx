"use client";

import { useState, useEffect } from 'react';
import Sidebar from './home-sidebar-mobile';
import { usePathname } from 'next/navigation'

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setScrolling(isScrolling);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full p-4 transition-all duration-1000 ease-in-out z-10 ${
          scrolling
            ? 'backdrop-blur-lg bg-red-400 shadow-lg'
            : 'bg-transparent backdrop-blur-none shadow-none'
        }`}
      >
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">My App</h1>
          <button
            className="lg:hidden text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            &#9776; {/* Hamburger icon */}
          </button>
          <nav className="hidden lg:block">
            <ul className="flex space-x-4">
              <li><a href="#home" className="text-white hover:text-blue-400">Home</a></li>
              <li><a href="#about" className="text-white hover:text-blue-400">About</a></li>
              <li><a href="#contact" className="text-white hover:text-blue-400">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setSidebarOpen(false)} // Close sidebar on overlay click
        />
      )}

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
};

export default Header;
