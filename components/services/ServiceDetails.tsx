"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export default function ServiceDetails() {
    return (
        <div className="bg-canvas">

            {/* Construction Section */}
            <section id="construction" className="py-24 md:py-32 border-b border-gray-200">
                <div className="container px-4">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-1/2 space-y-8">
                            <span className="text-accent font-mono uppercase tracking-widest">01 / Construction</span>
                            <h2 className="text-4xl md:text-6xl font-heading font-medium text-primary">Uncompromising Structure.</h2>
                            <p className="text-secondary text-lg leading-relaxed">
                                We build the backbone of civilization. From skyscrapers that touch the clouds to bridges that connect communities, our engineering prowess ensures safety, durability, and architectural integrity.
                            </p>

                            <ul className="space-y-4 pt-4">
                                {["Structural Engineering", "Civil Infrastructure", "Commercial High-rises", "Project Management"].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-secondary font-medium">
                                        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <Check size={14} />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-sm bg-gray-200">
                                <Image
                                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200"
                                    alt="Construction site"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interior Section */}
            <section id="interior" className="py-24 md:py-32 bg-canvas">
                <div className="container px-4">
                    <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
                        <div className="w-full md:w-1/2 space-y-8">
                            <span className="text-accent font-mono uppercase tracking-widest">02 / Interiors</span>
                            <h2 className="text-4xl md:text-6xl font-heading font-medium text-primary">Curated Living.</h2>
                            <p className="text-secondary text-lg leading-relaxed">
                                Space is more than dimensions; it&apos;s a feeling. Our interior design team curates environments that deeply resonate with the human experience, blending texture, light, and form.
                            </p>

                            <ul className="space-y-4 pt-4">
                                {["Residential Design", "Commercial Workspaces", "Bespoke Furniture", "Lighting Design"].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-secondary font-medium">
                                        <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                            <Check size={14} />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-sm bg-gray-200">
                                <Image
                                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200"
                                    alt="Interior design"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
