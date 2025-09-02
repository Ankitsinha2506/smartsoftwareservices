import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
  Code2, Server, Cloud, Database, Cpu, Globe,
  BarChart2, Brain, Activity, Layers, FileText,
  Microscope, Stethoscope, ClipboardList, LineChart
} from 'lucide-react';

const techs = [
  { name: 'React.js', icon: <Code2 size={48} /> },
  { name: 'Node.js', icon: <Server size={48} /> },
  { name: 'AWS Cloud', icon: <Cloud size={48} /> },
  { name: 'MongoDB', icon: <Database size={48} /> },
  { name: 'Machine Learning', icon: <Cpu size={48} /> },
  { name: 'Full-Stack Dev', icon: <Globe size={48} /> },

  // --- New items ---
  { name: 'Osisoft', icon: <Layers size={48} /> },
  { name: 'Big Data', icon: <BarChart2 size={48} /> },
  { name: 'Data Science', icon: <Brain size={48} /> },
  { name: 'Data Analytics', icon: <Activity size={48} /> },
  { name: 'AI Gen', icon: <Cpu size={48} /> },
  { name: 'Microsoft Services', icon: <Globe size={48} /> },
  { name: '.NET Technology', icon: <FileText size={48} /> },
  { name: 'Java Technology', icon: <Layers size={48} /> },
  { name: 'Salesforce', icon: <Globe size={48} /> },
  { name: 'AWS DevOps', icon: <Server size={48} /> },
  { name: 'Healthcare', icon: <Stethoscope size={48} /> },
  { name: 'Medical Billing & Coding', icon: <ClipboardList size={48} /> },
  { name: 'DV360', icon: <LineChart size={48} /> }
];

const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    },
    hover: { scale: 1.2, rotate: 360, transition: { duration: 0.5 } }
  };

  return (
    <section id="tech-stack" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={iconVariants}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Our Technology Stack
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          variants={iconVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {techs.map((tech, index) => (
            <motion.div
              key={index}
              variants={iconVariants}
              whileHover="hover"
              className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md"
            >
              <div className="text-blue-500 dark:text-blue-400 mb-2">
                {tech.icon}
              </div>
              <p className="text-gray-800 dark:text-white font-semibold text-center">  
                {tech.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
