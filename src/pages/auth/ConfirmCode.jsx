import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ConfirmCode = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", ""]);

  const handleChange = (value, index) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    
    if (value && index < code.length - 1) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  const handleConfirm = () => {
    const finalCode = code.join("");
    const correctCode = localStorage.getItem("confirmCode");
    const email = localStorage.getItem("signupEmail");

    if (finalCode.length < 4) {
      alert("Please enter full 4-digit code!");
      return;
    }

    if (finalCode === correctCode) {
      alert(`Success! ${email} аккаунту тастыкталды ✅`);
      navigate("/signin"); 
    } else {
      alert("Code is incorrect ❌");
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex w-120 h-[100vh]">
        <img
          src="/signup-bg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex w-full md:w-1/2 items-center justify-center bg-white mx-auto">
        <div className="max-w-md w-full px-6 py-12 text-center">
          <div className="flex justify-center mb-6">
            <img src="/logo.svg" alt="Logo" className="w-16 h-16" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Enter your security code
          </h2>
          <p className="text-gray-500 mb-8">
            We sent your code to <strong>{localStorage.getItem("signupEmail")}</strong>
          </p>

          <div className="flex justify-center gap-4 mb-8">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                className="w-12 h-12 md:w-14 md:h-14 text-center text-xl border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            ))}
          </div>

          <button
            onClick={handleConfirm}
            className="w-[140px] mx-auto block bg-green-500 text-white py-3 rounded-4xl hover:bg-green-700 transition"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCode;
