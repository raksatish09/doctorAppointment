"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('/images/1.jpg')" }} // Ensure correct path
      ></div>

      {/* Content */}
      <div className="relative text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold">Ease process, save time.</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Feeling under the weather today? No need to fret. With HMS, you can
          easily connect with healthcare professionals and schedule
          appointments online.
        </p>
        <Link href="/login">
          <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-lg">
            Make Appointment
          </Button>
        </Link>
      </div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-6">
        <span className="text-white font-semibold text-lg">HMS | Hospital Management System</span>
        <Link href="/signin" className="text-white text-lg">
          REGISTER
        </Link>
      </div>
    </div>
  );
}
