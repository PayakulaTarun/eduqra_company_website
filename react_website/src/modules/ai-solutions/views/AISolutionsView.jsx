import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, CheckCircle2, ShieldCheck } from 'lucide-react';
import './AISolutionsView.css';

const AISolutionsView = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="ai-solutions-page"
    >
      <section className="section solutions-hero">
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
              <a href="#get-started" className="btn btn-primary">Get Started</a>
              <a href="#demo" className="btn btn-outline bg-white shadow-sm">Watch Demo</a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="hero-image"
          >
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80" alt="AI Solutions For Modern Learners" />
          </motion.div>
        </div>
      </section>

      <section className="section intelligent-tools">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header text-center"
          >
            <h2 className="section-title">Intelligent Tools For Every Learner</h2>
            <p className="section-desc">
              Our AI solutions are built on state-of-the-art models to provide a truly unique and effective learning experience.
            </p>
          </motion.div>
          
          <div className="tools-grid">
            {[
              { 
                icon: <Stethoscope size={32} />, colorClass: 'icon-blue', 
                title: 'AI Personal Tutor', 
                desc: 'A 24/7 companion that answers questions, explains complex topics, and provides personalized feedback on your assignments.',
                list: ['Real-Time Q&A', 'Concept Simplification', 'Personalized Feedback']
              },
              { 
                icon: <Stethoscope size={32} />, colorClass: 'icon-green', 
                title: 'Learning Analytics', 
                desc: 'Deep insights into your learning patterns. Identify strengths, weaknesses, and get data-driven suggestions for improvement.',
                list: ['Progress Tracking', 'Skill Gap Analysis', 'Predictive Performance']
              },
              { 
                icon: <Stethoscope size={32} />, colorClass: 'icon-orange', 
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
                className="tool-card"
              >
                <div className={`tool-icon ${tool.colorClass}`}>
                  {tool.icon}
                </div>
                <h3>{tool.title}</h3>
                <p className="tool-desc">{tool.desc}</p>
                <hr className="divider" />
                <ul className="tool-list">
                  {tool.list.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={18} className="check-icon" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section how-it-works bg-light">
        <div className="container hiw-container">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hiw-content"
          >
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>How Our AI Works</h2>
            <p className="hiw-desc">
              We combine advanced machine learning with educational psychology to create the perfect learning environment.
            </p>
            
            <div className="steps-list">
              {[
                { num: '01', title: 'Data Collection', text: 'Data Collection We analyze your interactions, quiz results, and learning pace.' },
                { num: '02', title: 'Pattern Recognition', text: 'Our AI identifies your unique learning style and knowledge gaps.' },
                { num: '03', title: 'Personalization', text: 'The platform adapts content and provides targeted recommendations.' }
              ].map((step, i) => (
                <div className="step-item" key={i}>
                  <div className="step-num">{step.num}</div>
                  <div className="step-text">
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
            className="security-card"
          >
            <div className="security-icon">
              <ShieldCheck size={40} />
            </div>
            <h3>Privacy & Security First</h3>
            <p>
              Your data is yours. We use advanced encryption and follow strict privacy standards to ensure your learning data is always secure and private.
            </p>
            <div className="security-stats">
              <div className="stat-block">
                <strong>100%</strong>
                <span>Data Encryption</span>
              </div>
              <div className="stat-block">
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
