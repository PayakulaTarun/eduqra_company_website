import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Lock, LogIn, ArrowLeft } from 'lucide-react';
import './Auth.css';

const LoginView = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="auth-wrapper"
    >
      <div className="auth-container">
        <div className="auth-card">
          <Link to="/" className="back-link"><ArrowLeft size={18} /> Back to Home</Link>
          <div className="auth-header">
            <h2>Welcome Back</h2>
            <p>Login to your account to continue your learning journey.</p>
          </div>
          <form className="auth-form">
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-with-icon">
                <Mail size={18} />
                <input type="email" placeholder="email@example.com" required />
              </div>
            </div>
            <div className="form-group">
              <label>Password</label>
              <div className="input-with-icon">
                <Lock size={18} />
                <input type="password" placeholder="••••••••" required />
              </div>
            </div>
            <div className="form-footer">
              <label className="checkbox">
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-p">Forgot Password?</a>
            </div>
            <button type="submit" className="btn btn-primary login-submit">
              Login <LogIn size={18} />
            </button>
          </form>
          <div className="auth-sep"><span>Or login with</span></div>
          <div className="social-login">
            <button className="social-btn google">G</button>
            <button className="social-btn facebook">f</button>
          </div>
          <p className="auth-bottom">
            Don't have an account? <Link to="/join">Sign Up</Link>
          </p>
        </div>
        <div className="auth-side">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Auth" />
          <div className="auth-overlay">
            <h3>Start Your Journey</h3>
            <p>Join over 50,000+ students learning the skills of the future.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginView;
