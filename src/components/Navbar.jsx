import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, HeartHandshake } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'glass scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <HeartHandshake className="logo-icon text-gradient" size={32} />
          <span className="logo-text">HopeBridge<span className="text-gradient">AI</span></span>
        </Link>

        <div className={`nav-links ${isOpen ? 'active glass' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active-link' : ''} onClick={closeMenu}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''} onClick={closeMenu}>About</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active-link' : ''} onClick={closeMenu}>Services</Link>
          <Link to="/campaigns" className={location.pathname === '/campaigns' ? 'active-link' : ''} onClick={closeMenu}>Campaigns</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''} onClick={closeMenu}>Contact</Link>
          
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <Link to="/campaigns" className="btn btn-primary donate-btn" onClick={closeMenu}>Donate Now</Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
