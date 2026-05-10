import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-col">
          <Link to="/" className="logo">
            <HeartHandshake className="logo-icon text-gradient" size={32} />
            <span className="logo-text">HopeBridge<span className="text-gradient">AI</span></span>
          </Link>
          <p className="footer-desc">
            Empowering change through the intersection of advanced artificial intelligence and passionate community driven initiatives.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/campaigns">Campaigns</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li><MapPin size={18} /> <span>123 Innovation Drive, Tech City, TC 90210</span></li>
            <li><Phone size={18} /> <span>+1 (555) 123-4567</span></li>
            <li><Mail size={18} /> <span>hello@hopebridge.ai</span></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates and AI insights.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email Address" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>&copy; {new Date().getFullYear()} HopeBridge AI. All rights reserved.</p>
          <div className="bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
