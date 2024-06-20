import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-purple-950 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* Logo */}
            <a className="flex flex-shrink-0 items-center mr-4" href="/index.html">
              <img className="h-10 w-auto md:hidden" src={logo} alt="React Jobs" />
              <span className=" text-white text-2xl font-bold ml-2">
                Pleasure & Safari Tours
              </span>
            </a>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                &#9776; {/* Hamburger icon */}
              </button>
            </div>
            <div className={`md:ml-auto ${isOpen ? 'block' : 'hidden'} md:flex space-x-2`}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                    : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/aboutUs"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                    : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                }
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                    : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/Blogs"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                    : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                }
              >
                Blogs
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                    : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
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
