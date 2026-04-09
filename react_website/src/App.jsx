import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomeView from './modules/home/views/HomeView';
import AboutView from './modules/about/views/AboutView';
// Courses and Webinars are temporarily hidden
import AISolutionsView from './modules/ai-solutions/views/AISolutionsView';
import ProductsView from './modules/products/views/ProductsView';
import BlogView from './modules/blog/views/BlogView';
import BlogDetailsView from './modules/blog/views/BlogDetailsView';
import ContactView from './modules/contact/views/ContactView';
// CoursePlayerView hidden with courses
import LoginView from './modules/auth/views/LoginView';
import SignUpView from './modules/auth/views/SignUpView';
import Navbar from './shared/components/Navbar';
import Footer from './shared/components/Footer';
import ScrollToTop from './shared/components/ScrollToTop';
import LaunchPopup from './shared/components/LaunchPopup';

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <LaunchPopup />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomeView />} />
          <Route path="/about" element={<AboutView />} />
          {/* Courses and Webinars temporarily hidden */}
          <Route path="/ai-solutions" element={<AISolutionsView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/blog" element={<BlogView />} />
          <Route path="/blog/:id" element={<BlogDetailsView />} />
          <Route path="/contact" element={<ContactView />} />
          {/* Course player temporarily hidden */}
          <Route path="/login" element={<LoginView />} />
          <Route path="/join" element={<SignUpView />} />
          <Route path="*" element={<div className="section container" style={{minHeight:"60vh"}}><h2>Coming Soon</h2></div>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
