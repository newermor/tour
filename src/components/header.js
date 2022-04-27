import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenMobileMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <nav id="header" class="fixed w-full z-50  top-0 bg-gray-400 text-white">
      <div class="w-full container mx-auto  flex flex-wrap items-center justify-between mt-0 py-2 ">
        <div class="pl-4 flex items-center">
          <Link
            class="toggleColour text-white  font-semibold text-2xl lg:text-4xl"
            to="/"
          >
            Another Travel
          </Link>
        </div>

        <div class="block lg:hidden pr-4">
          <button
            onClick={onOpenMobileMenu}
            class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-gray-700 appearance-none focus:outline-none"
          >
            <svg
              class="fill-current h-3 w-3"
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
          class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-gray-800 p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
            <li class="mr-3">
              <Link
                class="inline-block text-gray-800 no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                to="/travel"
              >
                Travel
              </Link>
            </li>
            <li class="mr-3">
              <Link
                class="inline-block text-gray-800 no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                to="/tour"
              >
                Tour
              </Link>
            </li>
            <li class="mr-3">
              <Link
                class="inline-block py-2 px-4 text-gray-800 font-bold no-underline"
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {/* <button
            id="navAction"
            class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
          >
            Action
          </button> */}
        </div>
      </div>

      <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}

export default Header;

export const MobilMenu = () => {
  return (
    <div
      class="w-full flex-grow   lg:items-center lg:w-auto block mt-2 lg:mt-0   text-gray-800 p-4 lg:p-0 z-20"
      id="nav-content"
    >
      <ul class="list-reset lg:flex justify-end flex-1 items-center">
        <li class="mr-3">
          <Link
            class="inline-block py-2 px-4 text-gray-800 font-bold no-underline"
            to="/about"
          >
            About
          </Link>
        </li>
        <li class="mr-3">
          <Link
            class="inline-block text-gray-800 no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
            to="/travel"
          >
            Travel
          </Link>
        </li>
        <li class="mr-3">
          <Link
            class="inline-block text-gray-800 no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
            to="/tour"
          >
            Tour
          </Link>
        </li>
      </ul>
      {/* <button
            id="navAction"
            class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
          >
            Action
          </button> */}
    </div>
  );
};
