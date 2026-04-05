"use client";

import { useState, useEffect } from "react";
import { fetchHowItWorksContent } from "@/lib/api";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/how-it-works/HeroSection";
import { ProcessTimeline } from "@/components/how-it-works/ProcessTimeline";
import { TechPillars } from "@/components/how-it-works/TechPillars";
import { ScienceExplanation } from "@/components/how-it-works/ScienceExplanation";
import { PrivacyTimeline } from "@/components/how-it-works/PrivacyTimeline";
import { FAQSection } from "@/components/how-it-works/FAQSection";
import { FinalCTASection } from "@/components/how-it-works/FinalCTASection";

export default function HowItWorksPage() {
    const [content, setContent] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadContent = async () => {
            try {
                const data = await fetchHowItWorksContent();
                setContent(data);
            } catch (err) {
                console.error("Failed to load content", err);
            } finally {
                setLoading(false);
            }
        };
        loadContent();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white text-gray-900">
                <div className="animate-pulse text-blue-600 font-semibold">Loading Health Nova...</div>
            </div>
        );
    }
    return (
        <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
            <Navbar />

            <main className="grow">
                <HeroSection />
                <ProcessTimeline steps={content?.steps} />
                <TechPillars />
                <ScienceExplanation />
                <PrivacyTimeline />
                <FAQSection faqs={content?.faqs} />
                <FinalCTASection />
            </main>

            <Footer />
        </div>
    );
}
