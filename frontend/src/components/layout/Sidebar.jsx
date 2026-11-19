import React from 'react';
import { 
  LayoutDashboard, 
  CalendarDays, 
  Compass, 
  BookmarkCheck, 
  Settings, 
  Sparkles,
  Plane,
  X,
  ChevronRight
} from 'lucide-react';
import './Sidebar.css';

export default function Sidebar({ activeTab, setActiveTab, mobileOpen, setMobileOpen, savedCount = 0 }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'trips', label: 'My Trips', icon: CalendarDays, badge: '2 Active' },
    { id: 'discover', label: 'Discover Destinations', icon: Compass },
    // badge shows the live savedCount from App.jsx state (persisted in localStorage)
    { id: 'saved', label: 'Saved Places', icon: BookmarkCheck, badge: savedCount > 0 ? String(savedCount) : null },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div 
          className="sidebar-backdrop" 
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside className={`app-sidebar ${mobileOpen ? 'open' : ''}`}>
        {/* Brand Header */}
        <div className="sidebar-brand">
          <div className="brand-logo-container">
            <div className="brand-icon-box">
              <Compass className="brand-icon" size={24} />
            </div>
            <div className="brand-text-group">
              <span className="brand-title">Personalized Travel</span>
              <span className="brand-subtitle">Itinerary Planner</span>
            </div>
          </div>
          {/* Mobile Close Button */}
          <button 
            className="mobile-close-btn"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Quick CTA Action */}
        <div className="sidebar-cta-wrapper">
          <button 
            className="sidebar-new-trip-btn"
            onClick={() => alert("Trip Builder wizard will be introduced in Step 3!")}
          >
            <Sparkles size={17} className="cta-sparkle" />
            <span>Plan New Trip</span>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="sidebar-nav" aria-label="Main Navigation">
          <div className="nav-section-label">MAIN NAVIGATION</div>
          <ul className="nav-list">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeTab === item.id;

              return (
                <li key={item.id} className="nav-item">
                  <button
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      setActiveTab(item.id);
                      if (mobileOpen) setMobileOpen(false);
                    }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="nav-icon-wrapper">
                      <IconComponent size={19} className="nav-icon" />
                    </span>
                    <span className="nav-label">{item.label}</span>

                    {item.badge && (
                      <span className={`nav-badge ${isActive ? 'nav-badge-active' : ''}`}>
                        {item.badge}
                      </span>
                    )}

                    {isActive && <ChevronRight size={16} className="active-chevron" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Capstone Badge / Footer */}
        <div className="sidebar-footer">
          <div className="capstone-pill">
            <div className="capstone-indicator" />
            <div className="capstone-info">
              <span className="capstone-tag">Capstone Project</span>
              <span className="capstone-version">v0.1.0 • Dev Mode</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
