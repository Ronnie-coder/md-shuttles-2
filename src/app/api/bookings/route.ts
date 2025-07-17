// src/app/api/bookings/route.ts

import { NextResponse } from 'next/server';
import { z } from 'zod';
import { bookingRepository } from '@/lib/repository';

// Define the schema for incoming booking data.
// This ensures the data we receive is structured correctly.
const BookingRequestSchema = z.object({
  vehicleId: z.string(),
  start: z.string().datetime(), // Expects ISO 8601 format, e.g., "2024-08-15T10:00:00.000Z"
  end: z.string().datetime(),
  name: z.string().min(2, "Name is required."),
  email: z.string().email("A valid email is required."),
  phone: z.string().min(9, "A valid phone number is required."),
  pickup: z.string().min(3, "Pickup location is required."),
  dropoff: z.string().min(3, "Drop-off location is required."),
});

// This function handles POST requests to /api/bookings
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validate the incoming data against our schema
    const validation = BookingRequestSchema.safeParse(body);

    if (!validation.success) {
      // If validation fails, return a 400 Bad Request error with details
      return NextResponse.json(
        { message: "Invalid request data", errors: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // 2. If validation succeeds, create the booking using our repository
    // We pass the validated data to ensure type safety.
    const newBooking = await bookingRepository.create(validation.data);

    // 3. Return a 201 Created response with the new booking data
    return NextResponse.json(newBooking, { status: 201 });

  } catch (error) {
    console.error("Error creating booking:", error);
    // Return a generic 500 Internal Server Error if something else goes wrong
    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}