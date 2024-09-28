"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
    <div className="bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-cyan-500">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        QuizGem
      </h1>
      <p className="text-cyan-300 text-center mb-6 sm:mb-8 text-sm sm:text-base">
        Unleash the power of AI to generate quizzes from any URL. Enter your
        link below and watch the magic happen!
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="relative">
          <input
            type="url"
            placeholder="Enter blog/article URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 text-cyan-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 border border-cyan-500 text-sm sm:text-base"
            required
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Image
              src="/link-icon.svg"
              alt="Icon"
              width={20}
              height={20}
              className="text-cyan-500"
            />
          </div>
        </div>
        <motion.button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 relative overflow-hidden group text-sm sm:text-base"
        >
          <span className="relative z-10">Generate Quiz</span>
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-cyan-400 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </motion.button>
      </form>
    </div>
  );
};

export default URLInput;
