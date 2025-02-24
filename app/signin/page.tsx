"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function Signup() {
  const { setUser } = useAuth();
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleNext = () => {
    if (firstName && lastName && email) {
      setUser({ name: `${firstName} ${lastName}`, email });
      router.push("/dashboard"); // Redirect to dashboard
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md shadow-lg rounded-lg">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-center">Let&#39;s Get Started</h2>
          <p className="text-sm text-center text-gray-600">
            Add Your Personal Details to Continue
          </p>

          <div>
            <Label htmlFor="name">Name:</Label>
            <div className="flex space-x-2">
              <Input id="first-name" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <Input id="last-name" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email:</Label>
            <Input id="email" placeholder="Enter E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <Label htmlFor="nic">NIC:</Label>
            <Input id="nic" placeholder="NIC Number" />
          </div>

          <div>
            <Label htmlFor="dob">Date of Birth:</Label>
            <Input id="dob" type="date" />
          </div>

          <div className="">
            <Link href="/dashboard">
            <Button className="w-full bg-blue-600" onClick={handleNext}>Next</Button>
            </Link>
          </div>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-black-600">Login</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
