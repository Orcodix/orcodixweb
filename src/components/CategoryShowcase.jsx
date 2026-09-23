import React from 'react';
import workAnalyticsImg from '../assets/work-analytics.jpg';
import workEcommerceImg from '../assets/work-ecommerce.jpg';
import workMobileImg from '../assets/work-mobile.jpg';
import workUxDesignImg from '../assets/work-uxdesign.jpg';
import { ArrowUpRight, Sparkles, Clock, Zap, ShieldCheck } from 'lucide-react';

export default function CategoryShowcase({ activeCategory, onBookCallClick }) {
  const projects = [
    {
      id: 1,
      title: 'Atlas Analytics Platform',
      category: 'Website Development',
      tag: 'Website Development',
      image: workAnalyticsImg,
      desc: 'High-performance Next.js SaaS platform, custom component library, and performant web architecture.'
    },
    {
      id: 2,
      title: 'Aurélia Paris Storefront',
      category: 'E-Commerce Solutions',
      tag: 'E-Commerce Solutions',
      image: workEcommerceImg,
      desc: 'Bespoke luxury Shopify storefront, customized checkout flow, and global multi-currency payment integration.'
    },
    {
      id: 3,
      title: 'Verve Mobile iOS Ecosystem',
      category: 'Mobile App Development',
      tag: 'Mobile App Development',
      image: workMobileImg,
      desc: 'Cross-platform React Native iOS & Android application with offline synchronization and push notifications.'
    },
    {
      id: 4,
      title: 'Aura Design System & Prototyping',
      category: 'UI/UX Design',
      tag: 'UI/UX Design',
      image: workUxDesignImg,
      desc: 'End-to-end user experience design, interactive Figma prototypes, wireframing, and micro-interactions.'
    }
  ];

  const displayProjects = projects;

  return (
    <section id="work" className="work-section">
      <div className="container px-3 px-md-5">
        
        {/* Section Header */}
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-5 gap-3 reveal">
          <div>
            <div className="badge bg-white text-dark border rounded-pill px-3 py-2 fw-semibold mb-3 d-inline-flex align-items-center gap-2 shadow-sm">
              <Sparkles size={14} className="text-primary" />
              <span>Selected Works</span>
            </div>
            <h2 className="display-5 fw-extrabold text-dark tracking-tight mb-0">
              Crafted with precision for <br />
              <span className="brand-serif italic">{activeCategory || 'World-Class Brands'}</span>
            </h2>
          </div>
          <p className="brand-subtitle mb-0">
            We replace slow agencies and flaky freelancers with a high-speed, flat-rate monthly design subscription.
          </p>
        </div>

        {/* Project Cards Grid (2x2 Grid) */}
        <div className="row g-4">
          {displayProjects.map((item, idx) => (
            <div className={`col-12 col-md-6 d-flex reveal delay-${idx + 1}`} key={item.id}>
              <div className="portfolio-card h-100 p-3.5 p-md-4 d-flex flex-column justify-content-between">
                
                {/* Image & Badge Wrapper */}
                <div className="portfolio-card-img-wrapper mb-3.5">
                  <img src={item.image} alt={item.title} className="portfolio-card-img" />
                  <span className="position-absolute top-0 start-0 m-3 badge bg-white text-dark rounded-pill shadow-sm px-3 py-2 fw-bold border border-light">
                    {item.tag}
                  </span>
                </div>

                {/* Text & Action Arrow Row */}
                <div className="pt-2 px-1">
                  <div className="d-flex align-items-start justify-content-between gap-3 mb-2">
                    <div>
                      <span className="text-uppercase fw-bold text-muted" style={{ fontSize: '0.7rem', letterSpacing: '0.08em' }}>
                        {item.category}
                      </span>
                      <h3 className="fs-4 fw-extrabold text-dark mb-0 mt-1">{item.title}</h3>
                    </div>

                    <div className="portfolio-action-btn">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>

                  <p className="text-muted fw-medium fs-6 mb-0" style={{ lineHeight: '1.55' }}>
                    {item.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Feature Grid */}
        <div className="row g-4 mt-5 pt-4">
          <div className="col-12 col-md-4">
            <div className="work-feature-box h-100 d-flex align-items-start gap-3">
              <div 
                className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 shadow-sm"
                style={{ width: '52px', height: '52px', minWidth: '52px', minHeight: '52px' }}
              >
                <Clock size={22} />
              </div>
              <div>
                <h4 className="fw-extrabold fs-5 text-dark mb-1">48-Hour Delivery</h4>
                <p className="text-muted small fw-medium mb-0">Get your design requests completed one by one in 2 business days on average.</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="work-feature-box h-100 d-flex align-items-start gap-3">
              <div 
                className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 shadow-sm"
                style={{ width: '52px', height: '52px', minWidth: '52px', minHeight: '52px' }}
              >
                <Zap size={22} />
              </div>
              <div>
                <h4 className="fw-extrabold fs-5 text-dark mb-1">Unlimited Queue</h4>
                <p className="text-muted small fw-medium mb-0">Add as many design requests to your queue as you want. We work through them sequentially.</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="work-feature-box h-100 d-flex align-items-start gap-3">
              <div 
                className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 shadow-sm"
                style={{ width: '52px', height: '52px', minWidth: '52px', minHeight: '52px' }}
              >
                <ShieldCheck size={22} />
              </div>
              <div>
                <h4 className="fw-extrabold fs-5 text-dark mb-1">Pause or Cancel</h4>
                <p className="text-muted small fw-medium mb-0">Pause your subscription anytime and save your remaining subscription days for later.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
