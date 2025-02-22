"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils"; // ShadCN helper for class merging
import { Home, Calendar, Settings, User,LogOut} from "lucide-react";

const menuItems = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "All Doctors", href: "/dashboard/doctors", icon: User },
  { name: "My Bookings", href: "/dashboard/booking", icon: Calendar },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },

];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col">
      {/* Avatar Section */}
      <div className="flex items-center space-x-3 mb-6">
        <Avatar>
          <AvatarImage src="https://via.placeholder.com/40" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-lg font-semibold">Saurabh Jasiwal</h2>
          <p className="text-sm text-gray-400">jsaurabh1122@gmail.com</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="space-y-4">
        {menuItems.map(({ name, href, icon: Icon }) => (
          <Link
            key={name}
            href={href}
            className={cn(
              "flex items-center space-x-2 p-2 rounded hover:bg-gray-700",
              pathname === href && "bg-gray-800"
            )}
          >
            <Icon className="h-5 w-5" />
            <span>{name}</span>
          </Link>
        ))}
      </nav>
      <Link href="/" className="flex items-center space-x-2 p-2 mt-auto rounded hover:bg-gray-700">
  <LogOut className="w-5 h-5" />
  <span>Logout</span>
</Link>
    </aside>
  );
}
