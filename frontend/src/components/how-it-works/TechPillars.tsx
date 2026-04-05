"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Database, Zap, ShieldCheck } from "lucide-react";

export function TechPillars() {
    const pillars = [
        {
            title: "Dual-Model AI Architecture",
            icon: BrainCircuit,
            description: "We employ two complementary machine learning algorithms (KNN and SVM) to maximize accuracy and reduce false predictions. When both models agree, confidence is higher.",
            techDetails: {
                Algorithm: "KNN (k=5) + SVM (RBF)",
                Training: "10,000+ validated cases",
                Accuracy: "89-94%"
            }
        },
        {
            title: "Validated Data Sources",
            icon: Database,
            description: "Our models are trained exclusively on peer-reviewed, publicly available medical datasets that have been validated by medical institutions and used in thousands of research papers.",
            techDetails: {
                Sources: "UCI ML Repo, ILPD",
                Records: "15,000+ total cases",
                Updates: "Quarterly retraining"
            }
        },
        {
            title: "Instant Analysis",
            icon: Zap,
            description: "Unlike traditional health assessments that require lab processing time, Health Nova delivers results in under 3 seconds using edge computing and optimized inference.",
            techDetails: {
                Response: "< 2.3 seconds",
                Inference: "< 500ms",
                Uptime: "99.9% SLA"
            }
        },
        {
            title: "Zero-Storage Privacy",
            icon: ShieldCheck,
            description: "Your health data never touches our databases. We've architected Health Nova with privacy as the foundation: stateless processing and immediate data discarding.",
            techDetails: {
                Encryption: "TLS 1.3, AES-256",
                Retention: "0 seconds (none)",
                Logs: "Anonymized only"
            }
        }
    ];

    return (
        <section id="technology" className="py-24 bg-linear-to-b from-slate-50 to-white relative">
            {/* Top Blur Transition */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-white to-transparent" />

            <div className="container mx-auto px-4 max-w-6xl relative z-10">

                <div className="text-center mb-20">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
                        The Technology
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Built on Proven AI & Medical Science
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Our platform combines cutting-edge machine learning with validated medical datasets
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -6 }}
                            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-blue-200 transition-all duration-300"
                        >
                            <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                <pillar.icon size={32} />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {pillar.description}
                            </p>

                            <div className="bg-gray-50 rounded-lg p-4 font-mono text-xs text-gray-500 border border-gray-100">
                                <ul className="space-y-1.5">
                                    {Object.entries(pillar.techDetails).map(([key, value]) => (
                                        <li key={key} className="flex justify-between">
                                            <span className="font-semibold">{key}:</span>
                                            <span>{value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
