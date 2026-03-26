import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about" className="about-us section bg-light">
      <div className="container about-container">
        <div className="about-image-wrapper animate-fade-up">
          <div className="image-decoration"></div>
          <img 
             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
             alt="About Eduqra" 
             className="about-image"
          />
          <div className="experience-badge">
            <span className="years">10+</span>
            <span className="text">Years of<br/>Excellence</span>
          </div>
        </div>
        <div className="about-content animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <span className="section-subtitle" style={{ textAlign: 'left' }}>About Us</span>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>Empowering the Future With AI-Driven Learning</h2>
          <p className="about-description">
            At Eduqra, we believe that education should be as dynamic as the world we live in. We are a pioneering EdTech platform dedicated to transforming traditional learning into a personalized, AI-powered journey.
          </p>
          <p className="about-description">
            Our mission is to bridge the gap between ambition and achievement by providing skill-focused courses, interactive webinars, and an AI-driven environment that adapts to your unique learning style. 
          </p>
          
          <div className="about-stats">
            <div className="stat-item">
              <h3 className="stat-number">50K+</h3>
              <p className="stat-label">Active Learners</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">200+</h3>
              <p className="stat-label">Expert Instructors</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">95%</h3>
              <p className="stat-label">Success Rate</p>
            </div>
          </div>
          
          <a href="#courses" className="btn btn-primary about-btn">Explore Our Courses &rarr;</a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
