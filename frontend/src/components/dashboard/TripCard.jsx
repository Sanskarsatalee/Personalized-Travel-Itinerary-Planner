import React from 'react';
import { Calendar, MapPin, Users, DollarSign, ArrowRight, Clock } from 'lucide-react';
import './TripCard.css';

export default function TripCard({ trip, variant = 'upcoming' }) {
  const isUpcoming = variant === 'upcoming';

  return (
    <div className={`trip-card card trip-card-${variant}`}>
      <div className="trip-card-image-box">
        <img 
          src={trip.coverImage} 
          alt={trip.title} 
          className="trip-card-img"
          loading="lazy"
        />
        {/* Status Badge */}
        <div className={`trip-status-pill status-${trip.statusVariant}`}>
          <span className="status-dot" />
          <span>{trip.status}</span>
        </div>

        {isUpcoming && trip.daysLeft && (
          <div className="trip-countdown-pill">
            <Clock size={12} />
            <span>In {trip.daysLeft} days</span>
          </div>
        )}
      </div>

      <div className="trip-card-body">
        <div className="trip-location-row">
          <MapPin size={14} className="trip-location-icon" />
          <span className="trip-location-text">{trip.destination}</span>
        </div>

        <h3 className="trip-card-title">{trip.title}</h3>

        {trip.summary && (
          <p className="trip-card-summary">{trip.summary}</p>
        )}

        {/* Trip Meta Grid */}
        <div className="trip-meta-tags">
          <div className="trip-meta-item">
            <Calendar size={13} className="meta-icon" />
            <span>{trip.dates}</span>
          </div>
          <div className="trip-meta-item">
            <Users size={13} className="meta-icon" />
            <span>{trip.travelers} Travelers</span>
          </div>
          {trip.budgetTotal && (
            <div className="trip-meta-item">
              <DollarSign size={13} className="meta-icon" />
              <span>{trip.budgetTotal} Budget</span>
            </div>
          )}
        </div>

        {/* Footer Action */}
        <div className="trip-card-footer">
          <span className="trip-days-count">{trip.daysCount} Days Plan</span>
          <button 
            className="trip-view-btn"
            onClick={() => alert(`Opening itinerary details for "${trip.title}" (Module 5 preview)`)}
          >
            <span>{isUpcoming ? 'View Itinerary' : 'Review Trip'}</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
