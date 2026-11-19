import React from 'react';
import { Heart, BookmarkCheck } from 'lucide-react';
import DestinationCard from '../components/dashboard/DestinationCard';
import { popularDestinations } from '../data/mockData';

// savedIds: array of destination IDs currently saved (from App.jsx via localStorage)
// toggleSaved: function to add/remove an ID from the saved list
export default function SavedPage({ savedIds = [], toggleSaved }) {

  // Filter the full destinations list to only those whose ID is in savedIds
  const savedDestinations = popularDestinations.filter(d => savedIds.includes(d.id));

  return (
    <div className="saved-page-view">
      <div style={{ marginBottom: '1.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary)' }}>
            Saved Bucketlist Places
          </h2>
          {/* Live count badge */}
          <span style={{
            background: 'var(--color-primary-subtle)',
            color: 'var(--color-primary)',
            fontWeight: 700,
            fontSize: '0.84rem',
            padding: '0.2rem 0.65rem',
            borderRadius: 'var(--radius-full)',
          }}>
            {savedDestinations.length} saved
          </span>
        </div>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          Your handpicked travel collection. Click the ❤️ on any card to unsave. Click 'Plan Trip' to begin.
        </p>
      </div>

      {savedDestinations.length > 0 ? (
        <div className="grid-cols-3">
          {savedDestinations.map(dest => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              isSaved={true}
              onToggleSaved={toggleSaved}
            />
          ))}
        </div>
      ) : (
        /* Empty state shown when nothing is saved */
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', padding: '5rem 2rem', textAlign: 'center',
          background: 'var(--color-surface)', border: '1px dashed var(--color-border)',
          borderRadius: 'var(--radius-lg)'
        }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>🗺️</div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
            No saved destinations yet
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', maxWidth: '360px' }}>
            Browse the Dashboard or Discover page and click the ❤️ heart icon on any destination card to save it here.
          </p>
        </div>
      )}
    </div>
  );
}
