import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Loader2, FileText, ArrowRight, Package } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SearchEngine } from '../lib/SearchEngine';
import './GlobalSearchModal.css';

const GlobalSearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
      // Load initial suggestions
      SearchEngine.getSuggestions('').then(setSuggestions);
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  // Debounced search logic
  useEffect(() => {
    const handler = setTimeout(async () => {
      if (query.trim().length > 1) {
        setIsLoading(true);
        const searchRes = await SearchEngine.search(query);
        const suggRes = await SearchEngine.getSuggestions(query);
        setResults(searchRes);
        setSuggestions(suggRes);
        setIsLoading(false);
      } else {
        setResults([]);
        SearchEngine.getSuggestions('').then(setSuggestions);
      }
    }, 250); // Fast debounce for <200ms feeling

    return () => clearTimeout(handler);
  }, [query]);

  const handleSelect = (url) => {
    navigate(url);
    onClose();
  };

  const getIconForType = (type) => {
    switch(type) {
      case 'blog': return <FileText size={16} className="text-secondary" />;
      case 'product': return <Package size={16} className="text-blue-500" />;
      default: return <Search size={16} className="text-gray-400" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="search-backdrop"
            onClick={onClose}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="search-modal"
          >
            <div className="search-header">
              <Search size={22} className="search-icon-main" />
              <input 
                ref={inputRef}
                type="text" 
                placeholder="Search blogs, products, or pages..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {isLoading && <Loader2 size={20} className="spinner" />}
              <button onClick={onClose} className="close-btn">
                <X size={24} />
              </button>
            </div>

            <div className="search-body">
              {query.length > 1 && results.length === 0 && !isLoading && (
                <div className="no-results-state">
                  <p>No results found for "{query}"</p>
                </div>
              )}

              {results.length > 0 && (
                <div className="search-results-group">
                  <h4>Top Results</h4>
                  <ul>
                    {results.map((item) => (
                      <li key={item.id} onClick={() => handleSelect(item.url)}>
                        <div className="result-icon-box">
                          {getIconForType(item.type)}
                        </div>
                        <div className="result-content">
                          <span className="result-title">{item.title}</span>
                          <span className="result-excerpt">{item.excerpt.substring(0, 70)}...</span>
                        </div>
                        <ArrowRight size={14} className="result-arrow" />
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {suggestions.length > 0 && (
                <div className="search-suggestions-group">
                  <h4>Suggestions</h4>
                  <div className="suggestions-flex">
                    {suggestions.map((sugg, idx) => (
                      <button 
                        key={idx} 
                        className="suggestion-tag"
                        onClick={() => setQuery(sugg)}
                      >
                        <Search size={12} /> {sugg}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="search-footer">
              <span>Powered by <strong>Intelligent Search</strong></span>
              <span className="kbd-shortcut"><kbd>ESC</kbd> to close</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default GlobalSearchModal;
