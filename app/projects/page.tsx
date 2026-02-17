import ProjectGrid from "@/components/gallery/ProjectGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | The Ark Design Studio",
    description: "A selection of our architectural and engineering projects. Merging function with form across the globe.",
    openGraph: {
        title: "Projects | The Ark Design Studio",
        description: "A selection of our architectural and engineering projects.",
        images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"],
    },
};

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-canvas pt-20">
            <ProjectGrid />
        </main>
    );
}
