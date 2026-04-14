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
            <img src="/images/eduqra_origin_engine.png" alt="Eduqra Intelligence Core" className="story-engine-image" />
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
            Eduqra began as a shared frustration. As engineers and educators, we watched brilliant minds spend years navigating traditional degrees, only to graduate into an aggressive job market completely unequipped for the realities of modern technology. The realization we had was stark: the traditional classroom was optimizing for memorization, while the real world was hiring for adaptability, execution, and AI literacy. We were actively watching millions of hours of human potential be wasted by an outdated system.
          </p>
          <p>
            It became obvious that minor tweaks to a static syllabus wouldn't fix the crisis. The entire architecture of how we learn needed a massive paradigm shift. We asked ourselves: <em>What if education could be as dynamic as the technology industry itself? What if every single learner could have access to a master-level tutor that adapted to their precise learning velocity, 24/7?</em> 
          </p>
          <p>
            That pivotal question became our blueprint. We stopped trying to incrementally fix the old factory model of education, and instead set out to build an algorithmic, highly personalized cognitive engine from the ground up.
          </p>
          <p className="story-mission-highlight">
            Today, Eduqra is far more than an EdTech company—it is a mission to democratize intelligence. We are working to completely dismantle the geographic, financial, and systemic barriers to high-tier education. By harnessing the power of artificial intelligence, we are ensuring that anyone with the ambition to learn can master the tools of tomorrow, bypass the traditional gates, and actively build the future.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStory;
