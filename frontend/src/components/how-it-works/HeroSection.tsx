"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative h-[50vh] min-h-[500px] flex flex-col items-center justify-center bg-linear-to-br from-slate-50 to-blue-50 overflow-hidden">
            {/* Background Particles - simplified from home page */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">

                {/* Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center items-center gap-2 text-sm text-gray-500 mb-6 font-medium"
                >
                    <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-gray-800">How It Works</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight bg-clip-text"
                >
                    How Health Nova Works
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Understand the science, technology, and process behind our AI-powered health assessments
                </motion.p>

                {/* Quick Navigation Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3"
                >
                    {[
                        { name: "The Process", id: "process" },
                        { name: "Technology", id: "technology" },
                        { name: "Privacy", id: "privacy" },
                        { name: "FAQ", id: "faq" },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="bg-white border border-gray-200 px-5 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:shadow-sm transition-all duration-200 cursor-pointer"
                        >
                            {item.name}
                        </button>
                    ))}
                </motion.div>
            </div>

            {/* Bottom Blur Transition */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent" />
        </section>
    );
}
