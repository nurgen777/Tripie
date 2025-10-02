import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  { id: 1, img: "/avatars/client1.png", text: "Lorem ipsum dolor sit amet." },
  { id: 2, img: "/avatars/client2.png", text: "An enim nullam tempor gravida." },
  { id: 3, img: "/avatars/client3.png", text: "At pretium purus pretium ligula." },
  { id: 4, img: "/avatars/client4.png", text: "Eget risus varius blandit sit amet." },
  { id: 5, img: "/avatars/client5.png", text: "Consectetur adipiscing elit." },
  { id: 6, img: "/avatars/client6.png", text: "Ut enim ad minim veniam." },
  { id: 7, img: "/avatars/client1.png", text: "Sed do eiusmod tempor." },
];

const positions = [
  { x: "16%", y: "37%" },
  { x: "28%", y: "64%" },
  { x: "39%", y: "37%" },
  { x: "51%", y: "53%" },
  { x: "63%", y: "37%" },
  { x: "74%", y: "63%" },
  { x: "84%", y: "37%" },
];

const Testimonials = () => {
  const [active, setActive] = useState(2);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="text-center py-16 relative" data-aos="fade-up">
      <p className="uppercase text-sm font-semibold text-gray-500">
        Testimonials
      </p>
      <h2 className="text-3xl font-bold mb-6">
        What our happy clients say
      </h2>
      <button className="bg-green-500 text-white px-6 py-2 rounded-full mb-12">
        Book now
      </button>

      {/* Background image */}
      <div className="relative w-full max-w-6xl mx-auto h-[400px] md:h-[500px]">
        <img
          src="/tolkun.svg"
          alt="background waves"
          className="w-full h-full object-contain"
        />

        {/* Avatars */}
        <div className="absolute inset-0 z-10">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              onClick={() => setActive(i)}
              className={`absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 bg-white shadow-md cursor-pointer transition-all duration-300 ${
                active === i
                  ? "border-green-500 scale-110"
                  : "border-transparent hover:scale-105"
              }`}
              style={{
                left: positions[i].x,
                top: positions[i].y,
                transform: "translate(-50%, -50%)",
              }}
            >
              <img
                src={t.img}
                alt="client"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Active text */}
      <div className="mt-8 max-w-xl mx-auto text-gray-600">
        <p className="italic text-lg">
          “{testimonials[active].text}”
        </p>
      </div>

      {/* Arrows */}
      <div className="flex justify-center items-center gap-6 mt-6">
        <button
          onClick={() =>
            setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1))
          }
          className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() =>
            setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1))
          }
          className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
