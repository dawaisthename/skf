import React from "react";
import product from "../assets/images/Artboard 5.jpg";
import service from "../assets/images/Artboard 10.jpg";
import industry from "../assets/images/Artboard 7.jpg";
import bg1 from "../assets/images/gear.jpg"; // big background image 1
import bg2 from "../assets/images/automate.jpg"; // big background image 2

const WhatWeDo = () => {
  return (
    <section className="relative bg-[#000033] py-20 px-6 sm:px-8 lg:px-16 text-gray-200 overflow-hidden">
      {/* Big background images */}
      <img
        src={bg2}
        alt="Background gear"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />

      {/* Overlay for subtle effect */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl text-[#fffff] font-bold mb-6 leading-tight">
          What We Do
        </h2>
        <p className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto">
          We provide high-quality feed products, innovative services, and
          industry support to empower sustainable livestock farming and enhance
          productivity.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Card 1 */}
          <div className="relative group p-6 bg-white/10 rounded-xl shadow-xl overflow-hidden hover:bg-[#fffff] transition-all duration-300">
            <img
              src={product}
              alt="Products"
              className="h-45 w-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-500"
            />
            <h3 className="text-xl font-semibold text-[#9CDA0C] group-hover:text-white mb-2">
              Products
            </h3>
            <p className="text-gray-200 group-hover:text-white transition-colors duration-300">
              we offer a wide range of products including rolling
              bearings,seals,lubrication systems,mechatronics, and condition
              monitoring solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative group p-6 bg-white/10 rounded-xl shadow-xl overflow-hidden hover:bg-[#fffff] transition-all duration-300">
            <img
              src={service}
              alt="Services"
              className="h-45 w-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-500"
            />
            <h3 className="text-xl font-semibold text-[#9CDA0C] group-hover:text-white mb-2">
              Services
            </h3>
            <p className="text-gray-200 group-hover:text-white transition-colors duration-300">
              SKF NUBEYIL provides services like maintenance,technical
              support,condition monitoring,training,and logistics.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative group p-6 bg-white/10 rounded-xl shadow-xl overflow-hidden hover:bg-[#fffff] transition-all duration-300">
            <img
              src={industry}
              alt="Industry Focus"
              className="h-45 w-full object-cover mx-auto mb-6 group-hover:scale-110 transition-transform duration-500"
            />
            <h3 className="text-xl font-semibold text-[#9CDA0C] group-hover:text-white mb-2">
              Industry Focus
            </h3>
            <p className="text-gray-200 group-hover:text-white transition-colors duration-300">
              SKF NUBEYIL serves a diverse range of industries including
              railway,aerospace,heavy industries,automotive,and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
