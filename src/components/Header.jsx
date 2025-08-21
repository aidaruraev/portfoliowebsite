// src/components/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/rpLogoWhite.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside the entire header, not just the menu
      if (!event.target.closest('header')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-black text-white relative">
      <div className="flex items-center p-6">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-8 w-auto cursor-pointer"
            />
          </Link>
        </div>
        <div 
          className="text-white cursor-pointer flex flex-col items-end ml-auto"
          onClick={toggleMenu}
        >
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-5 h-0.5 bg-white mb-1"></div>
          <div className="w-4 h-0.5 bg-white"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        ref={menuRef}
        className={`absolute top-0 right-0 h-full bg-black z-50 transition-all duration-1000 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 transform translate-x-0' 
            : 'opacity-0 transform translate-x-full pointer-events-none'
        }`}
      >
        <nav className="px-6 py-4 min-w-64 h-full flex items-center">
          <ul className="flex space-x-8">
            <li>
              <Link 
                to="/" 
                className="block text-white hover:text-blue-400 transition-colors text-lg font-league-spartan font-light"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="block text-white hover:text-blue-400 transition-colors text-lg font-league-spartan font-light"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className="block text-white hover:text-blue-400 transition-colors text-lg font-league-spartan font-light"
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link 
                to="/skills" 
                className="block text-white hover:text-blue-400 transition-colors text-lg font-league-spartan font-light"
              >
                SKILLS
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="block text-white hover:text-blue-400 transition-colors text-lg font-league-spartan font-light"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 