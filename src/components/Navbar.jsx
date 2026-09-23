import React, { useState, useEffect } from 'react';
import { X, ArrowUpRight, Zap } from 'lucide-react';
import orcodixLogo from '../assets/orcodix-logo.svg';

export default function Navbar({ currentPage, onNavigate, onPricingClick, onBookingClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navItems = [
    { id: 'home',      label: 'Home' },
    { id: 'about',     label: 'About' },
    { id: 'services',  label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact',   label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setIsOpen(false);
    if (onNavigate) onNavigate(id);
  };

  return (
    <>
      {/* ── Main Navbar ── */}
      <nav className={`nb-root${scrolled ? ' nb-scrolled' : ''}`} role="banner">
        <div className="nb-inner">

          {/* Logo */}
          <a
            href="#home"
            className="nb-logo"
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            aria-label="orcodix home"
          >
            <img src={orcodixLogo} alt="" aria-hidden="true" className="nb-logo-img" />
          
          </a>

          {/* Desktop pill nav */}
          <div className="nb-pill-nav" role="navigation" aria-label="Primary">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nb-link${currentPage === item.id ? ' nb-link-active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="nb-actions">
            {/* Status badge */}
            <span className="nb-status">
              <span className="nb-status-dot" />
              Accepting clients
            </span>

            {/* Book Call CTA */}
            <button className="nb-cta" onClick={onBookingClick}>
              <Zap size={14} strokeWidth={2.5} />
              Book a Call
            </button>

            {/* Animated hamburger */}
            <button
              className={`nb-burger${isOpen ? ' nb-burger-open' : ''}`}
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span className="nb-bar" />
              <span className="nb-bar" />
              <span className="nb-bar" />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Backdrop ── */}
      <div
        className={`nb-overlay${isOpen ? ' nb-overlay-open' : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile Drawer ── */}
      <aside className={`nb-drawer${isOpen ? ' nb-drawer-open' : ''}`} aria-label="Mobile navigation">
        <div className="nb-drawer-head">
          <span className="nb-logo">
            <img src={orcodixLogo} alt="" aria-hidden="true" className="nb-logo-img" />
            <span className="nb-logo-text">orcodix<sup>®</sup></span>
          </span>
          <button className="nb-close" onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        <nav className="nb-drawer-nav" role="navigation" aria-label="Mobile">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              className={`nb-drawer-link${currentPage === item.id ? ' nb-drawer-link-active' : ''}`}
              onClick={() => handleNavClick(item.id)}
              style={{ animationDelay: `${i * 55}ms` }}
            >
              <span>{item.label}</span>
              <ArrowUpRight size={18} strokeWidth={2} className="nb-drawer-arrow" />
            </button>
          ))}
        </nav>

        <div className="nb-drawer-foot">
          <p className="nb-drawer-foot-text">Ready to move fast on your next project?</p>
          <button
            className="nb-cta nb-cta-full"
            onClick={() => { setIsOpen(false); if (onBookingClick) onBookingClick(); }}
          >
            <Zap size={15} strokeWidth={2.5} />
            Book Intro Call
          </button>
        </div>
      </aside>
    </>
  );
}
