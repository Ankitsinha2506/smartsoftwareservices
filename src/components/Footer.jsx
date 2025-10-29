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
    visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const socialVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: 'spring', stiffness: 260, damping: 20 }
    }
  };

  const linkHoverVariants = {
    hover: { x: 5, color: '#3b82f6', transition: { duration: 0.2 } }
  };

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 bg-blue-500 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-28 h-28 bg-purple-500 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Section */}
        <div className="container mx-auto max-w-7xl px-6 md:px-10 py-10">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
            {/* Left: Company Info */}
            <motion.div variants={itemVariants} className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <motion.img
                  src={SmartLogo}
                  alt="SmartTech Logo"
                  className="h-10 w-10 object-contain"
                />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  SMART Software Services
                </h3>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4 text-sm max-w-lg">
                Transforming ideas into digital reality with innovative, scalable, and intelligent
                software solutions.
              </p>

              <div className="flex flex-col gap-2 text-sm text-gray-300">
                <div className="flex items-start space-x-2">
                  <MapPin size={18} className="text-blue-400 mt-0.5" />
                  <span>
                    406 Changbhale Heights, Jawalkar Nagar, Near Kalpataru Society, Phase-3, Pimple Gurav,
                    Pune – 411061
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={16} className="text-green-400" />
                  <span>+91 7066511234</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={16} className="text-purple-400" />
                  <span>hr@smartsoftwareservice.com</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Quick Links */}
            <motion.div variants={itemVariants} className="w-full lg:w-1/3 text-left lg:text-right">
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About Us', href: '/about' },
                  { name: 'Services', href: '/services' },
                  { name: 'Contact', href: '/contact' }
                ].map((link, i) => (
                  <motion.li key={link.name} variants={itemVariants}>
                    <motion.div variants={linkHoverVariants} whileHover="hover">
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-blue-400 transition-all duration-300 flex justify-end items-center space-x-2 group"
                      >
                        <span>{link.name}</span>
                        <ExternalLink
                          size={12}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </Link>
                    </motion.div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social & Scroll to Top */}
          <motion.div variants={itemVariants} className="mt-8 pt-4 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <span className="text-gray-300 text-sm font-medium">Follow Us:</span>
                <div className="flex space-x-3">
                  {[
                    { icon: Facebook, href: '#', color: 'hover:text-blue-500' },
                    { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
                    { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
                    { icon: Instagram, href: '#', color: 'hover:text-pink-500' }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      variants={socialVariants}
                      whileHover={{ scale: 1.15 }}
                      className={`p-2 bg-gray-800 rounded-full text-gray-300 ${social.color} transition-all duration-300`}
                    >
                      <social.icon size={16} />
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.button
                onClick={scrollToTop}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <ArrowUp size={14} />
                <span>Top</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div variants={itemVariants} className="border-t border-gray-700 bg-gray-900/50">
          <div className="container mx-auto max-w-7xl px-6 md:px-10 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 space-y-2 md:space-y-0">
              <motion.p whileHover={{ color: '#60a5fa' }} className="flex items-center space-x-1">
                <span>© {new Date().getFullYear()} SMART Software Services Pvt. Ltd.</span>
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart size={12} className="text-red-500" fill="currentColor" />
                </motion.div>
                <span>in India</span>
              </motion.p>

              <div className="flex space-x-4">
                {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ y: -1 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
