import React, { useState } from 'react';
import { Globe, ShoppingBag, Smartphone, Palette, ArrowRight, CheckCircle2, X, Sparkles, Clock, Shield, Check } from 'lucide-react';

export default function ServicesSection({ onBookCallClick }) {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'website-development',
      icon: Globe,
      title: 'Website Development',
      badge: 'Web & SaaS',
      shortDesc: 'High-performance Next.js & React web applications optimized for speed, conversion, and global scaling.',
      fullDesc: 'Full-stack web development engineered for high speed, flawless SEO, and maximum conversion rates. We build custom web applications, high-converting landing pages, and seamless headless CMS integrations.',
      quickTags: ['Next.js', 'React', 'Webflow'],
      deliverables: [
        'Next.js & React Web Applications',
        'High-Converting Marketing Sites',
        'Headless CMS & API Integration',
        'Core Web Vitals & Speed Optimization',
        'Responsive & Mobile-First Layouts'
      ],
      tags: ['React', 'Next.js', 'Vite', 'TypeScript', 'Webflow', 'Tailwind CSS'],
      timeline: '2-4 Days Average Delivery'
    },
    {
      id: 'ecommerce-solutions',
      icon: ShoppingBag,
      title: 'E-Commerce Solutions',
      badge: 'Digital Commerce',
      shortDesc: 'Custom online storefronts & checkout flows built to boost sales conversion and luxury brand prestige.',
      fullDesc: 'End-to-end custom digital commerce solutions tailored for high sales volume, frictionless checkout, and luxury brand shopping experiences across all devices.',
      quickTags: ['Shopify', 'Stripe', 'WooCommerce'],
      deliverables: [
        'Custom Shopify & Headless Stores',
        'Stripe & Global Payment Gateways',
        'WooCommerce Custom Themes',
        'High-Converting Product Detail Pages',
        'Cart & Checkout Flow Optimization'
      ],
      tags: ['Shopify', 'Liquid', 'WooCommerce', 'Stripe', 'Next Commerce', 'GraphQL'],
      timeline: '3-5 Days Average Delivery'
    },
    {
      id: 'mobile-app-development',
      icon: Smartphone,
      title: 'Mobile App Development',
      badge: 'iOS & Android',
      shortDesc: 'Native & cross-platform mobile apps with fluid gesture navigation, offline sync, and app store deployment.',
      fullDesc: 'Intuitive, high-speed mobile applications with fluid gesture navigation, offline synchronization, push notifications, and native iOS & Android performance.',
      quickTags: ['React Native', 'iOS', 'Android'],
      deliverables: [
        'Cross-Platform React Native & Flutter Apps',
        'Native iOS (Swift) & Android (Kotlin) Features',
        'Seamless Backend REST & GraphQL APIs',
        'Push Notifications & Offline Sync',
        'App Store & Google Play Publishing'
      ],
      tags: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'REST API'],
      timeline: '4-6 Days Average Delivery'
    },
    {
      id: 'ui-ux-design',
      icon: Palette,
      title: 'UI/UX Design',
      badge: 'Design & Systems',
      shortDesc: 'User-centered visual interfaces, interactive Figma prototypes, and production-ready design systems.',
      fullDesc: 'Data-backed visual interfaces, interactive prototypes, and scalable multi-brand design systems that elevate product usability and delight users.',
      quickTags: ['Figma', 'UI Kits', 'Prototypes'],
      deliverables: [
        'User Research & Wireframing Flows',
        'Interactive Figma Prototypes',
        'Scalable Multi-Brand Design Systems',
        'Micro-Interactions & UX Animation',
        'Usability Audits & Conversion CRO'
      ],
      tags: ['Figma', 'Design Systems', 'Framer', 'Prototyping', 'UI Kits', 'User Research'],
      timeline: '48 Hours Average Delivery'
    }
  ];

  return (
    <section id="services" className="py-5 border-0">
      <div className="container px-3 px-md-5">
        
        {/* Section Header */}
        <div className="d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-5 gap-3 reveal">
          <div>
            <div className="badge bg-white text-dark border rounded-pill px-3 py-2 fw-semibold mb-3 d-inline-flex align-items-center gap-2 shadow-sm">
              <Globe size={14} className="text-primary" />
              <span>Services & Capabilities</span>
            </div>
            <h2 className="display-5 fw-extrabold text-dark tracking-tight mb-0">
              Four Core Capabilities. <br />
              <span className="brand-serif italic">Engineered for Scale.</span>
            </h2>
          </div>
          <p className="brand-subtitle mb-0">
            Click any service card to view complete technical scope, turnarounds, and included deliverables.
          </p>
        </div>

        {/* Services Grid (2x2) */}
        <div className="row g-4">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div className={`col-12 col-md-6 d-flex reveal delay-${idx + 1}`} key={service.id}>
                <div
                  className="sc2-card"
                  onClick={() => setSelectedService(service)}
                >
                  {/* Top row: number + badge */}
                  <div className="sc2-top">
                    <span className="sc2-num">0{idx + 1}</span>
                    <span className="sc2-badge">{service.badge}</span>
                  </div>

                  {/* Icon + Title */}
                  <div className="sc2-head">
                    <div className="sc2-icon">
                      <IconComponent size={22} strokeWidth={2} />
                    </div>
                    <h3 className="sc2-title">{service.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="sc2-desc">{service.shortDesc}</p>

                  {/* Deliverables */}
                  <ul className="sc2-list">
                    {service.deliverables.slice(0, 3).map((item, i) => (
                      <li key={i} className="sc2-list-item">
                        <span className="sc2-dot" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Footer */}
                  <div className="sc2-foot">
                    <div className="sc2-tags">
                      {service.quickTags.map((tag, i) => (
                        <span key={i} className="sc2-tag">{tag}</span>
                      ))}
                    </div>
                    <button
                      className="sc2-btn"
                      onClick={(e) => { e.stopPropagation(); setSelectedService(service); }}
                    >
                      View Scope
                      <ArrowRight size={13} strokeWidth={2.5} />
                    </button>
                  </div>

                  {/* Hover accent strip */}
                  <div className="sc2-accent" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Scope Banner (Redesigned Light Card) */}
        <div 
          className="bg-white rounded-4 p-4 p-md-5 mt-5 d-flex flex-column flex-md-row align-items-center justify-content-between gap-4 border shadow-sm position-relative overflow-hidden"
          style={{ borderRadius: '24px' }}
        >
          <div className="d-flex align-items-center gap-4 z-1">
            <div 
              className="bg-light text-dark rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 border"
              style={{ width: '56px', height: '56px', minWidth: '56px', minHeight: '56px' }}
            >
              <Sparkles size={24} className="text-dark" />
            </div>
            <div>
              <h4 className="fs-4 fw-extrabold text-dark mb-1">Need a custom feature scope?</h4>
              <p className="text-muted fw-medium fs-6 mb-0" style={{ maxWidth: '540px', lineHeight: '1.5' }}>
                Switch between Website, E-Commerce, Mobile Apps, and UI/UX design anytime under one flat monthly subscription.
              </p>
            </div>
          </div>
          <button 
            className="btn-dark-pill px-4 py-3 flex-shrink-0 d-flex align-items-center gap-2 z-1"
            onClick={onBookCallClick}
            style={{ fontSize: '0.9rem' }}
          >
            <span>Book Scope Call</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>

      {/* ── Inner Page / Service Scope Detail Modal ── */}
      {selectedService && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
          style={{ 
            backgroundColor: 'rgba(15, 15, 16, 0.65)', 
            backdropFilter: 'blur(16px)',
            zIndex: 3500 
          }}
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white rounded-4 shadow-lg overflow-hidden w-100 position-relative animate-up"
            style={{ maxWidth: '640px', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 bg-dark text-white d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <div 
                  className="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: '46px', height: '46px', minWidth: '46px', minHeight: '46px' }}
                >
                  {React.createElement(selectedService.icon, { size: 22 })}
                </div>
                <div>
                  <span className="badge bg-white text-dark px-2.5 py-1 rounded-pill small fw-bold mb-1 d-inline-block">
                    {selectedService.badge}
                  </span>
                  <h3 className="fw-extrabold fs-4 mb-0 text-white">{selectedService.title}</h3>
                </div>
              </div>
              <button 
                className="btn btn-sm btn-outline-light rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" 
                onClick={() => setSelectedService(null)}
                style={{ width: '38px', height: '38px', minWidth: '38px', minHeight: '38px' }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-4 p-md-5 overflow-y-auto flex-grow-1">
              
              {/* Detailed Description */}
              <div className="mb-4">
                <h4 className="small fw-bold text-uppercase text-muted tracking-wider mb-2">Service Overview</h4>
                <p className="text-dark fw-medium fs-6" style={{ lineHeight: '1.6' }}>
                  {selectedService.fullDesc}
                </p>
              </div>

              {/* Timeline Info */}
              <div className="bg-light rounded-3 p-3 mb-4 d-flex align-items-center gap-3 border">
                <Clock size={20} className="text-dark flex-shrink-0" />
                <div>
                  <span className="small fw-bold text-dark d-block">Turnaround Time</span>
                  <span className="small text-muted">{selectedService.timeline}</span>
                </div>
              </div>

              {/* Full Deliverables List */}
              <div className="mb-4">
                <h4 className="small fw-bold text-uppercase text-muted tracking-wider mb-3">Included Scope & Deliverables</h4>
                <ul className="list-unstyled d-flex flex-column gap-2.5 mb-0">
                  {selectedService.deliverables.map((item, idx) => (
                    <li key={idx} className="d-flex align-items-start gap-2.5 fw-semibold text-dark p-2.5 rounded-3 bg-light border-start border-3 border-dark">
                      <CheckCircle2 size={18} className="text-success mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full Tech Stack Tags */}
              <div className="mb-4">
                <h4 className="small fw-bold text-uppercase text-muted tracking-wider mb-2">Technologies & Stack</h4>
                <div className="d-flex flex-wrap gap-2">
                  {selectedService.tags.map((tag, idx) => (
                    <span key={idx} className="badge bg-light text-dark border rounded-pill px-3 py-2 fw-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer CTA */}
            <div className="p-4 bg-light border-top d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3">
              <div className="d-flex align-items-center gap-2 text-muted small fw-medium">
                <Shield size={16} />
                <span>Included in All Subscription Plans</span>
              </div>
              <button 
                className="btn-dark-pill px-4 py-3 w-100 w-sm-auto d-flex align-items-center justify-content-center gap-2"
                onClick={() => {
                  setSelectedService(null);
                  if (onBookCallClick) onBookCallClick();
                }}
              >
                <span>Request {selectedService.title}</span>
                <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
