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
import { AlertCircle, CheckCircle2, ChevronRight, Activity, Info, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PageHeader } from "@/components/ui/PageHeader";
import { FormField, FormSelect } from "@/components/ui/form-fields";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, resultVariants, sideBarVariants } from "@/lib/animations";

// Schema matching KidneyAssessment (CKD) in backend
const formSchema = z.object({
    age: z.coerce.number().min(0).max(120),
    bp: z.coerce.number().min(0), // Blood Pressure
    sg: z.coerce.number().min(0.990).max(1.050), // Specific Gravity
    al: z.coerce.number().min(0).max(5), // Albumin (0-5)
    su: z.coerce.number().min(0).max(5), // Sugar (0-5)
    rbc: z.enum(["normal", "abnormal"]), // Red Blood Cells
    pc: z.enum(["normal", "abnormal"]), // Pus Cell
    pcc: z.enum(["present", "notpresent"]), // Pus Cell Clumps
    ba: z.enum(["present", "notpresent"]), // Bacteria
    bgr: z.coerce.number().min(0), // Blood Glucose Random
    bu: z.coerce.number().min(0), // Blood Urea
    sc: z.coerce.number().min(0), // Serum Creatinine
    sod: z.coerce.number().min(0), // Sodium
    pot: z.coerce.number().min(0), // Potassium
    hemo: z.coerce.number().min(0), // Hemoglobin
    pcv: z.coerce.number().min(0), // Packed Cell Volume
    wc: z.coerce.number().min(0), // White Blood Cell Count
    rc: z.coerce.number().min(0), // Red Blood Cell Count
    htn: z.enum(["yes", "no"]), // Hypertension
    dm: z.enum(["yes", "no"]), // Diabetes Mellitus
    cad: z.enum(["yes", "no"]), // Coronary Artery Disease
    appet: z.enum(["good", "poor"]), // Appetite
    pe: z.enum(["yes", "no"]), // Pedal Edema
    ane: z.enum(["yes", "no"]), // Anemia
});

type FormValues = z.infer<typeof formSchema>;

export default function KidneyAssessment() {
    const [result, setResult] = useState<PredictionResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    const methods = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            age: 0,
            bp: 0,
            sg: 1.015,
            al: 0,
            su: 0,
            rbc: "normal",
            pc: "normal",
            pcc: "notpresent",
            ba: "notpresent",
            bgr: 0,
            bu: 0,
            sc: 0,
            sod: 0,
            pot: 0,
            hemo: 0,
            pcv: 0,
            wc: 0,
            rc: 0,
            htn: "no",
            dm: "no",
            cad: "no",
            appet: "good",
            pe: "no",
            ane: "no",
        },
    });

    const onSubmit = async (data: FormValues) => {
        setError(null);
        setResult(null);
        try {
            // Using "kidney" endpoint for CKD
            const response = await predictCondition("kidney", data);
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
                    className="absolute top-10 left-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none -z-10"
                    animate={{ x: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />

                <Breadcrumb items={[{ label: "Assessments", href: "/#assessments" }, { label: "Kidney Disease" }]} />
                <PageHeader
                    title="Kidney Disease Assessment (CKD)"
                    description="Assess the risk of Chronic Kidney Disease using a comprehensive set of 24 clinical markers."
                    icon={Activity}
                    accentColor="text-teal-600"
                    iconBgColor="bg-teal-50"
                />

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Form Section */}
                    <motion.div
                        className="lg:col-span-2 space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <Card className="border-t-4 border-t-teal-500 shadow-lg overflow-hidden">
                            <CardHeader>
                                <CardTitle>Clinical Markers</CardTitle>
                                <CardDescription>Enter values from blood tests and physical examination.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <FormProvider {...methods}>
                                    <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">

                                        {/* Section 1: Demographics & Vitals */}
                                        <motion.div className="space-y-4" variants={itemVariants}>
                                            <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-600">1</span>
                                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Overview</h3>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <FormField label="Age" name="age" type="number" />
                                                <FormField label="Blood Pressure (mm/Hg)" name="bp" type="number" />
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <FormField label="Specific Gravity" name="sg" type="number" step="0.005" />
                                                <FormSelect label="Appetite" name="appet" options={["good", "poor"]} />
                                            </div>
                                        </motion.div>

                                        {/* Section 2: Blood Chemistry */}
                                        <motion.div className="space-y-4" variants={itemVariants}>
                                            <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-600">2</span>
                                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Blood Chemistry</h3>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <FormField label="Blood Urea (bu)" name="bu" type="number" />
                                                <FormField label="Serum Creatinine (sc)" name="sc" type="number" step="0.1" />
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <FormField label="Sodium (sod)" name="sod" type="number" />
                                                <FormField label="Potassium (pot)" name="pot" type="number" step="0.1" />
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <FormField label="Hemoglobin (hemo)" name="hemo" type="number" step="0.1" />
                                                <FormField label="Random Blood Glucose (bgr)" name="bgr" type="number" />
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                                <FormField label="Packed Cell Vol (pcv)" name="pcv" type="number" />
                                                <FormField label="WBC Count (wc)" name="wc" type="number" />
                                                <FormField label="RBC Count (rc)" name="rc" type="number" step="0.1" />
                                            </div>
                                        </motion.div>

                                        {/* Section 3: Urine Analysis */}
                                        <motion.div className="space-y-4" variants={itemVariants}>
                                            <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-600">3</span>
                                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Urine Markers</h3>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <FormField label="Albumin (al)" name="al" type="number" min="0" max="5" />
                                                <FormField label="Sugar (su)" name="su" type="number" min="0" max="5" />
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <FormSelect label="Red Blood Cells" name="rbc" options={["normal", "abnormal"]} />
                                                <FormSelect label="Pus Cells" name="pc" options={["normal", "abnormal"]} />
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <FormSelect label="Pus Cell Clumps" name="pcc" options={["notpresent", "present"]} />
                                                <FormSelect label="Bacteria" name="ba" options={["notpresent", "present"]} />
                                            </div>
                                        </motion.div>

                                        {/* Section 4: Conditions */}
                                        <motion.div className="space-y-4" variants={itemVariants}>
                                            <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-teal-600">4</span>
                                                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Medical History</h3>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <FormSelect label="Hypertension" name="htn" options={["yes", "no"]} />
                                                <FormSelect label="Diabetes Mellitus" name="dm" options={["yes", "no"]} />
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                                <FormSelect label="Coronary Artery Disease" name="cad" options={["yes", "no"]} />
                                                <FormSelect label="Pedal Edema" name="pe" options={["yes", "no"]} />
                                                <FormSelect label="Anemia" name="ane" options={["yes", "no"]} />
                                            </div>
                                        </motion.div>

                                        <motion.div className="pt-6" variants={itemVariants}>
                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="w-full bg-linear-to-r from-teal-600 to-green-500 hover:from-teal-700 hover:to-green-600 text-white shadow-lg shadow-teal-500/20"
                                                isLoading={methods.formState.isSubmitting}
                                                whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                {methods.formState.isSubmitting ? "Analyzing..." : "Calculate CKD Risk"}
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
                                <Card className="bg-teal-50/50 border-teal-100 shadow-none">
                                    <CardHeader>
                                        <CardTitle className="text-teal-700 flex items-center gap-2 text-lg">
                                            <Info className="h-5 w-5" /> Information
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm text-teal-800/80 space-y-3">
                                        <p>Chronic Kidney Disease (CKD) prediction based on 24 indicators including blood pressure, gravity, albumin, sugar, and more.</p>
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
                                        <div className={`h-2 w-full ${getRiskColorBg(result.classification || "")}`}></div>
                                        <CardHeader className="pb-2 text-center">
                                            <motion.div
                                                className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3 ${getRiskColorText(result.classification || "").split(" ")[2] || "bg-teal-100"}`}
                                                initial={{ scale: 0, rotate: -180 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{ type: "spring", delay: 0.5 }}
                                            >
                                                <CheckCircle2 className={`h-6 w-6 ${getRiskColorText(result.classification || "").split(" ")[0] || "text-teal-600"}`} />
                                            </motion.div>
                                            <CardTitle className="text-2xl">Analysis Complete</CardTitle>
                                            <CardDescription>Based on provided clinical data</CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-6">
                                            <div className="text-center py-6 bg-gray-50 rounded-xl border border-gray-100">
                                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">Classification</span>
                                                <Badge variant="outline" className={`text-xl px-6 py-2 border-2 ${getRiskColorText(result.classification || "")}`}>
                                                    {getRiskDisplay(result.classification || "")}
                                                </Badge>
                                            </div>

                                            {result.probability_svm && (
                                                <div className="space-y-2">
                                                    <div className="flex justify-between items-center text-xs font-medium uppercase text-gray-500">
                                                        <span>Confidence</span>
                                                        <span>{(result.probability_svm * 100).toFixed(1)}%</span>
                                                    </div>
                                                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${result.probability_svm * 100}%` }}
                                                            transition={{ duration: 1.5, ease: "circOut", delay: 0.8 }}
                                                            className={`h-full rounded-full ${getRiskColorBg(result.classification || "")}`}
                                                        />
                                                    </div>
                                                </div>
                                            )}

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

// Sub-components
function getRiskColorText(level?: string) {
    switch (level?.toLowerCase()) {
        case "ckd": return "text-red-600 border-red-200 bg-red-50";
        case "notckd": return "text-green-600 border-green-200 bg-green-50";
        default: return "text-teal-600 border-teal-200 bg-teal-50";
    }
}

function getRiskColorBg(level?: string) {
    switch (level?.toLowerCase()) {
        case "ckd": return "bg-red-500";
        case "notckd": return "bg-green-500";
        default: return "bg-teal-500";
    }
}

function getRiskDisplay(level?: string) {
    switch (level?.toLowerCase()) {
        case "ckd": return "High Risk (CKD Detected)";
        case "notckd": return "Low Risk (Healthy)";
        default: return level || "Unknown";
    }
}
