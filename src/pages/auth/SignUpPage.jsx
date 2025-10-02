import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import Button from "../../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUpPage = () => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password1 || !password2) {
      alert("Бардык талааларды толтуруңуз!");
      return;
    }

    if (password1 !== password2) {
      alert("Сырсөздөр бири-бирине дал келбейт!");
      return;
    }

    
    const code = Math.floor(1000 + Math.random() * 9000).toString();

    
    localStorage.setItem("signupEmail", email);
    localStorage.setItem("signupPassword", password1);
    localStorage.setItem("confirmCode", code);

    alert(`Код ${email} дарегине жөнөтүлдү (демо: ${code})`);

    navigate("/confirm");
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex w-120 h-[100vh]">
        <img
          src="/signup-bg.png"
          alt="Sign up background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex w-full md:w-1/2 mx-auto items-center justify-center bg-white">
        <div className="max-w-md w-full px-6 py-12">
          <div className="flex justify-center mb-10">
            <img src="/logo.svg" alt="Logo" className="w-16 h-16" />
          </div>

          <h2 className="text-3xl font-bold text-center mb-4">Sign up</h2>
          <p className="text-gray-500 text-center mb-10">
            Use Your OpenID to Sign up
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-4xl text-gray-500 px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <div className="relative mb-4">
              <input
                type={showPassword1 ? "text" : "password"}
                placeholder="Password 1"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
                className="w-full border rounded-4xl text-gray-500 px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <span
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                onClick={() => setShowPassword1(!showPassword1)}
              >
                {showPassword1 ? (
                  <IoEyeOutline size={24} />
                ) : (
                  <IoEyeOffOutline size={24} />
                )}
              </span>
            </div>

            <div className="relative mb-4">
              <input
                type={showPassword2 ? "text" : "password"}
                placeholder="Password 2"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                className="w-full border rounded-4xl text-gray-500 px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <span
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                onClick={() => setShowPassword2(!showPassword2)}
              >
                {showPassword2 ? (
                  <IoEyeOutline size={24} />
                ) : (
                  <IoEyeOffOutline size={24} />
                )}
              </span>
            </div>

            <Button
              type="submit"
              className="w-[120px] flex text-center justify-center m-auto bg-green-500 text-white py-3 rounded-4xl hover:bg-green-600"
            >
              Sign up
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link to="/signin" className="text-green-600 font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
