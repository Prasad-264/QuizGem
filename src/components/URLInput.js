"use client";

import { useState } from "react";

const URLInput = ({ onSubmit }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.trim() === "") {
      alert("Please enter a valid URL");
      return;
    }
    onSubmit(url);
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-[#313131] md:w-2/4 w-4/5 shadow-md rounded-lg md:px-8 px-6 py-6 mt-10 md:mt-20"
      >
        <div>
          <h1 className="md:text-3xl text-2xl font-bold mb-4 text-center text-white">
            Welcome to QuizGem
          </h1>
          <p className="md:text-md text-sm mb-4 text-center text-gray-300">
            Generate quizzes from any blog or article URL using our AI-powered
            quiz generator. Just input the URL and click &apos;Generate
            Quiz&apos; to get started!
          </p>
        </div>
        <div className="mb-4">
          <input
            type="url"
            placeholder="Enter the URL of the blog/article"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-2 border rounded-xl bg-[#313131] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 w-full text-black font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
          >
            Generate Quiz
          </button>
        </div>
      </form>
    </div>
  );
};

export default URLInput;
