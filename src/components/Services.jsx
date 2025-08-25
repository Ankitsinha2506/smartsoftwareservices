import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Code, Smartphone, Cloud, Brain } from 'lucide-react';

const services = [
  {
    icon: <Code size={48} />,
    title: 'Web Development',
    description: 'Building responsive, scalable web applications using latest frameworks like React and Node.js.'
  },
  {
    icon: <Smartphone size={48} />,
    title: 'Mobile App Development',
    description: 'Creating intuitive mobile experiences for iOS and Android with React Native or native development.'
  },
  {
    icon: <Cloud size={48} />,
    title: 'Cloud Services',
    description: 'Implementing secure, efficient cloud infrastructures with AWS, Azure, and DevOps practices.'
  },
  {
    icon: <Brain size={48} />,
    title: 'AI & Machine Learning',
    description: 'Developing smart algorithms and ML models to drive data-driven decisions and automation.'
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.2 }
    }
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={cardVariants}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Our Services
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={cardVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <div className="text-blue-500 dark:text-blue-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;