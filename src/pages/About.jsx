// src/pages/About.jsx
import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-6 py-16 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-8">About Me</h1>
        <div className="prose prose-lg">
          <p className="text-gray-700 mb-6">
            I'm a passionate web designer and developer with expertise in creating modern, 
            responsive websites and web applications. With a strong foundation in both design 
            and development, I bring creative ideas to life through clean code and intuitive user experiences.
          </p>
          <p className="text-gray-700 mb-6">
            My journey in web development started with a curiosity about how websites work, 
            and has evolved into a passion for creating digital solutions that solve real problems. 
            I believe in writing clean, maintainable code and designing interfaces that users love to interact with.
          </p>
          <p className="text-gray-700">
            When I'm not coding, you can find me exploring new design trends, learning new technologies, 
            or contributing to open-source projects. I'm always excited to take on new challenges 
            and collaborate with creative teams.
          </p>
        </div>
      </div>
    </div>
  );
} 