"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { ChevronRight, Info } from "lucide-react";

interface FormFieldProps {
    label: string;
    name: string;
    type?: string;
    step?: string;
    min?: string | number;
    max?: string | number;
    placeholder?: string;
    tooltip?: string;
    className?: string;
}

export function FormField({ label, name, type = "text", step, min, max, placeholder, tooltip, className }: FormFieldProps) {
    const { register, formState: { errors } } = useFormContext();
    const error = errors[name];

    return (
        <div className={cn("space-y-2", className)}>
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 flex items-center gap-1">
                {label}
                {tooltip && (
                    <span className="text-gray-400 hover:text-gray-600 cursor-help transition-colors" title={tooltip}>
                        <Info className="h-3 w-3" />
                    </span>
                )}
            </label>
            <Input
                {...register(name)}
                type={type}
                step={step}
                min={min}
                max={max}
                placeholder={placeholder}
                className={cn(error && "border-red-500 focus-visible:ring-red-500")}
            />
            {error && <span className="text-red-500 text-xs">{error.message as string}</span>}
        </div>
    );
}

interface FormSelectProps {
    label: string;
    name: string;
    options: string[];
    info?: string;
    className?: string;
}

export function FormSelect({ label, name, options, info, className }: FormSelectProps) {
    const { register, formState: { errors } } = useFormContext();
    const error = errors[name];

    return (
        <div className={cn("space-y-2", className)}>
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700">
                {label}
            </label>
            <div className="relative">
                <select
                    {...register(name)}
                    className={cn(
                        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",
                        error && "border-red-500 ring-red-500"
                    )}
                >
                    {options.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                    <ChevronRight className="h-4 w-4 rotate-90" />
                </div>
            </div>
            {error && <span className="text-red-500 text-xs">{error.message as string}</span>}
            {info && <p className="text-[10px] text-gray-500">{info}</p>}
        </div>
    );
}
