"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Sidebar from "@/components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar always visible */}
      <Sidebar />  

      {/* Main content area */}
      <div className="flex-1 p-6 ml-4">
        <header className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Home</h1>
          <span className="text-gray-600">Today's Date: {new Date().toISOString().split("T")[0]}</span>
        </header>

        <div className="bg-blue-100 p-6 mt-4 rounded-lg flex justify-between">
          
          <div>
            <h2 className="text-xl font-semibold">Welcome!</h2>
            <p className="text-gray-700">
              Haven't any idea about doctors? No problem! Let's jump to "All Doctors" section or "Sessions".
            </p>
            <p className="text-gray-600">Track your past and future appointments.</p>
          </div>
        </div>

        <div className="mt-6 flex space-x-4">
          <Input placeholder="Search Doctor and We will Find The Session Available" className="w-full" />
          <Button>Search</Button>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>All Doctors</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-lg font-semibold">6</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>All Patients</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-lg font-semibold">13</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>New Bookings</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-lg font-semibold">4</CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold">Your Upcoming Booking</h2>
          <div className="border rounded-lg p-4 mt-2">No upcoming bookings</div>
        </div>
      </div>
    </div>
  );
}
