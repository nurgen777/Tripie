import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <footer
      className="bg-[#dedbdb] text-white py-10 px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mt-20"
      data-aos="fade-up"
    >
      {/* Logo + About text */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <img src="/logo.png" alt="Logo" className="w-12" />
          <h2 className="text-2xl font-bold text-black">Tripie</h2>
        </div>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          There are many variations of passages available, but the majority
          suffered alterations with dummy text.
        </p>
      </div>

      {/* About links */}
      <div>
        <h1 className="text-lg sm:text-xl font-semibold mb-4 text-black">
          About
        </h1>
        <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
          <li className="hover:text-green-600 cursor-pointer">Discover</li>
          <li className="hover:text-green-600 cursor-pointer">Find Travel</li>
          <li className="hover:text-green-600 cursor-pointer">Popular Destinations</li>
          <li className="hover:text-green-600 cursor-pointer">Reviews</li>
        </ul>
      </div>

      {/* Support links */}
      <div>
        <h1 className="text-lg sm:text-xl font-semibold mb-4 text-black">
          Support
        </h1>
        <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
          <li className="hover:text-green-600 cursor-pointer">Customer Support</li>
          <li className="hover:text-green-600 cursor-pointer">Privacy & Policy</li>
          <li className="hover:text-green-600 cursor-pointer">Contact Channels</li>
        </ul>
      </div>

      {/* Newsletter */}
      <div>
        <h1 className="text-lg sm:text-xl font-semibold mb-4 text-black">
          Join our community 🔥
        </h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative max-w-md"
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full pr-14 pl-4 py-3 rounded-full text-black border border-gray-400 focus:outline-none text-sm sm:text-base"
            aria-label="Email address"
          />
          <button
            type="submit"
            aria-label="Subscribe"
            className="absolute right-1 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-green-600 flex items-center justify-center shadow-lg hover:bg-green-700 transition"
            title="Subscribe"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline-block"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
