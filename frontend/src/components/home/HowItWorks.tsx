"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fetchHowItWorksContent } from "@/lib/api";
import {
    ClipboardCheck,
    BrainCircuit,
    FileText,
    Database,
    Zap,
    ShieldCheck,
} from "lucide-react";
import Link from "next/link";

// Mapping icon strings from backend to actual Lucide components
const iconMap: Record<string, any> = {
    ClipboardCheck,
    BrainCircuit,
    FileText,
};

const pillars = [
    {
        title: "Machine Learning",
        description: "K-Nearest Neighbors & SVM Models",
        icon: BrainCircuit,
    },
    {
        title: "Medical Datasets",
        description: "Built on UCI & FDA-approved data",
        icon: Database,
    },
    {
        title: "Real-Time Processing",
        description: "Instant results in under 3 seconds",
        icon: Zap,
    },
    {
        title: "Privacy-First",
        description: "No storage, completely anonymous",
        icon: ShieldCheck,
    },
];

export function HowItWorks() {
    const [steps, setSteps] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadContent = async () => {
            try {
                const data = await fetchHowItWorksContent();
                // Take only the first 3 steps if backend returns more, for the preview format
                setSteps(data.steps.slice(0, 3));
            } catch (err) {
                console.error("Failed to load How It Works preview content", err);
            } finally {
                setLoading(false);
            }
        };
        loadContent();
    }, []);

    return (
        <section className="py-24 bg-linear-to-b from-white to-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-bold text-gray-900 mb-4 tracking-tight"
                    >
                        How It Works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl text-gray-600 font-normal"
                    >
                        Simple, secure, and scientifically validated
                    </motion.p>
                </div>

                {/* Loading Skeleton or Content */}
                {loading ? (
                    <div className="flex justify-center mb-24">
                        <div className="animate-pulse flex space-x-12">
                            <div className="h-64 w-80 bg-gray-100 rounded-2xl"></div>
                            <div className="h-64 w-80 bg-gray-100 rounded-2xl hidden md:block"></div>
                            <div className="h-64 w-80 bg-gray-100 rounded-2xl hidden md:block"></div>
                        </div>
                    </div>
                ) : (
                    <div className="relative mb-24">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-linear-to-r from-blue-200 via-blue-400 to-blue-200 dashed opacity-30 -z-10" />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            {steps.map((step, index) => {
                                const IconComponent = iconMap[step.icon] || ClipboardCheck;
                                return (
                                    <motion.div
                                        key={step.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.2 }}
                                        whileHover={{ y: -8 }}
                                        className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 relative group"
                                    >
                                        {/* Step Number Badge */}
                                        <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-cyan-400 text-white font-bold text-lg flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                                            0{index + 1}
                                        </div>

                                        {/* Icon */}
                                        <div className="mb-4 text-blue-600 group-hover:text-blue-500 transition-colors">
                                            <IconComponent size={40} strokeWidth={1.5} />
                                        </div>

                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-[15px]">
                                            {step.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* 4 Trust Pillars Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-gray-100 pt-16"
                >
                    {pillars.map((pillar, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300">
                            <div className="p-2 bg-blue-50 rounded-lg text-blue-600 shrink-0">
                                <pillar.icon size={24} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 text-base mb-1">
                                    {pillar.title}
                                </h4>
                                <p className="text-sm text-gray-500 leading-tight">
                                    {pillar.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Link href="/#assessments">
                            <button className="bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-4 px-10 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:-translate-y-1 transition-all duration-300 text-lg">
                                Start Your Assessment
                            </button>
                        </Link>
                        <p className="mt-4 text-sm text-gray-500 font-medium">
                            No sign-up required • Takes 3 minutes
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
