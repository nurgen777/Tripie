import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/auth/SignUpPage";
import SignInPage from "./pages/auth/SignInPage";
import ConfirmCode from "./pages/auth/ConfirmCode";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/confirm" element={<ConfirmCode />} />
    </Routes>
  );
}

export default App;
