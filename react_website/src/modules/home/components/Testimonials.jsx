import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: `"Eduqra's AI-driven approach helped me master complex concepts in half the time. The personalized path was a game-changer."`,
    author: 'Sarah Jenkins',
    role: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    rating: 5,
    text: `"The real-world projects gave me the confidence to apply for senior roles. I landed my dream job within 3 months of taking your course."`,
    author: 'David Chen',
    role: 'Data Scientist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 3,
    rating: 5,
    text: `"Your class's comprehensive, hands-on and real-time interaction that's rare, there is simply no better approach to mastering AI."`,
    author: 'Michael Rodriguez',
    role: 'Frontend Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
  }
];

const Testimonials = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          Testimonials
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title"
        >
          What Our Students Say
        </motion.h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              className="testimonial-card" 
              key={testimonial.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="star text-accent">⭐</span>
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <img loading="lazy" src={testimonial.image} alt={testimonial.author} className="author-image" />
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
