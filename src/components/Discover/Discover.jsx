// ARSEN`S ROUTE
import { useState } from "react";
import { tours } from "../../pages/ToursPage/Array";
import { GoHeartFill } from "react-icons/go";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Discover = () => {
    const [likedItems, setLikedItems] = useState({});

    const toggleLike = (id) => {
        setLikedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className="max-w-[1120px] mx-auto px-4">
            <div className="flex relative flex-col lg:justify-baseline lg:items-baseline justify-center items-center text-center lg:text-left">
                <h1 className="text-[#23262F] text-[32px] md:text-[48px] font-[600] pb-[10px]">
                    Discover
                    <span className="hidden lg:inline"> more</span>
                    <span className="lg:hidden"> Weekly</span>
                </h1>
                <div className="flex lg:flex-row flex-col lg:justify-between items-center">
                    <p className="text-[#777E90] text-[16px] lg:text-[20px] font-[400] w-full lg:w-[544px]">
                        An enim nullam tempor sapien gravida donec enim ipsum
                    </p>
                    <div className="flex gap-[8px] lg:mt-0 mt-[40px] lg:absolute lg:right-0">
                        <div className="swiper-button-prev !static w-[40px] h-[40px] p-[11px] rounded-full bg-[#FCFCFD] shadow flex items-center justify-center cursor-pointer">
                            <FaArrowLeftLong className="text-[#777E90] text-[10px]" />
                        </div>
                        <div className="swiper-button-next !static w-[40px] h-[40px] p-[11px] rounded-full bg-[#FCFCFD] shadow flex items-center justify-center cursor-pointer">
                            <FaArrowRightLong className="text-[#777E90] text-[10px]" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-[32px] md:mt-[64px]">
                <Swiper
                    modules={[Navigation]}
                    navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                    spaceBetween={20}
                    loop={true}
                    breakpoints={{
                        320: { slidesPerView: 1.2 },
                        1024: { slidesPerView: 4 },
                    }}>
                    {tours.map((cart) => (
                        <SwiperSlide key={cart.id}>
                            <div className="w-full pb-[32px] relative bg-white rounded-[16px]">
                                <img
                                    className="rounded-t-[16px] w-full h-[220px] object-cover"
                                    src={cart.img}
                                    alt=""
                                />
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
                                                transition={{ duration: 0.4 }}
                                            >
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Discover;