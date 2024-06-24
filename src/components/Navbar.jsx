import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-purple-950 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-start guide-icon rounded-pill p-2">
            {/* Logo */}
            <a className="flex flex-shrink-0 mr-4 website-name" href="/index.html">
              <span className="text-white text-2xl font-bold ml-2">
                Pleasure & Safari Tours
              </span>
            </a>
            <div className="md:hidden menu-icon">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                &#9776;
              </button>
            </div>
            <div className={`absolute top-16 left-0 right-0 bg-purple-950 md:static md:bg-transparent ${isOpen ? 'block' : 'hidden'} md:flex md:ml-auto space-y-2 md:space-y-0 md:space-x-2`}>
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 sm:bg-transparent sm:hover:bg-gray-900 sm:text-gray-200'
                    : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 sm:bg-transparent sm:hover:bg-gray-900 sm:text-gray-200'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/aboutUs"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 sm:bg-transparent sm:hover:bg-gray-900 sm:text-gray-200'
                    : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 sm:bg-transparent sm:hover:bg-gray-900 sm:text-gray-200'
                }
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 sm:bg-transparent sm:hover:bg-gray-900 sm:text-gray-200'
                    : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 sm:bg-transparent sm:hover:bg-gray-900 sm:text-gray-200'
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/Blogs"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 sm:bg-transparent sm:hover:bg-gray-900 sm:text-gray-200'
                    : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 sm:bg-transparent sm:hover:bg-gray-900 sm:text-gray-200'
                }
              >
                Blogs
              </NavLink>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 sm:bg-transparent sm:hover:bg-gray-900 sm:text-gray-200'
                    : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 sm:bg-transparent sm:hover:bg-gray-900 sm:text-gray-200'
                }
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
