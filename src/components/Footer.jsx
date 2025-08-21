// src/components/Footer.jsx
import React from 'react';
import logo from '../assets/rpLogoWhite.png';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-start">
        <div className="space-y-4">
          <div className="space-y-2 text-sm">
            <p>aidar.uraev.nyc@gmail.com</p>
            <p>+1 (929) 260-5117</p>
          </div>
        </div>
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-12 w-auto"
          />
        </div>
      </div>
    </footer>
  );
}
