import { BrowserRouter, Routes, Route } from "react-router";
import SignUpPage from "./pages/auth/SignUpPage";
import SignInPage from "./pages/auth/SignInPage";
import ConfirmCode from "./pages/auth/ConfirmCode";

function App() {
  return ( 
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/confirm" element={<ConfirmCode />} />
      </Routes>
  );
}

export default App;
