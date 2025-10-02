import React, { useEffect } from 'react';
import { BiUser, BiGlobe } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const IconsCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const cards = [
    { icon: <BiUser />, color: "blue", label: "Total Users", value: "28k" },
    { icon: <FiMapPin />, color: "green", label: "Total Locations", value: "28k" },
    { icon: <BiGlobe />, color: "purple", label: "Total Sites", value: "28k" },
    { icon: <AiOutlineStar />, color: "yellow", label: "Total Stars", value: "28k" },
  ];

  return (
    <div className="w-full mt-20 mb-20 px-4">
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className={`flex flex-col items-center bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all duration-300`}
          >
            <h2 className={`text-3xl text-${card.color}-500`}>{card.icon}</h2>
            <button className={`mt-4 bg-${card.color}-500 text-white px-4 py-1 rounded-full`}>
              {card.value}
            </button>
            <p className="mt-2 text-gray-500">{card.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconsCard;
