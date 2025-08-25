import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// Note: For Google Maps, you might want to use react-google-maps-api instead, but here I'm using Leaflet as a free alternative. Adjust as needed.

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
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Contact Us
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8 md:mb-0"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">We'd love to hear from you. Fill out the form or visit us at our office.</p>
            <div className="h-64 rounded-lg overflow-hidden">
              <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position}>
                  <Popup>Our Office</Popup>
                </Marker>
              </MapContainer>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            {submitted ? (
              <p className="text-green-600">Thank you for your message!</p>
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
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;