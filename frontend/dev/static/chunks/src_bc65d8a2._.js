(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "btn-primary-pulse bg-linear-to-br from-[#0066CC] to-[#14B8A6] text-white shadow-[0_10px_40px_-10px_rgba(0,102,204,0.4)] hover:shadow-[0_20px_50px_-10px_rgba(0,102,204,0.6)] hover:scale-105 active:scale-98 transition-all duration-200",
            secondary: "bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 hover:bg-white hover:border-blue-500 hover:text-blue-600 hover:scale-105 active:scale-98 transition-all duration-200",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-blue-600 font-semibold underline-offset-4 hover:underline"
        },
        size: {
            default: "h-12 px-8 py-4",
            sm: "h-9 rounded-md px-3",
            lg: "h-14 px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
// Create a motion component from the standard button
const MotionButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button;
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, isLoading, children, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : MotionButton;
    // Define animation props only if it's not a Slot (Slots handle their own refs/props weirdly)
    // Note: The standardized hover/tap scales are now properly handled in CSS/Tailwind classes for better performance
    // or we can keep framer-motion props if strictly needed. 
    // Given constraints and "Universal" specs, we'll lean on the variant classes for the heavy lifting 
    // to ensure consistent visual behavior, but keep motion props for that smooth elastic feel if desired.
    // The user spec says "Hover: Scale 1.05", "Active: Scale 0.98".
    const motionProps = !asChild ? {
        whileHover: {
            scale: 1.05
        },
        whileTap: {
            scale: 0.98
        },
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 17
        }
    } : {};
    if (asChild) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
                variant,
                size,
                className
            })),
            ref: ref,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Button.tsx",
            lineNumber: 69,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionButton, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        disabled: isLoading || props.disabled,
        ...motionProps,
        ...props,
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "mr-2 h-4 w-4 animate-spin"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Button.tsx",
                lineNumber: 87,
                columnNumber: 31
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 80,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/droplets.js [app-client] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-client] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const services = [
    {
        name: "Heart Disease",
        href: "/assess/heart",
        description: "Analyze cardiovascular risk factors",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        color: "text-red-500",
        bgColor: "bg-red-50"
    },
    {
        name: "Diabetes",
        href: "/assess/diabetes",
        description: "Evaluate glucose and insulin levels",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
        color: "text-blue-500",
        bgColor: "bg-blue-50"
    },
    {
        name: "Kidney Disease",
        href: "/assess/kidney",
        description: "Assess renal function and health",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
        color: "text-purple-500",
        bgColor: "bg-purple-50"
    },
    {
        name: "Liver Disease",
        href: "/assess/liver",
        description: "Check liver function indicators",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"],
        color: "text-orange-500",
        bgColor: "bg-orange-50"
    }
];
const navigation = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "How It Works",
        href: "/how-it-works"
    },
    {
        name: "Performance",
        href: "/performance"
    },
    {
        name: "History",
        href: "/history"
    }
];
function Navbar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check auth state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const token = localStorage.getItem("token");
            setIsLoggedIn(!!token);
        }
    }["Navbar.useEffect"], [
        pathname
    ]);
    const handleLogout = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        router.push("/login");
    };
    // Scroll listener
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 50);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
        initial: {
            y: -100
        },
        animate: {
            y: 0
        },
        transition: {
            duration: 0.6,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed z-50 transition-all duration-300 left-0 right-0 mx-auto", "lg:max-w-[1400px]", isScrolled ? "top-[12px] lg:w-[calc(100%-24px)]" : "top-[20px] lg:w-[calc(100%-80px)]"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex items-center justify-between px-6 transition-all duration-300 border border-white/60", "backdrop-blur-xl", isScrolled ? "h-[64px] bg-white/85 shadow-[0_8px_32px_rgba(0,0,0,0.08)]" : "h-[72px] bg-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.08)]", "rounded-full"),
                style: {
                    boxShadow: isScrolled ? "0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)" : "0 8px 32px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.02)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-full pointer-events-none border border-white/50 opacity-50",
                        style: {
                            boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.8)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 124,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-3 group relative z-10 pl-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "bg-linear-to-tr from-blue-600 to-cyan-500 p-1.5 rounded-lg text-white shadow-lg shadow-blue-500/20",
                                whileHover: {
                                    scale: 1.05
                                },
                                transition: {
                                    scale: {
                                        duration: 0.2
                                    }
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 136,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 129,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg font-bold tracking-tight bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity",
                                    children: "Health Nova"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 139,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 138,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 128,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex items-center gap-8 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[15px] font-medium transition-all duration-200 hover:text-blue-600 relative group py-2", pathname === "/" ? "text-blue-600 font-semibold" : "text-gray-700"),
                                children: [
                                    "Home",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 rounded-full transition-all duration-300 group-hover:w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 155,
                                        columnNumber: 25
                                    }, this),
                                    pathname === "/" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 156,
                                        columnNumber: 46
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 147,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/how-it-works",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[15px] font-medium transition-all duration-200 hover:text-blue-600 relative group py-2", pathname === "/how-it-works" ? "text-blue-600 font-semibold" : "text-gray-700"),
                                children: [
                                    "How It Works",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 rounded-full transition-all duration-300 group-hover:w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 168,
                                        columnNumber: 25
                                    }, this),
                                    pathname === "/how-it-works" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 169,
                                        columnNumber: 58
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 160,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group py-4",
                                onMouseEnter: ()=>setServicesDropdownOpen(true),
                                onMouseLeave: ()=>setServicesDropdownOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-blue-600 group", pathname.startsWith("/assess") ? "text-blue-600 font-semibold" : "text-gray-700"),
                                        children: [
                                            "Services ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: "h-4 w-4 transition-transform duration-300 group-hover:rotate-180"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                lineNumber: 184,
                                                columnNumber: 38
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 178,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        children: servicesDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 15,
                                                scale: 0.98
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0,
                                                scale: 1
                                            },
                                            exit: {
                                                opacity: 0,
                                                y: 15,
                                                scale: 0.98
                                            },
                                            transition: {
                                                duration: 0.2,
                                                ease: "easeOut"
                                            },
                                            className: "absolute top-[85%] left-1/2 -translate-x-1/2 w-[360px] bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-white/60 p-2 origin-top",
                                            style: {
                                                boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: services.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: service.href,
                                                        className: "flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50/50 transition-colors group/item",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2.5 rounded-lg transition-colors shadow-sm", service.bgColor),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(service.icon, {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-5 w-5", service.color)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                                                    lineNumber: 205,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                                lineNumber: 204,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm font-semibold text-gray-900 group-hover/item:text-blue-600 transition-colors",
                                                                        children: service.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                                                        lineNumber: 208,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-xs text-gray-500 font-medium",
                                                                        children: service.description
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                                                        lineNumber: 211,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                                lineNumber: 207,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, service.name, true, {
                                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 45
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                lineNumber: 197,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Navbar.tsx",
                                            lineNumber: 189,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                        lineNumber: 187,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 173,
                                columnNumber: 21
                            }, this),
                            navigation.filter((item)=>item.name !== "Home" && item.name !== "How It Works").map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[15px] font-medium transition-all duration-200 hover:text-blue-600 relative group py-2", pathname === item.href ? "text-blue-600 font-semibold" : "text-gray-700"),
                                    children: [
                                        item.name,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 rounded-full transition-all duration-300 group-hover:w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Navbar.tsx",
                                            lineNumber: 234,
                                            columnNumber: 29
                                        }, this),
                                        pathname === item.href && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Navbar.tsx",
                                            lineNumber: 235,
                                            columnNumber: 56
                                        }, this)
                                    ]
                                }, item.name, true, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 225,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 146,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex items-center gap-4 relative z-10 pr-2",
                        children: isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            className: "h-10 px-6 rounded-full bg-linear-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white shadow-lg shadow-red-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-red-500/40",
                            onClick: handleLogout,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                    className: "h-4 w-4 mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 247,
                                    columnNumber: 29
                                }, this),
                                "Log Out"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Navbar.tsx",
                            lineNumber: 243,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            className: "h-10 px-6 rounded-full bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-blue-500/40",
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                children: "Get Started"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                lineNumber: 255,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Navbar.tsx",
                            lineNumber: 251,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 241,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors relative z-10",
                        onClick: ()=>setMobileMenuOpen(true),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "h-6 w-6"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Navbar.tsx",
                            lineNumber: 267,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/Navbar.tsx",
                        lineNumber: 263,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 108,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-60 lg:hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: 0.2
                            },
                            className: "absolute inset-0 bg-black/20 backdrop-blur-sm",
                            onClick: ()=>setMobileMenuOpen(false)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/Navbar.tsx",
                            lineNumber: 275,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                x: "100%"
                            },
                            animate: {
                                x: 0
                            },
                            exit: {
                                x: "100%"
                            },
                            transition: {
                                type: "spring",
                                damping: 30,
                                stiffness: 300
                            },
                            className: "absolute top-0 right-0 h-full w-[300px] bg-white/90 backdrop-blur-2xl shadow-2xl flex flex-col border-l border-white/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 flex items-center justify-between border-b border-gray-100/50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-bold text-gray-900",
                                            children: "Menu"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Navbar.tsx",
                                            lineNumber: 292,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setMobileMenuOpen(false),
                                            className: "p-2 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "h-6 w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                lineNumber: 297,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Navbar.tsx",
                                            lineNumber: 293,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 291,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto p-6 space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/",
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("block px-4 py-3 rounded-lg text-base font-medium transition-colors", pathname === "/" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-white/50"),
                                                    onClick: ()=>setMobileMenuOpen(false),
                                                    children: "Home"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1 pt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider",
                                                            children: "Services"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/layout/Navbar.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 41
                                                        }, this),
                                                        services.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: service.href,
                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-3 px-4 py-3 rounded-lg text-base transition-colors ml-2", pathname === service.href ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-white/50"),
                                                                onClick: ()=>setMobileMenuOpen(false),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(service.icon, {
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-5 w-5", service.color)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                                                        lineNumber: 328,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    service.name
                                                                ]
                                                            }, service.name, true, {
                                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                                lineNumber: 319,
                                                                columnNumber: 45
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-2",
                                                    children: navigation.slice(1).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: item.href,
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("block px-4 py-3 rounded-lg text-base font-medium transition-colors", pathname === item.href ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-white/50"),
                                                            onClick: ()=>setMobileMenuOpen(false),
                                                            children: item.name
                                                        }, item.name, false, {
                                                            fileName: "[project]/src/components/layout/Navbar.tsx",
                                                            lineNumber: 336,
                                                            columnNumber: 45
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                                    lineNumber: 334,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/Navbar.tsx",
                                            lineNumber: 302,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-6 border-t border-gray-100/50",
                                            children: isLoggedIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                className: "w-full rounded-full bg-linear-to-r from-red-500 to-orange-500 text-white shadow-lg py-6 text-base font-semibold",
                                                onClick: ()=>{
                                                    setMobileMenuOpen(false);
                                                    handleLogout();
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                        className: "h-4 w-4 mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/Navbar.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 45
                                                    }, this),
                                                    "Log Out"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                lineNumber: 353,
                                                columnNumber: 41
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                className: "w-full rounded-full bg-linear-to-r from-blue-600 to-cyan-500 text-white shadow-lg py-6 text-base font-semibold",
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/login",
                                                    onClick: ()=>setMobileMenuOpen(false),
                                                    children: "Get Started"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/Navbar.tsx",
                                                lineNumber: 361,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/Navbar.tsx",
                                            lineNumber: 351,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/Navbar.tsx",
                                    lineNumber: 301,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/Navbar.tsx",
                            lineNumber: 284,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Navbar.tsx",
                    lineNumber: 274,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/Navbar.tsx",
                lineNumber: 272,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/Navbar.tsx",
        lineNumber: 96,
        columnNumber: 9
    }, this);
}
_s(Navbar, "a01Zd3fNNeeyuQEAwiAY+6v92XM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Breadcrumb.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Breadcrumb",
    ()=>Breadcrumb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Breadcrumb({ items, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].nav, {
        initial: {
            opacity: 0,
            y: -10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex justify-center items-center gap-2 text-sm text-gray-500 font-medium mb-6", className),
        "aria-label": "Breadcrumb",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "flex items-center gap-1 hover:text-blue-600 transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                        size: 14
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Breadcrumb.tsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden sm:inline",
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Breadcrumb.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Breadcrumb.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            size: 14,
                            className: "text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Breadcrumb.tsx",
                            lineNumber: 34,
                            columnNumber: 21
                        }, this),
                        item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: "hover:text-blue-600 transition-colors",
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Breadcrumb.tsx",
                            lineNumber: 36,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-800 pointer-events-none",
                            "aria-current": "page",
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Breadcrumb.tsx",
                            lineNumber: 40,
                            columnNumber: 25
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/src/components/ui/Breadcrumb.tsx",
                    lineNumber: 33,
                    columnNumber: 17
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Breadcrumb.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
_c = Breadcrumb;
var _c;
__turbopack_context__.k.register(_c, "Breadcrumb");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const navigation = [
    {
        name: 'About',
        href: '/how-it-works'
    },
    {
        name: 'Privacy',
        href: '/how-it-works#privacy'
    },
    {
        name: 'Disclaimer',
        href: '/how-it-works#faq'
    },
    {
        name: 'Contact',
        href: '#',
        isContact: true
    }
];
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative bg-linear-to-b from-white to-gray-50 pt-20 pb-12 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-white via-white/80 to-transparent pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent opacity-50"
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none select-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundParticles, {}, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 24,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto max-w-7xl px-6 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center mb-12 group cursor-default",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "relative mb-6",
                                whileHover: {
                                    scale: 1.05,
                                    rotate: 360
                                },
                                transition: {
                                    duration: 0.8,
                                    ease: "easeInOut"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-blue-500/30 blur-3xl rounded-full scale-150 group-hover:bg-blue-500/50 transition-all duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 38,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-white shadow-xl shadow-blue-500/10 flex items-center justify-center border border-blue-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            animate: {
                                                scale: [
                                                    1,
                                                    1.05,
                                                    1
                                                ]
                                            },
                                            transition: {
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                className: "h-10 w-10 md:h-12 md:w-12 text-blue-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 45,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 41,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 40,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 32,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl font-extrabold tracking-tight mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-linear-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent",
                                    children: "Health Nova"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 52,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 51,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg md:text-xl font-medium text-gray-700",
                                        children: "AI-Powered Health Insights"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 59,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm md:text-base text-gray-500 font-light",
                                        children: "Making healthcare accessible for all"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 62,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-[200px] h-px mx-auto bg-linear-to-r from-transparent via-gray-300 to-transparent mb-12"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-wrap justify-center items-center gap-x-2 gap-y-4 mb-8",
                        children: navigation.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    item.isContact ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactPopup, {}, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 76,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: "group relative px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-blue-600",
                                        children: [
                                            item.name,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute inset-x-0 bottom-1 h-px bg-blue-600 scale-x-0 transition-transform group-hover:scale-x-100 origin-center"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 83,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 78,
                                        columnNumber: 33
                                    }, this),
                                    index < navigation.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-300 hidden sm:inline-block",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 87,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, item.name, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 74,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400",
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " Health Nova. All rights reserved."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 94,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_c = Footer;
function ContactPopup() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative inline-block text-left",
        onMouseEnter: ()=>setIsOpen(true),
        onMouseLeave: ()=>setIsOpen(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "group relative px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 focus:outline-hidden",
                children: [
                    "Contact",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute inset-x-0 bottom-1 h-px bg-blue-600 scale-x-0 transition-transform group-hover:scale-x-100 origin-center"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 116,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 111,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 15,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: 10,
                        scale: 0.95
                    },
                    transition: {
                        duration: 0.2,
                        ease: "easeOut"
                    },
                    className: "absolute bottom-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 w-64 rounded-2xl bg-white p-3 shadow-[0_10px_40px_rgba(0,0,0,0.1)] ring-1 ring-gray-200/50 z-50 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-b border-r border-gray-200/50"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 129,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative space-y-1 bg-white rounded-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:support@healthnova.com",
                                    className: "flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors group/item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-blue-100 p-2 rounded-lg group-hover/item:bg-blue-200 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                size: 16,
                                                className: "text-blue-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 134,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 133,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5",
                                                    children: "Email Us"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-semibold",
                                                    children: "support@healthnova.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 136,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 132,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 text-gray-700 hover:text-green-600 transition-colors group/item cursor-pointer",
                                    onClick: ()=>window.location.href = "tel:+15551234567",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-green-100 p-2 rounded-lg group-hover/item:bg-green-200 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                size: 16,
                                                className: "text-green-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 147,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 146,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-left",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5",
                                                    children: "Call Us"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-semibold",
                                                    children: "+1 (555) 123-4567"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 149,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 142,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 131,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 121,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 119,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 106,
        columnNumber: 9
    }, this);
}
_s(ContactPopup, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c1 = ContactPopup;
function BackgroundParticles() {
    _s1();
    // Determine random values only on client-side to avoid hydration mismatch
    const [particleData, setParticleData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BackgroundParticles.useEffect": ()=>{
            const particles = [
                ...Array(6)
            ].map({
                "BackgroundParticles.useEffect.particles": (_, i)=>({
                        id: i,
                        width: Math.random() * 200 + 100,
                        height: Math.random() * 200 + 100,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        duration: Math.random() * 10 + 15
                    })
            }["BackgroundParticles.useEffect.particles"]);
            setParticleData(particles);
        }
    }["BackgroundParticles.useEffect"], []);
    if (particleData.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: particleData.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bg-blue-400/10 rounded-full blur-xl",
                style: {
                    width: p.width,
                    height: p.height,
                    left: p.left,
                    top: p.top
                },
                animate: {
                    y: [
                        0,
                        -50,
                        0
                    ],
                    opacity: [
                        0.1,
                        0.3,
                        0.1
                    ],
                    scale: [
                        1,
                        1.1,
                        1
                    ]
                },
                transition: {
                    duration: p.duration,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }, p.id, false, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 183,
                columnNumber: 17
            }, this))
    }, void 0, false);
}
_s1(BackgroundParticles, "TnaEIlQMK5W26K6anqQ9A7XkDXo=");
_c2 = BackgroundParticles;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Footer");
__turbopack_context__.k.register(_c1, "ContactPopup");
__turbopack_context__.k.register(_c2, "BackgroundParticles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchAssessmentDetail",
    ()=>fetchAssessmentDetail,
    "fetchHistory",
    ()=>fetchHistory,
    "fetchHowItWorksContent",
    ()=>fetchHowItWorksContent,
    "fetchPerformanceMetrics",
    ()=>fetchPerformanceMetrics,
    "loginUser",
    ()=>loginUser,
    "predictCondition",
    ()=>predictCondition,
    "registerUser",
    ()=>registerUser
]);
const API_BASE_URL = "http://127.0.0.1:8000/api";
async function predictCondition(condition, data) {
    try {
        const headers = {
            "Content-Type": "application/json"
        };
        const token = localStorage.getItem("token");
        if (token) {
            headers["Authorization"] = `Token ${token}`;
        }
        const response = await fetch(`${API_BASE_URL}/predict/${condition}/`, {
            method: "POST",
            headers,
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            // Handle non-200 responses
            const errorData = await response.json().catch(()=>({}));
            throw new Error(errorData.detail || `Prediction failed with status ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        /* eslint-disable */ console.error(...oo_tx(`3656637319_39_8_39_62_11`, `Error predicting ${condition}:`, error));
        throw error;
    }
}
async function fetchHistory(page = 1, limit = 10) {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            throw new Error("No token found. Please log in.");
        }
        const response = await fetch(`${API_BASE_URL}/history/?page=${page}&limit=${limit}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch history: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        /* eslint-disable */ console.error(...oo_tx(`3656637319_64_8_64_55_11`, "Error fetching history:", error));
        throw error;
    }
}
async function fetchAssessmentDetail(type, id) {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            throw new Error("No token found. Please log in.");
        }
        // Convert UI type strings like "Heart Assessment" to API paths: "heart"
        const typePath = type.split(" ")[0].toLowerCase();
        const response = await fetch(`${API_BASE_URL}/history/${typePath}/${id}/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch details: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        /* eslint-disable */ console.error(...oo_tx(`3656637319_93_8_93_66_11`, "Error fetching assessment details:", error));
        throw error;
    }
}
async function fetchPerformanceMetrics() {
    try {
        const response = await fetch(`${API_BASE_URL}/performance/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch performance metrics: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        /* eslint-disable */ console.error(...oo_tx(`3656637319_114_8_114_67_11`, "Error fetching performance metrics:", error));
        throw error;
    }
}
async function fetchHowItWorksContent() {
    try {
        const response = await fetch(`${API_BASE_URL}/content/how-it-works/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to fetch content: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        /* eslint-disable */ console.error(...oo_tx(`3656637319_134_8_134_68_11`, "Error fetching how it works content:", error));
        throw error;
    }
}
async function loginUser(credentials) {
    try {
        const response = await fetch(`${API_BASE_URL}/login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        });
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({}));
            throw new Error(errorData.error || `Login failed with status ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        /* eslint-disable */ console.error(...oo_tx(`3656637319_156_8_156_49_11`, "Error logging in:", error));
        throw error;
    }
}
async function registerUser(data) {
    try {
        const response = await fetch(`${API_BASE_URL}/register/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({}));
            throw new Error(errorData.error || `Registration failed with status ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        /* eslint-disable */ console.error(...oo_tx(`3656637319_178_8_178_50_11`, "Error registering:", error));
        throw error;
    }
}
function oo_cm() {
    try {
        return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x5b41(){var _0xabab66=['pop','parent','[object\\x20Map]','_addProperty','toLowerCase','_sendErrorMessage','_treeNodePropertiesBeforeFullValue','import(\\x27url\\x27)','_inNextEdge','_consoleNinjaAllowedToStart','length','forEach','unknown','_undefined','capped','node','_getOwnPropertyDescriptor','','split','_console_ninja','args','charAt','_setNodeLabel',\"c:\\\\Users\\\\ARAVIND\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.516\\\\node_modules\",'_inBrowser','default','getter','NEGATIVE_INFINITY','host','current','set','map','_regExpToString','includes','_quotedRegExp','path','next.js','now','osName','angular','Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','_connected','_getOwnPropertyNames','_socket','stringify','WebSocket','resolve','_allowedToSend','prototype','_property','_keyStrRegExp','_ninjaIgnoreNextError','autoExpandPropertyCount','_connectToHostNow','onopen','Set','disabledLog','gateway.docker.internal','import(\\x27path\\x27)','_isArray','_setNodeExpandableState','https://tinyurl.com/37x8b79t','nodeModules','[object\\x20Array]','value','[object\\x20Date]','_processTreeNodeResult','bind','fromCharCode','null','unref','eventReceivedCallback','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','symbol','ninjaSuppressConsole','ExpoDevice','_disposeWebsocket','push','1.0.0','_HTMLAllCollection','logger\\x20websocket\\x20error','allStrLength','[object\\x20BigInt]','_setNodeId','negativeInfinity','type','slice','_addLoadNode','location',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"10.0.2.2\",\"Aravind\",\"192.168.31.183\"],'object','bigint','autoExpandMaxDepth','_p_name','_numberRegExp','_allowedToConnectOnSend','isExpressionToEvaluate','198RrhbGW','versions','function','test','remix','undefined','timeStamp','','trace','53219','stackTraceLimit',{\"resolveGetters\":false,\"defaultLimits\":{\"props\":100,\"elements\":100,\"strLength\":51200,\"totalStrLength\":51200,\"autoExpandLimit\":5000,\"autoExpandMaxDepth\":10},\"reducedLimits\":{\"props\":5,\"elements\":5,\"strLength\":256,\"totalStrLength\":768,\"autoExpandLimit\":30,\"autoExpandMaxDepth\":2},\"reducePolicy\":{\"perLogpoint\":{\"reduceOnCount\":50,\"reduceOnAccumulatedProcessingTimeMs\":100,\"resetWhenQuietMs\":500,\"resetOnProcessingTimeAverageMs\":100},\"global\":{\"reduceOnCount\":1000,\"reduceOnAccumulatedProcessingTimeMs\":300,\"resetWhenQuietMs\":50,\"resetOnProcessingTimeAverageMs\":100}}},'ws://','replace','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','96qMZQSY','catch','1','_WebSocketClass','log','concat','readyState','getOwnPropertyDescriptor','61000oZudqc','indexOf','parse','_isSet','_webSocketErrorDocsLink','index','startsWith','onerror','expId','1137321yuoPXn','127.0.0.1','array','Buffer','strLength','coverage','_p_','defaultLimits','error','reduceOnAccumulatedProcessingTimeMs','modules','_Symbol','_sortProps','resetWhenQuietMs','reducedLimits','resolveGetters','sortProps','root_exp_id','call','match','_isPrimitiveType','astro','dockerizedApp','hits','_connectAttemptCount','positiveInfinity','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','13652dTFnfA','root_exp',',\\x20see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','serialize','2Yznibf','Number','POSITIVE_INFINITY','_dateToString','reducePolicy','count','url','_cleanNode','autoExpandPreviousObjects','_objectToString','constructor','_blacklistedProperty','emulator','_WebSocket','props','sort','process','toString','funcName','unshift','_isMap','\\x20browser','_setNodeExpressionPath','performance','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','autoExpandLimit','_isPrimitiveWrapperType','_isNegativeZero','noFunctions','react-native','String','resetOnProcessingTimeAverageMs','_setNodePermissions','substr','41105TYgCXe','iterator','totalStrLength','send','11649290WvtArf','RegExp','setter','boolean','global','reduceLimits','68346xdLtlX','name','_reconnectTimeout','_addObjectProperty','10.0.2.2','_isUndefined','_attemptToReconnectShortly','get','_extendedWarning','perLogpoint','console','endsWith','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','_hasSymbolPropertyOnItsPath','_ws','number','onclose','getOwnPropertyNames','Map','time','warn','data','close','edge','hrtime','_console_ninja_session','_propertyName','isArray','origin','cappedProps','port','reload','depth','elapsed','join','disabledTrace','NEXT_RUNTIME','Promise','...','reduceOnCount','android','next.js','_maxConnectAttemptCount','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','elements','getOwnPropertySymbols','2476222mVnPmu','onmessage','[object\\x20Set]','autoExpand','_treeNodePropertiesAfterFullValue','level','_type','expo','string','valueOf','hostname','toUpperCase','cappedElements','negativeZero','_hasSetOnItsPath','message','_getOwnPropertySymbols','_capIfString','getWebSocketClass','_connecting','env','_setNodeQueryPath'];_0x5b41=function(){return _0xabab66;};return _0x5b41();}function _0x2259(_0x51ef8c,_0x199dea){var _0x5b4122=_0x5b41();return _0x2259=function(_0x2259bd,_0x4d3e30){_0x2259bd=_0x2259bd-0x15c;var _0x3f55d7=_0x5b4122[_0x2259bd];return _0x3f55d7;},_0x2259(_0x51ef8c,_0x199dea);}var _0x3fa772=_0x2259;(function(_0x413f66,_0x597a2e){var _0x3c2ae2=_0x2259,_0x43a03f=_0x413f66();while(!![]){try{var _0x44f853=-parseInt(_0x3c2ae2(0x16b))/0x1*(parseInt(_0x3c2ae2(0x250))/0x2)+parseInt(_0x3c2ae2(0x220))/0x3*(-parseInt(_0x3c2ae2(0x24c))/0x4)+parseInt(_0x3c2ae2(0x161))/0x5*(-parseInt(_0x3c2ae2(0x211))/0x6)+-parseInt(_0x3c2ae2(0x19a))/0x7+-parseInt(_0x3c2ae2(0x228))/0x8+-parseInt(_0x3c2ae2(0x231))/0x9+parseInt(_0x3c2ae2(0x165))/0xa;if(_0x44f853===_0x597a2e)break;else _0x43a03f['push'](_0x43a03f['shift']());}catch(_0x4238d4){_0x43a03f['push'](_0x43a03f['shift']());}}}(_0x5b41,0x37bee));function z(_0x4e44cb,_0x1994af,_0xd1af2e,_0x5e99ed,_0x139d2f,_0x3c1107){var _0x5b682b=_0x2259,_0x2cc212,_0x33f342,_0x55c025,_0x208a36;this[_0x5b682b(0x169)]=_0x4e44cb,this[_0x5b682b(0x1cc)]=_0x1994af,this[_0x5b682b(0x189)]=_0xd1af2e,this[_0x5b682b(0x1ee)]=_0x5e99ed,this[_0x5b682b(0x247)]=_0x139d2f,this[_0x5b682b(0x1f7)]=_0x3c1107,this[_0x5b682b(0x1df)]=!0x0,this[_0x5b682b(0x20f)]=!0x0,this[_0x5b682b(0x1d9)]=!0x1,this[_0x5b682b(0x1ad)]=!0x1,this[_0x5b682b(0x1b8)]=((_0x33f342=(_0x2cc212=_0x4e44cb[_0x5b682b(0x260)])==null?void 0x0:_0x2cc212[_0x5b682b(0x1ae)])==null?void 0x0:_0x33f342[_0x5b682b(0x18f)])==='edge',this[_0x5b682b(0x1c8)]=!((_0x208a36=(_0x55c025=this[_0x5b682b(0x169)][_0x5b682b(0x260)])==null?void 0x0:_0x55c025[_0x5b682b(0x212)])!=null&&_0x208a36[_0x5b682b(0x1bf)])&&!this[_0x5b682b(0x1b8)],this[_0x5b682b(0x223)]=null,this['_connectAttemptCount']=0x0,this['_maxConnectAttemptCount']=0x14,this[_0x5b682b(0x22c)]=_0x5b682b(0x1ed),this[_0x5b682b(0x1b5)]=(this['_inBrowser']?_0x5b682b(0x1f8):'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20')+this[_0x5b682b(0x22c)];}z[_0x3fa772(0x1e0)][_0x3fa772(0x1ac)]=async function(){var _0xe46f88=_0x3fa772,_0x1bc0e2,_0x12a0b9;if(this[_0xe46f88(0x223)])return this[_0xe46f88(0x223)];let _0x4f703d;if(this[_0xe46f88(0x1c8)]||this[_0xe46f88(0x1b8)])_0x4f703d=this['global'][_0xe46f88(0x1dd)];else{if((_0x1bc0e2=this[_0xe46f88(0x169)][_0xe46f88(0x260)])!=null&&_0x1bc0e2[_0xe46f88(0x25d)])_0x4f703d=(_0x12a0b9=this[_0xe46f88(0x169)][_0xe46f88(0x260)])==null?void 0x0:_0x12a0b9[_0xe46f88(0x25d)];else try{_0x4f703d=(await new Function(_0xe46f88(0x1d3),_0xe46f88(0x256),_0xe46f88(0x1ee),'return\\x20import(url.pathToFileURL(path.join(nodeModules,\\x20\\x27ws/index.js\\x27)).toString());')(await(0x0,eval)(_0xe46f88(0x1ea)),await(0x0,eval)(_0xe46f88(0x1b7)),this[_0xe46f88(0x1ee)]))[_0xe46f88(0x1c9)];}catch{try{_0x4f703d=require(require(_0xe46f88(0x1d3))[_0xe46f88(0x18d)](this[_0xe46f88(0x1ee)],'ws'));}catch{throw new Error(_0xe46f88(0x21f));}}}return this[_0xe46f88(0x223)]=_0x4f703d,_0x4f703d;},z[_0x3fa772(0x1e0)][_0x3fa772(0x1e5)]=function(){var _0x391f02=_0x3fa772;this[_0x391f02(0x1ad)]||this[_0x391f02(0x1d9)]||this['_connectAttemptCount']>=this['_maxConnectAttemptCount']||(this[_0x391f02(0x20f)]=!0x1,this[_0x391f02(0x1ad)]=!0x0,this['_connectAttemptCount']++,this[_0x391f02(0x179)]=new Promise((_0x7aa380,_0x523107)=>{var _0x360e77=_0x391f02;this['getWebSocketClass']()['then'](_0x29fb31=>{var _0x423936=_0x2259;let _0x2c49a5=new _0x29fb31(_0x423936(0x21d)+(!this[_0x423936(0x1c8)]&&this[_0x423936(0x247)]?_0x423936(0x1e9):this[_0x423936(0x1cc)])+':'+this[_0x423936(0x189)]);_0x2c49a5['onerror']=()=>{var _0x47e49b=_0x423936;this[_0x47e49b(0x1df)]=!0x1,this[_0x47e49b(0x1fc)](_0x2c49a5),this['_attemptToReconnectShortly'](),_0x523107(new Error(_0x47e49b(0x200)));},_0x2c49a5[_0x423936(0x1e6)]=()=>{var _0x51d7eb=_0x423936;this[_0x51d7eb(0x1c8)]||_0x2c49a5['_socket']&&_0x2c49a5[_0x51d7eb(0x1db)][_0x51d7eb(0x1f6)]&&_0x2c49a5[_0x51d7eb(0x1db)]['unref'](),_0x7aa380(_0x2c49a5);},_0x2c49a5[_0x423936(0x17b)]=()=>{var _0x57976d=_0x423936;this[_0x57976d(0x20f)]=!0x0,this[_0x57976d(0x1fc)](_0x2c49a5),this[_0x57976d(0x171)]();},_0x2c49a5[_0x423936(0x19b)]=_0x5b6435=>{var _0x18d249=_0x423936;try{if(!(_0x5b6435!=null&&_0x5b6435['data'])||!this['eventReceivedCallback'])return;let _0x4fdef6=JSON[_0x18d249(0x22a)](_0x5b6435[_0x18d249(0x180)]);this[_0x18d249(0x1f7)](_0x4fdef6['method'],_0x4fdef6[_0x18d249(0x1c4)],this[_0x18d249(0x169)],this[_0x18d249(0x1c8)]);}catch{}};})['then'](_0x1e4b6d=>(this['_connected']=!0x0,this['_connecting']=!0x1,this[_0x360e77(0x20f)]=!0x1,this[_0x360e77(0x1df)]=!0x0,this[_0x360e77(0x249)]=0x0,_0x1e4b6d))[_0x360e77(0x221)](_0xbad9a8=>(this[_0x360e77(0x1d9)]=!0x1,this['_connecting']=!0x1,console[_0x360e77(0x17f)](_0x360e77(0x196)+this[_0x360e77(0x22c)]),_0x523107(new Error(_0x360e77(0x268)+(_0xbad9a8&&_0xbad9a8[_0x360e77(0x1a9)])))));}));},z[_0x3fa772(0x1e0)][_0x3fa772(0x1fc)]=function(_0x35df59){var _0x3aede5=_0x3fa772;this['_connected']=!0x1,this[_0x3aede5(0x1ad)]=!0x1;try{_0x35df59[_0x3aede5(0x17b)]=null,_0x35df59[_0x3aede5(0x22f)]=null,_0x35df59[_0x3aede5(0x1e6)]=null;}catch{}try{_0x35df59[_0x3aede5(0x226)]<0x2&&_0x35df59[_0x3aede5(0x181)]();}catch{}},z[_0x3fa772(0x1e0)][_0x3fa772(0x171)]=function(){var _0x3a32c4=_0x3fa772;clearTimeout(this[_0x3a32c4(0x16d)]),!(this[_0x3a32c4(0x249)]>=this[_0x3a32c4(0x195)])&&(this[_0x3a32c4(0x16d)]=setTimeout(()=>{var _0x94530b=_0x3a32c4,_0x5cc891;this[_0x94530b(0x1d9)]||this[_0x94530b(0x1ad)]||(this[_0x94530b(0x1e5)](),(_0x5cc891=this['_ws'])==null||_0x5cc891['catch'](()=>this[_0x94530b(0x171)]()));},0x1f4),this[_0x3a32c4(0x16d)]['unref']&&this['_reconnectTimeout'][_0x3a32c4(0x1f6)]());},z['prototype'][_0x3fa772(0x164)]=async function(_0x10aefc){var _0x4d84ae=_0x3fa772;try{if(!this['_allowedToSend'])return;this[_0x4d84ae(0x20f)]&&this['_connectToHostNow'](),(await this[_0x4d84ae(0x179)])[_0x4d84ae(0x164)](JSON[_0x4d84ae(0x1dc)](_0x10aefc));}catch(_0x4450b9){this[_0x4d84ae(0x173)]?console[_0x4d84ae(0x17f)](this['_sendErrorMessage']+':\\x20'+(_0x4450b9&&_0x4450b9['message'])):(this['_extendedWarning']=!0x0,console[_0x4d84ae(0x17f)](this['_sendErrorMessage']+':\\x20'+(_0x4450b9&&_0x4450b9[_0x4d84ae(0x1a9)]),_0x10aefc)),this[_0x4d84ae(0x1df)]=!0x1,this[_0x4d84ae(0x171)]();}};function H(_0x460d83,_0x355471,_0x20198e,_0x28cc05,_0x1b6464,_0x592d8b,_0x204d66,_0x5da28b=ne){var _0x15bd25=_0x3fa772;let _0x3267c6=_0x20198e[_0x15bd25(0x1c2)](',')[_0x15bd25(0x1cf)](_0x51eb86=>{var _0x35b9a7=_0x15bd25,_0xa59305,_0x36f5a4,_0x4ce833,_0x16fd92,_0x78ddfb,_0x501bf4,_0xed8752,_0x48e410;try{if(!_0x460d83[_0x35b9a7(0x184)]){let _0x1f8a3f=((_0x36f5a4=(_0xa59305=_0x460d83['process'])==null?void 0x0:_0xa59305[_0x35b9a7(0x212)])==null?void 0x0:_0x36f5a4[_0x35b9a7(0x1bf)])||((_0x16fd92=(_0x4ce833=_0x460d83[_0x35b9a7(0x260)])==null?void 0x0:_0x4ce833[_0x35b9a7(0x1ae)])==null?void 0x0:_0x16fd92[_0x35b9a7(0x18f)])===_0x35b9a7(0x182);(_0x1b6464===_0x35b9a7(0x194)||_0x1b6464===_0x35b9a7(0x215)||_0x1b6464===_0x35b9a7(0x246)||_0x1b6464===_0x35b9a7(0x1d7))&&(_0x1b6464+=_0x1f8a3f?'\\x20server':_0x35b9a7(0x265));let _0x21415d='';_0x1b6464==='react-native'&&(_0x21415d=(((_0xed8752=(_0x501bf4=(_0x78ddfb=_0x460d83[_0x35b9a7(0x1a1)])==null?void 0x0:_0x78ddfb[_0x35b9a7(0x23b)])==null?void 0x0:_0x501bf4[_0x35b9a7(0x1fb)])==null?void 0x0:_0xed8752[_0x35b9a7(0x1d6)])||'emulator')['toLowerCase'](),_0x21415d&&(_0x1b6464+='\\x20'+_0x21415d,(_0x21415d===_0x35b9a7(0x193)||_0x21415d===_0x35b9a7(0x25c)&&((_0x48e410=_0x460d83[_0x35b9a7(0x208)])==null?void 0x0:_0x48e410['hostname'])===_0x35b9a7(0x16f))&&(_0x355471=_0x35b9a7(0x16f)))),_0x460d83['_console_ninja_session']={'id':+new Date(),'tool':_0x1b6464},_0x204d66&&_0x1b6464&&!_0x1f8a3f&&(_0x21415d?console[_0x35b9a7(0x224)](_0x35b9a7(0x1d8)+_0x21415d+_0x35b9a7(0x24e)):console[_0x35b9a7(0x224)]('%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20'+(_0x1b6464[_0x35b9a7(0x1c5)](0x0)[_0x35b9a7(0x1a5)]()+_0x1b6464[_0x35b9a7(0x160)](0x1))+',',_0x35b9a7(0x197),_0x35b9a7(0x24b)));}let _0x48fdfc=new z(_0x460d83,_0x355471,_0x51eb86,_0x28cc05,_0x592d8b,_0x5da28b);return _0x48fdfc['send'][_0x35b9a7(0x1f3)](_0x48fdfc);}catch(_0x41310f){return console[_0x35b9a7(0x17f)](_0x35b9a7(0x177),_0x41310f&&_0x41310f['message']),()=>{};}});return _0x24541d=>_0x3267c6[_0x15bd25(0x1bb)](_0x376b6f=>_0x376b6f(_0x24541d));}function ne(_0x2be4fb,_0x301f93,_0x523214,_0x6be156){var _0x5d0a8f=_0x3fa772;_0x6be156&&_0x2be4fb===_0x5d0a8f(0x18a)&&_0x523214[_0x5d0a8f(0x208)][_0x5d0a8f(0x18a)]();}function b(_0x3e205e){var _0x4c089a=_0x3fa772,_0x18d6ae,_0x398ba8;let _0x1e0f39=function(_0x56a091,_0xe8b36b){return _0xe8b36b-_0x56a091;},_0x4be32a;if(_0x3e205e[_0x4c089a(0x267)])_0x4be32a=function(){var _0x317280=_0x4c089a;return _0x3e205e[_0x317280(0x267)][_0x317280(0x1d5)]();};else{if(_0x3e205e['process']&&_0x3e205e[_0x4c089a(0x260)][_0x4c089a(0x183)]&&((_0x398ba8=(_0x18d6ae=_0x3e205e[_0x4c089a(0x260)])==null?void 0x0:_0x18d6ae[_0x4c089a(0x1ae)])==null?void 0x0:_0x398ba8[_0x4c089a(0x18f)])!=='edge')_0x4be32a=function(){var _0x1cd4ef=_0x4c089a;return _0x3e205e[_0x1cd4ef(0x260)][_0x1cd4ef(0x183)]();},_0x1e0f39=function(_0x11003e,_0x1a86aa){return 0x3e8*(_0x1a86aa[0x0]-_0x11003e[0x0])+(_0x1a86aa[0x1]-_0x11003e[0x1])/0xf4240;};else try{let {performance:_0x4c0f6d}=require('perf_hooks');_0x4be32a=function(){var _0x26921d=_0x4c089a;return _0x4c0f6d[_0x26921d(0x1d5)]();};}catch{_0x4be32a=function(){return+new Date();};}}return{'elapsed':_0x1e0f39,'timeStamp':_0x4be32a,'now':()=>Date[_0x4c089a(0x1d5)]()};}function X(_0x3c3424,_0x27b72f,_0x42e1c4){var _0x3043b0=_0x3fa772,_0x51055f,_0x1dc4cb,_0x377a34,_0x336d4c,_0x3c0ecd,_0x42373b,_0x31c7d9;if(_0x3c3424[_0x3043b0(0x1b9)]!==void 0x0)return _0x3c3424[_0x3043b0(0x1b9)];let _0x42a069=((_0x1dc4cb=(_0x51055f=_0x3c3424[_0x3043b0(0x260)])==null?void 0x0:_0x51055f[_0x3043b0(0x212)])==null?void 0x0:_0x1dc4cb[_0x3043b0(0x1bf)])||((_0x336d4c=(_0x377a34=_0x3c3424[_0x3043b0(0x260)])==null?void 0x0:_0x377a34[_0x3043b0(0x1ae)])==null?void 0x0:_0x336d4c[_0x3043b0(0x18f)])==='edge',_0x3bcee7=!!(_0x42e1c4===_0x3043b0(0x15c)&&((_0x3c0ecd=_0x3c3424[_0x3043b0(0x1a1)])==null?void 0x0:_0x3c0ecd[_0x3043b0(0x23b)]));function _0x246ceb(_0x5502da){var _0x1bae75=_0x3043b0;if(_0x5502da[_0x1bae75(0x22e)]('/')&&_0x5502da[_0x1bae75(0x176)]('/')){let _0x20f17e=new RegExp(_0x5502da[_0x1bae75(0x206)](0x1,-0x1));return _0x42d7cb=>_0x20f17e[_0x1bae75(0x214)](_0x42d7cb);}else{if(_0x5502da[_0x1bae75(0x1d1)]('*')||_0x5502da[_0x1bae75(0x1d1)]('?')){let _0x5894f=new RegExp('^'+_0x5502da[_0x1bae75(0x21e)](/\\./g,String[_0x1bae75(0x1f4)](0x5c)+'.')[_0x1bae75(0x21e)](/\\*/g,'.*')[_0x1bae75(0x21e)](/\\?/g,'.')+String[_0x1bae75(0x1f4)](0x24));return _0x4e3e52=>_0x5894f[_0x1bae75(0x214)](_0x4e3e52);}else return _0x3581d9=>_0x3581d9===_0x5502da;}}let _0x434eb6=_0x27b72f[_0x3043b0(0x1cf)](_0x246ceb);return _0x3c3424['_consoleNinjaAllowedToStart']=_0x42a069||!_0x27b72f,!_0x3c3424[_0x3043b0(0x1b9)]&&((_0x42373b=_0x3c3424[_0x3043b0(0x208)])==null?void 0x0:_0x42373b[_0x3043b0(0x1a4)])&&(_0x3c3424[_0x3043b0(0x1b9)]=_0x434eb6['some'](_0x38c3cc=>_0x38c3cc(_0x3c3424[_0x3043b0(0x208)][_0x3043b0(0x1a4)]))),_0x3bcee7&&!_0x3c3424[_0x3043b0(0x1b9)]&&!((_0x31c7d9=_0x3c3424[_0x3043b0(0x208)])!=null&&_0x31c7d9['hostname'])&&(_0x3c3424[_0x3043b0(0x1b9)]=!0x0),_0x3c3424[_0x3043b0(0x1b9)];}function J(_0xe648bd,_0x4abecc,_0x1565ad,_0x1c2887,_0x4a4801,_0x33744e){var _0x4972c0=_0x3fa772;_0xe648bd=_0xe648bd,_0x4abecc=_0x4abecc,_0x1565ad=_0x1565ad,_0x1c2887=_0x1c2887,_0x4a4801=_0x4a4801,_0x4a4801=_0x4a4801||{},_0x4a4801[_0x4972c0(0x238)]=_0x4a4801[_0x4972c0(0x238)]||{},_0x4a4801['reducedLimits']=_0x4a4801['reducedLimits']||{},_0x4a4801[_0x4972c0(0x254)]=_0x4a4801['reducePolicy']||{},_0x4a4801[_0x4972c0(0x254)][_0x4972c0(0x174)]=_0x4a4801['reducePolicy'][_0x4972c0(0x174)]||{},_0x4a4801[_0x4972c0(0x254)]['global']=_0x4a4801['reducePolicy'][_0x4972c0(0x169)]||{};let _0x105198={'perLogpoint':{'reduceOnCount':_0x4a4801[_0x4972c0(0x254)][_0x4972c0(0x174)][_0x4972c0(0x192)]||0x32,'reduceOnAccumulatedProcessingTimeMs':_0x4a4801[_0x4972c0(0x254)]['perLogpoint'][_0x4972c0(0x23a)]||0x64,'resetWhenQuietMs':_0x4a4801[_0x4972c0(0x254)][_0x4972c0(0x174)][_0x4972c0(0x23e)]||0x1f4,'resetOnProcessingTimeAverageMs':_0x4a4801[_0x4972c0(0x254)]['perLogpoint'][_0x4972c0(0x15e)]||0x64},'global':{'reduceOnCount':_0x4a4801[_0x4972c0(0x254)][_0x4972c0(0x169)]['reduceOnCount']||0x3e8,'reduceOnAccumulatedProcessingTimeMs':_0x4a4801[_0x4972c0(0x254)]['global'][_0x4972c0(0x23a)]||0x12c,'resetWhenQuietMs':_0x4a4801[_0x4972c0(0x254)][_0x4972c0(0x169)][_0x4972c0(0x23e)]||0x32,'resetOnProcessingTimeAverageMs':_0x4a4801[_0x4972c0(0x254)][_0x4972c0(0x169)][_0x4972c0(0x15e)]||0x64}},_0x3e3c1b=b(_0xe648bd),_0x351127=_0x3e3c1b[_0x4972c0(0x18c)],_0x129903=_0x3e3c1b[_0x4972c0(0x217)];function _0x27a2bb(){var _0x5560f7=_0x4972c0;this[_0x5560f7(0x1e2)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x5560f7(0x20e)]=/^(0|[1-9][0-9]*)$/,this[_0x5560f7(0x1d2)]=/'([^\\\\']|\\\\')*'/,this[_0x5560f7(0x1bd)]=_0xe648bd[_0x5560f7(0x216)],this[_0x5560f7(0x1ff)]=_0xe648bd['HTMLAllCollection'],this['_getOwnPropertyDescriptor']=Object[_0x5560f7(0x227)],this[_0x5560f7(0x1da)]=Object[_0x5560f7(0x17c)],this[_0x5560f7(0x23c)]=_0xe648bd['Symbol'],this['_regExpToString']=RegExp[_0x5560f7(0x1e0)][_0x5560f7(0x261)],this[_0x5560f7(0x253)]=Date[_0x5560f7(0x1e0)][_0x5560f7(0x261)];}_0x27a2bb[_0x4972c0(0x1e0)]['serialize']=function(_0x3f1448,_0xeffb4f,_0x36814a,_0x51888e){var _0x2863bb=_0x4972c0,_0x474a65=this,_0xc35d94=_0x36814a[_0x2863bb(0x19d)];function _0x151fe6(_0x49d6f5,_0x23cb59,_0x155d40){var _0x89c613=_0x2863bb;_0x23cb59[_0x89c613(0x205)]=_0x89c613(0x1bc),_0x23cb59[_0x89c613(0x239)]=_0x49d6f5[_0x89c613(0x1a9)],_0x375768=_0x155d40[_0x89c613(0x1bf)][_0x89c613(0x1cd)],_0x155d40[_0x89c613(0x1bf)][_0x89c613(0x1cd)]=_0x23cb59,_0x474a65[_0x89c613(0x1b6)](_0x23cb59,_0x155d40);}let _0x11e99d,_0x5ac6ec,_0x1a0153=_0xe648bd[_0x2863bb(0x1fa)];_0xe648bd[_0x2863bb(0x1fa)]=!0x0,_0xe648bd['console']&&(_0x11e99d=_0xe648bd['console'][_0x2863bb(0x239)],_0x5ac6ec=_0xe648bd[_0x2863bb(0x175)][_0x2863bb(0x17f)],_0x11e99d&&(_0xe648bd['console'][_0x2863bb(0x239)]=function(){}),_0x5ac6ec&&(_0xe648bd[_0x2863bb(0x175)][_0x2863bb(0x17f)]=function(){}));try{try{_0x36814a[_0x2863bb(0x19f)]++,_0x36814a[_0x2863bb(0x19d)]&&_0x36814a[_0x2863bb(0x258)][_0x2863bb(0x1fd)](_0xeffb4f);var _0x5e0e4e,_0xfc0644,_0x581ef3,_0x34c866,_0x297f08=[],_0x365f1b=[],_0x17e64e,_0x5eff44=this[_0x2863bb(0x1a0)](_0xeffb4f),_0x349f01=_0x5eff44==='array',_0x1cc8a7=!0x1,_0x37632f=_0x5eff44===_0x2863bb(0x213),_0x3b5d94=this[_0x2863bb(0x245)](_0x5eff44),_0x2723a1=this[_0x2863bb(0x26a)](_0x5eff44),_0xc6e1f3=_0x3b5d94||_0x2723a1,_0x37308c={},_0x267115=0x0,_0x44a108=!0x1,_0x375768,_0x559f15=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x36814a[_0x2863bb(0x18b)]){if(_0x349f01){if(_0xfc0644=_0xeffb4f[_0x2863bb(0x1ba)],_0xfc0644>_0x36814a[_0x2863bb(0x198)]){for(_0x581ef3=0x0,_0x34c866=_0x36814a[_0x2863bb(0x198)],_0x5e0e4e=_0x581ef3;_0x5e0e4e<_0x34c866;_0x5e0e4e++)_0x365f1b[_0x2863bb(0x1fd)](_0x474a65[_0x2863bb(0x1b3)](_0x297f08,_0xeffb4f,_0x5eff44,_0x5e0e4e,_0x36814a));_0x3f1448[_0x2863bb(0x1a6)]=!0x0;}else{for(_0x581ef3=0x0,_0x34c866=_0xfc0644,_0x5e0e4e=_0x581ef3;_0x5e0e4e<_0x34c866;_0x5e0e4e++)_0x365f1b['push'](_0x474a65[_0x2863bb(0x1b3)](_0x297f08,_0xeffb4f,_0x5eff44,_0x5e0e4e,_0x36814a));}_0x36814a[_0x2863bb(0x1e4)]+=_0x365f1b['length'];}if(!(_0x5eff44===_0x2863bb(0x1f5)||_0x5eff44==='undefined')&&!_0x3b5d94&&_0x5eff44!==_0x2863bb(0x15d)&&_0x5eff44!==_0x2863bb(0x234)&&_0x5eff44!==_0x2863bb(0x20b)){var _0x5e1f5b=_0x51888e[_0x2863bb(0x25e)]||_0x36814a['props'];if(this[_0x2863bb(0x22b)](_0xeffb4f)?(_0x5e0e4e=0x0,_0xeffb4f[_0x2863bb(0x1bb)](function(_0x2c9b57){var _0x4ca4f4=_0x2863bb;if(_0x267115++,_0x36814a[_0x4ca4f4(0x1e4)]++,_0x267115>_0x5e1f5b){_0x44a108=!0x0;return;}if(!_0x36814a[_0x4ca4f4(0x210)]&&_0x36814a[_0x4ca4f4(0x19d)]&&_0x36814a[_0x4ca4f4(0x1e4)]>_0x36814a[_0x4ca4f4(0x269)]){_0x44a108=!0x0;return;}_0x365f1b['push'](_0x474a65[_0x4ca4f4(0x1b3)](_0x297f08,_0xeffb4f,_0x4ca4f4(0x1e7),_0x5e0e4e++,_0x36814a,function(_0x48ecee){return function(){return _0x48ecee;};}(_0x2c9b57)));})):this['_isMap'](_0xeffb4f)&&_0xeffb4f['forEach'](function(_0x409bc0,_0x5393ee){var _0x10ac23=_0x2863bb;if(_0x267115++,_0x36814a['autoExpandPropertyCount']++,_0x267115>_0x5e1f5b){_0x44a108=!0x0;return;}if(!_0x36814a[_0x10ac23(0x210)]&&_0x36814a[_0x10ac23(0x19d)]&&_0x36814a[_0x10ac23(0x1e4)]>_0x36814a[_0x10ac23(0x269)]){_0x44a108=!0x0;return;}var _0x46ed4e=_0x5393ee[_0x10ac23(0x261)]();_0x46ed4e[_0x10ac23(0x1ba)]>0x64&&(_0x46ed4e=_0x46ed4e[_0x10ac23(0x206)](0x0,0x64)+_0x10ac23(0x191)),_0x365f1b[_0x10ac23(0x1fd)](_0x474a65[_0x10ac23(0x1b3)](_0x297f08,_0xeffb4f,_0x10ac23(0x17d),_0x46ed4e,_0x36814a,function(_0x4654ce){return function(){return _0x4654ce;};}(_0x409bc0)));}),!_0x1cc8a7){try{for(_0x17e64e in _0xeffb4f)if(!(_0x349f01&&_0x559f15[_0x2863bb(0x214)](_0x17e64e))&&!this[_0x2863bb(0x25b)](_0xeffb4f,_0x17e64e,_0x36814a)){if(_0x267115++,_0x36814a[_0x2863bb(0x1e4)]++,_0x267115>_0x5e1f5b){_0x44a108=!0x0;break;}if(!_0x36814a[_0x2863bb(0x210)]&&_0x36814a[_0x2863bb(0x19d)]&&_0x36814a[_0x2863bb(0x1e4)]>_0x36814a[_0x2863bb(0x269)]){_0x44a108=!0x0;break;}_0x365f1b[_0x2863bb(0x1fd)](_0x474a65[_0x2863bb(0x16e)](_0x297f08,_0x37308c,_0xeffb4f,_0x5eff44,_0x17e64e,_0x36814a));}}catch{}if(_0x37308c['_p_length']=!0x0,_0x37632f&&(_0x37308c[_0x2863bb(0x20d)]=!0x0),!_0x44a108){var _0x490853=[][_0x2863bb(0x225)](this[_0x2863bb(0x1da)](_0xeffb4f))[_0x2863bb(0x225)](this[_0x2863bb(0x1aa)](_0xeffb4f));for(_0x5e0e4e=0x0,_0xfc0644=_0x490853['length'];_0x5e0e4e<_0xfc0644;_0x5e0e4e++)if(_0x17e64e=_0x490853[_0x5e0e4e],!(_0x349f01&&_0x559f15[_0x2863bb(0x214)](_0x17e64e[_0x2863bb(0x261)]()))&&!this[_0x2863bb(0x25b)](_0xeffb4f,_0x17e64e,_0x36814a)&&!_0x37308c[typeof _0x17e64e!=_0x2863bb(0x1f9)?'_p_'+_0x17e64e[_0x2863bb(0x261)]():_0x17e64e]){if(_0x267115++,_0x36814a[_0x2863bb(0x1e4)]++,_0x267115>_0x5e1f5b){_0x44a108=!0x0;break;}if(!_0x36814a[_0x2863bb(0x210)]&&_0x36814a['autoExpand']&&_0x36814a[_0x2863bb(0x1e4)]>_0x36814a[_0x2863bb(0x269)]){_0x44a108=!0x0;break;}_0x365f1b[_0x2863bb(0x1fd)](_0x474a65[_0x2863bb(0x16e)](_0x297f08,_0x37308c,_0xeffb4f,_0x5eff44,_0x17e64e,_0x36814a));}}}}}if(_0x3f1448['type']=_0x5eff44,_0xc6e1f3?(_0x3f1448[_0x2863bb(0x1f0)]=_0xeffb4f['valueOf'](),this[_0x2863bb(0x1ab)](_0x5eff44,_0x3f1448,_0x36814a,_0x51888e)):_0x5eff44==='date'?_0x3f1448[_0x2863bb(0x1f0)]=this['_dateToString'][_0x2863bb(0x243)](_0xeffb4f):_0x5eff44===_0x2863bb(0x20b)?_0x3f1448['value']=_0xeffb4f[_0x2863bb(0x261)]():_0x5eff44===_0x2863bb(0x166)?_0x3f1448[_0x2863bb(0x1f0)]=this[_0x2863bb(0x1d0)][_0x2863bb(0x243)](_0xeffb4f):_0x5eff44===_0x2863bb(0x1f9)&&this[_0x2863bb(0x23c)]?_0x3f1448['value']=this['_Symbol'][_0x2863bb(0x1e0)][_0x2863bb(0x261)][_0x2863bb(0x243)](_0xeffb4f):!_0x36814a[_0x2863bb(0x18b)]&&!(_0x5eff44===_0x2863bb(0x1f5)||_0x5eff44===_0x2863bb(0x216))&&(delete _0x3f1448[_0x2863bb(0x1f0)],_0x3f1448['capped']=!0x0),_0x44a108&&(_0x3f1448[_0x2863bb(0x188)]=!0x0),_0x375768=_0x36814a[_0x2863bb(0x1bf)][_0x2863bb(0x1cd)],_0x36814a['node'][_0x2863bb(0x1cd)]=_0x3f1448,this[_0x2863bb(0x1b6)](_0x3f1448,_0x36814a),_0x365f1b['length']){for(_0x5e0e4e=0x0,_0xfc0644=_0x365f1b[_0x2863bb(0x1ba)];_0x5e0e4e<_0xfc0644;_0x5e0e4e++)_0x365f1b[_0x5e0e4e](_0x5e0e4e);}_0x297f08[_0x2863bb(0x1ba)]&&(_0x3f1448[_0x2863bb(0x25e)]=_0x297f08);}catch(_0x333b83){_0x151fe6(_0x333b83,_0x3f1448,_0x36814a);}this['_additionalMetadata'](_0xeffb4f,_0x3f1448),this[_0x2863bb(0x19e)](_0x3f1448,_0x36814a),_0x36814a[_0x2863bb(0x1bf)]['current']=_0x375768,_0x36814a[_0x2863bb(0x19f)]--,_0x36814a[_0x2863bb(0x19d)]=_0xc35d94,_0x36814a[_0x2863bb(0x19d)]&&_0x36814a[_0x2863bb(0x258)][_0x2863bb(0x1b0)]();}finally{_0x11e99d&&(_0xe648bd[_0x2863bb(0x175)][_0x2863bb(0x239)]=_0x11e99d),_0x5ac6ec&&(_0xe648bd['console'][_0x2863bb(0x17f)]=_0x5ac6ec),_0xe648bd[_0x2863bb(0x1fa)]=_0x1a0153;}return _0x3f1448;},_0x27a2bb[_0x4972c0(0x1e0)][_0x4972c0(0x1aa)]=function(_0x54e624){var _0x577a71=_0x4972c0;return Object[_0x577a71(0x199)]?Object[_0x577a71(0x199)](_0x54e624):[];},_0x27a2bb['prototype'][_0x4972c0(0x22b)]=function(_0x342efb){var _0x2cbd92=_0x4972c0;return!!(_0x342efb&&_0xe648bd['Set']&&this['_objectToString'](_0x342efb)===_0x2cbd92(0x19c)&&_0x342efb[_0x2cbd92(0x1bb)]);},_0x27a2bb['prototype'][_0x4972c0(0x25b)]=function(_0x4b81f2,_0x34d131,_0x3db946){var _0x18c043=_0x4972c0;if(!_0x3db946[_0x18c043(0x240)]){let _0x4abf91=this['_getOwnPropertyDescriptor'](_0x4b81f2,_0x34d131);if(_0x4abf91&&_0x4abf91[_0x18c043(0x172)])return!0x0;}return _0x3db946['noFunctions']?typeof _0x4b81f2[_0x34d131]==_0x18c043(0x213):!0x1;},_0x27a2bb[_0x4972c0(0x1e0)][_0x4972c0(0x1a0)]=function(_0x39aa20){var _0xb82740=_0x4972c0,_0x484aa7='';return _0x484aa7=typeof _0x39aa20,_0x484aa7===_0xb82740(0x20a)?this[_0xb82740(0x259)](_0x39aa20)===_0xb82740(0x1ef)?_0x484aa7=_0xb82740(0x233):this[_0xb82740(0x259)](_0x39aa20)===_0xb82740(0x1f1)?_0x484aa7='date':this[_0xb82740(0x259)](_0x39aa20)===_0xb82740(0x202)?_0x484aa7='bigint':_0x39aa20===null?_0x484aa7=_0xb82740(0x1f5):_0x39aa20['constructor']&&(_0x484aa7=_0x39aa20['constructor'][_0xb82740(0x16c)]||_0x484aa7):_0x484aa7===_0xb82740(0x216)&&this[_0xb82740(0x1ff)]&&_0x39aa20 instanceof this[_0xb82740(0x1ff)]&&(_0x484aa7='HTMLAllCollection'),_0x484aa7;},_0x27a2bb[_0x4972c0(0x1e0)]['_objectToString']=function(_0x18c5db){var _0x543437=_0x4972c0;return Object[_0x543437(0x1e0)]['toString']['call'](_0x18c5db);},_0x27a2bb[_0x4972c0(0x1e0)][_0x4972c0(0x245)]=function(_0x4d7673){var _0x257a15=_0x4972c0;return _0x4d7673===_0x257a15(0x168)||_0x4d7673==='string'||_0x4d7673==='number';},_0x27a2bb[_0x4972c0(0x1e0)][_0x4972c0(0x26a)]=function(_0x19140a){var _0xc8ac70=_0x4972c0;return _0x19140a==='Boolean'||_0x19140a===_0xc8ac70(0x15d)||_0x19140a===_0xc8ac70(0x251);},_0x27a2bb['prototype'][_0x4972c0(0x1b3)]=function(_0x4bc3b3,_0x1a866b,_0x48e504,_0x34c79e,_0x34c254,_0x579723){var _0x24d662=this;return function(_0x9f957f){var _0x50e283=_0x2259,_0x2d612d=_0x34c254[_0x50e283(0x1bf)][_0x50e283(0x1cd)],_0x213151=_0x34c254[_0x50e283(0x1bf)][_0x50e283(0x22d)],_0x1f083f=_0x34c254['node']['parent'];_0x34c254['node'][_0x50e283(0x1b1)]=_0x2d612d,_0x34c254[_0x50e283(0x1bf)][_0x50e283(0x22d)]=typeof _0x34c79e==_0x50e283(0x17a)?_0x34c79e:_0x9f957f,_0x4bc3b3[_0x50e283(0x1fd)](_0x24d662[_0x50e283(0x1e1)](_0x1a866b,_0x48e504,_0x34c79e,_0x34c254,_0x579723)),_0x34c254['node']['parent']=_0x1f083f,_0x34c254[_0x50e283(0x1bf)][_0x50e283(0x22d)]=_0x213151;};},_0x27a2bb[_0x4972c0(0x1e0)][_0x4972c0(0x16e)]=function(_0x50f5d4,_0x222d67,_0x2ff0d9,_0x4f8c01,_0xc2d2b2,_0xf85f43,_0x401f41){var _0x4b6f30=_0x4972c0,_0x11af12=this;return _0x222d67[typeof _0xc2d2b2!=_0x4b6f30(0x1f9)?_0x4b6f30(0x237)+_0xc2d2b2[_0x4b6f30(0x261)]():_0xc2d2b2]=!0x0,function(_0x18a4c4){var _0x21c95a=_0x4b6f30,_0x166c96=_0xf85f43['node'][_0x21c95a(0x1cd)],_0x8bb49a=_0xf85f43[_0x21c95a(0x1bf)]['index'],_0x5de03b=_0xf85f43[_0x21c95a(0x1bf)][_0x21c95a(0x1b1)];_0xf85f43[_0x21c95a(0x1bf)][_0x21c95a(0x1b1)]=_0x166c96,_0xf85f43[_0x21c95a(0x1bf)][_0x21c95a(0x22d)]=_0x18a4c4,_0x50f5d4[_0x21c95a(0x1fd)](_0x11af12[_0x21c95a(0x1e1)](_0x2ff0d9,_0x4f8c01,_0xc2d2b2,_0xf85f43,_0x401f41)),_0xf85f43[_0x21c95a(0x1bf)][_0x21c95a(0x1b1)]=_0x5de03b,_0xf85f43[_0x21c95a(0x1bf)][_0x21c95a(0x22d)]=_0x8bb49a;};},_0x27a2bb[_0x4972c0(0x1e0)]['_property']=function(_0xd05ba8,_0x191f16,_0x39d076,_0x5ddc9e,_0x502bde){var _0xc423de=_0x4972c0,_0x4215e7=this;_0x502bde||(_0x502bde=function(_0x165ded,_0x243578){return _0x165ded[_0x243578];});var _0x547ec1=_0x39d076[_0xc423de(0x261)](),_0x25f581=_0x5ddc9e['expressionsToEvaluate']||{},_0x1e6697=_0x5ddc9e[_0xc423de(0x18b)],_0x3cc994=_0x5ddc9e[_0xc423de(0x210)];try{var _0xb165af=this[_0xc423de(0x264)](_0xd05ba8),_0x15cca7=_0x547ec1;_0xb165af&&_0x15cca7[0x0]==='\\x27'&&(_0x15cca7=_0x15cca7[_0xc423de(0x160)](0x1,_0x15cca7[_0xc423de(0x1ba)]-0x2));var _0x1673f1=_0x5ddc9e['expressionsToEvaluate']=_0x25f581[_0xc423de(0x237)+_0x15cca7];_0x1673f1&&(_0x5ddc9e[_0xc423de(0x18b)]=_0x5ddc9e['depth']+0x1),_0x5ddc9e[_0xc423de(0x210)]=!!_0x1673f1;var _0x5099fa=typeof _0x39d076==_0xc423de(0x1f9),_0x22101b={'name':_0x5099fa||_0xb165af?_0x547ec1:this[_0xc423de(0x185)](_0x547ec1)};if(_0x5099fa&&(_0x22101b['symbol']=!0x0),!(_0x191f16===_0xc423de(0x233)||_0x191f16==='Error')){var _0x504b2c=this[_0xc423de(0x1c0)](_0xd05ba8,_0x39d076);if(_0x504b2c&&(_0x504b2c[_0xc423de(0x1ce)]&&(_0x22101b[_0xc423de(0x167)]=!0x0),_0x504b2c[_0xc423de(0x172)]&&!_0x1673f1&&!_0x5ddc9e['resolveGetters']))return _0x22101b[_0xc423de(0x1ca)]=!0x0,this[_0xc423de(0x1f2)](_0x22101b,_0x5ddc9e),_0x22101b;}var _0x2975c8;try{_0x2975c8=_0x502bde(_0xd05ba8,_0x39d076);}catch(_0x205498){return _0x22101b={'name':_0x547ec1,'type':_0xc423de(0x1bc),'error':_0x205498[_0xc423de(0x1a9)]},this['_processTreeNodeResult'](_0x22101b,_0x5ddc9e),_0x22101b;}var _0x161773=this[_0xc423de(0x1a0)](_0x2975c8),_0x25b2a3=this[_0xc423de(0x245)](_0x161773);if(_0x22101b[_0xc423de(0x205)]=_0x161773,_0x25b2a3)this[_0xc423de(0x1f2)](_0x22101b,_0x5ddc9e,_0x2975c8,function(){var _0x57fc46=_0xc423de;_0x22101b['value']=_0x2975c8[_0x57fc46(0x1a3)](),!_0x1673f1&&_0x4215e7[_0x57fc46(0x1ab)](_0x161773,_0x22101b,_0x5ddc9e,{});});else{var _0x2c0e8a=_0x5ddc9e[_0xc423de(0x19d)]&&_0x5ddc9e[_0xc423de(0x19f)]<_0x5ddc9e['autoExpandMaxDepth']&&_0x5ddc9e[_0xc423de(0x258)][_0xc423de(0x229)](_0x2975c8)<0x0&&_0x161773!==_0xc423de(0x213)&&_0x5ddc9e['autoExpandPropertyCount']<_0x5ddc9e[_0xc423de(0x269)];_0x2c0e8a||_0x5ddc9e[_0xc423de(0x19f)]<_0x1e6697||_0x1673f1?this[_0xc423de(0x24f)](_0x22101b,_0x2975c8,_0x5ddc9e,_0x1673f1||{}):this[_0xc423de(0x1f2)](_0x22101b,_0x5ddc9e,_0x2975c8,function(){var _0x308e8e=_0xc423de;_0x161773==='null'||_0x161773===_0x308e8e(0x216)||(delete _0x22101b['value'],_0x22101b['capped']=!0x0);});}return _0x22101b;}finally{_0x5ddc9e['expressionsToEvaluate']=_0x25f581,_0x5ddc9e[_0xc423de(0x18b)]=_0x1e6697,_0x5ddc9e[_0xc423de(0x210)]=_0x3cc994;}},_0x27a2bb[_0x4972c0(0x1e0)][_0x4972c0(0x1ab)]=function(_0x4dd1a0,_0x57a2a2,_0x16be66,_0x138605){var _0x3a7e17=_0x4972c0,_0x4c2106=_0x138605[_0x3a7e17(0x235)]||_0x16be66[_0x3a7e17(0x235)];if((_0x4dd1a0===_0x3a7e17(0x1a2)||_0x4dd1a0===_0x3a7e17(0x15d))&&_0x57a2a2['value']){let _0x127005=_0x57a2a2['value']['length'];_0x16be66['allStrLength']+=_0x127005,_0x16be66[_0x3a7e17(0x201)]>_0x16be66['totalStrLength']?(_0x57a2a2[_0x3a7e17(0x1be)]='',delete _0x57a2a2[_0x3a7e17(0x1f0)]):_0x127005>_0x4c2106&&(_0x57a2a2[_0x3a7e17(0x1be)]=_0x57a2a2[_0x3a7e17(0x1f0)][_0x3a7e17(0x160)](0x0,_0x4c2106),delete _0x57a2a2[_0x3a7e17(0x1f0)]);}},_0x27a2bb[_0x4972c0(0x1e0)][_0x4972c0(0x264)]=function(_0xda70bd){var _0x5bba4b=_0x4972c0;return!!(_0xda70bd&&_0xe648bd[_0x5bba4b(0x17d)]&&this[_0x5bba4b(0x259)](_0xda70bd)===_0x5bba4b(0x1b2)&&_0xda70bd['forEach']);},_0x27a2bb[_0x4972c0(0x1e0)][_0x4972c0(0x185)]=function(_0x54609f){var _0x5d1223=_0x4972c0;if(_0x54609f['match'](/^\\d+$/))return _0x54609f;var _0xb75f54;try{_0xb75f54=JSON[_0x5d1223(0x1dc)](''+_0x54609f);}catch{_0xb75f54='\\x22'+this['_objectToString'](_0x54609f)+'\\x22';}return _0xb75f54[_0x5d1223(0x244)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0xb75f54=_0xb75f54[_0x5d1223(0x160)](0x1,_0xb75f54[_0x5d1223(0x1ba)]-0x2):_0xb75f54=_0xb75f54[_0x5d1223(0x21e)](/'/g,'\\x5c\\x27')[_0x5d1223(0x21e)](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0xb75f54;},_0x27a2bb[_0x4972c0(0x1e0)][_0x4972c0(0x1f2)]=function(_0x268cb3,_0x35cbfa,_0x1ef69b,_0x6f36a3){var _0x34debb=_0x4972c0;this[_0x34debb(0x1b6)](_0x268cb3,_0x35cbfa),_0x6f36a3&&_0x6f36a3(),this['_additionalMetadata'](_0x1ef69b,_0x268cb3),this[_0x34debb(0x19e)](_0x268cb3,_0x35cbfa);},_0x27a2bb[_0x4972c0(0x1e0)][_0x4972c0(0x1b6)]=function(_0x3c3850,_0x4794d1){var _0x3b79e0=_0x4972c0;this['_setNodeId'](_0x3c3850,_0x4794d1),this[_0x3b79e0(0x1af)](_0x3c3850,_0x4794d1),this[_0x3b79e0(0x266)](_0x3c3850,_0x4794d1),this[_0x3b79e0(0x15f)](_0x3c3850,_0x4794d1);},_0x27a2bb[_0x4972c0(0x1e0)][_0x4972c0(0x203)]=function(_0x5ae280,_0x1e284f){},_0x27a2bb[_0x4972c0(0x1e0)]['_setNodeQueryPath']=function(_0x2cd13e,_0x40d6b4){},_0x27a2bb['prototype']['_setNodeLabel']=function(_0xdb4308,_0x55c8ab){},_0x27a2bb['prototype'][_0x4972c0(0x170)]=function(_0x31dc0d){var _0x2c0d85=_0x4972c0;return _0x31dc0d===this[_0x2c0d85(0x1bd)];},_0x27a2bb[_0x4972c0(0x1e0)][_0x4972c0(0x19e)]=function(_0x50226b,_0x25b15f){var _0x5b6b84=_0x4972c0;this['_setNodeLabel'](_0x50226b,_0x25b15f),this[_0x5b6b84(0x1ec)](_0x50226b),_0x25b15f[_0x5b6b84(0x241)]&&this[_0x5b6b84(0x23d)](_0x50226b),this['_addFunctionsNode'](_0x50226b,_0x25b15f),this[_0x5b6b84(0x207)](_0x50226b,_0x25b15f),this['_cleanNode'](_0x50226b);},_0x27a2bb['prototype']['_additionalMetadata']=function(_0x233dda,_0x2e87b5){var _0x399cdd=_0x4972c0;try{_0x233dda&&typeof _0x233dda[_0x399cdd(0x1ba)]==_0x399cdd(0x17a)&&(_0x2e87b5['length']=_0x233dda[_0x399cdd(0x1ba)]);}catch{}if(_0x2e87b5[_0x399cdd(0x205)]===_0x399cdd(0x17a)||_0x2e87b5[_0x399cdd(0x205)]===_0x399cdd(0x251)){if(isNaN(_0x2e87b5[_0x399cdd(0x1f0)]))_0x2e87b5['nan']=!0x0,delete _0x2e87b5[_0x399cdd(0x1f0)];else switch(_0x2e87b5[_0x399cdd(0x1f0)]){case Number[_0x399cdd(0x252)]:_0x2e87b5[_0x399cdd(0x24a)]=!0x0,delete _0x2e87b5[_0x399cdd(0x1f0)];break;case Number[_0x399cdd(0x1cb)]:_0x2e87b5[_0x399cdd(0x204)]=!0x0,delete _0x2e87b5[_0x399cdd(0x1f0)];break;case 0x0:this[_0x399cdd(0x26b)](_0x2e87b5[_0x399cdd(0x1f0)])&&(_0x2e87b5[_0x399cdd(0x1a7)]=!0x0);break;}}else _0x2e87b5[_0x399cdd(0x205)]===_0x399cdd(0x213)&&typeof _0x233dda[_0x399cdd(0x16c)]=='string'&&_0x233dda['name']&&_0x2e87b5[_0x399cdd(0x16c)]&&_0x233dda[_0x399cdd(0x16c)]!==_0x2e87b5[_0x399cdd(0x16c)]&&(_0x2e87b5[_0x399cdd(0x262)]=_0x233dda[_0x399cdd(0x16c)]);},_0x27a2bb[_0x4972c0(0x1e0)][_0x4972c0(0x26b)]=function(_0x2bde78){var _0x157b6a=_0x4972c0;return 0x1/_0x2bde78===Number[_0x157b6a(0x1cb)];},_0x27a2bb[_0x4972c0(0x1e0)]['_sortProps']=function(_0x114493){var _0x40f8a5=_0x4972c0;!_0x114493[_0x40f8a5(0x25e)]||!_0x114493[_0x40f8a5(0x25e)][_0x40f8a5(0x1ba)]||_0x114493[_0x40f8a5(0x205)]===_0x40f8a5(0x233)||_0x114493[_0x40f8a5(0x205)]===_0x40f8a5(0x17d)||_0x114493['type']===_0x40f8a5(0x1e7)||_0x114493[_0x40f8a5(0x25e)][_0x40f8a5(0x25f)](function(_0x2f0103,_0x5c04ec){var _0x35b737=_0x40f8a5,_0x22c497=_0x2f0103['name'][_0x35b737(0x1b4)](),_0x221888=_0x5c04ec['name'][_0x35b737(0x1b4)]();return _0x22c497<_0x221888?-0x1:_0x22c497>_0x221888?0x1:0x0;});},_0x27a2bb[_0x4972c0(0x1e0)]['_addFunctionsNode']=function(_0x4c9613,_0x498dc2){var _0xd2e08f=_0x4972c0;if(!(_0x498dc2[_0xd2e08f(0x26c)]||!_0x4c9613[_0xd2e08f(0x25e)]||!_0x4c9613[_0xd2e08f(0x25e)][_0xd2e08f(0x1ba)])){for(var _0x1c871b=[],_0x47ffcb=[],_0x4be09a=0x0,_0x57241c=_0x4c9613[_0xd2e08f(0x25e)]['length'];_0x4be09a<_0x57241c;_0x4be09a++){var _0x5cf7ec=_0x4c9613[_0xd2e08f(0x25e)][_0x4be09a];_0x5cf7ec[_0xd2e08f(0x205)]===_0xd2e08f(0x213)?_0x1c871b[_0xd2e08f(0x1fd)](_0x5cf7ec):_0x47ffcb[_0xd2e08f(0x1fd)](_0x5cf7ec);}if(!(!_0x47ffcb[_0xd2e08f(0x1ba)]||_0x1c871b[_0xd2e08f(0x1ba)]<=0x1)){_0x4c9613[_0xd2e08f(0x25e)]=_0x47ffcb;var _0x177f60={'functionsNode':!0x0,'props':_0x1c871b};this['_setNodeId'](_0x177f60,_0x498dc2),this[_0xd2e08f(0x1c6)](_0x177f60,_0x498dc2),this[_0xd2e08f(0x1ec)](_0x177f60),this[_0xd2e08f(0x15f)](_0x177f60,_0x498dc2),_0x177f60['id']+='\\x20f',_0x4c9613[_0xd2e08f(0x25e)][_0xd2e08f(0x263)](_0x177f60);}}},_0x27a2bb['prototype'][_0x4972c0(0x207)]=function(_0x1186be,_0x4a9a58){},_0x27a2bb[_0x4972c0(0x1e0)][_0x4972c0(0x1ec)]=function(_0x292332){},_0x27a2bb[_0x4972c0(0x1e0)][_0x4972c0(0x1eb)]=function(_0x335b4d){var _0x422578=_0x4972c0;return Array[_0x422578(0x186)](_0x335b4d)||typeof _0x335b4d==_0x422578(0x20a)&&this[_0x422578(0x259)](_0x335b4d)===_0x422578(0x1ef);},_0x27a2bb[_0x4972c0(0x1e0)][_0x4972c0(0x15f)]=function(_0x33f229,_0x391d67){},_0x27a2bb[_0x4972c0(0x1e0)][_0x4972c0(0x257)]=function(_0x8aef8a){var _0x5a1d5d=_0x4972c0;delete _0x8aef8a[_0x5a1d5d(0x178)],delete _0x8aef8a[_0x5a1d5d(0x1a8)],delete _0x8aef8a['_hasMapOnItsPath'];},_0x27a2bb['prototype'][_0x4972c0(0x266)]=function(_0x3fa706,_0x440bbe){};let _0x604b8a=new _0x27a2bb(),_0x235373={'props':_0x4a4801[_0x4972c0(0x238)]['props']||0x64,'elements':_0x4a4801[_0x4972c0(0x238)]['elements']||0x64,'strLength':_0x4a4801['defaultLimits'][_0x4972c0(0x235)]||0x400*0x32,'totalStrLength':_0x4a4801[_0x4972c0(0x238)][_0x4972c0(0x163)]||0x400*0x32,'autoExpandLimit':_0x4a4801[_0x4972c0(0x238)]['autoExpandLimit']||0x1388,'autoExpandMaxDepth':_0x4a4801[_0x4972c0(0x238)][_0x4972c0(0x20c)]||0xa},_0x1f4129={'props':_0x4a4801[_0x4972c0(0x23f)]['props']||0x5,'elements':_0x4a4801['reducedLimits'][_0x4972c0(0x198)]||0x5,'strLength':_0x4a4801[_0x4972c0(0x23f)][_0x4972c0(0x235)]||0x100,'totalStrLength':_0x4a4801[_0x4972c0(0x23f)][_0x4972c0(0x163)]||0x100*0x3,'autoExpandLimit':_0x4a4801[_0x4972c0(0x23f)][_0x4972c0(0x269)]||0x1e,'autoExpandMaxDepth':_0x4a4801['reducedLimits'][_0x4972c0(0x20c)]||0x2};if(_0x33744e){let _0x1589b6=_0x604b8a[_0x4972c0(0x24f)][_0x4972c0(0x1f3)](_0x604b8a);_0x604b8a[_0x4972c0(0x24f)]=function(_0x5c1776,_0x16c2f4,_0x25718a,_0xff233d){return _0x1589b6(_0x5c1776,_0x33744e(_0x16c2f4),_0x25718a,_0xff233d);};}function _0x55d563(_0x4734dc,_0x396ff7,_0x2582a7,_0x242e7c,_0x51863c,_0x51d36b){var _0x49e56f=_0x4972c0;let _0x34e22e,_0x36e4de;try{_0x36e4de=_0x129903(),_0x34e22e=_0x1565ad[_0x396ff7],!_0x34e22e||_0x36e4de-_0x34e22e['ts']>_0x105198[_0x49e56f(0x174)][_0x49e56f(0x23e)]&&_0x34e22e[_0x49e56f(0x255)]&&_0x34e22e[_0x49e56f(0x17e)]/_0x34e22e[_0x49e56f(0x255)]<_0x105198[_0x49e56f(0x174)][_0x49e56f(0x15e)]?(_0x1565ad[_0x396ff7]=_0x34e22e={'count':0x0,'time':0x0,'ts':_0x36e4de},_0x1565ad[_0x49e56f(0x248)]={}):_0x36e4de-_0x1565ad[_0x49e56f(0x248)]['ts']>_0x105198[_0x49e56f(0x169)][_0x49e56f(0x23e)]&&_0x1565ad[_0x49e56f(0x248)]['count']&&_0x1565ad['hits'][_0x49e56f(0x17e)]/_0x1565ad['hits']['count']<_0x105198['global'][_0x49e56f(0x15e)]&&(_0x1565ad[_0x49e56f(0x248)]={});let _0x33897f=[],_0x22db29=_0x34e22e[_0x49e56f(0x16a)]||_0x1565ad[_0x49e56f(0x248)][_0x49e56f(0x16a)]?_0x1f4129:_0x235373,_0x585b6e=_0x262782=>{var _0x2e50ee=_0x49e56f;let _0x4ca30a={};return _0x4ca30a[_0x2e50ee(0x25e)]=_0x262782['props'],_0x4ca30a[_0x2e50ee(0x198)]=_0x262782['elements'],_0x4ca30a[_0x2e50ee(0x235)]=_0x262782['strLength'],_0x4ca30a['totalStrLength']=_0x262782['totalStrLength'],_0x4ca30a[_0x2e50ee(0x269)]=_0x262782[_0x2e50ee(0x269)],_0x4ca30a['autoExpandMaxDepth']=_0x262782[_0x2e50ee(0x20c)],_0x4ca30a['sortProps']=!0x1,_0x4ca30a['noFunctions']=!_0x4abecc,_0x4ca30a[_0x2e50ee(0x18b)]=0x1,_0x4ca30a[_0x2e50ee(0x19f)]=0x0,_0x4ca30a[_0x2e50ee(0x230)]=_0x2e50ee(0x242),_0x4ca30a['rootExpression']=_0x2e50ee(0x24d),_0x4ca30a[_0x2e50ee(0x19d)]=!0x0,_0x4ca30a[_0x2e50ee(0x258)]=[],_0x4ca30a[_0x2e50ee(0x1e4)]=0x0,_0x4ca30a[_0x2e50ee(0x240)]=_0x4a4801[_0x2e50ee(0x240)],_0x4ca30a[_0x2e50ee(0x201)]=0x0,_0x4ca30a['node']={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x4ca30a;};for(var _0xa24a84=0x0;_0xa24a84<_0x51863c[_0x49e56f(0x1ba)];_0xa24a84++)_0x33897f['push'](_0x604b8a[_0x49e56f(0x24f)]({'timeNode':_0x4734dc===_0x49e56f(0x17e)||void 0x0},_0x51863c[_0xa24a84],_0x585b6e(_0x22db29),{}));if(_0x4734dc==='trace'||_0x4734dc==='error'){let _0x4d1cee=Error[_0x49e56f(0x21b)];try{Error[_0x49e56f(0x21b)]=0x1/0x0,_0x33897f[_0x49e56f(0x1fd)](_0x604b8a[_0x49e56f(0x24f)]({'stackNode':!0x0},new Error()['stack'],_0x585b6e(_0x22db29),{'strLength':0x1/0x0}));}finally{Error['stackTraceLimit']=_0x4d1cee;}}return{'method':_0x49e56f(0x224),'version':_0x1c2887,'args':[{'ts':_0x2582a7,'session':_0x242e7c,'args':_0x33897f,'id':_0x396ff7,'context':_0x51d36b}]};}catch(_0xabf49f){return{'method':_0x49e56f(0x224),'version':_0x1c2887,'args':[{'ts':_0x2582a7,'session':_0x242e7c,'args':[{'type':_0x49e56f(0x1bc),'error':_0xabf49f&&_0xabf49f[_0x49e56f(0x1a9)]}],'id':_0x396ff7,'context':_0x51d36b}]};}finally{try{if(_0x34e22e&&_0x36e4de){let _0x515ae2=_0x129903();_0x34e22e[_0x49e56f(0x255)]++,_0x34e22e[_0x49e56f(0x17e)]+=_0x351127(_0x36e4de,_0x515ae2),_0x34e22e['ts']=_0x515ae2,_0x1565ad[_0x49e56f(0x248)][_0x49e56f(0x255)]++,_0x1565ad[_0x49e56f(0x248)][_0x49e56f(0x17e)]+=_0x351127(_0x36e4de,_0x515ae2),_0x1565ad[_0x49e56f(0x248)]['ts']=_0x515ae2,(_0x34e22e[_0x49e56f(0x255)]>_0x105198[_0x49e56f(0x174)][_0x49e56f(0x192)]||_0x34e22e[_0x49e56f(0x17e)]>_0x105198[_0x49e56f(0x174)]['reduceOnAccumulatedProcessingTimeMs'])&&(_0x34e22e[_0x49e56f(0x16a)]=!0x0),(_0x1565ad[_0x49e56f(0x248)][_0x49e56f(0x255)]>_0x105198[_0x49e56f(0x169)][_0x49e56f(0x192)]||_0x1565ad['hits'][_0x49e56f(0x17e)]>_0x105198['global'][_0x49e56f(0x23a)])&&(_0x1565ad['hits'][_0x49e56f(0x16a)]=!0x0);}}catch{}}}return _0x55d563;}function G(_0x3956e5){var _0x38c0e4=_0x3fa772;if(_0x3956e5&&typeof _0x3956e5==_0x38c0e4(0x20a)&&_0x3956e5['constructor'])switch(_0x3956e5[_0x38c0e4(0x25a)][_0x38c0e4(0x16c)]){case _0x38c0e4(0x190):return _0x3956e5['hasOwnProperty'](Symbol[_0x38c0e4(0x162)])?Promise[_0x38c0e4(0x1de)]():_0x3956e5;case'bound\\x20Promise':return Promise[_0x38c0e4(0x1de)]();}return _0x3956e5;}((_0x5938e4,_0x3db3c9,_0x290312,_0x1229dc,_0x2a2252,_0xd5993f,_0x5fbf7,_0x502a0d,_0x2449e9,_0x5426f2,_0x554e6f,_0x1df9a4)=>{var _0x17584a=_0x3fa772;if(_0x5938e4['_console_ninja'])return _0x5938e4['_console_ninja'];let _0x20f724={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}};if(!X(_0x5938e4,_0x502a0d,_0x2a2252))return _0x5938e4[_0x17584a(0x1c3)]=_0x20f724,_0x5938e4['_console_ninja'];let _0x292f6a=b(_0x5938e4),_0x1b2e8f=_0x292f6a[_0x17584a(0x18c)],_0x1264cc=_0x292f6a[_0x17584a(0x217)],_0x18b9e0=_0x292f6a[_0x17584a(0x1d5)],_0x263a74={'hits':{},'ts':{}},_0x253b26=J(_0x5938e4,_0x2449e9,_0x263a74,_0xd5993f,_0x1df9a4,_0x2a2252===_0x17584a(0x194)?G:void 0x0),_0x3b668d=(_0x29c91c,_0x2ae76d,_0x48f89c,_0x4499a7,_0x1cb65d,_0x1818ff)=>{var _0x709010=_0x17584a;let _0x1f7244=_0x5938e4[_0x709010(0x1c3)];try{return _0x5938e4[_0x709010(0x1c3)]=_0x20f724,_0x253b26(_0x29c91c,_0x2ae76d,_0x48f89c,_0x4499a7,_0x1cb65d,_0x1818ff);}finally{_0x5938e4['_console_ninja']=_0x1f7244;}},_0x4606fb=_0x226809=>{_0x263a74['ts'][_0x226809]=_0x1264cc();},_0x45f151=(_0x18bea4,_0x1ff7f7)=>{var _0x147411=_0x17584a;let _0x39860e=_0x263a74['ts'][_0x1ff7f7];if(delete _0x263a74['ts'][_0x1ff7f7],_0x39860e){let _0x345a64=_0x1b2e8f(_0x39860e,_0x1264cc());_0x5a2eb1(_0x3b668d(_0x147411(0x17e),_0x18bea4,_0x18b9e0(),_0x20a9f4,[_0x345a64],_0x1ff7f7));}},_0x3fe8ca=_0x30af51=>{var _0x25b367=_0x17584a,_0x1745af;return _0x2a2252===_0x25b367(0x194)&&_0x5938e4[_0x25b367(0x187)]&&((_0x1745af=_0x30af51==null?void 0x0:_0x30af51[_0x25b367(0x1c4)])==null?void 0x0:_0x1745af['length'])&&(_0x30af51[_0x25b367(0x1c4)][0x0][_0x25b367(0x187)]=_0x5938e4[_0x25b367(0x187)]),_0x30af51;};_0x5938e4[_0x17584a(0x1c3)]={'consoleLog':(_0x477115,_0x513276)=>{var _0xf30037=_0x17584a;_0x5938e4[_0xf30037(0x175)][_0xf30037(0x224)][_0xf30037(0x16c)]!==_0xf30037(0x1e8)&&_0x5a2eb1(_0x3b668d(_0xf30037(0x224),_0x477115,_0x18b9e0(),_0x20a9f4,_0x513276));},'consoleTrace':(_0x3c5d0a,_0x334c6f)=>{var _0x172300=_0x17584a,_0x3c0514,_0x2c8c36;_0x5938e4[_0x172300(0x175)]['log'][_0x172300(0x16c)]!==_0x172300(0x18e)&&((_0x2c8c36=(_0x3c0514=_0x5938e4['process'])==null?void 0x0:_0x3c0514[_0x172300(0x212)])!=null&&_0x2c8c36[_0x172300(0x1bf)]&&(_0x5938e4[_0x172300(0x1e3)]=!0x0),_0x5a2eb1(_0x3fe8ca(_0x3b668d(_0x172300(0x219),_0x3c5d0a,_0x18b9e0(),_0x20a9f4,_0x334c6f))));},'consoleError':(_0x4732b1,_0x5813c9)=>{var _0x478577=_0x17584a;_0x5938e4[_0x478577(0x1e3)]=!0x0,_0x5a2eb1(_0x3fe8ca(_0x3b668d(_0x478577(0x239),_0x4732b1,_0x18b9e0(),_0x20a9f4,_0x5813c9)));},'consoleTime':_0x4ce4aa=>{_0x4606fb(_0x4ce4aa);},'consoleTimeEnd':(_0x48ba5a,_0x57643f)=>{_0x45f151(_0x57643f,_0x48ba5a);},'autoLog':(_0x58aa2f,_0x540014)=>{var _0x1620d9=_0x17584a;_0x5a2eb1(_0x3b668d(_0x1620d9(0x224),_0x540014,_0x18b9e0(),_0x20a9f4,[_0x58aa2f]));},'autoLogMany':(_0x3cd6d5,_0x2e1363)=>{var _0x47d5bf=_0x17584a;_0x5a2eb1(_0x3b668d(_0x47d5bf(0x224),_0x3cd6d5,_0x18b9e0(),_0x20a9f4,_0x2e1363));},'autoTrace':(_0x3edf83,_0xd5ca0d)=>{_0x5a2eb1(_0x3fe8ca(_0x3b668d('trace',_0xd5ca0d,_0x18b9e0(),_0x20a9f4,[_0x3edf83])));},'autoTraceMany':(_0x293e3b,_0x2bfd55)=>{var _0x10cd68=_0x17584a;_0x5a2eb1(_0x3fe8ca(_0x3b668d(_0x10cd68(0x219),_0x293e3b,_0x18b9e0(),_0x20a9f4,_0x2bfd55)));},'autoTime':(_0x286456,_0x267c5d,_0x1924bd)=>{_0x4606fb(_0x1924bd);},'autoTimeEnd':(_0x3bb828,_0x447fcd,_0x32e665)=>{_0x45f151(_0x447fcd,_0x32e665);},'coverage':_0x5ee76f=>{var _0x204ba1=_0x17584a;_0x5a2eb1({'method':_0x204ba1(0x236),'version':_0xd5993f,'args':[{'id':_0x5ee76f}]});}};let _0x5a2eb1=H(_0x5938e4,_0x3db3c9,_0x290312,_0x1229dc,_0x2a2252,_0x5426f2,_0x554e6f),_0x20a9f4=_0x5938e4['_console_ninja_session'];return _0x5938e4[_0x17584a(0x1c3)];})(globalThis,_0x3fa772(0x232),_0x3fa772(0x21a),_0x3fa772(0x1c7),_0x3fa772(0x1d4),_0x3fa772(0x1fe),'1772250891540',_0x3fa772(0x209),_0x3fa772(0x1c1),_0x3fa772(0x218),_0x3fa772(0x222),_0x3fa772(0x21c));");
    } catch (e) {
        console.error(e);
    }
}
function oo_oo(i, ...v) {
    try {
        oo_cm().consoleLog(i, v);
    } catch (e) {}
    return v;
}
oo_oo; /* istanbul ignore next */ 
function oo_tr(i, ...v) {
    try {
        oo_cm().consoleTrace(i, v);
    } catch (e) {}
    return v;
}
oo_tr; /* istanbul ignore next */ 
function oo_tx(i, ...v) {
    try {
        oo_cm().consoleError(i, v);
    } catch (e) {}
    return v;
}
oo_tx; /* istanbul ignore next */ 
function oo_ts(v) {
    try {
        oo_cm().consoleTime(v);
    } catch (e) {}
    return v;
}
oo_ts; /* istanbul ignore next */ 
function oo_te(v, i) {
    try {
        oo_cm().consoleTimeEnd(v, i);
    } catch (e) {}
    return v;
}
oo_te; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/ 
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/RiskRecommendations.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RiskRecommendations",
    ()=>RiskRecommendations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.js [app-client] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$apple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Apple$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/apple.js [app-client] (ecmascript) <export default as Apple>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const sections = [
    {
        key: "precautions",
        title: "Precautions",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"],
        color: "text-amber-600",
        bgColor: "bg-amber-50",
        borderColor: "border-amber-200",
        dotColor: "bg-amber-400"
    },
    {
        key: "recommendations",
        title: "Recommendations",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"],
        color: "text-blue-600",
        bgColor: "bg-blue-50",
        borderColor: "border-blue-200",
        dotColor: "bg-blue-400"
    },
    {
        key: "diet",
        title: "Diet & Food Habits",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$apple$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Apple$3e$__["Apple"],
        color: "text-green-600",
        bgColor: "bg-green-50",
        borderColor: "border-green-200",
        dotColor: "bg-green-400"
    }
];
function RiskRecommendations({ recommendations }) {
    _s();
    const [openSections, setOpenSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        precautions: true,
        recommendations: true,
        diet: true
    });
    if (!recommendations) return null;
    const toggleSection = (key)=>{
        setOpenSections((prev)=>({
                ...prev,
                [key]: !prev[key]
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "space-y-3 mt-4",
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5,
            delay: 0.3
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-sm font-bold text-gray-500 uppercase tracking-wider",
                    children: recommendations.is_fallback ? "General Guidance" : "Personalized Guidance"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/RiskRecommendations.tsx",
                    lineNumber: 70,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/RiskRecommendations.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this),
            recommendations.is_fallback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3 bg-blue-50/50 text-blue-800 p-4 rounded-xl border border-blue-100 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                        className: "h-5 w-5 shrink-0 mt-0.5 text-blue-600"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/RiskRecommendations.tsx",
                        lineNumber: 77,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm leading-relaxed",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold block mb-0.5 text-blue-900",
                                children: "Standard Clinical Guidelines"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/RiskRecommendations.tsx",
                                lineNumber: 79,
                                columnNumber: 25
                            }, this),
                            "Due to high server load, displaying general medical guidelines for this condition rather than AI-personalized insights."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/RiskRecommendations.tsx",
                        lineNumber: 78,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/RiskRecommendations.tsx",
                lineNumber: 76,
                columnNumber: 17
            }, this),
            sections.map((section, idx)=>{
                const items = recommendations[section.key];
                if (!items || items.length === 0) return null;
                const isOpen = openSections[section.key];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: -10
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        delay: 0.4 + idx * 0.15
                    },
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border overflow-hidden transition-all", section.borderColor, section.bgColor),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>toggleSection(section.key),
                            className: "w-full flex items-center justify-between px-4 py-3 hover:bg-white/40 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(section.icon, {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4", section.color)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/RiskRecommendations.tsx",
                                            lineNumber: 107,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-semibold", section.color),
                                            children: section.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/RiskRecommendations.tsx",
                                            lineNumber: 108,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/RiskRecommendations.tsx",
                                    lineNumber: 106,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-4 w-4 transition-transform duration-200", section.color, isOpen && "rotate-180")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/RiskRecommendations.tsx",
                                    lineNumber: 112,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/RiskRecommendations.tsx",
                            lineNumber: 102,
                            columnNumber: 25
                        }, this),
                        isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                height: 0,
                                opacity: 0
                            },
                            animate: {
                                height: "auto",
                                opacity: 1
                            },
                            transition: {
                                duration: 0.2
                            },
                            className: "px-4 pb-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2",
                                children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].li, {
                                        initial: {
                                            opacity: 0,
                                            x: -5
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: i * 0.05
                                        },
                                        className: "flex items-start gap-2 text-xs text-gray-700 leading-relaxed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-1.5 h-1.5 rounded-full mt-1.5 shrink-0", section.dotColor)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/RiskRecommendations.tsx",
                                                lineNumber: 137,
                                                columnNumber: 45
                                            }, this),
                                            item
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/ui/RiskRecommendations.tsx",
                                        lineNumber: 130,
                                        columnNumber: 41
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/RiskRecommendations.tsx",
                                lineNumber: 128,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/RiskRecommendations.tsx",
                            lineNumber: 122,
                            columnNumber: 29
                        }, this)
                    ]
                }, section.key, true, {
                    fileName: "[project]/src/components/ui/RiskRecommendations.tsx",
                    lineNumber: 91,
                    columnNumber: 21
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/RiskRecommendations.tsx",
        lineNumber: 63,
        columnNumber: 9
    }, this);
}
_s(RiskRecommendations, "7YuKmHN5EdHKkQ+U+ZQVSt9OJ4k=");
_c = RiskRecommendations;
var _c;
__turbopack_context__.k.register(_c, "RiskRecommendations");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.4
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-2xl border bg-white text-[hsl(var(--card-foreground))] shadow-sm transition-all hover:shadow-md", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Card.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Card.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Card.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-[hsl(var(--muted-foreground))]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Card.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Card.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, error, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: type,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-12 w-full rounded-md border border-[hsl(var(--input))] bg-[hsl(var(--background))] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[hsl(var(--muted-foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all", error && "border-[hsl(var(--destructive))] focus-visible:ring-[hsl(var(--destructive))]", className),
                ref: ref,
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Input.tsx",
                lineNumber: 13,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[hsl(var(--destructive))] text-xs absolute -bottom-4 left-0",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Input.tsx",
                lineNumber: 23,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Input.tsx",
        lineNumber: 12,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary))]/80",
            secondary: "border-transparent bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary))]/80",
            destructive: "border-transparent bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] hover:bg-[hsl(var(--destructive))]/80",
            outline: "text-[hsl(var(--foreground))]",
            success: "border-transparent bg-[hsl(var(--success))] text-[hsl(var(--success-foreground))]",
            warning: "border-transparent bg-[hsl(var(--warning))] text-[hsl(var(--warning-foreground))]"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Badge.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/PageHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageHeader",
    ()=>PageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function PageHeader({ title, description, icon: Icon, accentColor, iconBgColor = "bg-gray-50", className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: -20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.5,
            ease: "easeOut"
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center text-center mb-10", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0.8,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                transition: {
                    duration: 0.5,
                    delay: 0.1
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-16 w-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm", iconBgColor),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-8 w-8", accentColor)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/PageHeader.tsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/PageHeader.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-display mb-4",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/ui/PageHeader.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/ui/PageHeader.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/PageHeader.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
_c = PageHeader;
var _c;
__turbopack_context__.k.register(_c, "PageHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/animations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "containerVariants",
    ()=>containerVariants,
    "itemVariants",
    ()=>itemVariants,
    "resultVariants",
    ()=>resultVariants,
    "sideBarVariants",
    ()=>sideBarVariants
]);
const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};
const itemVariants = {
    hidden: {
        y: 60,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};
const resultVariants = {
    hidden: {
        scale: 0.8,
        opacity: 0,
        rotate: -5
    },
    visible: {
        scale: 1,
        opacity: 1,
        rotate: 0,
        transition: {
            type: "spring",
            bounce: 0.5,
            duration: 0.6
        }
    }
};
const sideBarVariants = {
    hidden: {
        x: 50,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            damping: 20,
            stiffness: 100,
            delay: 0.4
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/assess/heart/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeartAssessment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Breadcrumb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Breadcrumb.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$RiskRecommendations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/RiskRecommendations.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PageHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/PageHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const formSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]({
    age: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coerce"].number().min(1, "Age is required").max(120),
    sex: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enum"]([
        "Male",
        "Female",
        "Other"
    ]),
    cp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enum"]([
        "Typical Angina",
        "Atypical Angina",
        "Non-Anginal Pain",
        "Asymptomatic"
    ]),
    trestbps: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coerce"].number().min(50).max(250),
    chol: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coerce"].number().min(100).max(600),
    fbs: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enum"]([
        "Yes",
        "No"
    ]),
    restecg: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enum"]([
        "Normal",
        "ST-T abnormality",
        "Left Ventricular Hypertrophy"
    ]),
    thalach: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coerce"].number().min(50).max(250),
    exang: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enum"]([
        "Yes",
        "No"
    ]),
    oldpeak: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coerce"].number().min(0).max(10),
    slope: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enum"]([
        "Upsloping",
        "Flat",
        "Downsloping"
    ]),
    ca: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coerce"].number().min(0).max(3),
    thal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enum"]([
        "Normal",
        "Fixed Defect",
        "Reversible Defect"
    ])
});
function HeartAssessment() {
    _s();
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(formSchema),
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
            thal: "Normal"
        }
    });
    const onSubmit = async (data)=>{
        setError(null);
        setResult(null);
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["predictCondition"])("heart", data);
            setResult(response);
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } catch (err) {
            setError(err.message || "Failed to get prediction");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 flex flex-col font-sans overflow-x-hidden",
        children: [
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/src/app/assess/heart/page.tsx",
                lineNumber: 77,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "grow pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute top-20 left-10 w-64 h-64 bg-red-200/20 rounded-full blur-3xl pointer-events-none -z-10",
                        animate: {
                            y: [
                                0,
                                50,
                                0
                            ],
                            scale: [
                                1,
                                1.1,
                                1
                            ]
                        },
                        transition: {
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/assess/heart/page.tsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Breadcrumb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Breadcrumb"], {
                        items: [
                            {
                                label: "Assessments",
                                href: "/#assessments"
                            },
                            {
                                label: "Heart Disease"
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/app/assess/heart/page.tsx",
                        lineNumber: 87,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$PageHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageHeader"], {
                        title: "Heart Disease Assessment",
                        description: "Analyze cardiovascular risk factors using advanced AI models based on clinical biomarkers.",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
                        accentColor: "text-red-500",
                        iconBgColor: "bg-red-50"
                    }, void 0, false, {
                        fileName: "[project]/src/app/assess/heart/page.tsx",
                        lineNumber: 88,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "lg:col-span-2 space-y-6",
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["containerVariants"],
                                initial: "hidden",
                                animate: "visible",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "border-t-4 border-t-red-500 shadow-lg overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                    children: "Patient Data"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/assess/heart/page.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                    children: "Enter clinical parameters for analysis."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/assess/heart/page.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/assess/heart/page.tsx",
                                            lineNumber: 106,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: form.handleSubmit(onSubmit),
                                                className: "space-y-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "space-y-4",
                                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itemVariants"],
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 border-b border-gray-100 pb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600",
                                                                        children: "1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                        lineNumber: 116,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-sm font-semibold uppercase tracking-wider text-gray-500",
                                                                        children: "Demographics"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                        lineNumber: 117,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                lineNumber: 115,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                                                                        label: "Age",
                                                                        name: "age",
                                                                        type: "number",
                                                                        form: form,
                                                                        placeholder: "e.g. 45"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                        lineNumber: 120,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSelect, {
                                                                        label: "Sex",
                                                                        name: "sex",
                                                                        options: [
                                                                            "Male",
                                                                            "Female",
                                                                            "Other"
                                                                        ],
                                                                        form: form
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                        lineNumber: 121,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "space-y-4",
                                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itemVariants"],
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 border-b border-gray-100 pb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600",
                                                                        children: "2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                        lineNumber: 128,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-sm font-semibold uppercase tracking-wider text-gray-500",
                                                                        children: "Vitals & Symptoms"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                        lineNumber: 129,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                lineNumber: 127,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 gap-6",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSelect, {
                                                                    label: "Chest Pain Type",
                                                                    name: "cp",
                                                                    options: [
                                                                        "Typical Angina",
                                                                        "Atypical Angina",
                                                                        "Non-Anginal Pain",
                                                                        "Asymptomatic"
                                                                    ],
                                                                    form: form,
                                                                    info: "The type of chest pain experienced."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                    lineNumber: 132,
                                                                    columnNumber: 45
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                lineNumber: 131,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                                                                        label: "Resting BP (mm Hg)",
                                                                        name: "trestbps",
                                                                        type: "number",
                                                                        form: form
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                        lineNumber: 141,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                                                                        label: "Cholesterol (mg/dl)",
                                                                        name: "chol",
                                                                        type: "number",
                                                                        form: form
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                        lineNumber: 142,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                                                                        label: "Max Heart Rate",
                                                                        name: "thalach",
                                                                        type: "number",
                                                                        form: form
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                        lineNumber: 145,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSelect, {
                                                                        label: "Ex. Induced Angina",
                                                                        name: "exang",
                                                                        options: [
                                                                            "Yes",
                                                                            "No"
                                                                        ],
                                                                        form: form
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                        lineNumber: 146,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "space-y-4",
                                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itemVariants"],
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 border-b border-gray-100 pb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600",
                                                                        children: "3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                        lineNumber: 153,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "text-sm font-semibold uppercase tracking-wider text-gray-500",
                                                                        children: "Clinical Metrics"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                        lineNumber: 154,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                lineNumber: 152,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSelect, {
                                                                        label: "Fasting BS > 120",
                                                                        name: "fbs",
                                                                        options: [
                                                                            "Yes",
                                                                            "No"
                                                                        ],
                                                                        form: form
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                        lineNumber: 157,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSelect, {
                                                                        label: "Resting ECG",
                                                                        name: "restecg",
                                                                        options: [
                                                                            "Normal",
                                                                            "ST-T abnormality",
                                                                            "Left Ventricular Hypertrophy"
                                                                        ],
                                                                        form: form
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                        lineNumber: 158,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                                                                        label: "Oldpeak",
                                                                        name: "oldpeak",
                                                                        type: "number",
                                                                        step: "0.1",
                                                                        form: form,
                                                                        tooltip: "ST depression induced by exercise relative to rest"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                        lineNumber: 162,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSelect, {
                                                                        label: "Slope",
                                                                        name: "slope",
                                                                        options: [
                                                                            "Upsloping",
                                                                            "Flat",
                                                                            "Downsloping"
                                                                        ],
                                                                        form: form
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                        lineNumber: 163,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                lineNumber: 161,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormField, {
                                                                        label: "Major Vessels (0-3)",
                                                                        name: "ca",
                                                                        type: "number",
                                                                        form: form
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                        lineNumber: 167,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormSelect, {
                                                                        label: "Thalassemia",
                                                                        name: "thal",
                                                                        options: [
                                                                            "Normal",
                                                                            "Fixed Defect",
                                                                            "Reversible Defect"
                                                                        ],
                                                                        form: form
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                        lineNumber: 168,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "pt-6",
                                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itemVariants"],
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            type: "submit",
                                                            size: "lg",
                                                            className: "w-full bg-linear-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white shadow-lg shadow-red-500/20",
                                                            isLoading: form.formState.isSubmitting,
                                                            whileHover: {
                                                                scale: 1.02,
                                                                boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                                                            },
                                                            whileTap: {
                                                                scale: 0.98
                                                            },
                                                            children: form.formState.isSubmitting ? "Analyzing..." : "Calculate Risk Factor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/assess/heart/page.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/assess/heart/page.tsx",
                                                lineNumber: 111,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/assess/heart/page.tsx",
                                            lineNumber: 110,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/assess/heart/page.tsx",
                                    lineNumber: 105,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/assess/heart/page.tsx",
                                lineNumber: 99,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sideBarVariants"],
                                    initial: "hidden",
                                    animate: "visible",
                                    className: "sticky top-24 space-y-6",
                                    children: [
                                        !result && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "bg-blue-50/50 border-blue-100 shadow-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                        className: "text-blue-700 flex items-center gap-2 text-lg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                                className: "h-5 w-5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 45
                                                            }, this),
                                                            " AI Analysis"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 41
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/assess/heart/page.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "text-sm text-blue-800/80 space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Our model uses Support Vector Machines (SVM) to detect patterns in your clinical data."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/assess/heart/page.tsx",
                                                            lineNumber: 205,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "list-disc pl-4 space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Instant results"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                    lineNumber: 207,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Private & secure"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                    lineNumber: 208,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: "Medical-grade accuracy"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                    lineNumber: 209,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/assess/heart/page.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/assess/heart/page.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/assess/heart/page.tsx",
                                            lineNumber: 198,
                                            columnNumber: 33
                                        }, this),
                                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                scale: 0.9
                                            },
                                            animate: {
                                                opacity: 1,
                                                scale: 1
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                className: "bg-red-50 border-red-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                    className: "pt-6",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                className: "h-6 w-6 text-red-600 shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                lineNumber: 223,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "font-bold text-red-800",
                                                                        children: "Analysis Failed"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                        lineNumber: 225,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-red-700 mt-1",
                                                                        children: error
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                        lineNumber: 226,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                lineNumber: 224,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/assess/heart/page.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/assess/heart/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/assess/heart/page.tsx",
                                            lineNumber: 216,
                                            columnNumber: 33
                                        }, this),
                                        result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resultVariants"],
                                            initial: "hidden",
                                            animate: "visible",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                    className: "overflow-hidden border-t-0 shadow-2xl ring-1 ring-black/5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `h-2 w-full ${getRiskColorBg(result.risk_level)}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/assess/heart/page.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                                            className: "pb-2 text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    className: "mx-auto bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-3",
                                                                    initial: {
                                                                        scale: 0,
                                                                        rotate: -180
                                                                    },
                                                                    animate: {
                                                                        scale: 1,
                                                                        rotate: 0
                                                                    },
                                                                    transition: {
                                                                        type: "spring",
                                                                        delay: 0.5
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                        className: "h-6 w-6 text-green-600"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                        lineNumber: 249,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                    lineNumber: 243,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                                                    className: "text-2xl",
                                                                    children: "Analysis Complete"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                    lineNumber: 251,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                                                    children: "Based on provided vitals"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                    lineNumber: 252,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/assess/heart/page.tsx",
                                                            lineNumber: 242,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                                            className: "space-y-6",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-center py-6 bg-gray-50 rounded-xl border border-gray-100",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2",
                                                                            children: "Risk Level"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                            lineNumber: 256,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                            variant: "outline",
                                                                            className: `text-xl px-6 py-2 ${getRiskColorText(result.risk_level)} border-2`,
                                                                            children: result.risk_level
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                            lineNumber: 257,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                    lineNumber: 255,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex justify-between items-center text-xs font-medium uppercase text-gray-500",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Confidence"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                                    lineNumber: 264,
                                                                                    columnNumber: 53
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: [
                                                                                        ((result.probability_svm || 0) * 100).toFixed(1),
                                                                                        "%"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                                    lineNumber: 265,
                                                                                    columnNumber: 53
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                            lineNumber: 263,
                                                                            columnNumber: 49
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-2 w-full bg-gray-100 rounded-full overflow-hidden",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                initial: {
                                                                                    width: 0
                                                                                },
                                                                                animate: {
                                                                                    width: `${(result.probability_svm || 0) * 100}%`
                                                                                },
                                                                                transition: {
                                                                                    duration: 1.5,
                                                                                    ease: "circOut",
                                                                                    delay: 0.8
                                                                                },
                                                                                className: `h-full rounded-full ${getRiskColorBg(result.risk_level)}`
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                                lineNumber: 268,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                            lineNumber: 267,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                    lineNumber: 262,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-gray-50 p-4 rounded-lg border border-gray-100",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-600 italic leading-relaxed text-center",
                                                                        children: [
                                                                            '"',
                                                                            result.explanation,
                                                                            '"'
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                        lineNumber: 278,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                    lineNumber: 277,
                                                                    columnNumber: 45
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    onClick: ()=>window.location.reload(),
                                                                    variant: "outline",
                                                                    className: "w-full hover:scale-100",
                                                                    whileHover: {
                                                                        scale: 1.02
                                                                    },
                                                                    whileTap: {
                                                                        scale: 0.98
                                                                    },
                                                                    children: "Start New Assessment"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/assess/heart/page.tsx",
                                                                    lineNumber: 283,
                                                                    columnNumber: 45
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/assess/heart/page.tsx",
                                                            lineNumber: 254,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/assess/heart/page.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$RiskRecommendations$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RiskRecommendations"], {
                                                    recommendations: result.recommendations
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/assess/heart/page.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/assess/heart/page.tsx",
                                            lineNumber: 235,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/assess/heart/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/assess/heart/page.tsx",
                                lineNumber: 190,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/assess/heart/page.tsx",
                        lineNumber: 96,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/assess/heart/page.tsx",
                lineNumber: 79,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/src/app/assess/heart/page.tsx",
                lineNumber: 296,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/assess/heart/page.tsx",
        lineNumber: 76,
        columnNumber: 9
    }, this);
}
_s(HeartAssessment, "MXEj15af1YGVfsfigQpIHOARz7U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = HeartAssessment;
// Sub-components ... (rest of the file)
// Sub-components
function FormField({ label, name, type = "text", step, form, placeholder, tooltip }) {
    const { register, formState: { errors } } = form;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 flex items-center gap-1",
                children: [
                    label,
                    tooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-400 hover:text-gray-600 cursor-help transition-colors",
                        title: tooltip,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                            className: "h-3 w-3"
                        }, void 0, false, {
                            fileName: "[project]/src/app/assess/heart/page.tsx",
                            lineNumber: 310,
                            columnNumber: 127
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/assess/heart/page.tsx",
                        lineNumber: 310,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/assess/heart/page.tsx",
                lineNumber: 308,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                ...register(name),
                type: type,
                step: step,
                placeholder: placeholder,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(errors[name] && "border-red-500 focus-visible:ring-red-500")
            }, void 0, false, {
                fileName: "[project]/src/app/assess/heart/page.tsx",
                lineNumber: 312,
                columnNumber: 13
            }, this),
            errors[name] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-red-500 text-xs",
                children: errors[name]?.message
            }, void 0, false, {
                fileName: "[project]/src/app/assess/heart/page.tsx",
                lineNumber: 319,
                columnNumber: 30
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/assess/heart/page.tsx",
        lineNumber: 307,
        columnNumber: 9
    }, this);
}
_c1 = FormField;
function FormSelect({ label, name, options, form, info }) {
    const { register, formState: { errors } } = form;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/assess/heart/page.tsx",
                lineNumber: 328,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        ...register(name),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none", errors[name] && "border-red-500 ring-red-500"),
                        children: options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: opt,
                                children: opt
                            }, opt, false, {
                                fileName: "[project]/src/app/assess/heart/page.tsx",
                                lineNumber: 339,
                                columnNumber: 51
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/assess/heart/page.tsx",
                        lineNumber: 332,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "h-4 w-4 rotate-90"
                        }, void 0, false, {
                            fileName: "[project]/src/app/assess/heart/page.tsx",
                            lineNumber: 342,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/assess/heart/page.tsx",
                        lineNumber: 341,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/assess/heart/page.tsx",
                lineNumber: 331,
                columnNumber: 13
            }, this),
            errors[name] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-red-500 text-xs",
                children: errors[name]?.message
            }, void 0, false, {
                fileName: "[project]/src/app/assess/heart/page.tsx",
                lineNumber: 345,
                columnNumber: 30
            }, this),
            info && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] text-gray-500",
                children: info
            }, void 0, false, {
                fileName: "[project]/src/app/assess/heart/page.tsx",
                lineNumber: 346,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/assess/heart/page.tsx",
        lineNumber: 327,
        columnNumber: 9
    }, this);
}
_c2 = FormSelect;
function getRiskColorText(level) {
    switch(level?.toLowerCase()){
        case "high":
            return "text-red-600 border-red-200 bg-red-50";
        case "moderate":
            return "text-amber-600 border-amber-200 bg-amber-50";
        case "low":
            return "text-green-600 border-green-200 bg-green-50";
        default:
            return "text-gray-600";
    }
}
function getRiskColorBg(level) {
    switch(level?.toLowerCase()){
        case "high":
            return "bg-red-500";
        case "moderate":
            return "bg-amber-500";
        case "low":
            return "bg-green-500";
        default:
            return "bg-gray-500";
    }
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "HeartAssessment");
__turbopack_context__.k.register(_c1, "FormField");
__turbopack_context__.k.register(_c2, "FormSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_bc65d8a2._.js.map