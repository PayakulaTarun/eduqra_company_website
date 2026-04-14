import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogs } from '../../../data/blogs';
import './BlogView.css';
const BlogView = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="blog-page"
    >
      <Helmet>
        <title>Knowledge Hub | Eduqra AI EdTech Blog</title>
        <meta name="description" content="Eduqra's Knowledge Hub provides expert insights into AI in education, career growth, tech trends, and the future of digital learning. Stay ahead in 2026." />
        <meta name="keywords" content="AI in education, EdTech trends 2026, tech blog, career growth, educational insights" />
      </Helmet>
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
            {blogs.length > 0 && (
              <motion.article 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="featured-post-card"
              >
                <div className="featured-image-box">
                  <img loading="lazy" src={blogs[0].featuredImage} alt={blogs[0].imageAlt} />
                </div>
                <div className="featured-content">
                  <div className="featured-meta">
                    <Calendar size={14} className="meta-icon" />
                    <span>{blogs[0].date}</span>
                  </div>
                  <Link to={`/blog/${blogs[0].slug}`} className="featured-link-wrapper">
                    <h2>{blogs[0].title}</h2>
                  </Link>
                  <p>
                    {blogs[0].excerpt}
                  </p>
                  <Link to={`/blog/${blogs[0].slug}`} className="read-more">Read More <ArrowRight size={14} /></Link>
                </div>
              </motion.article>
            )}

            {/* Standard Posts Grid */}
            <div className="standard-posts-grid">
              {blogs.slice(1).map((item, index) => (
                <motion.article 
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="standard-post-card"
                >
                  <Link to={`/blog/${item.slug}`} className="post-image-link">
                    <img loading="lazy" src={item.featuredImage} alt={item.imageAlt} />
                  </Link>
                  <div className="post-content">
                    <div className="post-meta-row">
                      <div className="meta-item">
                        <Calendar size={12} className="meta-icon" />
                        <span>{item.date}</span>
                      </div>
                      <div className="meta-item">
                        <User size={12} className="meta-icon" />
                        <span>{item.author}</span>
                      </div>
                    </div>
                    <Link to={`/blog/${item.slug}`} className="post-title-link">
                      <h3>{item.title}</h3>
                    </Link>
                    <p className="post-excerpt">
                      {item.excerpt}
                    </p>
                    <Link to={`/blog/${item.slug}`} className="read-more">Read More <ArrowRight size={14} /></Link>
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


          </aside>
        </div>
      </section>
    </motion.main>
  );
};

export default BlogView;
