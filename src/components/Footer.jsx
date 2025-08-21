import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { IoIosSend } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaFacebook, FaTiktok, FaLinkedin } from "react-icons/fa6";
import bg from "../assets/images/automate.jpg";
import companyLogo from "../assets/images/logo.png";

const Footer = () => {
  const [from_email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!from_email) {
      setStatus("Please enter your email address.");
      return;
    }

    const serviceId = "service_kx9s4uo";
    const templateId = "template_aupeoru";
    const publicKey = "WMQmPd6JPoTHz4QLo";

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_email,
          company_name: "Mati Feeds Team",
          message: `User with email ${from_email} is interested in your service.`,
        },
        publicKey
      );

      if (result.status === 200) {
        setStatus("Thank you for subscribing!");
        setEmail("");
      } else setStatus("Something went wrong. Please try again later.");
    } catch (error) {
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <footer className="relative bg-[#000033] dark:bg-[#000030] text-[#333] py-12">
      {/* Background image */}
      <img
        src={bg}
        alt="Footer Background"
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Semi-transparent overlay for soft greyish effect */}
      <div className="absolute inset-0 bg-white/90 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[#000033]/20 pointer-events-none"></div>

      {/* Footer content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
        {/* Logo and Socials */}
        <div>
          <Link to="/" className="flex items-center">
            <img
              src={companyLogo}
              className="w-30 h-16 object-cover drop-shadow-md"
              alt="Company Logo"
            />
          </Link>

          <p className="text-sm mb-4 leading-6">
            Copyright © 2024 Mati Feeds Ltd. <br />
            All rights reserved
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/share/1QAPhaNfgy/?mibextid=qi2Omg"
              className="p-2 bg-[#000033] text-white rounded-full hover:bg-white hover:text-[#9CDA0C] transition-all duration-500 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.tiktok.com/@mati_feeds?_t=8scTtRqhnlN&_r=1"
              className="p-2 bg-[#000033] text-white rounded-full hover:bg-white hover:text-[#9CDA0C] transition-all duration-500 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.linkedin.com/company/mati-animals-feed/"
              className="p-2 bg-[#000033] text-white rounded-full hover:bg-white hover:text-[#9CDA0C] transition-all duration-500 ease-in-out"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="font-bold text-[#000033] mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-[#000033]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#000033]">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#000033]">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/product" className="hover:text-[#000033]">
                Product
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-[#000033] mb-4">Stay up to date</h4>
          <form className="flex space-x-2" onSubmit={handleSubmit}>
            <input
              type="email"
              value={from_email}
              name="from_email"
              onChange={handleEmailChange}
              placeholder="Your email address"
              className="flex-1 p-2 rounded-md border-2 border-[#000033] focus:outline-none focus:ring-2 focus:ring-[#9CDA0C]"
            />
            <button
              type="submit"
              className="p-2 w-10 h-10 bg-[#000033] text-white rounded-full flex items-center justify-center hover:bg-[#8EC50D] transition"
            >
              <IoIosSend />
            </button>
          </form>
          {status && <div className="mt-2 text-sm text-gray-800">{status}</div>}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
