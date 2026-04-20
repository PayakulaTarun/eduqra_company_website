import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2 } from 'lucide-react';
import './ProblemSolution.css';

const ProblemSolution = () => {
  return (
    <section className="problem-solution section">
      <div className="container">
        <div className="ps-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="ps-card problem-card"
          >
            <div className="ps-icon-wrapper problem-icon">
              <XCircle size={32} />
            </div>
            <span className="ps-label">The Problem</span>
            <h2>Students struggle with generic learning</h2>
            <p>
              Traditional education uses a "one-size-fits-all" approach. Students waste time on things they already know while struggling silently with concepts they don't understand. Lack of personal attention leads to declining engagement and abandoned courses.
            </p>
            <ul className="ps-list">
              <li><XCircle size={16} /> Static, non-adaptive curriculums</li>
              <li><XCircle size={16} /> Waiting days for feedback</li>
              <li><XCircle size={16} /> Lost motivation without mentorship</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="ps-card solution-card"
          >
            <div className="ps-icon-wrapper solution-icon">
              <CheckCircle2 size={32} />
            </div>
            <span className="ps-label text-gradient">The Eduqra Solution</span>
            <h2>Eduqra AI personalization</h2>
            <p>
              We provide an intelligent, dynamic learning ecosystem that adapts to you in real-time. Our AI evaluates your knowledge gaps, adjusts the curriculum difficulty, and provides instantaneous, empathetic 1-on-1 tutoring exactly when you need it.
            </p>
            <ul className="ps-list">
              <li><CheckCircle2 size={16} /> Hyper-personalized learning path</li>
              <li><CheckCircle2 size={16} /> 24/7 AI tutor for instant feedback</li>
              <li><CheckCircle2 size={16} /> Predictive skill-gap analytics</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
