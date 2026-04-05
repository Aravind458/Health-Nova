"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
    className?: string;
}

export function ProgressBar({ currentStep, totalSteps, className }: ProgressBarProps) {
    const progress = (currentStep / totalSteps) * 100;

    return (
        <div className={cn("w-full max-w-xl mx-auto mb-8", className)}>
            <div className="flex justify-between text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">
                <span>Progress</span>
                <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="h-full bg-linear-to-r from-blue-500 to-teal-400 rounded-full"
                />
            </div>
        </div>
    );
}
