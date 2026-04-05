"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    Menu,
    X,
    Activity,
    ChevronDown,
    User,
    Search,
    Heart,
    Droplets,
    Stethoscope,
    LogOut
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const services = [
    {
        name: "Heart Disease",
        href: "/assess/heart",
        description: "Analyze cardiovascular risk factors",
        icon: Heart,
        color: "text-red-500",
        bgColor: "bg-red-50"
    },
    {
        name: "Diabetes",
        href: "/assess/diabetes",
        description: "Evaluate glucose and insulin levels",
        icon: Droplets,
        color: "text-blue-500",
        bgColor: "bg-blue-50"
    },
    {
        name: "Kidney Disease",
        href: "/assess/kidney",
        description: "Assess renal function and health",
        icon: Activity,
        color: "text-purple-500",
        bgColor: "bg-purple-50"
    },
    {
        name: "Liver Disease",
        href: "/assess/liver",
        description: "Check liver function indicators",
        icon: Stethoscope,
        color: "text-orange-500",
        bgColor: "bg-orange-50"
    },

];

const navigation = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Performance", href: "/performance" },
    { name: "History", href: "/history" },
];

export function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check auth state
    useEffect(() => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("token");
            setIsLoggedIn(!!token);
        }
    }, [pathname]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        router.push("/login");
    };

    // Scroll listener
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "fixed z-50 transition-all duration-300 left-0 right-0 mx-auto",
                "lg:max-w-[1400px]",
                isScrolled
                    ? "top-[12px] lg:w-[calc(100%-24px)]"
                    : "top-[20px] lg:w-[calc(100%-80px)]"
            )}
        >
            <div
                className={cn(
                    "relative flex items-center justify-between px-6 transition-all duration-300 border border-white/60",
                    "backdrop-blur-xl",
                    isScrolled
                        ? "h-[64px] bg-white/85 shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
                        : "h-[72px] bg-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.08)]",
                    "rounded-full"
                )}
                style={{
                    boxShadow: isScrolled
                        ? "0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)"
                        : "0 8px 32px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.02)"
                }}
            >
                {/* Inner Glow Polish */}
                <div className="absolute inset-0 rounded-full pointer-events-none border border-white/50 opacity-50"
                    style={{ boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.8)" }} />

                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 group relative z-10 pl-2">
                    <motion.div
                        className="bg-linear-to-tr from-blue-600 to-cyan-500 p-1.5 rounded-lg text-white shadow-lg shadow-blue-500/20"
                        whileHover={{ scale: 1.05 }}
                        transition={{
                            scale: { duration: 0.2 },
                        }}
                    >
                        <Activity className="h-5 w-5" />
                    </motion.div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold tracking-tight bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                            Health Nova
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8 relative z-10">
                    <Link
                        href="/"
                        className={cn(
                            "text-[15px] font-medium transition-all duration-200 hover:text-blue-600 relative group py-2",
                            pathname === "/" ? "text-blue-600 font-semibold" : "text-gray-700"
                        )}
                    >
                        Home
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 rounded-full transition-all duration-300 group-hover:w-full" />
                        {pathname === "/" && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />}
                    </Link>

                    {/* How It Works - before Services */}
                    <Link
                        href="/how-it-works"
                        className={cn(
                            "text-[15px] font-medium transition-all duration-200 hover:text-blue-600 relative group py-2",
                            pathname === "/how-it-works" ? "text-blue-600 font-semibold" : "text-gray-700"
                        )}
                    >
                        How It Works
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 rounded-full transition-all duration-300 group-hover:w-full" />
                        {pathname === "/how-it-works" && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />}
                    </Link>

                    {/* Services Dropdown */}
                    <div
                        className="relative group py-4"
                        onMouseEnter={() => setServicesDropdownOpen(true)}
                        onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                        <button
                            className={cn(
                                "flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-blue-600 group",
                                pathname.startsWith("/assess") ? "text-blue-600 font-semibold" : "text-gray-700"
                            )}
                        >
                            Services <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                        </button>

                        <AnimatePresence>
                            {servicesDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 15, scale: 0.98 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute top-[85%] left-1/2 -translate-x-1/2 w-[360px] bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/60 p-2 origin-top"
                                    style={{ boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
                                >
                                    <div className="flex flex-col gap-1">
                                        {services.map((service) => (
                                            <Link
                                                key={service.name}
                                                href={service.href}
                                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50/50 transition-colors group/item"
                                            >
                                                <div className={cn("p-2.5 rounded-lg transition-colors shadow-sm", service.bgColor)}>
                                                    <service.icon className={cn("h-5 w-5", service.color)} />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-semibold text-gray-900 group-hover/item:text-blue-600 transition-colors">
                                                        {service.name}
                                                    </div>
                                                    <div className="text-xs text-gray-500 font-medium">
                                                        {service.description}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Performance & History - after Services */}
                    {navigation.filter(item => item.name !== "Home" && item.name !== "How It Works").map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-[15px] font-medium transition-all duration-200 hover:text-blue-600 relative group py-2",
                                pathname === item.href ? "text-blue-600 font-semibold" : "text-gray-700"
                            )}
                        >
                            {item.name}
                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 rounded-full transition-all duration-300 group-hover:w-full" />
                            {pathname === item.href && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />}
                        </Link>
                    ))}
                </div>

                {/* CTA & User Section */}
                <div className="hidden lg:flex items-center gap-4 relative z-10 pr-2">
                    {isLoggedIn ? (
                        <Button
                            className="h-10 px-6 rounded-full bg-linear-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white shadow-lg shadow-red-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-red-500/40"
                            onClick={handleLogout}
                        >
                            <LogOut className="h-4 w-4 mr-2" />
                            Log Out
                        </Button>
                    ) : (
                        <Button
                            className="h-10 px-6 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-blue-500/40"
                            asChild
                        >
                            <Link href="/login">
                                Get Started
                            </Link>
                        </Button>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors relative z-10"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <Menu className="h-6 w-6" />
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <div className="fixed inset-0 z-60 lg:hidden">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="absolute top-0 right-0 h-full w-[300px] bg-white/90 backdrop-blur-2xl shadow-2xl flex flex-col border-l border-white/50"
                        >
                            <div className="p-6 flex items-center justify-between border-b border-gray-100/50">
                                <span className="text-lg font-bold text-gray-900">Menu</span>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                                <div className="space-y-1">
                                    <Link
                                        href="/"
                                        className={cn(
                                            "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                                            pathname === "/" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-white/50"
                                        )}
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Home
                                    </Link>

                                    <div className="space-y-1 pt-2">
                                        <div className="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                                            Services
                                        </div>
                                        {services.map((service) => (
                                            <Link
                                                key={service.name}
                                                href={service.href}
                                                className={cn(
                                                    "flex items-center gap-3 px-4 py-3 rounded-lg text-base transition-colors ml-2",
                                                    pathname === service.href ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-white/50"
                                                )}
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <service.icon className={cn("h-5 w-5", service.color)} />
                                                {service.name}
                                            </Link>
                                        ))}
                                    </div>

                                    <div className="pt-2">
                                        {navigation.slice(1).map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={cn(
                                                    "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                                                    pathname === item.href ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-white/50"
                                                )}
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-gray-100/50">
                                    {isLoggedIn ? (
                                        <Button
                                            className="w-full rounded-full bg-linear-to-r from-red-500 to-orange-500 text-white shadow-lg py-6 text-base font-semibold"
                                            onClick={() => { setMobileMenuOpen(false); handleLogout(); }}
                                        >
                                            <LogOut className="h-4 w-4 mr-2" />
                                            Log Out
                                        </Button>
                                    ) : (
                                        <Button
                                            className="w-full rounded-full bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-lg py-6 text-base font-semibold"
                                            asChild
                                        >
                                            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                                                Get Started
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
