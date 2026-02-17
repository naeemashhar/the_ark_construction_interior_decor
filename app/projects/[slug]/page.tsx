import { servicesData } from "@/lib/servicesData";
import { notFound } from "next/navigation";
import ProjectDetailTemplate from "@/components/projects/ProjectDetailTemplate";
import { Metadata } from "next";

// Helper to get all projects in a flat array
const getAllProjects = () => {
    return Object.values(servicesData).flatMap(service => service.gallery);
};

export async function generateStaticParams() {
    const projects = getAllProjects();
    return projects.map((project) => ({
        slug: project.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const project = getAllProjects().find((p) => p.id === resolvedParams.slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} | The Ark`,
        description: project.description,
        openGraph: {
            title: `${project.title} | The Ark Design Studio`,
            description: project.description,
            images: [
                {
                    url: project.image,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
        },
    };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    const projects = getAllProjects();
    const project = projects.find((p) => p.id === slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetailTemplate data={project} />;
}
