"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServiceHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Simple entrance animation
            const tl = gsap.timeline();
            tl.from(leftRef.current, { xPercent: -100, duration: 1.5, ease: "power4.out" })
                .from(rightRef.current, { xPercent: 100, duration: 1.5, ease: "power4.out" }, "<");
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden">

            {/* Construction (Left) */}
            <div
                ref={leftRef}
                className="group relative w-full md:w-1/2 h-1/2 md:h-full bg-slate-800 flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-white/10"
            >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-500" />

                <div className="relative z-10 text-center p-8">
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 tracking-tighter">The Core</h2>
                    <p className="text-gray-300 font-mono text-sm uppercase tracking-widest mb-8">Construction & Engineering</p>
                    <Link
                        href="/services/construction"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 hover:border-white text-white rounded-full transition-all group-hover:bg-white/10"
                    >
                        Explore Capabilities <ArrowRight size={16} />
                    </Link>
                </div>
            </div>

            {/* Interior (Right) */}
            <div
                ref={rightRef}
                className="group relative w-full md:w-1/2 h-1/2 md:h-full bg-stone-800 flex items-center justify-center overflow-hidden"
            >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                <div className="relative z-10 text-center p-8">
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 tracking-tighter">The Shell</h2>
                    <p className="text-gray-300 font-mono text-sm uppercase tracking-widest mb-8">Interior Design & Decor</p>
                    <Link
                        href="/services/interior"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 hover:border-white text-white rounded-full transition-all group-hover:bg-white/10"
                    >
                        View Aesthetics <ArrowRight size={16} />
                    </Link>
                </div>
            </div>

            {/* Center Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white text-primary w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center font-heading font-bold text-xl md:text-2xl shadow-xl border-4 border-white/20 bg-clip-padding">
                ARK
            </div>

        </section>
    );
}
