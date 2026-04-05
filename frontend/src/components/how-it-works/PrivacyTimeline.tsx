"use client";

import { motion } from "framer-motion";
import { User, Lock, Cpu, FileCheck, Trash2 } from "lucide-react";

const steps = [
    {
        title: "You Enter Data",
        description: "When you fill out an assessment form, your data is immediately encrypted in your browser using industry-standard encryption before transmission.",
        icon: User,
    },
    {
        title: "Encrypted Transmission",
        description: "Your encrypted data travels over secure channels to our servers. We use certificate pinning and perfect forward secrecy to prevent interception.",
        icon: Lock,
    },
    {
        title: "In-Memory Processing",
        description: "Your data is loaded into server memory (RAM) for milliseconds while our AI models make predictions. It never touches a hard drive or database.",
        icon: Cpu,
    },
    {
        title: "Results Delivered",
        description: "Your results are encrypted and sent back to your browser. Only you can see them. We don't save or log any results.",
        icon: FileCheck,
    },
    {
        title: "Data Deleted Forever",
        description: "Once your browser receives the results, all traces of your data are wiped from our servers. It's as if you were never there.",
        icon: Trash2,
    },
];

export function PrivacyTimeline() {
    return (
        <section id="privacy" className="py-24 bg-linear-to-b from-white to-blue-50 relative">
            <div className="container mx-auto px-4 max-w-4xl">

                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 font-semibold text-sm mb-4">
                        Your Privacy Matters
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        How We Protect Your Health Data
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Transparency and security are non-negotiable when it comes to your health information
                    </p>
                </div>

                <div className="relative pl-8 md:pl-0">
                    {/* Vertical Line */}
                    <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-blue-200 md:-translate-x-1/2 dashed" />

                    <div className="space-y-12">
                        {steps.map((step, index) => {
                            const isOdd = index % 2 !== 0;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5 }}
                                    className={`flex flex-col md:flex-row items-center gap-8 ${isOdd ? 'md:flex-row-reverse' : ''} relative`}
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full md:-translate-x-1/2 z-10 shadow-sm" style={{ top: '1.75rem' }} />

                                    {/* Content Card */}
                                    <div className={`w-full md:w-[calc(50%-2rem)] ${!isOdd ? 'md:text-right' : 'md:text-left'} ml-12 md:ml-0`}>
                                        <div className={`bg-white p-6 rounded-xl border-l-4 ${isOdd ? 'border-l-blue-500' : 'md:border-l-0 md:border-r-4 md:border-r-blue-500'} shadow-sm hover:shadow-md transition-shadow`}>
                                            <div className={`flex items-center gap-4 mb-3 ${!isOdd ? 'md:flex-row-reverse' : ''}`}>
                                                <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                                                    <step.icon size={20} />
                                                </div>
                                                <h3 className="font-bold text-gray-900 text-lg">{step.title}</h3>
                                            </div>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Spacer */}
                                    <div className="hidden md:block w-[calc(50%-2rem)]" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Guarantee Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
                    {[
                        { label: "SSL Cert", icon: "🔒" },
                        { label: "No Logs", icon: "🚫" },
                        { label: "HIPAA Style", icon: "✓" },
                        { label: "GDPR Ready", icon: "🌍" },
                    ].map((badge, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-full aspect-square flex flex-col items-center justify-center shadow-md border border-gray-100 w-32 h-32 mx-auto"
                        >
                            <span className="text-4xl mb-2">{badge.icon}</span>
                            <span className="font-bold text-gray-700 text-sm">{badge.label}</span>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
