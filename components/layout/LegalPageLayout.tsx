"use client";

import { motion } from "framer-motion";

interface LegalPageLayoutProps {
    title: string;
    lastUpdated: string;
    children: React.ReactNode;
}

export default function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
    return (
        <main className="min-h-screen bg-primary text-gray-300 pt-32 pb-24 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container px-4 max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16 border-b border-white/10 pb-12"
                >
                    <h1 className="font-heading font-black text-5xl md:text-7xl text-white mb-6 tracking-tight">
                        {title}
                    </h1>
                    <p className="text-sm uppercase tracking-widest text-accent font-bold">
                        Last Updated: {lastUpdated}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-accent hover:prose-a:text-white transition-colors"
                >
                    {children}
                </motion.div>
            </div>
        </main>
    );
}
