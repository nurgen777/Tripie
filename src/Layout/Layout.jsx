import { useState, useEffect } from "react"
import { Link, Outlet } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"
import { Globe, Menu, X } from "lucide-react"

import Header from "../Header/Header"   
import Boxcard from "../components/Boxcard/Boxcard"
import Card from "../components/Card/Card"
import PilotCard from "../components/PilotCard/PilotCard"
import IconsCard from "../components/IconsCard/IconsCard"
import Kombo from "../components/Kombo/Kombo"
import Testimonials from "../components/Testimonials/Testimonials"
import VideoCard from "../components/VideoCard/VideoCard"
import AdvikeCard from "../components/AdvikeCard/AdvikeCard"
import Footer from "../Footer/Footer"

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <div className="bg-white min-h-screen text-gray-800 flex flex-col">
      
      {/* HEADER */}
      <header className="w-full shadow-sm border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="logo" className="w-8 h-8" />
            <Link to="/" className="text-xl font-bold tracking-wide">Tripie</Link>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8 items-center text-sm lg:text-base">
            <Link to="/tours" className="hover:text-green-600 transition">Tours</Link>
            <Link to="/destination" className="hover:text-green-600 transition">Destination</Link>
            <Link to="/virtual" className="hover:text-green-600 transition">Virtual tour</Link>
            <Link to="/blog" className="hover:text-green-600 transition">Blog</Link>
            <Link to="/about" className="hover:text-green-600 transition">About</Link>
            <Link to="/contact" className="hover:text-green-600 transition">Contact</Link>

            <div className="flex items-center gap-1 pl-4 cursor-pointer hover:text-green-600">
              <Globe size={18} /> <span>English</span>
            </div>
          </nav>

          {/* DESKTOP AUTH */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="border border-gray-400 px-4 py-1 rounded-full hover:border-green-600 transition">Login</Link>
            <Link to="/signup" className="bg-green-600 text-white px-4 py-1 rounded-full hover:bg-green-700 transition">Sign up</Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE NAV */}
        {isOpen && (
          <div className="md:hidden bg-gray-50 px-4 py-3 flex flex-col gap-3 text-sm">
            <Link to="/tours" onClick={() => setIsOpen(false)}>Tours</Link>
            <Link to="/destination" onClick={() => setIsOpen(false)}>Destination</Link>
            <Link to="/virtual" onClick={() => setIsOpen(false)}>Virtual tour</Link>
            <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/login" onClick={() => setIsOpen(false)} className="border border-gray-400 px-4 py-1 rounded-full text-center">Login</Link>
            <Link to="/signup" onClick={() => setIsOpen(false)} className="bg-green-600 text-white px-4 py-1 rounded-full text-center">Sign up</Link>
          </div>
        )}
      </header>

      {/* CONTENT */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Header />
        <Boxcard />
        <Card />
        <PilotCard />
        <IconsCard />
        <Kombo />
        <Testimonials />
        <VideoCard />
        <AdvikeCard />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* OUTLET */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  )
}
