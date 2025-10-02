import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const VideoCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      className="flex flex-col items-center px-4 sm:px-6 py-10"
      data-aos="fade-up"
    >
      {/* Text + Button */}
      <div className="w-full max-w-5xl mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wide">
            Fleet Travel UI Kit
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Book a ticket <br /> & just leave
          </h1>
        </div>
        <button className="bg-green-500 hover:bg-green-600 transition-colors text-white px-5 py-2 rounded-full shadow-md text-sm sm:text-base">
          Book now
        </button>
      </div>

      {/* Video / Image */}
      <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-lg">
        {!isPlaying ? (
          <div className="relative">
            <img
              src="/Camping.png"
              alt="Camping"
              className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            />

            {/* Play Button */}
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
            >
              <div className="bg-white hover:scale-110 transition-transform rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>
        ) : (
          <video
            src="https://cdn.pixabay.com/video/2024/09/23/232696_large.mp4?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            className="w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
            autoPlay
            controls
          />
        )}
      </div>
    </div>
  );
};

export default VideoCard;
