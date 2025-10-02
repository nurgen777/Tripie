import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const destinations = [
  {
    id: 1,
    title: "Europe",
    price: 540,
    tours: 7,
    img: "/card4.png",   // /public ичине салсаңыз жөн эле /card4.png деп жазасыз
    color: "bg-pink-500",
  },
  {
    id: 2,
    title: "Africa wild",
    price: 540,
    tours: 7,
    img: "/card6.png",
    color: "bg-yellow-400",
  },
  {
    id: 3,
    title: "Scandinavia",
    price: 540,
    tours: 7,
    img: "/card5.png",
    color: "bg-green-500",
  },
  {
    id: 4,
    title: "America",
    price: 480,
    tours: 7,
    img: "/card7.png",
    color: "bg-blue-500",
  },
];

const Kombo = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 px-6 md:px-16" data-aos="fade-up">
      {/* Header */}
      <div className="flex items-center justify-between mb-12" data-aos="fade-up">
        <div>
          <p className="uppercase text-sm tracking-wider text-gray-400 font-semibold" data-aos="fade-up">
            3 Steps for the perfect trip
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2" data-aos="fade-up">
            Popular Destinations
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl" data-aos="fade-up">
            An enim nullam tempor gravida donec enim congue magna at pretium
            purus pretium ligula rutrum luctus risus diam eget risus varius
            blandit sit amet non magna.
          </p>
        </div>

        {/* Custom Arrows */}
        <div className="flex space-x-3" data-aos="fade-up">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition" data-aos="fade-up"
          >
            <FaArrowLeft size={14} />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition" data-aos="fade-up"
          >
            <FaArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {destinations.map((dest) => (
          <div key={dest.id} className="px-3">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white" data-aos="fade-up">
              <div className="relative" data-aos="fade-up">
                <img
                  src={dest.img}
                  alt={dest.title}
                  className="w-full h-60 object-cover"
                />
                <span
                  className={`absolute top-3 left-3 ${dest.color} text-white text-xs font-semibold px-3 py-1 rounded-full`}
                >
                  {dest.tours.toString().padStart(2, "0")} TOURS
                </span>
              </div>
              <div className="p-5" data-aos="fade-up">
                <h3 className="text-lg font-bold" data-aos="fade-up">{dest.title}</h3>
                <p className="text-gray-500 text-sm mt-1" data-aos="fade-up">
                  From <span className="font-bold text-black" data-aos="fade-up">${dest.price}</span> per day
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Kombo;
