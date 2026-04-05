"use client";

import { motion } from 'framer-motion';

export function GradientBlobs() {
    const blobs = [
        {
            id: 1,
            className: 'bg-linear-to-br from-blue-400/20 to-cyan-400/20',
            size: 'w-96 h-96',
            positionClass: 'top-10 -right-20',
            animation: { duration: 20, delay: 0 }
        },
        {
            id: 2,
            className: 'bg-linear-to-br from-teal-400/15 to-blue-400/15',
            size: 'w-[500px] h-[500px]',
            positionClass: 'bottom-20 -left-32',
            animation: { duration: 25, delay: 5 }
        },
        {
            id: 3,
            className: 'bg-linear-to-br from-cyan-300/10 to-teal-300/10',
            size: 'w-80 h-80',
            positionClass: 'top-1/3 right-1/4',
            animation: { duration: 18, delay: 3 }
        }
    ];

    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden md:block">
            {blobs.map((blob) => (
                <motion.div
                    key={blob.id}
                    className={`absolute ${blob.size} ${blob.positionClass} filter blur-3xl opacity-60 mix-blend-multiply`}
                    animate={{
                        x: [0, 30, -20, 0],
                        y: [0, -40, 30, 0],
                        scale: [1, 1.1, 0.9, 1],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: blob.animation.duration,
                        delay: blob.animation.delay,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                >
                    <div className={`w-full h-full rounded-full ${blob.className}`} />
                </motion.div>
            ))}
        </div>
    );
}
