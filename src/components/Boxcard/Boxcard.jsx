import React, { useState, useEffect } from "react";
import { Heart, Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const initialData = [
  { image: "/card1.png", liked: true },
  { image: "/card2.png", liked: false },
  { image: "/card3.png", liked: false },
  { image: "/card4.png", liked: false },
  { image: "/card5.png", liked: false },
  { image: "/card6.png", liked: true },
  { image: "/card7.png", liked: false },
  { image: "/card8.png", liked: false },
];

const Boxcard = () => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const toggleLike = (index) => {
    setData((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, liked: !item.liked } : item
      )
    );
  };

  return (
    <div className="px-6 py-12" data-aos="fade-up">
      {/* Header */}
      <div className="flex flex-col justify-center items-center mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Discover Weekly</h1>
        <p className="text-[#777E90]">An enim nullam tempor sapien gravida donec enim</p>
        <p className="text-[#777E90]">ipsum</p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-green-600">
          Domestic
        </button>
        <h1 className="text-[#777E90] hover:text-green-600 cursor-pointer">Foreign</h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition relative"
          >
            <div className="relative">
              <img
                src={item.image}
                alt="Travel"
                className="h-52 w-full object-cover"
              />
              <button
                onClick={() => toggleLike(index)}
                className="absolute top-3 right-3 bg-white rounded-full p-2 shadow"
              >
                <Heart
                  size={18}
                  className={`${
                    item.liked ? "fill-pink-500 text-pink-500" : "text-gray-400"
                  }`}
                />
              </button>
            </div>

            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-base font-semibold">Venice, Rome & Milan</h3>
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <p>Karineside</p>
                <div className="flex gap-2 items-center">
                  <span className="line-through">$699</span>
                  <span className="text-green-600 font-semibold">$548</span>
                </div>
              </div>
              <div className="h-[1px] w-full bg-gray-200 mt-2"></div>
              <div className="flex justify-between items-center text-gray-500 text-sm mt-2">
                <p>Tue, Jul 20 – Fri, Jul 23</p>
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-black fill-black" />
                  <span className="text-sm font-medium">4.9</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Boxcard;
