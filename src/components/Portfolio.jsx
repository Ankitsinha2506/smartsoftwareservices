import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Enterprise E-commerce System',
    description: 'Scalable online platform with secure payment gateways and user management for retail businesses.',
    image: 'https://via.placeholder.com/400x300?text=Project+1',
    link: '#'
  },
  {
    title: 'Corporate Intranet Portal',
    description: 'Secure internal website with collaboration tools and content management for enterprises.',
    image: 'https://via.placeholder.com/400x300?text=Project+2',
    link: '#'
  },
  {
    title: 'Mobile FinTech App',
    description: 'Secure mobile banking application with real-time transactions and biometric authentication.',
    image: 'https://via.placeholder.com/400x300?text=Project+3',
    link: '#'
  },
  {
    title: 'AI-Driven Customer Support Bot',
    description: 'Intelligent chatbot using NLP for automated customer service and query resolution.',
    image: 'https://via.placeholder.com/400x300?text=Project+4',
    link: '#'
  }
];

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={cardVariants}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Our Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover="hover"
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <a 
                  href={project.link} 
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;