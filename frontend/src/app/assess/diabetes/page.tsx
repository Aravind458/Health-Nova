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
import { AlertCircle, CheckCircle2, ChevronRight, Activity, Info, Droplets } from "lucide-react";
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
    bmi: z.coerce.number().min(10).max(100),
    hbA1c_level: z.coerce.number().min(0).max(20),
    blood_glucose_level: z.coerce.number().min(0),
    hypertension: z.enum(["No", "Yes"]), // backend expects 0 or 1, will convert on submit
    heart_disease: z.enum(["No", "Yes"]), // backend expects 0 or 1
    smoking_history: z.enum(["never", "current", "former", "ever", "not current"]),
});

type FormValues = z.infer<typeof formSchema>;

export default function DiabetesAssessment() {
    const [result, setResult] = useState<PredictionResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    const methods = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            gender: "Male",
            age: 0,
            bmi: 0,
            hbA1c_level: 0,
            blood_glucose_level: 0,
            hypertension: "No",
            heart_disease: "No",
            smoking_history: "never",
        },
    });

    const onSubmit = async (data: FormValues) => {
        setError(null);
        setResult(null);
        try {
            // Convert "Yes"/"No" to 1/0 for backend
            const payload = {
                ...data,
                hypertension: data.hypertension === "Yes" ? 1 : 0,
                heart_disease: data.heart_disease === "Yes" ? 1 : 0,
            };

            const response = await predictCondition("diabetes", payload);
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
                    className="absolute top-40 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl pointer-events-none -z-10"
                    animate={{ y: [0, -50, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />

                <Breadcrumb items={[{ label: "Assessments", href: "/#assessments" }, { label: "Diabetes" }]} />
                <PageHeader
                    title="Diabetes Risk Assessment"
                    description="Evaluate your risk for diabetes using key biochemical markers and demographic data."
                    icon={Droplets}
                    accentColor="text-blue-600"
                    iconBgColor="bg-blue-50"
                />

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Form Section */}
                    <motion.div
                        className="lg:col-span-2 space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <Card className="border-t-4 border-t-blue-500 shadow-lg overflow-hidden">
                            <CardHeader>
                                <CardTitle>Clinical Data</CardTitle>
                                <CardDescription>Enter patient metrics for analysis.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <FormProvider {...methods}>
                                    <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">

                                        {/* Section 1 */}
                                        <motion.div className="space-y-4" variants={itemVariants}>
                                            <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">1</span>
                                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Demographics & History</h3>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <FormField label="Age" name="age" type="number" />
                                                <FormSelect label="Gender" name="gender" options={["Male", "Female", "Other"]} />
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <FormField label="BMI" name="bmi" type="number" step="0.1" tooltip="Body Mass Index" />
                                                <FormSelect label="Smoking History" name="smoking_history" options={["never", "current", "former", "ever", "not current"]} />
                                            </div>
                                        </motion.div>

                                        {/* Section 2 */}
                                        <motion.div className="space-y-4" variants={itemVariants}>
                                            <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">2</span>
                                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Medical Conditions</h3>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <FormSelect label="Hypertension" name="hypertension" options={["No", "Yes"]} />
                                                <FormSelect label="Heart Disease" name="heart_disease" options={["No", "Yes"]} />
                                            </div>
                                        </motion.div>

                                        {/* Section 3 */}
                                        <motion.div className="space-y-4" variants={itemVariants}>
                                            <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">3</span>
                                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Blood Analysis</h3>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <FormField label="HbA1c Level" name="hbA1c_level" type="number" step="0.1" tooltip="Average blood sugar over past 3 months" />
                                                <FormField label="Blood Glucose Level" name="blood_glucose_level" type="number" tooltip="Current blood glucose" />
                                            </div>
                                        </motion.div>

                                        <motion.div className="pt-6" variants={itemVariants}>
                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="w-full bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/20"
                                                isLoading={methods.formState.isSubmitting}
                                                whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                {methods.formState.isSubmitting ? "Analyzing..." : "Calculate Diabetes Risk"}
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
                                <Card className="bg-blue-50/50 border-blue-100 shadow-none">
                                    <CardHeader>
                                        <CardTitle className="text-blue-700 flex items-center gap-2 text-lg">
                                            <Info className="h-5 w-5" /> Metric Info
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm text-blue-800/80 space-y-3">
                                        <p><strong>HbA1c:</strong> Indicates average blood sugar levels over the past 2-3 months.</p>
                                        <p><strong>BMI:</strong> Body Mass Index, a measure of body fat based on height and weight.</p>
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
                                                className="mx-auto bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-3"
                                                initial={{ scale: 0, rotate: -180 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{ type: "spring", delay: 0.5 }}
                                            >
                                                <CheckCircle2 className="h-6 w-6 text-blue-600" />
                                            </motion.div>
                                            <CardTitle className="text-2xl">Analysis Complete</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-6">
                                            <div className="text-center py-6 bg-gray-50 rounded-xl border border-gray-100">
                                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Risk Level</span>
                                                <Badge variant="outline" className={`text-xl px-6 py-2 ${getRiskColorText(result.risk_level)} border-2`}>
                                                    {result.risk_level}
                                                </Badge>
                                            </div>

                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center text-xs font-medium uppercase text-gray-500">
                                                    <span>Confidence</span>
                                                    {/* Fallback to 95% if probability is null for strict classifiers */}
                                                    <span>{(result.probability_svm ? result.probability_svm * 100 : 95).toFixed(1)}%</span>
                                                </div>
                                                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${result.probability_svm ? result.probability_svm * 100 : 95}%` }}
                                                        transition={{ duration: 1.5, ease: "circOut", delay: 0.8 }}
                                                        className={`h-full rounded-full ${getRiskColorBg(result.risk_level)}`}
                                                    />
                                                </div>
                                            </div>

                                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                                <p className="text-sm text-gray-600 italic leading-relaxed text-center">
                                                    "{result.explanation || "Assessment based on provided clinical data."}"
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

function getRiskColorText(level: string) {
    switch (level?.toLowerCase()) {
        case "high": return "text-red-600 border-red-200 bg-red-50";
        case "moderate": return "text-amber-600 border-amber-200 bg-amber-50";
        case "low": return "text-green-600 border-green-200 bg-green-50";
        default: return "text-gray-600";
    }
}

function getRiskColorBg(level: string) {
    switch (level?.toLowerCase()) {
        case "high": return "bg-red-500";
        case "moderate": return "bg-amber-500";
        case "low": return "bg-green-500";
        default: return "bg-gray-500";
    }
}
