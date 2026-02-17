import ServiceHero from "@/components/services/ServiceHero";
import ServiceDetails from "@/components/services/ServiceDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | The Ark Design Studio",
    description: "Explore our expertise in Construction, Engineering, and Interior Design. From structural brutalism to refined interiors.",
    openGraph: {
        title: "Services | The Ark Design Studio",
        description: "Explore our expertise in Construction, Engineering, and Interior Design.",
        images: ["https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200"],
    },
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-canvas">
            <ServiceHero />
            <ServiceDetails />

            {/* CTA Section */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="container px-4">
                    <h2 className="text-4xl md:text-6xl font-heading font-medium mb-8">Ready to Build?</h2>
                    <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
                        Whether you need a structural overhaul or an aesthetic refinement, our team is ready to bring your vision to life.
                    </p>
                    <a href="/contact" className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors">
                        Start a Project
                    </a>
                </div>
            </section>
        </main>
    );
}
