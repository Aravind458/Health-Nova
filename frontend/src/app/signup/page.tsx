"use client";

import { BrandShowcase } from "@/components/auth/BrandShowcase";
import { SignupForm } from "@/components/auth/SignupForm";

export default function SignupPage() {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-white overflow-hidden">
            {/* Left Side - Brand Visuals */}
            <BrandShowcase />

            {/* Right Side - Signup Form */}
            <SignupForm />
        </div>
    );
}
