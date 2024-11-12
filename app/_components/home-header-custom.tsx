"use client";

import { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [scrolling, setScrolling] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hasRefreshed, setHasRefreshed] = useState<boolean>(true); // Add state to track refresh status

  // Create a ref for the sidebar element
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Check if 'hasRefreshed' is set in localStorage
    const hasRefreshedFromStorage = localStorage.getItem('hasRefreshed');
    
    if (!hasRefreshedFromStorage) {
      // If not, set it and mark as refreshed
      localStorage.setItem('hasRefreshed', 'true');
      setHasRefreshed(true); // Update state
    } else {
      setHasRefreshed(true); // If already set, assume page has refreshed
    }

    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setScrolling(isScrolling);
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll);

    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
      const scrollPosition = parseInt(savedScrollPosition);
      window.scrollTo(0, scrollPosition);
      setScrolling(scrollPosition > 0);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  // Close sidebar on screen resize (e.g., when the screen is maximized)
  useEffect(() => {
    const handleResize = () => {
      // Close sidebar if screen width is greater than 1024px (or your desired threshold)
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full p-4 transition-all duration-1000 ease-in-out z-10 ${
          scrolling && hasRefreshed
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

      {/* Sidebar for small screens (Right side) */}
      <div
        ref={sidebarRef} // Attach the ref to the sidebar
        className={`lg:hidden fixed top-0 right-0 w-64 h-full z-50 bg-gray-800 text-white transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-end">
          <button
            className="text-white text-2xl"
            onClick={() => setSidebarOpen(false)} // Close button functionality
          >
            &times; {/* Close icon */}
          </button>
        </div>
        <nav>
          <ul className="space-y-4 p-4">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
