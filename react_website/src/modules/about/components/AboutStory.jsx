import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';
import './AboutStory.css';

const AboutStory = () => {
  return (
    <section className="about-story section">
      <div className="container story-grid">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="story-left"
        >
          <div className="story-badge">
            <Lightbulb size={20} className="badge-icon" />
            <span>The Origin</span>
          </div>
          <h2 className="story-title">Born From Frustration.<br/>Built For the Future.</h2>
          <div className="story-visual-accent"></div>
          
          <div className="story-image-wrapper">
            <img src="/images/eduqra_origin_engine.png" alt="Eduqra Intelligence Core" className="story-engine-image" loading="lazy" />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="story-content"
        >
          <p>
            Eduqra was born from a shared frustration. As engineers and educators, we watched brilliant minds spend years navigating traditional degrees, only to graduate into an aggressive job market completely unequipped for the realities of modern technology. The traditional classroom was optimizing for memorization, while the real world was hiring for adaptability, execution, and AI literacy.
          </p>
          <p>
            It became obvious that minor tweaks to a static syllabus wouldn't fix the crisis; the entire architecture of how we learn needed a massive paradigm shift. We asked ourselves: <em>What if education could be as dynamic as the tech industry? What if every learner had access to a master-level AI tutor that adapted to their precise learning velocity, 24/7?</em>
          </p>
          <p>
            That pivotal question became our blueprint. We stopped trying to incrementally fix the old factory model of education, and instead set out to build an algorithmic, highly personalized cognitive engine from the ground up.
          </p>
          <p className="story-mission-highlight">
            Today, Eduqra is on a mission to democratize intelligence. By harnessing advanced AI, we are dismantling geographic and financial barriers, ensuring anyone with the ambition to learn can master the tools of tomorrow and actively build the future.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStory;
