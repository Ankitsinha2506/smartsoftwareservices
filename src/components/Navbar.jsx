import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SmartLogo from '../assets/SmartLogo.png';

const navItems = [
  {
    name: 'Home',
    href: '/',
  },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services', },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { scrollY } = useScroll();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const [lastScrollY, setLastScrollY] = useState(0);



  // Advanced scroll-based animations
  const navbarOpacity = useTransform(scrollY, [0, 100], [0.9, 0.95]);
  const navbarBlur = useTransform(scrollY, [0, 100], [8, 16]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);


  const navbarVariants = {
    visible: { y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
    hidden: { y: '-100%', transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  const logoVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.05,
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  const linkVariants = {
    initial: { y: 0 },
    hover: {
      y: -2,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const mobileMenuVariants = {
    closed: { height: 0, opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    open: { height: "auto", opacity: 1, transition: { duration: 0.4, ease: "easeInOut", staggerChildren: 0.1 } }
  };

  const mobileItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1, transition: { duration: 0.3 } }
  };

  const isActive = (href) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  return (
    
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        animate={hidden ? 'hidden' : 'visible'}
        variants={navbarVariants}
        style={{
          backgroundColor: theme === 'dark'
            ? `rgba(17, 24, 39, ${navbarOpacity.get()})`
            : `rgba(255, 255, 255, ${navbarOpacity.get()})`,
          backdropFilter: `blur(${navbarBlur.get()}px)`,
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <div className="container-custom flex items-center justify-between py-4 px-4 md:px-12">
          {/* Enhanced Logo */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            whileHover="hover"
            style={{ scale: logoScale }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <motion.img
                src={SmartLogo}
                alt="SmartTech Logo"
                className="h-10 w-10 object-contain"
              // whileHover={{ rotate: 360 }}
              // transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <motion.span
                className="text-2xl font-bold text-blue-600"
                whileHover={{
                  backgroundPosition: "200% center",
                  transition: { duration: 0.5 }
                }}
              >
                Software Services
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10 ml-auto">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                className="relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.div variants={linkVariants} initial="initial" whileHover="hover">
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-1 text-lg font-semibold transition-all duration-300 relative 
    ${isActive(item.href)
                        ? "text-primary-600 dark:text-primary-400"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"}`}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <motion.div
                        animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    )}
                  </Link>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-600 to-purple-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>


          {/* Controls */}
          <div className="flex items-center space-x-4">
            <motion.button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="lg:hidden overflow-hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={mobileMenuVariants}
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <motion.div key={item.name} variants={mobileItemVariants}>
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="ml-4 space-y-1 mt-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-2 px-4 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Spacer for nav height */}
      <motion.div
        className="h-16"
        animate={{ height: hidden ? 0 : 64 }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
};

export default Navbar; 