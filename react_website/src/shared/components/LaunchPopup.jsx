import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { X, Sparkles } from 'lucide-react';
import './LaunchPopup.css';

const LaunchPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only show popup on the Home page
    if (location.pathname !== '/') {
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            className="popup-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
          />

          {/* Centering wrapper — keeps position separate from animation */}
          <div className="popup-positioner">
          <motion.div
            className="launch-popup horizontal"
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: 'spring', damping: 22, stiffness: 260 }}
            role="dialog"
            aria-modal="true"
            aria-label="Eduqra Product Launch Announcement"
          >
            {/* Close Button */}
            <button className="popup-close" onClick={handleClose} aria-label="Close">
              <X size={20} />
            </button>

            {/* Left Side: Image */}
            <div className="popup-side-image">
               <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" 
                alt="1-on-1 Tutoring" 
              />
            </div>

            {/* Right Side: Content */}
            <div className="popup-main-content">
              {/* Badge */}
              <motion.div
                className="popup-badge"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles size={14} />
                <span>Launching Soon</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                className="popup-title"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                AI-Powered <span className="popup-highlight">Tutors</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                className="popup-desc"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                Connecting you with expert mentors for personalized learning.
              </motion.p>

              {/* Feature Pills */}
              <motion.div
                className="popup-pills"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
              >
                {['Live 1-on-1', 'AI-Matched'].map((pill) => (
                  <span key={pill} className="popup-pill">{pill}</span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="popup-actions"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
              >
                <Link to="/contact" className="popup-btn-primary" onClick={handleClose}>
                   Get Notified
                </Link>
              </motion.div>
            </div>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LaunchPopup;
