import React, { useEffect, useState, useRef } from "react";
import {
  FaRocket,
  FaCode,
  FaMobile,
  FaCloud,
  FaArrowRight,
  FaPlay,
  FaCheckCircle,
  FaStar,
  FaAward,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import Image from "../assets/images.png";

function WelcomeSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    satisfaction: 0,
    years: 0
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: <FaRocket />, color: "from-blue-400 to-cyan-400" },
    { number: "98%", label: "Client Satisfaction", icon: <FaCheckCircle />, color: "from-green-400 to-emerald-400" },
    { number: "24/7", label: "Support Available", icon: <FaCloud />, color: "from-purple-400 to-pink-400" },
    { number: "10+", label: "Years of Expertise", icon: <FaCode />, color: "from-orange-400 to-red-400" },
  ];

  const technologies = [
    { name: "React", color: "bg-blue-500/20 border-blue-400/30 text-blue-300" },
    { name: "Node.js", color: "bg-green-500/20 border-green-400/30 text-green-300" },
    { name: "Python", color: "bg-yellow-500/20 border-yellow-400/30 text-yellow-300" },
    { name: "AWS", color: "bg-orange-500/20 border-orange-400/30 text-orange-300" },
    { name: "MongoDB", color: "bg-green-600/20 border-green-500/30 text-green-400" },
    { name: "TypeScript", color: "bg-blue-600/20 border-blue-500/30 text-blue-400" }
  ];

  const features = [
    { icon: <FaLightbulb />, text: "AI-Powered Solutions", gradient: "from-yellow-400 to-orange-400" },
    { icon: <FaMobile />, text: "Mobile-First Design", gradient: "from-purple-400 to-pink-400" },
    { icon: <FaCloud />, text: "Cloud Architecture", gradient: "from-blue-400 to-cyan-400" },
    { icon: <FaAward />, text: "Award-Winning Quality", gradient: "from-green-400 to-emerald-400" }
  ];

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Animated counters
  useEffect(() => {
    setIsVisible(true);
    
    // Animate stats counters
    const animateCounter = (target, key, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setAnimatedStats(prev => ({ ...prev, [key]: Math.floor(start) }));
      }, 16);
    };

    const timer = setTimeout(() => {
      animateCounter(500, 'projects');
      animateCounter(98, 'satisfaction');
      animateCounter(10, 'years');
    }, 500);

    // Rotating stats
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(34, 197, 94, 0.15) 0%, transparent 50%),
          linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #0f172a 50%, #1e293b 75%, #0f172a 100%)
        `
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Gradient orbs */}
        <div className="absolute w-96 h-96 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full top-20 -left-20 animate-pulse blur-3xl" />
        <div className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full bottom-20 -right-20 animate-pulse blur-3xl" style={{ animationDelay: '1s' }} />
        <div className="absolute w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div 
          className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-400/30 px-6 py-3 rounded-full backdrop-blur-xl shadow-2xl">
              <HiSparkles className="text-green-400 animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Leading Software Innovation
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                  Smart Software
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full" />
            </div>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              We craft{" "}
              <span className="font-semibold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                next-generation digital experiences
              </span>{" "}
              that transform businesses and drive innovation in the modern world.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${feature.gradient} text-black group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <span className="text-gray-200 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="group flex items-center gap-3 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-semibold backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <div className="p-2 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                  <FaPlay className="text-sm" />
                </div>
                Watch Demo
              </button>
            </div>

            {/* Tech Stack */}
            <div className="pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <FaCode className="text-green-400" />
                <span className="text-sm font-semibold text-gray-400">Technologies We Master:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`px-4 py-2 border rounded-full text-sm font-medium backdrop-blur-sm hover:scale-105 transition-all duration-300 ${tech.color}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Stats & Visual */}
          <div className="relative flex flex-col items-center space-y-8">
            {/* Main Image with Effects */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl">
                <img
                  src={Image}
                  alt="Smart Software Technologies"
                  className="w-full max-w-md rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </div>
            </div>

            {/* Animated Stats Cards */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl font-black bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  {animatedStats.projects}+
                </div>
                <div className="text-sm text-gray-400 font-medium">Projects</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl font-black bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  {animatedStats.satisfaction}%
                </div>
                <div className="text-sm text-gray-400 font-medium">Satisfaction</div>
              </div>
              
              <div className="col-span-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl font-black bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  {animatedStats.years}+ Years
                </div>
                <div className="text-sm text-gray-400 font-medium">of Excellence</div>
              </div>
            </div>

            {/* Rotating Feature Highlight */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 w-full max-w-md text-center transition-all duration-500">
              <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${stats[currentStat].color} text-black mb-3 transition-all duration-500`}>
                {stats[currentStat].icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {stats[currentStat].number}
              </div>
              <div className="text-sm text-gray-400">
                {stats[currentStat].label}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </section>
  );
}

export default WelcomeSection;