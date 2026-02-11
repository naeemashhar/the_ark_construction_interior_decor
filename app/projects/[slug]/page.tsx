import { servicesData } from "@/lib/servicesData";
import { notFound } from "next/navigation";
import ProjectDetailTemplate from "@/components/projects/ProjectDetailTemplate";

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
