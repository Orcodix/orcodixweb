import React from 'react';
import { Sparkles, ShieldCheck, Zap, Users, ArrowRight, Award, Target, Clock, CheckCircle2 } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';
import fluidMeshImg from '../assets/fluid-mesh.png';

export default function AboutPage({ onNavigate, onBookCallClick }) {
  const stats = [
    { number: '150+', label: 'Products Delivered' },
    { number: '48h', label: 'Average Turnaround' },
    { number: '99.4%', label: 'Client Satisfaction' },
    { number: '$0', label: 'Overhead & Hidden Fees' }
  ];

  const values = [
    {
      icon: Zap,
      title: 'High Velocity Execution',
      desc: 'We operate like an elite in-house engineering team. No endless status meetings, no bureaucracy—just fast, high-quality deliverables.'
    },
    {
      icon: ShieldCheck,
      title: 'Transparent Flat Subscriptions',
      desc: 'No unpredictable hourly billing or scope creep. One flat monthly price with unlimited revisions and the ability to pause anytime.'
    },
    {
      icon: Award,
      title: 'World-Class Quality Standard',
      desc: 'Every pixel, component, and line of code is engineered to perfection using modern stacks like Next.js, React, Figma, and Shopify.'
    },
    {
      icon: Target,
      title: 'Conversion-Focused Strategy',
      desc: 'We don’t just build pretty designs—we engineer high-converting digital products designed to accelerate user acquisition and revenue growth.'
    }
  ];

  return (
    <div className="about-page animate-up">
      {/* Hero Header */}
      <section className="py-5 bg-white border-bottom">
        <div className="container px-3 px-md-5 py-4">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-7">
              <span className="badge bg-dark text-white rounded-pill px-3 py-2 fw-semibold mb-3 d-inline-flex align-items-center gap-2">
                <Sparkles size={14} />
                <span>About orcodix®</span>
              </span>
              <h1 className="display-3 fw-extrabold text-dark tracking-tight mb-4">
                Architects of Next-Gen <br />
                <span className="brand-serif italic">Digital Products & Apps.</span>
              </h1>
              <p className="text-muted fs-5 fw-medium mb-4" style={{ lineHeight: '1.65', maxWidth: '560px' }}>
                We replaced slow, traditional agencies and unreliable freelancers with a high-velocity design and development subscription.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button 
                  className="btn-dark-pill px-4 py-3 d-flex align-items-center gap-2"
                  onClick={onBookCallClick}
                >
                  <span>Book Intro Call</span>
                  <ArrowRight size={16} />
                </button>
                <button 
                  className="btn btn-outline-dark rounded-pill px-4 py-3 fw-semibold"
                  onClick={() => onNavigate('services')}
                >
                  Explore Services
                </button>
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <div className="position-relative">
                <div className="rounded-4 overflow-hidden border shadow-lg bg-light p-3">
                  <img src={fluidMeshImg} alt="mdk tech team design" className="w-100 rounded-3 object-fit-cover" style={{ height: '360px' }} />
                  <div className="p-3 bg-white rounded-3 shadow-sm mt-3 d-flex align-items-center gap-3">
                    <img src={avatarImg} alt="Senior Lead" className="rounded-circle" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                    <div>
                      <h4 className="fw-bold fs-6 mb-0 text-dark">Senior Product Team</h4>
                      <p className="text-muted small mb-0">Dedicated senior designers & full-stack engineers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="py-5" style={{ backgroundColor: '#F8F8F7' }}>
        <div className="container px-3 px-md-5">
          <div className="row g-4">
            {stats.map((stat, idx) => (
              <div className="col-6 col-md-3" key={idx}>
                <div className="bg-white rounded-4 p-4 text-center border shadow-sm h-100">
                  <div className="display-5 fw-extrabold text-dark mb-1">{stat.number}</div>
                  <div className="text-muted small fw-semibold text-uppercase">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-5 bg-white">
        <div className="container px-3 px-md-5 py-4">
          <div className="text-center max-w-xl mx-auto mb-5">
            <span className="badge bg-light text-dark border rounded-pill px-3 py-2 fw-semibold mb-3">
              Why Choose Us
            </span>
            <h2 className="display-5 fw-extrabold text-dark tracking-tight mb-3">
              Built for speed, <span className="brand-serif italic">engineered for quality.</span>
            </h2>
            <p className="text-muted fw-medium fs-6">
              We empower startups and growth teams to execute fast without compromising on craftsmanship.
            </p>
          </div>

          <div className="row g-4">
            {values.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div className="col-12 col-md-6" key={idx}>
                  <div className="p-4 p-md-5 bg-light rounded-4 border h-100 d-flex align-items-start gap-4">
                    <div className="bg-dark text-white rounded-circle p-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '54px', height: '54px' }}>
                      <IconComp size={24} />
                    </div>
                    <div>
                      <h3 className="fs-4 fw-bold text-dark mb-2">{val.title}</h3>
                      <p className="text-muted fw-medium mb-0" style={{ lineHeight: '1.6' }}>{val.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container px-3 px-md-5 py-4 text-center">
          <h2 className="display-4 fw-extrabold text-white mb-3">
            Ready to scale your product output?
          </h2>
          <p className="text-white-50 fs-5 mb-4 mx-auto" style={{ maxWidth: '540px' }}>
            Get senior design and web development capabilities for one flat monthly price. Pause or cancel anytime.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-light rounded-pill px-4 py-3 fw-bold text-dark" onClick={onBookCallClick}>
              Book Intro Call
            </button>
            <button className="btn btn-outline-light rounded-pill px-4 py-3 fw-bold" onClick={() => onNavigate('portfolio')}>
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
