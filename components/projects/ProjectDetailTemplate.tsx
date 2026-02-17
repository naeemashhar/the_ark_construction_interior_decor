"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Lightbulb, CheckCircle2 } from "lucide-react";

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
    client?: string;
    status?: string;
    duration?: string;
    sitePhotos?: string[];
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

    const heroY = useTransform(scrollYProgress, [0, 0.5], ["0%", "20%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    return (
        <main ref={containerRef} className="bg-zinc-950 min-h-screen text-white overflow-hidden">
            {/* Back Navigation */}
            <div className="fixed top-24 left-8 z-50">
                <Link href="/services">
                    <motion.div
                        initial="initial"
                        whileHover="hover"
                        className="group relative flex items-center gap-3 px-2 py-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors pointer-events-auto overflow-hidden"
                        style={{ width: "fit-content" }}
                    >
                        <motion.div
                            variants={{
                                initial: { scale: 1 },
                                hover: { scale: 1.1 }
                            }}
                            className="w-5 h-5 bg-white text-primary rounded-full flex items-center justify-center shrink-0 z-10"
                        >
                            <ArrowLeft size={18} />
                        </motion.div>
                        <motion.span
                            variants={{
                                initial: { width: 0, opacity: 0, x: -10 },
                                hover: { width: "auto", opacity: 1, x: 0 }
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="text-white text-xs font-bold uppercase tracking-widest whitespace-nowrap pr-4"
                        >
                            Back to Services
                        </motion.span>
                    </motion.div>
                </Link>
            </div>

            {/* Hero Section with Parallax */}
            <section className="relative h-screen w-full flex items-end">
                <motion.div
                    style={{ y: heroY, opacity: heroOpacity }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
                </motion.div>

                <div className="relative z-10 container px-6 md:px-12 mx-auto pb-24 md:pb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Category Badge */}
                        <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_10px_#E07A5F]" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                                {data.category}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter mb-8 leading-[0.9] max-w-5xl">
                            {data.title}
                        </h1>

                        {/* Description */}
                        <p className="max-w-3xl text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-12">
                            {data.description}
                        </p>

                        {/* Specifications Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-8 border-t border-white/10">
                            <div>
                                <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Location</h3>
                                <p className="text-lg md:text-xl font-medium">{data.location}</p>
                            </div>
                            <div>
                                <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Client</h3>
                                <p className="text-lg md:text-xl font-medium">{data.client || "Confidential"}</p>
                            </div>
                            <div>
                                <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Duration</h3>
                                <p className="text-lg md:text-xl font-medium">{data.duration || "Ongoing"}</p>
                            </div>
                            <div>
                                <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Status</h3>
                                <p className="text-lg md:text-xl font-medium text-accent">{data.status || "Completed"}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Project Overview */}
            <section className="py-24 md:py-32 bg-zinc-900 border-t border-white/5">
                <div className="container px-6 md:px-12 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                        {/* Section Header */}
                        <div className="lg:col-span-4">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="sticky top-32"
                            >
                                <span className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
                                    Project Brief
                                </span>
                                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                                    The <br />Challenge
                                </h2>
                                <div className="w-20 h-1 bg-accent mb-8" />
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Every project presents a unique set of constraints and opportunities. Here is how we navigated them.
                                </p>
                            </motion.div>
                        </div>

                        {/* Challenge & Solution */}
                        <div className="lg:col-span-8 space-y-16">
                            {/* Challenge */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="group bg-black/20 p-8 md:p-12 rounded-2xl border border-white/5"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="p-4 bg-orange-500/10 rounded-xl group-hover:bg-orange-500/20 transition-colors">
                                        <Lightbulb size={32} className="text-orange-500" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold mb-4 text-white">The Challenge</h3>
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            {data.challenge}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Solution */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="group bg-black/20 p-8 md:p-12 rounded-2xl border border-white/5"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="p-4 bg-green-500/10 rounded-xl group-hover:bg-green-500/20 transition-colors">
                                        <CheckCircle2 size={32} className="text-green-500" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold mb-4 text-white">The Solution</h3>
                                        <p className="text-gray-300 text-lg leading-relaxed">
                                            {data.solution}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Site Progress Gallery (New Section) */}
            {data.sitePhotos && data.sitePhotos.length > 0 && (
                <section className="py-24 bg-zinc-950 border-t border-white/5">
                    <div className="container px-6 md:px-12 mx-auto">
                        <div className="mb-12 flex items-end justify-between">
                            <div>
                                <span className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-2 block">
                                    On Site
                                </span>
                                <h2 className="text-3xl md:text-4xl font-heading font-bold">
                                    Construction Progress
                                </h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {data.sitePhotos.map((photo, i) => (
                                <div key={i} className="relative aspect-[4/3] group overflow-hidden bg-zinc-900 rounded-lg">
                                    <Image
                                        src={photo}
                                        alt="Site Progress"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Project Gallery */}
            {data.detailsGallery && data.detailsGallery.length > 0 && (
                <section className="py-24 md:py-32 bg-zinc-900">
                    <div className="container px-6 md:px-12 mx-auto">
                        {/* Section Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16 text-center max-w-3xl mx-auto"
                        >
                            <span className="text-accent text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
                                Visual Narrative
                            </span>
                            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                                Finished Masterpiece
                            </h2>
                            <p className="text-gray-400 text-lg">
                                Explore the detailed perspectives and architectural elements that define this project.
                            </p>
                        </motion.div>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {data.detailsGallery.map((imageUrl, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: index * 0.15 }}
                                    className={`relative group overflow-hidden bg-zinc-900 rounded-xl ${index === 0 ? "md:col-span-2 h-[60vh]" : "h-[50vh]"
                                        }`}
                                >
                                    <Image
                                        src={imageUrl}
                                        alt={`${data.title} - Detail ${index + 1}`}
                                        fill
                                        className="object-cover transition-all duration-700 group-hover:scale-105"
                                        sizes={index === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Image Number Overlay */}
                                    <div className="absolute bottom-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                                        {index + 1}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 bg-primary" />
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

                <div className="relative z-10 container px-6 md:px-12 mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 text-white">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-gray-200 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                            Let&apos;s collaborate to bring your vision to life with the same precision and excellence.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-block bg-accent hover:bg-accent/90 text-white font-bold tracking-widest uppercase px-10 py-4 text-sm transition-all hover:scale-105 shadow-xl"
                            >
                                Start a Project
                            </Link>
                            <Link
                                href="/services"
                                className="inline-block bg-white/10 hover:bg-white/20 text-white font-bold tracking-widest uppercase px-10 py-4 text-sm transition-all border border-white/20"
                            >
                                Explore More Work
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
