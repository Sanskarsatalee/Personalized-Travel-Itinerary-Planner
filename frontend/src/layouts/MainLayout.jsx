import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import './MainLayout.css';

export default function MainLayout({ children, activeTab, setActiveTab, searchQuery, setSearchQuery, savedCount }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="app-layout">
      {/* Sidebar Navigation */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        savedCount={savedCount}
      />

      {/* Main Content Area */}
      <div className="layout-main-wrapper">
        <Header 
          activeTab={activeTab}
          onMenuClick={() => setMobileOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <main className="layout-content-body">
          <div className="content-container">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
