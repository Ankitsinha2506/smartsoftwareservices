import React from "react";
import { motion } from "framer-motion";
import AboutImage from "../assets/About.jpg"

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function AboutHeroSection() {
  return (
    <section className="w-full h-screen bg-cover bg-center flex items-center justify-center">
      {/* Background image */}
      <img
        src={AboutImage}
        alt="Corporate Team"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(65%)" }}
      />
      {/* Headline */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="relative z-10 text-white text-3xl md:text-5xl font-bold tracking-widest text-center"
      >
        WE’RE A CREATIVE FIRM
      </motion.h1>
      {/* Top overlay for fade effect */}
      <div className="absolute inset-0 bg-black opacity-30" />
    </section>
  );
}

export default AboutHeroSection;
