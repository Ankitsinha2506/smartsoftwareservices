import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const particlesRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.width = `${Math.random() * 10 + 5}px`;
      particle.style.height = particle.style.width;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 3 + 3}s`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      particlesRef.current.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 6000);
    };

    const interval = setInterval(createParticle, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900"
      style={{
        backgroundImage: "url('https://i.pinimg.com/1200x/f8/ef/dd/f8efdd49ac8e7e4c4abc17ca922bfacc.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Particles */}
      <div className="particles absolute inset-0" ref={particlesRef}></div>

      {/* Content */}
      <div className="container-custom text-center z-10 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Smart Software Services Pvt. Ltd.
          </h1>
          <div className="text-2xl md:text-4xl font-semibold mb-8 text-gray-200">
            <TypeAnimation
              sequence={[
                'Innovative Web Solutions',
                1000,
                'Advanced Mobile Apps',
                1000,
                'Reliable Cloud Services',
                1000,
                'AI-Powered Intelligence',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline-block"
            />
          </div>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300">
            Delivering cutting-edge IT solutions to transform your business with expertise and innovation.
          </p>
          <motion.a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
