"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { AssessmentCards } from "@/components/home/AssessmentCards";
import { Features } from "@/components/home/Features";
import { HowItWorks } from "@/components/home/HowItWorks";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      <Navbar />

      <main className="grow">
        <Hero />
        <HowItWorks />
        <AssessmentCards />
        <Features />
      </main>

      <Footer />
    </div >
  );
}
