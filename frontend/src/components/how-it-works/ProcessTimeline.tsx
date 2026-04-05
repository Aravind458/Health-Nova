"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, BrainCircuit, FileText, CheckCircle2 } from "lucide-react";

const iconMap: any = {
    ClipboardCheck,
    BrainCircuit,
    FileText
};

interface TimelineStep {
    id: number;
    title: string;
    description: string;
    icon: string;
    features: string[];
}

interface ProcessTimelineProps {
    steps?: TimelineStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
    // Fallback or loading state handled by parent or default empty
    if (!steps) return null;
    return (
        <section id="process" className="py-24 bg-white relative">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header */}
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        The Assessment Process
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        From input to insights in three simple steps
                    </motion.p>
                </div>

                {/* Vertical Zig-Zag Timeline */}
                <div className="relative">
                    {/* Central Vertical Line (Desktop only) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2" />

                    <div className="space-y-24">
                        {steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className={`flex flex-col md:flex-row items-center gap-8 md:gap-24 ${!isEven ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Content Card */}
                                    <div className="flex-1 w-full relative z-10 group">
                                        <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,102,204,0.1)] hover:border-blue-100 hover:-translate-y-2 transition-all duration-300">
                                            {/* Header with Icon and Badge */}
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="p-4 bg-blue-50 rounded-2xl text-blue-600">
                                                    {(() => {
                                                        const IconComponent = iconMap[step.icon];
                                                        return IconComponent ? <IconComponent size={32} strokeWidth={1.5} /> : null;
                                                    })()}
                                                </div>
                                                <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-cyan-400 text-white font-bold text-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                                                    {step.id}
                                                </div>
                                            </div>

                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                            <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>

                                            <ul className="space-y-3">
                                                {step.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                                                        <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Timeline Connector Dot (Desktop) */}
                                    <div className="hidden md:flex flex-col items-center justify-center shrink-0 w-12 relative z-10">
                                        <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-md ring-4 ring-blue-50" />
                                    </div>

                                    {/* Spacer for the other side (Desktop) */}
                                    <div className="hidden md:block flex-1" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
