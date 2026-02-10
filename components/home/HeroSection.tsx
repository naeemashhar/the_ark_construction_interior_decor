"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/ui/MagneticButton";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ text, className, highlight = false }: { text: string, className?: string, highlight?: boolean }) => (
    <span className={`inline-block ${className}`}>
        {text.split("").map((char, i) => (
            <motion.span
                key={i}
                className={`inline-block cursor-default ${highlight ? "text-[#E07A5F] hover:text-white" : "text-white hover:text-[#E07A5F]"} transition-colors`}
                whileHover={{ y: -15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
                {char === " " ? "\u00A0" : char}
            </motion.span>
        ))}
    </span>
);

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(textRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out",
                delay: 0.5,
            })
                .from(subRef.current, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out",
                }, "-=1");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-zinc-900">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                    className="w-full h-full object-cover opacity-40 grayscale"
                >
                    <source src="https://cdn.coverr.co/videos/coverr-modern-architecture-4566/1080p.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/40 to-zinc-950/90" />
            </div>

            <div className="relative z-20 container text-center px-4">
                <div className="overflow-hidden py-8">
                    <h1 ref={textRef} className="gap-2 text-6xl md:text-[9rem] leading-[0.85] font-heading font-black tracking-tighter mix-blend-overlay opacity-90">
                        <AnimatedText text="BUILDING" /> <br />
                        <AnimatedText text="THE FUTURE" highlight />
                    </h1>
                </div>

                <div className="overflow-hidden mb-5">
                    <p ref={subRef} className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light tracking-wide">
                        Grounded in Trust. Designing structures that stand the test of time.
                    </p>
                </div>

                <div className="flex justify-center gap-6">
                    <MagneticButton variant="primary">View Projects</MagneticButton>
                    <MagneticButton variant="outline" className="text-white">Contact Us</MagneticButton>
                </div>
            </div>
        </section>
    );
}
