import React from 'react';
import { motion } from 'framer-motion';
import { 
  Share2, Bookmark, Quote, Search, LayoutGrid, 
  PenTool, Monitor, GraduationCap, Globe, Send 
} from 'lucide-react';
import { useParams, Navigate, Link } from 'react-router-dom';
import SEOManager from '../../../shared/components/SEOManager';
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
      <SEOManager 
        title={blog.seoTitle || blog.title}
        description={blog.metaDescription}
        keywords={[blog.primaryKeyword, ...(blog.secondaryKeywords || [])].join(', ')}
        ogImage={blog.featuredImage}
        canonical={`/blog/${blog.slug}`}
        schemaType="Article"
        schemaData={{
          "headline": blog.title,
          "image": [
            blog.featuredImage
          ],
          "datePublished": new Date(blog.date).toISOString(),
          "dateModified": new Date(blog.date).toISOString(),
          "author": [{
            "@type": "Person",
            "name": blog.author
          }],
          "publisher": {
            "@type": "Organization",
            "name": "Eduqra"
          }
        }}
      />
      <SEOManager 
        schemaType="BreadcrumbList"
        schemaData={{
          "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://eduqra.com/"
          },{
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://eduqra.com/blog"
          },{
            "@type": "ListItem",
            "position": 3,
            "name": blog.title
          }]
        }}
      />
      {blog.faqs && blog.faqs.length > 0 && (
        <SEOManager
          schemaType="FAQPage"
          schemaData={{
            "mainEntity": blog.faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          }}
        />
      )}
      <div className="container blog-view-container">
        {/* Main Left Column */}
        <article className="blog-main-card">
          <div className="blog-feature-img">
            <img loading="lazy" src={blog.featuredImage} alt={blog.imageAlt} />
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

            <div className="internal-linking-box">
              <h4>Build Your Future with Eduqra</h4>
              <p>
                Interested in applying these insights? Explore our <Link to="/ai-solutions" className="context-link-inline">AI Learning Platform</Link> to see how we transform theoretical education into practical mastery. You can also view our full suite of <Link to="/products" className="context-link-inline">Smart Learning Systems</Link> designed for students and institutions.
              </p>
            </div>

            <div className="video-seo-section" style={{ marginTop: '2rem', padding: '2rem', background: '#f8fafc', borderRadius: '8px' }}>
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

          <div className="related-articles-section">
            <h3 className="section-title-sm">Related Insights</h3>
            <div className="related-grid">
              {blogs
                .filter(b => b.slug !== slug && b.category === blog.category)
                .slice(0, 3)
                .map(related => (
                  <Link to={`/blog/${related.slug}`} key={related.id} className="related-card">
                    <div className="related-img">
                      <img loading="lazy" src={related.featuredImage} alt={related.imageAlt} />
                    </div>
                    <div className="related-info">
                      <span className="related-date">{related.date}</span>
                      <h4>{related.title}</h4>
                    </div>
                  </Link>
                ))}
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
                <Link to="/blog" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '10px' }}><LayoutGrid size={18} /> All Posts</Link>
              </li>
              <li>
                <Link to="/blog?category=AI" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '10px' }}><PenTool size={18} /> AI</Link>
              </li>
              <li>
                <Link to="/blog?category=Technology" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '10px' }}><Monitor size={18} /> Technology</Link>
              </li>
              <li>
                <Link to="/blog?category=Education" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '10px' }}><GraduationCap size={18} /> Education</Link>
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
                    <img loading="lazy" src={recentBlog.featuredImage} alt={recentBlog.imageAlt} style={{width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px'}} />
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
