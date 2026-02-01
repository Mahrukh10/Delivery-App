"use client";
import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const validateEmail = (value: string): void => {
    const regex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(value)) {
      setError("Please enter a valid email address");
    } else {
      setError("");
    }
  };
  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "test@test.com" && password === "password123") {
      const userDetails = {
        email,
        password,
      };

      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      toast.success("Signed in successfully");
      router.push("/delivery");
    } else {
      toast.error("Invalid credentials");
    }
  };

  const isFormValid = email !== "" && password !== "" && error === "";

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-[80vh] w-full max-w-3xl flex-col items-center justify-center py-12 px-16 bg-white dark:bg-black sm:items-center rounded-sm m-16">
        <Image
          className="animate-slide-in"
          src="/delivery.png"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <p>
          <i>Get your favourites by your own choice</i>
        </p>

        <form
          onSubmit={handleSignIn}
          className="flex flex-col gap-4 w-full max-w-sm mt-4"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            className={`px-4 py-2 border rounded-md
            focus:outline-none focus:ring-2
            ${
              error
                ? "border-red-500 focus:ring-red-400"
                : "border-zinc-300 focus:ring-teal-400"
            }
            dark:bg-zinc-800 dark:border-zinc-600 dark:text-zinc-50`}
            required
          />

          {error && <span className="text-sm text-red-500">{error}</span>}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 dark:bg-zinc-800 dark:border-zinc-600 dark:text-zinc-50"
            required
          />

          <button
            type="submit"
            disabled={!isFormValid}
            className={`font-semibold py-2 px-4 rounded-md border transition-colors
              ${
                isFormValid
                  ? "bg-teal-400 text-white cursor-pointer hover:bg-teal-500 hover:border-black"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }
            `}
          >
            Sign In
          </button>
        </form>
      </main>
    </div>
  );
}
