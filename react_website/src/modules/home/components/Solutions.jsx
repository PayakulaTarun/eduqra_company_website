import { Link } from 'react-router-dom';
import { Brain, BarChart, ClipboardCheck, Target, ArrowRight, CheckCircle2 } from 'lucide-react';
import './Solutions.css';

const Solutions = () => {
  const cards = [
    { title: 'AI Tutor', text: 'Personalized AI mentors that adapt to your learning style and provide instant feedback.', color: 'bg-blue', icon: <Brain size={24} /> },
    { title: 'Analytics', text: 'Deep learning insights to track progress and identify areas for skill improvement.', color: 'bg-purple', icon: <BarChart size={24} /> },
    { title: 'Assessment', text: 'Smart evaluation systems that test practical knowledge through real-world scenarios.', color: 'bg-orange', icon: <ClipboardCheck size={24} /> },
    { title: 'Personalization', text: 'Tailored learning paths that evolve based on your individual performance and goals.', color: 'bg-green', icon: <Target size={24} /> }
  ];

  return (
    <section className="solutions section" id="ai-solutions">
      <div className="container solutions-container">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="solutions-content"
        >
          <span className="solutions-subtitle">Our Solutions</span>
          <h2 className="solutions-title">Empowering Education With Artificial Intelligence</h2>
          <p className="solutions-desc">
            We provide a suite of AI tools designed to make learning more efficient, engaging, and personalized than ever before.
          </p>
          
          <ul className="check-list">
            {[
              'AI Personalized Learning Paths',
              'Real-Time Skill Assessment System',
              '24/7 AI Tutor Support',
              'Interactive AI-Powered Simulations'
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <CheckCircle2 size={24} className="check-icon-svg" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/about" className="btn btn-primary">
              Learn More About Us <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
        
        <div className="solutions-grid">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="solution-card"
            >
              <div className={`icon-wrapper ${card.color}`}>
                {card.icon}
              </div>
              <h4 className="card-title">{card.title}</h4>
              <p className="card-text">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
