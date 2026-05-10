import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container text-center">
          <h1 className="hero-title">Get in <span className="text-gradient">Touch</span></h1>
          <p className="subtitle">Have questions about our AI platform or want to start a campaign? Our team is here to help.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Info */}
            <div className="contact-info-section">
              <h2>Contact Information</h2>
              <p className="mb-4">Reach out to us through any of the following channels. We aim to respond to all inquiries within 24 hours.</p>
              
              <div className="info-cards">
                <div className="info-card glass">
                  <div className="icon-box text-gradient"><Mail size={24} /></div>
                  <div>
                    <h4>Email Us</h4>
                    <p>hello@hopebridge.ai</p>
                    <p>support@hopebridge.ai</p>
                  </div>
                </div>
                
                <div className="info-card glass">
                  <div className="icon-box text-gradient"><Phone size={24} /></div>
                  <div>
                    <h4>Call Us</h4>
                    <p>+1 (555) 123-4567</p>
                    <p>Mon-Fri, 9am - 6pm EST</p>
                  </div>
                </div>
                
                <div className="info-card glass">
                  <div className="icon-box text-gradient"><MapPin size={24} /></div>
                  <div>
                    <h4>Visit Us</h4>
                    <p>123 Innovation Drive</p>
                    <p>Tech City, TC 90210</p>
                  </div>
                </div>
              </div>
              
              <div className="ai-support-banner glass mt-4">
                <MessageSquare className="text-gradient" size={32} />
                <div>
                  <h4>Need Immediate Help?</h4>
                  <p>Try our AI Chatbot for instant answers to common questions about donations and campaigns.</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section glass">
              <h2>Send a Message</h2>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="John" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Doe" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" required />
                </div>
                
                <div className="form-group">
                  <label>Subject</label>
                  <select required>
                    <option value="" disabled selected>Select a subject...</option>
                    <option value="donation">Donation Inquiry</option>
                    <option value="campaign">Start a Campaign</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="technical">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Message</label>
                  <textarea rows="5" placeholder="How can we help you?" required></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary w-100 mt-2">
                  Send Message <Send size={18} style={{marginLeft: '8px'}} />
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
