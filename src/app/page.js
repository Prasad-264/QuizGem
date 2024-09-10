"use client";
import Header from "@/components/Header";
import URLInput from "@/components/URLInput";
import { generateQuiz } from "@/utils/quizGenerator";
import { useState } from "react";
import QuizDisplay from "@/components/QuizDisplay";
import Loading from "@/components/Loading";
import Footer from "@/components/Footer";

export default function Home() {
  // const [quiz, setQuiz] = useState({
  //   "title": "SOLID Principles Quiz",
  //   "quizzes": [
  //       {
  //           "question": "What does the 'S' in SOLID stand for?",
  //           "options": [
  //               "Single Responsibility",
  //               "Simple",
  //               "Structured",
  //               "Scalable"
  //           ],
  //           "correct_option": "Single Responsibility"
  //       },
  //       {
  //           "question": "Which principle promotes creating classes with a single, well-defined purpose?",
  //           "options": [
  //               "Open/Closed Principle",
  //               "Liskov Substitution Principle",
  //               "Interface Segregation Principle",
  //               "Single Responsibility Principle"
  //           ],
  //           "correct_option": "Single Responsibility Principle"
  //       },
  //       {
  //           "question": "The Open/Closed Principle suggests that software entities should be:",
  //           "options": [
  //               "Open for extension, closed for modification",
  //               "Open for modification, closed for extension",
  //               "Always open for both extension and modification",
  //               "None of the above"
  //           ],
  //           "correct_option": "Open for extension, closed for modification"
  //       },
  //       {
  //           "question": "Which principle states that subtypes should be substitutable for their base types without altering the correctness of the program?",
  //           "options": [
  //               "Interface Segregation Principle",
  //               "Liskov Substitution Principle",
  //               "Dependency Inversion Principle",
  //               "Open/Closed Principle"
  //           ],
  //           "correct_option": "Liskov Substitution Principle"
  //       },
  //       {
  //           "question": "The Interface Segregation Principle advocates for:",
  //           "options": [
  //               "Creating large, comprehensive interfaces",
  //               "Designing small, specific interfaces",
  //               "Using only abstract classes",
  //               "Avoiding interfaces altogether"
  //           ],
  //           "correct_option": "Designing small, specific interfaces"
  //       },
  //       {
  //           "question": "What does the 'D' in SOLID stand for?",
  //           "options": [
  //               "Design",
  //               "Dependency",
  //               "Data",
  //               "Development"
  //           ],
  //           "correct_option": "Dependency"
  //       },
  //       {
  //           "question": "Which principle suggests depending on abstractions, not concretions?",
  //           "options": [
  //               "Liskov Substitution Principle",
  //               "Dependency Inversion Principle",
  //               "Interface Segregation Principle",
  //               "Open/Closed Principle"
  //           ],
  //           "correct_option": "Dependency Inversion Principle"
  //       },
  //       {
  //           "question": "What is the primary benefit of adhering to SOLID principles?",
  //           "options": [
  //               "Increased code complexity",
  //               "Reduced maintainability",
  //               "Improved code readability and maintainability",
  //               "None of the above"
  //           ],
  //           "correct_option": "Improved code readability and maintainability"
  //       },
  //       {
  //           "question": "How can SOLID principles help with software evolution?",
  //           "options": [
  //               "Making it harder to adapt to changing requirements",
  //               "Facilitating easier modifications and extensions",
  //               "Having no impact on software evolution",
  //               "None of the above"
  //           ],
  //           "correct_option": "Facilitating easier modifications and extensions"
  //       },
  //       {
  //           "question": "Which of the following is NOT a SOLID principle?",
  //           "options": [
  //               "Single Responsibility Principle",
  //               "Liskov Substitution Principle",
  //               "Dependency Injection Principle",
  //               "Interface Segregation Principle"
  //           ],
  //           "correct_option": "Dependency Injection Principle"
  //       }
  //   ]
  // });
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleUrlSubmit = async (url) => {
    setLoading(true);
    try {
      const quizData = await generateQuiz(url);
      setQuiz(quizData);     
      console.log(quizData);
    } catch (e) {
      setError("Failed to generate quiz. Please try again.");
    }
    setLoading(false);
  };
  if (error) return <p className="text-red-500">{error}</p>
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />

      <div className="flex-grow">
        {!loading && !quiz && <URLInput onSubmit={handleUrlSubmit} />}
        {loading && <Loading />}
        {!loading && quiz?.quizzes?.length > 0 && <QuizDisplay quizData={quiz} />}
      </div>

      {/* Footer placed at the bottom */}
      <Footer />
    </div>

  );
}
