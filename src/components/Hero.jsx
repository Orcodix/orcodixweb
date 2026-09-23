import React from 'react';
import Hero3D from './Hero3D';
import avatarImg from '../assets/avatar.jpg';

export default function Hero({ onBookCallClick, onNavigate }) {
  const servicePills = ['Branding', 'Social Graphics', 'UX Design', 'Pitch Decks', 'Web Development', 'Mobile Apps', 'E-Commerce'];
  const duplicatedPills = [...servicePills, ...servicePills];

  const handleViewProjects = () => {
    const el = document.getElementById('pricing') || document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigate) {
      onNavigate('portfolio');
    }
  };

  return (
    <section className="hero-section position-relative overflow-hidden">

      {/* THREE.JS 3D PROCEDURAL VISUAL */}
      <Hero3D />

      <div className="container px-3 px-md-5 position-relative" style={{ zIndex: 3, pointerEvents: 'none' }}>
        <div className="row align-items-center min-vh-hero">
          <div className="col-12 col-lg-7 content-col hero-animate py-5" style={{ pointerEvents: 'auto' }}>

            {/* Service Pills Infinite Marquee (Right-to-Left Continuous Animation) */}
            <div className="hero-marquee-container mb-4 pb-1">
              <div className="hero-marquee-track">
                {duplicatedPills.map((pill, idx) => (
                  <span
                    key={`${pill}-${idx}`}
                    className="badge bg-white text-dark rounded-pill px-3.5 py-2 fw-semibold border shadow-sm"
                    style={{ fontSize: '0.82rem', letterSpacing: '-0.01em', color: '#1A1A1A', whiteSpace: 'nowrap' }}
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* Headline */}
            <h1
              className="hero-headline mb-4"
              style={{
                fontSize: 'clamp(2.8rem, 5.2vw, 4.4rem)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: '#0D0D0D'
              }}
            >
              World-class <br />
              design <span className="brand-serif italic text-primary" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: 400 }}>orcodix<sup>®</sup></span> <br />
              you need it.
            </h1>

            {/* Supporting Text */}
            <p
              className="brand-subtitle mb-4 pb-2 text-secondary"
              style={{ maxWidth: '480px', fontSize: '1.1rem', lineHeight: 1.5, color: '#555555' }}
            >
              A monthly design subscription for startups, creators, and teams who need work done without the wait.
            </p>

            {/* Action Buttons */}
            <div className="hero-cta-group d-flex flex-wrap align-items-center gap-3 hero-animate-delay">
              {/* Primary Black Pill Button */}
              <button
                className="btn btn-dark-hero rounded-pill d-inline-flex align-items-center gap-2"
                onClick={handleViewProjects}
                style={{ fontSize: '0.95rem', fontWeight: 700, height: '52px', padding: '0 28px' }}
              >
                <span>View Our Work</span>
              </button>

              {/* Secondary Get Started Pill Button */}
              <button
                className="btn rounded-pill d-inline-flex align-items-center gap-2"
                onClick={onBookCallClick}
                style={{
                  height: '52px',
                  padding: '0 28px',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  background: '#FFFFFF',
                  color: '#0D0D0D',
                  border: '1px solid rgba(0,0,0,0.07)',
                  boxShadow: '0 1px 0 rgba(255,255,255,1) inset, 0 -1px 0 rgba(0,0,0,0.05) inset, 0 2px 6px rgba(0,0,0,0.06), 0 6px 18px rgba(0,0,0,0.04)',
                  transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 1px 0 rgba(255,255,255,1) inset, 0 -1px 0 rgba(0,0,0,0.06) inset, 0 4px 14px rgba(0,0,0,0.09), 0 10px 28px rgba(0,0,0,0.07)';
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.13)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '0 1px 0 rgba(255,255,255,1) inset, 0 -1px 0 rgba(0,0,0,0.05) inset, 0 2px 6px rgba(0,0,0,0.06), 0 6px 18px rgba(0,0,0,0.04)';
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)';
                }}
              >
                <span>Get Started</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
