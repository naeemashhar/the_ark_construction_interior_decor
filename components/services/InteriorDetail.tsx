"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import { servicesData } from "@/lib/servicesData";
import { useRef, useState } from "react";

function FeatureItem({ feature }: { feature: { title: string; detail: string } }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className="border-b border-stone-300 pb-4 cursor-pointer group"
        >
            <div className="flex items-center justify-between py-2">
                <span className="text-xl font-light group-hover:text-[#3D405B] transition-colors duration-300">{feature.title}</span>
                <div className="text-stone-400 group-hover:text-[#3D405B] transition-colors duration-300">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-stone-500 font-light leading-relaxed pb-4 pt-2">
                            {feature.detail}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function InteriorDetail() {
    const data = servicesData.interior;
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

    return (
        <div className="bg-canvas text-stone-800 selection:bg-stone-300 selection:text-stone-900">

            {/* Hero - Soft & Elegant */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={data.heroImage}
                        alt="Interior Design"
                        fill
                        className="object-cover opacity-90"
                        priority
                    />
                    <div className="absolute inset-0 bg-white/20" />
                </motion.div>

                <div className="relative z-10 text-center space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-clip-text text-transparent bg-gradient-to-br from-gray-600 via-gray-800 to-[#3d405b] text-6xl md:text-9xl font-serif italic"
                    >
                        The Shell
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-black font-semibold text-lg font-light tracking-widest uppercase mix-blend-difference"
                    >
                        Curated Living Spaces
                    </motion.p>
                </div>
            </section>

            {/* Philosophy - Editorial Layout */}
            <section className="py-32 bg-canvas">
                <div className="container px-4 grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="sticky top-32"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000"
                            alt="Interior Detail"
                            width={600}
                            height={800}
                            className="rounded-t-[10rem] shadow-2xl"
                        />
                    </motion.div>

                    <div>
                        <span className="text-xs uppercase tracking-[0.4em] text-stone-500 mb-8 block">Philosophy</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-light leading-tight mb-8">
                            Designing for the <span className="italic font-serif">Human Spirit</span>.
                        </h2>
                        <p className="text-stone-600 text-lg leading-relaxed font-light mb-12">
                            {data.description}
                        </p>

                        <div className="space-y-4">
                            {data.features.map((feature, index) => (
                                <FeatureItem key={index} feature={feature} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Horizontal Scroll Gallery */}
            <section ref={targetRef} className="relative h-[300vh] bg-stone-900 text-white">
                <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-16 px-16">
                        {data.gallery.map((project) => (
                            <Link href={`/projects/${project.id}`} key={project.id} className="relative h-[70vh] w-[50vw] md:w-[35vw] shrink-0 block">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute -bottom-16 left-0">
                                    <p className="text-3xl font-serif italic mb-1">{project.title}</p>
                                    <p className="text-sm font-light uppercase tracking-widest opacity-60">{project.category}</p>
                                </div>
                            </Link>
                        ))}
                        {/* Extra space */}
                        <div className="w-[20vw] shrink-0 flex items-center justify-center">
                            <h3 className="text-6xl font-heading font-light leading-tight">
                                Timeless <br /><span className="italic font-serif">Elegance</span>
                            </h3>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Design Process */}
            <section className="py-32 bg-canvas">
                <div className="container px-4">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-heading font-light">The Creative Process</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {data.process.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 shadow-sm hover:shadow-xl transition-shadow duration-500 rounded-sm"
                            >
                                <span className="text-stone-300 font-serif text-5xl mb-6 block">{step.step}</span>
                                <h3 className="text-lg font-bold mb-4 uppercase tracking-wide">{step.title}</h3>
                                <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 text-center bg-canvas">
                <h2 className="text-5xl md:text-7xl font-serif italic mb-12">Create Your Sanctuary</h2>
                <Link href="/contact" className="inline-block bg-stone-900 text-white px-12 py-4 rounded-full hover:bg-stone-800 transition-colors uppercase tracking-widest text-xs font-bold">
                    Start Consultation
                </Link>
            </section>

        </div>
    );
}
