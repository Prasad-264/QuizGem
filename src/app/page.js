"use client";
import Header from "@/components/Header";
import URLInput from "@/components/URLInput";
import { generateQuiz } from "@/utils/quizGenerator";
import { useState } from "react";
import QuizDisplay from "@/components/QuizDisplay";
import Loading from "@/components/Loading";
import Footer from "@/components/Footer";

export default function Home() {
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUrlSubmit = async (url) => {
    setLoading(true);
    setError("");
    try {
      const quizData = await generateQuiz(url);
      setQuiz(quizData);
    } catch (e) {
      setError(
        "We couldn't generate a quiz from the provided URL. Please ensure the content is educational or try again."
      );
    }
    setLoading(false);
  };

  const handleRetry = () => {
    setQuiz(null);
    setError("");
    setLoading(false);
  };

  if (error) return <p className="text-red-500">{error}</p>;
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />

      <div className="flex-grow">
        {!loading && !quiz && <URLInput onSubmit={handleUrlSubmit} />}
        {loading && <Loading />}
        {!loading && quiz && quiz?.quizzes?.length > 0 && (
          <QuizDisplay quizData={quiz} />
        )}
        {quiz && quiz?.error && (
          <div className="text-center md:w-2/3 w-4/5 mx-auto mt-16">
            <p className="text-red-500 text-lg m-4">
              We couldn&apos;t generate a quiz from the provided URL. Please
              ensure the content is educational or try again.
            </p>
            <button
              onClick={handleRetry}
              className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded"
            >
              Try Again
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
