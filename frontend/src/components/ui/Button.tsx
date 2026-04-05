"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { motion, HTMLMotionProps } from "framer-motion";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "btn-primary-pulse bg-linear-to-br from-[#0066CC] to-[#14B8A6] text-white shadow-[0_10px_40px_-10px_rgba(0,102,204,0.4)] hover:shadow-[0_20px_50px_-10px_rgba(0,102,204,0.6)] hover:scale-105 active:scale-98 transition-all duration-200",
                secondary:
                    "bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 hover:bg-white hover:border-blue-500 hover:text-blue-600 hover:scale-105 active:scale-98 transition-all duration-200",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-blue-600 font-semibold underline-offset-4 hover:underline",
            },
            size: {
                default: "h-12 px-8 py-4",
                sm: "h-9 rounded-md px-3",
                lg: "h-14 px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends HTMLMotionProps<"button">,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
}

// Create a motion component from the standard button
const MotionButton = motion.button;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, isLoading, children, ...props }, ref) => {
        const Comp = asChild ? Slot : MotionButton;

        // Define animation props only if it's not a Slot (Slots handle their own refs/props weirdly)
        // Note: The standardized hover/tap scales are now properly handled in CSS/Tailwind classes for better performance
        // or we can keep framer-motion props if strictly needed. 
        // Given constraints and "Universal" specs, we'll lean on the variant classes for the heavy lifting 
        // to ensure consistent visual behavior, but keep motion props for that smooth elastic feel if desired.
        // The user spec says "Hover: Scale 1.05", "Active: Scale 0.98".

        const motionProps = !asChild ? {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.98 },
            transition: { type: "spring", stiffness: 400, damping: 17 }
        } : {};

        if (asChild) {
            return (
                <Comp
                    className={cn(buttonVariants({ variant, size, className }))}
                    ref={ref}
                    {...props as any}
                >
                    {children}
                </Comp>
            );
        }

        return (
            <MotionButton
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                disabled={isLoading || props.disabled}
                {...motionProps as any}
                {...props as any}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </MotionButton>
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
