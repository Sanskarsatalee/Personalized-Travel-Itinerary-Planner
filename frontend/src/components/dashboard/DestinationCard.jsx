import React from 'react';
import { Star, MapPin, Heart, ArrowRight } from 'lucide-react';
import './DestinationCard.css';

// isSaved   – boolean derived from the global savedIds array in App.jsx
// onToggleSaved – callback to App.jsx's toggleSaved(id) function
export default function DestinationCard({ destination, isSaved = false, onToggleSaved }) {
  return (
    <div className="destination-card card">
      <div className="dest-image-box">
        <img 
          src={destination.image} 
          alt={destination.title} 
          className="dest-image"
          loading="lazy"
        />
        <div className="dest-image-overlay" />

        {/* Rating Badge */}
        <div className="dest-rating-pill">
          <Star size={13} className="star-icon" fill="#D4AF37" color="#D4AF37" />
          <span className="dest-rating-val">{destination.rating}</span>
          <span className="dest-reviews-count">({destination.reviewsCount})</span>
        </div>

        {/* Save Toggle — calls the global toggleSaved handler */}
        <button 
          className={`dest-save-btn ${isSaved ? 'saved' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            if (onToggleSaved) onToggleSaved(destination.id);
          }}
          aria-label={isSaved ? "Remove from saved places" : "Save destination to bucketlist"}
          aria-pressed={isSaved}
          title={isSaved ? "Remove from saved places" : "Save to bucketlist"}
        >
          <Heart 
            size={16} 
            fill={isSaved ? "#E11D48" : "none"} 
            color={isSaved ? "#E11D48" : "#FFFFFF"} 
          />
        </button>

        {/* Destination Category Pill */}
        <div className="dest-style-tag">
          {destination.style}
        </div>
      </div>

      <div className="dest-content">
        <div className="dest-location-row">
          <MapPin size={14} className="dest-pin-icon" />
          <span className="dest-country-text">{destination.country}</span>
          <span className="dest-price-tier">{destination.priceTier}</span>
        </div>

        <h3 className="dest-title">{destination.title}</h3>

        {/* Highlights List */}
        <div className="dest-highlights-wrap">
          {destination.highlights.map((item, idx) => (
            <span key={idx} className="dest-highlight-pill">
              {item}
            </span>
          ))}
        </div>

        {/* Card Footer */}
        <div className="dest-footer">
          <span className="dest-duration-badge">Ideal: {destination.idealDuration}</span>
          <button 
            className="dest-plan-btn"
            onClick={() => alert(`Creating itinerary for ${destination.title} (Module 3 - Trip Builder)`)}
          >
            <span>Plan Trip</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
