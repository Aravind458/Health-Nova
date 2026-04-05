"use client";

import { motion } from "framer-motion";

export function HealthOverviewCard() {
    return (
        <motion.div
            className="health-overview-card-float relative rounded-3xl bg-white/70 shadow-2xl ring-1 ring-gray-900/5 backdrop-blur-xl p-8 border border-white/60"
            whileHover={{
                rotateY: 5,
                rotateX: -5,
                scale: 1.02,
                boxShadow: '0 30px 60px rgba(0, 102, 204, 0.2)'
            }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            {/* Card Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <motion.h3
                        className="text-lg font-bold text-gray-900"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                    >
                        Health Risk Overview
                    </motion.h3>
                    <motion.span
                        className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mt-1"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.9 }}
                    >
                        Real-time analysis
                    </motion.span>
                </div>
                {/* Mac-style dots */}
                <motion.div className="flex gap-1.5">
                    {['bg-red-400', 'bg-amber-400', 'bg-green-400'].map((color, i) => (
                        <motion.div
                            key={color}
                            className={`h-3 w-3 rounded-full ${color}`}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.2, delay: 0.95 + i * 0.05, type: 'spring' }}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Heartbeat Animation */}
            <div className="mb-8 relative h-24 w-full bg-blue-50/50 rounded-xl overflow-hidden border border-blue-100 flex items-center justify-center">
                <svg viewBox="0 0 400 100" className="w-full h-full heartbeat-svg-pulse px-4">
                    <defs>
                        <linearGradient id="heartbeat-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3B82F6" />
                            <stop offset="100%" stopColor="#06B6D4" />
                        </linearGradient>
                    </defs>
                    <motion.path
                        d="M 0,50 L 80,50 L 100,30 L 110,70 L 120,40 L 140,50 L 400,50"
                        stroke="url(#heartbeat-gradient)"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 1.3, ease: 'easeInOut' }}
                    />
                    <motion.circle
                        r="4"
                        fill="#3B82F6"
                        initial={{ offsetDistance: '0%', opacity: 0 }}
                        animate={{ offsetDistance: '100%', opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 1.2, delay: 1.3, ease: 'easeInOut' }}
                        style={{ offsetPath: 'path("M 0,50 L 80,50 L 100,30 L 110,70 L 120,40 L 140,50 L 400,50")' }}
                    />
                </svg>
            </div>

            {/* Risk Items List */}
            <div className="space-y-4">
                {[
                    { name: "Heart Health", risk: "Low Risk", color: "bg-green-500", text: "text-green-700", bg: "bg-green-50" },
                    { name: "Diabetes Risk", risk: "Moderate", color: "bg-amber-500", text: "text-amber-700", bg: "bg-amber-50" },
                    { name: "Kidney Function", risk: "Low Risk", color: "bg-green-500", text: "text-green-700", bg: "bg-green-50" }
                ].map((item, index) => (
                    <motion.div
                        key={item.name}
                        className="flex items-center justify-between p-3 rounded-lg border border-gray-100 bg-gray-50/50 hover:bg-white transition-colors"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 1.5 + index * 0.15 }}
                    >
                        <div className="flex items-center gap-3">
                            <motion.div
                                className={`status-dot-pulse h-2.5 w-2.5 rounded-full ${item.color}`}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3, delay: 1.55 + index * 0.15 }}
                            />
                            <span className="text-sm font-medium text-gray-700">{item.name}</span>
                        </div>
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.bg} ${item.text}`}>{item.risk}</span>
                    </motion.div>
                ))}
            </div>

            {/* Live Indicator */}
            <motion.div
                className="absolute top-4 right-4 flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-100"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.8 }}
            >
                <div className="relative flex h-2.5 w-2.5">
                    <span className="live-ring absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </div>
                <span className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">LIVE</span>
            </motion.div>

        </motion.div>
    );
}
