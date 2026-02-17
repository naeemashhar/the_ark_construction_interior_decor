"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
}

interface ServiceData {
    title: string;
    subtitle: string;
    description: string;
    heroImage: string;
    process: { step: string; title: string; desc: string }[];
    features: { title: string; detail: string }[];
    gallery: Project[];
}

interface ServiceDetailTemplateProps {
    data: ServiceData;
}

export default function ServiceDetailTemplate({ data }: ServiceDetailTemplateProps) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <main ref={containerRef} className="bg-zinc-950 min-h-screen text-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <Image
                        src={data.heroImage}
                        alt={data.title}
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950" />
                </motion.div>

                <div className="relative z-10 text-center container px-4">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="block text-accent uppercase tracking-[0.3em] text-sm font-bold mb-4"
                    >
                        {data.subtitle}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="font-heading font-black text-6xl md:text-9xl tracking-tighter mb-6"
                    >
                        {data.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl font-light"
                    >
                        {data.description}
                    </motion.p>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 container px-4 mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-heading font-bold mb-16 text-accent"
                >
                    Our Process
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.process.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group p-6 border border-white/10 hover:border-accent/50 transition-colors duration-500 bg-zinc-900/50"
                        >
                            <span className="text-6xl font-black text-white/5 absolute -top-4 -right-4 transition-colors group-hover:text-accent/10">
                                {item.step}
                            </span>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Features List */}
            <section className="py-24 bg-zinc-900">
                <div className="container px-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-heading font-bold mb-8">What We Deliver</h2>
                        <div className="space-y-8">
                            {data.features.map((feature, index) => (
                                <div key={index} className="border-l-2 border-accent/30 pl-6 py-2">
                                    <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                                    <p className="text-gray-400">{feature.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[600px] w-full hidden lg:block">
                        <Image
                            src={data.gallery[0].image}
                            alt="Feature"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"

                        />
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-24 container px-4 mx-auto">
                <h2 className="text-4xl font-heading font-bold mb-12 text-accent">Selected Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.gallery.map((project, index) => (
                        <Link href={`/projects/${project.id}`} key={project.id}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative h-[400px] group overflow-hidden cursor-pointer"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <p className="text-accent text-sm font-bold uppercase tracking-wider mb-2">{project.category}</p>
                                    <h3 className="text-white text-2xl font-heading font-bold mb-4">{project.title}</h3>
                                    <span className="text-white text-sm font-medium uppercase tracking-wider flex items-center gap-2">
                                        View Project <ArrowRight size={16} />
                                    </span>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
