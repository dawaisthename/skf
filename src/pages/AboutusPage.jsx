import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage from "../assets/images/Artboard 10.jpg";
import missionImage from "../assets/images/Artboard 3.jpg";
import bearing from "../assets/images/bearing.png";

function AboutusPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#000033] dark:bg-[#000030] text-white font-sans">
        {/* Hero Section */}
        <section
          className="relative -mt-20 min-h-screen flex items-center bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-[#000030] bg-opacity-70"></div>

          {/* Hero content - centered vertically and horizontally */}
          <div className="relative z-10 max-w-screen-xl px-4 py-8 mx-auto flex items-center justify-center text-center">
            <div className="max-w-3xl">
              {/* Hero Subtitle */}

              {/* Hero Heading */}
              {/* <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 drop-shadow-md">
                Our Story
              </h1> */}
              {/* Hero Paragraph
              <p className="text-xl sm:text-2xl text-gray-200">
                With a history lasting back to 1907, SKF Nubeyil has grown into
                a large multinational corporation with a global presence and a
                wide range of applications across various industries.
              </p> */}
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 drop-shadow-md">
                Welcome hand to hand with skf Nubeyil Company to create
                beautiful tomorrow
              </h1>
              {/* <h3 className="mb-6 font-bold text-white text-lg sm:text-xl lg:text-2xl">
                Welcome hand to hand with skf Nubeyil Company to create
                beautiful tomorrow
              </h3> */}
            </div>
          </div>
        </section>

        {/* Mission & Values Section - Two-Column Layout */}
        <section className="py-16 px-6 sm:px-8 lg:px-16">
          <div className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16 items-center m-10">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 drop-shadow-md">
              Our Story
            </h1>
            {/* Hero Paragraph */}
            <p className="text-xl sm:text-2xl text-gray-200">
              With a history lasting back to 1907, SKF Nubeyil has grown into a
              large multinational corporation with a global presence and a wide
              range of applications across various industries.
            </p>
          </div>

          <div className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="lg:order-2">
              <img
                src={missionImage}
                alt="Our Mission"
                className="w-full h-auto rounded-xl shadow-lg mb-8 lg:mb-0 object-cover"
              />
            </div>
            <div className="lg:order-1 font-light text-gray-400">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Our Mission
              </h2>
              <p className="mb-4 text-lg">
                Our core mission is to deliver high-quality, high-precision
                bearings and related solutions that reduce energy waste by
                combating friction. We are a company committed to meticulous
                production, from raw material to final assembly.
              </p>
              <p className="mb-4 text-lg">
                As a member of the Europe Association of Automobile
                Manufacturers and a national high-tech enterprise, we are
                dedicated to setting the highest industry standards.
              </p>
            </div>
          </div>
        </section>

        {/* Industries We Serve Section - Card Layout */}
        <section className="bg-[#000033] py-16 px-6 sm:px-8 lg:px-16">
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-12">
              Industries We Serve
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Our products are widely used across a diverse range of critical
              industries, demonstrating our versatility and engineering
              excellence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Industry Card 1 */}
              <div className="group p-6 bg-white/10 rounded-xl shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">
                  <span role="img" aria-label="car">
                    🚗
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Automotive & Railway
                </h3>
                <p className="text-gray-300">
                  Powering vehicles and railways with innovative bearing and
                  sealing solutions.
                </p>
              </div>

              {/* Industry Card 2 */}
              <div className="group p-6 bg-white/10 rounded-xl shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">
                  <span role="img" aria-label="factory">
                    🏭
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Heavy Industries
                </h3>
                <p className="text-gray-300">
                  Providing rugged and reliable solutions for power-generation,
                  mining, and metallurgy.
                </p>
              </div>

              {/* Industry Card 3 */}
              <div className="group p-6 bg-white/10 rounded-xl shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">
                  <span role="img" aria-label="agriculture">
                    🚜
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Agriculture
                </h3>
                <p className="text-gray-300">
                  Supporting sustainable farming with durable and efficient
                  mechanical systems.
                </p>
              </div>

              {/* Industry Card 4 */}
              <div className="group p-6 bg-white/10 rounded-xl shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">
                  <span role="img" aria-label="gear">
                    ⚙️
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Machine Tools
                </h3>
                <p className="text-gray-300">
                  Enabling high-precision manufacturing with cutting-edge
                  bearing technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section - Two-Column Layout */}
        <section className="py-16 px-6 sm:px-8 lg:px-16">
          <div className="max-w-screen-xl mx-auto lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="lg:order-1">
              <img
                src={bearing}
                alt="Our Team"
                className="w-full h-auto rounded-xl shadow-lg mb-8 lg:mb-0 object-cover"
              />
            </div>
            <div className="lg:order-2 font-light text-gray-400">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Our Process
              </h2>
              <p className="mb-4 text-lg">
                SKF Nubeyil is a leading global supplier of products, services,
                and solutions, with rolling bearings, seals, mechatronics, and
                lubrication systems.
              </p>
              <p className="mb-4 text-lg">
                Our production process is meticulously controlled at every step,
                from selecting the finest raw materials to the final product. We
                ensure the highest level of quality through a rigorous process
                of self-inspection, follow-up inspection, and full inspection.
              </p>
              <p className="mb-4 text-lg">
                This commitment to excellence ensures that all our products
                reach the highest standards, earning us the trust of businesses
                worldwide.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default AboutusPage;
