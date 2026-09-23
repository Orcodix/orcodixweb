import React, { useState } from 'react';
import { Globe, ShoppingBag, Smartphone, Palette, ArrowRight, CheckCircle2, Clock, ShieldCheck, Zap } from 'lucide-react';

export default function ServicesPage({ onBookCallClick, onNavigate }) {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: 'website-development',
      icon: Globe,
      title: 'Website Development',
      badge: 'Web & SaaS',
      shortDesc: 'High-performance Next.js & React web applications optimized for speed, SEO, and maximum conversion rates.',
      deliverables: [
        'Next.js & React Single/Multi-Page Web Applications',
        'High-Converting SaaS & Product Marketing Sites',
        'Headless CMS Integrations (Sanity, Strapi, Contentful)',
        'Core Web Vitals 90+ Performance & Speed Optimization',
        'Responsive & Mobile-First Component Architectures',
        'SEO Metadata, Schema & Analytics Integration'
      ],
      tags: ['React', 'Next.js', 'Vite', 'TypeScript', 'Webflow', 'Tailwind CSS', 'Node.js', 'Sanity'],
      timeline: '2-4 Days Average Delivery'
    },
    {
      id: 'ecommerce-solutions',
      icon: ShoppingBag,
      title: 'E-Commerce Solutions',
      badge: 'Digital Commerce',
      shortDesc: 'End-to-end custom online storefronts built to boost sales, optimize checkout conversion, and deliver luxury brand shopping experiences.',
      deliverables: [
        'Custom Shopify & Shopify Plus Theme Development',
        'Headless E-Commerce Frontends with Next.js Commerce',
        'Stripe, PayPal & Global Payment Gateway Setup',
        'High-Converting Product Detail & Cart Drawer Optimization',
        'WooCommerce Custom Themes & Plugin Integrations',
        'Multi-Currency & International Shipping Configs'
      ],
      tags: ['Shopify', 'Liquid', 'WooCommerce', 'Stripe', 'Next Commerce', 'GraphQL', 'Tailwind'],
      timeline: '3-5 Days Average Delivery'
    },
    {
      id: 'mobile-app-development',
      icon: Smartphone,
      title: 'Mobile App Development',
      badge: 'iOS & Android',
      shortDesc: 'Intuitive, high-speed mobile applications with fluid gesture navigation, offline capabilities, and native iOS & Android performance.',
      deliverables: [
        'Cross-Platform React Native & Flutter App Architecture',
        'Native iOS (Swift) & Android (Kotlin) Module Integration',
        'Backend RESTful & GraphQL API Connection',
        'Push Notifications, Analytics & Deep Linking Setup',
        'Offline Data Sync & Secure Authentication',
        'App Store & Google Play Publishing Support'
      ],
      tags: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'REST API', 'GraphQL'],
      timeline: '4-6 Days Average Delivery'
    },
    {
      id: 'ui-ux-design',
      icon: Palette,
      title: 'UI/UX Design',
      badge: 'Design & Systems',
      shortDesc: 'User-centered visual interfaces, interactive prototypes, and production-ready design systems that elevate product usability.',
      deliverables: [
        'User Journey Mapping & Low/High-Fidelity Wireframes',
        'Interactive Figma Prototypes & Micro-Interactions',
        'Scalable Multi-Brand Design Systems & Component Libraries',
        'SaaS Dashboard & Mobile App Visual UI Kits',
        'Usability Audits & Conversion Rate Optimization (CRO)',
        'Design-to-Code Developer Handoff Tokens'
      ],
      tags: ['Figma', 'Design Systems', 'Framer', 'Prototyping', 'UI Kits', 'User Research', 'Auto-Layout'],
      timeline: '48 Hours Average Delivery'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.id === activeTab);

  return (
    <div className="services-page animate-up">
      {/* Page Header */}
      <section className="py-5 bg-white border-bottom">
        <div className="container px-3 px-md-5 py-4">
          <div className="max-w-2xl">
            <span className="badge bg-dark text-white rounded-pill px-3 py-2 fw-semibold mb-3 d-inline-flex align-items-center gap-2">
              <Globe size={14} />
              <span>Services & Capabilities</span>
            </span>
            <h1 className="display-3 fw-extrabold text-dark tracking-tight mb-3">
              Technical Scope & <br />
              <span className="brand-serif italic">Core Services.</span>
            </h1>
            <p className="text-muted fs-5 fw-medium" style={{ lineHeight: '1.65', maxWidth: '600px' }}>
              We cover all four pillars of digital execution under one flexible monthly subscription with zero lock-in contracts.
            </p>

            {/* Filter Tabs */}
            <div className="d-flex flex-wrap gap-2 mt-4 pt-2">
              <button 
                className={`btn rounded-pill px-3 py-2 fw-semibold small ${activeTab === 'all' ? 'btn-dark' : 'btn-outline-secondary'}`}
                onClick={() => setActiveTab('all')}
              >
                All Services
              </button>
              {services.map((s) => (
                <button 
                  key={s.id}
                  className={`btn rounded-pill px-3 py-2 fw-semibold small ${activeTab === s.id ? 'btn-dark' : 'btn-outline-secondary'}`}
                  onClick={() => setActiveTab(s.id)}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-5" style={{ backgroundColor: '#F8F8F7' }}>
        <div className="container px-3 px-md-5">
          <div className="d-flex flex-column gap-5">
            {filteredServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div className="sp2-card" key={service.id} id={service.id}>

                  {/* Card Header */}
                  <div className="sp2-card-header">
                    <div className="sp2-header-left">
                      <span className="sp2-num">0{idx + 1}</span>
                      <div className="sp2-icon">
                        <IconComp size={24} strokeWidth={2} />
                      </div>
                      <div>
                        <span className="sp2-badge">{service.badge}</span>
                        <h2 className="sp2-title">{service.title}</h2>
                      </div>
                    </div>
                    <div className="sp2-timeline">
                      <Clock size={15} strokeWidth={2} />
                      {service.timeline}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="sp2-card-body">
                    {/* Left: desc + deliverables */}
                    <div className="sp2-col-main">
                      <p className="sp2-desc">{service.shortDesc}</p>

                      <h4 className="sp2-label">Scope &amp; Deliverables</h4>
                      <ul className="sp2-list">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="sp2-list-item">
                            <CheckCircle2 size={15} strokeWidth={2.5} className="sp2-check" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: tech stack + CTA */}
                    <div className="sp2-col-side">
                      <h4 className="sp2-label">Technologies &amp; Stack</h4>
                      <div className="sp2-tags">
                        {service.tags.map((tag, i) => (
                          <span key={i} className="sp2-tag">{tag}</span>
                        ))}
                      </div>

                      <button className="sp2-cta" onClick={onBookCallClick}>
                        <span>Request {service.title}</span>
                        <ArrowRight size={16} strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
