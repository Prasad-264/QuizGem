import React from "react";

const Loading = () => {
  return (
    <div className="mt-20 md:w-2/4 w-4/5 mx-auto">
      <h1 className="mb-4 bg-slate-700 h-4 w-2/3 mx-auto rounded-md animate-pulse"></h1>
      <div className="bg-[#313131] py-6 px-8 rounded-lg animate-pulse">
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
