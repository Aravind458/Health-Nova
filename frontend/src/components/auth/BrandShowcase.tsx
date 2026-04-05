"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Zap, TrendingUp, Heart } from "lucide-react";

export function BrandShowcase() {
    return (
        <div className="relative w-full lg:w-1/2 overflow-hidden bg-linear-to-br from-[#0066CC] via-[#06B6D4] to-[#14B8A6]">
            {/* Animated Gradient Blobs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-white opacity-20 blur-[60px] rounded-full mix-blend-overlay"
            />
            <motion.div
                animate={{
                    x: [0, -70, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-200 opacity-20 blur-[60px] rounded-full mix-blend-overlay"
            />

            {/* Background Medical Pattern Overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white rounded-full opacity-30"
                    style={{
                        width: Math.random() * 4 + 2,
                        height: Math.random() * 4 + 2,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -100],
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5,
                    }}
                />
            ))}


            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center p-8 lg:p-12">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-lg w-full backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden"
                >
                    {/* Pulsing Ring Decoration */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute -top-10 -right-10 w-32 h-32 border-2 border-white/20 rounded-full"
                    />

                    {/* Logo Section */}
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md border border-white/30">
                            <Activity className="text-white w-8 h-8" />
                        </div>
                        <span className="text-white text-3xl font-bold tracking-tight">Health Nova</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-5xl lg:text-5xl font-bold text-white leading-tight mb-6"
                    >
                        Predict Early,<br />
                        <span className="text-white/90">Stay Healthy</span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg text-blue-50 mb-10 leading-relaxed font-medium"
                    >
                        Your health insights powered by advanced AI. Take control of your wellness journey with precision and privacy.
                    </motion.p>

                    {/* Feature Pills */}
                    <div className="space-y-4">
                        {[
                            { icon: ShieldCheck, text: "Private & Secure" },
                            { icon: Zap, text: "Instant AI Analysis" },
                            { icon: TrendingUp, text: "Track Over Time" }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.6 + (index * 0.1) }}
                                className="flex items-center gap-3 bg-white/10 border border-white/10 rounded-2xl p-3 w-fit pr-6 backdrop-blur-md hover:bg-white/20 transition-colors"
                            >
                                <div className="bg-white/20 p-1.5 rounded-full text-white">
                                    <feature.icon size={16} strokeWidth={3} />
                                </div>
                                <span className="text-white font-medium">{feature.text}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Heartbeat Animation Bottom Left */}
                    <div className="absolute bottom-6 right-6 opacity-30">
                        <Heart className="text-white w-12 h-12" />
                    </div>

                </motion.div>
            </div>
        </div>
    );
}
