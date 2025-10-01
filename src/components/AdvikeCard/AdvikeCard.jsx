import { useState, useEffect } from "react";
import { LuCalendarRange } from "react-icons/lu";
import { FaHeart, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

const cardData = [
  {
    id: 1,
    img: "/card5.png",
    title: "Pack wisely before traveling",
    text: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
    date: "25 May, 2021",
  },
  {
    id: 2,
    img: "/card3.png",
    title: "Introducing this amazing city",
    text: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
    date: "25 May, 2021",
  },
  {
    id: 3,
    img: "/card1.png",
    title: "How to travel with paper map",
    text: "It is almost impossible to read the news without coming across a lead story elections through fake social media accounts...",
    date: "25 May, 2021",
  },
];

// Custom arrows
const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-2 right-2 md:right-4 z-20 bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow-md transition"
    onClick={onClick}
  >
    <FaArrowRight className="text-gray-700 text-lg" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-2 right-12 md:right-16 z-20 bg-gray-100 hover:bg-gray-200 p-2 rounded-full shadow-md transition"
    onClick={onClick}
  >
    <FaArrowLeft className="text-gray-700 text-lg" />
  </button>
);

const AdvikeCard = () => {
  const [liked, setLiked] = useState({});

  const toggleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="flex flex-col gap-6 mt-12 px-4 md:px-6 lg:px-16 bg-[#fcfcfc]" data-aos="fade-up">
      {/* Header */}
      <div className="mb-6 text-center md:text-left">
        <h1 className="text-3xl font-semibold mb-2">Travel Tips & Advice</h1>
        <p className="text-[#777E90] text-sm">
          An enim nullam tempor gravida donec enim congue magna at pretium purus
          pretium ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna.
        </p>
      </div>

      {/* Slider */}
      <div className="relative">
        <Slider {...settings}>
          {cardData.map((card) => (
            <div key={card.id} className="px-2 md:px-3">
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden group relative">
                <div className="relative">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-[220px] object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex justify-center items-center transition">
                    <button className="bg-white text-black px-4 py-2 rounded-full shadow-md font-medium">
                      Read More
                    </button>
                  </div>

                  {/* Like button */}
                  <button
                    onClick={() => toggleLike(card.id)}
                    className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md"
                  >
                    <FaHeart
                      className={`text-lg ${
                        liked[card.id] ? "text-pink-500" : "text-gray-400"
                      }`}
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-medium">{card.title}</h3>
                  <p className="mt-1 text-[#777E90] text-sm line-clamp-2">{card.text}</p>
                  <span className="mt-2 text-[#777E90] flex items-center gap-2 text-sm">
                    <LuCalendarRange />
                    {card.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AdvikeCard;
