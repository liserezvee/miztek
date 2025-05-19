"use client"
import { useState } from 'react';
import { GrTechnology } from 'react-icons/gr';
import { HiMenu, HiX } from 'react-icons/hi'; // Icons for mobile toggle

import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-2xl font-bold text-gray-800">
          <h3 className="text-3xl">MizTek</h3>
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
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#devservices">Our Dev Services</Link></li>
            <li><Link href="#work">Our Work</Link></li>
            <li><Link href="#team">Team</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>
      )}
    </motion.nav>
  );
}
