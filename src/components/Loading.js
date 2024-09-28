import React from "react";

const Loading = () => {
  return (
    <div className="w-full max-w-2xl mx-auto px-2 py-8">
      <h1 className="bg-slate-700 h-4 w-2/3 mx-auto rounded-md animate-pulse mb-6"></h1>
      <div className="bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-xl rounded-3xl shadow-2xl py-6 px-8 animate-pulse">
        <div className="flex items-center justify-between mb-4">
          <div className="h-3 bg-slate-700 rounded w-24"></div>
          <div className="h-3 bg-slate-700 rounded w-12"></div>
        </div>
        <div className="h-3 bg-slate-700 rounded-md mb-6"></div>
        <ul className="space-y-6">
          <li className="h-2 bg-slate-700 rounded-xl"></li>
          <li className="h-2 bg-slate-700 rounded-xl"></li>
          <li className="h-2 bg-slate-700 rounded-xl"></li>
          <li className="h-2 bg-slate-700 rounded-xl"></li>
        </ul>
        <div className="mt-6 text-right">
          <div className="h-4 bg-slate-700 text-right rounded-xl w-32"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
