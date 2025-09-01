import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import HeroImage from '../assets/contact-hero.jpg'; // 👉 replace with your image

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
    // Integrate with email service or backend here
  };

  const position = [51.505, -0.09]; // 👉 Replace with your office coordinates

  return (
    <>
      {/* ✅ Hero Section */}
      <section
        className="w-full h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
          >
            Have questions or need assistance? Our team is here to help you every step of the way.
          </motion.p>
        </div>
      </section>

      {/* ✅ Contact Info + Form */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 id=contact-form">
        <div className="container mx-auto px-4">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
          >
            Get in Touch
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Left: Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">Address</p>
                    <p className="text-gray-600 dark:text-gray-400">Smart Software Services (I) Pvt. Ltd. ,406 Changbhale Heights, Jawalkar Nagar Near Kalpataru Society, Phase-3, Pimple Gurav Pune - 411061</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-green-100 dark:bg-green-900 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m0 0l-4 4m4-4l-4-4m12 8h4M12 6h.01M12 18h.01M3 12h.01" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">hr@smartsoftwareservice.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.518 4.55a1 1 0 01-.272 1.06l-2.122 2.121a16.001 16.001 0 006.586 6.586l2.121-2.122a1 1 0 011.061-.272l4.55 1.518a1 1 0 01.684.95V19a2 2 0 01-2 2H19C10.716 21 3 13.284 3 5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">Phone</p>
                    <p className="text-gray-600 dark:text-gray-400">+91 7066511234</p>
                  </div>
                </div>
              </div>
            </motion.div>


            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              {submitted ? (
                <p className="text-green-600 font-semibold">✅ Thank you for your message! We’ll get back to you soon.</p>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300">Name</label>
                    <input
                      {...register('name', { required: true })}
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                    />
                    {errors.name && <span className="text-red-500">This field is required</span>}
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300">Email</label>
                    <input
                      {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                    />
                    {errors.email && <span className="text-red-500">Valid email is required</span>}
                  </div>
                  <div>
                    <label className="block text-gray-700 dark:text-gray-300">Message</label>
                    <textarea
                      {...register('message', { required: true })}
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
                      rows="4"
                    ></textarea>
                    {errors.message && <span className="text-red-500">This field is required</span>}
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ✅ Map Below Section */}
      {/* ✅ Google Maps Embed */}
      <section className="h-96 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.4281793663845!2d73.81525657524983!3d18.599801282509183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b955a170b2a7%3A0x2f87854968031160!2sSmart%20Software%20Services%20(I)%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1756222930885!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

    </>
  );
};

export default Contact;
