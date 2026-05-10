import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, ShieldCheck, Users, Heart, Zap } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">Next-Gen NGO Platform</div>
            <h1 className="hero-title">
              Empowering Change Through <span className="text-gradient">AI & Community</span>
            </h1>
            <p className="hero-subtitle">
              Join the revolution in philanthropy. HopeBridge AI uses advanced artificial intelligence to match donors with campaigns, ensure complete transparency, and track real-time global impact.
            </p>
            <div className="hero-cta">
              <Link to="/campaigns" className="btn btn-primary">Donate Now <Heart size={18} style={{marginLeft: '8px'}} /></Link>
              <Link to="/contact" className="btn btn-outline">Join as Volunteer</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="glass-card hero-card primary-card">
              <div className="card-header">
                <Heart className="text-gradient" size={24} />
                <span>Total Impact Generated</span>
              </div>
              <h2 className="card-amount">$2.4M+</h2>
              <div className="progress-bar"><div className="progress" style={{width: '85%'}}></div></div>
              <p className="card-status">+14% this month using AI insights</p>
            </div>
            <div className="glass-card hero-card secondary-card">
              <div className="card-header">
                <Users className="text-gradient" size={24} />
                <span>Active Volunteers</span>
              </div>
              <h2 className="card-amount">12,450</h2>
              <div className="avatars">
                <div className="avatar"></div><div className="avatar"></div><div className="avatar"></div>
                <div className="avatar more">+12k</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="container stats-container glass">
          <div className="stat-box">
            <h3 className="text-gradient">500+</h3>
            <p>Campaigns Funded</p>
          </div>
          <div className="stat-box">
            <h3 className="text-gradient">1.2M</h3>
            <p>Lives Impacted</p>
          </div>
          <div className="stat-box">
            <h3 className="text-gradient">100%</h3>
            <p>AI Fraud Detection</p>
          </div>
          <div className="stat-box">
            <h3 className="text-gradient">50+</h3>
            <p>Countries Reached</p>
          </div>
        </div>
      </section>

      {/* AI Introduction Section */}
      <section className="ai-intro">
        <div className="container ai-container">
          <div className="ai-text">
            <h2>How <span className="text-gradient">AI Powers</span> Our Mission</h2>
            <p>HopeBridge AI is not just another NGO platform. We integrate artificial intelligence at every step to ensure your contributions make the maximum possible impact.</p>
            <ul className="ai-features">
              <li><ShieldCheck size={20} className="text-gradient" /> <strong>Smart Fraud Detection:</strong> AI algorithms verify every campaign before it goes live.</li>
              <li><Zap size={20} className="text-gradient" /> <strong>Personalized Matching:</strong> We recommend campaigns that align with your values.</li>
              <li><BarChart3 size={20} className="text-gradient" /> <strong>Real-time Tracking:</strong> See exactly where your money goes with predictive impact modeling.</li>
            </ul>
            <Link to="/about" className="btn btn-outline" style={{marginTop: '2rem'}}>Learn More <ArrowRight size={18} style={{marginLeft: '8px'}} /></Link>
          </div>
          <div className="ai-visual">
            <div className="glass ai-dashboard">
              <div className="dash-header">
                <div className="dash-dot" style={{background: '#ff5f56'}}></div>
                <div className="dash-dot" style={{background: '#ffbd2e'}}></div>
                <div className="dash-dot" style={{background: '#27c93f'}}></div>
              </div>
              <div className="dash-body">
                <div className="dash-chart">
                  <div className="bar" style={{height: '40%'}}></div>
                  <div className="bar" style={{height: '70%'}}></div>
                  <div className="bar" style={{height: '55%'}}></div>
                  <div className="bar active" style={{height: '90%'}}></div>
                  <div className="bar" style={{height: '60%'}}></div>
                </div>
                <div className="dash-info">
                  <h4>AI Impact Prediction</h4>
                  <p>Model accuracy: 98.5%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="featured-campaigns">
        <div className="container">
          <div className="section-header">
            <h2>Featured <span className="text-gradient">Campaigns</span></h2>
            <Link to="/campaigns" className="view-all">View All <ArrowRight size={16} /></Link>
          </div>
          <div className="campaign-grid">
            {[
              {
                id: 1,
                title: "Empower Rural Schools",
                category: "Education",
                desc: "Providing digital learning tools to underprivileged children.",
                raised: 45000,
                goal: 50000,
                image: "/images/education.png",
                progress: 90
              },
              {
                id: 2,
                title: "Clean Water Initiative",
                category: "Healthcare",
                desc: "Building sustainable water purification systems in communities.",
                raised: 12500,
                goal: 20000,
                image: "/images/water.png",
                progress: 62
              },
              {
                id: 3,
                title: "Reforestation Drone Fleet",
                category: "Environment",
                desc: "Planting 1 million trees using seed-firing drones.",
                raised: 15000,
                goal: 40000,
                image: "/images/environment.png",
                progress: 37
              }
            ].map((campaign) => (
              <div key={campaign.id} className="campaign-card glass">
                <div 
                  className="campaign-img bg-placeholder" 
                  style={{ backgroundImage: `url(${campaign.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                ></div>
                <div className="campaign-content">
                  <span className="category">{campaign.category}</span>
                  <h3>{campaign.title}</h3>
                  <p>{campaign.desc}</p>
                  <div className="campaign-progress">
                    <div className="progress-info">
                      <span>${campaign.raised.toLocaleString()} raised</span>
                      <span>${campaign.goal.toLocaleString()} goal</span>
                    </div>
                    <div className="progress-bar"><div className="progress" style={{width: `${campaign.progress}%`}}></div></div>
                  </div>
                  <button className="btn btn-primary w-100">Donate Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Dashboard Preview */}
      <section className="impact-dashboard">
        <div className="container text-center">
          <h2>Global <span className="text-gradient">Impact Dashboard</span></h2>
          <p className="subtitle">Track real-time data on how your donations are changing the world.</p>
          <div className="dashboard-preview glass">
            <div className="dash-grid">
              <div className="dash-card">
                <h4>Regional Reach</h4>
                <div className="circle-chart"></div>
              </div>
              <div className="dash-card">
                <h4>Fund Allocation</h4>
                <div className="line-chart"></div>
              </div>
              <div className="dash-card">
                <h4>Volunteer Hours</h4>
                <div className="bar-chart-mini"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="text-center">Hear From Our <span className="text-gradient">Community</span></h2>
          <div className="testimonial-grid">
            {[
              {name: 'Sarah Jenkins', role: 'Donor', text: 'The transparency HopeBridge provides is unmatched. I love seeing the AI predictions on how my donation will be utilized.', image: '/images/sarah.png'},
              {name: 'Michael Chen', role: 'Volunteer', text: 'The volunteer matching system is incredible. It paired me with an environmental campaign perfectly suited to my skills.', image: 'https://i.pravatar.cc/150?u=michaelchen'},
              {name: 'Elena Rodriguez', role: 'Campaign Organizer', text: 'Thanks to the smart analytics, our campaign reached its goal 3 weeks early. The platform is truly next-generation.', image: 'https://i.pravatar.cc/150?u=elenarodriguez'}
            ].map((t, i) => (
              <div key={i} className="testimonial-card glass">
                <div className="quote-icon">"</div>
                <p>{t.text}</p>
                <div className="author">
                  <div 
                    className="author-avatar bg-placeholder"
                    style={{backgroundImage: `url(${t.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                  ></div>
                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
