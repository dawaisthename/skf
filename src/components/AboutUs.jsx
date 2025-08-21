import React from "react";
import workers from "../assets/images/Artboard 9.jpg";
import { Link } from "react-router-dom";
import workers3 from "../assets/images/Artboard 10.jpg";
import bg from "../assets/images/automate.jpg";

function AboutUs() {
  return (
    <section className="bg-[#000033] dark:bg-[#000030] relative">
      <img
        src={bg}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90 pointer-events-none"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000033]/70 pointer-events-none"></div>

      <section className="relative bg-white/80 dark:bg-gray-900/80 z-10">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="relative w-full h-full flex justify-center">
            {/* Big main image */}
            <img
              src={workers}
              alt="Main image"
              className="w-3/4 rounded-xl shadow-lg object-cover"
            />

            {/* Smaller overlapping image */}
            <img
              src={workers3}
              alt="Overlay image"
              className="absolute bottom-[-30px] right-10 w-1/3 rounded-xl shadow-xl border-4 border-white"
            />
          </div>

          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 relative m-10">
            <h2 className="text-3xl font-extrabold text-[#000030] dark:text-white mb-4">
              Who Are We
            </h2>

            <p className="text-lg text-[#000033] dark:text-gray-400 mb-6">
              SKF NUBEYIL Bearing is a Swedish Public technology and engineering
              Company Focused on reducing energy waste by Combating Friction.
            </p>
            <div className="mt-8 flex justify-center items-center">
              <Link to="/about">
                <button className="px-3 py-2 bg-[#000030] text-white font-light rounded-lg shadow-md hover:bg-white hover:text-[#9CDA0C] focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src={workers3}
              alt="Our Mission Image"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-[#9CDA0C] dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
              To deliver superior animal nutrition solutions through innovation
              and sustainability, while fostering local economic growth and
              supporting farmers.
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default AboutUs;
