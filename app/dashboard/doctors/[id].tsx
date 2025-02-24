"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { doctors } from "@/utils/doctors"; // Import the doctors list

export default function DoctorDetails() {
  const { id } = useParams(); // Get doctor ID from URL
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    if (id) {
      const doctor = doctors.find((doc) => doc.id.toString() === id);
      setSelectedDoctor(doctor || null);
    }
  }, [id]);

  if (!selectedDoctor) {
    return <p className="text-center mt-10 text-gray-500">Loading doctor details...</p>;
  }

  return (
    <Card className="max-w-lg mx-auto p-6 shadow-lg border">
      <CardHeader>
        <h2 className="text-xl font-semibold">{selectedDoctor.name}</h2>
        <p className="text-gray-500">{selectedDoctor.specialization}</p>
      </CardHeader>
      <CardContent>
        <p><strong>Experience:</strong> {selectedDoctor.experience} years</p>
        <p><strong>Contact:</strong> {selectedDoctor.contact}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href="/dashboard">
          <Button variant="outline">Back</Button>
        </Link>
        <Link href="/dashboard/book">
          <Button>Book</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
