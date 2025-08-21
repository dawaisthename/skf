import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContactPage() {
  // State for form data
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // // State for status message (success/error)
  // const [status, setStatus] = useState(null);

  // // Reference for the form
  // const form = useRef();

  // // Handle form input changes
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value, // Update state correctly
  //   }));
  // };

  // // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Validation: Ensure all fields are filled
  //   if (!formData.name || !formData.email || !formData.message) {
  //     setStatus("Please fill in all fields.");
  //     return;
  //   }

  //   const serviceId = "service_kx9s4uo";
  //   const templateId = "template_awyhhwa";
  //   const publicKey = "WMQmPd6JPoTHz4QLo";

  //   setStatus("Sending...");

  //   try {
  //     const result = await emailjs.sendForm(
  //       serviceId,
  //       templateId,
  //       form.current,
  //       publicKey
  //     );
  //     if (result.status === 200) {
  //       setStatus("Message sent successfully!");
  //       setFormData({
  //         name: "",
  //         email: "",
  //         message: "",
  //       });
  //     } else {
  //       setStatus(
  //         "There was an error sending your message. Please try again later."
  //       );
  //     }
  //   } catch (error) {
  //     setStatus(
  //       "There was an error sending your message. Please try again later."
  //     );
  //   }
  // };

  return (
    <>
      <Navbar />
      <section className="py-20 px-6 sm:px-8 lg:px-16 text-gray-900">
        <h2 className="text-3xl font-bold text-center text-[#9CDA0C] mb-8">
          Get in Touch
        </h2>
        {/* 
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="from_name"
                  className="block text-lg font-medium"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="name" // Make sure 'name' matches the state variable
                  value={formData.name}
                  onChange={handleChange} // Handle input change properly
                  className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9CDA0C]"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9CDA0C]"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9CDA0C]"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#9CDA0C] text-white font-bold py-3 rounded-md hover:bg-[#9CDA0C]80 transition"
              >
                Send Message
              </button>
            </form>

            {status && (
              <div className="mt-4 text-center text-lg text-gray-800">
                <p>{status}</p>
              </div>
            )}
          </div>

          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Contact Details</h3>
              <div className="space-y-4 text-lg">
                <p className="text-gray-800">
                  📍 <strong>Address:</strong>Sheger city, Gelan Guda Subcity
                </p>
                <p className="text-gray-800">
                  📞 <strong>Phone:</strong> +251-908-08-08-97
                </p>
                <p className="text-gray-800">
                  📞 <strong>Phone:</strong> +251-910-04-00-44
                </p>
                <p className="text-gray-800">
                  📞 <strong>Phone:</strong> +251-932-13-13-00
                </p>
                <p className="text-gray-800">
                  📧 <strong>Email:</strong> contact@matianimalsfeed.org
                </p>
              </div>
            </div>

      
            <div>
              <h3 className="text-xl font-semibold">Our Location</h3>
              <div className="w-full h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63075.99021814744!2d38.73943967518573!3d8.85635890656234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b773d2c9831ad%3A0x1eae1cb429353cf9!2sSheger%20City%20Gelan%20Sub-city!5e0!3m2!1sen!2set!4v1735188905719!5m2!1sen!2set"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>      */}
      </section>
      <Footer />
    </>
  );
}

export default ContactPage;
