import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import HeroImage from '../assets/contact-hero.jpg'; // 👉 replace with your image path

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setSubmitted(true);
    // Integrate with email service or backend here
  };

  const position = [51.505, -0.09]; // Example coordinates, replace with your office location

  return (
    <>
      {/* ✅ Hero Section with Full Image */}
      <section
        className="w-full h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        {/* Overlay for readability */}
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

      {/* ✅ Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
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
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Map + Info */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="mb-8 md:mb-0"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Our Location</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Visit our office or reach out via the form. We’re here to help you.
              </p>
              <div className="h-64 rounded-lg overflow-hidden shadow-md">
                <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={position}>
                    <Popup>Our Office</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </motion.div>
            
            {/* Contact Form */}
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
    </>
  );
};

export default Contact;
