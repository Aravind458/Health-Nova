"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { ReactNode } from "react";

// Variants for page transitions
const pageVariants = {
    initial: {
        opacity: 0,
        x: 20,
        scale: 0.99
    },
    animate: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1] as const // Custom easing
        }
    },
    exit: {
        opacity: 0,
        x: -20,
        scale: 0.99,
        transition: {
            duration: 0.3,
            ease: [0.22, 1, 0.36, 1] as const
        }
    }
};

export function PageTransition({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                className="w-full grow flex flex-col"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
