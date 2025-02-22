'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-lg rounded-xl bg-white">
        <h2 className="text-2xl font-semibold text-center">Welcome Back!</h2>
        <p className="text-gray-500 text-center mb-6">Login with your details to continue</p>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email:</label>
              <Input type="email" placeholder="Email Address" className="mt-1" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Password:</label>
              <Input type="password" placeholder="Password" className="mt-1" required />
            </div>
            <Link href="/dashboard" >
              
            <Button type="submit" className="w-full mt-5 bg-blue-600 hover:bg-blue-700">Login</Button>
            </Link>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4">
            Don&#39;t have an account?{' '}
            <Link href="/signin" className="text-black font-semibold  hover:underline">
              Sign Up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
