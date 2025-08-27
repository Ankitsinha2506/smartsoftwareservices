import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Star, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const testimonials = [
  {
    quote: 'Smart Software Services delivered a robust IT solution that streamlined our operations perfectly. Their attention to detail and innovative approach exceeded our expectations.',
    author: 'John Doe',
    position: 'CEO, TechCorp',
    company: 'TechCorp Industries',
    rating: 5,
    image: '/api/placeholder/80/80',
    projectType: 'Enterprise Software Development'
  },
  {
    quote: 'Their innovative software transformed our digital presence completely. Exceptional IT expertise combined with outstanding customer service made this partnership invaluable.',
    author: 'Jane Smith',
    position: 'CTO, Innovate Ltd',
    company: 'Innovate Technologies',
    rating: 5,
    image: '/api/placeholder/80/80',
    projectType: 'Digital Transformation'
  },
  {
    quote: 'Reliable partners in IT development who consistently deliver quality results. They exceeded expectations with their professional approach and technical excellence.',
    author: 'Mike Johnson',
    position: 'Director, Global Solutions',
    company: 'Global Solutions Inc.',
    rating: 5,
    image: '/api/placeholder/80/80',
    projectType: 'Custom Web Applications'
  },
  {
    quote: 'Outstanding mobile app development that boosted our user engagement by 300%. Their team understood our vision and delivered beyond what we imagined.',
    author: 'Sarah Wilson',
    position: 'Product Manager',
    company: 'StartupX',
    rating: 5,
    image: '/api/placeholder/80/80',
    projectType: 'Mobile App Development'
  },
  {
    quote: 'The cloud migration project was seamless and efficient. Smart Software Services provided excellent support throughout the entire process.',
    author: 'David Chen',
    position: 'IT Director',
    company: 'Enterprise Corp',
    rating: 5,
    image: '/api/placeholder/80/80',
    projectType: 'Cloud Migration'
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const intervalRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    if (inView && isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => {
          const next = (prev + 1) % testimonials.length;
          setDirection(1);
          return next;
        });
      }, 6000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [inView, isPlaying]);

  const goToNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full -top-20 -left-20 blur-3xl animate-pulse" />
        <div className="absolute w-80 h-80 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full -bottom-20 -right-20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 px-6 py-2 rounded-full backdrop-blur-sm mb-6">
            <Star className="text-blue-400" size={20} />
            <span className="text-sm font-semibold text-blue-300">Client Success Stories</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            What Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses transform their digital presence and achieve remarkable results
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Navigation Controls */}
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={goToPrev}
                className="group p-3 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <ChevronLeft className="text-white group-hover:scale-110 transition-transform duration-300" size={24} />
              </button>
              
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlayPause}
                  className="group p-3 bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm hover:bg-blue-500/30 transition-all duration-300"
                >
                  {isPlaying ? (
                    <Pause className="text-blue-300 group-hover:scale-110 transition-transform duration-300" size={20} />
                  ) : (
                    <Play className="text-blue-300 group-hover:scale-110 transition-transform duration-300" size={20} />
                  )}
                </button>
                
                <span className="text-sm text-gray-400">
                  {current + 1} of {testimonials.length}
                </span>
              </div>
              
              <button
                onClick={goToNext}
                className="group p-3 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              >
                <ChevronRight className="text-white group-hover:scale-110 transition-transform duration-300" size={24} />
              </button>
            </div>

            {/* Testimonial Card */}
            <div className="relative h-[400px] overflow-hidden">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.4 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      goToNext();
                    } else if (swipe > swipeConfidenceThreshold) {
                      goToPrev();
                    }
                  }}
                  className="absolute inset-0 cursor-grab active:cursor-grabbing"
                >
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 h-full shadow-2xl">
                    <div className="flex flex-col h-full">
                      {/* Quote Icon */}
                      <div className="flex justify-center mb-6">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                          <Quote className="text-white" size={24} />
                        </div>
                      </div>

                      {/* Quote Text */}
                      <blockquote className="text-lg md:text-xl text-gray-200 text-center leading-relaxed mb-6 flex-grow flex items-center">
                        "{testimonials[current].quote}"
                      </blockquote>

                      {/* Rating */}
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonials[current].rating)].map((_, i) => (
                          <Star key={i} className="text-yellow-400 fill-current" size={16} />
                        ))}
                      </div>

                      {/* Author Info */}
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {testimonials[current].author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div className="text-left">
                            <h4 className="text-lg font-bold text-white">{testimonials[current].author}</h4>
                            <p className="text-sm text-gray-300">{testimonials[current].position}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-1">
                          <p className="text-blue-300 font-semibold text-sm">{testimonials[current].company}</p>
                          <p className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full inline-block">
                            {testimonials[current].projectType}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>


            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current
                      ? 'bg-gradient-to-r from-blue-400 to-purple-400 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <p className="text-gray-300">Happy Clients</p>
          </div>
          
          <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              98%
            </div>
            <p className="text-gray-300">Satisfaction Rate</p>
          </div>
          
          <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <p className="text-gray-300">Support Available</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;