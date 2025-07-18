<<<<<<< HEAD
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
  id:string;
  vehicleId: string;
  start: string; // ISO
  end: string;   // ISO
  name: string;
  email: string;
  phone: string;
  pickup: string;
  dropoff: string;
  status: "pending" | "confirmed" | "cancelled";
=======
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
  id:string;
  vehicleId: string;
  start: string; // ISO
  end: string;   // ISO
  name: string;
  email: string;
  phone: string;
  pickup: string;
  dropoff: string;
  status: "pending" | "confirmed" | "cancelled";
>>>>>>> d838527dfb3712e23902bb78922705722be566fb
};