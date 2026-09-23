import React, { useState } from 'react';
import cardArchImg from '../assets/card-arch.jpg';
import cardAugustImg from '../assets/card-august.jpg';

export default function ProcessSection() {
  const [isHoveredReceive, setIsHoveredReceive] = useState(false);

  const requestPillsRow1 = ['Decks', 'Branding', 'Social Graphics', 'UX Design', 'Pitch Decks'];
  const requestPillsRow2 = ['Landing Pages', 'Illustrations', 'Style Guides', 'Ad Creatives'];
  const requestPillsRow3 = ['Icon Design', 'Motion Design', 'Design Systems'];

  return (
    <section className="py-5 border-0">
      <div className="container px-3 px-md-5">
        
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-5 reveal">
          <span className="badge bg-light text-dark border rounded-pill px-3 py-2 fw-semibold mb-3">
            How It Works
          </span>
          <h2 className="display-5 fw-extrabold text-dark tracking-tight">
            Design on demand, <br />
            <span className="brand-serif">simplified.</span>
          </h2>
        </div>

        {/* 2-Step Cards Row */}
        <div className="row g-4 justify-content-center">
          
          {/* Card 1: Request */}
          <div className="col-12 col-md-6 col-lg-5 reveal reveal-left">
            <div className="process-card h-100 p-4 bg-white border rounded-4 shadow-sm position-relative overflow-hidden">
              
              {/* Top Visual Container */}
              <div className="process-visual position-relative overflow-hidden rounded-4 mb-4 d-flex align-items-center justify-content-center" style={{ height: '270px', backgroundColor: '#F6F6F5' }}>
                
                {/* Background Animated Staggered Pills Cloud */}
                <div className="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center gap-2 overflow-hidden" style={{ opacity: 0.85, transform: 'scale(0.95)' }}>
                  {/* Row 1: Right to Left */}
                  <div className="marquee-row">
                    <div className="marquee-track-rtl">
                      {[...requestPillsRow1, ...requestPillsRow1, ...requestPillsRow1].map((tag, i) => (
                        <span key={i} className="badge bg-white text-dark shadow-sm px-3 py-2 rounded-pill fw-semibold border fs-6">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Row 2: Left to Right */}
                  <div className="marquee-row">
                    <div className="marquee-track-ltr">
                      {[...requestPillsRow2, ...requestPillsRow2, ...requestPillsRow2].map((tag, i) => (
                        <span key={i} className="badge bg-white text-dark shadow-sm px-3 py-2 rounded-pill fw-semibold border fs-6">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Row 3: Right to Left */}
                  <div className="marquee-row">
                    <div className="marquee-track-rtl-alt">
                      {[...requestPillsRow3, ...requestPillsRow3, ...requestPillsRow3].map((tag, i) => (
                        <span key={i} className="badge bg-white text-dark shadow-sm px-3 py-2 rounded-pill fw-semibold border fs-6">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Centered Orcodix Badge */}
                <div className="request-w-badge z-2 position-relative d-flex align-items-center justify-content-center shadow-lg">
                  <span className="brand-serif text-white italic" style={{ lineHeight: 1, fontSize: '1.05rem', letterSpacing: '-0.02em' }}>orcodix</span>
                </div>
              </div>

              {/* Text Content */}
              <div className="px-2 pb-2">
                <h3 className="fs-3 fw-extrabold text-dark mb-2">Request</h3>
                <p className="text-muted fw-medium fs-6 mb-0" style={{ lineHeight: '1.5' }}>
                  Submit any design task you need. Landing pages, product visuals, brand assets, and more.
                </p>
              </div>

            </div>
          </div>

          {/* Card 2: Receive (With Hover Effect) */}
          <div className="col-12 col-md-6 col-lg-5 reveal reveal-right delay-2">
            <div 
              className="process-card h-100 p-4 bg-white border rounded-4 shadow-sm position-relative overflow-hidden cursor-pointer"
              onMouseEnter={() => setIsHoveredReceive(true)}
              onMouseLeave={() => setIsHoveredReceive(false)}
              style={{ cursor: 'pointer' }}
            >
              
              {/* Top Visual Container with Interactive Folder Hover */}
              <div className="process-visual position-relative overflow-hidden rounded-4 mb-4 d-flex align-items-end justify-content-center pb-3" style={{ height: '270px', backgroundColor: '#F6F6F5' }}>
                
                {/* Folder Stack Container */}
                <div className="folder-wrapper position-relative d-flex justify-content-center align-items-end" style={{ width: '220px', height: '180px' }}>
                  
                  {/* Card 1 (Left - Architecture) */}
                  <div 
                    className="folder-card position-absolute shadow-lg overflow-hidden border border-white"
                    style={{
                      width: '130px',
                      height: '95px',
                      borderRadius: '10px',
                      backgroundColor: '#2563EB',
                      top: '25px',
                      left: '10px',
                      zIndex: 1,
                      transform: isHoveredReceive 
                        ? 'translateY(-48px) rotate(-16deg) scale(1.05)' 
                        : 'translateY(10px) rotate(-4deg) scale(0.95)',
                      transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  >
                    <img src={cardArchImg} alt="Architecture Design" className="w-100 h-100 object-fit-cover" />
                  </div>

                  {/* Card 2 (Center - AUGUST Magazine) */}
                  <div 
                    className="folder-card position-absolute shadow-lg overflow-hidden border border-white"
                    style={{
                      width: '135px',
                      height: '100px',
                      borderRadius: '10px',
                      backgroundColor: '#0EA5E9',
                      top: '20px',
                      left: '42px',
                      zIndex: 2,
                      transform: isHoveredReceive 
                        ? 'translateY(-60px) rotate(-2deg) scale(1.08)' 
                        : 'translateY(5px) rotate(0deg) scale(0.97)',
                      transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  >
                    <img src={cardAugustImg} alt="August Design" className="w-100 h-100 object-fit-cover" />
                  </div>

                  {/* Card 3 (Right - Dark Monochrome Flower) */}
                  <div 
                    className="folder-card position-absolute shadow-lg overflow-hidden border border-white p-2 d-flex flex-column justify-content-between"
                    style={{
                      width: '140px',
                      height: '100px',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, #0F0F10, #1E1E24)',
                      top: '22px',
                      right: '5px',
                      zIndex: 3,
                      color: '#FFFFFF',
                      transform: isHoveredReceive 
                        ? 'translateY(-52px) rotate(14deg) scale(1.06)' 
                        : 'translateY(8px) rotate(3deg) scale(0.96)',
                      transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  >
                    <div className="d-flex align-items-center gap-1">
                      <div className="rounded-circle bg-warning" style={{ width: '8px', height: '8px' }}></div>
                      <span className="small fw-bold tracking-tight text-white-50" style={{ fontSize: '0.65rem' }}>monochrome</span>
                    </div>
                    <div className="text-end">
                      <span className="brand-serif italic fs-5">w</span>
                    </div>
                  </div>

                  {/* Front Folder Pocket Graphic */}
                  <div 
                    className="folder-front position-relative z-4 shadow-sm d-flex align-items-center justify-content-center"
                    style={{
                      width: '210px',
                      height: '105px',
                      backgroundColor: '#EAEAEA',
                      borderRadius: '16px',
                      border: '1px solid rgba(0,0,0,0.06)',
                      transform: isHoveredReceive ? 'translateY(4px)' : 'translateY(0)',
                      transition: 'transform 0.4s ease'
                    }}
                  >
                    {/* Debossed Logo watermark on folder */}
                    <span className="brand-serif italic display-4 text-secondary opacity-25">w</span>
                  </div>

                </div>

              </div>

              {/* Text Content */}
              <div className="px-2 pb-2">
                <h3 className="fs-3 fw-extrabold text-dark mb-2">Receive</h3>
                <p className="text-muted fw-medium fs-6 mb-0" style={{ lineHeight: '1.5' }}>
                  Your design is delivered in a few business days. Simple, fast, and ready to use.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
