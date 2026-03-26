import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: "How do I get started with Eduqra?",
    answer: "Simply click on the 'Join Now' button, create your account, and you'll have immediate access to our courses and AI-powered learning dashboard."
  },
  {
    question: "Are the courses self-paced or live?",
    answer: "We offer both! Our main courses are self-paced with AI tutor support, while our webinars provide live, expert-led interaction on a scheduled basis."
  },
  {
    question: "Can I get a certificate after completion?",
    answer: "Yes! Every course completion is accompanied by a globally recognized digital certificate that you can add to your LinkedIn profile or resume."
  },
  {
    question: "Do I need prior knowledge for AI courses?",
    answer: "We have courses for all levels! From 'AI Fundamentals' for beginners to 'Advanced Machine Learning Mastery' for professionals."
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
