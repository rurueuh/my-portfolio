import React from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col justify-center items-center bg-gray-900 snap-start"
    >
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false}}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>
      <motion.form
        className="w-full max-w-md bg-gray-800 p-6 rounded shadow-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-300 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="shadow appearance-none border border-gray-600 
                       rounded w-full py-2 px-3 bg-gray-700 
                       text-gray-100 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-300 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            className="shadow appearance-none border border-gray-600 
                       rounded w-full py-2 px-3 bg-gray-700 
                       text-gray-100 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-300 text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            className="shadow appearance-none border border-gray-600 
                       rounded w-full py-2 px-3 bg-gray-700 
                       text-gray-100 focus:outline-none"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 
                       text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </div>
      </motion.form>
    </section>
  );
};

export default ContactSection;
