"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function ScienceExplanation() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">

                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Understanding the Models
                    </h2>
                    <p className="text-lg text-gray-600">
                        A non-technical explanation of how our AI works
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* KNN Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white border-2 border-gray-100 rounded-2xl p-8 md:p-10 shadow-[0_6px_24px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-gray-900">K-Nearest Neighbors</h3>
                            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                Model 1
                            </span>
                        </div>

                        {/* Simple Visual Representation */}
                        <div className="h-48 bg-slate-50 rounded-xl mb-8 flex items-center justify-center relative overflow-hidden border border-slate-100">
                            {/* Simplified scatter plot visual */}
                            <div className="absolute w-3 h-3 bg-red-500 rounded-full top-1/4 left-1/4" />
                            <div className="absolute w-3 h-3 bg-red-500 rounded-full top-1/3 left-1/3" />
                            <div className="absolute w-3 h-3 bg-blue-500 rounded-full bottom-1/4 right-1/4" />
                            <div className="absolute w-3 h-3 bg-blue-500 rounded-full bottom-1/3 right-1/3" />

                            {/* The "New Point" */}
                            <div className="w-4 h-4 bg-purple-600 rounded-full z-10 shadow-lg ring-4 ring-purple-100 animate-pulse" />

                            {/* Connection lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                <line x1="50%" y1="50%" x2="33%" y2="33%" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />
                                <line x1="50%" y1="50%" x2="66%" y2="66%" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="4 4" />
                            </svg>
                        </div>

                        <div className="mb-8">
                            <h4 className="font-semibold text-gray-900 mb-2">How It Works</h4>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Imagine asking your 5 closest neighbors about a local event. If 4 of them are going, you probably will too. KNN looks at your health profile and finds the most similar validated cases in our database to predict your risk.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h4 className="font-semibold text-gray-900 mb-3">Strengths</h4>
                            <ul className="space-y-2">
                                {[
                                    "Excellent for rare or unusual cases",
                                    "Handles complex, non-linear patterns",
                                    "Transparent decision making",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                        <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                            <span className="font-semibold text-gray-700">Accuracy</span>
                            <div className="flex items-center gap-3">
                                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[91%]" />
                                </div>
                                <span className="font-bold text-blue-600">~91%</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* SVM Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white border-2 border-gray-100 rounded-2xl p-8 md:p-10 shadow-[0_6px_24px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-gray-900">Support Vector Machine</h3>
                            <span className="bg-teal-100 text-teal-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                Model 2
                            </span>
                        </div>

                        {/* Simple Visual Representation */}
                        <div className="h-48 bg-slate-50 rounded-xl mb-8 flex items-center justify-center relative overflow-hidden border border-slate-100">
                            {/* Simplified decision boundary visual */}
                            <div className="absolute inset-0 bg-linear-to-tr from-red-50 to-blue-50 opacity-50" />

                            {/* The "Hyperplane" */}
                            <div className="absolute inset-0 border-r border-gray-400 rotate-45 transform origin-center scale-150" />

                            <div className="absolute w-3 h-3 bg-red-500 rounded-sm top-1/4 left-1/4" />
                            <div className="absolute w-3 h-3 bg-blue-500 rounded-sm bottom-1/4 right-1/4" />

                            {/* The "New Point" */}
                            <div className="w-4 h-4 bg-purple-600 rounded-sm z-10 shadow-lg ring-4 ring-purple-100 absolute top-1/3 left-1/3" />
                        </div>

                        <div className="mb-8">
                            <h4 className="font-semibold text-gray-900 mb-2">How It Works</h4>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                SVM creates an imaginary 'decision boundary' in multi-dimensional space. Think of it like drawing a line on a map that separates two territories. Your health data is plotted on this map, and SVM determines which side of the line you fall on.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h4 className="font-semibold text-gray-900 mb-3">Strengths</h4>
                            <ul className="space-y-2">
                                {[
                                    "Excellent for clear-cut risk categorization",
                                    "Handles high-dimensional medical data",
                                    "Resistant to outliers and noise",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                        <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                            <span className="font-semibold text-gray-700">Accuracy</span>
                            <div className="flex items-center gap-3">
                                <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-teal-500 w-[94%]" />
                                </div>
                                <span className="font-bold text-teal-600">~94%</span>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Why Both Models? Callout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6 md:p-8 max-w-3xl mx-auto"
                >
                    <h4 className="text-lg font-bold text-blue-900 mb-2">Why use two models instead of one?</h4>
                    <p className="text-blue-800 leading-relaxed text-sm md:text-base">
                        Using both KNN and SVM gives you a second opinion. When both models agree, you can be more confident in the result. When they disagree slightly, we show you both predictions so you can make informed decisions. This dual-model approach significantly reduces false positives and negatives.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
