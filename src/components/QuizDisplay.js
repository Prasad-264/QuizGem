import { useState, useEffect } from "react";

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
  }, [timer]);

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
    <div className="mt-10 md:mt-16 w-4/5 md:w-2/4 mx-auto">
      <h1 className="text-2xl md:text-3xl text-center font-bold mb-4 text-white">
        {quizData.title}
      </h1>
      <div className="bg-[#313131] md:py-6 py-4 md:px-8 px-6 rounded-lg">
        {!isQuizCompleted ? (
          <div>
            <div className="text-white flex items-center justify-between">
              <p className="text-md">Question {currentQuestion + 1}/10</p>
              <p className="text-md">{timer} Sec</p>
            </div>
            <div className="my-4 text-white">
              <p className="text-lg font-semibold">{currentQuiz.question}</p>
            </div>
            <ul className="space-y-2">
              {currentQuiz.options.map((option, index) => (
                <li
                  key={index}
                  className={`cursor-pointer text-white p-2 border rounded-xl ${
                    selectedAnswer === option
                      ? isCorrect
                        ? "bg-green-500 font-semibold"
                        : "bg-red-500 font-semibold"
                      : "bg-[#313131] hover:bg-gray-700"
                  }`}
                  onClick={() => handleAnswerClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
            <div className="mt-4 text-right">
              <button
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-8 rounded-xl disabled:cursor-not-allowed"
                onClick={handleNextClick}
                disabled={!isAnswered}
              >
                {currentQuestion === quizData.quizzes.length - 1
                  ? "Finish"
                  : "Next"}
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="md:text-3xl text-2xl font-extrabold mb-6 text-purple-500 animate-pulse">
              Quiz Completed 🎉
            </h2>
            <p className="text-white text-lg mb-4">
              <span className="font-semibold">Total Score:</span>{" "}
              <span className="text-green-400 text-2xl">{score}</span> / 100
            </p>
            <p className="text-white text-lg mb-4">
              <span className="font-semibold">Correct Answers:</span>{" "}
              <span className="text-green-400">{correctCount}</span>
            </p>
            <p className="text-white text-lg mb-4">
              <span className="font-semibold">Wrong Answers:</span>{" "}
              <span className="text-red-400">{wrongCount}</span>
            </p>
            <p className="text-white text-lg mb-4">
              <span className="font-semibold">Total Time Taken:</span>{" "}
              <span className="text-blue-400">{totalTimeTaken}</span> seconds
            </p>
            <div className="mt-6">
              <button
                onClick={handleReset}
                className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-lg shadow-md transition duration-300"
              >
                Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizDisplay;
