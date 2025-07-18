// src/lib/repository.ts

import { Vehicle, Booking } from "@/types";
import mockVehicles from '@/data/mockVehicles.json';

// This repository for finding vehicles is correct.
export const vehicleRepository = {
  findAll: async (): Promise<Vehicle[]> => {
    return Promise.resolve(mockVehicles);
  },
  findBySlug: async (slug: string): Promise<Vehicle | undefined> => {
    return Promise.resolve(mockVehicles.find(v => v.slug === slug));
  },
};

// --- This is the corrected Booking Repository ---

// A placeholder array to "store" bookings in memory.
const bookings: Booking[] = [];

export const bookingRepository = {
  /**
   * Simulates creating a new booking and saving it with a default status.
   * In a real app, this would write to a database.
   *
   * The `data` parameter now correctly expects data *without* a status.
   */
  create: async (data: Omit<Booking, 'id' | 'createdAt' | 'status'>): Promise<Booking> => {
    const newBooking: Booking = {
      id: `booking_${Date.now()}`,
      createdAt: new Date(),
      status: 'pending', // <<< THIS IS THE FIX: Set a default status
      ...data,
    };

    console.log('New booking created with status "pending":', newBooking);
    bookings.push(newBooking);

    return Promise.resolve(newBooking);
  }
};
