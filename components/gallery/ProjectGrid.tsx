import ProjectCard from "./ProjectCard";

const projects = [
    {
        id: "1",
        title: "The Vertex Tower",
        category: "Commercial",
        location: "New York, NY",
        year: "2024",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "2",
        title: "Serenity Residence",
        category: "Residential",
        location: "Malibu, CA",
        year: "2023",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "3",
        title: "Echo Valley Museum",
        category: "Cultural",
        location: "Oslo, Norway",
        year: "2025",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "4",
        title: "Orbital Station Hub",
        category: "Infrastructure",
        location: "Tokyo, Japan",
        year: "2024",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "5",
        title: "Azure Coast Villa",
        category: "Residential",
        location: "Nice, France",
        year: "2023",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: "6",
        title: "Ironworks Loft",
        category: "Renovation",
        location: "Berlin, Germany",
        year: "2022",
        image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
    }
];

export default function ProjectGrid() {
    return (
        <div className="container px-4 py-24">
            <div className="mb-16">
                <h1 className="text-5xl md:text-7xl font-heading font-medium text-primary mb-6">Selected Works</h1>
                <p className="max-w-xl text-secondary text-lg">A curation of our most significant contributions to the built environment.</p>
            </div>

            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </div>
    );
}
