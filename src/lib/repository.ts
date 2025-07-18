// src/lib/repository.ts

import { Vehicle, Booking } from "@/types";
import mockVehicles from '@/data/mockVehicles.json';

// This part for finding vehicles is existing and correct.
export const vehicleRepository = {
  findAll: async (): Promise<Vehicle[]> => {
    return Promise.resolve(mockVehicles);
  },
  findBySlug: async (slug: string): Promise<Vehicle | undefined> => {
    return Promise.resolve(mockVehicles.find(v => v.slug === slug));
  },
};


// --- THIS IS THE NEW, MISSING PIECE ---
// A placeholder array to "store" bookings in memory for this demo.
const bookings: Booking[] = [];

// The missing booking repository that the API route needs.
export const bookingRepository = {
  /**
   * Simulates creating a new booking and saving it.
   * In a real app, this would write to a database.
   */
  create: async (data: Omit<Booking, 'id' | 'createdAt'>): Promise<Booking> => {
    const newBooking: Booking = {
      id: `booking_${Date.now()}`, // Create a simple unique ID
      createdAt: new Date(),
      ...data,
    };

    // For now, we'll just log it to the console and add it to our memory array.
    console.log('New booking created:', newBooking);
    bookings.push(newBooking);

    return Promise.resolve(newBooking);
  }
};
