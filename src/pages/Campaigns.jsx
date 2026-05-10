import React, { useState } from 'react';
import { Search, Filter, Heart } from 'lucide-react';
import './Campaigns.css';

const Campaigns = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Education', 'Healthcare', 'Environment', 'Disaster Relief'];

  const campaigns = [
    {
      id: 1,
      title: "Empower Rural Schools",
      category: "Education",
      desc: "Providing digital learning tools and high-speed internet to underprivileged children in remote villages.",
      raised: 45000,
      goal: 50000,
      image: "/images/education.png"
    },
    {
      id: 2,
      title: "Clean Water Initiative",
      category: "Healthcare",
      desc: "Building sustainable water purification systems in communities suffering from waterborne diseases.",
      raised: 12500,
      goal: 20000,
      image: "/images/water.png"
    },
    {
      id: 3,
      title: "Ocean Cleanup Project",
      category: "Environment",
      desc: "Deploying autonomous, AI-driven drones to collect plastic waste from coastal regions.",
      raised: 89000,
      goal: 100000,
      image: "/images/environment.png"
    },
    {
      id: 4,
      title: "Earthquake Recovery",
      category: "Disaster Relief",
      desc: "Emergency funds for rebuilding homes and providing medical care to earthquake survivors.",
      raised: 210000,
      goal: 250000,
      image: "/images/earthquake.png"
    },
    {
      id: 5,
      title: "AI Medical Diagnostics",
      category: "Healthcare",
      desc: "Funding mobile clinics equipped with AI diagnostic tools to serve areas without doctors.",
      raised: 34000,
      goal: 60000,
      image: "/images/medical.png"
    },
    {
      id: 6,
      title: "Reforestation Drone Fleet",
      category: "Environment",
      desc: "Planting 1 million trees using seed-firing drones to rapidly restore burnt forest areas.",
      raised: 15000,
      goal: 40000,
      image: "/images/drone.png"
    }
  ];

  const filteredCampaigns = activeCategory === 'All' 
    ? campaigns 
    : campaigns.filter(c => c.category === activeCategory);

  return (
    <div className="campaigns-page">
      <section className="campaigns-hero">
        <div className="container text-center">
          <h1 className="hero-title">Explore <span className="text-gradient">Campaigns</span></h1>
          <p className="subtitle">Find and support verified causes that align with your passions. Our AI ensures your contribution makes maximum impact.</p>
          
          <div className="search-bar glass">
            <Search className="search-icon" size={20} />
            <input type="text" placeholder="Search campaigns, categories, or regions..." />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </section>

      <section className="campaigns-content">
        <div className="container">
          <div className="filter-container">
            <div className="categories-scroll">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  className={`category-btn ${activeCategory === cat ? 'active' : 'glass'}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <button className="btn btn-outline filter-btn">
              <Filter size={18} style={{marginRight: '8px'}} /> Filters
            </button>
          </div>

          <div className="campaign-grid mt-4">
            {filteredCampaigns.map(campaign => {
              const progress = Math.round((campaign.raised / campaign.goal) * 100);
              return (
                <div key={campaign.id} className="campaign-card glass">
                  <div className="campaign-img bg-placeholder" style={{backgroundImage: `url(${campaign.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                    <div className="ai-verified-badge">
                      <Heart size={12} className="text-gradient" /> AI Verified
                    </div>
                  </div>
                  <div className="campaign-content">
                    <span className="category">{campaign.category}</span>
                    <h3>{campaign.title}</h3>
                    <p>{campaign.desc}</p>
                    <div className="campaign-progress mt-3">
                      <div className="progress-info">
                        <span>${campaign.raised.toLocaleString()} raised</span>
                        <span>${campaign.goal.toLocaleString()} goal</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress" style={{width: `${progress}%`}}></div>
                      </div>
                    </div>
                    <button className="btn btn-primary w-100">Donate Now</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Campaigns;
