"use client";
import Link from "next/link";
import { useState } from "react";

const Header3 = () => {
  const [city, setCity] = useState("");

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 sm:h-80 md:h-90">
      <div className="p-5">
        <h2 className="text-2xl sm:text-4xl text-white text-center font-bold">
          Over 157,000 hotels and homes across 35 countries
        </h2>
        <div className="flex flex-col sm:flex-row justify-center my-5 mx-5 sm:mx-20">
          <input
            type="text"
            placeholder="Search..."
            className="w-full sm:w-6/12 h-12 sm:h-16 outline-none px-3 text-base sm:text-lg border-r-2 border-gray-400 mb-3 sm:mb-0 sm:mr-3"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <button
            type="submit"
            className="w-full sm:w-auto h-12 sm:h-16 px-3 py-2 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white text-base sm:text-xl"
          >
            <Link href={`/hotels?city=${city}`}>Search</Link>
          </button>
        </div>
        <div className="flex flex-col sm:flex-row justify-center mx-5 sm:mx-20 my-3 sm:my-5 font-bold">
          <button
            type="submit"
            className="w-full sm:w-auto h-12 sm:h-16 px-3 py-2 mb-3 sm:mb-0 mr-0 sm:mr-5 text-white"
          >
            Continue your search
          </button>
          <button
            type="submit"
            className="w-full sm:w-auto h-12 sm:h-16 px-3 py-2 border-2 border-white text-white hover:bg-gray-500 rounded-xl"
          >
            Homestay in India hotels
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header3;
