import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const steps = [
    {
      img: "/icon1.png",
      title: "Tell us what you want to do",
      text: "Fully layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.",
    },
    {
      img: "/icon2.png",
      title: "Share your travel preference",
      text: "Fully layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.",
    },
    {
      img: "/icon3.png",
      title: "We’ll give you recommendations",
      text: "Fully layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.",
    },
  ];

  return (
    <div className="bg-[#f7f7f7] py-24" data-aos="fade-up">
      {/* Header */}
      <div
        className="flex flex-col justify-center items-center text-center max-w-2xl mx-auto"
        data-aos="fade-up"
      >
        <p className="text-[#777E90] font-poppins">3 steps for the perfect trip</p>
        <h1 className="text-3xl font-bold mt-2">Find Travel Perfection</h1>
        <p className="text-[#777E90] mt-4">
          An enim nullam tempor gravida donec enim congue magna at pretium purus pretium.
        </p>
        <p className="text-[#777E90] mt-1">
          Ligula rutrum luctus risusd diam eget risus varius blandit sit amet non magna
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition mt-7">
          Book now
        </button>
      </div>

      {/* Cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 px-6 md:px-16"
        data-aos="fade-up"
      >
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white w-full max-w-sm mx-auto rounded-2xl border-2 border-[#dfe0e3] p-6 shadow hover:shadow-lg transition"
            data-aos="fade-up"
          >
            <img className="w-[80px] h-[80px] mt-6" src={step.img} alt={step.title} />
            <h2 className="text-xl md:text-2xl font-bold mt-7">{step.title}</h2>
            <p className="text-[#777E90] mt-4 text-sm md:text-base">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
