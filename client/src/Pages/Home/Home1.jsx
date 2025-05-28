
import React, { useState, useEffect } from 'react';

const Home1 = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60); 
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    {
      id: 1,
      question: "What is the capital of India?",
      options: [
        "Delhi",
        "Mumbai",
        "Kolkata",
        "Chennai"
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      question: "What is the capital of Pakistan?",
      options: [
        "Karachi",
        "Islamabad",
        "Lahore",
        "Peshawar"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "What is the capital of Bangladesh?",
      options: [
        "Chittagong",
        "Sylhet",
        "Dhaka",
        "Rajshahi"
      ],
      correctAnswer: 2
    },
    {
      id: 4,
      question: "What is the capital of Nepal?",
      options: [
        "Pokhara",
        "Kathmandu",
        "Lalitpur",
        "Bhaktapur"
      ],
      correctAnswer: 1
    },
    {
      id: 5,
      question: "What is the capital of Sri Lanka?",
      options: [
        "Colombo",
        "Kandy",
        "Galle",
        "Jaffna"
      ],
      correctAnswer: 0
    }
  ];


  useEffect(() => {
    if (timeRemaining > 0 && !quizSubmitted) {
      const timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0 && !quizSubmitted) {
      handleSubmitQuiz();
    }
  }, [timeRemaining, quizSubmitted]);

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSubmitQuiz = () => {
    setQuizSubmitted(true);
    const score = calculateScore();
    alert(`Quiz submitted! Your score: ${score}/${questions.length}`);
  };

  const calculateScore = () => {
    return questions.reduce((score, question) => {
      return selectedAnswers[question.id] === question.correctAnswer ? score + 1 : score;
    }, 0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getTimerProgress = () => {
    const totalTime = 1200; // 20 minutes
    const progress = ((totalTime - timeRemaining) / totalTime) * 283;
    return progress;
  };

  const isQuestionAnswered = (questionId) => {
    return selectedAnswers.hasOwnProperty(questionId);
  };

  const goToQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  const getAnswerLabel = (index) => {
    return String.fromCharCode(65 + index); 
  };

  if (quizSubmitted) {
    const score = calculateScore();
    return (
      <main className="container mx-auto px-4 py-6 flex-grow">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Quiz Completed!</h1>
          <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-md mx-auto">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold mb-4">Your Score</h2>
            <div className="text-4xl font-bold text-blue-600 mb-4">
              {score}/{questions.length}
            </div>
            <p className="text-gray-600 mb-6">
              You answered {score} out of {questions.length} questions correctly!
            </p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-6 flex-grow">
      <div className="flex items-center text-sm mb-6">
        <a href="#" className="text-gray-600 hover:text-green-600">Home</a>
        <span className="mx-2 text-gray-400">›</span>
        <a href="#" className="text-gray-600 hover:text-green-600">Quiz List</a>
        <span className="mx-2 text-gray-400">›</span>
        <span className="text-gray-400">Quiz</span>
      </div>

      <div className="lg:flex">
        <div className="lg:w-2/3 lg:pr-8">
          {questions.map((question, questionIndex) => (
            <div key={question.id} className="mb-8">
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mr-3">
                  Question {questionIndex + 1} of {questions.length}
                </span>
                {isQuestionAnswered(question.id) && (
                  <span className="text-green-600 text-sm flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Answered
                  </span>
                )}
              </div>
              
              <h1 className="text-2xl font-bold text-gray-800 mb-6">{question.question}</h1>

              <div className="space-y-4 mb-6">
                {question.options.map((option, optionIndex) => {
                  const isSelected = selectedAnswers[question.id] === optionIndex;
                  return (
                    <div 
                      key={`${question.id}-${optionIndex}`}
                      className={`border ${isSelected ? 'border-green-500 bg-green-50' : 'border-gray-300'} rounded-lg p-4 flex justify-between items-center cursor-pointer hover:border-gray-400 transition`}
                      onClick={() => handleAnswerSelect(question.id, optionIndex)}
                    >
                      <div className="flex items-center">
                        <span className={`w-8 h-8 flex items-center justify-center rounded-full ${isSelected ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'} font-medium mr-3`}>
                          {getAnswerLabel(optionIndex)}
                        </span>
                        <span className="text-gray-800">{option}</span>
                      </div>
                      {isSelected && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              {Object.keys(selectedAnswers).length} of {questions.length} questions answered
            </div>
            <button 
              onClick={handleSubmitQuiz}
              disabled={Object.keys(selectedAnswers).length === 0}
              className={`px-6 py-3 rounded-md transition ${
                Object.keys(selectedAnswers).length === 0 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Submit Quiz ({Object.keys(selectedAnswers).length}/{questions.length})
            </button>
          </div>
        </div>

        <div className="lg:w-1/3 mt-8 lg:mt-0">
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
                  stroke={timeRemaining < 300 ? "#ef4444" : "#1447e6"}
                  strokeWidth="10" 
                  strokeDasharray="283" 
                  strokeDashoffset={283 - getTimerProgress()}
                  strokeLinecap="round" 
                  transform="rotate(-90 50 50)" 
                />
              </svg>
              <div className={`absolute inset-0 flex items-center justify-center text-xl font-bold ${timeRemaining < 300 ? 'text-red-500' : ''}`}>
                {formatTime(timeRemaining)}
              </div>
            </div>
            <p className="text-gray-500 text-sm">Time Remaining</p>
            {timeRemaining < 300 && (
              <p className="text-red-500 text-xs mt-1">Hurry up!</p>
            )}
          </div>

          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-200 cursor-pointer" onClick={toggleDropdown}>
              <h3 className="font-medium">Quiz Questions ({Object.keys(selectedAnswers).length}/{questions.length})</h3>
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
                {questions.map((question, index) => {
                  const isAnswered = isQuestionAnswered(question.id);
                  return (
                    <div 
                      key={question.id}
                      className={`p-3 rounded-md flex items-center justify-between cursor-pointer hover:bg-gray-50 ${isAnswered ? 'bg-green-50' : ''} mb-1`}
                      onClick={() => goToQuestion(index)}
                    >
                      <span className="text-sm text-gray-600">Question {index + 1}</span>
                      {isAnswered && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home1;