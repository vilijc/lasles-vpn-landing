import React, { useState } from "react"
import logo from "../assets/logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between py-4 bg-transparent relative">
      <div className="flex items-center z-20">
        <img src={logo} alt="Logo" style={{ width: 125, height: 24 }} />
      </div>
      <div className="hidden md:flex gap-4 lg:gap-[64px]">
        <a href="#features" className="text-base font-light text-gray-700 hover:text-red-500 transition">Features</a>
        <a href="#pricing" className="text-base font-light text-gray-700 hover:text-red-500 transition">Pricing</a>
        <a href="#testimonial" className="text-base font-light text-gray-700 hover:text-red-500 transition">Testimonial</a>
        <a href="#help" className="text-base font-light text-gray-700 hover:text-red-500 transition">Help</a>
      </div>
      <div className="hidden md:flex gap-4">
        <button className="bg-white text-black font-light px-6 py-2 rounded shadow-none border-none">Sign in</button>
        <button className="bg-white text-[red] font-light px-6 py-2" style={{ borderRadius: 20, border: '2px solid red', height: 36, paddingTop: 4 }}>Sign up</button>
      </div>
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-30"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {menuOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center gap-4 md:hidden z-20">
          <a href="#features" className="text-lg font-light text-gray-700 hover:text-red-500 transition" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#pricing" className="text-lg font-light text-gray-700 hover:text-red-500 transition" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#testimonial" className="text-lg font-light text-gray-700 hover:text-red-500 transition" onClick={() => setMenuOpen(false)}>Testimonial</a>
          <a href="#help" className="text-lg font-light text-gray-700 hover:text-red-500 transition" onClick={() => setMenuOpen(false)}>Help</a>
          <div className="flex flex-col gap-4 w-full items-center mt-4">
            <button className="bg-white text-black font-light px-6 py-2 rounded shadow-none border-none w-40">Sign in</button>
            <button className="bg-white text-[red] font-light px-6 py-2 w-40" style={{ borderRadius: 20, border: '2px solid red', height: 36, paddingTop: 4 }}>Sign up</button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
