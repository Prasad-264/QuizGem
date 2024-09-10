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
    try {
      const quizData = await generateQuiz(url);
      setQuiz(quizData);
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
