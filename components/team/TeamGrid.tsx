"use client";

import TeamMember from "./TeamMember";
import { motion } from "framer-motion";

const teamData = [
    {
        name: "Alexander Sterling",
        role: "Co-Founder & Design Director",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
        bio: "With over 25 years of experience in structural engineering and architectural design, Alexander founded The Ark with a vision to merge brutalist integrity with modern sustainability.",
        socials: {
            linkedin: "#",
            twitter: "#",
            email: "alexander@theark.com"
        },
        isCEO: true
    },
    {
        name: "Eleanor Sterling",
        role: "Co-Founder & Managing Director",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800", // Replaced Elena's image for demo or reused depending on intent, using a new placeholder for distinctness if possible, otherwise using Elena's old one but renamed. Let's assume different image or same style.
        bio: "Eleanor brings a decade of operational excellence to The Ark. Her focus on client relations and project execution ensures that every vision is realized on time and without compromise.",
        socials: {
            linkedin: "#",
            email: "eleanor@theark.com"
        },
        isCEO: true
    },
    {
        name: "Marcus Chen",
        role: "Senior Civil Engineer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
        socials: { linkedin: "#", email: "marcus@theark.com" }
    },
    {
        name: "Sarah Jenkins",
        role: "Project Manager",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
        socials: { linkedin: "#", email: "sarah@theark.com" }
    },
    {
        name: "David Kim",
        role: "Sustainability Specialist",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
        socials: { linkedin: "#", email: "david@theark.com" }
    },
    {
        name: "Olivia Grant",
        role: "Interior Designer",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
        socials: { linkedin: "#", twitter: "#" }
    }
];

export default function TeamGrid() {
    const founders = teamData.filter(member => member.isCEO);
    const members = teamData.filter(member => !member.isCEO);

    return (
        <div className="container px-4 py-24">
            {/* Header */}
            <div className="mb-20 text-center max-w-3xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-heading font-medium text-primary mb-6">The Architects of Reality</h1>
                <p className="text-secondary text-lg leading-relaxed">
                    We are a diverse group of thinkers, builders, and dreamers. United by a passion for structure and a commitment to excellence.
                </p>
            </div>

            {/* Founders Section */}
            <div className="space-y-12 mb-24">
                {founders.map((founder, index) => (
                    <motion.div
                        key={founder.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <TeamMember {...founder} />
                    </motion.div>
                ))}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-200 mb-24" />

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member, index) => (
                    <motion.div
                        key={member.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <TeamMember {...member} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
