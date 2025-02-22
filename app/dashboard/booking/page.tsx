"use client";
import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";

export default function MyBookingsPage() {
  const [bookings, setBookings] = useState<{ doctor: string; date: string; time: string }[]>([]);

  useEffect(() => {
    const savedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(savedBookings);
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-semibold mb-4">📅 My Bookings</h1>

        {bookings.length === 0 ? (
          <div className="text-gray-500 text-center mt-10">❌ No appointments booked yet.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bookings.map((booking, index) => (
              <div key={index} className="border p-4 rounded shadow-md">
                <h3 className="text-lg font-semibold">👨‍⚕️ {booking.doctor}</h3>
                <p className="text-gray-600">📆 Date: {booking.date}</p>
                <p className="text-gray-600">⏰ Time: {booking.time}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    
  );
}
