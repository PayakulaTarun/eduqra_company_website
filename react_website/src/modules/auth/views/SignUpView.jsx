import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, UserPlus, ArrowLeft } from 'lucide-react';
import { signInWithGoogle } from '../../../shared/lib/firebase';
import './Auth.css';

const SignUpView = () => {
  const navigate = useNavigate();

  const handleGoogleSignup = async () => {
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="auth-wrapper"
    >
      <div className="auth-container signup">
        <div className="auth-side">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Auth" />
          <div className="auth-overlay">
            <h3>Join Eduqra Today</h3>
            <p>The most advanced AI learning platform for professionals.</p>
          </div>
        </div>
        <div className="auth-card">
          <Link to="/" className="back-link"><ArrowLeft size={18} /> Back to Home</Link>
          <div className="auth-header">
            <h2>Create Account</h2>
            <p>Join our community of over 50k+ active learners.</p>
          </div>
          <form className="auth-form">
            <div className="form-group">
              <label>Full Name</label>
              <div className="input-with-icon">
                <User size={18} />
                <input type="text" placeholder="John Doe" required />
              </div>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <div className="input-with-icon">
                <Mail size={18} />
                <input type="email" placeholder="john@example.com" required />
              </div>
            </div>
            <div className="form-group">
              <label>Password</label>
              <div className="input-with-icon">
                <Lock size={18} />
                <input type="password" placeholder="Create password" required />
              </div>
            </div>
            <button type="submit" className="btn btn-primary login-submit">
              Sign Up <UserPlus size={18} />
            </button>
          </form>
          <div className="auth-sep"><span>Or sign up with</span></div>
          <div className="social-login">
            <button className="social-btn google" onClick={handleGoogleSignup}>Continue with Google</button>
          </div>
          <p className="auth-bottom">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SignUpView;
