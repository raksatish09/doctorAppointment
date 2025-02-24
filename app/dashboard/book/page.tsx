"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
export default function BookPage() {
  const router = useRouter();
  const [doctorName, setDoctorName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [success, setSuccess] = useState(false);

  const doctorList = [
    "Dr. John Doe",
    "Dr. Sarah Lee",
    "Dr. Emily Brown",
    "Dr. Michael Smith",
  ]; // Example list, can be dynamic

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (doctorName && date && time) {
      const newBooking = { doctor: doctorName, date, time };
  
      // Get existing bookings from localStorage
      const existingBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
      
      // Add new booking and update localStorage
      const updatedBookings = [...existingBookings, newBooking];
      localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  
      // Update patientsCount and bookingsCount in localStorage
      const prevPatientsCount = JSON.parse(localStorage.getItem("patientsCount") || "0");
      const prevBookingsCount = JSON.parse(localStorage.getItem("bookingsCount") || "0");
  
      localStorage.setItem("patientsCount", JSON.stringify(prevPatientsCount + 1));
      localStorage.setItem("bookingsCount", JSON.stringify(prevBookingsCount + 1));
  
      setSuccess(true);
  
      // Redirect after 2 seconds
      setTimeout(() => router.push("/dashboard"), 2000);
    }
  };
  
  
  return (
    <div className="flex h-screen">
      <Sidebar/>
      <Button 
        onClick={() => router.back()} 
        variant="ghost" 
        className="absolute top-4 right-4 mt-7 hover:bg-red-400"
      >
        <X className="w-6 h-6" />
      </Button>
      <div className="p-6 max-w-md mx-auto mt-6">
        <h2 className="text-2xl font-semibold mb-4 hover:text-blue-400">Book an Appointment</h2>
        <div>
          {success && <div className="bg-green-500 text-white p-2 mb-3">✅ Successfully Booked!</div>}
          <div className="p-6 flex justify-end ml-auto">
            <form onSubmit={handleSubmit} className="space-y-4 mt-20">
              {/* Doctor Selection */}
              <div>
                <label className="block text-gray-700">👨‍⚕️ Select Doctor</label>
                <select
                  value={doctorName}
                  onChange={(e) => setDoctorName(e.target.value)}
                  required
                  className="border p-2 w-full rounded"
                >
                  <option value="">-- Choose a Doctor --</option>
                  {doctorList.map((doctor, index) => (
                    <option key={index} value={doctor}>
                      {doctor}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-gray-700">📆 Select Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  className="border p-2 w-full rounded"
                />
              </div>

              {/* Time Selection */}
              <div>
                <label className="block text-gray-700">⏰ Select Time</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                  className="border p-2 w-full rounded"
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded w-full">
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
