"use client";
import Sidebar from "@/components/Sidebar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

const doctors = [
  { id: 1, name: "Dr. John Doe", specialization: "Cardiologist", experience: "10 years", contact: "john.doe@example.com" },
  { id: 2, name: "Dr. Sarah Smith", specialization: "Dermatologist", experience: "8 years", contact: "sarah.smith@example.com" },
  { id: 3, name: "Dr. Alex Brown", specialization: "Neurologist", experience: "12 years", contact: "alex.brown@example.com" },
  { id: 4, name: "Dr. Emily White", specialization: "Pediatrician", experience: "6 years", contact: "emily.white@example.com" },
];

export default function DoctorsPage() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 p-6">
        {selectedDoctor ? (
          // Doctor Details View
          <Card className="max-w-lg mx-auto p-6 shadow-lg border">
            <CardHeader>
              <h2 className="text-xl font-semibold">{selectedDoctor.name}</h2>
              <p className="text-gray-500">{selectedDoctor.specialization}</p>
            </CardHeader>
            <CardContent>
              <p><strong>Experience:</strong> {selectedDoctor.experience}</p>
              <p><strong>Contact:</strong> {selectedDoctor.contact}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => setSelectedDoctor(null)}>Back</Button>
              <Link href="/book"> <Button>Book</Button></Link>
            </CardFooter>
          </Card>
        ) : (
          // Doctors List View
          <>
            <h1 className="text-2xl font-bold mb-4">Available Doctors</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map((doctor) => (
                <Card key={doctor.id} className="shadow-lg border">
                  <CardHeader>
                    <h2 className="text-lg font-semibold">{doctor.name}</h2>
                    <p className="text-gray-500">{doctor.specialization}</p>
                  </CardHeader>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => setSelectedDoctor(doctor)}>View</Button>
                    <Link href="/dashboard/book"> <Button>Book</Button></Link>
                    </CardFooter>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
