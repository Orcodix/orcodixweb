import React from 'react';
import orcodixLogo from '../assets/orcodix-logo.svg';
import { ArrowUpRight, ArrowUp, Sparkles, Mail, Globe, ShieldCheck } from 'lucide-react';

export default function Footer({ onNavigate, onBookCallClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root">
      <div className="container px-3 px-md-5">
        
        {/* Top CTA Banner */}
        <div className="footer-cta-card">
          <div className="footer-cta-bg-glow" />
          <div className="row align-items-center justify-content-between g-4 position-relative" style={{ zIndex: 2 }}>
            <div className="col-12 col-lg-7">
              <div className="badge bg-white text-dark rounded-pill px-3 py-2 fw-semibold mb-3 d-inline-flex align-items-center gap-2 shadow-sm">
                <span className="footer-status-dot" />
                <span className="small">2 Spots Available for Next Month</span>
              </div>
              <h2 className="display-5 fw-extrabold text-white tracking-tight mb-2">
                Ready to elevate your <br className="d-none d-md-block" />
                <span className="brand-serif italic text-primary">digital product?</span>
              </h2>
              <p className="text-white-50 fs-6 fw-medium mb-0" style={{ maxWidth: '520px' }}>
                Replace slow agencies and unreliable freelancers. Get world-class design &amp; engineering on demand.
              </p>
            </div>

            <div className="col-12 col-lg-5 text-lg-end">
              <div className="d-flex flex-wrap gap-3 justify-content-lg-end align-items-center">
                <button 
                  className="btn btn-brand-primary rounded-pill px-4 py-3 fw-bold d-inline-flex align-items-center gap-2 shadow-lg"
                  onClick={onBookCallClick}
                >
                  <span>Book Intro Call</span>
                  <ArrowUpRight size={18} strokeWidth={2.5} />
                </button>
                <button 
                  className="btn btn-outline-light-custom rounded-pill px-4 py-3 fw-bold d-inline-flex align-items-center gap-2"
                  onClick={() => onNavigate && onNavigate('services')}
                >
                  <span>Explore Scope</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="row g-4 g-lg-5 pb-5 mb-4 border-bottom border-dark-subtle">
          
          {/* Col 1: Brand Info */}
          <div className="col-12 col-lg-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <img 
                src={orcodixLogo} 
                alt="orcodix®" 
                className="footer-logo-img" 
              />
            </div>
            <p className="footer-desc mb-4">
              orcodix® is an elite design &amp; development studio delivering high-converting web platforms, custom applications, and visual brand identities on demand.
            </p>
            
            <a href="mailto:hello@orcodix.com" className="footer-email-link">
              <Mail size={16} className="text-primary" />
              <span>hello@orcodix.com</span>
            </a>
          </div>

          {/* Col 2: Navigation */}
          <div className="col-6 col-md-3 col-lg-2">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <button className="footer-link-btn" onClick={() => onNavigate && onNavigate('home')}>Home</button>
              </li>
              <li>
                <button className="footer-link-btn" onClick={() => onNavigate && onNavigate('about')}>About Us</button>
              </li>
              <li>
                <button className="footer-link-btn" onClick={() => onNavigate && onNavigate('services')}>Services &amp; Scope</button>
              </li>
              <li>
                <button className="footer-link-btn" onClick={() => onNavigate && onNavigate('portfolio')}>Selected Works</button>
              </li>
              <li>
                <button className="footer-link-btn" onClick={() => onNavigate && onNavigate('contact')}>Contact Us</button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="col-6 col-md-3 col-lg-3">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links-list">
              <li>
                <button className="footer-link-btn" onClick={() => onNavigate && onNavigate('services')}>Website Development</button>
              </li>
              <li>
                <button className="footer-link-btn" onClick={() => onNavigate && onNavigate('services')}>E-Commerce Solutions</button>
              </li>
              <li>
                <button className="footer-link-btn" onClick={() => onNavigate && onNavigate('services')}>Mobile App Development</button>
              </li>
              <li>
                <button className="footer-link-btn" onClick={() => onNavigate && onNavigate('services')}>UI/UX &amp; Design Systems</button>
              </li>
              <li>
                <button className="footer-link-btn" onClick={() => onNavigate && onNavigate('services')}>Performance Optimization</button>
              </li>
            </ul>
          </div>

          {/* Col 4: Connect & Socials */}
          <div className="col-12 col-md-6 col-lg-3">
            <h4 className="footer-heading">Connect</h4>
            <p className="footer-desc small mb-3">
              Follow our latest product launches, design tokens, and insights.
            </p>
            <div className="d-flex flex-wrap gap-2 mb-3">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-pill">
                Twitter / X
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="footer-social-pill">
                Dribbble
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-pill">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer-social-pill">
                GitHub
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 pt-2 pb-4 text-white-50 small">
          <div className="d-flex align-items-center gap-3">
            <span>© {new Date().getFullYear()} orcodix® Inc. All rights reserved.</span>
            <span className="d-none d-sm-inline opacity-25">•</span>
            <span className="d-none d-sm-inline-flex align-items-center gap-1.5 text-white-50">
              <ShieldCheck size={14} className="text-primary" />
              <span>100% Satisfaction Guarantee</span>
            </span>
          </div>

          <div className="d-flex align-items-center gap-4">
            <a href="#privacy" className="footer-sub-link">Privacy Policy</a>
            <a href="#terms" className="footer-sub-link">Terms of Service</a>
            <button className="footer-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
              <span>Top</span>
              <ArrowUp size={14} strokeWidth={2.5} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
