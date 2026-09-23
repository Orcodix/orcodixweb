import React from 'react';
import { Sparkles, ArrowRight, Zap, ShieldCheck, Award, Target } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

export default function AboutSection({ onNavigate, onBookCallClick }) {
  const stats = [
    { number: '150+', label: 'Products Delivered' },
    { number: '48h', label: 'Average Turnaround' },
    { number: '99.4%', label: 'Client Satisfaction' },
    { number: '$0', label: 'Overhead & Hidden Fees' }
  ];

  return (
    <section id="about" className="py-5 border-0">
      <div className="container px-3 px-md-5 py-4">
        
        {/* Main 2-Column Grid */}
        <div className="row align-items-center g-5 mb-5">
          <div className="col-12 col-lg-7 reveal reveal-left">
            <div className="badge bg-white text-dark border rounded-pill px-3 py-2 fw-semibold mb-3 d-inline-flex align-items-center gap-2 shadow-sm">
              <Sparkles size={14} className="text-primary" />
              <span>About orcodix®</span>
            </div>
            
            <h2 className="display-4 fw-extrabold text-dark tracking-tight mb-4">
              Architects of Next-Gen <br />
              <span className="brand-serif italic">Digital Products & Apps.</span>
            </h2>
            
            <p className="brand-subtitle fs-6 mb-4" style={{ maxWidth: '580px', lineHeight: '1.65' }}>
              We replaced slow, traditional agencies and unreliable freelancers with a high-velocity, flat-rate monthly design and development subscription. Get world-class websites, mobile apps, and UI/UX design executed without the wait.
            </p>

            <div className="d-flex flex-wrap gap-3 align-items-center">
              <button 
                className="btn-dark-pill d-flex align-items-center gap-2"
                onClick={onBookCallClick}
              >
                <span>Book Intro Call</span>
                <ArrowRight size={16} />
              </button>

              <button 
                style={{
                  height: '52px',
                  padding: '0 26px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  background: '#FFFFFF',
                  color: '#0D0D0D',
                  border: '1px solid rgba(0,0,0,0.07)',
                  borderRadius: '999px',
                  boxShadow: '0 1px 0 rgba(255,255,255,1) inset, 0 -1px 0 rgba(0,0,0,0.05) inset, 0 2px 6px rgba(0,0,0,0.06), 0 6px 18px rgba(0,0,0,0.04)',
                  transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  whiteSpace: 'nowrap',
                }}
                onClick={() => onNavigate && onNavigate('about')}
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
                Learn More About Us
              </button>
            </div>
          </div>

          <div className="col-12 col-lg-5 reveal reveal-right">
            <div className="p-4 rounded-4 bg-light border shadow-sm">
              <div className="d-flex align-items-center gap-3 mb-4">
                <img 
                  src={avatarImg} 
                  alt="Orcodix Senior Lead" 
                  className="rounded-circle border border-2 border-white shadow-sm" 
                  style={{ width: '56px', height: '56px', objectFit: 'cover' }} 
                />
                <div>
                  <h3 className="fw-extrabold fs-5 mb-0 text-dark">Senior Engineering Team</h3>
                  <p className="text-muted small fw-medium mb-0">Dedicated senior designers & full-stack devs</p>
                </div>
              </div>

              <div className="d-flex flex-column gap-3">
                <div className="p-3 bg-white rounded-3 border d-flex align-items-center gap-3">
                  <div 
                    className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: '38px', height: '38px', minWidth: '38px', minHeight: '38px' }}
                  >
                    <Zap size={18} />
                  </div>
                  <div>
                    <h4 className="fw-bold fs-6 mb-0 text-dark">High-Velocity Sprints</h4>
                    <p className="text-muted small mb-0">48-hour average delivery per request</p>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-3 border d-flex align-items-center gap-3">
                  <div 
                    className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{ width: '38px', height: '38px', minWidth: '38px', minHeight: '38px' }}
                  >
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="fw-bold fs-6 mb-0 text-dark">Flat Monthly Rate</h4>
                    <p className="text-muted small mb-0">No hourly billing or unexpected scope fees</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Stat Metric Strip */}
        <div className="row g-4 pt-4 border-top">
          {stats.map((stat, idx) => (
            <div key={idx} className={`col-6 col-md-3 reveal delay-${idx + 1}`}>
              <div className="p-3 text-center text-md-start">
                <div className="display-5 fw-extrabold text-dark tracking-tight mb-1" style={{ letterSpacing: '-0.04em' }}>
                  {stat.number}
                </div>
                <div className="text-muted small fw-bold text-uppercase" style={{ letterSpacing: '0.06em' }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
