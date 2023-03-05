import React from 'react'
import profile from "../assets/profile.svg"


function Navbar() {
    return (


        <nav className="bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="#" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-white">EasyPharma</span>
                </a>
                <div className="flex items-center md:order-2">
                    <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-slate-100" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full bg-white" src={profile} alt="user photo" />
                    </button>
                    {/* <!-- Dropdown menu --> */}
                    <div className="z-50 hidden my-4 text-base list-nslate-800 bg-slate-900 divide-y divide-gray-100 rounded-lg shadow " id="user-dropdown">
                        <div className="px-4 py-3">
                            <span className="block text-sm text-white">Harry Green</span>
                            <span className="block text-sm font-medium text-gray-400">name@gmail.com</span>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100  text-gray-200 hover:text-gray-600">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100  text-gray-200 hover:text-gray-600">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100  text-gray-200 hover:text-gray-600">Earnings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100  text-gray-200 hover:text-gray-600">Sign out</a>
                            </li>
                        </ul>
                    </div>
                    <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="justify-between hidden w-full md:flex  md:w-auto md:order-1 z-20" id="mobile-menu-2">
                    <ul className=" flex flex-col p-4 mt-4 rounded-lg bg-indigo-900 md:bg-transparent md:flex-row md:space-x-16 md:mt-0 md:text-sm md:font-medium md:border-0slate-800bg-slate-800">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white bg-purple-600 rounded md:bg-transparent md:text-purple-600 md:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 md:p-0 text-gray-400 md:hover:text-white hover:bg-cyan-800 hover:text-white md:hover:bg-transparent border-gray-700">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 md:p-0 text-gray-400 md:hover:text-white hover:bg-cyan-800 hover:text-white md:hover:bg-transparent border-gray-700">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 md:p-0 text-gray-400 md:hover:text-white hover:bg-cyan-800 hover:text-white md:hover:bg-transparent border-gray-700">Pricing</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 md:p-0 text-gray-400 md:hover:text-white hover:bg-cyan-800 hover:text-white md:hover:bg-transparent border-gray-700">Contact</a>
                        </li>
                    </ul>





                </div>
            </div>
        </nav>


    )
}

export default Navbar