"use client";

import LegalPageLayout from "@/components/layout/LegalPageLayout";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TermsOfService() {
    const sections = [
        {
            title: "1. Agreement to Terms",
            content: "By accessing and using our website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, you may not access or use the services."
        },
        {
            title: "2. Intellectual Property Rights",
            content: "The content, layout, design, data, databases and graphics on this website are protected by United States and other international intellectual property laws and are owned by The Ark Design Studio or its licensors."
        },
        {
            title: "3. User Conduct",
            content: "You agree not to use the website for any purpose that is unlawful or prohibited by these Terms. You agree not to disrupt or interfere with the security of, or otherwise abuse, the website or any services."
        },
        {
            title: "4. Limitation of Liability",
            content: "In no event shall The Ark Design Studio be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses."
        },
        {
            title: "5. Governing Law",
            content: "These Terms shall be governed and construed in accordance with the laws of New York, United States, without regard to its conflict of law provisions."
        }
    ];

    return (
        <LegalPageLayout title="Terms of Service" lastUpdated="October 24, 2026">
            <div className="space-y-12 text-gray-400 leading-relaxed font-light text-lg">
                <p>
                    These Terms of Service cover your use of and access to the sites, templates, products, applications, tools and features provided by The Ark Design Studio.
                </p>

                {sections.map((section, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <h2 className="text-2xl font-heading font-bold text-white mb-4">
                            {section.title}
                        </h2>
                        <div className="text-gray-400">
                            {section.content}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
                <Link href="/" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-white hover:text-accent transition-colors">
                    ← Back to Home
                </Link>
            </div>
        </LegalPageLayout>
    );
}
