"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const updates = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400",
        note: "Steel framework completion for Sector B.",
        date: "2 hours ago",
        user: "Eng. Sarah L.",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400",
        note: "Foundation inspection passed. Proceeding to next phase.",
        date: "Yesterday",
        user: "Site Mgr. John D.",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1768796373307-fc2f843660f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        note: "Material delivery: 500 units of high-grade concrete.",
        date: "2 days ago",
        user: "Logistics Team",
    }
];

export default function SiteFeed() {
    return (
        <div className="space-y-6">
            <h3 className="text-xl font-heading font-bold text-primary mb-4">Site Updates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                {updates.map((update, index) => (
                    <motion.div
                        key={update.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-4 rounded-lg shadow-sm rotate-1 hover:rotate-0 transition-transform duration-300 border border-gray-100"
                    >
                        <div className="aspect-video w-full overflow-hidden rounded-md mb-3 bg-gray-100 relative">
                            <Image
                                src={update.image}
                                alt="Site update"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-sm font-mono z-10">
                                {update.date}
                            </div>
                        </div>

                        <p className="font-body text-sm text-secondary font-medium">{update.note}</p>
                        <p className="text-xs text-gray-400 mt-2 font-mono">Posted by {update.user}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
