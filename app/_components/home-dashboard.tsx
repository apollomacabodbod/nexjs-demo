
"use client"



import React, { useState } from 'react';
import { CarouselSize } from './home-carousel';

const Dashboard = () => {
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle modal visibility
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4 max-h-screen overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
        <ul>
          <li className="mb-4">
            <a href="#" className="text-gray-300 hover:text-white">Home</a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-gray-300 hover:text-white">Profile</a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-gray-300 hover:text-white">Settings</a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-gray-300 hover:text-white">Logout</a>
          </li>

          <li className="mb-4">
            <a href="#" className="text-gray-300 hover:text-white">Logout</a>
          </li>

          <li className="mb-4">
            <a href="#" className="text-gray-300 hover:text-white">Logout</a>
          </li>

          <li className="mb-4">
            <a href="#" className="text-gray-300 hover:text-white">Logout</a>
          </li>

          <li className="mb-4">
            <a href="#" className="text-gray-300 hover:text-white">Logout</a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-gray-300 hover:text-white">Logout</a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-gray-300 hover:text-white">Logout</a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-gray-300 hover:text-white">Logout</a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-gray-300 hover:text-white">Logout</a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-gray-300 hover:text-white">Logout</a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-gray-300 hover:text-white">Logout</a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-gray-300 hover:text-white">Logout</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6 ">
        <h1 className="text-3xl font-semibold mb-6">Welcome to the Dashboard</h1>

        {/* Button to open modal */}
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-6"
          onClick={openModal}
        >
          Open Modal
        </button>

        {/* Dashboard Cards */}
        <CarouselSize/>

      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center "
          onClick={closeModal}
        >

          <div
            className="bg-white  rounded-[10px] shadow-lg p-[2em] mx-[2em] h-[300px] overflow-y-auto border border-[#50B490] green "
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
          >
            <h3 className="text-xl font-semibold mb-4 border border-[#50B490] green">Modal Title</h3>
            <p className="text-gray-600">
              This is the modal content. If the content exceeds the screen height, it will scroll.


            </p>

            <p className="text-gray-600">
              This is the modal content. If the content exceeds the screen height, it will scroll.


            </p>

            <p className="text-gray-600">
              This is the modal content. If the content exceeds the screen height, it will scroll.


            </p>

            <p className="text-gray-600">
              This is the modal content. If the content exceeds the screen height, it will scroll.


            </p>


            <p className="text-gray-600">
              This is the modal content. If the content exceeds the screen height, it will scroll.


            </p>

            <p className="text-gray-600">
              This is the modal content. If the content exceeds the screen height, it will scroll.
            </p>


            <p className="text-gray-600">
              This is the modal content. If the content exceeds the screen height, it will scroll.
            </p>



            <p className="text-gray-600">
              This is the modal content. If the content exceeds the screen height, it will scroll.
            </p>


            <p className="text-gray-600">
              This is the modal content. If the content exceeds the screen height, it will scroll.
            </p>



            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={closeModal}
              >
                Close Modal
              </button>
            </div>


          </div>


          
        </div>
      )}
    </div>
  );
};

export default Dashboard;
