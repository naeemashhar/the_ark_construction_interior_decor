import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { servicesData } from "@/lib/servicesData";

export default function ProjectGrid() {
    // Flatten all projects from servicesData into a single array
    const allProjects = [
        ...servicesData.construction.gallery,
        ...servicesData.interior.gallery,
        ...servicesData.residential.gallery,
        ...servicesData.commercial.gallery,
        ...servicesData.industrial.gallery,
        ...servicesData.infrastructure.gallery,
    ];

    return (
        <section className="container px-6 md:px-12 py-24 mx-auto">
            <div className="mb-20">
                <span className="text-secondary text-sm font-bold uppercase tracking-[0.3em] mb-4 block">
                    Portfolio
                </span>
                <h2 className="text-5xl md:text-7xl font-heading font-medium text-primary mb-6">
                    Selected Works
                </h2>
                <div className="w-24 h-1 bg-accent mb-8" />
                <p className="max-w-xl text-secondary text-lg leading-relaxed">
                    A curation of our most significant contributions to the built environment, showcasing our commitment to excellence across all sectors.
                </p>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {allProjects.map((project) => (
                    <Link key={project.id} href={`/projects/${project.id}`} className="block group cursor-none">
                        <div className="relative overflow-hidden rounded-lg">
                            <ProjectCard
                                id={project.id}
                                title={project.title}
                                category={project.category}
                                location={project.location}
                                year={project.year}
                                image={project.image}
                            />
                            {/* Hover Overlay */}
                            <div className="p-4 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                                <div className="px-6 py-3 bg-black/60  rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    View Project
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
