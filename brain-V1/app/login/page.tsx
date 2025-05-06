"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/ui/navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Check if user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      // Store JWT in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect to dashboard
      router.push("/scan");
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center px-4">
        <h1 className="mb-6 text-5xl font-semibold text-neutral-800 dark:text-neutral-100">
          <Link href="/">
            br<span className="text-[#00be77]">AI</span>n
          </Link>
        </h1>

        <div className="shadow-input w-full max-w-md rounded-none border-t border-b border-white/20 border-b-white/5 p-4 md:rounded-2xl md:p-8 bg-gradient-to-tr from-[#0c0e14] via-[#0f1218] to-[#13171e]">
          <h2 className="text-center text-xl font-bold text-neutral-800 dark:text-neutral-200">
            Welcome Back
          </h2>
          <p className="text-center mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
            Login to access your brAIn account
          </p>

          {error && (
            <div className="mt-4 p-2 text-sm bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          <form className="my-8" onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                placeholder="johndoe@example.com" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </LabelInputContainer>

            <LabelInputContainer className="mb-8">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                placeholder="••••••••" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </LabelInputContainer>

            <button
              className="cursor-pointer group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in →"}
              <BottomGradient />
            </button>

            <div className="mt-4 text-center text-sm text-neutral-600 dark:text-neutral-400">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="font-medium hover:underline text-[#00be77]"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

// Components for styling - add these if they don't exist
function BottomGradient() {
  return (
    <div className="group-hover/btn:opacity-100 opacity-0 transition duration-500 absolute inset-0 rounded-md bg-gradient-to-r from-[#00be77] to-[#008f59] blur-sm" />
  );
}

function LabelInputContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col space-y-2 ${className}`}>
      {children}
    </div>
  );
}
