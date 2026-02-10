"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/ui/MagneticButton";

gsap.registerPlugin(ScrollTrigger);

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
        <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-canvas">
            {/* Background Video Placeholder */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="w-full h-full bg-gray-900" /> {/* Replace with <video> tag later */}
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-canvas via-transparent to-transparent" />

            <div className="relative z-20 container text-center px-4">
                <h1 ref={textRef} className="text-6xl md:text-[8rem] leading-[0.9] font-heading font-bold text-primary mb-8">
                    BUILDING <br /> THE FUTURE
                </h1>
                <p ref={subRef} className="text-xl md:text-2xl text-secondary mb-12 max-w-2xl mx-auto font-body font-light">
                    Grounded in Trust. Designing structures that stand the test of time.
                </p>

                <div className="flex justify-center gap-6">
                    <MagneticButton variant="primary">View Projects</MagneticButton>
                    <MagneticButton variant="outline">Contact Us</MagneticButton>
                </div>
            </div>
        </section>
    );
}
