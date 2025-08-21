import React, { useState } from "react";
import auto from "../assets/images/Artboard 7.jpg";
import mining from "../assets/images/Artboard 3.jpg";
import agriculture from "../assets/images/Artboard 10.jpg";
import bg2 from "../assets/images/gear.jpg";

const industries = [
  {
    title: "Automotive",
    img: auto,
    desc: "Innovative bearing solutions powering mobility worldwide.",
  },
  {
    title: "Mining & Metallurgy",
    img: mining,
    desc: "Rugged solutions built for extreme conditions.",
  },
  {
    title: "Agriculture",
    img: agriculture,
    desc: "Sustainable farming supported by durable systems.",
  },
];
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
const Highlights = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % industries.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + industries.length) % industries.length);

  return (
    <section className="relative bg-[#000033] py-20 px-6 sm:px-8 lg:px-16 text-gray-200 overflow-hidden">
      <img
        src={bg2}
        alt="Background gear"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
          Industry Highlights
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Explore the industries we proudly support with advanced engineering.
        </p>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-20 bg-white/20 hover:bg-[#9CDA0C] text-white p-3 rounded-full shadow-lg transition"
          >
            ◀
          </button>

          {/* Active Slide */}
          <div className="w-full sm:w-3/4 lg:w-2/3 relative">
            <img
              src={industries[current].img}
              alt={industries[current].title}
              className="w-full h-[350px] object-cover rounded-2xl shadow-lg transition-transform duration-700"
            />
            <h3 className="mt-6 text-2xl font-semibold text-[#9CDA0C]">
              {industries[current].title}
            </h3>
            <p className="mt-2 text-gray-300">{industries[current].desc}</p>
          </div>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-20 bg-white/20 hover:bg-[#9CDA0C] text-white p-3 rounded-full shadow-lg transition"
          >
            ▶
          </button>
        </div>
      </div>
      <div className="relative max-w-6xl mx-auto mt-10 px-6 text-center">
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
};

export default Highlights;
