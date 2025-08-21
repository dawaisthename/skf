import React from "react";
import blog from "../assets/images/blog.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Innovative Animal Nutrition: A Journey with Mati Feeds
            </h1>
            <div className="text-gray-600 text-sm">
              <span>
                Posted on: <time dateTime="2024-12-12">December 12, 2024</time>
              </span>
              <span className="ml-4">By: Mati Feeds Team</span>
            </div>
          </header>

          <img
            src={blog}
            alt="Mati Feeds Image"
            className="w-full h-72 object-cover mb-8 rounded-lg shadow-lg"
          />

          <article className="prose lg:prose-xl text-gray-700">
            <p>
              At Mati Feeds, innovation and quality define our approach to
              animal nutrition. Over the past two years, we have committed
              ourselves to transforming the agricultural sector in Ethiopia,
              focusing on producing superior animal feed solutions that empower
              farmers and promote sustainable practices.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              Our Products and Purpose
            </h2>
            <p>
              We specialize in producing tailored feed formulations for poultry,
              dairy, and fattening livestock, ensuring optimal health and
              productivity. Our mission is to support the agricultural community
              by providing scientifically formulated feeds that meet
              international quality standards, certified through rigorous
              testing.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
              Commitment to Quality
            </h3>
            <p>
              Quality and safety are at the heart of everything we do. Through
              partnerships with globally renowned organizations such as Champrix
              CO., and adherence to ISO/IEC 17025:2017 standards, we ensure that
              every batch of feed meets stringent quality benchmarks.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              A Sustainable Future
            </h2>
            <p>
              Beyond providing high-quality feeds, Mati Feeds is dedicated to
              fostering sustainable farming practices. Our operations integrate
              environmental responsibility and community engagement, aligning
              with national initiatives like the "Bounty of the Basket" program.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">
              Innovation at the Core
            </h3>
            <p>
              From sourcing premium raw materials to employing cutting-edge
              manufacturing processes, our innovative approach ensures that
              farmers can rely on us to meet their evolving needs. With a
              state-of-the-art facility and a vision for international
              expansion, Mati Feeds is driving agricultural growth in Ethiopia
              and beyond.
            </p>

            <blockquote className="bg-gray-100 p-4 rounded-lg border-l-4 border-green-500 text-gray-600">
              "At Mati Feeds, we are more than a feed company—we are partners in
              progress, committed to building a sustainable future for
              agriculture."
            </blockquote>

            <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
              Join Us on This Journey
            </h2>
            <p>
              Whether you’re a farmer looking for reliable feed solutions or an
              organization seeking a partner in sustainable agriculture, Mati
              Feeds is here to help. Together, we can achieve excellence in
              animal nutrition and contribute to a prosperous agricultural
              future.
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default BlogPage;
