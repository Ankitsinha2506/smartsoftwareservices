import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'Smart Software Services delivered a robust IT solution that streamlined our operations perfectly.',
    author: 'John Doe',
    position: 'CEO, TechCorp'
  },
  {
    quote: 'Their innovative software transformed our digital presence. Exceptional IT expertise!',
    author: 'Jane Smith',
    position: 'CTO, Innovate Ltd'
  },
  {
    quote: 'Reliable partners in IT development. They exceeded expectations with their professional approach.',
    author: 'Mike Johnson',
    position: 'Director, Global Solutions'
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [inView]);

  const variants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          What Our Clients Say
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg text-center"
            >
              <Quote className="text-blue-500 dark:text-blue-400 mx-auto mb-4" size={48} />
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">{testimonials[current].quote}</p>
              <p className="font-semibold text-gray-800 dark:text-white">{testimonials[current].author}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{testimonials[current].position}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;