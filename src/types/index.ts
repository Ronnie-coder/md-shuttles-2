// src/types/index.ts

export type Vehicle = {
  id: string;
  slug: string;
  name: string;
  seats: number;
  luggage: number;
  image: string;
  dayRate: number;
  description: string;
  features: string[];
};

export type Booking = {
  id: string;
  vehicleId: string;
  start: string; // ISO
  end: string;   // ISO
  name: string;
  email: string;
  phone: string;
  pickup: string;
  dropoff: string;
  status: "pending" | "confirmed" | "cancelled";
  createdAt: Date; // <<< THIS IS THE FIX: Add the missing property
};
