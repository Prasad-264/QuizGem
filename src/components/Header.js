"use client";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-[#313131] w-full">
      <div className="flex gap-x-2 items-center py-3 px-6">
        <Image src="/QuizGem_Logo.png" alt="quiz logo" width={45} height={45} className="rounded-lg" />
        <h1 className="text-white text-3xl font-semibold">QuizGem</h1>
      </div>
    </div>
  );
};

export default Header;
