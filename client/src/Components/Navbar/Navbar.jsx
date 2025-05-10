import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      {/* <div className="bg-gray-800 text-white py-2 px-4 text-center relative">
        <p className="text-sm">Get Courses from $15 for a limited time | A special offer for new students</p>
        <button className="absolute right-4 top-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div> */}

      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link to={'/'}>
              <div className="flex items-center">
                <div className="h-8 w-8 bg-yellow-400 rounded-md"></div>
                <span className="ml-2 font-bold text-xl">E-Quiz</span>
              </div>
            </Link>
            <div className="hidden md:block">
              <Link to="/categories" className="text-gray-600 hover:text-gray-900">Categories</Link>
            </div>
          </div>
          
          <div className="hidden md:block flex-grow max-w-md mx-6">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search for courses" 
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute right-3 top-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <span className="text-gray-600">Profile</span>
            </div>
            <Link to="/quiz">            
              <div className="hidden md:block">
                <span className="text-gray-600">Quizs</span>
              </div>
            </Link>
            {/* <button className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button> */}
            <Link to="/register" className="px-6 py-2 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50">Signup</Link>
            <Link to="/login" className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">Login</Link>
          </div>
        </div>
      </header>
      </>
  )
}

export default Navbar