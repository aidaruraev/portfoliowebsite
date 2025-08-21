// src/components/Hero.jsx
import React from 'react';

export default function Hero() {
  return (
    <section className="bg-black text-white relative overflow-hidden">
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center py-20 relative">
        {/* Name and Title */}
        <div className="text-center">
          <h1 className="text-6xl font-bold text-center">Aidar Uraev</h1>
          <h2 className="text-2xl text-center mt-2">WEB-DESIGNER</h2>
        </div>
      </div>
    </section>
  );
}
  