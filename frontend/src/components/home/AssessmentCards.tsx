"use client";

import Link from "next/link";
import { ArrowRight, Heart, Droplets, Activity, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const assessments = [
    {
        id: "heart",
        title: "Heart Disease",
        description: "Analyze cardiovascular risk factors using biomarkers.",
        href: "/assess/heart",
        icon: Heart,
        theme: {
            gradient: "from-red-500 to-pink-500",
            shadow: "shadow-red-500/20",
            border: "group-hover:border-red-500",
            glow: "group-hover:shadow-red-500/20",
            iconGlow: "shadow-red-500/40",
            text: "text-red-600",
        },
    },
    {
        id: "diabetes",
        title: "Diabetes",
        description: "Evaluate risk based on glucose, insulin, and BMI.",
        href: "/assess/diabetes",
        icon: Droplets,
        theme: {
            gradient: "from-blue-500 to-cyan-500",
            shadow: "shadow-blue-500/20",
            border: "group-hover:border-blue-500",
            glow: "group-hover:shadow-blue-500/20",
            iconGlow: "shadow-blue-500/40",
            text: "text-blue-600",
        },
    },
    {
        id: "kidney",
        title: "Kidney Disease",
        description: "Assess renal function using specific gravity and other metrics.",
        href: "/assess/kidney",
        icon: Activity,
        theme: {
            gradient: "from-purple-500 to-violet-500",
            shadow: "shadow-purple-500/20",
            border: "group-hover:border-purple-500",
            glow: "group-hover:shadow-purple-500/20",
            iconGlow: "shadow-purple-500/40",
            text: "text-purple-600",
        },
    },
    {
        id: "liver",
        title: "Liver Disease",
        description: "Check liver health indicators including Bilirubin and SGOT.",
        href: "/assess/liver",
        icon: Stethoscope,
        theme: {
            gradient: "from-orange-500 to-amber-500",
            shadow: "shadow-orange-500/20",
            border: "group-hover:border-orange-500",
            glow: "group-hover:shadow-orange-500/20",
            iconGlow: "shadow-orange-500/40",
            text: "text-orange-600",
        },
    },

];

export function AssessmentCards() {
    return (
        <section id="assessments" className="relative py-32 bg-linear-to-b from-white to-[#F8FAFC]">

            {/* Top Gradient Mask for Seamless Transition */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-linear-to-b from-white via-white/80 to-transparent pointer-events-none z-10" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-20">

                {/* Section Header */}
                <motion.div
                    className="mx-auto max-w-2xl text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 font-display mb-4">
                        Choose an Assessment
                    </h2>
                    <p className="text-lg leading-8 text-gray-600">
                        Select a health condition to evaluate your risk factors.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {assessments.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                href={item.href}
                                className="group relative flex flex-col h-full"
                            >
                                <div
                                    className={cn(
                                        "flex flex-col h-full rounded-2xl bg-white p-8 transition-all duration-300 border border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.06)]",
                                        "hover:-translate-y-3 hover:shadow-[0_24px_48px_rgba(0,0,0,0.12)]",
                                        item.theme.border
                                    )}
                                >
                                    {/* Icon Circle */}
                                    <div
                                        className={cn(
                                            "mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6",
                                            item.theme.gradient,
                                            item.theme.iconGlow
                                        )}
                                    >
                                        <item.icon className="h-8 w-8" aria-hidden="true" />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-900 transition-colors">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 flex-auto text-sm leading-6 text-gray-600 line-clamp-2">
                                        {item.description}
                                    </p>

                                    <div className="mt-8 flex items-center text-blue-600 font-semibold text-sm transition-all duration-300 group-hover:gap-2">
                                        Start Assessment
                                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>

                                    {/* Subtle Overlay on Hover */}
                                    <div className={cn(
                                        "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none bg-current",
                                        item.theme.text
                                    )} />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Gradient Mask for Seamless Transition */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#F8FAFC] to-transparent pointer-events-none z-10" />
        </section>
    );
}
