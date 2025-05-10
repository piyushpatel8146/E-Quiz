import React from 'react'

const Login = () => {
  return (
    <>
    
    
    <main className="container mx-auto px-4 py-6 flex-grow">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm mb-6">
          <a href="#" className="text-gray-600 hover:text-green-600">Home</a>
          <span className="mx-2 text-gray-400">›</span>
          <a href="#" className="text-gray-600 hover:text-green-600">Users</a>
          <span className="mx-2 text-gray-400">›</span>
          <span className="text-gray-400">Login</span>
        </div>

        <div className="lg:flex">
          {/* Left content - Quiz */}
          <div className="lg:w-2/3 lg:pr-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Login Now</h1>


            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Submit
            </button>
          </div>

          {/* Right sidebar */}
          <div className="lg:w-1/3 mt-8 lg:mt-0">
          
          </div>
        </div>
      </main>

    </>
  )
}

export default Login