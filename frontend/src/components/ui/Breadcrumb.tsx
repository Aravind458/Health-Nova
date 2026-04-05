"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn("flex justify-center items-center gap-2 text-sm text-gray-500 font-medium mb-6", className)}
            aria-label="Breadcrumb"
        >
            <Link href="/" className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                <Home size={14} />
                <span className="hidden sm:inline">Home</span>
            </Link>

            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    <ChevronRight size={14} className="text-gray-400" />
                    {item.href ? (
                        <Link href={item.href} className="hover:text-blue-600 transition-colors">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-gray-800 pointer-events-none" aria-current="page">
                            {item.label}
                        </span>
                    )}
                </div>
            ))}
        </motion.nav>
    );
}
