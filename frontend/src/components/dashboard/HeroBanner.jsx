import React from 'react';
import { Sparkles, Calendar, MapPin, DollarSign, Compass, ArrowUpRight } from 'lucide-react';
import { heroFeaturedDestination } from '../../data/mockData';
import './HeroBanner.css';

export default function HeroBanner() {
  const dest = heroFeaturedDestination;

  return (
    <div className="hero-banner-card">
      <div className="hero-banner-image-container">
        <img 
          src={dest.image} 
          alt={dest.title} 
          className="hero-banner-image"
        />
        <div className="hero-banner-gradient-overlay" />
      </div>

      <div className="hero-banner-content">
        <div className="hero-top-badges">
          <span className="hero-tagline-badge">
            <Sparkles size={13} className="hero-badge-sparkle" />
            {dest.tagline}
          </span>
          <span className="hero-season-badge">
            <Calendar size={13} />
            {dest.bestSeason}
          </span>
        </div>

        <h2 className="hero-banner-title font-display">{dest.title}</h2>
        <p className="hero-banner-description">{dest.description}</p>

        {/* Highlight Metadata Badges */}
        <div className="hero-meta-row">
          <div className="hero-meta-pill">
            <MapPin size={14} className="hero-meta-icon" />
            <span>{dest.country}</span>
          </div>
          <div className="hero-meta-pill">
            <Calendar size={14} className="hero-meta-icon" />
            <span>{dest.duration}</span>
          </div>
          <div className="hero-meta-pill">
            <DollarSign size={14} className="hero-meta-icon" />
            <span>{dest.estimatedBudget}</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="hero-actions-group">
          <button 
            className="hero-primary-cta"
            onClick={() => alert("AI Itinerary Generator module will be connected in Step 4!")}
          >
            <Sparkles size={17} />
            <span>Plan This Itinerary</span>
          </button>

          <button 
            className="hero-secondary-cta"
            onClick={() => alert("Destination Discovery details will be expanded in Module 11!")}
          >
            <span>Explore Destination</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
