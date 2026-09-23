import React, { useState } from 'react';
import { X, Calendar, Clock, Video, CheckCircle2, User, Mail, Phone } from 'lucide-react';
import avatarImg from '../assets/avatar.jpg';

export default function BookingModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    date: '2026-09-22',
    time: '10:00 AM'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div 
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
      style={{ 
        backgroundColor: 'rgba(15, 15, 16, 0.65)', 
        backdropFilter: 'blur(16px)',
        zIndex: 2000 
      }}
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-4 shadow-lg overflow-hidden w-100 position-relative animate-up"
        style={{ maxWidth: '540px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-light border-bottom d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <img 
              src={avatarImg} 
              alt="Lead Designer" 
              className="rounded-circle"
              style={{ width: '48px', height: '48px', objectFit: 'cover' }}
            />
            <div>
              <h4 className="fw-bold fs-5 mb-0 text-dark">Book 15-min Intro Call</h4>
              <div className="d-flex align-items-center gap-2 small text-muted">
                <span className="live-dot"></span>
                <span>Directly with Lead Creative Director</span>
              </div>
            </div>
          </div>

          <button 
            className="btn btn-sm btn-outline-secondary rounded-circle p-2"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 p-md-5">
          {submitted ? (
            <div className="text-center py-4">
              <div className="bg-success text-white rounded-circle p-3 d-inline-flex mb-3">
                <CheckCircle2 size={42} />
              </div>
              <h3 className="fw-extrabold fs-3 text-dark mb-2">Intro Call Scheduled!</h3>
              <p className="text-muted fw-medium mb-4">
                We've sent a Google Meet invite & calendar confirmation to <strong>{formData.email}</strong>.
              </p>
              <div className="bg-light p-3 rounded-3 mb-4 text-start">
                <div className="small text-muted fw-bold text-uppercase mb-1">Appointment Details:</div>
                <div className="fw-bold text-dark d-flex align-items-center gap-2 mb-1">
                  <Calendar size={16} /> {formData.date} at {formData.time}
                </div>
                <div className="fw-semibold text-secondary d-flex align-items-center gap-2">
                  <Video size={16} /> 15 min Google Meet Video Call
                </div>
              </div>
              <button className="btn-dark-pill w-100 py-3" onClick={onClose}>
                Done & Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-muted small fw-semibold mb-4">
                Find out how <span className="brand-serif italic fs-5">orcodix<sup>®</sup></span> can accelerate your design workflow. Pick a convenient time:
              </p>

              <div className="mb-3">
                <label className="form-label small fw-bold text-muted text-uppercase">Your Full Name</label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-end-0"><User size={18} className="text-muted" /></span>
                  <input 
                    type="text" 
                    className="form-control bg-light border-start-0 py-2 fw-medium"
                    placeholder="Sarah Jenkins"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold text-muted text-uppercase">Work Email</label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-end-0"><Mail size={18} className="text-muted" /></span>
                  <input 
                    type="email" 
                    className="form-control bg-light border-start-0 py-2 fw-medium"
                    placeholder="sarah@yourcompany.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label small fw-bold text-muted text-uppercase">Contact Number</label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-end-0"><Phone size={18} className="text-muted" /></span>
                  <input 
                    type="tel" 
                    className="form-control bg-light border-start-0 py-2 fw-medium"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="row g-3 mb-4">
                <div className="col-6">
                  <label className="form-label small fw-bold text-muted text-uppercase">Preferred Date</label>
                  <input 
                    type="date" 
                    className="form-control bg-light py-2 fw-medium"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div className="col-6">
                  <label className="form-label small fw-bold text-muted text-uppercase">Preferred Time</label>
                  <select 
                    className="form-select bg-light py-2 fw-medium"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  >
                    <option>09:00 AM</option>
                    <option>10:00 AM</option>
                    <option>02:00 PM</option>
                    <option>04:30 PM</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn-dark-pill w-100 py-3">
                Confirm 15-min Booking
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
