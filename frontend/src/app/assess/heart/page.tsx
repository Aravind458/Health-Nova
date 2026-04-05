"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Navbar } from "@/components/layout/Navbar";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Footer } from "@/components/Footer";
import { predictCondition, PredictionResponse } from "@/lib/api";
import { RiskRecommendations } from "@/components/ui/RiskRecommendations";
import { AlertCircle, CheckCircle2, ChevronRight, Activity, Info, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { PageHeader } from "@/components/ui/PageHeader";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, resultVariants, sideBarVariants } from "@/lib/animations";

const formSchema = z.object({
    age: z.coerce.number().min(1, "Age is required").max(120),
    sex: z.enum(["Male", "Female", "Other"]),
    cp: z.enum(["Typical Angina", "Atypical Angina", "Non-Anginal Pain", "Asymptomatic"]),
    trestbps: z.coerce.number().min(50).max(250),
    chol: z.coerce.number().min(100).max(600),
    fbs: z.enum(["Yes", "No"]),
    restecg: z.enum(["Normal", "ST-T abnormality", "Left Ventricular Hypertrophy"]),
    thalach: z.coerce.number().min(50).max(250),
    exang: z.enum(["Yes", "No"]),
    oldpeak: z.coerce.number().min(0).max(10),
    slope: z.enum(["Upsloping", "Flat", "Downsloping"]),
    ca: z.coerce.number().min(0).max(3),
    thal: z.enum(["Normal", "Fixed Defect", "Reversible Defect"]),
});

type FormValues = z.infer<typeof formSchema>;

export default function HeartAssessment() {
    const [result, setResult] = useState<PredictionResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            age: 0,
            sex: "Male",
            cp: "Typical Angina",
            trestbps: 120,
            chol: 200,
            fbs: "No",
            restecg: "Normal",
            thalach: 150,
            exang: "No",
            oldpeak: 0,
            slope: "Upsloping",
            ca: 0,
            thal: "Normal",
        },
    });

    const onSubmit = async (data: FormValues) => {
        setError(null);
        setResult(null);
        try {
            const response = await predictCondition("heart", data);
            setResult(response);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (err: any) {
            setError(err.message || "Failed to get prediction");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans overflow-x-hidden"> {/* Added overflow-x-hidden */}
            <Navbar />

            <main className="grow pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative">
                {/* Background Decor (Optional - subtle floating) */}
                <motion.div
                    className="absolute top-20 left-10 w-64 h-64 bg-red-200/20 rounded-full blur-3xl pointer-events-none -z-10"
                    animate={{ y: [0, 50, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />

                <Breadcrumb items={[{ label: "Assessments", href: "/#assessments" }, { label: "Heart Disease" }]} />
                <PageHeader
                    title="Heart Disease Assessment"
                    description="Analyze cardiovascular risk factors using advanced AI models based on clinical biomarkers."
                    icon={Heart}
                    accentColor="text-red-500"
                    iconBgColor="bg-red-50"
                />

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Form Section */}
                    <motion.div
                        className="lg:col-span-2 space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <Card className="border-t-4 border-t-red-500 shadow-lg overflow-hidden">
                            <CardHeader>
                                <CardTitle>Patient Data</CardTitle>
                                <CardDescription>Enter clinical parameters for analysis.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                                    {/* Section 1 */}
                                    <motion.div className="space-y-4" variants={itemVariants}>
                                        <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">1</span>
                                            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Demographics</h3>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <FormField label="Age" name="age" type="number" form={form} placeholder="e.g. 45" />
                                            <FormSelect label="Sex" name="sex" options={["Male", "Female", "Other"]} form={form} />
                                        </div>
                                    </motion.div>

                                    {/* Section 2 */}
                                    <motion.div className="space-y-4" variants={itemVariants}>
                                        <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">2</span>
                                            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Vitals & Symptoms</h3>
                                        </div>
                                        <div className="grid grid-cols-1 gap-6">
                                            <FormSelect
                                                label="Chest Pain Type"
                                                name="cp"
                                                options={["Typical Angina", "Atypical Angina", "Non-Anginal Pain", "Asymptomatic"]}
                                                form={form}
                                                info="The type of chest pain experienced."
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <FormField label="Resting BP (mm Hg)" name="trestbps" type="number" form={form} />
                                            <FormField label="Cholesterol (mg/dl)" name="chol" type="number" form={form} />
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <FormField label="Max Heart Rate" name="thalach" type="number" form={form} />
                                            <FormSelect label="Ex. Induced Angina" name="exang" options={["Yes", "No"]} form={form} />
                                        </div>
                                    </motion.div>

                                    {/* Section 3 */}
                                    <motion.div className="space-y-4" variants={itemVariants}>
                                        <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">3</span>
                                            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">Clinical Metrics</h3>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <FormSelect label="Fasting BS > 120" name="fbs" options={["Yes", "No"]} form={form} />
                                            <FormSelect label="Resting ECG" name="restecg" options={["Normal", "ST-T abnormality", "Left Ventricular Hypertrophy"]} form={form} />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <FormField label="Oldpeak" name="oldpeak" type="number" step="0.1" form={form} tooltip="ST depression induced by exercise relative to rest" />
                                            <FormSelect label="Slope" name="slope" options={["Upsloping", "Flat", "Downsloping"]} form={form} />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <FormField label="Major Vessels (0-3)" name="ca" type="number" form={form} />
                                            <FormSelect label="Thalassemia" name="thal" options={["Normal", "Fixed Defect", "Reversible Defect"]} form={form} />
                                        </div>
                                    </motion.div>

                                    <motion.div className="pt-6" variants={itemVariants}>
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-linear-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white shadow-lg shadow-red-500/20"
                                            isLoading={form.formState.isSubmitting}
                                            whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            {form.formState.isSubmitting ? "Analyzing..." : "Calculate Risk Factor"}
                                        </Button>
                                    </motion.div>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Results / Sidebar */}
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
                                            <Info className="h-5 w-5" /> AI Analysis
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm text-blue-800/80 space-y-3">
                                        <p>Our model uses Support Vector Machines (SVM) to detect patterns in your clinical data.</p>
                                        <ul className="list-disc pl-4 space-y-1">
                                            <li>Instant results</li>
                                            <li>Private & secure</li>
                                            <li>Medical-grade accuracy</li>
                                        </ul>
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
                                                    <h3 className="font-bold text-red-800">Analysis Failed</h3>
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
                                                className="mx-auto bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-3"
                                                initial={{ scale: 0, rotate: -180 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{ type: "spring", delay: 0.5 }}
                                            >
                                                <CheckCircle2 className="h-6 w-6 text-green-600" />
                                            </motion.div>
                                            <CardTitle className="text-2xl">Analysis Complete</CardTitle>
                                            <CardDescription>Based on provided vitals</CardDescription>
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

                                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                                                <p className="text-sm text-gray-600 italic leading-relaxed text-center">
                                                    "{result.explanation}"
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

// Sub-components ... (rest of the file)

// Sub-components
function FormField({ label, name, type = "text", step, form, placeholder, tooltip }: any) {
    const { register, formState: { errors } } = form;
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 flex items-center gap-1">
                {label}
                {tooltip && <span className="text-gray-400 hover:text-gray-600 cursor-help transition-colors" title={tooltip}><Info className="h-3 w-3" /></span>}
            </label>
            <Input
                {...register(name)}
                type={type}
                step={step}
                placeholder={placeholder}
                className={cn(errors[name] && "border-red-500 focus-visible:ring-red-500")}
            />
            {errors[name] && <span className="text-red-500 text-xs">{errors[name]?.message as string}</span>}
        </div>
    );
}

function FormSelect({ label, name, options, form, info }: any) {
    const { register, formState: { errors } } = form;
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700">
                {label}
            </label>
            <div className="relative">
                <select
                    {...register(name)}
                    className={cn(
                        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",
                        errors[name] && "border-red-500 ring-red-500"
                    )}
                >
                    {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                    <ChevronRight className="h-4 w-4 rotate-90" />
                </div>
            </div>
            {errors[name] && <span className="text-red-500 text-xs">{errors[name]?.message as string}</span>}
            {info && <p className="text-[10px] text-gray-500">{info}</p>}
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
