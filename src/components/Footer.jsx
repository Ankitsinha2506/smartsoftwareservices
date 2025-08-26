import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp,
  Heart,
  ExternalLink
} from 'lucide-react';
import SmartLogo from '../assets/SmartLogo.png';

const Footer = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const socialVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const linkHoverVariants = {
    hover: {
      x: 5,
      color: "#3b82f6",
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto max-w-7xl px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <motion.div 
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src={SmartLogo} 
                  alt="SmartTech Logo" 
                  className="h-12 w-12 object-contain"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                />
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  SMART Software Services
                </h3>
              </motion.div>
              
              <motion.p 
                className="text-gray-300 leading-relaxed mb-6 text-lg"
                variants={itemVariants}
              >
                Transforming ideas into digital reality with cutting-edge technology solutions. 
                We specialize in innovative web applications, mobile development, and AI-powered solutions.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={itemVariants}
              >
                <motion.div 
                  className="flex items-center space-x-2 text-gray-300"
                  whileHover={{ scale: 1.05, color: "#60a5fa" }}
                >
                  <MapPin size={18} className="text-blue-400" />
                  <span className="text-sm">Pune, Maharashtra</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-2 text-gray-300"
                  whileHover={{ scale: 1.05, color: "#60a5fa" }}
                >
                  <Phone size={18} className="text-green-400" />
                  <span className="text-sm">+91 7066511234</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-2 text-gray-300"
                  whileHover={{ scale: 1.05, color: "#60a5fa" }}
                >
                  <Mail size={18} className="text-purple-400" />
                  <span className="text-sm">hr@smartsoftwareservice.com</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold mb-6 text-blue-400">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About Us', href: '/about' },
                  { name: 'Services', href: '/services' },
                  { name: 'Portfolio', href: '/portfolio' },
                  { name: 'Contact', href: '/contact' }
                ].map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      variants={linkHoverVariants}
                      whileHover="hover"
                    >
                      <Link 
                        to={link.href} 
                        className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex items-center space-x-2 group"
                      >
                        <span>{link.name}</span>
                        <ExternalLink 
                          size={14} 
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                        />
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-semibold mb-6 text-purple-400">Our Services</h4>
              <ul className="space-y-3">
                {[
                  'Web Development',
                  'Mobile Applications',
                  'Cloud Solutions',
                  'AI & Machine Learning',
                  'Digital Transformation'
                ].map((service, index) => (
                  <motion.li 
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      variants={linkHoverVariants}
                      whileHover="hover"
                      className="text-gray-300 hover:text-purple-400 transition-all duration-300 cursor-pointer"
                    >
                      {service}
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Media & Newsletter */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-gray-700"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Social Media */}
              <div className="flex items-center space-x-6">
                <span className="text-gray-300 font-medium">Follow Us:</span>
                <div className="flex space-x-4">
                  {[
                    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
                    { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
                    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
                    { icon: Instagram, href: '#', color: 'hover:text-pink-500' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      variants={socialVariants}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 bg-gray-800 rounded-full text-gray-300 ${social.color} transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Scroll to Top */}
              <motion.button
                onClick={scrollToTop}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp size={18} />
                <span>Back to Top</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-700 bg-gray-900/50 backdrop-blur-sm"
        >
          <div className="container mx-auto max-w-7xl px-6 md:px-12 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.p 
                className="text-gray-400 text-sm flex items-center space-x-1"
                whileHover={{ color: "#60a5fa" }}
              >
                <span>&copy; {new Date().getFullYear()} SMART Software Services Pvt. Ltd.</span>
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart size={14} className="text-red-500" fill="currentColor" />
                </motion.div>
                <span>in India</span>
              </motion.p>
              
              <div className="flex space-x-6 text-sm text-gray-400">
                <motion.a 
                  href="#" 
                  className="hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a 
                  href="#" 
                  className="hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  Terms of Service
                </motion.a>
                <motion.a 
                  href="#" 
                  className="hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  Sitemap
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
