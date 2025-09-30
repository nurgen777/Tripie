import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/auth/SignUpPage";
import SignInPage from "./pages/auth/SignInPage";
import ConfirmCode from "./pages/auth/ConfirmCode";
import Tours from './pages/ToursPage/Tours'
import BlogPage from "./pages/BlogPage/BlogPage";
import ContactPage from './pages/ContactPage/ContactPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<h2>Home page</h2>} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/confirm" element={<ConfirmCode />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/tours" element={<Tours />} />
    </Routes>
  )
}

export default App;
