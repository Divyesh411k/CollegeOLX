import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../Images/online-shopping.png'
import { CartCounter } from '../cartCounter'

export const Navbar = () => {
    return (

        <nav className="bg-blue border-gray-200  px-1 sm:px-4 py-1 rounded-lg dark:bg-gray-900 m-1 ">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <NavLink to="/" className="flex items-center">
                    <img src={logo} className="h-6 mr-3 sm:h-9" alt="Logo" />
                    <span className="self-center text-xl  whitespace-nowrap dark:text-white font-bold">CollegeLX</span>
                </NavLink>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-purple focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="true">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4  border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to="/" className=" border-4 ease-out duration-200 border-gray-900 block pl-3 pr-4 text-white rounded-lg py-1  text-lg hover:bg-purple-700 " aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart" className=" border-4 ease-out duration-200 border-gray-900 block pl-3 pr-4 text-white rounded-lg py-1  text-lg hover:bg-purple-700 " aria-current="page"><CartCounter /></NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className=" border-4 ease-out duration-200 border-gray-900 block pl-3 pr-4 text-white rounded-lg py-1  text-lg hover:bg-purple-700 " aria-current="page">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className=" border-4 ease-out duration-200 border-gray-900 block pl-3 pr-4 text-white rounded-lg py-1  text-lg hover:bg-purple-700 " aria-current="page">Contact</NavLink>
                        </li>


                        <li>
                            <NavLink to="/login" className="block pl-3 pr-4 ease-out duration-200  text-white rounded-lg text-lg py-1  bg-purple-700 border-4 border-gray-900 hover:border-4 hover:border-purple-700 hover:bg-gray-900 ">Log In</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
