# Personalized Travel Itinerary Planner

An AI-powered, full-stack travel planning web application that empowers travelers to generate, customize, optimize, and manage highly personalized, day-wise travel itineraries tailored to their unique preferences, budgets, travel styles, and constraints.

---

## 📌 Project Overview

**Personalized Travel Itinerary Planner** is a computer engineering capstone project designed to transform the travel planning experience. Planning a comprehensive trip involves juggling destinations, schedules, budgets, transit logistics, accommodation types, and varied traveler interests. This application automates and refines this process using generative AI and structured optimization logic, providing travelers with elegant, day-wise itineraries complete with attraction schedules, dining options, accommodation picks, transit routes, and real-time cost estimations.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React.js, Vite, JavaScript (ES6+), HTML5, Modern CSS3 / CSS Modules / Tailwind |
| **Backend** | Python 3.14+, FastAPI, Pydantic v2, Uvicorn |
| **Database & Auth** | Supabase (PostgreSQL), Supabase Authentication (JWT-based RBAC) |
| **Generative AI** | Gemini Generative AI API (Structured JSON generation via Pydantic schemas) |
| **Tooling & Environment** | Git, GitHub, VS Code / Antigravity IDE, PowerShell |
| **Future Enhancements** | Interactive Maps (Leaflet / Google Maps / Mapbox), Cloud Deployment |

---

## 🏛️ Application Architecture & Modules

The platform is structured into 15 specialized modules to be built incrementally:

1. **Authentication & Profile**: Supabase user signup, login, session management, and traveler preference profiles.
2. **Smart Travel Dashboard**: Premium interface showcasing upcoming trips, stats, destination discovery, and quick actions.
3. **Smart Trip Builder**: Intuitive multi-step trip creation wizard (destination, dates, budget, travel style, party size).
4. **AI Itinerary Generator**: FastAPI backend orchestrating structured LLM prompts to output granular day-by-day itineraries.
5. **Itinerary Management**: Interactive viewer and editor for re-ordering, editing, or regenerating activities.
6. **Smart Route & Travel Optimization**: Logical ordering of daily spots to minimize travel distance and transit fatigue.
7. **Budget Intelligence**: Breakdown of estimated expenses across lodging, food, activities, and transit vs. allocated budget.
8. **Save & Manage Trips**: Trip persistence, status tracking (Upcoming, In Progress, Completed), and archiving.
9. **Group Travel Planning**: Shared links, collaborative planning, and split-budget breakdowns for travel groups.
10. **Weather-Aware Itinerary**: Dynamic indoor/outdoor activity recommendations based on seasonal weather forecast data.
11. **Hidden Gems Discovery**: Localized off-the-beaten-path recommendations paired with major tourist attractions.
12. **Plan B Generator**: One-click alternative suggestions when an activity or venue is closed, rained out, or crowded.
13. **Local Culture Companion**: Contextual insights on cultural etiquette, local tipping norms, common phrases, and safety tips.
14. **What-If Simulator**: Interactive scenario tester (e.g., "+$300 budget", "+2 days duration", or "shift to luxury style").
15. **Settings & Preferences**: Currency selection, measurement units, notification triggers, and profile configurations.

---

## 🎨 UI/UX Design System

The application implements a custom **Premium Light Theme**:
- **Background**: Warm Ivory (`#FBFBF9` / `#F8F6F0`)
- **Card Surfaces**: Clean Pure White (`#FFFFFF`) with soft, layered elevation shadows
- **Primary Accent**: Forest Green (`#1E3F20` / `#234E2E`)
- **Secondary Accents**: Soft Sage (`#8FA382`) & Muted Gold (`#D4AF37` / `#C5A059`)
- **Text & Contrast**: Deep Charcoal (`#1F2937`) for crisp readability
- **Visuals**: High-resolution curated travel photography, minimal modern iconography, and clean typography.

---

## 📁 Repository Directory Structure

```text
Personalized-Travel-Itinerary-Planner/
├── backend/
│   ├── app/
│   │   ├── api/             # API route handlers / controllers
│   │   ├── core/            # App configuration, security, and environment settings
│   │   ├── models/          # Database & Pydantic domain models
│   │   ├── schemas/         # Request/response validation schemas
│   │   ├── services/        # AI orchestration, Supabase client, business logic
│   │   └── main.py          # FastAPI application entrypoint
│   ├── .env.example         # Template for backend secrets and configuration
│   └── requirements.txt     # Python backend dependencies
├── frontend/
│   ├── public/              # Static public assets, favicons
│   ├── src/
│   │   ├── assets/          # Images, icons, and theme fonts
│   │   ├── components/      # Reusable UI components (Sidebar, Navbar, Cards)
│   │   ├── context/         # React Context for global state (Auth, Active Trip)
│   │   ├── pages/           # View pages (Dashboard, TripBuilder, ItineraryView)
│   │   ├── services/        # API client and Supabase client definitions
│   │   ├── styles/          # Design tokens, variables, and global CSS
│   │   ├── App.jsx          # Root application component
│   │   └── main.jsx         # React application mounting point
│   ├── .env.example         # Template for frontend environment variables
│   ├── package.json         # Node.js dependencies & scripts
│   └── vite.config.js       # Vite configuration
├── .gitignore               # Ignored files, build artifacts, and secrets
└── README.md                # Project documentation and developer guide
```

---

## ⚙️ Development Workflow & Engineering Standards

This project follows an iterative, test-driven development cycle:

$$\text{Build} \longrightarrow \text{Understand} \longrightarrow \text{Run} \longrightarrow \text{Test} \longrightarrow \text{GitHub Commit} \longrightarrow \text{Next Step}$$

1. **Build in Modular Increments**: No massive blind code dumps; each step targets a concrete functional component.
2. **Concept & Architecture Clarity**: Understanding the *why* behind every pattern, library choice, and file layout.
3. **Strict Secret Hygiene**: Zero credentials or API keys committed to source control. All secrets are managed through `.env` files and `.gitignore`.
4. **Clean Commits**: Atomic, descriptive Git commits tracking exact incremental progress.

---

## 🚀 Getting Started

### Prerequisites
- **Python**: 3.12+ (Installed: `3.14.5`)
- **Node.js**: 20+ (Installed: `v25.6.0`)
- **npm**: 10+ (Installed: `11.8.0`)
- **Git**: 2.40+ (Installed: `2.50.1`)

---

## 🔒 Security Best Practices
- Backend API keys (such as `GEMINI_API_KEY` and Supabase Service Role keys) reside strictly on the FastAPI server and are **never** exposed to client-side bundles.
- Frontend uses client-safe public keys only (`VITE_SUPABASE_ANON_KEY`) gated by PostgreSQL Row Level Security (RLS) policies.

---

## 📄 License

This project is developed as an academic capstone project.
