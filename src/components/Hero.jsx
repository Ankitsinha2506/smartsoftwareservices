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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800">
      <div className="particles" ref={particlesRef}></div>
      <div className="container-custom text-center z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-gradient">
            Smart Software Services Pvt. Ltd.
          </h1>
          <div className="text-2xl md:text-4xl font-semibold mb-8 text-gray-700 dark:text-gray-300">
            <TypeAnimation
              sequence={
                [
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
          <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Delivering cutting-edge IT solutions to transform your business with expertise and innovation.
          </p>
          <motion.a
            href="#contact"
            className="btn-primary"
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