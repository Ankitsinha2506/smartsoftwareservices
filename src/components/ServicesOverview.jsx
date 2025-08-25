import React from 'react';
import { Code, Globe, Smartphone, Brush, Star, Search, Cloud, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  { icon: <Code size={48} />, title: 'Software Designing', description: 'Custom software or organize service at most efficient cost.' },
  { icon: <Globe size={48} />, title: 'Web Designing', description: 'If you, make designing responsive device desktop, tablet.' },
  { icon: <Smartphone size={48} />, title: 'App Development', description: 'If you, it the right thing SERVICES.' },
  { icon: <Brush size={48} />, title: 'Logo Designing', description: 'Logo designer who make extend your company.' },
  { icon: <Star size={48} />, title: 'Smart Branding', description: 'Branding platform service to growth your business.' },
  { icon: <Search size={48} />, title: 'Our SEO', description: 'We with search engine optimization.' },
  { icon: <Cloud size={48} />, title: 'Web Hosting', description: 'We provide web hosting per your business requirement.' },
  { icon: <Megaphone size={48} />, title: 'Digital Marketing', description: 'Digital marketing solution for your business then get with us.' }
];

const ServicesOverview = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 text-blue-500 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 rounded-full p-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{service.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;