"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSplit() {
    const sectionRef = useRef<HTMLElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate from sides when scrolling into view
            gsap.from(leftRef.current, {
                xPercent: -50,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            });

            gsap.from(rightRef.current, {
                xPercent: 50,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            }); // Removed the "<" causing the error as this is not a timeline

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-canvas overflow-hidden">
            <div className="container px-4">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-6xl font-heading font-medium text-primary">Two Pillars of Excellence</h2>
                    <p className="text-secondary mt-4">Merging rigid structure with fluid aesthetics.</p>
                </div>

                <div className="flex flex-col md:flex-row h-[70vh] w-full items-stretch">

                    {/* Left: Construction */}
                    <div ref={leftRef} className="group relative w-full md:w-1/2 overflow-hidden border-b md:border-b-0 md:border-r border-white/20">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale" />
                        <div className="absolute inset-0 bg-primary/80 group-hover:bg-primary/60 transition-colors duration-500" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
                            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Construction</h3>
                            <p className="text-gray-300 max-w-sm mb-8">Engineering the backbone of tomorrow. High-rises, infrastructure, and commercial complexes.</p>
                            <Link href="/services/construction" className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-accent hover:border-accent transition-colors">
                                View Projects <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Right: Interior */}
                    <div ref={rightRef} className="group relative w-full md:w-1/2 overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale" />
                        <div className="absolute inset-0 bg-stone-900/80 group-hover:bg-stone-900/60 transition-colors duration-500" />

                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
                            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Interiors</h3>
                            <p className="text-gray-300 max-w-sm mb-8">Crafting soul within the structure. Bespoke living spaces and functional office environments.</p>
                            <Link href="/services/interior" className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:text-accent hover:border-accent transition-colors">
                                Explore Designs <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
