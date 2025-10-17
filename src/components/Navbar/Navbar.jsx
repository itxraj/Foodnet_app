import React, { useState } from "react";
import Profile from "../../assets/profile.png";
import { IoIosArrowDown, IoIosMenu, IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="py-4 lg:py-6 shadow-md bg-gray-900 text-white sticky top-0 z-50">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="cursor-pointer">
          <p className="text-3xl lg:text-4xl font-bold">
            FOOD<span className="text-yellow-400">NET</span>
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-8 font-medium uppercase tracking-wide">
          <li className="hover:text-yellow-400 hover:border-b-2 border-yellow-400 transition-all duration-200 cursor-pointer">
            Home
          </li>
          <li className="hover:text-yellow-400 hover:border-b-2 border-yellow-400 transition-all duration-200 cursor-pointer">
            Menu
          </li>
          <li className="hover:text-yellow-400 hover:border-b-2 border-yellow-400 transition-all duration-200 cursor-pointer">
            About
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Profile */}
          <div
            className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-200 relative"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <img
              src={Profile}
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-yellow-400"
            />
            <IoIosArrowDown className="text-yellow-400" />

            {/* Profile Dropdown */}
            {profileOpen && (
              <div className="absolute right-0 top-12 bg-gray-800 shadow-lg rounded-md w-44 py-2 flex flex-col text-white">
                <button className="px-4 py-2 hover:bg-gray-700 text-left">My Profile</button>
                <button className="px-4 py-2 hover:bg-gray-700 text-left">Settings</button>
                <button className="px-4 py-2 hover:bg-gray-700 text-left">Logout</button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoIosClose size={28} /> : <IoIosMenu size={28} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="sm:hidden flex flex-col gap-4 mt-4 bg-gray-800 p-4 uppercase font-medium shadow-md text-white">
          <li className="hover:text-yellow-400 transition-all duration-200 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 transition-all duration-200 cursor-pointer">Menu</li>
          <li className="hover:text-yellow-400 transition-all duration-200 cursor-pointer">About</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
