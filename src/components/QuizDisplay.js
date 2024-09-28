import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const QuizDisplay = ({ quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timer, setTimer] = useState(60);
  const [totalTimeTaken, setTotalTimeTaken] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const currentQuiz = quizData.quizzes[currentQuestion];

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      handleAnswerClick(null);
      if (currentQuestion < quizData.quizzes.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        resetSelection();
      } else {
        setIsQuizCompleted(true);
      }
    }
  }, [timer, currentQuestion, quizData.quizzes.length]);

  const handleAnswerClick = (answer) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);

    if (answer === currentQuiz.correct_option) {
      setIsCorrect(true);
      setCorrectCount((prev) => prev + 1);
      setScore((prev) => prev + 10);
    } else {
      setIsCorrect(false);
      setWrongCount((prev) => prev + 1);
    }
  };

  const handleNextClick = () => {
    setTotalTimeTaken((prev) => prev + (60 - timer));

    if (currentQuestion < quizData.quizzes.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      resetSelection();
    } else {
      setIsQuizCompleted(true);
    }
  };

  const resetSelection = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setIsAnswered(false);
    setTimer(60);
  };

  const handleReset = () => {
    resetSelection();
    setCurrentQuestion(0);
    setScore(0);
    setCorrectCount(0);
    setWrongCount(0);
    setTotalTimeTaken(0);
    setIsQuizCompleted(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-2 py-8">
      <h1 className="text-3xl sm:text-4xl text-center font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        {quizData.title}
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-cyan-500"
      >
        {!isQuizCompleted ? (
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-cyan-300">
                Question {currentQuestion + 1}/{quizData.quizzes.length}
              </p>
              <p className="text-cyan-300">{timer} sec</p>
            </div>
            <div className="mb-6">
              <p className="text-white text-lg sm:text-xl font-semibold">
                {currentQuiz.question}
              </p>
            </div>
            <div className="space-y-3">
              {currentQuiz.options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswerClick(option)}
                  className={`w-full py-3 px-4 rounded-lg text-left transition-all duration-300 ${
                    selectedAnswer === option
                      ? isCorrect
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-gray-800 text-cyan-300 hover:bg-gray-700"
                  }`}
                >
                  {option}
                </motion.button>
              ))}
            </div>
            <div className="mt-6 text-right">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNextClick}
                disabled={!isAnswered}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentQuestion === quizData.quizzes.length - 1
                  ? "Finish"
                  : "Next"}
              </motion.button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse">
              Quiz Completed 🎉
            </h2>
            <p className="text-cyan-300 text-lg mb-4">
              <span className="font-semibold">Total Score:</span>{" "}
              <span className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {score}
              </span>{" "}
              / 100
            </p>
            <p className="text-cyan-300 text-lg mb-4">
              <span className="font-semibold">Correct Answers:</span>{" "}
              <span className="text-green-400">{correctCount}</span>
            </p>
            <p className="text-cyan-300 text-lg mb-4">
              <span className="font-semibold">Wrong Answers:</span>{" "}
              <span className="text-red-400">{wrongCount}</span>
            </p>
            <p className="text-cyan-300 text-lg mb-6">
              <span className="font-semibold">Total Time Taken:</span>{" "}
              <span className="text-blue-400">{totalTimeTaken}</span> seconds
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleReset}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
            >
              Try Again
            </motion.button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default QuizDisplay;
