import React, { useState } from 'react';
import { Settings, Shield, Bell, Globe, User, Sparkles, Check } from 'lucide-react';
import { currentUser } from '../data/mockData';

export default function SettingsPage() {
  const [currency, setCurrency] = useState('USD');
  const [travelStyle, setTravelStyle] = useState('Cultural Heritage');
  const [pace, setPace] = useState('Balanced');

  return (
    <div className="settings-page-view" style={{ maxWidth: '800px' }}>
      <div style={{ marginBottom: '1.75rem' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary)' }}>
          Preferences & Settings
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>
          Configure your travel planning persona, defaults, and account settings.
        </p>
      </div>

      {/* Profile Card */}
      <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-primary)' }}>
          Traveler Profile
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <img 
            src={currentUser.avatar} 
            alt={currentUser.name} 
            style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{currentUser.name}</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>{currentUser.role} • {currentUser.location}</p>
            <span className="badge badge-primary" style={{ marginTop: '0.4rem' }}>
              {currentUser.membership}
            </span>
          </div>
        </div>
      </div>

      {/* Travel Preferences */}
      <div className="card" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-primary)' }}>
          Itinerary Generator Defaults
        </h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, marginBottom: '0.4rem' }}>
              Preferred Currency
            </label>
            <select 
              value={currency} 
              onChange={(e) => setCurrency(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-bg)',
                fontWeight: 500
              }}
            >
              <option value="USD">USD ($) - United States Dollar</option>
              <option value="EUR">EUR (€) - Euro</option>
              <option value="INR">INR (₹) - Indian Rupee</option>
              <option value="GBP">GBP (£) - British Pound</option>
              <option value="JPY">JPY (¥) - Japanese Yen</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, marginBottom: '0.4rem' }}>
              Default Travel Style
            </label>
            <select 
              value={travelStyle} 
              onChange={(e) => setTravelStyle(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-bg)',
                fontWeight: 500
              }}
            >
              <option value="Cultural Heritage">Cultural Heritage & Historical Landmark</option>
              <option value="Scenic Nature">Scenic Nature & Alpine Hiking</option>
              <option value="Culinary & Wine">Culinary Exploration & Local Food Trails</option>
              <option value="Leisure & Relaxation">Coastal Leisure & Slow Travel</option>
              <option value="Adventure">High Adrenaline & Outdoor Adventure</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, marginBottom: '0.4rem' }}>
              Daily Itinerary Pace
            </label>
            <select 
              value={pace} 
              onChange={(e) => setPace(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 0.85rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-bg)',
                fontWeight: 500
              }}
            >
              <option value="Relaxed">Relaxed (1-2 major spots per day, plenty of leisure)</option>
              <option value="Balanced">Balanced (3-4 spots per day with meal recommendations)</option>
              <option value="Fast-Paced">Fast-Paced (Packed day to maximize highlights)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Capstone System Info */}
      <div className="card" style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
          Application Info
        </h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '0.75rem' }}>
          Personalized Travel Itinerary Planner • Computer Engineering Capstone
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <span className="badge badge-sage">React + Vite</span>
          <span className="badge badge-primary">FastAPI Ready</span>
          <span className="badge badge-gold">Supabase Auth Scheduled</span>
          <span className="badge badge-primary">Gemini AI Scheduled</span>
        </div>
      </div>
    </div>
  );
}
