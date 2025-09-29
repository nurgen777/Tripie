import React from "react";
import { FaSearch } from "react-icons/fa";

const BlogPage = () => {
  return (
    <div className="font-sans text-gray-900 px-4 sm:px-6 md:px-16 lg:px-32 bg-gray-50 min-h-screen">
      <section className="text-center my-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mt-32">Blog</h1>
        <p className="text-gray-500 mt-6 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Track your workouts, get better results, and be the best version of <br />
          you. Less thinking
        </p>
      </section>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden hover:bg-[#FCFCFD] transition-shadow duration-300">
        <img
          src="/gelik.png"
          alt="Car"
          className="w-full md:w-1/2 object-cover h-64 md:h-auto"
        />

        <div className="p-6 sm:p-10 md:p-14 flex flex-col justify-center md:w-1/2">
          <span className="bg-[#23262F] text-white px-5 py-1.5 text-sm font-semibold mt-4 sm:mt-6 rounded-full self-start shadow-sm">
            Tips and Tricks
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mt-4 leading-snug sm:leading-tight">
            Convergent and <br className="hidden sm:block" /> divergent plate <br className="hidden sm:block" /> margins
          </h2>
          <p className="text-gray-500 mt-4 text-base sm:text-lg leading-relaxed">
            Track your workouts, get better results, and be <br /> the best version of you. Less thinking
          </p>
          <button className="px-5 py-2 bg-[#4AC63F] text-white font-medium rounded-full mt-5 w-fit transition-all shadow-md text-base sm:text-lg">
            Read more <b className="ml-2">→</b>
          </button>
        </div>
      </div>

      {/* FILTERS & SEARCH */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-14 gap-6 flex-wrap">
        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
          {["All", "Tips and Tricks", "Exploring", "Off Topic", "Travel", "How To"].map((tag, idx) => (
            <button
              key={idx}
              className="px-5 py-1.5 sm:px-6 sm:py-2 rounded-full text-sm sm:text-base text-[#777E90] hover:bg-[#23262F] hover:text-white transition"
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 border border-gray-300 rounded-full px-5 py-2.5 w-full sm:w-80 bg-white shadow-sm focus-within:ring-2 focus-within:ring-green-400">
          <FaSearch className="text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search everything"
            className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-sm sm:text-base"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
