import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Navbar from './layouts/Navbar';
import Home from './pages/Home';
import WhatsApp from './components/ui/WhatsApp';
import useLenisScroll from './hooks/useLenisScroll';
import GalleryPage from './pages/GalleryPage';
import PromotionsPage from './pages/PromotionsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RouterToTop from './utils/RouterToTop';
import ArticlePage from './pages/ArticlePage';
import Booking from './components/ui/Booking';
import Error404 from './layouts/Error404';
import BackToTop from './components/ui/BackToTop';
import SuccessStories from './pages/SuccessStories';
import UniversalFooter from './layouts/UniversalFooter';

const App = () => {
  useLenisScroll();

  return (
    <>
      <HelmetProvider>
        <Router>
          <RouterToTop />
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/offers" element={<PromotionsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/stories" element={<SuccessStories />} />
            <Route path="/:slug" element={<ArticlePage />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <WhatsApp />
          <Booking />
          <BackToTop />

          <UniversalFooter />
        </Router>
      </HelmetProvider>
    </>
  );
};

export default App;
