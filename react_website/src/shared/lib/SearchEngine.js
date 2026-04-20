// Mock implementation of an intelligent search engine (Algolia/Firebase style)
// This simulates a full-text search backend using local memory indexing for <200ms performance.

import { blogs } from '../../data/blogs';

// Aggregated Database
const searchDatabase = [
  // Static content Pages
  { id: 'page-home', type: 'page', title: 'Home', excerpt: 'AI education platform, personalized learning, AI tutors', url: '/' },
  { id: 'page-about', type: 'page', title: 'About Us', excerpt: 'The vision behind Eduqra, our AI engineers, and mission in education', url: '/about' },
  { id: 'page-products', type: 'page', title: 'Products', excerpt: 'AI tutor platform, Adaptive learning engine, skill gap analytics', url: '/products' },
  { id: 'page-contact', type: 'page', title: 'Contact', excerpt: 'Get in touch with Eduqra experts for AI education integration', url: '/contact' },
  
  // Products
  { id: 'prod-tutor', type: 'product', title: 'Eduqra AI Personal Tutor', excerpt: 'Live 1-on-1 Sessions, AI-matched Mentors. Your 24/7 intelligent learning companion.', url: '/ai-solutions' },
  { id: 'prod-adaptive', type: 'product', title: 'Adaptive Learning Engine', excerpt: 'Cognitive Load Tracking. A curriculum that bends to your brain.', url: '/ai-solutions' },
  { id: 'prod-analytics', type: 'product', title: 'Skill-Gap Analytics Dashboard', excerpt: 'Predictive performance and real-time skill heatmaps.', url: '/ai-solutions' },
  { id: 'prod-assessment', type: 'product', title: 'Smart Assessment Platform', excerpt: 'Automated project grading and instant logical feedback.', url: '/ai-solutions' },
];

// Add blogs dynamically to the index
blogs.forEach(blog => {
  searchDatabase.push({
    id: `blog-${blog.id}`,
    type: 'blog',
    title: blog.title,
    excerpt: blog.excerpt,
    keywords: [blog.primaryKeyword, ...(blog.secondaryKeywords || [])],
    url: `/blog/${blog.slug}`
  });
});

export const SearchEngine = {
  /**
   * Perform an intelligent search query across all content
   * @param {string} query 
   * @returns {Promise<Array>}
   */
  search: async (query) => {
    // Simulate network delay for API realism (under 200ms)
    await new Promise(resolve => setTimeout(resolve, 80));

    if (!query || query.trim() === '') return [];

    const normalizedQuery = query.toLowerCase().trim();
    const terms = normalizedQuery.split(' ');

    const scoredResults = searchDatabase.map(item => {
      let score = 0;
      const titleLower = item.title.toLowerCase();
      const excerptLower = item.excerpt.toLowerCase();
      const keywordsStr = item.keywords ? item.keywords.join(' ').toLowerCase() : '';

      // Exact match in title (Highest weight)
      if (titleLower === normalizedQuery) score += 100;
      else if (titleLower.includes(normalizedQuery)) score += 50;

      // Exact match in keywords
      if (keywordsStr.includes(normalizedQuery)) score += 40;

      // Term by term mapping
      terms.forEach(term => {
        if (titleLower.includes(term)) score += 10;
        if (excerptLower.includes(term)) score += 5;
        if (keywordsStr.includes(term)) score += 8;
      });

      return { item, score };
    });

    // Filter, sort by score, and return top 8
    return scoredResults
      .filter(res => res.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map(res => res.item);
  },

  /**
   * Get suggestions based on partially typed keywords
   */
  getSuggestions: async (query) => {
    // Simulating Algolia query suggestions
    await new Promise(resolve => setTimeout(resolve, 40));
    
    const possibleSuggestions = [
      "AI in education India",
      "AI Personal Tutor",
      "Adaptive Learning Engine",
      "Skill-gap analytics",
      "Future of education technology",
      "Emerging AI skills",
      "AI learning tools",
      "Contact support"
    ];

    if (!query) return possibleSuggestions.slice(0, 4);

    return possibleSuggestions.filter(s => 
      s.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 4);
  }
};
