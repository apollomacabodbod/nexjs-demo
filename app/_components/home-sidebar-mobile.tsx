"use client";

import { FC, useEffect, useRef } from 'react';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

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
  }, [sidebarOpen,setSidebarOpen]);

  // Close sidebar on screen resize (e.g., when the screen is maximized)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial check on mount
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setSidebarOpen]);

  return (
    <div
      ref={sidebarRef} // Attach the ref to the sidebar
      className={`lg:hidden fixed top-0 right-0 w-64 h-full z-50 bg-gray-800 text-white transition-transform duration-300 ${
        sidebarOpen ? '' : ''
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
  );
};

export default Sidebar;
