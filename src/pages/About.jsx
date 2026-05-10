import React from 'react';
import { Target, Eye, ShieldCheck, Heart } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container text-center">
          <h1 className="hero-title">About <span className="text-gradient">HopeBridge AI</span></h1>
          <p className="subtitle">Bridging the gap between intent and impact through advanced artificial intelligence.</p>
        </div>
      </section>

      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="glass mv-card">
              <Target size={40} className="text-gradient mb-1" />
              <h2>Our Mission</h2>
              <p>To revolutionize global philanthropy by providing a transparent, efficient, and AI-driven platform that connects passionate donors with verified, high-impact campaigns, ensuring every contribution makes a measurable difference.</p>
            </div>
            <div className="glass mv-card">
              <Eye size={40} className="text-gradient mb-1" />
              <h2>Our Vision</h2>
              <p>A world where charitable giving is completely frictionless, entirely transparent, and exponentially impactful, powered by intelligent systems that understand both global needs and donor values.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ai-transparency bg-alt">
        <div className="container">
          <div className="transparency-content glass">
            <div className="transparency-text">
              <h2>How AI Improves <span className="text-gradient">Transparency</span></h2>
              <p>Trust is the foundation of philanthropy. HopeBridge AI eliminates doubt by integrating cutting-edge machine learning across our entire ecosystem.</p>
              
              <div className="feature-list">
                <div className="feature-item">
                  <div className="icon-wrapper"><ShieldCheck size={24} /></div>
                  <div>
                    <h4>Automated Verification</h4>
                    <p>Our algorithms scan thousands of data points to verify the authenticity of every campaign, preventing fraud before it happens.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="icon-wrapper"><Heart size={24} /></div>
                  <div>
                    <h4>Impact Prediction Models</h4>
                    <p>Using historical data, our AI predicts the exact impact of your donation, setting realistic and measurable expectations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="transparency-visual">
              <div className="tech-circle">
                <div className="inner-circle">AI</div>
                <div className="orbit orbit-1"></div>
                <div className="orbit orbit-2"></div>
                <div className="orbit orbit-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container text-center">
          <h2>Meet Our <span className="text-gradient">Team</span></h2>
          <p className="subtitle">The innovators and philanthropists behind HopeBridge AI.</p>
          
          <div className="team-grid">
            {[
              {name: "Dr. Alicia Vance", role: "Founder & CEO", desc: "Former AI Researcher at MIT with a passion for global development.", image: "/images/alicia.png"},
              {name: "Marcus Chen", role: "Chief Technology Officer", desc: "10+ years leading scalable engineering teams at top tech firms.", image: "/images/marcus.png"},
              {name: "Priya Patel", role: "Head of Global Impact", desc: "Expert in non-profit operations and sustainable growth.", image: "/images/priya.png"},
              {name: "James Wilson", role: "Lead Data Scientist", desc: "Pioneering predictive models for charitable fund allocation.", image: "/images/james.png"}
            ].map((member, i) => (
              <div key={i} className="team-card glass">
                <div 
                  className="member-photo bg-placeholder"
                  style={{backgroundImage: `url(${member.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                ></div>
                <h3>{member.name}</h3>
                <span className="text-gradient role">{member.role}</span>
                <p>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
