// app/404.tsx
"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-white">
      <h1 className="section-heading font-NexaBold text-primary mb-4 font-semibold">404</h1>
      <p className="section-content font-poppins mb-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link href="/" className="text-primary hover:underline">
        Go back to the homepage
      </Link>
    </div>
  );
}
