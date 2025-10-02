import React from "react"
import Layout, { HomePage } from "./Layout/Layout"
import DetailPage from "./components/DetailPage/DetailPage";
import PaymentSettings from "./components/PaymentSettings/PaymentSettings";
import { Routes, Route, Link } from "react-router-dom";
import SignUpPage from "./pages/auth/SignUpPage";
import SignInPage from "./pages/auth/SignInPage";
import ConfirmCode from "./pages/auth/ConfirmCode";
import Tours from './pages/ToursPage/Tours'
import BlogPage from "./pages/BlogPage/BlogPage";
import ContactPage from './pages/ContactPage/ContactPage'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="/payment" element={<PaymentSettings />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/confirm" element={<ConfirmCode />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/tours" element={<Tours />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

