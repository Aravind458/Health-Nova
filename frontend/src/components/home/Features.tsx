"use client";

import { Zap, ShieldCheck, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        name: 'Real-time AI',
        description: 'Instant analysis using pre-trained machine learning models.',
        icon: Zap,
    },
    {
        name: 'Private & Secure',
        description: 'Your data is processed securely and not stored permanently.',
        icon: ShieldCheck,
    },
    {
        name: 'Medical Grade',
        description: 'Based on validated datasets and medical research parameters.',
        icon: GraduationCap,
    },
];

export function Features() {
    return (
        <section className="relative py-32 bg-linear-to-b from-[#F8FAFC] to-white">

            {/* Top Gradient Mask */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-[#F8FAFC] to-transparent pointer-events-none z-10" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-20">

                <motion.div
                    className="mx-auto max-w-2xl lg:text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 mb-4">
                        Better Insights
                    </div>
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 font-display">
                        Why use Health Nova?
                    </h2>
                </motion.div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.name}
                                className="flex flex-col bg-white p-8 rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 border-none"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                            >
                                <dt className="flex flex-col gap-y-6 text-xl font-semibold leading-7 text-gray-900 mb-4">
                                    <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
                                        <feature.icon className="h-7 w-7" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-relaxed text-gray-600">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </motion.div>
                        ))}
                    </dl>
                </div>
            </div>

            {/* Bottom Gradient Mask */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent pointer-events-none z-10" />
        </section>
    )
}
