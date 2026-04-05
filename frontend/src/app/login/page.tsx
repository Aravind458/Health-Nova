"use client";

import { BrandShowcase } from "@/components/auth/BrandShowcase";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-white overflow-hidden">
            {/* Left Side - Brand Visuals */}
            <BrandShowcase />

            {/* Right Side - Login Form */}
            <LoginForm />
        </div>
    );
}
