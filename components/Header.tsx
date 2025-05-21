'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-4 left-8 right-8 z-50 h-16 transition-all duration-500 rounded-full ${scrolled ? 'backdrop-blur-lg bg-white/90 shadow-lg' : 'backdrop-blur-lg bg-white/70'} max-w-6xl mx-auto`}>
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="group">
            <span className="text-xl font-bold flex items-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-600">
              <span className={`w-4 h-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full mr-1 transition-all duration-700 group-hover:rotate-180`}></span>
              Rewbi
              <span className="ml-1 text-xs font-normal bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">AI</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/" className="relative px-2 py-1 text-gray-700 font-medium text-sm uppercase tracking-wide group hover:text-white transition-colors duration-300">
            <span className="relative">
              Home
              <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-[#031209] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          
          <Link href="/features" className="relative px-2 py-1 text-gray-700 font-medium text-sm uppercase tracking-wide group hover:text-white transition-colors duration-300">
            <span className="relative">
              Features
              <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-[#031209] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          
          <Link href="/solutions" className="relative px-2 py-1 text-gray-700 font-medium text-sm uppercase tracking-wide group hover:text-white transition-colors duration-300">
            <span className="relative">
              Solutions
              <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-[#031209] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          
          <Link href="/blog" className="relative px-2 py-1 text-gray-700 font-medium text-sm uppercase tracking-wide group hover:text-white transition-colors duration-300">
            <span className="relative">
              Resources
              <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-[#031209] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          
          <Link href="/pricing" className="relative px-2 py-1 text-gray-700 font-medium text-sm uppercase tracking-wide group hover:text-white transition-colors duration-300">
            <span className="relative">
              Pricing
              <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-[#031209] transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>

          {/* Get Demo Button */}
          <div className="relative group ml-2">
            <div className="absolute -inset-0.5 bg-[#031209] rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
            <button className="relative px-4 py-1 bg-[#031209] rounded-lg text-sm font-semibold text-white flex items-center ">
              Get Demo <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="text-gray-800 focus:outline-none p-1 rounded-full hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={20} className="text-gray-700" />
            ) : (
              <Menu size={20} className="text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container mx-auto px-4 py-3 bg-white/95 backdrop-blur-sm border-t border-gray-100 rounded-b-lg">
          <div className="flex flex-col space-y-2">
            <Link href="/" onClick={toggleMenu} className="px-3 py-2 text-gray-800 font-medium rounded-lg hover:bg-gray-50 hover:text-red-500 transition-colors duration-300">
              Home
            </Link>
            <Link href="/features" onClick={toggleMenu} className="px-3 py-2 text-gray-800 font-medium rounded-lg hover:bg-gray-50 hover:text-red-500 transition-colors duration-300">
              Features
            </Link>
            <Link href="/solutions" onClick={toggleMenu} className="px-3 py-2 text-gray-800 font-medium rounded-lg hover:bg-gray-50 hover:text-red-500 transition-colors duration-300">
              Solutions
            </Link>
            <Link href="/blog" onClick={toggleMenu} className="px-3 py-2 text-gray-800 font-medium rounded-lg hover:bg-gray-50 hover:text-red-500 transition-colors duration-300">
              Resources
            </Link>
            <Link href="/pricing" onClick={toggleMenu} className="px-3 py-2 text-gray-800 font-medium rounded-lg hover:bg-gray-50 hover:text-red-500 transition-colors duration-300">
              Pricing
            </Link> 
            
            <button className="mt-1 px-4 py-2 bg-[#031209] text-white font-semibold rounded-lg flex items-center justify-center">
              Get Demo <ArrowRight className="ml-1 h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}