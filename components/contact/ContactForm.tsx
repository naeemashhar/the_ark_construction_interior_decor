"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { Send } from "lucide-react";

export default function ContactForm() {
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value, name } = e.target;
        // For radio buttons, name is "interest" but id is empty or specific. Ideally we use name for state key if id matches state key or if name matches.
        // Actually, for text inputs we have id="name", id="email", etc.
        // For radio buttons we have name="interest" and value="Type".

        if (name === "interest") {
            setFormData(prev => ({ ...prev, interest: value }));
        } else {
            setFormData(prev => ({ ...prev, [id]: value }));
        }
    };

    const inputClasses = (field: string) => `
        w-full bg-transparent border-b py-4 text-white focus:outline-none transition-all duration-300 font-heading text-lg
        ${focusedField === field ? "border-accent pl-4" : "border-white/20"}
    `;

    const labelClasses = (field: string) => `
        absolute left-0 transition-all duration-300 pointer-events-none uppercase tracking-widest font-bold
        ${focusedField === field || formData[field as keyof typeof formData]
            ? "-top-6 text-xs text-accent"
            : "top-4 text-sm text-white/50"
        }
    `;

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <motion.form
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); }} // Prevent default submission for now
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div variants={itemVariants} className="group relative">
                    <label htmlFor="name" className={labelClasses('name')}>Name</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClasses('name')}
                        onFocus={() => setFocusedField('name')}
                        onBlur={(e) => !e.target.value && setFocusedField(null)}
                    />
                </motion.div>
                <motion.div variants={itemVariants} className="group relative">
                    <label htmlFor="email" className={labelClasses('email')}>Email</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses('email')}
                        onFocus={() => setFocusedField('email')}
                        onBlur={(e) => !e.target.value && setFocusedField(null)}
                    />
                </motion.div>
                <motion.div variants={itemVariants} className="group relative">
                    <label htmlFor="phone" className={labelClasses('phone')}>Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClasses('phone')}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={(e) => !e.target.value && setFocusedField(null)}
                    />
                </motion.div>
            </div>

            <motion.div variants={itemVariants} className="group">
                <label className="text-xs uppercase tracking-widest text-white/50 font-bold mb-4 block">I&apos;m interested in...</label>
                <div className="flex flex-wrap gap-4 mt-4">
                    {['Residential', 'Commercial', 'Interior Design', 'Consulting', 'Renovation'].map((type) => (
                        <label key={type} className="cursor-pointer group/pill">
                            <input
                                type="radio"
                                name="interest"
                                value={type}
                                checked={formData.interest === type}
                                onChange={handleChange}
                                className="peer sr-only"
                            />
                            <span className="inline-block border border-white/20 rounded-full py-3 px-6 text-sm text-gray-400 peer-checked:bg-accent peer-checked:text-white peer-checked:border-accent hover:border-white hover:text-white transition-all duration-300">
                                {type}
                            </span>
                        </label>
                    ))}
                </div>
            </motion.div>

            <motion.div variants={itemVariants} className="group relative pt-6">
                <label htmlFor="message" className={labelClasses('message')}>Project Details</label>
                <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses('message')} resize-none`}
                    onFocus={() => setFocusedField('message')}
                    onBlur={(e) => !e.target.value && setFocusedField(null)}
                />
            </motion.div>

            <motion.div variants={itemVariants} className="pt-8">
                <MagneticButton variant="primary" className="w-full md:w-auto group">
                    <span className="flex items-center gap-3">
                        Send Inquiry
                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                </MagneticButton>
            </motion.div>
        </motion.form>
    );
}
