import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      {/* <footer className="bg-white shadow-md w-full px-7 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center">
              <img
                src="/tdlogo.png"
                alt="Tayyeb Dev logo"
                className="h-[45px] w-[45px] rounded-full"
              />
              <h3 className="text-xl font-semibold ms-4">Buyzaar</h3>
              <span className="w-[1px] hidden sm:flex h-[50px] ms-4 border border-gray-400"></span>
            </div>
            <span className="text-sm ms-0 mt-3 sm:mt-0 sm:ms-5 text-gray-500 flex items-center sm:text-center">
              Copyright &copy; {new Date().getFullYear} Buyzaar
            </span>
          </div>
          <div className="flex mt-4 md:mt-0 space-x-5 rtl:space-x-reverse text-xl">

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
          </div>
        </div>
      </footer> */}


      <footer class="bg-gray-900 text-white pt-8 px-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <img
                src="/tdlogo.png"
                alt="Tayyeb Dev logo"
                className="h-[55px] w-[55px] rounded-full"
              />
              <h3 className="text-xl font-semibold ms-2">Buyzaar</h3>
            </div>
            <p class="text-sm text-gray-400 mt-2">
              Buyzaar is your go-to affiliate marketing website, providing the best product recommendations from trusted brands.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><Link to="/" class="hover:text-white">Home</Link></li>
              <li><Link to="/shop" class="hover:text-white">Shop</Link></li>
              <li><Link to="/blog" class="hover:text-white">Blog</Link></li>
              <li><Link to="/deals" class="hover:text-white">Deals</Link></li>
              <li><Link to="/about" class="hover:text-white">About Us</Link></li>
              <li><Link to="/contact" class="hover:text-white">Contact Us</Link></li>
              <li><Link to="/privacy-policy" class="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/affiliate-disclosure" class="hover:text-white">Affiliate Disclosure</Link></li>
              <li><Link to="/faq" class="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4">Get in Touch</h3>
            <p class="text-sm text-gray-400">Email: support@buyzaar.com</p>
            <p class="text-sm text-gray-400">Phone: +123 456 7890</p>

            <div class="flex space-x-4 mt-4">
              <Link to="https://github.com/mtayyebdeveloper/" target='_blank'>
                <i
                  className="fa-brands fa-facebook text-xl text-blue-600 hover:text-blue-700"
                ></i>
              </Link>
              <Link to="https://www.tiktok.com/@mtayyeb.dev?lang=en" target='_blank'>
                <i
                  className="fa-brands fa-tiktok text-xl text-gray-500 hover:text-gray-800"
                ></i>
              </Link>
              <Link to="https://www.tiktok.com/@mtayyeb.dev?lang=en" target='_blank'>
                <i
                  className="fa-brands fa-instagram text-xl text-pink-500 hover:text-gray-800"
                ></i>
              </Link>
            </div>
          </div>
        </div>

        <div class="border-t border-gray-700 h-16 mt-8 flex items-center justify-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Buyzaar. All rights reserved.</p>
        </div>
      </footer>


    </>
  )
}

export default Footer