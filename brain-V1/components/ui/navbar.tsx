"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);

    // Redirect to home page
    router.push("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-zinc/50 border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Logo */}
          <div className="flex-shrink-0 text-4xl font-bold text-white">
            <Link href="/">
              br<span className="text-[#00be77]">AI</span>n
            </Link>
          </div>

          {/* Center: Nav Links */}
          <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2 gap-4 text-white text-md font-regular">
            <Link
              href="/#features"
              className="text-white hover:text-[#00be77] transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#solutions"
              className="text-white hover:text-[#00be77] transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/#pricing"
              className="text-white hover:text-[#00be77] transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/model"
              className="text-white hover:text-[#00be77] transition-colors"
            >
              Model
            </Link>
          </div>

          {/* Right: Authentication Buttons */}
          <div className="hidden md:flex">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="cursor-pointer bg-white text-gray-900 font-medium px-8 py-2 rounded-lg border border-white/20 overflow-hidden transition duration-200 hover:shadow-[0_0_12px_4px_rgba(255,255,255,0.2)]"
              >
                Logout
              </button>
            ) : (
              <>
                <Link href="/login" className="cursor-pointer">
                  <button className="cursor-pointer bg-white text-gray-900 font-medium px-8 py-2 rounded-lg border border-white/20 overflow-hidden transition duration-200 hover:shadow-[0_0_12px_4px_rgba(255,255,255,0.2)]">
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
