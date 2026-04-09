import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: "What makes Eduqra different from other learning platforms?",
    answer: "Unlike traditional platforms, Eduqra uses proprietary AI to create a dynamic learning environment that adjusts to your pace, style, and goals in real-time."
  },
  {
    question: "How does the AI Personal Tutor work?",
    answer: "Our AI Tutor is trained on curated educational content to provide 24/7 support. It can explain complex concepts, solve problems, and guide you through assignments."
  },
  {
    question: "Can I use Eduqra for corporate training?",
    answer: "Yes! We provide specialized AI solutions for organizations to upskill their teams in Data Science, AI Automation, and modern technical workflows."
  },
  {
    question: "When is the AI-Powered Tutors platform launching?",
    answer: "Our 1-on-1 AI-Powered Tutors platform is currently in beta. You can sign up via our contact form to get early access and be notified of the official launch."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section section bg-light">
      <div className="container">
        <span className="section-subtitle">Frequently Asked Questions</span>
        <h2 className="section-title">Have Questions? We Have Answers</h2>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-answer-wrapper"
                  >
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
