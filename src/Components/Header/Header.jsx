import React, { useState } from "react";
import OrangeBtn from "../Button/OrangeBtn";
import DarkBtn from "../Button/DarkBtn";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setisDropDownOpen] = useState(false);
  function toggleDropDown() {
    setisDropDownOpen(!isDropDownOpen);
  }
  return (
    <>
      <nav className="shadow-lg text-textColor h-max sticky top-0 bg-white z-50">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="#home" className="text-2xl font-poppins font-extrabold">
                <img
                  src="/img/bnwdark.png"
                  className="w-[93px]"
                  alt="Beak N Freak"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4">
              <ul className="flex space-x-4 items-center font-poppins">
                <li className="transition-all hover:text-white cursor-pointer hover:bg-buttonColor rounded-lg p-3 delay-50 hover:scale-110 ease-in-out">
                  <Link to="/#home">Home</Link>
                </li>
                <li className="transition-all hover:text-white cursor-pointer hover:bg-buttonColor rounded-lg p-3 delay-50 hover:scale-110 ease-in-out">
                  <Link to="/#about">About</Link>
                </li>
                <li className="transition-all hover:text-white cursor-pointer hover:bg-buttonColor rounded-lg p-3 delay-50 hover:scale-110 ease-in-out">
                  <Link to="/#services">Services</Link>
                </li>
                <li className="transition-all hover:text-white cursor-pointer hover:bg-buttonColor rounded-lg p-3 delay-50 hover:scale-110 ease-in-out">
                  <Link to="/#contact">Contact</Link>
                </li>

                <li
                  className="relative transition-all cursor-pointer delay-50 hover:scale-110 ease-in-out"
                  onClick={toggleDropDown}
                >
                  Shop &#9660;
                  {isDropDownOpen && (
                    <ul className="absolute left-0 mt-2 bg-white shadow-lg border rounded-xl w-48">
                      <li className="p-2 hover:bg-buttonColor mb-2 rounded-md">
                        <Link to="/explore-pet">Explore Our Pets</Link>
                      </li>
                      <li className="p-2 hover:bg-buttonColor rounded-md">
                        <Link to="/store">Food For Pets</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="transition-all cursor-pointer delay-50 hover:scale-110 ease-in-out">
                  <Link to="/sign-in">
                    <OrangeBtn>Sign In</OrangeBtn>
                  </Link>
                </li>
                <li className="transition-all cursor-pointer delay-50 hover:scale-110 ease-in-out">
                  <Link to="/sign-up">
                    <DarkBtn>Sign Up</DarkBtn>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="space-y-1 px-2 pb-3 pt-2">
              <li>
                <Link
                  to="/#home"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/#services"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/#contact"
                  className="block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </Link>
              </li>
              <li
                className="relative transition-all cursor-pointer delay-75 ease-in-out  font-medium space-y-1 px-2 pb-3 pt-2"
                onClick={toggleDropDown}
              >
                Shop &#9660;
                {isDropDownOpen && (
                  <ul className="absolute left-0 mt-2 bg-white shadow-md border rounded-lg w-48 text-sm z-20">
                    <li className="p-2 hover:bg-buttonColor mb-2 rounded-md">
                      <Link to="/explore-pet" className="">
                        Explore Our Pets
                      </Link>
                    </li>
                    <li className="p-2 hover:bg-buttonColor mb-2 rounded-md">
                      <Link to="/store" className="">
                        Food For Pets
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="block px-3 py-2 rounded-md text-base font-medium">
                <Link to="/sign-in">
                  <OrangeBtn>Sign In</OrangeBtn>
                </Link>
              </li>
              <li className="block px-3 py-2 rounded-md text-base font-medium">
                <Link to="/sign-up">
                  <DarkBtn>Sign Up</DarkBtn>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
