import { useState } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ハッカソンテンプレート" },
    { name: "description", content: "React + React Router + Tailwindのテンプレート" },
  ];
}

export default function Home() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(prev => prev + 1);
    console.log("カウンター増加:", counter + 1);
  };

  const decrementCounter = () => {
    setCounter(prev => prev - 1);
    console.log("カウンター減少:", counter - 1);
  };

  const resetCounter = () => {
    setCounter(0);
    console.log("カウンターリセット");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-lg text-center max-w-2xl w-11/12 border border-gray-200">
        <h1 className="text-4xl font-bold text-gray-800 mb-5">
          ハッカソンテンプレート (React)
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          シンプルなWebアプリケーションのテンプレートです
        </p>
        
        <div className="mb-8 p-5 border border-gray-200 rounded-md bg-gray-50">
          <h2 className="text-2xl text-gray-800 mb-5">
            カウンター: <span className="text-3xl font-bold text-blue-600">{counter}</span>
          </h2>
          <div className="flex justify-center flex-wrap gap-2">
            <button
              onClick={incrementCounter}
              className="bg-blue-600 text-white border-none px-6 py-3 text-base rounded cursor-pointer transition-colors duration-200 hover:bg-blue-800 active:bg-blue-900"
            >
              +1
            </button>
            <button
              onClick={decrementCounter}
              className="bg-blue-600 text-white border-none px-6 py-3 text-base rounded cursor-pointer transition-colors duration-200 hover:bg-blue-800 active:bg-blue-900"
            >
              -1
            </button>
            <button
              onClick={resetCounter}
              className="bg-gray-600 text-white border-none px-6 py-3 text-base rounded cursor-pointer transition-colors duration-200 hover:bg-gray-700"
            >
              リセット
            </button>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center flex-wrap gap-2">
          <Link
            to="/about"
            className="inline-block bg-blue-600 text-white no-underline px-6 py-3 text-base rounded cursor-pointer transition-colors duration-200 hover:bg-blue-800"
          >
            このアプリについて
          </Link>
        </div>
      </div>
    </div>
  );
}