import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { GrTechnology } from "react-icons/gr";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 	bg-[#E6FFFA]	shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-2xl font-bold text-gray-800">
          <h3 className="text-3xl">OLINKO</h3>
          <GrTechnology />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-black font-bold">
          <li><a href="#services">Services</a></li>
          <li><a href="#devservices">Our Dev Services</a></li>
          <li><a href="#work">Our Work</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-3xl text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-4 text-black font-bold">
            <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
            <li><a href="#devservices" onClick={() => setIsOpen(false)}>Our Dev Services</a></li>
            <li><a href="#work" onClick={() => setIsOpen(false)}>Our Work</a></li>
            <li><a href="#team" onClick={() => setIsOpen(false)}>Team</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}
