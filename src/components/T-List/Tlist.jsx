// ARSEN`S ROUTE
import { useState } from "react";
import { tours } from "../../pages/ToursPage/Array";
import { GoHeartFill } from "react-icons/go";
import { motion } from "framer-motion";

const Tlist = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeDate, setActiveDate] = useState(null);
  const [showDates, setShowDates] = useState(false);
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (id) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const allDates = tours.map((cart) => cart.date)

  const filteredTours = tours.filter((cart) => {
    if (activeDate) return cart.date === activeDate;
    if (activeFilter === "All") return true;
    return cart.category === activeFilter;
  });

  return (
    <div className="lg:w-[832px]">
      <div className="flex lg:flex-row flex-col lg:justify-between items-center mb-[48px]">
        <div className="flex lg:gap-[8px] gap-[7px] mb-[24px]">
          {["All", "Cheapest", "Best", "Quickest"].map((item, index) => (
            <button
              key={index}
              className={`lg:px-[16px] lg:py-[6px] px-[12px] py-[4px] font-[600] rounded-[100px] ${activeFilter === item && !activeDate
                ? "bg-black text-white"
                : "tb"}`}
              onClick={() => {
                setActiveFilter(item);
                setActiveDate(null);
              }}>{item}</button>))}
        </div>

        <div className="relative">
          <button
            onClick={() => setShowDates(!showDates)}
            className="date w-[256px] flex justify-between items-center py-[8px] pr-[8px] pl-[16px] border-[1px] border-[#E6E8EC] rounded-[12px]">
            <h3 className="text-[#23262F] text-[14px] font-[500]">
              {activeDate ? activeDate : "Time of day"}
            </h3>
            <span className="w-[30px] h-[30px] flex justify-center border-[2px] border-[#E6E8EC] rounded-[50%]">
              <img width={9} height={10} src="/arrowBA.svg" alt="" />
            </span>
          </button>
          <div className={`absolute right-0 mt-2 w-[256px] bg-white border border-[#E6E8EC] rounded-[12px] shadow-lg z-10 dropdown ${showDates ? "open" : ""}`}>
            {allDates.map((date, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveDate(date);
                  setShowDates(false);
                }}
                className="w-full text-left px-4 py-2 hover:bg-[#f5f5f5] text-[#23262F] text-[14px]">
                {date}</button>))}
          </div>
        </div>
      </div>

      <div className="flex justify-between flex-wrap">
        {filteredTours.map((cart) => (
          <div className="lg:w-[256px] w-[327px] pb-[32px] relative" key={cart.id}>
            <img className="rounded-t-[16px] w-full h-[220px]" src={cart.img} alt="" />
            <div className="py-[20px] px-[8px]">
              <div>
                <h3 className="text-[#141416] text-[16px] font-[600]">
                  {cart.title}
                </h3>
                <motion.button
                  onClick={() => toggleLike(cart.id)}
                  whileTap={{ scale: 0.8 }}
                  className="top-[16px] right-[16px] flex justify-center items-center w-[32px] h-[32px] rounded-[50%] bg-[#FCFCFD] cursor-pointer absolute"
                >
                  <motion.div
                    animate={{
                      scale: likedItems[cart.id] ? [1, 1.5, 1] : 1,
                      color: likedItems[cart.id] ? "#e11d48" : "#444",
                    }}
                    transition={{ duration: 0.4 }}>
                    <GoHeartFill className="text-[20px]" />
                  </motion.div>
                </motion.button>
                <div className="flex justify-between items-center pt-[8px] border-b-[1px] border-b-[#E6E8EC] pb-[16px]">
                  <h4 className="text-[#353945] text-[12px] font-[400]">
                    {cart.author}
                  </h4>
                  <p className="text-[#4AC63F] text-[12px] font-[700]">
                    <span className="text-[#B1B5C3] line-through pr-[6px]">
                      ${cart.oldPrice}
                    </span>
                    ${cart.price}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center pt-[16px]">
                <p className="text-[#777E90] text-[12px] font-[400]">
                  {cart.date}
                </p>
                <span className="text-[#23262F] text-[13px] font-[600] flex items-center gap-[4px]">
                  <img src="/star.svg" alt="" />
                  {cart.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tlist;