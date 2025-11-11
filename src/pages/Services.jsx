import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code,
  Smartphone,
  Cloud,
  Brain,
  Server,
  Database,
  Shield,
  Settings,
  Globe,
  ShoppingCart,
  Users,
  Network
} from 'lucide-react';

import ServiceHero from '../components/ServiceHero';
import ServiceFeatures from '../components/ServiceFeatures';
import MainServices from '../components/MainServices';
import CoreFeatures from '../components/CoreFeatures';
import ThreeColumnFeatures from '../components/ThreeColumnFeatures';
import ServiceContactSection from '../components/ServiceContactSection';

const services = [
  {
    icon: <Code size={48} />,
    title: 'Web Development',
    description: 'Building responsive, scalable web applications using modern frameworks like React, Angular, and Node.js.'
  },
  {
    icon: <Smartphone size={48} />,
    title: 'Mobile App Development',
    description: 'Creating intuitive mobile experiences for iOS and Android using React Native or native development technologies.'
  },
  {
    icon: <Cloud size={48} />,
    title: 'Cloud Services',
    description: 'Designing and deploying secure, scalable cloud infrastructures with AWS, Azure, and Google Cloud.'
  },
  {
    icon: <Brain size={48} />,
    title: 'AI & Machine Learning',
    description: 'Developing intelligent AI solutions and predictive models to enable automation and data-driven decisions.'
  },
  {
    icon: <Server size={48} />,
    title: 'OSIsoft PI System Solutions',
    description: 'End-to-end PI System services: data collection, integration with PLCs and SCADA, dashboarding via PI Vision, analytics with AF, and continuous support.'
  },
  {
    icon: <Database size={48} />,
    title: 'Data Analytics & Business Intelligence',
    description: 'Implementing data warehouses and visualization dashboards using Power BI, Tableau, and Google Data Studio.'
  },
  {
    icon: <Shield size={48} />,
    title: 'Cybersecurity Solutions',
    description: 'Protecting systems with penetration testing, network monitoring, vulnerability assessments, and data protection strategies.'
  },
  {
    icon: <Settings size={48} />,
    title: 'DevOps & Automation',
    description: 'Optimizing development pipelines through CI/CD, containerization with Docker & Kubernetes, and infrastructure automation.'
  },
  {
    icon: <Globe size={48} />,
    title: 'Digital Marketing',
    description: 'Boosting online presence through SEO, SEM, social media marketing, and performance-driven ad campaigns.'
  },
  {
    icon: <ShoppingCart size={48} />,
    title: 'E-commerce Solutions',
    description: 'Building and managing high-performance e-commerce platforms using Shopify, WooCommerce, and custom solutions.'
  },
  {
    icon: <Users size={48} />,
    title: 'IT Consulting & Strategy',
    description: 'Providing expert consultation for IT transformation, system modernization, and process optimization aligned with business goals.'
  },
  {
    icon: <Network size={48} />,
    title: 'IoT & Industrial Automation',
    description: 'Integrating smart devices, sensors, and automation systems for real-time monitoring, predictive maintenance, and efficiency gains.'
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.15 }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <ServiceHero />

      {/* Our Services Section */}
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={cardVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 text-center"
              >
                <div className="text-blue-500 dark:text-blue-400 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Feature Sections */}
      <ServiceFeatures />
      <MainServices />
      <CoreFeatures />
      <ThreeColumnFeatures />
      <ServiceContactSection />
    </>
  );
};

export default Services;
