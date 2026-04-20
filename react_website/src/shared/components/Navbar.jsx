import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Search } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { logoutUser } from '../lib/firebase';
import GlobalSearchModal from './GlobalSearchModal';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { currentUser } = useAuth();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const isActive = (path) => location.pathname === path ? "active" : "";
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'AI Solutions', path: '/ai-solutions' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="navbar glass-panel"
      >
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <img loading="lazy" src="/images/eduqra_logo.jpeg" alt="Eduqra" />
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
          {currentUser && (
            <li>
              <Link to="/profile" className={isActive("/profile")}>Profile</Link>
            </li>
          )}
        </ul>

        <div className="nav-actions desktop-only">
          <button onClick={() => setIsSearchOpen(true)} className="icon-btn search-trigger" aria-label="Search">
            <Search size={20} />
          </button>
          {currentUser ? (
            <button onClick={logoutUser} className="login-btn">Logout</button>
          ) : (
            <>
              <Link to="/login" className="login-btn">Login</Link>
              <Link to="/join" className="btn btn-primary">Join Now <ChevronRight size={18} /></Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-only-actions">
          <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="icon-btn" aria-label="Search" style={{display: "inline-flex", background: "none", border: "none", color: "var(--text-color)"}}>
            <Search size={24} />
          </button>
          <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu" style={{marginLeft: 0}}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
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
                {currentUser ? (
                  <button onClick={logoutUser} className="login-btn w-full">Logout</button>
                ) : (
                  <>
                    <Link to="/login" className="login-btn">Login</Link>
                    <Link to="/join" className="btn btn-primary w-full">Join Now &rarr;</Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
      {/* Global intelligent search modal */}
      <GlobalSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;
