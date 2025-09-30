import React from "react";
import { GiMusicalNotes } from "react-icons/gi";

const ContactPage = () => {
  return (
    <section className="text-gray-700 body-font relative">
      {/* Map Background */}
      <div className="absolute inset-0">
        <iframe
          width="100%"
          height="100%"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462117.05875496974!2d66.82512040270016!3d25.19345704170243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1735878818748!5m2!1sen!2s"
          className="filter grayscale opacity-30 contrast-125"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-red-200 opacity-70"></div>
      </div>

      {/* Contact Card */}
      <div className="container px-6 py-24 mx-auto flex justify-center">
        <div className="lg:w-1/3 md:w-1/2 bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl p-10 relative z-10 border border-gray-200">
          {/* Heading */}
          <h2 className="flex items-center gap-2 text-gray-900 text-2xl font-bold mb-6">
            Contact Us <GiMusicalNotes className="text-red-600 text-2xl" />
          </h2>

          {/* Email Input */}
          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white/80 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-800 py-2 px-4 transition duration-200 ease-in-out"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message Input */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white/80 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-800 py-2 px-4 h-32 resize-none transition duration-200 ease-in-out"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-red-600 text-white py-3 px-6 rounded-full font-semibold text-lg shadow-md hover:bg-red-700 transition-all duration-300">
            <a href="/">Send Message</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
