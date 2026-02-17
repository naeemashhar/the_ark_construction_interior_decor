"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Residential",
        description: "Modern living spaces designed for comfort and style.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000",
    },
    {
        title: "Commercial",
        description: "Functional and aesthetic workspaces that drive productivity.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
    },
    {
        title: "Industrial",
        description: "Robust structures engineered for heavy-duty operations.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
    },
    {
        title: "Infrastructure",
        description: "Building the backbone of modern cities with precision.",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000",
    },
];

export default function ServicesCarousel() {
    const sectionRef = useRef<HTMLElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const wrapper = wrapperRef.current;
            if (!wrapper) return;

            const totalWidth = wrapper.scrollWidth;
            const windowWidth = window.innerWidth;
            const scrollLength = totalWidth - windowWidth;

            gsap.to(wrapper, {
                x: -scrollLength,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: `+=${totalWidth}`,
                    markers: false, // Set to true for debugging
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="h-screen overflow-hidden bg-canvas relative flex flex-col justify-center">
            <div className="container px-4 mb-12">
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary">Our Expertise</h2>
                <p className="text-secondary mt-4 max-w-xl">We specialize in delivering high-quality construction across various sectors.</p>
            </div>

            <div ref={wrapperRef} className="flex gap-12 px-4 md:px-24 w-fit">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group relative h-[50vh] w-[80vw] md:w-[30vw] min-w-[300px] flex-shrink-0 overflow-hidden rounded-md bg-gray-200 transition-all duration-500 hover:shadow-xl"
                    >
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                        <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-3xl font-heading font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-gray-300 font-body text-sm mb-6 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                {service.description}
                            </p>
                            <Link href={`/services/${service.title.toLowerCase()}`} className="flex items-center gap-2 text-white text-sm font-medium uppercase tracking-wider opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 hover:text-accent">
                                View Projects <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                ))}
                {/* Padding Div to allow scrolling past last item */}
                <div className="w-[10vw]" />
            </div>
        </section>
    );
}
