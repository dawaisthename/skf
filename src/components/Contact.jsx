import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    to_name: "mati feeds",
    message: "",
  });

  // State for handling form submission status
  const [status, setStatus] = useState(null);

  // Reference for the form
  const form = useRef();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_f14h1ur";
    const templateId = "template_43888qi";
    const publicKey = "w--rOkwl-Kux4ORCX";

    // Validate the form inputs before submitting
    if (!formData.from_name || !formData.from_email || !formData.message) {
      setStatus("Please fill in all the fields.");
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        console.log("Message sent successfully!", Response);

        // Reset form inputs
        setFormData({
          from_name: "",
          from_email: "",
          to_name: "mati feeds",
          message: "",
        });
      },
      (error) => {
        console.log(
          "There was an error sending your message. Please try again later.",
          error.text
        );
        setStatus(
          "There was an error sending your message. Please try again later."
        );
      }
    );
  };

  return (
    <section className="bg-gradient-to-r from-[#9CDA0C] via-[#9CDA0C70] to-[#ffffff30] py-20 px-6 sm:px-8 lg:px-16 text-gray-900">
      <h2 className="text-4xl font-bold text-center mb-8">
        Contact <span className="text-[#9CDA0C]">Us</span>
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div>
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="from_name"
                className="block text-white text-lg font-medium"
              >
                Full Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                className="w-full p-3 border-2 border-white bg-transparent rounded-md text-white focus:outline-none focus:border-[#ffffff]"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label
                htmlFor="from_email"
                className="block text-white text-lg font-medium"
              >
                E-mail
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                className="w-full p-3 border-2 border-white bg-transparent rounded-md text-white focus:outline-none focus:border-[#ffffff]"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-white block text-lg font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border-2 border-white bg-transparent rounded-md text-white focus:outline-none focus:border-[#ffffff]"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-[#9CDA0C] font-bold py-3 rounded-md hover:bg-[#ffffffcc] transition"
            >
              Send
            </button>
          </form>
          {status && (
            <div className="mt-4 text-red text-center">
              <p>{status}</p>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg text-white font-bold">Contact</h3>
            <p>contact@matianimalsfeed.com</p>
          </div>
          <div>
            <h3 className="text-lg text-white font-bold">Based in</h3>
            <p>Ethiopia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
