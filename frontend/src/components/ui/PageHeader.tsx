"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
    title: string;
    description: string;
    icon: LucideIcon;
    accentColor: string; // e.g., "text-red-500" or hex if inline style
    iconBgColor?: string; // e.g., "bg-red-50"
    className?: string;
}

export function PageHeader({
    title,
    description,
    icon: Icon,
    accentColor,
    iconBgColor = "bg-gray-50",
    className
}: PageHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn("flex flex-col items-center text-center mb-10", className)}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={cn(
                    "h-16 w-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm",
                    iconBgColor
                )}
            >
                <Icon className={cn("h-8 w-8", accentColor)} />
            </motion.div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display mb-4">
                {title}
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}
