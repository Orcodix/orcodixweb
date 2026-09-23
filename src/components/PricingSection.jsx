import React, { useState } from 'react';
import { Check, Sparkles, Zap, ArrowRight } from 'lucide-react';

export default function PricingSection({ onBookCallClick }) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-5 border-0">
      <div className="container px-3 px-md-5">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-5">
          <span className="badge bg-dark text-white rounded-pill px-3 py-2 fw-semibold mb-3 d-inline-flex align-items-center gap-2">
            <Sparkles size={14} />
            <span>Simple Transparent Pricing</span>
          </span>
          <h2 className="display-4 fw-extrabold text-dark tracking-tight mb-3">
            One flat fee. <br />
            <span className="brand-serif italic">Unlimited world-class design.</span>
          </h2>
          <p className="text-muted fs-5 fw-medium">
            No hidden fees, no hourly tracking, no long-term contracts. Pause or cancel anytime.
          </p>

          {/* Billing Switch */}
          <div className="d-inline-flex align-items-center bg-white p-1 rounded-pill border shadow-sm mt-3">
            <button
              className={`btn rounded-pill px-4 py-2 fw-bold text-sm ${!isAnnual ? 'btn-dark' : 'btn-light text-muted'}`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly Billing
            </button>
            <button
              className={`btn rounded-pill px-4 py-2 fw-bold text-sm ${isAnnual ? 'btn-dark' : 'btn-light text-muted'}`}
              onClick={() => setIsAnnual(true)}
            >
              Annual Billing <span className="badge bg-success ms-1">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="row g-4 justify-content-center align-items-stretch">
          
          {/* Standard Plan */}
          <div className="col-12 col-lg-5">
            <div className="bg-white rounded-4 p-4 p-md-5 border shadow-sm h-100 d-flex flex-column justify-content-between position-relative">
              <div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h3 className="fs-3 fw-bold mb-0">Standard Pro</h3>
                  <span className="badge bg-light text-dark border px-3 py-2 rounded-pill fw-bold">Most Popular</span>
                </div>
                <p className="text-muted fw-medium mb-4">One request at a time. Ideal for startups and growing teams.</p>
                
                <div className="d-flex align-items-baseline gap-2 mb-4">
                  <span className="display-4 fw-extrabold text-dark">${isAnnual ? '3,990' : '4,990'}</span>
                  <span className="text-muted fw-semibold fs-5">/ month</span>
                </div>

                <ul className="list-unstyled d-flex flex-column gap-3 mb-5">
                  <li className="d-flex align-items-center gap-3 fw-semibold text-dark">
                    <div className="bg-dark text-white rounded-circle p-1"><Check size={14} /></div>
                    <span>One request at a time</span>
                  </li>
                  <li className="d-flex align-items-center gap-3 fw-semibold text-dark">
                    <div className="bg-dark text-white rounded-circle p-1"><Check size={14} /></div>
                    <span>Average 48-hour delivery</span>
                  </li>
                  <li className="d-flex align-items-center gap-3 fw-semibold text-dark">
                    <div className="bg-dark text-white rounded-circle p-1"><Check size={14} /></div>
                    <span>Unlimited design revisions</span>
                  </li>
                  <li className="d-flex align-items-center gap-3 fw-semibold text-dark">
                    <div className="bg-dark text-white rounded-circle p-1"><Check size={14} /></div>
                    <span>Figma & Webflow source files</span>
                  </li>
                  <li className="d-flex align-items-center gap-3 fw-semibold text-dark">
                    <div className="bg-dark text-white rounded-circle p-1"><Check size={14} /></div>
                    <span>Dedicated senior designer</span>
                  </li>
                  <li className="d-flex align-items-center gap-3 fw-semibold text-dark">
                    <div className="bg-dark text-white rounded-circle p-1"><Check size={14} /></div>
                    <span>Pause or cancel anytime</span>
                  </li>
                </ul>
              </div>

              <button 
                className="btn-dark-pill w-100 py-3 d-flex align-items-center justify-content-center gap-2"
                onClick={onBookCallClick}
              >
                <span>Get Started Now</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Double / Scale Plan */}
          <div className="col-12 col-lg-5">
            <div className="bg-dark text-white rounded-4 p-4 p-md-5 shadow-lg h-100 d-flex flex-column justify-content-between position-relative overflow-hidden">
              <div>
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <h3 className="fs-3 fw-bold mb-0 text-white">Double Speed</h3>
                  <span className="badge bg-white text-dark px-3 py-2 rounded-pill fw-bold">Scale Fast</span>
                </div>
                <p className="text-white-50 fw-medium mb-4">Two active requests at a time. Perfect for high-velocity teams.</p>
                
                <div className="d-flex align-items-baseline gap-2 mb-4">
                  <span className="display-4 fw-extrabold text-white">${isAnnual ? '6,990' : '8,490'}</span>
                  <span className="text-white-50 fw-semibold fs-5">/ month</span>
                </div>

                <ul className="list-unstyled d-flex flex-column gap-3 mb-5">
                  <li className="d-flex align-items-center gap-3 fw-semibold text-white">
                    <div className="bg-white text-dark rounded-circle p-1"><Check size={14} /></div>
                    <span><strong>Two active requests</strong> at a time</span>
                  </li>
                  <li className="d-flex align-items-center gap-3 fw-semibold text-white">
                    <div className="bg-white text-dark rounded-circle p-1"><Check size={14} /></div>
                    <span>Prioritized 24-48h delivery</span>
                  </li>
                  <li className="d-flex align-items-center gap-3 fw-semibold text-white">
                    <div className="bg-white text-dark rounded-circle p-1"><Check size={14} /></div>
                    <span>Web Design, Branding & 3D Motion</span>
                  </li>
                  <li className="d-flex align-items-center gap-3 fw-semibold text-white">
                    <div className="bg-white text-dark rounded-circle p-1"><Check size={14} /></div>
                    <span>Dedicated Slack channel & Lead Designer</span>
                  </li>
                  <li className="d-flex align-items-center gap-3 fw-semibold text-white">
                    <div className="bg-white text-dark rounded-circle p-1"><Check size={14} /></div>
                    <span>Unlimited team seats</span>
                  </li>
                </ul>
              </div>

              <button 
                className="btn btn-light rounded-pill w-100 py-3 fw-bold fs-6 text-dark d-flex align-items-center justify-content-center gap-2 shadow"
                onClick={onBookCallClick}
              >
                <span>Book 15-min Intro Call</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
