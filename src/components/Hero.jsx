import React from "react";
import { Link } from "react-router-dom";
import white_logo from "../assets/images/Logo-SKF_white.png";
import heroBg from "../assets/images/Artboard 5.jpg";
import heroBg2 from "../assets/images/Artboard 4.jpg";
function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative md:-mt-20 min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#000030] bg-opacity-70"></div>

        {/* Hero content */}
        <div className="relative z-10 grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            {/* <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-5xl text-white">
              skf
            </h1> */}
            <img
              src={white_logo}
              className="w-full max-w-xs h-auto object-cover"
              alt="Hero Illustration"
            />
            <h3 className="max-w-2xl mb-6 font-bold text-white lg:mb-8 md:text-lg lg:text-2xl">
              Built for power and durability
            </h3>
            <p className="max-w-2xl mb-6 text-gray-300 lg:mb-8 md:text-lg lg:text-xl">
              At SKF NUBEYIL, our purpose is simple, yet profound: we fight
              friction to move the world forward.
            </p>
            <Link to="contact">
              <button className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-[#000030] rounded-lg bg-white hover:bg-white hover:text-[#9CDA0C] hover:shadow-lg transition duration-300 ease-in-out focus:ring-4 focus:ring-primary-300">
                Get In Touch
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
          {/* <div className="lg:col-span-5 flex justify-center mt-8 lg:mt-0">
            <img
              src={white_logo}
              className="w-full max-w-xs h-auto object-cover"
              alt="Hero Illustration"
            />
          </div> */}
        </div>
      </section>

      {/* Our Clients Section */}
      {/* <section className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-[#9CDA0C] mb-4">
            Our Clients
          </h2>
          <div className="text-center mb-12">
            <p className="text-3xl font-semibold text-dark mb-4">
              We have worked with over 50 clients
            </p>
            <p className="text-xl font-light text-gray-700 dark:text-gray-300">
              Meet Some of Our Valued Clients
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
            {[Sheger, devbank, bejia, ata].map((logo, idx) => (
              <div key={idx} className="flex justify-center">
                <img
                  src={logo}
                  alt={`Client ${idx + 1}`}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Hero;
