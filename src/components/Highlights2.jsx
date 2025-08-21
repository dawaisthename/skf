import React, { useState } from "react";
import bg2 from "../assets/images/gear.jpg"; // big background image 1

function Highlights2() {
  const highlights = [
    {
      title: "Global Presence",
      text: "Delivering solutions across continents with reliable logistics.",
      icon: "🌍",
    },
    {
      title: "High Precision",
      text: "Cutting-edge technology ensures accuracy and performance.",
      icon: "⚙️",
    },
    {
      title: "Trusted Quality",
      text: "Decades of expertise with consistent customer satisfaction.",
      icon: "✅",
    },
    {
      title: "Serving Industries",
      text: "Supporting automotive, manufacturing, and more.",
      icon: "🏭",
    },
  ];

  return (
    <section className="relative bg-[#000033] py-20 px-6 sm:px-8 lg:px-16 text-gray-200 overflow-hidden">
      {/* Big background images */}
      <img
        src={bg2}
        alt="Background gear"
        className="absolute top-0 left-0 w-full h-full object-cover bg-center opacity-10 pointer-events-none"
      />

      <div className="absolute inset-0 bg-[url('/your-bg.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Quick Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg 
                        transition transform hover:-translate-y-2 hover:shadow-2xl border border-white/20"
            >
              <div className="text-4xl mb-4 transition group-hover:scale-125">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-200">{item.text}</p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500/20 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights2;
