import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import SmartLogo from '../assets/SmartLogo.png';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const [lastScrollY, setLastScrollY] = useState(0);

  // useMotionValueEvent(scrollY, 'change', (current) => {
  //   if (typeof current === 'number') {
  //     if (current < lastScrollY) {
  //       setHidden(false); // Show navbar on scroll up
  //     } else if (current > 100 && current > lastScrollY) {
  //       setHidden(true); // Hide navbar on scroll down after 100px
  //     }
  //     setLastScrollY(current);
  //   }
  // });

  useEffect(() => {
    setIsOpen(false); // Close mobile menu on route change
  }, [location]);

  const variants = {
    visible: { y: 0, transition: { duration: 0.35, ease: 'easeInOut' } },
    hidden: { y: '-100%', transition: { duration: 0.35, ease: 'easeInOut' } },
  };

  // Helper: check if nav is active (exact or sub-route)
  const isActive = (href) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md transition-all duration-300"
        animate={hidden ? 'hidden' : 'visible'}
        variants={variants}
      >
        <div className="container-custom flex items-center justify-between py-4 px-4 md:px-12">
          <Link to="/" className="flex items-center">
            <img
              src={SmartLogo}
              alt="Smart Software Services"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`transition-colors ${
                    isActive(item.href)
                      ? 'text-primary-600 dark:text-primary-400 font-semibold border-b-2 border-primary-600 pb-1'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          {/* Theme Toggle + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
              title="Toggle light/dark mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="lg:hidden overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-4 py-4 space-y-4"
          initial={false}
          animate={{ maxHeight: isOpen ? '100vh' : 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{ maxHeight: isOpen ? '100vh' : 0 }}
        >
          {navItems.map((item) => (
            <div key={item.name}>
              <Link
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 transition-colors ${
                  isActive(item.href)
                    ? 'text-primary-600 dark:text-primary-400 font-semibold border-l-4 border-primary-600 pl-2'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </motion.div>
      </motion.nav>

      {/* Spacer to avoid content jumping under fixed navbar */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
