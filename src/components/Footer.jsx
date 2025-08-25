import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={footerVariants}
      className="bg-gray-900 text-white py-12"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <motion.div variants={childVariants}>
            <h3 className="text-2xl font-bold mb-5">SMART Software Services</h3>
            <p className="text-sm leading-relaxed mb-4">
              Smart Software Services thinks outside the square to bring you the latest in Web Application & customised software design and development.
            </p>
            <p className="text-sm leading-relaxed mb-4">
              We specialise in website, product and application development using the latest technology suites at the forefront of innovation.
            </p>
            <p className="text-sm leading-relaxed">
              SSS offers years of combined experience across a diverse range of industries including software design and development.
            </p>
          </motion.div>

          <motion.div variants={childVariants}>
            <h4 className="text-xl font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition">About</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition">Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={childVariants}>
            <h4 className="text-xl font-semibold mb-5">Contact Info</h4>
            <address className="not-italic text-sm leading-relaxed space-y-2">
              <p>Smart Software Services (I) Pvt. Ltd.</p>
              <p>406 Changbhale Heights, Jawalkar Nagar Near Kalpataru Society, Phase-3, Pimple Gurav Pune - 411061</p>
              <p>Email: <a href="mailto:hr@smartsoftwareservice.com" className="hover:text-blue-400 transition">hr@smartsoftwareservice.com</a></p>
              <p>Phone: <a href="tel:+917066511234" className="hover:text-blue-400 transition">+91 7066511234</a> | <a href="tel:+917066521234" className="hover:text-blue-400 transition">+91 7066521234</a></p>
            </address>
          </motion.div>

          <motion.div variants={childVariants}>
            <h4 className="text-xl font-semibold mb-5">Follow Us</h4>
            <div className="flex space-x-5">
              <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition"><Facebook size={28} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition"><Twitter size={28} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition"><Linkedin size={28} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-blue-400 transition"><Instagram size={28} /></a>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={childVariants}
          className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400"
        >
          &copy; {new Date().getFullYear()} SMART Software Services Pvt. Ltd. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
