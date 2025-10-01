import { useState, useEffect } from "react";
import AOS from "aos";  
import "aos/dist/aos.css";

const PilotCard = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const options = [
    "Luctus risusd diam eget",
    "Donec enim congue magna",
    "Blandit sit amet non magna"
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between bg-white p-10 rounded-2xl shadow-lg gap-8"
      data-aos="fade-up"
    >
      {/* Text side */}
      <div className="md:w-1/2 flex flex-col gap-6" data-aos="fade-up">
        <div>
          <h6 className="text-gray-500">Take A Tour</h6>
          <h1 className="text-3xl font-bold mt-2 mb-4">
            Discover Our Travel <br /> Guideline
          </h1>
          <p className="text-gray-600">
            An enim nullam tempor gravida donec enim congue <br /> magna at
            pretium purus pretium ligula rutrum luctus <br /> risusd diam eget
            risus varius blandit sit amet non <br /> magna.
          </p>
        </div>

        {/* Options */}
        {options.map((text, index) => (
          <label
            key={index}
            className="flex items-center gap-3 cursor-pointer relative"
          >
            <input
              type="radio"
              name="radioGroup"
              checked={selectedIndex === index}
              onChange={() => setSelectedIndex(index)}
              className="peer hidden"
            />
            <span
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                selectedIndex === index
                  ? "bg-green-500 border-green-500"
                  : "border-gray-500"
              }`}
            >
              {selectedIndex === index && (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </span>
            <span className="text-gray-600">{text}</span>
          </label>
        ))}

        <div>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
            Learn more
          </button>
        </div>
      </div>

      {/* Image side */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img
          src="/Pilot.png"
          alt="Pilot"
          className="w-[400px] md:w-[600px] h-auto"
        />
      </div>
    </div>
  );
};

export default PilotCard;
