export function BackgroundPattern() {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <svg className="w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="medical-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        {/* Medical cross icons */}
                        <g fill="#0066CC">
                            <rect x="45" y="35" width="10" height="30" rx="1" />
                            <rect x="35" y="45" width="30" height="10" rx="1" />
                        </g>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#medical-grid)" />
            </svg>
        </div>
    );
}
