import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className='flex items-center bg-2f2d52 h-16 px-10 justify-between text-black bg-amber-600'>
      <span className="logo">NS Chat</span>
      <div className="flex m-4">
        <img className=' h-8 w-8 rounded-full object-cover' src='https://www.helixstorm.com/wp-content/uploads/2020/08/10-Productivity-Tips-to-Help-You-Master-Microsoft-Office-365-.jpg' alt="" />
        {/* <span className='m-3'>Sam</span> */}
        </div>
        <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          Hello
          {/* Toggle arrow icon */}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Edit
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Duplicate
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-red-700 hover:bg-red-100 hover:text-red-900"
              role="menuitem"
            >
              Log out
            </a>
          </div>
        </div>
      )}
    </div>
    </div>
        </>
    );
};

export default Navbar;