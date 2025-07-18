// src/data/servicesData.ts

import { Car, Users, Plane, Map, Package, Building } from 'lucide-react';

export const servicesData = [
  {
    id: 1,
    title: "Passenger Transport",
    icon: Car,
    description: "Professional and reliable passenger transportation services for all your travel needs.",
    items: [
      "Airport Transfers - Reliable rides to/from all major airports",
      "Corporate Transfers - Transport for executives, staff, and clients",
      "Group & Event Transfers - Solutions for large events and conferences",
      "Custom Transfers - Flexible options tailored to your needs",
      "Point-to-Point Transfers - Direct rides from any location"
    ]
  },
  {
    id: 2,
    title: "Tours",
    icon: Map,
    description: "Explore Cape Town and surrounding areas with our professional tour services.",
    items: [
      "Cape Peninsula Tour",
      "Best of Cape Town Tour",
      "Township Tours",
      "Winelands Tour",
      "Scenic Boat Tours"
    ]
  },
  {
    id: 3,
    title: "Adventure Activities",
    icon: Users,
    description: "Experience exciting adventures with our booking and transport services.",
    items: [
      "Shark Cage Diving",
      "Bungee Jumping",
      "Skydiving",
      "Hiking & Outdoor Adventures",
      "Accommodation Support & Booking"
    ]
  },
  {
    id: 4,
    title: "Delivery & Courier",
    icon: Package,
    description: "Fast, secure, and reliable delivery services for businesses and individuals.",
    items: [
      "Parcel Delivery",
      "Same-Day Delivery",
      "Document Handling",
      "Secure Transport",
      "Track and Trace Services"
    ]
  },
  {
    id: 5,
    title: "Corporate Transport",
    icon: Building,
    description: "Dedicated corporate transportation solutions for businesses.",
    items: [
      "Staff Shuttles",
      "Office-to-Office Transfers",
      "Corporate Events Transport",
      "Executive Transport Services",
      "Regular Staff Commute Solutions"
    ]
  },
  {
    id: 6,
    title: "Airport Services",
    icon: Plane,
    description: "Specialized airport transfer services with flight monitoring.",
    items: [
      "24/7 Airport Transfers",
      "Flight Monitoring",
      "Meet & Greet Services",
      "Group Airport Transfers",
      "VIP Airport Services"
    ]
  }
];
