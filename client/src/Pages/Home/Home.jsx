import React, { useState } from 'react';

const Home = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('A');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <main className="container mx-auto px-4 py-6 flex-grow">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm mb-6">
          <a href="#" className="text-gray-600 hover:text-green-600">Home</a>
          <span className="mx-2 text-gray-400">›</span>
          <a href="#" className="text-gray-600 hover:text-green-600">Quize List</a>
          <span className="mx-2 text-gray-400">›</span>
          <span className="text-gray-400">Reprehenderit in voluptate velit esse cillum dolore</span>
        </div>

        <div className="lg:flex">
          {/* Left content - Quiz */}
          <div className="lg:w-2/3 lg:pr-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Reprehenderit In Voluptate Velit Esse Cillum Dolore</h1>

            {/* Quiz options */}
            <div className="space-y-4 mb-6">
              <div 
                className={`border ${selectedAnswer === 'A' ? 'border-green-500 bg-green-50' : 'border-gray-300'} rounded-lg p-4 flex justify-between items-center cursor-pointer`}
                onClick={() => handleAnswerSelect('A')}
              >
                <div className="flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 font-medium text-gray-700 mr-3">A</span>
                  <span className="text-gray-800">Eiusmod Tempor Incididunt Ut</span>
                </div>
                {selectedAnswer === 'A' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>

              <div 
                className={`border ${selectedAnswer === 'B' ? 'border-green-500 bg-green-50' : 'border-gray-300'} rounded-lg p-4 flex justify-between items-center cursor-pointer`}
                onClick={() => handleAnswerSelect('B')}
              >
                <div className="flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 font-medium text-gray-700 mr-3">B</span>
                  <span className="text-gray-800">Fugiat Nulla Pariatur</span>
                </div>
                {selectedAnswer === 'B' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>

              <div 
                className={`border ${selectedAnswer === 'C' ? 'border-green-500 bg-green-50' : 'border-gray-300'} rounded-lg p-4 flex justify-between items-center cursor-pointer`}
                onClick={() => handleAnswerSelect('C')}
              >
                <div className="flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 font-medium text-gray-700 mr-3">C</span>
                  <span className="text-gray-800">Voluptatem Accusantium Doloremque</span>
                </div>
                {selectedAnswer === 'C' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>

              <div 
                className={`border ${selectedAnswer === 'D' ? 'border-green-500 bg-green-50' : 'border-gray-300'} rounded-lg p-4 flex justify-between items-center cursor-pointer`}
                onClick={() => handleAnswerSelect('D')}
              >
                <div className="flex items-center">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 font-medium text-gray-700 mr-3">D</span>
                  <span className="text-gray-800">Totam Rem Aperiam</span>
                </div>
                {selectedAnswer === 'D' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
              Submit Answer
            </button>
          </div>

          {/* Right sidebar */}
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            {/* Timer */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 flex flex-col items-center">
              <div className="relative w-24 h-24 mb-2">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill="none" 
                    stroke="#e5e7eb" 
                    strokeWidth="10" 
                  />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill="none" 
                    stroke="#1447e6" 
                    strokeWidth="10" 
                    strokeDasharray="283" 
                    strokeDashoffset="70" 
                    strokeLinecap="round" 
                    transform="rotate(-90 50 50)" 
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                  0:20
                </div>
              </div>
              <p className="text-gray-500 text-sm">Timer Remaining</p>
            </div>

            {/* Quiz questions list */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b border-gray-200 cursor-pointer" onClick={toggleDropdown}>
                <h3 className="font-medium">Quiz Questions List</h3>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {isDropdownOpen && (
                <div className="p-2">
                  {[...Array(10)].map((_, index) => (
                    <div 
                      key={index}
                      className={`p-3 rounded-md flex items-center justify-between ${index < 6 ? 'bg-gray-50' : ''} ${index < 6 ? 'mb-1' : ''}`}
                    >
                      <span className="text-sm text-gray-600">Quiz question {index + 1}</span>
                      {index < 6 && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Newsletter */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="bg-blue-700 rounded-lg p-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-2">Subscribe Our Newsletter</h2>
              <p className="text-blue-100 mb-6">Get the most update from our news</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
                <button className="bg-yellow-400 text-gray-900 font-medium px-6 py-3 rounded-md hover:bg-yellow-500 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      </>
  );
};

export default Home;
