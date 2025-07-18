import { Vehicle } from "@/types";
import mockVehicles from '@/data/mockVehicles.json';


export const vehicleRepository = {
  findAll: async (): Promise<Vehicle[]> => {
    return Promise.resolve(mockVehicles);
  },
  findBySlug: async (slug: string): Promise<Vehicle | undefined> => {
    return Promise.resolve(mockVehicles.find(v => v.slug === slug));
  },
};
