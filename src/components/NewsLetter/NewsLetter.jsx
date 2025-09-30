// ARSENS ROUTE
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import photosA from "../../assets/photosA.png";
import photosB from "../../assets/photosB.png";

const NewsLetter = () => {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [showEnvelope, setShowEnvelope] = useState(false);
    const [error, setError] = useState(false);

    const isValidEmail = (val) => val.trim().includes("@");

    const handleSubscribe = () => {
        if (submitted) return;
        if (!isValidEmail(email)) {
            setError(true);
            return;
        }

        setError(false);
        setShowEnvelope(true);

        setTimeout(() => {
            setShowEnvelope(false);
            setSubmitted(true);
        }, 1200);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSubscribe();
        }
    };

    return (
        <div className="lg:w-[1280px] w-[375px] mx-auto lg:mb-[30px] flex flex-col lg:flex-row justify-between items-center pt-[100px]">
            <div className="flex lg:justify-baseline lg:items-baseline lg:text-left justify-center items-center flex-col text-center">
                <h5 className="text-[#777E90] text-[12px] font-[700] pb-[5px]">Take A Tour</h5>
                <h1 className="text-[#23262F] lg:text-[48px] text-[32px] font-[600] lg:w-[200px]">Join our newsletter</h1>
                <p className="text-[#777E90] lg:py-[30px] pt-[10px] pb-[30px] w-[327px] lg:w-[448px]">
                    An enim nullam tempor gravida donec enim congue magna at pretium purus pretium ligula rutrum luctus risusd diam eget risus varius blandit.
                </p>
                {!submitted ? (
                    <motion.div
                        animate={error ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }}
                        transition={{ duration: 0.42 }}
                        className={`border-2 rounded-[90px] w-[352px] h-[48px] flex items-center justify-between pl-[16px] pr-[8px] relative overflow-hidden ${error ? "border-red-400" : "border-[#E6E8EC]"
                            }`}>
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                if (error && isValidEmail(e.target.value)) setError(false);
                            }}
                            onKeyDown={handleKeyDown}
                            className="text-[#777E90] text-[15px] font-[600] w-[278px] outline-none bg-transparent"
                            type="text"
                            placeholder="Enter your email"
                            aria-invalid={error}
                            disabled={showEnvelope}/>
                        <button
                            onClick={handleSubscribe}
                            disabled={showEnvelope}
                            className="bg-[#4AC63F] w-[32px] h-[32px] rounded-[50%] flex justify-center items-center disabled:opacity-60">
                            <img src="/arrowRA.svg" alt="send" />
                        </button>
                        <AnimatePresence>
                            {showEnvelope && (
                                <motion.div
                                    initial={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                                    animate={{ opacity: 0, y: -120, rotate: -15, scale: 0.8 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    className="absolute left-1/2 transform -translate-x-1/2 text-2xl pointer-events-none">
                                    ✉️
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.45 }}
                        className="mt-4 text-[#4AC63F] font-bold text-lg">
                        Subscribed successfully!
                    </motion.div>
                )}
                {error && (
                    <p className="text-red-400 text-[15px] mt-3">
                        Enter a valid email — it must contain "@"
                    </p>
                )}
            </div>
            <img className="lg:hidden mt-[40px] mb-[80px]" width={375} height={388} src={photosB} alt="" />
            <img className="hidden lg:inline-block" width={800} height={702} src={photosA} alt="" />
        </div>
    );
};

export default NewsLetter;