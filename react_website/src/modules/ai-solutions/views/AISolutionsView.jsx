import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Brain, BarChart, Zap, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AISolutionsView.css';

const AISolutionsView = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="ai-solutions-page"
    >
      <Helmet>
        <title>AI Solutions | Eduqra Personalized Learning & Adaptive AI Tools</title>
        <meta name="description" content="Explore Eduqra's suite of AI solutions: AI Personal Tutors, Learning Analytics, and Adaptive Systems designed to revolutionize modern education." />
        <meta name="keywords" content="AI education solutions, adaptive learning platforms, AI tutoring technology, student analytics AI, future of edtech" />
        <meta property="og:title" content="Eduqra AI Solutions | Intelligent Future of Learning" />
        <meta property="og:description" content="Unlock the potential of AI-driven education with our personalized learning tools." />
      </Helmet>

      <section className="solutions-hero">
        <div className="container hero-container">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="hero-text"
          >
            <span className="solutions-hero-subtitle">Revolutionizing Education</span>
            <h1 className="solutions-hero-title">AI Solutions For Modern Learners</h1>
            <p className="solutions-hero-desc">
              Unlock the full potential of education with our suite of AI-powered tools designed to personalize, analyze, and optimize your learning journey.
            </p>
            <div className="solutions-hero-buttons">
              <Link to="/contact" className="btn-ai-primary">Get Started</Link>
              <Link to="/contact" className="btn-ai-secondary">Watch Demo</Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="hero-image-wrapper"
          >
            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80" alt="AI Solutions" />
          </motion.div>
        </div>
      </section>

      <section className="intelligent-tools-section section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tools-header text-center"
          >
            <h2 className="section-title-alt">Intelligent Tools For Every Learner</h2>
            <p className="section-desc">
              Our AI solutions are built on state-of-the-art models to provide a truly unique and effective learning experience.
            </p>
          </motion.div>
          
          <div className="features-solutions-grid">
            {[
              { 
                icon: <Brain size={28} />, colorClass: 'icon-blue', 
                title: 'AI Personal Tutor', 
                desc: 'A 24/7 companion that answers questions, explains complex topics, and provides personalized feedback on your assignments.',
                features: ['Real-Time Q&A', 'Concept Simplification', 'Personalized Feedback']
              },
              { 
                icon: <BarChart size={28} />, colorClass: 'icon-green', 
                title: 'Learning Analytics', 
                desc: 'Deep insights into your learning patterns. Identify strengths, weaknesses, and get data-driven suggestions for improvement.',
                features: ['Progress Tracking', 'Skill Gap Analysis', 'Predictive Performance']
              },
              { 
                icon: <Zap size={28} />, colorClass: 'icon-orange', 
                title: 'Adaptive Learning', 
                desc: 'Our system adjusts the difficulty and content of your courses in real-time based on your performance and pace.',
                features: ['Dynamic Curriculum', 'Pace Adjustment', 'Customized Exercises']
              }
            ].map((tool, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="premium-feature-card-alt"
              >
                <div className={`icon-container-alt ${tool.colorClass}`}>
                  {tool.icon}
                </div>
                <h3>{tool.title}</h3>
                <p>{tool.desc}</p>
                <div className="card-divider"></div>
                <ul className="card-features-list">
                  {tool.features.map((feature, j) => (
                    <li key={j}>
                      <CheckCircle2 size={18} className="check-icon-green" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="how-we-work-section section">
        <div className="container work-container">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="work-left"
          >
            <h2 className="section-title-alt text-left">How Our AI Works</h2>
            <p className="work-subtitle">
              We combine advanced machine learning with educational psychology to create the perfect learning environment.
            </p>
            
            <div className="work-steps-list">
              {[
                { num: '01', title: 'Data Collection', text: 'Data Collection We analyze your interactions, quiz results, and learning pace.' },
                { num: '02', title: 'Pattern Recognition', text: 'Our AI identifies your unique learning style and knowledge gaps.' },
                { num: '03', title: 'Personalization', text: 'The platform adapts content and provides targeted recommendations.' }
              ].map((step, i) => (
                <div className="work-step-item" key={i}>
                  <div className="work-step-num">{step.num}</div>
                  <div className="work-step-text">
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="ai-security-blue-card"
          >
            <div className="ai-security-icon">
              <ShieldCheck size={40} />
            </div>
            <h3>Privacy & Security First</h3>
            <p>
              Your data is yours. We use advanced encryption and follow strict privacy standards to ensure your learning data is always secure and private.
            </p>
            <div className="ai-security-stats">
              <div className="stat-unit">
                <strong>100%</strong>
                <span>Data Encryption</span>
              </div>
              <div className="stat-unit">
                <strong>GDPR</strong>
                <span>Compliant</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default AISolutionsView;
