import React, { useState } from 'react';
import { Mail, Clock, MapPin, Send, CheckCircle2, MessageSquare, PhoneCall, Sparkles } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

export default function ContactPage({ onBookCallClick }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Website Development',
    budget: '$3k - $5k',
    message: ''
  });

  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "How fast can we kick off a new design or dev project?",
      a: "Once you subscribe or confirm your scope call, we onboard your team within 24 hours. You can submit your first request immediately in Trello or Slack."
    },
    {
      q: "Can I pause or cancel my monthly subscription anytime?",
      a: "Yes! If you only need work for 10 days, pause your subscription and remaining days are saved in your balance for future requests."
    },
    {
      q: "Who handles my design and development requests?",
      a: "All projects are built natively by senior designers and full-stack engineers with 8+ years of industry experience. No junior level outsourcing."
    },
    {
      q: "What format do I receive source files in?",
      a: "You receive 100% full commercial ownership of all Figma source files, Next.js/React GitHub repositories, Webflow transfers, or Shopify theme code."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page animate-up">
      {/* Page Header */}
      <section className="py-5 bg-white border-bottom">
        <div className="container px-3 px-md-5 py-4">
          <div className="max-w-2xl">
            <span className="badge bg-dark text-white rounded-pill px-3 py-2 fw-semibold mb-3 d-inline-flex align-items-center gap-2">
              <MessageSquare size={14} />
              <span>Contact Us</span>
            </span>
            <h1 className="display-3 fw-extrabold text-dark tracking-tight mb-3">
              Let's Build Something <br />
              <span className="brand-serif italic">Exceptional Together.</span>
            </h1>
            <p className="text-muted fs-5 fw-medium" style={{ lineHeight: '1.65', maxWidth: '580px' }}>
              Have questions or want to discuss a custom feature scope? Send us a message or schedule a 15-minute intro call.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="py-5" style={{ backgroundColor: '#F8F8F7' }}>
        <div className="container px-3 px-md-5">
          <div className="row g-4">
            
            {/* Left Contact Details & Callout */}
            <div className="col-12 col-lg-5">
              <div className="bg-white rounded-4 p-4 p-md-5 border shadow-sm h-100 d-flex flex-column justify-content-between">
                <div>
                  <h3 className="fs-3 fw-bold text-dark mb-4">Direct Contact</h3>

                  <div className="d-flex flex-column gap-4 mb-5">
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-light text-dark rounded-circle p-3 border">
                        <Mail size={22} />
                      </div>
                      <div>
                        <span className="small text-muted fw-bold text-uppercase d-block">Email Us</span>
                        <a href="mailto:hello@orcodix.com" className="fw-bold text-dark text-decoration-none fs-5">hello@orcodix.com</a>
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-light text-dark rounded-circle p-3 border">
                        <Clock size={22} />
                      </div>
                      <div>
                        <span className="small text-muted fw-bold text-uppercase d-block">Average Response Time</span>
                        <span className="fw-bold text-dark fs-6">Under 2 Hours</span>
                      </div>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-light text-dark rounded-circle p-3 border">
                        <MapPin size={22} />
                      </div>
                      <div>
                        <span className="small text-muted fw-bold text-uppercase d-block">Operating Hours</span>
                        <span className="fw-bold text-dark fs-6">Global (EST / GMT / IST)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Intro Call Card */}
                <div className="bg-dark text-white rounded-4 p-4 mt-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <img src={avatarImg} alt="Lead Designer" className="rounded-circle border border-2 border-white" style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
                    <div>
                      <h4 className="fw-bold fs-6 mb-0 text-white">Prefer to talk live?</h4>
                      <span className="small text-white-50">15-minute 1-on-1 intro call</span>
                    </div>
                  </div>
                  <button 
                    className="btn btn-light rounded-pill w-100 py-2.5 fw-bold text-dark d-flex align-items-center justify-content-center gap-2 small"
                    onClick={onBookCallClick}
                  >
                    <PhoneCall size={16} />
                    <span>Book Intro Call</span>
                  </button>
                </div>

              </div>
            </div>

            {/* Right Contact Form */}
            <div className="col-12 col-lg-7">
              <div className="bg-white rounded-4 p-4 p-md-5 border shadow-sm">
                {submitted ? (
                  <div className="text-center py-5">
                    <CheckCircle2 size={64} className="text-success mb-3" />
                    <h3 className="display-6 fw-extrabold text-dark mb-2">Message Received!</h3>
                    <p className="text-muted fs-5 fw-medium mb-4 mx-auto" style={{ maxWidth: '440px' }}>
                      Thank you for reaching out, <strong>{formData.name}</strong>. Our senior team will review your project details and get back to you at <strong>{formData.email}</strong> within 2 hours.
                    </p>
                    <button className="btn-dark-pill px-5 py-3" onClick={() => setSubmitted(false)}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="fs-3 fw-bold text-dark mb-2">Project Inquiry Form</h3>
                    <p className="text-muted small fw-medium mb-4">
                      Fill in your details below and we will get back to you with a scope breakdown.
                    </p>

                    <div className="row g-3 mb-3">
                      <div className="col-12 col-md-6">
                        <label className="form-label small fw-bold text-muted text-uppercase">Full Name</label>
                        <input 
                          type="text" 
                          className="form-control bg-light py-2.5 fw-medium" 
                          placeholder="Sarah Jenkins" 
                          required 
                          value={formData.name} 
                          onChange={(e) => setFormData({...formData, name: e.target.value})} 
                        />
                      </div>

                      <div className="col-12 col-md-6">
                        <label className="form-label small fw-bold text-muted text-uppercase">Work Email</label>
                        <input 
                          type="email" 
                          className="form-control bg-light py-2.5 fw-medium" 
                          placeholder="sarah@company.com" 
                          required 
                          value={formData.email} 
                          onChange={(e) => setFormData({...formData, email: e.target.value})} 
                        />
                      </div>
                    </div>

                    <div className="row g-3 mb-3">
                      <div className="col-12 col-md-6">
                        <label className="form-label small fw-bold text-muted text-uppercase">Primary Service</label>
                        <select 
                          className="form-select bg-light py-2.5 fw-medium" 
                          value={formData.service} 
                          onChange={(e) => setFormData({...formData, service: e.target.value})}
                        >
                          <option>Website Development</option>
                          <option>E-Commerce Solutions</option>
                          <option>Mobile App Development</option>
                          <option>UI/UX Design</option>
                        </select>
                      </div>

                      <div className="col-12 col-md-6">
                        <label className="form-label small fw-bold text-muted text-uppercase">Estimated Budget</label>
                        <select 
                          className="form-select bg-light py-2.5 fw-medium" 
                          value={formData.budget} 
                          onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        >
                          <option>$3k - $5k / mo (Standard Pro)</option>
                          <option>$6k - $9k / mo (Double Speed)</option>
                          <option>Custom One-Off Project</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label small fw-bold text-muted text-uppercase">Project Scope & Details</label>
                      <textarea 
                        className="form-control bg-light py-2.5 fw-medium" 
                        rows="4" 
                        placeholder="Tell us about your project goals, timelines, or specific feature requirements..." 
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-dark-pill w-100 py-3 d-flex align-items-center justify-content-center gap-2">
                      <span>Send Project Inquiry</span>
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 bg-white border-top">
        <div className="container px-3 px-md-5 py-4">
          <div className="text-center max-w-xl mx-auto mb-5">
            <span className="badge bg-light text-dark border rounded-pill px-3 py-2 fw-semibold mb-3">
              Got Questions?
            </span>
            <h2 className="display-5 fw-extrabold text-dark tracking-tight mb-2">
              Frequently Asked <span className="brand-serif italic">Questions</span>
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="d-flex flex-column gap-3">
                {faqs.map((faq, idx) => (
                  <div 
                    key={idx} 
                    className={`border rounded-4 p-4 transition-all ${openFaq === idx ? 'bg-light border-dark' : 'bg-white'}`}
                  >
                    <div 
                      className="d-flex align-items-center justify-content-between"
                      onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                      style={{ cursor: 'pointer' }}
                    >
                      <h3 className="fs-5 fw-bold text-dark mb-0">{faq.q}</h3>
                      <div className="bg-white border rounded-circle p-1 ms-3 fw-bold">
                        {openFaq === idx ? '−' : '+'}
                      </div>
                    </div>

                    {openFaq === idx && (
                      <p className="text-muted fw-medium mt-3 mb-0 pt-2 border-top">
                        {faq.a}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
