// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children, showHero = false }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
} 