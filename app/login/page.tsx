'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react'; // Icons for show/hide password
import { useAuth } from "@/contexts/AuthContext"; // ✅ Import useAuth()


export default function Login() {
  const { setUser } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Email validation: Must contain '@gmail.com'
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setUser(value);

    if (!value.includes('@gmail.com')) {
      setError("Email must contain '@gmail.com'");
    } else {
      setError('');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-lg rounded-xl bg-white">
        <h2 className="text-2xl font-semibold text-center">Welcome Back!</h2>
        <p className="text-gray-500 text-center mb-6">Login with your details to continue</p>
        <CardContent>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Email:</label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="mt-1"
                value={email}
                onChange={handleEmailChange}
                required
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            <div className="relative">
              <label className="block text-sm font-medium">Password:</label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  className="mt-1 pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <Link href="/dashboard">
            <Button
              type="submit"
              className="w-full mt-5 bg-blue-600 hover:bg-blue-700"
              disabled={!!error} // Disable button if there's an error
            >
              Login
            </Button>
            </Link>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4">
            Don&#39;t have an account?{' '}
            <Link href="/signin" className="text-black font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
