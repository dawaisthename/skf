import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import AboutUs from "../components/AboutUs";
import WhatWeDo from "../components/WhatWeDo";
import Highlights2 from "../components/Highlights2";
import Banner from "../components/Banner";
import BannerTwo from "../components/BannerTwo";
import Footer from "../components/Footer";
function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <Highlights />
      {/* <Highlights2 /> */}
      {/* <BannerTwo />

      <Banner /> */}

      <Footer />
    </>
  );
}

export default LandingPage;
