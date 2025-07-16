import React from "react";
import { createBrowserRouter } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="bg-white p-4 border-b-3 border-gray-200 shadow-md sticky top-0 z-50 flex justify-between items-center">
      <h2 className="font-bold text-[25px]">E-RTO System</h2>
      <ul className="flex space-x-6 cursor-pointer text-black text-[18px] font-semibold">
        <li className="hover:underline hover:text-blue-500 text-[18px] font-semibold">Dashboard</li>
        <li className="hover:underline hover:text-blue-500 text-[18px] font-semibold">Applications</li>
        <li className="hover:underline hover:text-blue-500 text-[18px] font-semibold">Reports</li>
        <li className="hover:underline hover:text-blue-500 text-[18px] font-semibold">Settings</li>
        <img src="./src/assets/man.png"  alt="profile-Icon" className="w-8 h-8"/>
        
      </ul>
    </nav>
  );
};

export default Navbar;
