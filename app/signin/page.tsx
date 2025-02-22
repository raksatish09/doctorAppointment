

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Signup() {
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
              <Input id="first-name" placeholder="First Name" />
              <Input id="last-name" placeholder="Last Name" />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email:</Label>
            <Input id="address" placeholder="Enter E-mail" />
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
            <Link href="/dashboard"><Button className="w-full bg-blue-600">Next</Button></Link>
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
