import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import './BlogView.css';

const BlogView = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="blog-page"
    >
      <section className="blog-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-content-blog text-center"
          >
            <h1 className="blog-title">Knowledge Hub</h1>
            <p className="blog-hero-desc">
              Explore insights on AI, technology, and career growth. Stay updated with the latest trends and expert advice.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="blog-content-wrapper">
        <div className="container blog-container">
          <div className="blog-main-content">
            {/* Featured Post */}
            <motion.article 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="featured-post-card"
            >
              <div className="featured-image-box">
                <div className="gray-placeholder"></div>
              </div>
              <div className="featured-content">
                <div className="featured-meta">
                  <Calendar size={14} className="meta-icon" />
                  <span>March 15, 2026</span>
                </div>
                <Link to="/blog/1" className="featured-link-wrapper">
                  <h2>The Future Of AI In Education</h2>
                </Link>
                <p>
                  Discover how artificial intelligence is transforming modern learning experiences.
                </p>
                <Link to="/blog/1" className="read-more">Read More <ArrowRight size={14} /></Link>
              </div>
            </motion.article>

            {/* Standard Posts Grid */}
            <div className="standard-posts-grid">
              {[1, 2].map((item) => (
                <motion.article 
                  key={item}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: item * 0.15 }}
                  className="standard-post-card"
                >
                  <Link to={`/blog/${item + 1}`} className="post-image-link">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students learning" />
                  </Link>
                  <div className="post-content">
                    <div className="post-meta-row">
                      <div className="meta-item">
                        <Calendar size={12} className="meta-icon" />
                        <span>March 10, 2026</span>
                      </div>
                      <div className="meta-item">
                        <User size={12} className="meta-icon" />
                        <span>James Wilson</span>
                      </div>
                    </div>
                    <Link to={`/blog/${item + 1}`} className="post-title-link">
                      <h3>Top Career Skills 2026</h3>
                    </Link>
                    <p className="post-excerpt">
                      The job market is evolving rapidly. Here are the essential skills you need to stay ahead.
                    </p>
                    <Link to={`/blog/${item + 1}`} className="read-more">Read More <ArrowRight size={14} /></Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <aside className="blog-sidebar">
            <div className="sidebar-widget search-widget">
              <h3>Search</h3>
              <div className="search-input-wrapper">
                <Search size={16} className="search-icon" />
                <input type="text" placeholder="Search articles..." />
              </div>
            </div>

            <div className="sidebar-widget categories-widget">
              <h3>Categories</h3>
              <ul className="categories-list">
                <li><a href="#cat1">Artificial Intelligence</a></li>
                <li><a href="#cat2">Career Growth</a></li>
                <li><a href="#cat3">Web Development</a></li>
                <li><a href="#cat4">Data Science</a></li>
                <li><a href="#cat5">Technology</a></li>
              </ul>
            </div>

            <div className="sidebar-widget categories-widget">
              <h3>Categories</h3>
              <ul className="categories-list">
                <li><a href="#cat1">Artificial Intelligence</a></li>
                <li><a href="#cat2">Career Growth</a></li>
                <li><a href="#cat3">Web Development</a></li>
                <li><a href="#cat4">Data Science</a></li>
                <li><a href="#cat5">Technology</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </motion.main>
  );
};

export default BlogView;
