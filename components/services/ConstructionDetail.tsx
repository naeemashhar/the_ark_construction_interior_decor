"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { servicesData } from "@/lib/servicesData";

export default function ConstructionDetail() {
    const data = servicesData.construction;

    return (
        <div className="bg-zinc-900 text-white selection:bg-accent selection:text-white">
            {/* Hero */}
            <section className="relative h-screen flex items-center">
                <div className="absolute inset-0">
                    <Image
                        src={data.heroImage}
                        alt="Construction"
                        fill
                        className="object-cover opacity-40 grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-transparent" />
                </div>

                <div className="container px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <span className="text-accent font-mono uppercase tracking-[0.3em] text-sm block mb-6">
                            / The Core Structure
                        </span>
                        <h1 className="text-7xl md:text-9xl font-heading font-black tracking-tighter mb-8 leading-[0.9]">
                            SOLID <br /> <span className="text-stroke text-transparent stroke-white stroke-2">FOUNDATION</span>
                        </h1>
                        <p className="max-w-xl text-xl text-gray-400 font-light leading-relaxed border-l-2 border-accent pl-6">
                            {data.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Engineering Process - Grid Layout */}
            <section className="py-32 bg-zinc-900">
                <div className="container px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-8">
                        <h2 className="text-4xl md:text-6xl font-heading font-bold">Engineering Protocol</h2>
                        <p className="text-gray-500 font-mono text-sm">SYSTEMATIC PRECISION</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                        {data.process.map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group border-t border-white/20 pt-8"
                            >
                                <span className="text-6xl font-heading font-black text-white/5 mb-6 block group-hover:text-accent/20 transition-colors duration-500">
                                    {step.step}
                                </span>
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    {step.title}
                                    <ArrowRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-accent" />
                                </h3>
                                <p className="text-gray-400 leading-relaxed max-w-md">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects - Blueprint Style */}
            <section className="py-32 bg-zinc-800 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                <div className="container px-4 relative z-10">
                    <div className="flex flex-col items-center text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Structural Mastery</h2>
                        <div className="h-1 w-24 bg-accent" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {data.gallery.map((project) => (
                            <Link href={`/projects/${project.id}`} key={project.id} className="block">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="aspect-[3/4] relative group bg-zinc-900 border border-white/10 p-2 overflow-hidden"
                                >
                                    <div className="relative w-full h-full overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-110"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end">
                                            <span className="text-accent font-mono text-xs uppercase mb-2">{project.category}</span>
                                            <h4 className="text-white text-lg font-bold">{project.title}</h4>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities List */}
            <section className="py-32 bg-accent text-zinc-900">
                <div className="container px-4 flex flex-col md:flex-row items-start gap-16">
                    <div className="w-full md:w-1/3">
                        <h2 className="text-5xl font-heading font-bold leading-tight">Capabilities & <br />Expertise</h2>
                    </div>
                    <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.features.map((feature) => (
                            <div key={feature.title} className="flex items-start gap-4 border-b border-zinc-900/20 pb-4">
                                <CheckCircle2 size={24} className="text-zinc-900 mt-1 shrink-0" />
                                <div>
                                    <h4 className="text-xl font-medium mb-1">{feature.title}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{feature.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-zinc-900 py-32 text-center">
                <div className="container px-4">
                    <h2 className="text-4xl md:text-7xl font-heading font-bold mb-8">Ready to Break Ground?</h2>
                    <Link href="/contact" className="inline-block border border-white/20 hover:border-accent hover:text-accent text-white px-12 py-4 rounded-full transition-all uppercase tracking-widest text-sm font-bold">
                        Initialize Project
                    </Link>
                </div>
            </section>
        </div>
    );
}
