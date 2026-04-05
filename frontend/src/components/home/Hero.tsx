"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { GradientBlobs } from "@/components/home/GradientBlobs";
import { FloatingParticles } from "@/components/home/FloatingParticles";
import { BackgroundPattern } from "@/components/home/BackgroundPattern";
import { HealthOverviewCard } from "@/components/home/HealthOverviewCard";

export function Hero() {

    return (
        <section className="relative isolate min-h-screen overflow-hidden bg-gray-50">

            {/* --- BACKGROUND LAYERS --- */}

            {/* Layer 1: Base Gradient */}
            <div className="absolute inset-0 bg-linear-to-br from-gray-50 via-blue-50 to-cyan-50 -z-10" />

            {/* Layer 2: Geometric Pattern */}
            <BackgroundPattern />

            {/* Layer 3: Animated Gradient Blobs */}
            <GradientBlobs />

            {/* Layer 4: Floating Particles */}
            <FloatingParticles />

            {/* Layer 5: Mesh Grid Overlay (Optional Subtle Texture) */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 102, 204, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 102, 204, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                    maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 0%, transparent 100%)'
                }}
            />

            {/* Bottom Fade Mask for Seamless Transition */}
            <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-linear-to-t from-[#F8FAFC] to-transparent pointer-events-none z-10 backdrop-blur-[2px]" />


            {/* --- CONTENT --- */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-32">
                <div className="grid lg:grid-cols-2 lg:gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl mx-auto lg:mx-0"
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center gap-x-2 rounded-full px-4 py-2 bg-white/60 backdrop-blur-md border border-blue-200/50 shadow-[0_4px_20px_rgba(0,102,204,0.1)] mb-8"
                            initial={{ opacity: 0, x: -30, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <span className="text-blue-600 font-semibold text-sm">What's new</span>
                            <span className="flex items-center gap-1 text-sm text-gray-600">
                                Just launched v1.0
                                <span className="arrow-wiggle inline-block">→</span>
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
                            <div className="inline-block mr-3">Early Health Insights</div>
                            <motion.div
                                className="gradient-text pb-2 inline-block bg-linear-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                Powered by AI
                            </motion.div>
                        </h1>

                        {/* Description */}
                        <motion.p
                            className="mt-6 text-lg leading-relaxed text-gray-600 max-w-xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Assess your risk for heart disease, diabetes, kidney, and liver conditions using our advanced machine learning algorithms. Private, secure, and instant.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            className="mt-10 flex flex-wrap items-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link
                                    href="#assessments"
                                    className="btn-primary-pulse rounded-full bg-linear-to-r from-blue-600 to-cyan-500 px-8 py-4 text-base font-bold text-white shadow-[0_10px_40px_-10px_rgba(0,102,204,0.4)] hover:shadow-[0_20px_50px_-10px_rgba(0,102,204,0.6)] transition-all"
                                >
                                    Start Assessment
                                </Link>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link
                                    href="/how-it-works"
                                    className="rounded-full bg-white/80 backdrop-blur-sm border-2 border-gray-200 px-8 py-4 text-base font-medium text-gray-700 hover:bg-white hover:border-blue-500 hover:text-blue-600 transition-all flex items-center gap-1"
                                >
                                    Learn more <span aria-hidden="true">→</span>
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            className="mt-10 flex flex-wrap items-center gap-x-6 text-sm text-gray-600 font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            {[
                                "No data stored",
                                "HIPAA-inspired",
                                "FDA datasets"
                            ].map((badge, i) => (
                                <motion.div
                                    key={badge}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
                                    className="flex items-center gap-1.5"
                                >
                                    <Check className="h-4 w-4 text-green-500" />
                                    {badge}
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Card */}
                    <motion.div
                        className="mt-16 lg:mt-0 relative perspective-1000 w-full flex justify-center lg:justify-end"
                        initial={{ opacity: 0, x: 100, rotateY: 25 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                        style={{ perspective: '1000px' }}
                    >
                        <HealthOverviewCard />

                        {/* Background decorative blob behind card */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 bg-linear-to-r from-blue-100 to-teal-100 rounded-full opacity-40 blur-3xl pointer-events-none" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
