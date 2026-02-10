"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
    id: string;
    title: string;
    category: string;
    image: string;
    location: string;
    year: string;
    className?: string;
}

export default function ProjectCard({
    id,
    title,
    category,
    image,
    location,
    year,
    className = "",
}: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const maskRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top bottom-=100", // Start when top of card is 100px from bottom of viewport
                    toggleActions: "play none none reverse",
                },
            });

            // Mask Reveal Animation
            tl.to(maskRef.current, {
                height: 0,
                duration: 1.2,
                ease: "power3.inOut",
            })
                .from(imageRef.current, {
                    scale: 1.2,
                    duration: 1.5,
                    ease: "power3.out",
                }, "<");

        }, cardRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={cardRef} className={`group relative mb-8 block break-inside-avoid ${className}`}>
            <Link href={`/projects/${id}`} className="block overflow-hidden relative">
                <div className="relative overflow-hidden rounded-sm">
                    {/* Masking Div */}
                    <div
                        ref={maskRef}
                        className="absolute top-0 left-0 w-full h-full bg-canvas z-20 pointer-events-none"
                    />

                    <div className="relative w-full aspect-[4/3]">
                        <Image
                            ref={imageRef}
                            src={image}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500 z-10" />
                </div>

                <div className="mt-4 flex justify-between items-end">
                    <div>
                        <p className="text-xs uppercase tracking-widest text-accent mb-1 font-bold">{category}</p>
                        <h3 className="text-xl font-heading font-medium text-primary group-hover:underline underline-offset-4 decoration-accent decoration-2">
                            {title}
                        </h3>
                    </div>
                    <div className="text-right">
                        <p className="text-xs font-mono text-secondary/60">{location}</p>
                        <p className="text-xs font-mono text-secondary/60">{year}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
