import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header() {
  const [navOpen, setnavOpen] = useState(false)
  return (
    <>
      <header
        className="bg-white sticky shadow-md w-full z-20 top-0"
      >
        <nav>
          <div
            className="w-full flex flex-wrap items-center justify-between mx-auto p-2"
          >
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="/tdlogo.png" className="w-10 md:w-14" alt="Logo" />
              <span
                className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap"
              >Buyzaar</span>
            </Link>
            <div
              className="flex md:order-2 items-center space-x-3 md:space-x-0 rtl:space-x-reverse"
            >
              <div className="icons flex items-center gap-4 me-4">
                <Link to="https://github.com/mtayyebdeveloper/" target='_blank'>
                  <i
                    className="fa-brands fa-facebook text-xl text-blue-600 hover:text-blue-700"
                  ></i>
                </Link>
                <Link to="https://www.tiktok.com/@mtayyeb.dev?lang=en" target='_blank'>
                  <i
                    className="fa-brands fa-tiktok text-xl text-black hover:text-gray-800"
                  ></i>
                </Link>
                <Link to="https://www.tiktok.com/@mtayyeb.dev?lang=en" target='_blank'>
                  <i
                    className="fa-brands fa-instagram text-xl text-pink-600 hover:text-gray-800"
                  ></i>
                </Link>
              </div>
              <button
                onClick={() => setnavOpen(!navOpen)}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-orange-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <span className="sr-only">Open main menu</span>
                <i className="fa-solid fa-bars text-xl"></i>
              </button>
            </div>
            <div
              className={`items-center ${navOpen ? "translate-x-0 transition-all duration-500 md:translate-x-0 md:transition-none" : "-translate-x-full transition-all duration-500 md:translate-x-0 md:transition-none"} justify-between left-0 md:static absolute top-0 w-full md:flex md:w-auto backdrop-blur-sm md:order-1 md:bg-transparent`}
              onClick={()=>setnavOpen(false)}
            >
              <ul
                className="flex flex-col w-[300px] md:h-auto h-screen sm:w-[400px] md:w-full p-4 md:p-0 font-medium border shadow-xl md:shadow-none border-gray-200 bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
              >
                <li>
                  <NavLink
                    to="/shop"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-orange-500 md:hover:bg-transparent hover:text-white md:hover:text-orange-500 md:p-0"
                    aria-current="page"
                  >Shop</NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-orange-500 md:hover:bg-transparent hover:text-white md:hover:text-orange-500 md:p-0"
                  >Blog</NavLink>
                </li>
                <li>
                  <NavLink
                    to="/deals"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-orange-500 md:hover:bg-transparent hover:text-white md:hover:text-orange-500 md:p-0"
                  >Deals</NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-orange-500 md:hover:bg-transparent
                    hover:text-white md:hover:text-orange-500 md:p-0"
                  >About Us</NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-orange-500 hover:text-white md:hover:bg-transparent md:hover:text-orange-500 md:p-0"
                  >Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="bottom-search py-2 px-4 mx-auto w-full flex items-center justify-center">
            <div className="flex items-center w-[80%] border border-orange-500 justify-center">
              <input type="text" name="" placeholder='Search In Buyzaar' className='outline-none w-full text-lg ps-2 py-1' />
              <i className='fa-solid fa-search px-4 cursor-pointer bg-orange-500 hover:bg-orange-600 py-3 text-white'></i>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header