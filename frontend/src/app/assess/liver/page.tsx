"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Footer } from "@/components/Footer";
import { predictCondition, PredictionResponse } from "@/lib/api";
import { RiskRecommendations } from "@/components/ui/RiskRecommendations";
import { AlertCircle, CheckCircle2, ChevronRight, Activity, Info, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PageHeader } from "@/components/ui/PageHeader";
import { FormField, FormSelect } from "@/components/ui/form-fields";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, resultVariants, sideBarVariants } from "@/lib/animations";

const formSchema = z.object({
    age: z.coerce.number().min(1).max(120),
    gender: z.enum(["Male", "Female", "Other"]),
    total_bilirubin: z.coerce.number().min(0),
    direct_bilirubin: z.coerce.number().min(0),
    alkaline_phosphotase: z.coerce.number().min(0),
    alamine_aminotransferase: z.coerce.number().min(0),
    aspartate_aminotransferase: z.coerce.number().min(0),
    total_protiens: z.coerce.number().min(0), // Backend typo match
    albumin: z.coerce.number().min(0),
    albumin_and_globulin_ratio: z.coerce.number().min(0),
});

type FormValues = z.infer<typeof formSchema>;

export default function LiverAssessment() {
    const [result, setResult] = useState<PredictionResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    const methods = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            gender: "Male",
            age: 0,
            total_bilirubin: 0,
            direct_bilirubin: 0,
            alkaline_phosphotase: 0,
            alamine_aminotransferase: 0,
            aspartate_aminotransferase: 0,
            total_protiens: 0,
            albumin: 0,
            albumin_and_globulin_ratio: 0,
        },
    });

    const onSubmit = async (data: FormValues) => {
        setError(null);
        setResult(null);
        try {
            const response = await predictCondition("liver", data);
            setResult(response);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (err: any) {
            setError(err.message || "Failed to get prediction");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans overflow-x-hidden">
            <Navbar />

            <main className="grow pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative">
                {/* Background Decor */}
                <motion.div
                    className="absolute bottom-20 left-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl pointer-events-none -z-10"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />

                <Breadcrumb items={[{ label: "Assessments", href: "/#assessments" }, { label: "Liver Disease" }]} />
                <PageHeader
                    title="Liver Disease Assessment"
                    description="Evaluate liver health status using enzymes, proteins, and bilirubin levels."
                    icon={Stethoscope}
                    accentColor="text-orange-600"
                    iconBgColor="bg-orange-50"
                />

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Form Section */}
                    <motion.div
                        className="lg:col-span-2 space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <Card className="border-t-4 border-t-orange-500 shadow-lg overflow-hidden">
                            <CardHeader>
                                <CardTitle>Test Results Entry</CardTitle>
                                <CardDescription>Input values from your lab report.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <FormProvider {...methods}>
                                    <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">

                                        {/* Section 1 */}
                                        <motion.div className="space-y-4" variants={itemVariants}>
                                            <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">1</span>
                                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Demographics</h3>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <FormField label="Age" name="age" type="number" />
                                                <FormSelect label="Gender" name="gender" options={["Male", "Female", "Other"]} />
                                            </div>
                                        </motion.div>

                                        {/* Section 2 */}
                                        <motion.div className="space-y-4" variants={itemVariants}>
                                            <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">2</span>
                                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Liver Panel</h3>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <FormField label="Total Bilirubin" name="total_bilirubin" type="number" step="0.1" />
                                                <FormField label="Direct Bilirubin" name="direct_bilirubin" type="number" step="0.1" />
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <FormField label="Total Proteins" name="total_protiens" type="number" step="0.1" />
                                                <FormField label="Albumin" name="albumin" type="number" step="0.1" />
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <FormField label="Albumin/Globulin Ratio" name="albumin_and_globulin_ratio" type="number" step="0.1" />
                                            </div>
                                        </motion.div>

                                        {/* Section 3 */}
                                        <motion.div className="space-y-4" variants={itemVariants}>
                                            <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-600">3</span>
                                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Enzymes</h3>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <FormField label="Alk. Phosphatase" name="alkaline_phosphotase" type="number" />
                                                <FormField label="Alamine Aminotransferase (ALT/SGPT)" name="alamine_aminotransferase" type="number" />
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <FormField label="Aspartate Aminotransferase (AST/SGOT)" name="aspartate_aminotransferase" type="number" />
                                            </div>
                                        </motion.div>

                                        <motion.div className="pt-6" variants={itemVariants}>
                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="w-full bg-linear-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white shadow-lg shadow-orange-500/20"
                                                isLoading={methods.formState.isSubmitting}
                                                whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                {methods.formState.isSubmitting ? "Analyzing..." : "Calculate Liver Risk"}
                                            </Button>
                                        </motion.div>
                                    </form>
                                </FormProvider>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Results Sidebar */}
                    <div className="lg:col-span-1">
                        <motion.div
                            variants={sideBarVariants}
                            initial="hidden"
                            animate="visible"
                            className="sticky top-24 space-y-6"
                        >
                            {!result && !error && (
                                <Card className="bg-orange-50/50 border-orange-100 shadow-none">
                                    <CardHeader>
                                        <CardTitle className="text-orange-700 flex items-center gap-2 text-lg">
                                            <Info className="h-5 w-5" /> Information
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm text-orange-800/80 space-y-3">
                                        <p>Liver health is evaluated by analyzing elevated enzyme levels (ALT, AST, ALP) and protein synthesis capabilities.</p>
                                    </CardContent>
                                </Card>
                            )}

                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <Card className="bg-red-50 border-red-200">
                                        <CardContent className="pt-6">
                                            <div className="flex items-start gap-3">
                                                <AlertCircle className="h-6 w-6 text-red-600 shrink-0" />
                                                <div>
                                                    <h3 className="font-bold text-red-800">Error</h3>
                                                    <p className="text-sm text-red-700 mt-1">{error}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )}

                            {result && (
                                <motion.div
                                    variants={resultVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <Card className="overflow-hidden border-t-0 shadow-2xl ring-1 ring-black/5">
                                        <div className={`h-2 w-full ${getRiskColorBg(result.risk_level)}`}></div>
                                        <CardHeader className="pb-2 text-center">
                                            <motion.div
                                                className="mx-auto bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-3"
                                                initial={{ scale: 0, rotate: -180 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{ type: "spring", delay: 0.5 }}
                                            >
                                                <CheckCircle2 className="h-6 w-6 text-orange-600" />
                                            </motion.div>
                                            <CardTitle className="text-2xl">Analysis Complete</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-6">
                                            <div className="text-center py-6 bg-gray-50 rounded-xl border border-gray-100">
                                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Diagnosis</span>
                                                {/* Note: Liver model returns risk level */}
                                                <Badge variant="outline" className={`text-xl px-6 py-2 ${getRiskColorText(result.risk_level)} border-2`}>
                                                    {result.risk_level}
                                                </Badge>
                                            </div>

                                            {result.probability_svm && (
                                                <div className="space-y-2">
                                                    <div className="flex justify-between items-center text-xs font-medium uppercase text-gray-500">
                                                        <span>Confidence</span>
                                                        <span>{((result.probability_svm || 0) * 100).toFixed(1)}%</span>
                                                    </div>
                                                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${(result.probability_svm || 0) * 100}%` }}
                                                            transition={{ duration: 1.5, ease: "circOut", delay: 0.8 }}
                                                            className={`h-full rounded-full ${getRiskColorBg(result.risk_level)}`}
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                                <p className="text-sm text-gray-600 italic leading-relaxed text-center">
                                                    "{result.explanation || "Diagnosis based on provided clinical data."}"
                                                </p>
                                            </div>

                                            <Button onClick={() => window.location.reload()} variant="outline" className="w-full hover:scale-100" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                                Start New Assessment
                                            </Button>
                                        </CardContent>
                                    </Card>

                                    <RiskRecommendations recommendations={result.recommendations} />
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

function getRiskColorText(level?: string) {
    switch (level?.toLowerCase()) {
        case "high": return "text-red-600 border-red-200 bg-red-50";
        case "moderate": return "text-amber-600 border-amber-200 bg-amber-50";
        case "low": return "text-green-600 border-green-200 bg-green-50";
        default: return "text-gray-600";
    }
}

function getRiskColorBg(level?: string) {
    switch (level?.toLowerCase()) {
        case "high": return "bg-red-500";
        case "moderate": return "bg-amber-500";
        case "low": return "bg-green-500";
        default: return "bg-gray-500";
    }
}
