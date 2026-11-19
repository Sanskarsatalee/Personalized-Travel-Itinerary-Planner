import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  Menu, 
  Plus, 
  ChevronDown,
  X
} from 'lucide-react';
import { currentUser } from '../../data/mockData';
import './Header.css';

// searchQuery and setSearchQuery are lifted to App.jsx — this component is a
// controlled input that simply displays and updates the global search state.
export default function Header({ onMenuClick, activeTab, searchQuery, setSearchQuery }) {
  const [hasNotifications, setHasNotifications] = useState(true);

  const getPageTitle = () => {
    switch (activeTab) {
      case 'trips':
        return { title: 'My Trips', subtitle: 'Manage and customize your current and past travel plans' };
      case 'discover':
        return { title: 'Discover Destinations', subtitle: 'Explore curated spots, seasonal highlights, and hidden gems' };
      case 'saved':
        return { title: 'Saved Places', subtitle: 'Your personal travel bucketlist and bookmark collection' };
      case 'settings':
        return { title: 'Settings', subtitle: 'Manage preferences, travel styles, and account details' };
      case 'dashboard':
      default:
        return { title: 'Travel Dashboard', subtitle: 'Welcome back, Sanskar • Ready to curate your next adventure?' };
    }
  };

  const { title, subtitle } = getPageTitle();

  return (
    <header className="app-header">
      <div className="header-left">
        {/* Mobile Hamburger Menu Toggle */}
        <button 
          className="mobile-menu-trigger" 
          onClick={onMenuClick}
          aria-label="Open navigation sidebar"
        >
          <Menu size={22} />
        </button>

        {/* Dynamic Titles */}
        <div className="header-title-box">
          <h1 className="header-main-title">{title}</h1>
          <p className="header-subtitle">{subtitle}</p>
        </div>
      </div>

      <div className="header-center">
        {/* Global Search — controlled by App.jsx state */}
        <div className="header-search-bar">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search destinations, countries, landmarks..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
            aria-label="Search destinations"
          />
          {/* Show a clear button when there is active text */}
          {searchQuery.length > 0 ? (
            <button
              className="search-clear-btn"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
              title="Clear search"
            >
              <X size={15} />
            </button>
          ) : (
            <div className="search-shortcut" title="Quick Search">
              <kbd>Ctrl</kbd>
              <span>+</span>
              <kbd>K</kbd>
            </div>
          )}
        </div>
      </div>

      <div className="header-right">
        {/* Quick Trip CTA Button */}
        <button 
          className="header-cta-btn"
          onClick={() => alert("Trip Builder wizard will be introduced in Step 3!")}
          title="Create a new trip itinerary"
        >
          <Plus size={16} />
          <span className="cta-label">New Trip</span>
        </button>

        {/* Notifications Icon */}
        <button 
          className="icon-action-btn notification-btn"
          onClick={() => setHasNotifications(false)}
          title="Notifications"
          aria-label="View notifications"
        >
          <Bell size={19} />
          {hasNotifications && <span className="notification-dot" />}
        </button>

        {/* User Profile Area */}
        <div className="user-profile-widget" tabIndex={0} role="button" aria-label="User Profile Menu">
          <div className="avatar-wrapper">
            <img 
              src={currentUser.avatar} 
              alt={currentUser.name} 
              className="user-avatar-img" 
            />
            <span className="online-status-dot" />
          </div>
          <div className="user-meta-info">
            <span className="user-display-name">{currentUser.name}</span>
            <span className="user-membership-badge">{currentUser.membership}</span>
          </div>
          <ChevronDown size={15} className="profile-chevron" />
        </div>
      </div>
    </header>
  );
}
