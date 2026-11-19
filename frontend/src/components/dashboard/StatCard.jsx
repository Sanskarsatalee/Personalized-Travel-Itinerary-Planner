import React from 'react';
import { Compass, MapPin, Calendar, Bookmark, TrendingUp } from 'lucide-react';
import './StatCard.css';

const ICON_MAP = {
  Compass: Compass,
  MapPin: MapPin,
  Calendar: Calendar,
  Bookmark: Bookmark,
};

export default function StatCard({ label, value, change, icon, accent = 'primary' }) {
  const IconComponent = ICON_MAP[icon] || Compass;

  return (
    <div className={`stat-card stat-accent-${accent}`}>
      <div className="stat-card-header">
        <div className={`stat-icon-wrapper stat-icon-${accent}`}>
          <IconComponent size={20} />
        </div>
        <div className="stat-trend-badge">
          <TrendingUp size={12} />
          <span>Active</span>
        </div>
      </div>

      <div className="stat-body">
        <span className="stat-value">{value}</span>
        <span className="stat-label">{label}</span>
      </div>

      <div className="stat-footer">
        <span className="stat-change-text">{change}</span>
      </div>
    </div>
  );
}
