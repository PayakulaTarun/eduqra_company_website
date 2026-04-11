import React from 'react';
import { motion } from 'framer-motion';
import { 
  Share2, Bookmark, Quote, Search, LayoutGrid, 
  PenTool, Monitor, GraduationCap, Globe, Send 
} from 'lucide-react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogs } from '../../../data/blogs';
import './BlogDetailsView.css';

const BlogDetailsView = () => {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return <Navigate to="/blog" />;
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="blog-details-page bg-light"
    >
      <Helmet>
        <title>{blog.seoTitle}</title>
        <meta name="description" content={blog.metaDescription} />
        <meta name="keywords" content={[blog.primaryKeyword, ...blog.secondaryKeywords].join(', ')} />
      </Helmet>
      <div className="container blog-view-container">
        {/* Main Left Column */}
        <article className="blog-main-card">
          <div className="blog-feature-img">
            <img src={blog.featuredImage} alt={blog.imageAlt} />
          </div>
          
          <div className="blog-article-content">
            <div className="blog-article-meta">
              <span className="badge-academic">{blog.category.toUpperCase()}</span>
              <span className="meta-text">{blog.date} &bull; {blog.readTime}</span>
            </div>
            
            <h1 className="article-h1">{blog.title}</h1>
            
            <div className="author-row">
              <div className="author-info-left">
                <div className="author-avatar">{blog.author.substring(0, 2).toUpperCase()}</div>
                <div className="author-details">
                  <strong>{blog.author}</strong>
                  <span>Curated Knowledge Hub</span>
                </div>
              </div>
              <div className="author-actions">
                <button className="icon-btn"><Share2 size={18} /></button>
                <button className="icon-btn"><Bookmark size={18} /></button>
              </div>
            </div>

            <div className="article-body" dangerouslySetInnerHTML={{ __html: blog.content }}></div>

            <div className="video-seo-section" style={{ marginTop: '3rem', padding: '2rem', background: '#f8fafc', borderRadius: '8px' }}>
              <h4>Related Video Resource</h4>
              <h5>{blog.video.title}</h5>
              <p><strong>Description:</strong> {blog.video.description}</p>
              <p style={{fontStyle: 'italic', color: '#64748b'}}>Script Preview: {blog.video.script}</p>
            </div>

            <div className="article-footer-share">
              <span className="share-label">SHARE THIS ARTICLE</span>
              <div className="share-buttons">
                <button className="share-btn linkedin">
                  <Share2 size={16} /> LinkedIn
                </button>
                <button className="share-btn twitter">
                  <Send size={16} /> Twitter
                </button>
                <button className="share-btn facebook">
                  <Globe size={16} /> Facebook
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Right Sidebar */}
        <aside className="blog-view-sidebar">
          {/* Search Card */}
          <div className="sidebar-card">
            <h4 className="sidebar-title">Search Knowledge</h4>
            <div className="search-box">
              <Search size={16} className="search-icon" />
              <input type="text" placeholder="Search articles..." />
            </div>
          </div>

          {/* Categories Card */}
          <div className="sidebar-card">
            <h4 className="sidebar-title" style={{ marginBottom: '4px' }}>Categories</h4>
            <p className="sidebar-subtitle">Browse by topic</p>
            <ul className="category-links">
              <li className="active">
                <LayoutGrid size={18} /> All Posts
              </li>
              <li>
                <PenTool size={18} /> Design
              </li>
              <li>
                <Monitor size={18} /> Tech
              </li>
              <li>
                <GraduationCap size={18} /> Academic
              </li>
            </ul>
            <button className="btn btn-primary w-100" style={{ marginTop: '20px', borderRadius: '8px' }}>Subscribe</button>
          </div>

          {/* Recent Posts Card */}
          <div className="sidebar-card">
            <h4 className="sidebar-title">Other Articles</h4>
            <div className="recent-posts-list">
              {blogs.filter(b => b.slug !== slug).slice(0, 2).map((recentBlog) => (
                <Link to={`/blog/${recentBlog.slug}`} key={recentBlog.slug} className="recent-post-item" style={{textDecoration: 'none', color: 'inherit', display: 'flex', gap: '12px'}}>
                  <div className="recent-img-box" style={{flexShrink: 0}}>
                    <img src={recentBlog.featuredImage} alt={recentBlog.imageAlt} style={{width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px'}} />
                  </div>
                  <div className="recent-content">
                    <h5 style={{fontSize: '13px', margin: '0 0 4px', lineHeight: '1.4'}}>{recentBlog.title}</h5>
                    <span style={{fontSize: '11px', color: '#64748b'}}>{recentBlog.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Curation Card */}
          <div className="sidebar-card curation-card">
            <h4>Weekly Curation</h4>
            <p>Get the latest editorial insights delivered to your inbox.</p>
            <input type="email" placeholder="Email address" className="curation-input" />
            <button className="btn w-100 curation-btn">Join Hub</button>
          </div>
        </aside>
      </div>
    </motion.main>
  );
};

export default BlogDetailsView;
