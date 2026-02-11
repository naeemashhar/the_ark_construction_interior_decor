"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, ArrowRight, LayoutGrid } from "lucide-react";

interface ProjectData {
    id: string;
    title: string;
    category: string;
    location: string;
    year: string;
    image: string;
    description: string;
    challenge: string;
    solution: string;
    detailsGallery?: string[];
}

interface ProjectDetailTemplateProps {
    data: ProjectData;
}

export default function ProjectDetailTemplate({ data }: ProjectDetailTemplateProps) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    return (
        <main ref={containerRef} className="bg-zinc-950 min-h-screen text-white overflow-hidden selection:bg-accent selection:text-white">
            {/* Back Navigation */}
            <div className="fixed top-8 left-4 z-50 md:left-12 mix-blend-difference">
                <Link href="/services" className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white hover:text-accent transition-colors">
                    <div className="bg-white/10 p-2 rounded-full group-hover:bg-accent group-hover:text-white transition-all">
                        <ArrowLeft size={16} />
                    </div>
                    <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">Back</span>
                </Link>
            </div>

            {/* Immersive Hero Section */}
            <section className="relative h-screen w-full flex items-end pb-24 md:pb-32">
                <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                    <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/30" />
                </motion.div>

                <div className="relative z-10 container px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="flex flex-wrap items-center gap-6 mb-8">
                            <span className="px-4 py-1 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest bg-white/5">
                                {data.category}
                            </span>
                            <div className="flex items-center gap-4 text-sm font-medium text-gray-300 uppercase tracking-widest">
                                <span className="flex items-center gap-2"><MapPin size={14} className="text-accent" /> {data.location}</span>
                                <span className="w-1 h-1 bg-white/30 rounded-full" />
                                <span className="flex items-center gap-2"><Calendar size={14} className="text-accent" /> {data.year}</span>
                            </div>
                        </div>

                        <h1 className="text-6xl md:text-9xl font-heading font-black tracking-tighter mb-8 leading-[0.85] text-white">
                            {data.title}
                        </h1>
                        <p className="max-w-3xl text-xl md:text-2xl text-gray-300 font-light leading-relaxed border-l-2 border-accent pl-8">
                            {data.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Challenge & Solution Grid */}
            <section className="py-32 container px-4 mx-auto border-t border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    <div className="lg:col-span-4">
                        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-accent mb-4">The Brief</h2>
                        <h3 className="text-4xl font-heading font-bold mb-8">Redefining {data.category} Standards</h3>
                        <div className="w-20 h-1 bg-white/10" />
                    </div>
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h4 className="text-2xl font-bold mb-4 text-white">The Challenge</h4>
                            <p className="text-gray-400 leading-relaxed text-lg">{data.challenge}</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold mb-4 text-white">The Solution</h4>
                            <p className="text-gray-400 leading-relaxed text-lg">{data.solution}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            {data.detailsGallery && data.detailsGallery.length > 0 && (
                <section className="py-24 bg-zinc-900 overflow-hidden">
                    <div className="container px-4 mx-auto mb-16 flex items-end justify-between">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">Visual Narrative</h2>
                            <p className="text-gray-400 max-w-md">Detailed perspectives of the architectural composition.</p>
                        </div>
                        <LayoutGrid className="text-accent w-12 h-12 opacity-50 hidden md:block" />
                    </div>

                    <div className="container px-4 mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 auto-rows-[400px] md:auto-rows-[600px]">
                            {data.detailsGallery.map((img, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    className={`relative group overflow-hidden rounded-sm ${index === 0 ? "md:col-span-2 md:row-span-1" : "md:col-span-1"
                                        }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`Detail ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Next Project CTA */}
            <section className="h-[50vh] flex items-center justify-center relative group cursor-pointer overflow-hidden border-t-2 border-white/5">
                <Link href="/services" className="absolute inset-0 z-20" />
                <div className="absolute inset-0 z-0">
                    <Image
                        src={data.image}
                        alt="Next"
                        fill
                        className="object-cover opacity-20 blur-sm scale-110 transition-transform duration-700 group-hover:scale-100 group-hover:blur-0 group-hover:opacity-40"
                    />
                    <div className="absolute inset-0 bg-zinc-950/80 group-hover:bg-zinc-950/60 transition-colors duration-500" />
                </div>

                <div className="relative z-10 text-center">
                    <span className="block text-accent uppercase tracking-widest text-sm font-bold mb-4 opacity-70 group-hover:opacity-100 transition-opacity">Next Steps</span>
                    <h2 className="text-5xl md:text-8xl font-heading font-black mb-8 group-hover:translate-x-4 transition-transform duration-500 flex items-center justify-center gap-6">
                        Explore Works <ArrowRight className="w-12 h-12 md:w-20 md:h-20 text-accent" />
                    </h2>
                </div>
            </section>
        </main>
    );
}
