import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, PlayCircle } from 'lucide-react';
import './WebinarsView.css';

const webinarsData = [
  {
    id: 1,
    title: 'The Future of Generative AI in Business',
    date: { day: '25', month: 'MAR' },
    speaker: 'Dr. Sarah Wilson',
    description: 'Learn how to leverage LLMs and stable diffusion to automate workflows and create value.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    type: 'Upcoming'
  },
  {
    id: 2,
    title: 'Mastering Data Visualization with AI',
    date: { day: '28', month: 'MAR' },
    speaker: 'Mr. James Miller',
    description: 'Transform complex data into actionable insights using AI-driven visualization tools.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    type: 'Upcoming'
  },
  {
    id: 3,
    title: 'Cybersecurity Trends in 2026',
    date: { day: '02', month: 'APR' },
    speaker: 'Mr. Kevin Zhang',
    description: 'Stay ahead of emerging threats and learn how AI is being used in modern security.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    type: 'Upcoming'
  }
];

const WebinarsView = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="webinars-page"
    >
      <section className="webinars-hero">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="section-title"
          >
            Join Expert-Led Live Webinars
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="webinars-subtitle"
          >
            Upgrade your skills with real-time interaction. Our webinars cover the latest trends in AI, tech, and career growth.
          </motion.p>
        </div>
      </section>

      <section className="webinars-list section">
        <div className="container">
          <div className="webinar-cards">
            {webinarsData.map((webinar, index) => (
              <motion.div 
                key={webinar.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="webinar-row"
              >
                <div className="webinar-date-badge">
                  <span className="day">{webinar.date.day}</span>
                  <span className="month">{webinar.date.month}</span>
                </div>
                
                <div className="webinar-info">
                  <div className="info-top">
                    <span className="webinar-type">{webinar.type}</span>
                    <span className="webinar-speaker"><User size={14} /> {webinar.speaker}</span>
                  </div>
                  <h3>{webinar.title}</h3>
                  <p>{webinar.description}</p>
                </div>
                
                <div className="webinar-action">
                  <button className="btn btn-outline register-btn">
                    Register Now <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="recorded-section">
            <h2 className="section-title" style={{ textAlign: 'left', marginTop: '60px' }}>Recorded Webinars</h2>
            <div className="recorded-grid">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="recorded-card">
                  <div className="thumb">
                    <img src={`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`} alt="Recorded" />
                    <PlayCircle className="play-icon" size={48} />
                  </div>
                  <h4>Mastering Python Analytics</h4>
                  <p>Aired on Feb 20, 2026</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default WebinarsView;
