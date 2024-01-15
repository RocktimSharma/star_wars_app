import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <nav className="px-4 py-2 sticky top-0 bg-gray-900 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex flex-col text-left">
            <div className="text-xl font-bold text-yellow-500">Star Wars</div>
            <div className="text-white text-xs ">Movies</div>
          </div>
          {/* Toggle Button for Off-Canvas Menu */}
          <button
            className="lg:hidden  focus:outline-none"
            onClick={toggleNavbar}
          >
            <svg
              fill="none"
              stroke="white"
              className="h-6 w-6"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>

          {/* Large Screen Menu */}
          <div className="hidden lg:flex  lg:items-center lg:w-auto">
            <div className="text-sm ">
              <NavLink
                to="/"
                className="block mt-4 lg:inline-block lg:mt-0  text-gray-400 hover:text-gray-300 mr-6 active:text-yellow-500 "
              >
                All Movies
              </NavLink>
              <NavLink
                to="/favorites"
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-300 mr-6 active:text-yellow-500 "
              >
                Favorites
              </NavLink>
            </div>
          </div>

          {/* Off-Canvas Menu */}
          <div
            className={`${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden z-40 fixed top-0 left-0 w-64 h-full bg-gray-900 text-white p-4 transition-transform ease-in-out duration-300`}
          >
            <div>
              <NavLink
                to="/"
                className="block mb-4 text-gray-400 hover:text-gray-300"
              >
                All Movies
              </NavLink>
              <NavLink
                to="/favourites"
                className="block mb-4 text-gray-400 hover:text-gray-300"
              >
                Favourites
              </NavLink>
            </div>
          </div>

          {/* Spacer for Off-Canvas Menu */}
          {isOpen && (
            <div
              className="fixed top-0  left-0 w-full h-full bg-black z-30 opacity-50 lg:hidden"
              onClick={toggleNavbar}
            ></div>
          )}
        </div>
      </nav>

      <Outlet />
    </div>
  );
}
