import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="relative w-full h-screen" data-aos="fade-up">
      {/* Background image */}
      <img
        src="/hero.png"
        alt="hero"
        className="w-full h-full object-cover"
      />

      {/* Hero text */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
          Discover the most <br /> engaging places
        </h1>
        <p className="text-base sm:text-lg mb-6">
          Less planning 45,000 trips are ready for you
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-full shadow-lg transition">
          Start now
        </button>
      </div>

      {/* Search Box */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[75%] bg-white shadow-lg rounded-2xl p-4 z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-center">
          {/* Location */}
          <div className="flex flex-col text-left">
            <span className="font-semibold text-gray-700 text-sm md:text-base">
              📍 Location
            </span>
            <input
              type="text"
              placeholder="Where are you going?"
              className="outline-none border-none text-gray-500 text-sm md:text-base"
            />
          </div>

          {/* Activity */}
          <div className="flex flex-col text-left">
            <span className="font-semibold text-gray-700 text-sm md:text-base">
              🎯 Activity
            </span>
            <input
              type="text"
              placeholder="Add Activity"
              className="outline-none border-none text-gray-500 text-sm md:text-base"
            />
          </div>

          {/* Dates */}
          <div className="flex flex-col text-left">
            <span className="font-semibold text-gray-700 text-sm md:text-base">
              📅 Dates
            </span>
            <input
              type="date"
              className="outline-none border-none text-gray-500 text-sm md:text-base"
            />
          </div>

          {/* Guest */}
          <div className="flex flex-col text-left">
            <span className="font-semibold text-gray-700 text-sm md:text-base">
              👤 Guest
            </span>
            <input
              type="number"
              placeholder="Add guests"
              className="outline-none border-none text-gray-500 text-sm md:text-base"
            />
          </div>

          {/* Search Button */}
          <div className="flex justify-center md:justify-end">
            <button className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 md:p-4 transition w-full md:w-auto">
              🔍
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gray-200 mt-4"></div>
      </div>
    </div>
  );
};

export default Header;
