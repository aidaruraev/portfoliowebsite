// src/pages/Projects.jsx
import React from 'react';

export default function Projects() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-6 py-16 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">E-commerce Platform</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Modern E-commerce Solution</h3>
              <p className="text-gray-600 mb-4">A full-stack e-commerce platform built with React, Node.js, and MongoDB.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">React</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">MongoDB</span>
              </div>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">Portfolio Website</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Personal Portfolio</h3>
              <p className="text-gray-600 mb-4">A responsive portfolio website showcasing my work and skills.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">React</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Tailwind CSS</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">JavaScript</span>
              </div>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">Task Manager</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Project Management App</h3>
              <p className="text-gray-600 mb-4">A collaborative task management application with real-time updates.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">React</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">Firebase</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 