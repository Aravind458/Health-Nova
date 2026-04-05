"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Activity, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
    { name: 'About', href: '/how-it-works' },
    { name: 'Privacy', href: '/how-it-works#privacy' },
    { name: 'Disclaimer', href: '/how-it-works#faq' },
    { name: 'Contact', href: '#', isContact: true },
];

export function Footer() {
    return (
        <footer className="relative bg-linear-to-b from-white to-gray-50 pt-20 pb-12 overflow-hidden">
            {/* Top Fade Border */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-white via-white/80 to-transparent pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent opacity-50" />

            {/* Optional Background Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
                <BackgroundParticles />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 text-center">

                {/* Hero Logo Section */}
                <div className="flex flex-col items-center justify-center mb-12 group cursor-default">
                    {/* Icon */}
                    <motion.div
                        className="relative mb-6"
                        whileHover={{ scale: 1.05, rotate: 360 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full scale-150 group-hover:bg-blue-500/50 transition-all duration-500" />

                        <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-white shadow-xl shadow-blue-500/10 flex items-center justify-center border border-blue-50">
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Activity className="h-10 w-10 md:h-12 md:w-12 text-blue-600" />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Brand Text */}
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                        <span className="bg-linear-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                            Health Nova
                        </span>
                    </h2>

                    {/* Taglines */}
                    <div className="space-y-1">
                        <p className="text-lg md:text-xl font-medium text-gray-700">
                            AI-Powered Health Insights
                        </p>
                        <p className="text-sm md:text-base text-gray-500 font-light">
                            Making healthcare accessible for all
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full max-w-[200px] h-px mx-auto bg-linear-to-r from-transparent via-gray-300 to-transparent mb-12" />

                {/* Navigation */}
                <nav className="flex flex-wrap justify-center items-center gap-x-2 gap-y-4 mb-8">
                    {navigation.map((item, index) => (
                        <div key={item.name} className="flex items-center">
                            {item.isContact ? (
                                <ContactPopup />
                            ) : (
                                <Link
                                    href={item.href}
                                    className="group relative px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
                                >
                                    {item.name}
                                    <span className="absolute inset-x-0 bottom-1 h-px bg-blue-600 scale-x-0 transition-transform group-hover:scale-x-100 origin-center" />
                                </Link>
                            )}
                            {index < navigation.length - 1 && (
                                <span className="text-gray-300 hidden sm:inline-block">•</span>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Copyright */}
                <p className="text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Health Nova. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

function ContactPopup() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative inline-block text-left"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 focus:outline-hidden"
            >
                Contact
                <span className="absolute inset-x-0 bottom-1 h-px bg-blue-600 scale-x-0 transition-transform group-hover:scale-x-100 origin-center" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute bottom-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 w-64 rounded-2xl bg-white p-3 shadow-[0_10px_40px_rgba(0,0,0,0.1)] ring-1 ring-gray-200/50 z-50 text-center"
                    >
                        {/* Tooltip triangle arrow */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-b border-r border-gray-200/50" />

                        <div className="relative space-y-1 bg-white rounded-xl">
                            <a href="mailto:support@healthnova.com" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors group/item">
                                <div className="bg-blue-100 p-2 rounded-lg group-hover/item:bg-blue-200 transition-colors">
                                    <Mail size={16} className="text-blue-600" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Email Us</div>
                                    <div className="text-sm font-semibold">support@healthnova.com</div>
                                </div>
                            </a>

                            <div
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 text-gray-700 hover:text-green-600 transition-colors group/item cursor-pointer"
                                onClick={() => window.location.href = "tel:+15551234567"}
                            >
                                <div className="bg-green-100 p-2 rounded-lg group-hover/item:bg-green-200 transition-colors">
                                    <Phone size={16} className="text-green-600" />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">Call Us</div>
                                    <div className="text-sm font-semibold">+1 (555) 123-4567</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function BackgroundParticles() {
    // Determine random values only on client-side to avoid hydration mismatch
    const [particleData, setParticleData] = useState<any[]>([]);

    useEffect(() => {
        const particles = [...Array(6)].map((_, i) => ({
            id: i,
            width: Math.random() * 200 + 100,
            height: Math.random() * 200 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: Math.random() * 10 + 15,
        }));
        setParticleData(particles);
    }, []);

    if (particleData.length === 0) return null;

    return (
        <>
            {particleData.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute bg-blue-400/10 rounded-full blur-xl"
                    style={{
                        width: p.width,
                        height: p.height,
                        left: p.left,
                        top: p.top,
                    }}
                    animate={{
                        y: [0, -50, 0],
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </>
    );
}
