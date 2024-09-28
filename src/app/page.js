"use client";
import URLInput from "@/components/URLInput";
import { generateQuiz } from "@/utils/quizGenerator";
import { useState } from "react";
import QuizDisplay from "@/components/QuizDisplay";
import Loading from "@/components/Loading";

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
    <div className="min-h-screen flex items-center justify-center bg-black overflow-hidden p-4 sm:p-6 md:p-8">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #00ffff 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20" />
      </div>
      {!loading && !quiz && <URLInput onSubmit={handleUrlSubmit} />}
      {loading && <Loading />}
      {!loading && quiz && quiz?.quizzes?.length > 0 && (
        <QuizDisplay quizData={quiz} />
      )}
      {quiz && quiz?.error && (
        <div className="text-center md:w-2/3 w-4/5 mx-auto mt-10 bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-cyan-500">
          <p className="text-red-500 text-lg m-4">
            We couldn&apos;t generate a quiz from the provided URL. Please
            ensure the content is educational or try again.
          </p>
          <button
            onClick={handleRetry}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:scale-105 transition-transform duration-300"
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
