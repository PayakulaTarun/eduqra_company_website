import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, Search, Play } from 'lucide-react';
import './WebinarsView.css';

const upcomingWebinars = [
  {
    id: 1,
    title: 'The Future Of Generative AI In Business',
    date: 'March 25, 2026',
    time: '10:00 AM EST',
    speaker: 'Dr. Aris Thorne',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isLive: true
  },
  {
    id: 2,
    title: 'Mastering Data Visualization With AI',
    date: 'March 25, 2026',
    time: '10:00 AM EST',
    speaker: 'Dr. Aris Thorne',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isLive: false
  },
  {
    id: 3,
    title: 'Building Scalable AI Infrastructure',
    date: 'March 25, 2026',
    time: '10:00 AM EST',
    speaker: 'Dr. Aris Thorne',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isLive: false
  },
  {
    id: 4,
    title: 'AI Ethics: Navigating The New Frontier',
    date: 'March 25, 2026',
    time: '10:00 AM EST',
    speaker: 'Dr. Aris Thorne',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    isLive: false
  }
];

const pastWebinars = [1, 2, 3, 4].map(id => ({
  id,
  title: 'How To Build Your First Neural Network With Python',
  date: 'Feb 12, 2026',
  image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
}));

const WebinarsView = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="webinars-page"
    >
      {/* Hero Section */}
      <section className="webinars-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-content"
          >
            <h1 className="webinars-title">Expert-Led Live Webinars</h1>
            <p className="webinars-subtitle">
              Join our live sessions to learn from industry experts and stay ahead in the rapidly evolving world of AI and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Section */}
      <section className="upcoming-section">
        <div className="container">
          <div className="section-header-row">
            <h2 className="section-title-alt">Upcoming Webinars</h2>
            <div className="search-bar-webinar">
              <Search size={16} className="search-icon" />
              <input type="text" placeholder="Search webinars..." />
            </div>
          </div>

          <div className="upcoming-grid">
            {upcomingWebinars.map((webinar) => (
              <motion.article 
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="webinar-card"
              >
                <div className="webinar-thumb">
                  <img src={webinar.image} alt={webinar.title} />
                  {webinar.isLive && <span className="live-pill">Live Session</span>}
                </div>
                <div className="webinar-card-content">
                  <div className="meta-date">
                    <Calendar size={14} className="meta-icon" />
                    <span>{webinar.date}</span>
                  </div>
                  <h3>{webinar.title}</h3>
                  <div className="meta-details">
                    <div className="meta-item">
                      <Clock size={14} />
                      <span>{webinar.time}</span>
                    </div>
                    <div className="meta-item">
                      <User size={14} />
                      <span>{webinar.speaker}</span>
                    </div>
                  </div>
                  <button className="btn btn-primary register-now-btn">Register Now</button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Past Section */}
      <section className="past-section">
        <div className="container">
          <h2 className="section-title-alt">Watch Past Webinars</h2>
          <div className="past-webinars-grid">
            {pastWebinars.map((webinar) => (
              <motion.div 
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="past-webinar-card"
              >
                <div className="video-thumb">
                  <img src={webinar.image} alt={webinar.title} />
                  <div className="play-overlay">
                    <div className="play-btn-circle">
                      <Play fill="#000" size={20} />
                    </div>
                  </div>
                </div>
                <div className="past-info">
                  <h4>{webinar.title}</h4>
                  <p>Recorded on {webinar.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center browse-all-row">
            <button className="btn btn-outline browse-all-btn">Browse All Recordings</button>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default WebinarsView;
