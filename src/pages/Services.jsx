import React from 'react';
import { Sparkles, LineChart, Users, ShieldAlert, Activity, Cpu } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Sparkles size={32} />,
      title: "AI Donation Recommendation",
      desc: "Our machine learning engine analyzes your past donations and stated interests to suggest campaigns where your contribution will make the most meaningful personal and global impact."
    },
    {
      icon: <LineChart size={32} />,
      title: "Smart Campaign Analytics",
      desc: "For organizers: access predictive models that forecast funding milestones, suggest optimal marketing times, and identify donor demographics likely to support your cause."
    },
    {
      icon: <Users size={32} />,
      title: "Volunteer Matching System",
      desc: "An intelligent algorithm that pairs volunteer skills, location, and availability with NGO requirements, ensuring efficient allocation of human resources."
    },
    {
      icon: <ShieldAlert size={32} />,
      title: "Fraud Detection Engine",
      desc: "Real-time scanning of campaign proposals, organizer backgrounds, and fund withdrawal patterns using anomaly detection algorithms to guarantee 100% fund safety."
    },
    {
      icon: <Activity size={32} />,
      title: "Real-time Impact Tracking",
      desc: "Interactive dashboards that translate monetary donations into tangible metrics (e.g., 'Meals served', 'Trees planted') updated in real-time as funds are deployed."
    },
    {
      icon: <Cpu size={32} />,
      title: "Automated Reporting",
      desc: "Natural Language Generation (NLG) models that automatically draft personalized impact reports for donors, saving administrative time for campaign organizers."
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container text-center">
          <h1 className="hero-title">Intelligent <span className="text-gradient">Features</span></h1>
          <p className="subtitle">Discover how we leverage artificial intelligence to optimize the entire philanthropic process.</p>
        </div>
      </section>

      <section className="features-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card glass">
                <div className="service-icon text-gradient">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="card-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-stack bg-alt">
        <div className="container text-center">
          <h2>Powered by <span className="text-gradient">Next-Gen Tech</span></h2>
          <div className="tech-badges">
            <span className="badge glass">Natural Language Processing</span>
            <span className="badge glass">Predictive Analytics</span>
            <span className="badge glass">Computer Vision</span>
            <span className="badge glass">Anomaly Detection</span>
            <span className="badge glass">Blockchain Verification</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
