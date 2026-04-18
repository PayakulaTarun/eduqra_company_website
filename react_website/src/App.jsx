import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Lazy load route components for code splitting
const HomeView = lazy(() => import('./modules/home/views/HomeView'));
const AboutView = lazy(() => import('./modules/about/views/AboutView'));
const AISolutionsView = lazy(() => import('./modules/ai-solutions/views/AISolutionsView'));
const ProductsView = lazy(() => import('./modules/products/views/ProductsView'));
const ProfileView = lazy(() => import('./modules/profile/views/ProfileView'));
const BlogView = lazy(() => import('./modules/blog/views/BlogView'));
const BlogDetailsView = lazy(() => import('./modules/blog/views/BlogDetailsView'));
const ContactView = lazy(() => import('./modules/contact/views/ContactView'));
const LoginView = lazy(() => import('./modules/auth/views/LoginView'));
const SignUpView = lazy(() => import('./modules/auth/views/SignUpView'));

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
      <Suspense fallback={
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', color: 'var(--color-primary)' }}>
          <h3>Loading...</h3>
        </div>
      }>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomeView />} />
            <Route path="/about" element={<AboutView />} />
            {/* Courses and Webinars temporarily hidden */}
            <Route path="/ai-solutions" element={<AISolutionsView />} />
            <Route path="/products" element={<ProductsView />} />
            <Route path="/profile" element={<ProfileView />} />
            <Route path="/blog" element={<BlogView />} />
            <Route path="/blog/:slug" element={<BlogDetailsView />} />
            <Route path="/contact" element={<ContactView />} />
            {/* Course player temporarily hidden */}
            <Route path="/login" element={<LoginView />} />
            <Route path="/join" element={<SignUpView />} />
            <Route path="*" element={<div className="section container text-center" style={{minHeight:"60vh"}}><h2>Coming Soon</h2></div>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
