import { useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "./customLink";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenMobileMenu = () => {
    setIsOpen(!isOpen);
    
  };

  return (
    <nav
      id="header"
      className="fixed w-full z-50  top-0 bg-gradient-to-r from-gray-200 via-blue-100 to-gray-200 "
    >
      <div className="w-full container mx-auto  flex flex-wrap items-center justify-between mt-0 py-2 ">
        <div className="pl-4 flex items-center">
          <CustomLink
            className=" hover:underline toggleColour text-gray-600 hover:text-gray-800  font-semibold text-2xl lg:text-4xl"
            to="/"
          >
            Another Travel
          </CustomLink>
        </div>

        <div className="block lg:hidden pr-4">
          <button
            onClick={onOpenMobileMenu}
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-gray-700 appearance-none focus:outline-none"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        {isOpen && <MobilMenu />}

        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-gray-800 p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <CustomLink
                className=" hover:underline inline-block text-gray-600 no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                to="/national"
              >
                National
              </CustomLink>
            </li>
            <li className="mr-3">
              <CustomLink
                className=" hover:underline inline-block text-gray-600 no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                to="/euro"
              >
                Euro
              </CustomLink>
            </li>
            <li className="mr-3">
              <CustomLink
                className=" hover:underline inline-block py-2 px-4 text-gray-600 font-bold no-underline"
                to="/about"
              >
                About
              </CustomLink>
            </li>
          </ul>
          {/* <button
            id="navAction"
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
          >
            Action
          </button> */}
        </div>
      </div>

      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}

export default Header;

export const MobilMenu = () => {
  return (
    <div
      className="w-full flex-grow   lg:items-center lg:w-auto block mt-2 lg:mt-0   text-gray-800 p-4 lg:p-0 z-20"
      id="nav-content"
    >
      <ul className="list-reset lg:flex justify-end flex-1 items-center">
        <li className="mr-3">
          <CustomLink
            className="inline-block text-gray-800  hover:underline no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
            to="/national"
          >
            National
          </CustomLink>
        </li>
        <li className="mr-3">
          <CustomLink
            className="inline-block text-gray-800  hover:underline no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
            to="/euro"
          >
            Euro
          </CustomLink>
        </li>
        <li className="mr-3">
          <CustomLink
            className="inline-block py-2 px-4 text-gray-800  hover:underline font-bold no-underline"
            to="/about"
          >
            About
          </CustomLink>
        </li>
      </ul>
      {/* <button
            id="navAction"
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
          >
            Action
          </button> */}
    </div>
  );
};
