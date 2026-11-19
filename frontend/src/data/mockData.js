/**
 * Mock Data for Personalized Travel Itinerary Planner (Step 2 - UI Prototype)
 * 
 * NOTE: This sample dataset is strictly for frontend demonstration and visual prototyping.
 * It will be replaced with Supabase database queries and Gemini AI itinerary generations
 * in subsequent development phases.
 */

export const currentUser = {
  name: "Sanskar Satale",
  role: "Explorer & Student Architect",
  location: "Mumbai, India",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  bio: "Passionate about cultural exploration, scenic railways, and culinary adventures.",
  membership: "CapStone Explorer"
};

export const travelStats = [
  {
    id: "stat-1",
    label: "Total Trips Planned",
    value: "8",
    change: "+2 this quarter",
    icon: "Compass",
    accent: "primary"
  },
  {
    id: "stat-2",
    label: "Destinations Explored",
    value: "14",
    change: "Across 4 continents",
    icon: "MapPin",
    accent: "sage"
  },
  {
    id: "stat-3",
    label: "Itinerary Days Curated",
    value: "42",
    change: "100% personalized",
    icon: "Calendar",
    accent: "gold"
  },
  {
    id: "stat-4",
    label: "Saved Bucketlist Spots",
    value: "26",
    change: "6 ready to plan",
    icon: "Bookmark",
    accent: "primary"
  }
];

export const heroFeaturedDestination = {
  title: "Kyoto Autumn Cultural Journey",
  tagline: "Featured Destination of the Month",
  country: "Japan",
  duration: "7 Days • 6 Nights",
  bestSeason: "Oct – Nov (Momiji Foliage)",
  description: "Immerse yourself in tranquil Zen gardens, historic wooden machiya townhouses, traditional tea ceremonies, and the illuminated vermilion torii gates of Fushimi Inari.",
  image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=85",
  tags: ["Culture", "Zen Temples", "Autumn Foliage", "Culinary"],
  estimatedBudget: "$2,200 – $2,800"
};

export const upcomingTrips = [
  {
    id: "trip-01",
    title: "Kyoto Ancient Temples & Tea Trails",
    destination: "Kyoto & Nara, Japan",
    dates: "Oct 18 – Oct 25, 2026",
    daysCount: 7,
    travelers: 2,
    travelStyle: "Cultural Heritage",
    budgetTotal: "$2,850",
    budgetSpent: "$1,940",
    status: "In Planning",
    statusVariant: "planning",
    coverImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    daysLeft: 42
  },
  {
    id: "trip-02",
    title: "Amalfi Cliffside & Capri Coastal Odyssey",
    destination: "Positano, Amalfi & Capri, Italy",
    dates: "Jul 12 – Jul 19, 2026",
    daysCount: 8,
    travelers: 4,
    travelStyle: "Scenic Leisure",
    budgetTotal: "$4,600",
    budgetSpent: "$4,100",
    status: "Confirmed",
    statusVariant: "confirmed",
    coverImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    daysLeft: 12
  }
];

export const popularDestinations = [
  {
    id: "dest-1",
    title: "Positano & Amalfi Coast",
    country: "Italy",
    rating: 4.9,
    reviewsCount: 312,
    idealDuration: "6-8 Days",
    style: "Coastal & Romance",
    priceTier: "$$$$",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    highlights: ["Path of the Gods", "Capri Boat Grottoes", "Limoncello Tastings"]
  },
  {
    id: "dest-2",
    title: "Banff National Park & Lake Louise",
    country: "Canada",
    rating: 4.95,
    reviewsCount: 428,
    idealDuration: "5-7 Days",
    style: "Alpine Nature & Hiking",
    priceTier: "$$$",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
    highlights: ["Moraine Lake Sunrise", "Icefields Parkway", "Gondola Vistas"]
  },
  {
    id: "dest-3",
    title: "Santorini Caldera & Oia",
    country: "Greece",
    rating: 4.88,
    reviewsCount: 510,
    idealDuration: "4-6 Days",
    style: "Cycladic & Sunset",
    priceTier: "$$$$",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
    highlights: ["Oia Sunset Trail", "Red Beach", "Akrotiri Ruins"]
  },
  {
    id: "dest-4",
    title: "Swiss Alps & Lauterbrunnen Valley",
    country: "Switzerland",
    rating: 4.97,
    reviewsCount: 289,
    idealDuration: "7-10 Days",
    style: "Panoramic Rail & Peaks",
    priceTier: "$$$$$",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    highlights: ["Jungfraujoch Pass", "72 Waterfalls Valley", "Alpine Cableways"]
  },
  {
    id: "dest-5",
    title: "Ubud & Tegallalang Rice Terraces",
    country: "Bali, Indonesia",
    rating: 4.85,
    reviewsCount: 640,
    idealDuration: "6-8 Days",
    style: "Wellness & Lush Nature",
    priceTier: "$$",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    highlights: ["Sacred Monkey Forest", "Campuhan Ridge Walk", "Artisan Markets"]
  },
  {
    id: "dest-6",
    title: "Reykjavik & Golden Circle",
    country: "Iceland",
    rating: 4.92,
    reviewsCount: 380,
    idealDuration: "5-7 Days",
    style: "Aurora & Geothermal",
    priceTier: "$$$$",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80",
    highlights: ["Blue Lagoon Springs", "Gullfoss Waterfall", "Northern Lights Hunt"]
  }
];

export const recentTrips = [
  {
    id: "recent-1",
    title: "Swiss High Peaks & Panoramic Rail Journey",
    destination: "Interlaken, Zermatt & Lucerne",
    dates: "Sep 08 – Sep 15, 2025",
    daysCount: 7,
    travelers: 2,
    status: "Completed",
    statusVariant: "completed",
    coverImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80",
    summary: "Conquered the Gornergrat panoramic trail with direct Matterhorn views and explored Lauterbrunnen waterfalls."
  },
  {
    id: "recent-2",
    title: "Iceland Southern Coast & Geothermal Springs",
    destination: "Reykjavik & Vik, Iceland",
    dates: "Nov 02 – Nov 08, 2025",
    daysCount: 6,
    travelers: 3,
    status: "Completed",
    statusVariant: "completed",
    coverImage: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=600&q=80",
    summary: "Chased the Aurora Borealis in Vik black sand beach and navigated glacier tunnels."
  }
];
