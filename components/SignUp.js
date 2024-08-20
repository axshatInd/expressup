"use client";
import { Fugaz_One } from "next/font/google";
import React, { useState } from "react";
import Button from "./Button";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation"; // Import useRouter from 'next/navigation'
import Link from "next/link"; // Make sure Link is imported

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticating, setAuthenticating] = useState(false);

  const { signup } = useAuth();
  const router = useRouter(); // Initialize useRouter

  async function handleSubmit() {
    if (!email || !password || password.length < 6) {
      return;
    }
    setAuthenticating(true);

    try {
      console.log("Signing up a new user");
      await signup(email, password);
      router.push("/dashboard"); // Redirect to dashboard after sign up
    } catch (err) {
      console.log(err.message);
    } finally {
      setAuthenticating(false);
    }
  }

  return (
    <div className="flex flex-col flex-1 justify-center items-center gap-4">
      <h3 className={"text-4xl sm:text-5xl md:text-6xl " + fugaz.className}>
        Register
      </h3>
      <p>You&apos;re one step away!</p>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full max-w-[400px] mx-auto px-3 py-2 border rounded"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full max-w-[400px] mx-auto px-3 py-2 border rounded"
        placeholder="Password"
        type="password"
      />
      <div className="max-w-[400px] w-full mx-auto">
        <Button
          clickHandler={handleSubmit}
          text={authenticating ? "Submitting" : "Submit"}
          full
        />
      </div>
      <p className="text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-indigo-600">
          Sign in
        </Link>
      </p>
    </div>
  );
}
