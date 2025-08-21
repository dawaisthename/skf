// import React from "react";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { bearings } from "../data/bearings";

function ProductPage() {
  // Optional: Define the scrollToSection function if you want to use scrolling.
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen -mt-20 bg-[#000033] text-white py-12 px-6">
        <section className="relative flex flex-col items-center justify-center text-center py-16 px-6 sm:px-8 lg:px-16">
          {/* Page Title */}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 drop-shadow-md">
            Our Products
          </h1>
          <p className="max-w-3xl text-lg sm:text-xl text-gray-300 mb-12">
            Explore our wide range of high-precision bearings engineered for
            performance, durability, and efficiency.
          </p>

          {/* Bearings Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {bearings.map((bearing, index) => (
              <div
                key={index}
                className="group relative bg-white/10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden perspective-1000"
              >
                {/* Image & Overlay */}
                <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-y-12">
                  <img
                    src={bearing.image}
                    alt={bearing.title}
                    className="max-h-full object-contain p-4"
                  />

                  {/* Name on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
                    <h2 className="text-lg font-semibold text-white">
                      {bearing.title}
                    </h2>
                  </div>
                </div>

                {/* Glowing Border Effect on Hover */}
                <div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#9CDA0C] transition-all duration-500"
                  style={{
                    boxShadow: "0 0 10px #9CDA0C, inset 0 0 10px #9CDA0C",
                    opacity: 0,
                    transition: "opacity 0.5s ease-in-out",
                    ...{ "--tw-group-hover-opacity": "1" }, // Tailwind compatibility for hover
                  }}
                ></div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default ProductPage;
