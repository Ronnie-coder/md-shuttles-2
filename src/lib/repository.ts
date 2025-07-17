import { Vehicle } from "@/types";
import mockVehicles from '@/data/mockVehicles.json';

// --- Vehicle Repository ---
export const vehicleRepository = {
  findAll: async (): Promise<Vehicle[]> => {
    return Promise.resolve(mockVehicles);
  },
  findBySlug: async (slug: string): Promise<Vehicle | undefined> => {
    return Promise.resolve(mockVehicles.find(v => v.slug === slug));
  },
};

// We will build out the booking repository later when we add the widget