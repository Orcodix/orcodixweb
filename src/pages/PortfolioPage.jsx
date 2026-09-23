import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import workAnalyticsImg from '../assets/work-analytics.jpg';
import workEcommerceImg from '../assets/work-ecommerce.jpg';
import workMobileImg from '../assets/work-mobile.jpg';
import workUxDesignImg from '../assets/work-uxdesign.jpg';
import workEnterpriseImg from '../assets/work-enterprise.jpg';
import workFitnessImg from '../assets/work-fitness.jpg';

export default function PortfolioPage({ onBookCallClick }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Atlas Analytics Platform',
      category: 'Website Development',
      tag: 'Website Development',
      image: workAnalyticsImg,
      metric: '+180% Conversion Rate',
      client: 'Atlas Data Corp',
      desc: 'Complete Next.js platform overhaul, custom React component library, and high-converting marketing website for a series-B SaaS platform.',
      fullDetails: 'We rebuilt the entire Atlas Analytics website from scratch using Next.js 14, Tailwind CSS, and Framer Motion. Page speed scores improved from 42 to 98 on Core Web Vitals, resulting in a 180% increase in free trial signups.',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Framer Motion']
    },
    {
      id: 2,
      title: 'Aurélia Luxury Storefront',
      category: 'E-Commerce Solutions',
      tag: 'E-Commerce Solutions',
      image: workEcommerceImg,
      metric: '$2.4M ARR Generated',
      client: 'Aurélia Haute Couture',
      desc: 'Bespoke luxury Shopify storefront, customized checkout flow, and global multi-currency payment integration for Paris fashion house.',
      fullDetails: 'Engineered a bespoke Shopify Liquid theme with custom 3D model viewers, quick add-to-cart drawer, and multi-currency Stripe payment gateway integration.',
      tech: ['Shopify', 'Liquid', 'Stripe', 'GraphQL', 'JavaScript']
    },
    {
      id: 3,
      title: 'Verve Mobile iOS Ecosystem',
      category: 'Mobile App Development',
      tag: 'Mobile App Development',
      image: workMobileImg,
      metric: '4.9 App Store Rating',
      client: 'Verve Health Inc.',
      desc: 'Cross-platform React Native iOS & Android application with offline synchronization, biometric security, and push notifications.',
      fullDetails: 'Built a cross-platform mobile experience serving over 250,000 active monthly users. Features include offline sync, HealthKit integration, biometric unlock, and real-time push alerts.',
      tech: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'REST API']
    },
    {
      id: 4,
      title: 'Aura Design System & Prototyping',
      category: 'UI/UX Design',
      tag: 'UI/UX Design',
      image: workUxDesignImg,
      metric: '3x Faster Feature Launch',
      client: 'Aura Spatial Labs',
      desc: 'End-to-end user experience design, interactive Figma prototypes, multi-brand design system, and micro-interactions.',
      fullDetails: 'Crafted a comprehensive Figma design system containing over 450+ auto-layout components, light/dark mode tokens, and interactive high-fidelity user flows.',
      tech: ['Figma', 'Design Systems', 'Prototyping', 'Framer', 'UI Kit']
    },
    {
      id: 5,
      title: 'Monolith Enterprise Portal',
      category: 'Website Development',
      tag: 'Website Development',
      image: workEnterpriseImg,
      metric: '99.9% Uptime Architecture',
      client: 'Monolith Global',
      desc: 'Enterprise web portal with headless CMS integration, multi-language localization, and role-based access control.',
      fullDetails: 'Designed and built a multi-region corporate web portal powered by Next.js and Sanity CMS with automated deployment workflows.',
      tech: ['Next.js', 'Sanity CMS', 'Tailwind', 'TypeScript']
    },
    {
      id: 6,
      title: 'Kinetix Fitness Mobile App',
      category: 'Mobile App Development',
      tag: 'Mobile App Development',
      image: workFitnessImg,
      metric: '120k Active Downloads',
      client: 'Kinetix Labs',
      desc: 'Workout tracking mobile application with animated exercise guides, social leaderboards, and subscription billing.',
      fullDetails: 'Developed a high-performance React Native mobile app with custom canvas animations and Stripe in-app subscriptions.',
      tech: ['React Native', 'Redux', 'Stripe', 'Node.js']
    }
  ];

  const categories = ['All', 'Website Development', 'E-Commerce Solutions', 'Mobile App Development', 'UI/UX Design'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="portfolio-page animate-up">
      {/* Page Header */}
      <section className="py-5 bg-white border-bottom">
        <div className="container px-3 px-md-5 py-4">
          <div className="max-w-2xl">
            <span className="badge bg-dark text-white rounded-pill px-3 py-2 fw-semibold mb-3 d-inline-flex align-items-center gap-2">
              <Sparkles size={14} />
              <span>Case Studies & Work</span>
            </span>
            <h1 className="display-3 fw-extrabold text-dark tracking-tight mb-3">
              Selected Deliverables & <br />
              <span className="brand-serif italic">Client Success Stories.</span>
            </h1>
            <p className="text-muted fs-5 fw-medium" style={{ lineHeight: '1.65', maxWidth: '600px' }}>
              Explore how we help ambitious startups and global teams ship world-class digital products in days, not months.
            </p>

            {/* Filter Tabs */}
            <div className="d-flex flex-wrap gap-2 mt-4 pt-2">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  className={`btn rounded-pill px-3 py-2 fw-semibold small ${activeCategory === cat ? 'btn-dark' : 'btn-outline-secondary'}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-5" style={{ backgroundColor: '#F8F8F7' }}>
        <div className="container px-3 px-md-5">
          <div className="row g-4">
            {filteredProjects.map((item) => (
              <div className="col-12 col-md-6" key={item.id}>
                <div 
                  className="portfolio-card h-100 p-3 bg-white rounded-4 border shadow-sm transition-all"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedProject(item)}
                >
                  <div className="position-relative overflow-hidden rounded-4 mb-3">
                    <img src={item.image} alt={item.title} className="portfolio-card-img" style={{ height: '280px', objectFit: 'cover', width: '100%' }} />
                    <span className="position-absolute top-0 start-0 m-3 badge bg-white text-dark rounded-pill shadow-sm px-3 py-2 fw-bold">
                      {item.tag}
                    </span>
                    <span className="position-absolute bottom-0 end-0 m-3 badge bg-dark text-white rounded-pill shadow px-3 py-2 fw-semibold">
                      {item.metric}
                    </span>
                  </div>
                  <div className="px-2 pb-2">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h3 className="fs-4 fw-bold text-dark mb-0">{item.title}</h3>
                      <div className="bg-light rounded-circle p-2">
                        <ArrowUpRight size={18} className="text-dark" />
                      </div>
                    </div>
                    <p className="text-muted small fw-medium mb-3">{item.desc}</p>
                    <div className="d-flex flex-wrap gap-1.5 pt-2 border-top">
                      {item.tech.map((t, idx) => (
                        <span key={idx} className="badge bg-light text-secondary rounded-pill px-2.5 py-1 fs-7 border">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Case Study Modal */}
      {selectedProject && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
          style={{ backgroundColor: 'rgba(15, 15, 16, 0.65)', backdropFilter: 'blur(16px)', zIndex: 3500 }}
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-4 shadow-lg overflow-hidden w-100 position-relative animate-up"
            style={{ maxWidth: '640px', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-dark text-white d-flex align-items-center justify-content-between">
              <div>
                <span className="badge bg-white text-dark px-2.5 py-1 rounded-pill small fw-bold mb-1 d-inline-block">
                  {selectedProject.tag}
                </span>
                <h3 className="fw-bold fs-4 mb-0 text-white">{selectedProject.title}</h3>
              </div>
              <button className="btn btn-sm btn-outline-light rounded-circle p-2" onClick={() => setSelectedProject(null)}>
                <X size={18} />
              </button>
            </div>

            <div className="p-4 p-md-5 overflow-y-auto flex-grow-1">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-100 rounded-3 mb-4 object-fit-cover" style={{ height: '240px' }} />
              
              <div className="bg-light p-3 rounded-3 border mb-4 d-flex align-items-center justify-content-between">
                <div>
                  <span className="small text-muted d-block fw-semibold">Client</span>
                  <span className="fw-bold text-dark">{selectedProject.client}</span>
                </div>
                <div className="text-end">
                  <span className="small text-muted d-block fw-semibold">Key Result</span>
                  <span className="badge bg-success text-white fw-bold px-3 py-1.5 fs-6">{selectedProject.metric}</span>
                </div>
              </div>

              <h4 className="small fw-bold text-uppercase text-muted tracking-wider mb-2">Project Overview</h4>
              <p className="text-dark fw-medium fs-6 mb-4" style={{ lineHeight: '1.6' }}>
                {selectedProject.fullDetails}
              </p>

              <h4 className="small fw-bold text-uppercase text-muted tracking-wider mb-2">Technologies Used</h4>
              <div className="d-flex flex-wrap gap-2">
                {selectedProject.tech.map((t, idx) => (
                  <span key={idx} className="badge bg-light text-dark border rounded-pill px-3 py-1.5 fw-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-light border-top d-flex align-items-center justify-content-between">
              <span className="small text-muted fw-medium">Want similar results?</span>
              <button className="btn-dark-pill px-4 py-2.5" onClick={() => { setSelectedProject(null); if (onBookCallClick) onBookCallClick(); }}>
                Book Scope Call
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
