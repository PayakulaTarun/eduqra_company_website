import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path ? "active" : "";
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Webinars', path: '/webinars' },
    { name: 'AI Solutions', path: '/ai-solutions' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="navbar glass-panel"
    >
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <img src="/images/eduqra_logo_1774263954243.png" alt="Eduqra" />
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="nav-links desktop-only">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} className={isActive(link.path)}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions desktop-only">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/join" className="btn btn-primary">Join Now <ChevronRight size={18} /></Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mobile-drawer"
          >
            <div className="drawer-content">
              <ul className="mobile-nav-links">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className={isActive(link.path)}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="drawer-actions">
                <Link to="/login" className="login-btn">Login</Link>
                <Link to="/join" className="btn btn-primary w-full">Join Now &rarr;</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
