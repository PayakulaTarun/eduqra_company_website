import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User } from 'lucide-react';
import './BlogPreview.css';

const BlogPreview = () => {
  const blogs = [
    {
      title: 'How AI is Transforming Education',
      category: 'Education',
      readTime: '5 min read',
      author: 'Eduqra Team',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=600',
      link: '/blog'
    },
    {
      title: 'Top Skills Every Student Should Learn in 2026',
      category: 'Career',
      readTime: '4 min read',
      author: 'Eduqra Team',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600',
      link: '/blog'
    },
    {
      title: 'Beginner’s Guide to Artificial Intelligence',
      category: 'AI Basics',
      readTime: '7 min read',
      author: 'Eduqra Team',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600',
      link: '/blog'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section className="blog-preview section">
      <div className="container">
        
        <div className="blog-preview-header-row">
          <div className="blog-preview-title-col">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-subtitle"
            >
              Resources
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-title"
            >
              Latest Insights from Eduqra
            </motion.h2>
          </div>
          
          <motion.div 
            className="blog-preview-action-col hidden-mobile"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/blog" className="btn btn-outline">
              View All Articles <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="blog-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {blogs.map((blog, index) => (
            <motion.div key={index} className="blog-card" variants={itemVariants}>
              <Link to={blog.link} className="blog-card-link-wrapper">
                <div className="blog-card-img-wrapper">
                  <img src={blog.image} alt={blog.title} />
                  <span className="blog-category-badge">{blog.category}</span>
                </div>
                
                <div className="blog-card-content">
                  <div className="blog-meta">
                    <span><Clock size={14} /> {blog.readTime}</span>
                    <span><User size={14} /> {blog.author}</span>
                  </div>
                  
                  <h3 className="blog-card-title">{blog.title}</h3>
                  
                  <div className="blog-card-action">
                    Read Article <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile only load more button */}
        <div className="blog-preview-mobile-action show-mobile">
          <Link to="/blog" className="btn btn-outline" style={{width: '100%', justifyContent: 'center'}}>
            View All Articles <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BlogPreview;
