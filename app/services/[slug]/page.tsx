import { servicesData } from "@/lib/servicesData";
import { notFound } from "next/navigation";
import ConstructionDetail from "@/components/services/ConstructionDetail";
import InteriorDetail from "@/components/services/InteriorDetail";

// Ensure static generation knows about the paths
export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug,
    }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    // Await params for Next.js 15+ / React 19 compatibility
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const service = servicesData[slug as keyof typeof servicesData];

    if (!service) {
        notFound();
    }

    // Render distinct layout based on slug
    if (slug === "construction") {
        return <ConstructionDetail />;
    }

    if (slug === "interior") {
        return <InteriorDetail />;
    }

    return notFound();
}
