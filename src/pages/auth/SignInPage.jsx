import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem("signupEmail");
    const storedPassword = localStorage.getItem("signupPassword"); 

    if (!email || !password) {
      alert("Бардык талааларды толтуруңуз!");
      return;
    }

    if (email === storedEmail && password === storedPassword) {
      alert("Login successful ✅");
      navigate("/"); 
    } else {
      alert("Email же пароль туура эмес ❌");
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex w-120 h-[100vh]">
        <img
          src="/woman.png"
          alt="Sign in background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex w-full md:w-1/2 items-center justify-center bg-white mx-auto">
        <div className="max-w-md w-full px-6 py-12">
          <div className="flex justify-center mb-10">
            <img src="/logo.svg" alt="Logo" className="w-16 h-16" />
          </div>

          <h2 className="text-3xl font-bold text-center mb-4">Sign in</h2>
          <p className="text-gray-500 text-center mb-10">
            Use Your OpenID to Sign in
          </p>

          <div className="flex gap-4 justify-center mb-6">
            <Button className="flex border-gray-300 items-center gap-2 border-2 rounded-4xl py-3 w-1/2 justify-center">
              <FcGoogle className="w-[30px] h-[35px] mt-[-3px]" />
              Google
            </Button>
            <Button className="flex border-gray-300 items-center gap-2 border-2 rounded-4xl w-1/2 justify-center">
              <FaApple className="w-[30px] h-[35px] mt-[-5px]" />
              Apple ID
            </Button>
          </div>

          <div className="flex items-center gap-2 mb-8">
            <span className="m-auto text-sm text-gray-300">
              Or continue with email
            </span>
          </div>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-4xl text-gray-500 px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <div className="relative w-full mb-4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded-4xl text-gray-500 px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <IoEyeOutline className="w-7 h-7" />
                ) : (
                  <IoEyeOffOutline className="w-7 h-7" />
                )}
              </button>
            </div>

            <h3 className="text-center text-sm text-black-500 font-[700] mt-6">
              Forgot Password?
            </h3>

            <Button
              type="submit"
              className="w-[120px] flex text-center mt-8 justify-center m-auto bg-green-500 text-white py-3 rounded-4xl hover:bg-green-600"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
