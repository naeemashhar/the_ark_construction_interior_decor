"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
    // Scroll to top on route change to ensure clean entrance
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* Shutter Animation */}
            <motion.div
                className="fixed inset-0 z-[100] bg-[#3D405B] flex items-center justify-center"
                initial={{ y: "0%" }}
                animate={{ y: "-100%" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1 }}
            >
                <div className="flex flex-col items-center leading-none">
                    {/* "The" - Small & Wide */}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-sm md:text-base font-bold uppercase tracking-[0.4em] text-white/50 mb-2"
                    >
                        The
                    </motion.span>

                    {/* "ARK" - Large & Solid */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        className="font-heading font-black text-7xl md:text-9xl tracking-tighter text-white"
                    >
                        ARK
                    </motion.h1>

                    {/* Progress Line */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 100 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
                        className="h-1 bg-accent mt-6"
                    />
                </div>
            </motion.div>
            {children}
        </>
    );
}
