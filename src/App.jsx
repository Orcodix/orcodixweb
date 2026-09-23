import React, { useState } from 'react';
import useReveal from './hooks/useReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import CategoryShowcase from './components/CategoryShowcase';
import ProcessSection from './components/ProcessSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

// Inner Pages
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeCategory, setActiveCategory] = useState('Website Development');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Re-run scroll-reveal observer whenever the active page changes
  useReveal(undefined, currentPage);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* 1. Header (Global Navbar) */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onBookingClick={() => setIsBookingOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-grow-1">
        {currentPage === 'home' && (
          <>
            {/* 2. Hero */}
            <Hero 
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              onBookCallClick={() => setIsBookingOpen(true)}
            />

            {/* 3. About */}
            <AboutSection 
              onNavigate={handleNavigate}
              onBookCallClick={() => setIsBookingOpen(true)}
            />

            {/* 4. Services */}
            <ServicesSection 
              onBookCallClick={() => setIsBookingOpen(true)}
            />

            {/* 5. Works */}
            <CategoryShowcase 
              activeCategory={activeCategory}
              onBookCallClick={() => setIsBookingOpen(true)}
            />

            {/* 6. Process */}
            <ProcessSection 
              onBookCallClick={() => setIsBookingOpen(true)}
            />

            {/* 7. FAQ */}
            <FAQSection />
          </>
        )}

        {currentPage === 'about' && (
          <AboutPage 
            onNavigate={handleNavigate}
            onBookCallClick={() => setIsBookingOpen(true)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage 
            onNavigate={handleNavigate}
            onBookCallClick={() => setIsBookingOpen(true)}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage 
            onBookCallClick={() => setIsBookingOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage 
            onBookCallClick={() => setIsBookingOpen(true)}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onBookCallClick={() => setIsBookingOpen(true)}
      />

      {/* Booking Calendar Drawer Modal */}
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
