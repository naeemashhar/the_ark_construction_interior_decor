import ProjectGrid from "@/components/gallery/ProjectGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | The Ark Design Studio",
    description: "A selection of our architectural and engineering projects.",
};

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-canvas pt-20">
            <ProjectGrid />
        </main>
    );
}
