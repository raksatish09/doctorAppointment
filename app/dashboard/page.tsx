"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Sidebar from "@/components/Sidebar";

// Mock data for doctors (replace with API call in real app)
const doctors = [
  { name: "Dr. John Doe", id: "john-doe" },
  { name: "Dr. Jane Smith", id: "jane-smith" },
  { name: "Dr. Emily White", id: "emily-white" },
];

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  // State for dynamic statistics
  const [doctorsCount] = useState(doctors.length);
  const [patientsCount, setPatientsCount] = useState(() => {
    return JSON.parse(localStorage.getItem("patientsCount")) || 13;
  });
  const [bookingsCount, setBookingsCount] = useState(() => {
    return JSON.parse(localStorage.getItem("bookingsCount")) || 4;
  });
  const [upcomingBookings, setUpcomingBookings] = useState(() => {
    return JSON.parse(localStorage.getItem("bookings") || "[]");
  });

  useEffect(() => {
    const doctor = searchParams.get("doctor");
    const date = searchParams.get("date");
    const time = searchParams.get("time");
  
    if (doctor && date && time) {
      const newBooking = { id: upcomingBookings.length + 1, doctor, date, time };
      const existingBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
  
      if (!existingBookings.some(b => b.doctor === doctor && b.date === date && b.time === time)) {
        const updatedBookings = [...existingBookings, newBooking];
        localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  
        // Update state
        setUpcomingBookings(updatedBookings);
        setBookingsCount(updatedBookings.length);
  
        // Update patientsCount properly
        const prevPatientsCount = JSON.parse(localStorage.getItem("patientsCount") || "0");
        const newPatientsCount = prevPatientsCount + 1;
  
        localStorage.setItem("patientsCount", JSON.stringify(newPatientsCount));
        setPatientsCount(newPatientsCount);
        const prevbookingsCount = JSON.parse(localStorage.getItem("bookingsCount") || "0");
        const neWbookingsCount = prevPatientsCount + 1;
  
        localStorage.setItem("bookingssCount", JSON.stringify(newbookingsCount));
        setPatientsCount(newbookingsCount);
      }
  
      router.replace("/dashboard");
    }
  }, [searchParams]);
  

  const handleSearch = () => {
    const doctor = doctors.find(doc => doc.name.toLowerCase() === searchQuery.toLowerCase());
    if (doctor) {
      router.push(`/dashboard/doctors/${doctor.id}`);
    } else {
      alert("Doctor not found. Please try again.");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6 ml-4">
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Home</h1>
          <span className="text-gray-600">Today's Date: {new Date().toISOString().split("T")[0]}</span>
        </header>

        <div className="bg-blue-100 p-6 mt-4 rounded-lg">
          <h2 className="text-xl font-semibold">Welcome!</h2>
          <p className="text-gray-700">Not sure about doctors? No problem! Explore 'All Doctors' or Sessions.</p>
          <p className="text-gray-600">Track your past and future appointments.</p>
        </div>

        <div className="mt-6 flex space-x-4">
          <Input
            placeholder="Search Doctor and We will Find The Session Available"
            className="w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <Card>
            <CardHeader><CardTitle>All Doctors</CardTitle></CardHeader>
            <CardContent className="text-center text-lg font-semibold">6</CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>All Patients</CardTitle></CardHeader>
            <CardContent className="text-center text-lg font-semibold">{patientsCount}</CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>New Bookings</CardTitle></CardHeader>
            <CardContent className="text-center text-lg font-semibold">{bookingsCount}</CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Your Upcoming Booking</h2>
          {upcomingBookings.length > 0 ? (
            upcomingBookings.slice(0, 2).map((booking, index) => (
              <div key={index} className="border rounded-lg p-4 mt-2 bg-white shadow">
                <p>Doctor: {booking.doctor}</p>
                <p>Date: {booking.date}</p>
                <p>Time: {booking.time}</p>
              </div>
            ))
          ) : (
            <p>No upcoming bookings.</p>
          )}
        </div>

      </div>
    </div>
  );
}
