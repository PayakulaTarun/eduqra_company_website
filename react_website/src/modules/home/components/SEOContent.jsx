import React from 'react';
import { motion } from 'framer-motion';
import './SEOContent.css';

const SEOContent = () => {
  return (
    <section className="seo-content section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="seo-content-wrapper"
        >
          <div className="seo-text-block">
            <p>
              Eduqra is an <a href="/ai-solutions" className="context-link">AI-powered learning platform</a> designed to revolutionize education through personalized and adaptive learning experiences. By leveraging advanced artificial intelligence, Eduqra helps students and professionals develop real-world skills in areas such as artificial intelligence, data science, web development, and more. Unlike traditional e-learning platforms, Eduqra focuses on skill-based education, ensuring learners are industry-ready. With features like <a href="/ai-solutions" className="context-link">AI tutors</a>, real-time analytics, personalized learning paths, and interactive simulations, Eduqra bridges the gap between theoretical knowledge and practical application. Whether you are a beginner or an advanced learner, Eduqra provides a scalable and efficient learning environment tailored to your goals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SEOContent;
