import React from 'react';
import { ArrowRight } from 'lucide-react';
import './SectionHeader.css';

export default function SectionHeader({ title, subtitle, actionLabel, onAction, icon: Icon }) {
  return (
    <div className="section-header-component">
      <div className="section-title-wrapper">
        <div className="section-title-row">
          {Icon && <Icon className="section-header-icon" size={20} />}
          <h2 className="section-main-heading">{title}</h2>
        </div>
        {subtitle && <p className="section-sub-heading">{subtitle}</p>}
      </div>

      {actionLabel && (
        <button className="section-action-link" onClick={onAction}>
          <span>{actionLabel}</span>
          <ArrowRight size={15} />
        </button>
      )}
    </div>
  );
}
