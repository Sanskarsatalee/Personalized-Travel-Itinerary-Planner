import React from 'react';
import { 
  Sparkles, 
  Compass, 
  CalendarDays, 
  History, 
  TrendingUp,
  Search
} from 'lucide-react';
import HeroBanner from '../components/dashboard/HeroBanner';
import StatCard from '../components/dashboard/StatCard';
import TripCard from '../components/dashboard/TripCard';
import DestinationCard from '../components/dashboard/DestinationCard';
import SectionHeader from '../components/common/SectionHeader';

import { 
  travelStats, 
  upcomingTrips, 
  popularDestinations, 
  recentTrips 
} from '../data/mockData';

import './Dashboard.css';

export default function Dashboard({ setActiveTab, savedIds = [], toggleSaved, searchQuery = '' }) {

  // If the header search is active, show filtered results instead of the full dashboard
  const isSearching = searchQuery.trim().length > 0;
  const q = searchQuery.trim().toLowerCase();

  const searchResults = isSearching
    ? popularDestinations.filter(d =>
        d.title.toLowerCase().includes(q) ||
        d.country.toLowerCase().includes(q) ||
        d.style.toLowerCase().includes(q) ||
        d.highlights.some(h => h.toLowerCase().includes(q))
      )
    : [];

  // ── Search Results View ──────────────────────────────────────────────────
  if (isSearching) {
    return (
      <div className="dashboard-page">
        <div className="search-results-header">
          <div className="search-results-title-row">
            <Search size={22} className="search-results-icon" />
            <h2 className="search-results-heading">
              Search results for <span className="search-query-highlight">"{searchQuery}"</span>
            </h2>
          </div>
          <p className="search-results-meta">
            {searchResults.length > 0
              ? `Found ${searchResults.length} destination${searchResults.length !== 1 ? 's' : ''} in mock data`
              : 'No destinations matched your search'}
          </p>
        </div>

        {searchResults.length > 0 ? (
          <div className="grid-cols-3">
            {searchResults.map(dest => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                isSaved={savedIds.includes(dest.id)}
                onToggleSaved={toggleSaved}
              />
            ))}
          </div>
        ) : (
          <div className="no-results-panel">
            <div className="no-results-icon-box">🗺️</div>
            <h3 className="no-results-title">No destinations found</h3>
            <p className="no-results-body">
              Try searching for a country name, travel style (e.g. "Alpine"), or a landmark.
            </p>
          </div>
        )}
      </div>
    );
  }

  // ── Normal Dashboard View ────────────────────────────────────────────────
  return (
    <div className="dashboard-page">
      {/* 1. Welcome & Headline Section */}
      <section className="dashboard-welcome-banner">
        <div className="welcome-text-group">
          <div className="welcome-tag">
            <span className="welcome-tag-pulse" />
            <span>AI-Powered Itinerary Intelligence</span>
          </div>
          <h1 className="welcome-heading">
            Personalized Travel Itinerary Planner
          </h1>
          <p className="welcome-subtext">
            Craft customized, day-wise travel journeys tailored to your budget, travel style, and pace.
          </p>
        </div>

        <div className="welcome-actions">
          <button 
            className="welcome-action-primary"
            onClick={() => alert("Trip Builder wizard will launch in Step 3!")}
          >
            <Sparkles size={16} />
            <span>Curate New Itinerary</span>
          </button>
          <button 
            className="welcome-action-secondary"
            onClick={() => setActiveTab('discover')}
          >
            <Compass size={16} />
            <span>Explore Destinations</span>
          </button>
        </div>
      </section>

      {/* 2. Featured Destination Hero Banner */}
      <section className="section-spacer">
        <HeroBanner />
      </section>

      {/* 3. Compact Travel Statistics */}
      <section className="section-spacer">
        <SectionHeader 
          title="Travel Snapshot & Statistics" 
          subtitle="Your journey metrics, planned days, and curated adventures at a glance"
          icon={TrendingUp}
        />
        <div className="stats-grid grid-cols-4">
          {travelStats.map((stat) => (
            <StatCard 
              key={stat.id}
              label={stat.label}
              value={stat.value}
              change={stat.change}
              icon={stat.icon}
              accent={stat.accent}
            />
          ))}
        </div>
      </section>

      {/* 4. Upcoming Trips Section */}
      <section className="section-spacer">
        <SectionHeader 
          title="Upcoming Journeys" 
          subtitle="Scheduled itineraries ready for packing and execution"
          actionLabel="View All Trips"
          onAction={() => setActiveTab('trips')}
          icon={CalendarDays}
        />
        <div className="upcoming-trips-grid grid-cols-2">
          {upcomingTrips.map((trip) => (
            <TripCard 
              key={trip.id} 
              trip={trip} 
              variant="upcoming" 
            />
          ))}
        </div>
      </section>

      {/* 5. Popular Destinations Cards */}
      <section className="section-spacer">
        <SectionHeader 
          title="Popular & Trending Destinations" 
          subtitle="Handpicked global spots with rich culture, scenic panoramas, and top traveler ratings"
          actionLabel="Explore All (18+)"
          onAction={() => setActiveTab('discover')}
          icon={Compass}
        />
        <div className="destinations-grid grid-cols-3">
          {popularDestinations.map((destination) => (
            <DestinationCard 
              key={destination.id} 
              destination={destination}
              isSaved={savedIds.includes(destination.id)}
              onToggleSaved={toggleSaved}
            />
          ))}
        </div>
      </section>

      {/* 6. Recent Trips & Past Memories Section */}
      <section className="section-spacer">
        <SectionHeader 
          title="Recent Trips & Travel Archives" 
          subtitle="Revisit past adventures, completed day-wise itineraries, and notes"
          actionLabel="Open Trip Vault"
          onAction={() => setActiveTab('trips')}
          icon={History}
        />
        <div className="recent-trips-grid grid-cols-2">
          {recentTrips.map((trip) => (
            <TripCard 
              key={trip.id} 
              trip={trip} 
              variant="recent" 
            />
          ))}
        </div>
      </section>
    </div>
  );
}
