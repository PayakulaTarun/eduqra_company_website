import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Network, Zap, CheckCircle2, ShieldCheck } from 'lucide-react';
import './AISolutionsView.css';

const AISolutionsView = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="ai-solutions-page"
    >
      <section className="solutions-hero">
        <div className="container hero-container">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="hero-text"
          >
            <span className="section-subtitle">Revolutionizing Education</span>
            <h1 className="hero-title">AI Solutions For Modern Learners</h1>
            <p className="hero-desc">
              Unlock the full potential of education with our suite of AI-powered tools designed to personalize, analyze, and optimize your learning journey.
            </p>
            <div className="hero-buttons">
              <a href="#get-started" className="btn btn-primary btn-pill-ai">Get Started</a>
              <a href="#demo" className="btn btn-outline btn-pill-ai bg-white shadow-soft">Watch Demo</a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="hero-image"
          >
            <div className="hero-image-overlay">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" alt="AI Solutions" />
            </div>
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
          
          <div className="tools-grid-solutions">
            {[
              { 
                icon: <Activity size={32} />, colorClass: 'icon-blue', 
                title: 'AI Personal Tutor', 
                desc: 'A 24/7 companion that answers questions, explains complex topics, and provides personalized feedback on your assignments.',
                list: ['Real-Time Q&A', 'Concept Simplification', 'Personalized Feedback']
              },
              { 
                icon: <Network size={32} />, colorClass: 'icon-green', 
                title: 'Learning Analytics', 
                desc: 'Deep insights into your learning patterns. Identify strengths, weaknesses, and get data-driven suggestions for improvement.',
                list: ['Progress Tracking', 'Skill Gap Analysis', 'Predictive Performance']
              },
              { 
                icon: <Zap size={32} />, colorClass: 'icon-orange', 
                title: 'Adaptive Learning', 
                desc: 'Our system adjusts the difficulty and content of your courses in real-time based on your performance and pace.',
                list: ['Dynamic Curriculum', 'Pace Adjustment', 'Customized Exercises']
              }
            ].map((tool, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="solution-tool-card"
              >
                <div className={`tool-icon-circle ${tool.colorClass}`}>
                  {tool.icon}
                </div>
                <h3>{tool.title}</h3>
                <p className="tool-card-desc">{tool.desc}</p>
                <div className="card-divider" />
                <ul className="tool-feature-list">
                  {tool.list.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={18} className="success-check" /> {item}
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
