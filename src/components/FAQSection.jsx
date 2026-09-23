import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: "Why wouldn't I just hire a full-time senior designer?",
    answer: "The annual cost of a full-time senior designer exceeds $140,000 plus benefits, health insurance, and equity. You might not always have enough work to keep them busy 100% of the time. With orcodix®, you pay a fixed monthly fee and can pause or resume your subscription whenever you need design output."
  },
  {
    question: "How fast will I receive my design requests?",
    answer: "On average, most design and web development requests are completed in just 48 hours (2 business days) or less. More complex requests like full SaaS web applications or multi-page mobile app ecosystems may be split into 48-hour sub-deliverables."
  },
  {
    question: "Who are the designers working on my account?",
    answer: "Orcodix® is run by senior product designers and full-stack engineers with years of high-volume agency and YC startup experience. No junior freelancers or offshore sub-contractors."
  },
  {
    question: "How does the subscription pause feature work?",
    answer: "We understand you might not have 30 days worth of design work at all times. Billing cycles are based on a 31-day period. If you use our services for 10 days and then pause, your subscription is frozen and you retain 21 unused days to use anytime in the future."
  },
  {
    question: "What if I only have a single design request?",
    answer: "You can subscribe for a single month, submit your request, receive the completed deliverables, and pause your subscription before the cycle renews. Save the remaining days for whenever you need work again."
  },
  {
    question: "What types of design work do you handle?",
    answer: "We handle a wide range — brand identity, UI/UX design, web development, mobile apps, pitch decks, social graphics, e-commerce, and more. If it's digital, we design and build it. You submit via Notion board and we get to work immediately."
  }
];

function FAQItem({ faq, index, isOpen, onToggle }) {
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && bodyRef.current) {
      setHeight(bodyRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      className="faq2-item"
      style={{
        borderBottom: '1px solid rgba(0,0,0,0.07)',
      }}
    >
      <button
        className="faq2-trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="faq2-num">{String(index + 1).padStart(2, '0')}</span>
        <span className="faq2-question">{faq.question}</span>
        <span className={`faq2-icon ${isOpen ? 'faq2-icon-open' : ''}`}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 7L9 12L14 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>

      <div
        className="faq2-body-wrap"
        style={{
          height: `${height}px`,
          overflow: 'hidden',
          transition: 'height 0.42s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div ref={bodyRef} className="faq2-body">
          <p className="faq2-answer">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection({ onBookCallClick }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? -1 : idx);

  return (
    <section id="faq" className="faq2-section">
      <div className="container px-3 px-md-5">
        <div className="faq2-grid">

          {/* ── LEFT: sticky label + heading + CTA ── */}
          <div className="faq2-left">
            <div className="faq2-left-inner">
              <span className="faq2-label">FAQ</span>

              <h2 className="faq2-heading">
                Everything you<br />
                need to <span className="brand-serif italic">know.</span>
              </h2>

              <p className="faq2-subtext">
                Can't find your answer here? Reach out — we reply within a few hours.
              </p>

              <button
                className="faq2-cta"
                onClick={onBookCallClick}
              >
                <MessageCircle size={16} />
                <span>Ask us directly</span>
                <ArrowRight size={15} />
              </button>

              {/* Decorative pill badge */}
              <div className="faq2-badge-strip">
                <span className="faq2-badge">48h avg response</span>
                <span className="faq2-badge">No hidden fees</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: accordion ── */}
          <div className="faq2-right">
            {faqs.map((faq, idx) => (
              <FAQItem
                key={idx}
                faq={faq}
                index={idx}
                isOpen={openIndex === idx}
                onToggle={() => toggle(idx)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
