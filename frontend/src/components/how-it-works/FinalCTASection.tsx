"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
    return (
        <section className="py-24 bg-linear-to-br from-blue-600 to-teal-500 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center text-white">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                >
                    Ready to Assess Your Health?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-white/90 mb-10 max-w-2xl mx-auto"
                >
                    Get instant AI-powered risk insights in under 5 minutes. No sign-up required.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Link href="/#assessments">
                        <button className="bg-white text-blue-600 font-bold text-lg py-5 px-10 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto group">
                            Start Your Free Assessment
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>

                    <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-medium text-blue-50/80">
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white" />
                            Takes 3-5 minutes
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white" />
                            Completely private
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white" />
                            No account needed
                        </span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
