"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import {
    History as HistoryIcon,
    ArrowRight,
    Heart,
    Activity,
    Droplet,
    AlertCircle,
    CheckCircle2,
    Clock,
    X
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { fetchHistory, fetchAssessmentDetail } from "@/lib/api";
import { RiskRecommendations } from "@/components/ui/RiskRecommendations";
import { motion } from "framer-motion";

interface AssessmentRecord {
    id: string;
    type: string;
    risk_level: string;
    probability: number;
    created_at: string;
    icon: string;
}

export default function HistoryPage() {
    const [history, setHistory] = useState<AssessmentRecord[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [selectedRecord, setSelectedRecord] = useState<AssessmentRecord | null>(null);
    const [detailData, setDetailData] = useState<any>(null);
    const [detailLoading, setDetailLoading] = useState(false);
    const [detailError, setDetailError] = useState<string | null>(null);

    useEffect(() => {
        const loadHistory = async () => {
            setLoading(true);
            try {
                const data = await fetchHistory(page);
                setHistory(data.results || []);
                setTotalPages(Math.max(1, Math.ceil((data.count || 0) / (data.limit || 10))));
            } catch (err: any) {
                if (err.message.includes("No token found") || err.message.includes("401") || err.message.includes("credentials")) {
                    setError("auth_required");
                } else {
                    setError("Failed to load history. Please try again later.");
                }
            } finally {
                setLoading(false);
            }
        };

        loadHistory();
    }, [page]);

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Heart': return <Heart className="h-6 w-6 text-red-500" />;
            case 'Droplet': return <Droplet className="h-6 w-6 text-orange-500" />;
            case 'Activity': return <Activity className="h-6 w-6 text-blue-500" />;
            default: return <Activity className="h-6 w-6 text-gray-500" />;
        }
    };

    const getRiskColor = (risk: string) => {
        const r = risk?.toLowerCase() || "";
        if (r.includes('high') || r.includes('ckd')) return 'bg-red-100 text-red-700 border-red-200';
        if (r.includes('moderate')) return 'bg-amber-100 text-amber-700 border-amber-200';
        return 'bg-green-100 text-green-700 border-green-200';
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
        }).format(date);
    };

    const handleCardClick = async (record: AssessmentRecord) => {
        setSelectedRecord(record);
        setDetailData(null);
        setDetailError(null);
        setDetailLoading(true);
        try {
            const data = await fetchAssessmentDetail(record.type, record.id.split('-')[1]);
            setDetailData(data);
        } catch (err: any) {
            setDetailError("Failed to load details. Please try again.");
        } finally {
            setDetailLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
            <Navbar />

            <main className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex-1 w-full">
                <Breadcrumb items={[{ label: "History" }]} />
                <PageHeader
                    title="Assessment History"
                    description="View your past health assessments and track changes over time."
                    icon={HistoryIcon}
                    accentColor="text-blue-600"
                    iconBgColor="bg-blue-50"
                />

                {loading ? (
                    <div className="mt-12 flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                    </div>
                ) : error === "auth_required" ? (
                    <div className="mt-12 text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
                        <div className="mx-auto w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                            <AlertCircle className="h-10 w-10 text-blue-400" />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">Sign in to view history</h2>
                        <p className="text-gray-500 max-w-md mx-auto mb-8">
                            Create an account or log in to automatically save your health assessments and track them over time.
                        </p>
                        <Button asChild className="rounded-full px-8 py-6 text-base bg-blue-600 hover:bg-blue-700">
                            <Link href="/login">
                                Log In to Your Account <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                ) : error ? (
                    <div className="mt-12 text-center py-20 bg-white rounded-3xl border border-red-100 shadow-sm">
                        <div className="mx-auto w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6">
                            <AlertCircle className="h-10 w-10 text-red-500" />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">Oops! Something went wrong</h2>
                        <p className="text-gray-500 max-w-md mx-auto mb-8">{error}</p>
                    </div>
                ) : history.length === 0 ? (
                    <div className="mt-12 text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
                        <div className="mx-auto w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                            <HistoryIcon className="h-10 w-10 text-gray-400" />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-2">No Assessments Yet</h2>
                        <p className="text-gray-500 max-w-md mx-auto mb-8">
                            Your health assessment history will appear here once you complete your first analysis.
                        </p>
                        <Button asChild className="rounded-full px-8 py-6 text-base bg-blue-600 hover:bg-blue-700">
                            <Link href="/#assessments">
                                Start Your First Assessment <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                ) : (
                    <div className="mt-12 flex flex-col gap-8">
                        <div className="grid gap-6">
                            {history.map((record, index) => (
                                <motion.div
                                    key={record.id}
                                    onClick={() => handleCardClick(record)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer flex flex-col sm:flex-row gap-6 items-start sm:items-center"
                                >
                                    <div className="h-16 w-16 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                                        {getIcon(record.icon)}
                                    </div>

                                    <div className="flex-1 space-y-1">
                                        <h3 className="text-lg font-bold text-gray-900">{record.type}</h3>
                                        <div className="flex items-center text-sm text-gray-500 gap-4">
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {formatDate(record.created_at)}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 w-full sm:w-auto mt-4 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-0 border-gray-100">
                                        <div className="flex flex-col items-start sm:items-end flex-1 sm:flex-none">
                                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Result</span>
                                            <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getRiskColor(record.risk_level)}`}>
                                                {record.risk_level}
                                            </span>
                                        </div>
                                        <div className="flex flex-col items-start sm:items-end flex-1 sm:flex-none">
                                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Confidence</span>
                                            <span className="text-sm font-bold text-gray-700 bg-gray-50 px-3 py-1 rounded-full border border-gray-200">
                                                {(record.probability * 100).toFixed(1)}%
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-6 mt-8">
                                <Button
                                    variant="outline"
                                    onClick={() => setPage(p => Math.max(1, p - 1))}
                                    disabled={page === 1}
                                    className="rounded-full px-6 bg-white shrink-0 shadow-sm border border-gray-200"
                                >
                                    Previous
                                </Button>
                                <span className="text-sm font-medium text-gray-600 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 shrink-0">
                                    Page {page} of {totalPages}
                                </span>
                                <Button
                                    variant="outline"
                                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                                    disabled={page === totalPages}
                                    className="rounded-full px-6 bg-white shrink-0 shadow-sm border border-gray-200"
                                >
                                    Next
                                </Button>
                            </div>
                        )}
                    </div>
                )}

                {/* Modal overlay */}
                {selectedRecord && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
                        >
                            {/* Header */}
                            <div className="sticky top-0 bg-white/90 backdrop-blur-md z-10 p-6 border-b border-gray-100 flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
                                        {getIcon(selectedRecord.icon)}
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900">{selectedRecord.type} Details</h2>
                                        <p className="text-sm text-gray-500">{formatDate(selectedRecord.created_at)}</p>
                                    </div>
                                </div>
                                <button onClick={() => setSelectedRecord(null)} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {detailLoading ? (
                                    <div className="flex justify-center py-12">
                                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
                                    </div>
                                ) : detailError ? (
                                    <div className="bg-red-50 text-red-600 p-4 rounded-xl text-center">{detailError}</div>
                                ) : detailData && (
                                    <div className="space-y-8">
                                        {/* Result Summary */}
                                        <div className="flex flex-col sm:flex-row gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
                                            <div className="flex-1">
                                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Diagnosis</h4>
                                                <span className={`px-4 py-2 rounded-full text-sm font-bold border ${getRiskColor(selectedRecord.risk_level)}`}>
                                                    {selectedRecord.risk_level}
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Confidence</h4>
                                                <span className="text-lg font-bold text-gray-900">
                                                    {(selectedRecord.probability * 100).toFixed(1)}%
                                                </span>
                                            </div>
                                        </div>

                                        {/* Inputs Details */}
                                        <div>
                                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b pb-2">Provided Health Data</h3>
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                                {Object.entries(detailData)
                                                    .filter(([key]) => !['id', 'user', 'created_at', 'risk_level', 'classification', 'probability', 'recommendations'].includes(key))
                                                    .map(([key, value]) => (
                                                        <div key={key} className="bg-white border border-gray-100 p-3 rounded-xl shadow-sm">
                                                            <div className="text-xs text-gray-500 capitalize truncate" title={key.replace(/_/g, ' ')}>
                                                                {key.replace(/_/g, ' ')}
                                                            </div>
                                                            <div className="font-semibold text-gray-900 mt-1 capitalize">
                                                                {String(value)}
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>

                                        {/* Gemini AI Recommendations */}
                                        {detailData.recommendations ? (
                                            <div>
                                                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 border-b pb-2">AI Recommendations</h3>
                                                <RiskRecommendations
                                                    recommendations={detailData.recommendations}
                                                />
                                            </div>
                                        ) : selectedRecord.risk_level.toLowerCase().includes('high') || selectedRecord.risk_level.toLowerCase().includes('moderate') || selectedRecord.risk_level.toLowerCase() === 'ckd' ? (
                                            <div className="bg-blue-50 text-blue-700 p-4 rounded-xl text-sm border border-blue-100">
                                                AI recommendations were not generated or saved for this historical assessment. Future assessments will have personalized lifestyle advice attached permanently.
                                            </div>
                                        ) : null}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
