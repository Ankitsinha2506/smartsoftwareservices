import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

// Components
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';

// Context
import { ThemeProvider } from './context/ThemeContext';


// Wrapper component to use location with AnimatePresence
function AnimatedRoutes() {
  const location = useLocation();

  // Initialize and refresh AOS on route changes
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
    AOS.refresh();
  }, [location]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        style={{ minHeight: '100vh' }}
      >
        <Navbar />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading screen for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider>
      <HelmetProvider>
        <Router>
          <AnimatedRoutes />
        </Router>
        <Helmet>
          <title>Smart Software Services Pvt. Ltd. - Professional IT Services</title>
          <meta
            name="description"
            content="Innovative IT solutions for your business needs from Smart Software Services Pvt. Ltd."
          />
          <meta
            name="keywords"
            content="IT services, software development, web design, Smart Software Services"
          />
          {/* Add additional meta tags as needed */}
        </Helmet>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;


