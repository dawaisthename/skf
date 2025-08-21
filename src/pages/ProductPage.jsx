import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
// import blog from "../assets/images/blog.jpg"; // Image is not used in the code.
import diary from "../assets/images/diary.jpg";
import fetting from "../assets/images/fetting.jpg";
import poultry from "../assets/images/poultry.jpg";
import Footer from "../components/Footer";

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
      {/* <section className="relative py-32 bg-gradient-to-r from-[#9CDA0C] to-[#72B02C] text-white text-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('path_to_hero_image.jpg')` }} 
        ></div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold leading-tight mb-4 drop-shadow-xl">
            Premium Livestock Feeds for Optimal Growth
          </h1>
          <p className="text-lg mb-8 font-medium opacity-90 drop-shadow-lg">
            Our feeds are expertly formulated to nourish and enhance the health
            of your livestock, ensuring better yields, healthier animals, and
            optimized productivity.
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-white text-[#9CDA0C] font-semibold rounded-lg shadow-md transition-all hover:bg-[#9CDA0C] hover:text-white hover:scale-110 transform">
              Get In Touch
            </button>
          </Link>
        </div>
      </section> */}
      productpage
      {/* <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-[#9CDA0C] dark:text-white text-center mb-12">
            Explore Our Premium Feeds
          </h2>
          <p className="text-2xl font-light text-center text-gray-700 dark:text-gray-400 mb-12">
            Nourishing livestock with the right nutrients to support their
            growth and well-being.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            <div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
              onClick={() => scrollToSection("poultry")}
            >
              <img
                src={poultry}
                alt="Poultry Feeds"
                className="w-full h-72 object-cover rounded-md mb-6"
              />
              <h3 className="text-2xl font-semibold text-[#9CDA0C] mb-3">
                Poultry Feeds
              </h3>

              <p className="text-lg font-light text-gray-700 dark:text-gray-300 mb-4">
                Specially formulated to support the growth of young chickens and
                enhance egg production in laying hens.
              </p>
            </div>

            <div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
              onClick={() => scrollToSection("dairy")}
            >
              <img
                src={diary}
                alt="Dairy Feeds"
                className="w-full h-72 object-cover rounded-md mb-6"
              />
              <h3 className="text-2xl font-semibold text-[#9CDA0C] mb-3">
                Dairy Feeds
              </h3>

              <p className="text-lg font-light text-gray-700 dark:text-gray-300 mb-4">
                Optimized for lactating cows, our dairy feed maximizes milk
                production and cow health.
              </p>
            </div>

            <div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => scrollToSection("fattening")}
            >
              <img
                src={fetting}
                alt="Fattening Feeds"
                className="w-full h-72 object-cover rounded-md mb-6"
              />
              <h3 className="text-2xl font-semibold text-[#9CDA0C] mb-3">
                Fattening Feeds
              </h3>

              <p className="text-lg font-light text-gray-700 dark:text-gray-300 mb-4">
                Formulated to promote healthy weight gain while ensuring a
                balanced diet for cattle and pigs.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-[#9CDA0C] dark:text-white text-center mb-12">
            Dive Deeper Into Our Products
          </h2>

          <div
            id="poultry"
            className="flex flex-wrap justify-between items-center mb-16"
          >
            <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 pr-6">
              <img
                src={poultry}
                alt="Poultry Feeds"
                className="w-full h-96 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-all"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/3">
              <h3 className="text-3xl font-semibold text-[#9CDA0C] mb-4">
                Poultry Feeds
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Our Poultry Feeds are enriched with all the essential nutrients
                to ensure healthy growth and peak productivity.
              </p>
              <h4 className="text-xl font-semibold text-[#9CDA0C] mb-3">
                Key Benefits:
              </h4>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400 mb-6">
                <li>Increases egg production</li>
                <li>Supports growth in chicks</li>
                <li>Boosts immunity and overall health</li>
                <li>Rich in vitamins and minerals</li>
              </ul>
              <h4 className="text-xl font-semibold text-[#9CDA0C] mb-3">
                Ingredients:
              </h4>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400 mb-6">
                <li>Corn</li>
                <li>Soybean Meal</li>
                <li>Wheat Bran</li>
                <li>Vitamins and Minerals</li>
              </ul>
              <h4 className="text-xl font-semibold text-[#9CDA0C] mb-3">
                Usage Instructions:
              </h4>
              <p className="text-gray-700 dark:text-gray-400">
                Mix with clean water and provide in a clean feeding tray. Adjust
                portions according to your flock's size.
              </p>
            </div>
          </div>

          <div
            id="dairy"
            className="flex flex-wrap justify-between items-center mb-16"
          >
            <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 pr-6">
              <img
                src={diary}
                alt="Dairy Feeds"
                className="w-full h-96 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-all"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/3">
              <h3 className="text-3xl font-semibold text-[#9CDA0C] mb-4">
                Dairy Feeds
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Our Dairy Feeds are designed to optimize milk production,
                ensuring high-quality milk and healthy cows.
              </p>
              <h4 className="text-xl font-semibold text-[#9CDA0C] mb-3">
                Key Benefits:
              </h4>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400 mb-6">
                <li>Boosts milk yield</li>
                <li>Improves cow health</li>
                <li>Enhances nutrient absorption</li>
                <li>Rich in fiber and proteins</li>
              </ul>
              <h4 className="text-xl font-semibold text-[#9CDA0C] mb-3">
                Ingredients:
              </h4>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400 mb-6">
                <li>Alfalfa</li>
                <li>Oats</li>
                <li>Soybean Meal</li>
                <li>Vitamins and Minerals</li>
              </ul>
              <h4 className="text-xl font-semibold text-[#9CDA0C] mb-3">
                Usage Instructions:
              </h4>
              <p className="text-gray-700 dark:text-gray-400">
                Mix with clean water or add to feed. Adjust portions as per your
                cow's production stage.
              </p>
            </div>
          </div>

          <div
            id="fattening"
            className="flex flex-wrap justify-between items-center mb-16"
          >
            <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 pr-6">
              <img
                src={fetting}
                alt="Fattening Feeds"
                className="w-full h-96 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-all"
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/3">
              <h3 className="text-3xl font-semibold text-[#9CDA0C] mb-4">
                Fattening Feeds
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Designed to promote healthy weight gain in livestock, while
                maintaining a balanced diet.
              </p>
              <h4 className="text-xl font-semibold text-[#9CDA0C] mb-3">
                Key Benefits:
              </h4>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400 mb-6">
                <li>Promotes healthy weight gain</li>
                <li>Enhances muscle growth</li>
                <li>Improves feed efficiency</li>
                <li>Increases fat deposition</li>
              </ul>
              <h4 className="text-xl font-semibold text-[#9CDA0C] mb-3">
                Ingredients:
              </h4>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400 mb-6">
                <li>Maize</li>
                <li>Molasses</li>
                <li>Rice Bran</li>
                <li>Vitamins and Minerals</li>
              </ul>
              <h4 className="text-xl font-semibold text-[#9CDA0C] mb-3">
                Usage Instructions:
              </h4>
              <p className="text-gray-700 dark:text-gray-400">
                Add to feed as per the weight and age of the animal. Ensure
                access to clean water.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <Footer />
    </>
  );
}

export default ProductPage;
