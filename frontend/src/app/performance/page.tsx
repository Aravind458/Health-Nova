"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import {
    Activity,
    CheckCircle2,
    AlertCircle,
    TrendingUp,
    ShieldCheck,
    Database,
    BrainCircuit,
    Cpu,
    Zap,
    Users,
    ChevronDown,
    Loader2
} from "lucide-react";
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { fetchPerformanceMetrics } from "@/lib/api";

export default function PerformancePage() {
    const [activeTab, setActiveTab] = useState("heart");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [performanceData, setPerformanceData] = useState<any>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchPerformanceMetrics();
                setPerformanceData(data);
                // Set active tab to first condition if available
                if (data.conditions && data.conditions.length > 0) {
                    setActiveTab(data.conditions[0].id);
                }
            } catch (err) {
                setError("Failed to load performance metrics.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
                <Navbar />
                <div className="grow flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <Loader2 className="h-10 w-10 text-blue-600 animate-spin" />
                        <p className="text-gray-500 font-medium">Loading Model Metrics...</p>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    if (error || !performanceData) {
        return (
            <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
                <Navbar />
                <div className="grow flex items-center justify-center">
                    <div className="text-center space-y-4">
                        <div className="bg-red-100 p-4 rounded-full mx-auto w-fit">
                            <AlertCircle className="h-8 w-8 text-red-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900">Unable to Load Data</h2>
                        <p className="text-gray-600">{error || "Please try again later."}</p>
                        <button onClick={() => window.location.reload()} className="text-blue-600 hover:underline font-medium">
                            Retry
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    const { overall, conditions, comparison } = performanceData;

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Navbar />

            <main className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-1 w-full relative">
                <Breadcrumb items={[{ label: "Performance" }]} />

                <div className="space-y-20 mt-8">
                    {/* Hero Section */}
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                                Model Performance & <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">Transparency</span>
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We believe in black-box AI for privacy, but <span className="font-semibold text-gray-900">glass-box AI</span> for trust.
                                Explore our rigorous validation metrics, training methodologies, and limitations openly.
                            </p>
                        </motion.div>
                    </div>

                    {/* Quick Stats Dashboard */}
                    <motion.div
                        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        <StatCard
                            label="Overall Accuracy"
                            value={`${overall.accuracy}%`}
                            icon={CheckCircle2}
                            color="text-green-600 bg-green-50"
                            trend="+1.2% vs v1.0"
                        />
                        <StatCard
                            label="Total Predictions"
                            value={overall.predictions}
                            icon={BrainCircuit}
                            color="text-blue-600 bg-blue-50"
                        />
                        <StatCard
                            label="System Uptime"
                            value={overall.uptime}
                            icon={Zap}
                            color="text-amber-600 bg-amber-50"
                        />
                        <StatCard
                            label="Last Model Update"
                            value={overall.last_update}
                            icon={TrendingUp}
                            color="text-purple-600 bg-purple-50"
                        />
                    </motion.div>

                    {/* Per-Condition Performance Tabs */}
                    <section>
                        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                                <Activity className="h-6 w-6 text-blue-600" />
                                Disease-Specific Metrics
                            </h2>
                            <div className="flex bg-white p-1 rounded-xl shadow-sm border border-gray-100 mt-4 md:mt-0 overflow-x-auto max-w-full">
                                {conditions.map((condition: any) => (
                                    <button
                                        key={condition.id}
                                        onClick={() => setActiveTab(condition.id)}
                                        className={cn(
                                            "px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                                            activeTab === condition.id
                                                ? "bg-blue-600 text-white shadow-md"
                                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                        )}
                                    >
                                        {condition.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden min-h-[500px]">
                            {conditions.map((condition: any) => (
                                activeTab === condition.id && (
                                    <motion.div
                                        key={condition.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="p-8 lg:p-10"
                                    >
                                        <div className="grid lg:grid-cols-3 gap-12">
                                            {/* Left Column: Key Metrics */}
                                            <div className="space-y-8">
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{condition.name} Model</h3>
                                                    <p className="text-sm text-gray-500 font-mono bg-gray-100 inline-block px-2 py-1 rounded-md">{condition.model}</p>
                                                </div>

                                                <div className="space-y-6">
                                                    <MetricBar label="Accuracy" value={condition.accuracy} color="bg-blue-500" />
                                                    <MetricBar label="Sensitivity (Recall)" value={condition.sensitivity} color="bg-cyan-500" tooltip="Ability to correctly identify positive cases" />
                                                    <MetricBar label="Specificity" value={condition.specificity} color="bg-indigo-500" tooltip="Ability to correctly identify negative cases" />
                                                </div>

                                                <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100">
                                                    <h4 className="text-sm font-bold text-blue-800 mb-3 flex items-center gap-2">
                                                        <Database className="h-4 w-4" /> Training Data
                                                    </h4>
                                                    <ul className="space-y-2 text-sm text-blue-700/80">
                                                        <li className="flex justify-between">
                                                            <span>Source:</span> <span className="font-medium">{condition.dataset}</span>
                                                        </li>
                                                        <li className="flex justify-between">
                                                            <span>Size:</span> <span className="font-medium">{condition.training_size}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Middle Column: Confusion Matrix */}
                                            <div className="lg:col-span-1 flex flex-col items-center justify-center">
                                                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Confusion Matrix</h4>

                                                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                                                    <ConfusionBox
                                                        value={condition.confusion_matrix.tp}
                                                        label="True Positive"
                                                        desc="Correctly predicted disease"
                                                        color="bg-green-100 border-green-200 text-green-800"
                                                    />
                                                    <ConfusionBox
                                                        value={condition.confusion_matrix.fp}
                                                        label="False Positive"
                                                        desc="Incorrectly predicted disease"
                                                        color="bg-red-50 border-red-100 text-red-800"
                                                    />
                                                    <ConfusionBox
                                                        value={condition.confusion_matrix.fn}
                                                        label="False Negative"
                                                        desc="Missed actual disease"
                                                        color="bg-red-50 border-red-100 text-red-800"
                                                    />
                                                    <ConfusionBox
                                                        value={condition.confusion_matrix.tn}
                                                        label="True Negative"
                                                        desc="Correctly predicted healthy"
                                                        color="bg-green-100 border-green-200 text-green-800"
                                                    />
                                                </div>
                                                <p className="text-xs text-gray-400 mt-4 text-center max-w-xs">
                                                    *Values representative of validation set performance
                                                </p>
                                            </div>

                                            {/* Right Column: Top Features */}
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Top Predictive Features</h4>
                                                <div className="space-y-4">
                                                    {condition.features.map((feature: string, idx: number) => (
                                                        <div key={idx} className="relative">
                                                            <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                                                                <span>{feature}</span>
                                                                <span className="text-gray-400">#{idx + 1}</span>
                                                            </div>
                                                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                                                <motion.div
                                                                    className="h-full bg-linear-to-r from-blue-400 to-cyan-400 rounded-full"
                                                                    initial={{ width: 0 }}
                                                                    animate={{ width: `${100 - (idx * 15)}%` }}
                                                                    transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </div>
                    </section>

                    {/* Transparency & Model Comparison */}
                    <section className="grid lg:grid-cols-2 gap-12">
                        {/* Model Comparison Chart */}
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                                    <Cpu className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Model Showdown: KNN vs SVM</h3>
                            </div>

                            <div className="space-y-6">
                                {comparison.map((item: any, idx: number) => (
                                    <div key={idx} className="space-y-2">
                                        <div className="flex justify-between items-end">
                                            <span className="text-sm font-semibold text-gray-700">{item.metric}</span>
                                            <span className="text-xs font-bold px-2 py-0.5 rounded bg-gray-100 text-gray-600">Winner: {item.winner}</span>
                                        </div>
                                        <div className="h-8 w-full bg-gray-50 rounded-md relative flex overflow-hidden">
                                            {/* KNN Bar */}
                                            <motion.div
                                                className="h-full bg-blue-400 flex items-center justify-start px-2 text-[10px] font-bold text-white/90"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${item.knn}%` }}
                                                transition={{ duration: 1, delay: idx * 0.1 }}
                                            >
                                                KNN
                                            </motion.div>
                                            {/* SVM Bar */}
                                            <motion.div
                                                className="h-full bg-cyan-500 absolute top-0 left-0 flex items-center justify-end px-2 text-[10px] font-bold text-white/90"
                                                initial={{ width: 0 }}
                                                style={{ left: `${item.knn}%` }}
                                                animate={{ width: `${item.svm}%` }}
                                            />
                                        </div>
                                        {/* Corrected Visual for Comparison */}
                                        <div className="flex gap-2 h-3 w-full">
                                            <motion.div
                                                className="h-full rounded-full bg-blue-400"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${item.knn}%` }}
                                                transition={{ duration: 1 }}
                                            />
                                            <motion.div
                                                className="h-full rounded-full bg-purple-500"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${item.svm}%` }}
                                                transition={{ duration: 1 }}
                                            />
                                        </div>
                                        <div className="flex justify-between text-xs text-gray-400 px-1">
                                            <span>KNN ({item.knn})</span>
                                            <span>SVM ({item.svm})</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Transparency Section */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparency & Limitations</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We believe transparency is critical in healthcare AI. Our models are powerful tools, but they are statistical predictions, not medical diagnoses.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <TransparencyCard
                                    type="success"
                                    title="What We Do Well"
                                    items={[
                                        "High sensitivity in identifying at-risk patterns",
                                        "Instant analysis of complex multi-variable data",
                                        "Privacy-first processing (no data storage)"
                                    ]}
                                />
                                <TransparencyCard
                                    type="warning"
                                    title="Where We Have Limitations"
                                    items={[
                                        "Can produce false positives (flagging healthy as risk)",
                                        "Dependent on accuracy of user-input data",
                                        "Not a replacement for bloodwork or imaging"
                                    ]}
                                />
                            </div>
                        </div>
                    </section>

                    {/* Final CTA */}
                    <div className="text-center pt-10 border-t border-gray-100 mb-8">
                        <p className="text-gray-500 mb-6">Ready to see these models in action?</p>
                        <a href="/#assessments" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full shadow-lg hover:bg-blue-700 hover:shadow-blue-500/30 hover:-translate-y-1">
                            Try an Assessment Now
                        </a>
                    </div>

                </div>

            </main>
            <Footer />
        </div>
    );
}

// Sub-components

function StatCard({ label, value, icon: Icon, color, trend }: any) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${color}`}>
                <Icon className="h-5 w-5" />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
            <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{label}</div>
            {trend && <div className="text-xs text-green-600 font-semibold mt-2">{trend}</div>}
        </div>
    );
}

function MetricBar({ label, value, color, tooltip }: any) {
    return (
        <div>
            <div className="flex justify-between items-end mb-2">
                <span className="text-sm font-medium text-gray-700 flex items-center gap-1">
                    {label}
                    {tooltip && <InfoTooltip text={tooltip} />}
                </span>
                <span className="text-sm font-bold text-gray-900">{value}%</span>
            </div>
            <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                    className={`h-full rounded-full ${color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${value}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                />
            </div>
        </div>
    );
}

function ConfusionBox({ value, label, desc, color }: any) {
    return (
        <div className={`p-4 rounded-xl border text-center ${color}`}>
            <div className="text-2xl font-bold mb-1">{value}</div>
            <div className="text-xs font-bold uppercase tracking-wider opacity-80">{label}</div>
            <div className="text-[10px] opacity-70 mt-1 leading-tight">{desc}</div>
        </div>
    );
}

function TransparencyCard({ type, title, items }: any) {
    const isSuccess = type === "success";
    return (
        <div className={`p-6 rounded-2xl border ${isSuccess ? "bg-green-50/50 border-green-100" : "bg-orange-50/50 border-orange-100"}`}>
            <h4 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isSuccess ? "text-green-800" : "text-orange-800"}`}>
                {isSuccess ? <ShieldCheck className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
                {title}
            </h4>
            <ul className="space-y-2">
                {items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className={`mt-1 h-1.5 w-1.5 rounded-full shrink-0 ${isSuccess ? "bg-green-500" : "bg-orange-500"}`} />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function InfoTooltip({ text }: { text: string }) {
    return (
        <div className="group relative inline-block cursor-help ml-1">
            <span className="text-gray-400 hover:text-gray-600 transition-colors">
                <AlertCircle className="h-3 w-3" />
            </span>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                {text}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
            </div>
        </div>
    );
}
