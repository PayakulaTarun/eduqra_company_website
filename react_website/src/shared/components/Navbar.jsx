import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? "active" : "";

  // Check if we're on a blog detail page specifically (not the main list)
  const isBlogDetail = /^\/blog\/.+/.test(location.pathname);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <img src="/images/eduqra_logo_1774263954243.png" alt="Eduqra" />
        </Link>
        
        {isBlogDetail ? (
          <>
            <ul className="nav-links">
              <li><Link to="/blog" className={isActive('/blog')}>Hub</Link></li>
              <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
            </ul>
            <div className="nav-actions">
              <Link to="/login" className="login-btn">Login</Link>
              <Link to="/join" className="btn btn-primary" style={{ borderRadius: '8px', padding: '10px 24px' }}>Sign Up</Link>
            </div>
          </>
        ) : (
          <>
            <ul className="nav-links">
              <li><Link to="/" className={isActive('/')}>Home</Link></li>
              <li><Link to="/about" className={isActive('/about')}>About Us</Link></li>
              <li><Link to="/courses" className={isActive('/courses')}>Courses</Link></li>
              <li><Link to="/webinars" className={isActive('/webinars')}>Webinars</Link></li>
              <li><Link to="/ai-solutions" className={isActive('/ai-solutions')}>AI Solutions</Link></li>
              <li><Link to="/blog" className={isActive('/blog')}>Blog</Link></li>
              <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
            </ul>
            <div className="nav-actions">
              <Link to="/login" className="login-btn">Login</Link>
              <Link to="/join" className="btn btn-primary">Join Now &rarr;</Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
