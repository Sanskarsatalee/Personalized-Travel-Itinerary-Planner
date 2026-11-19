import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import DestinationCard from '../components/dashboard/DestinationCard';
import { popularDestinations } from '../data/mockData';

// searchQuery comes from App.jsx (global header search) so it stays in sync.
// savedIds and toggleSaved enable the heart toggle to work globally.
export default function DiscoverPage({ savedIds = [], toggleSaved, searchQuery = '' }) {
  const [selectedTag, setSelectedTag] = useState('All');
  // Local search bar for page-level search (separate from the global header search)
  const [localSearch, setLocalSearch] = useState('');

  const tags = ['All', 'Coastal', 'Alpine Nature', 'Cultural Heritage', 'Cycladic & Sunset', 'Wellness'];

  // Priority: if the global header search is active, use it; otherwise use the local bar
  const activeQuery = searchQuery.trim() !== '' ? searchQuery.trim() : localSearch.trim();
  const q = activeQuery.toLowerCase();

  const filtered = popularDestinations.filter(d => {
    const matchesTag = selectedTag === 'All' || d.style.toLowerCase().includes(selectedTag.toLowerCase());
    const matchesSearch = q === '' ||
      d.title.toLowerCase().includes(q) ||
      d.country.toLowerCase().includes(q) ||
      d.style.toLowerCase().includes(q) ||
      d.highlights.some(h => h.toLowerCase().includes(q));
    return matchesTag && matchesSearch;
  });

  return (
    <div className="discover-page-view">
      <div style={{ marginBottom: '1.75rem' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary)' }}>
          Discover Travel Destinations
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>
          Explore curated global destinations ready for custom AI itinerary generation.
        </p>
      </div>

      {/* Filter & Local Search Bar */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-full)',
          padding: '0.5rem 1.1rem',
          flex: '1',
          minWidth: '260px'
        }}>
          <Search size={17} color="var(--color-text-muted)" />
          <input 
            type="text" 
            placeholder="Search by city, country or style..." 
            value={searchQuery.trim() !== '' ? searchQuery : localSearch}
            onChange={(e) => {
              // Only update local search if the global header search isn't active
              if (searchQuery.trim() === '') setLocalSearch(e.target.value);
            }}
            style={{ border: 'none', background: 'transparent', width: '100%', fontSize: '0.88rem' }}
            readOnly={searchQuery.trim() !== ''}
          />
          {(localSearch || searchQuery) && (
            <button
              onClick={() => setLocalSearch('')}
              style={{ background: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', display: 'flex' }}
              aria-label="Clear search"
            >
              <X size={15} />
            </button>
          )}
        </div>

        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {tags.map(t => (
            <button
              key={t}
              onClick={() => setSelectedTag(t)}
              style={{
                padding: '0.45rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: 600,
                backgroundColor: selectedTag === t ? 'var(--color-primary)' : 'var(--color-surface)',
                color: selectedTag === t ? '#FFFFFF' : 'var(--color-text-secondary)',
                border: '1px solid ' + (selectedTag === t ? 'var(--color-primary)' : 'var(--color-border)'),
                transition: 'all 0.15s ease'
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Results count indicator */}
      <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem', fontWeight: 500 }}>
        Showing {filtered.length} of {popularDestinations.length} destinations
        {activeQuery && <span> for <strong style={{ color: 'var(--color-primary)' }}>"{activeQuery}"</strong></span>}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid-cols-3">
          {filtered.map(dest => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              isSaved={savedIds.includes(dest.id)}
              onToggleSaved={toggleSaved}
            />
          ))}
        </div>
      ) : (
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', padding: '5rem 2rem', textAlign: 'center',
          background: 'var(--color-surface)', border: '1px dashed var(--color-border)',
          borderRadius: 'var(--radius-lg)'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗺️</div>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>No destinations found</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', maxWidth: '350px' }}>
            Try a different search term or clear the active tag filter.
          </p>
        </div>
      )}
    </div>
  );
}
