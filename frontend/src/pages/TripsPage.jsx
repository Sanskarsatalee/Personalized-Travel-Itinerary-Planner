import React, { useState } from 'react';
import { CalendarDays, Plus, Filter, Sparkles } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import TripCard from '../components/dashboard/TripCard';
import { upcomingTrips, recentTrips } from '../data/mockData';

export default function TripsPage() {
  const [filter, setFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Trips (4)' },
    { id: 'planning', label: 'In Planning (1)' },
    { id: 'confirmed', label: 'Confirmed (1)' },
    { id: 'completed', label: 'Completed (2)' },
  ];

  const allTrips = [
    ...upcomingTrips.map(t => ({ ...t, category: t.statusVariant })),
    ...recentTrips.map(t => ({ ...t, category: 'completed' }))
  ];

  const displayedTrips = filter === 'all' 
    ? allTrips 
    : allTrips.filter(t => t.category === filter);

  return (
    <div className="trips-page-view">
      <div className="page-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary)' }}>My Travel Journeys</h2>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>
            Manage, customize, and revisit all your personalized day-wise itineraries.
          </p>
        </div>

        <button 
          className="btn btn-primary"
          onClick={() => alert("Trip Builder wizard will be connected in Step 3!")}
        >
          <Plus size={16} />
          <span>Create New Itinerary</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {filterTabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.84rem',
              fontWeight: 600,
              backgroundColor: filter === tab.id ? 'var(--color-primary)' : 'var(--color-surface)',
              color: filter === tab.id ? '#FFFFFF' : 'var(--color-text-secondary)',
              border: '1px solid ' + (filter === tab.id ? 'var(--color-primary)' : 'var(--color-border)'),
              transition: 'all 0.15s ease'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Trips Grid */}
      <div className="grid-cols-2">
        {displayedTrips.map((trip) => (
          <TripCard 
            key={trip.id} 
            trip={trip} 
            variant={trip.statusVariant === 'completed' ? 'recent' : 'upcoming'} 
          />
        ))}
      </div>
    </div>
  );
}
