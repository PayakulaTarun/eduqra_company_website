import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Users, BarChart3, Target, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ProductsView.css';

const productList = [
  {
    id: 'ai-tutors',
    title: 'AI-Powered Tutors',
    subtitle: 'Launching Soon',
    description: 'Our flagship 1-on-1 tutoring platform where learners connect with expert mentors powered by proprietary AI matching and live assistance.',
    icon: <Users size={32} />,
    color: 'blue',
    features: ['Live 1-on-1 Sessions', 'AI-Matched Mentors', 'Personalized Study Plans'],
    isNew: true
  },
  {
    id: 'personalization-engine',
    title: 'Adaptive Learning Engine',
    subtitle: 'Available Now',
    description: 'A deep-learning core that analyzes user behavior and retention to dynamically adjust curriculum difficulty and content delivery.',
    icon: <Brain size={32} />,
    color: 'indigo',
    features: ['Cognitive Load Tracking', 'Dynamic Difficulty', 'Knowledge Map Visualization'],
    isNew: false
  },
  {
    id: 'analytics-dashboard',
    title: 'Skill-Gap Analytics',
    subtitle: 'Available Now',
    description: 'A comprehensive suite for learners and organizations to visualize progress, identify weaknesses, and predict future performance.',
    icon: <BarChart3 size={32} />,
    color: 'emerald',
    features: ['Predictive Performance', 'Real-time Skill Heatmaps', 'Industrial Benchmarking'],
    isNew: false
  },
  {
    id: 'assessment-system',
    title: 'Smart Assessment Platform',
    subtitle: 'In Early Access',
    description: 'Beyond multiple choice. Our AI evaluates project-based submissions and provides deep coding or logical feedback automatically.',
    icon: <Target size={32} />,
    color: 'violet',
    features: ['Automated Project Grading', 'Instant Logical Feedback', 'Continuous Assessment'],
    isNew: false
  }
];

const ProductsView = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="products-page"
    >
      {/* Header section */}
      <section className="products-hero section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="badge-pill mb-4 inline-flex">Eduqra Ecosystem</span>
            <h1 className="products-title">The Future of <span className="text-gradient">AI Education</span></h1>
            <p className="products-subtitle-text">
              Revolutionary products designed to transform how you learn, teach, and master the technology of tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Showcase */}
      <section className="featured-product section">
        <div className="container">
          <motion.div 
            className="featured-glass-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="featured-grid">
              <div className="featured-image">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" alt="1-on-1 Tutoring" />
                <div className="featured-overlay">
                  <span className="featured-tag">Flagship Product</span>
                </div>
              </div>
              <div className="featured-info">
                 <div className="featured-badge">COMING SOON</div>
                 <h2>Eduqra 1-on-1 AI Tutor Website</h2>
                 <p>
                   Our most ambitious product yet. A specialized ecosystem where students get undivided attention from AI-matched mentors and real-time AI assistance.
                 </p>
                 <ul className="featured-highlights">
                   <li><Users size={20} /> Personal 1-on-1 Video Mentoring</li>
                   <li><Sparkles size={20} /> AI-Driven Mentor Matching</li>
                   <li><Target size={20} /> Goal-Oriented Learning Tracks</li>
                 </ul>
                 <Link to="/contact" className="btn btn-primary">Get Early Access</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product List Section */}
      <section className="product-list-section section">
        <div className="container">
          <div className="product-grid">
            {productList.map((product, index) => (
              <motion.div 
                key={product.id}
                className={`product-card ${product.color}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="product-card-inner">
                  <div className="product-icon-box">
                    {product.icon}
                  </div>
                  
                  <div className="product-content">
                    <div className="product-header-row">
                       <span className={`product-status-tag ${product.isNew ? 'new' : ''}`}>
                         {product.subtitle}
                       </span>
                       {product.isNew && <Sparkles size={16} className="sparkle-icon" />}
                    </div>
                    
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                    
                    <ul className="product-features">
                      {product.features.map(feature => (
                        <li key={feature}>
                          <div className="dot"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="product-action">
                      <Link to="/contact" className="btn-text">
                        Learn More <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="products-bottom-cta section">
        <div className="container">
          <div className="products-cta-box bg-gradient">
            <h2>Ready To Empower Your Team With AI?</h2>
            <p>Develop a custom implementation or licensing plan for your organization.</p>
            <Link to="/contact" className="btn btn-primary white">Speak To An Expert</Link>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default ProductsView;
