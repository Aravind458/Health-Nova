"use client";

import { motion } from "framer-motion";
import { ShieldAlert, ClipboardList, Apple, ChevronDown, Info } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Recommendations {
    precautions: string[];
    recommendations: string[];
    diet: string[];
    is_fallback?: boolean;
}

interface RiskRecommendationsProps {
    recommendations: Recommendations | null | undefined;
}

const sections = [
    {
        key: "precautions" as const,
        title: "Precautions",
        icon: ShieldAlert,
        color: "text-amber-600",
        bgColor: "bg-amber-50",
        borderColor: "border-amber-200",
        dotColor: "bg-amber-400",
    },
    {
        key: "recommendations" as const,
        title: "Recommendations",
        icon: ClipboardList,
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        dotColor: "bg-blue-400",
    },
    {
        key: "diet" as const,
        title: "Diet & Food Habits",
        icon: Apple,
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
        dotColor: "bg-green-400",
    },
];

export function RiskRecommendations({ recommendations }: RiskRecommendationsProps) {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        precautions: true,
        recommendations: true,
        diet: true,
    });

    if (!recommendations) return null;

    const toggleSection = (key: string) => {
        setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <motion.div
            className="space-y-3 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
            <div className="flex items-center justify-between px-1">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                    {recommendations.is_fallback ? "General Guidance" : "Personalized Guidance"}
                </h3>
            </div>

            {recommendations.is_fallback && (
                <div className="flex items-start gap-3 bg-blue-50/50 text-blue-800 p-4 rounded-xl border border-blue-100 mb-4">
                    <Info className="h-5 w-5 shrink-0 mt-0.5 text-blue-600" />
                    <div className="text-sm leading-relaxed">
                        <span className="font-bold block mb-0.5 text-blue-900">Standard Clinical Guidelines</span>
                        Due to high server load, displaying general medical guidelines for this condition rather than AI-personalized insights.
                    </div>
                </div>
            )}

            {sections.map((section, idx) => {
                const items = recommendations[section.key];
                if (!items || items.length === 0) return null;
                const isOpen = openSections[section.key];

                return (
                    <motion.div
                        key={section.key}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.15 }}
                        className={cn(
                            "rounded-xl border overflow-hidden transition-all",
                            section.borderColor,
                            section.bgColor
                        )}
                    >
                        <button
                            onClick={() => toggleSection(section.key)}
                            className="w-full flex items-center justify-between px-4 py-3 hover:bg-white/40 transition-colors"
                        >
                            <div className="flex items-center gap-2.5">
                                <section.icon className={cn("h-4 w-4", section.color)} />
                                <span className={cn("text-sm font-semibold", section.color)}>
                                    {section.title}
                                </span>
                            </div>
                            <ChevronDown
                                className={cn(
                                    "h-4 w-4 transition-transform duration-200",
                                    section.color,
                                    isOpen && "rotate-180"
                                )}
                            />
                        </button>

                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                transition={{ duration: 0.2 }}
                                className="px-4 pb-3"
                            >
                                <ul className="space-y-2">
                                    {items.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -5 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                            className="flex items-start gap-2 text-xs text-gray-700 leading-relaxed"
                                        >
                                            <span
                                                className={cn(
                                                    "w-1.5 h-1.5 rounded-full mt-1.5 shrink-0",
                                                    section.dotColor
                                                )}
                                            />
                                            {item}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </motion.div>
                );
            })}
        </motion.div>
    );
}
