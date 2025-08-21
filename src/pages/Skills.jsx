// src/pages/Skills.jsx
import React from 'react';

export default function Skills() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-6 py-16 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8">My Skills & Expertise</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Development */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Frontend Development</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">HTML</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">CSS</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">JavaScript</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">React</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{width: '88%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Backend Development */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Backend Development</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Node.js</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Express.js</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">MongoDB</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">PostgreSQL</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '65%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Design & Tools */}
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Design & Tools</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Figma</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Adobe XD</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Git</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Docker</span>
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Skills */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-black mb-6">Additional Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <span className="text-gray-800 font-medium">TypeScript</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <span className="text-gray-800 font-medium">Next.js</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <span className="text-gray-800 font-medium">Tailwind CSS</span>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <span className="text-gray-800 font-medium">GraphQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 