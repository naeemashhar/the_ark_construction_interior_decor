"use client";

import { motion } from "framer-motion";

const stages = [
    { name: "Planning", completed: true, date: "Jan 10, 2024" },
    { name: "Foundation", completed: true, date: "Feb 15, 2024" },
    { name: "Framing", completed: true, date: "Mar 20, 2024" },
    { name: "Systems", completed: false, date: "In Progress" },
    { name: "Finishing", completed: false, date: "Pending" },
    { name: "Handover", completed: false, date: "Pending" },
];

export default function ProgressTracker() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-heading font-bold text-primary mb-6">Project Timeline</h3>
            <div className="relative pl-4 border-l-2 border-gray-200">
                {stages.map((stage, index) => (
                    <div key={stage.name} className="mb-8 last:mb-0 relative">
                        {/* Dot */}
                        <div
                            className={`absolute -left-[21px] top-1 w-3 h-3 rounded-full border-2 border-white 
                ${stage.completed ? "bg-primary" : "bg-gray-300"} 
                ${stage.date === "In Progress" ? "animate-pulse bg-accent" : ""}`}
                        />

                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex justify-between items-baseline mb-1">
                                <span className={`font-heading font-bold ${stage.completed || stage.date === "In Progress" ? "text-primary" : "text-gray-400"}`}>
                                    {stage.name}
                                </span>
                                <span className="text-xs font-mono text-gray-400">{stage.date}</span>
                            </div>
                            {stage.date === "In Progress" && (
                                <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2">
                                    <motion.div
                                        className="bg-accent h-1.5 rounded-full"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "60%" }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                    />
                                </div>
                            )}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}
