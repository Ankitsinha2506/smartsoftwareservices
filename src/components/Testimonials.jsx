import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Star, ArrowRight, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with this team completely transformed how we operate. They delivered a scalable platform 3 months ahead of schedule with zero downtime during launch.",
    highlight: "Delivered 3 months early • Zero downtime launch",
    industry: "FinTech • Enterprise",
    rating: 5
  },
  {
    quote: "The level of ownership and technical expertise is unmatched. They don't just build features — they solve business problems with elegant, future-proof solutions.",
    highlight: "Increased conversion rate by 47% • Reduced load time from 8s → 1.2s",
    industry: "E-commerce • SaaS",
    rating: 5
  },
  {
    quote: "Best development partner we've ever had. Clear communication, proactive suggestions, and they genuinely care about our long-term success.",
    highlight: "Saved $180K/year in operational costs • 99.99% uptime",
    industry: "Healthcare • B2B Platform",
    rating: 5
  },
  {
    quote: "They turned our vague ideas into a world-class product. The attention to detail in UX, performance, and security is exceptional.",
    highlight: "From MVP to $2.3M ARR in 14 months",
    industry: "Startup • Mobile + Web",
    rating: 5
  },
  {
    quote: "True partners, not vendors. They challenged our assumptions (in a good way) and delivered something far better than we initially asked for.",
    highlight: "Migrated 50TB data with zero data loss • 100% on-time delivery",
    industry: "Logistics • Cloud Infrastructure",
    rating: 5
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const intervalRef = useRef(null);

  useEffect(() => {
    if (inView) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }, 7000);
    }
    return () => clearInterval(intervalRef.current);
  }, [inView]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Subtle Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm font-medium text-zinc-400 mb-6">
            Trusted by industry leaders
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Don’t just take our word for it
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Real results from real clients who’ve scaled faster, saved more, and launched better with us.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Testimonial Slider */}
          <div className="relative h-[380px] lg:h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0"
              >
                {/* Main Card */}
                <div className="bg-gradient-to-br from-zinc-900 via-zinc-900/95 to-zinc-900/90 border border-zinc-800 rounded-3xl p-10 lg:p-12 h-full backdrop-blur-xl">
                  <Quote className="w-12 h-12 text-zinc-700 mb-8" strokeWidth={1.5} />

                  <blockquote className="text-2xl lg:text-3xl font-light text-white leading-relaxed mb-10">
                    “{testimonials[current].quote}”
                  </blockquote>

                  {/* Highlight Result */}
                  <div className="flex items-center gap-3 text-emerald-400 font-medium mb-6">
                    <CheckCircle2 size={20} className="fill-current" />
                    <span className="text-lg">{testimonials[current].highlight}</span>
                  </div>

                  {/* Industry Tag */}
                  <div className="inline-block px-5 py-2 bg-zinc-800 border border-zinc-700 rounded-full text-sm text-zinc-300">
                    {testimonials[current].industry}
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mt-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-10">
            <button
              onClick={prev}
              className="group p-4 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 transition-all"
              aria-label="Previous testimonial"
            >
              <ArrowRight className="w-6 h-6 text-zinc-400 rotate-180 group-hover:text-white transition-colors" />
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`transition-all duration-300 ${
                    index === current
                      ? 'w-12 h-3 bg-white rounded-full'
                      : 'w-3 h-3 bg-zinc-700 rounded-full hover:bg-zinc-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="group p-4 bg-zinc-900 border border-zinc-800 rounded-full hover:bg-zinc-800 transition-all"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-6">
            <span className="text-zinc-500 text-sm">
              {String(current + 1).padStart(2, '0')} — {String(testimonials.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24"
        >
          {[
            { value: "500+", label: "Projects Delivered" },
            { value: "98%", label: "Client Retention" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "<6hrs", label: "Avg. Response Time" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <p className="text-zinc-500 text-sm lg:text-base">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;