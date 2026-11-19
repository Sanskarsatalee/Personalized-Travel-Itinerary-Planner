import React, { useState } from 'react';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import TripsPage from './pages/TripsPage';
import DiscoverPage from './pages/DiscoverPage';
import SavedPage from './pages/SavedPage';
import SettingsPage from './pages/SettingsPage';

// ---------------------------------------------------------------------------
// Helpers: read / write saved destination IDs to localStorage so they persist
// across browser refreshes.
// ---------------------------------------------------------------------------
function loadSavedIds() {
  try {
    const raw = localStorage.getItem('ptip_saved_destinations');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function persistSavedIds(ids) {
  try {
    localStorage.setItem('ptip_saved_destinations', JSON.stringify(ids));
  } catch {
    // localStorage unavailable — state still works in-memory for the session.
  }
}

export default function App() {
  // ── Active Page ──────────────────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState('dashboard');

  // ── Saved Destinations (global) ─────────────────────────────────────────
  // Array of destination IDs (strings like "dest-1", "dest-2", …)
  // Initialized from localStorage so saves persist across refreshes.
  const [savedIds, setSavedIds] = useState(() => loadSavedIds());

  // Toggle a destination in / out of the saved list
  const toggleSaved = (destinationId) => {
    setSavedIds((prev) => {
      const updated = prev.includes(destinationId)
        ? prev.filter((id) => id !== destinationId)   // remove
        : [...prev, destinationId];                    // add
      persistSavedIds(updated);
      return updated;
    });
  };

  // ── Global Search Query ──────────────────────────────────────────────────
  // Lifted here so the Header can update it and pages can read it.
  const [searchQuery, setSearchQuery] = useState('');

  const renderActiveView = () => {
    switch (activeTab) {
      case 'trips':
        return <TripsPage />;
      case 'discover':
        return (
          <DiscoverPage
            savedIds={savedIds}
            toggleSaved={toggleSaved}
            searchQuery={searchQuery}
          />
        );
      case 'saved':
        return (
          <SavedPage
            savedIds={savedIds}
            toggleSaved={toggleSaved}
          />
        );
      case 'settings':
        return <SettingsPage />;
      case 'dashboard':
      default:
        return (
          <Dashboard
            setActiveTab={setActiveTab}
            savedIds={savedIds}
            toggleSaved={toggleSaved}
            searchQuery={searchQuery}
          />
        );
    }
  };

  return (
    <MainLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      savedCount={savedIds.length}
    >
      {renderActiveView()}
    </MainLayout>
  );
}
