"use client";

import LegalPageLayout from "@/components/layout/LegalPageLayout";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
    const sections = [
        {
            title: "1. Information We Collect",
            content: "We collect information you provide directly to us, such as when you fill out a form, request a consultation, or communicate with us. This may include your name, email address, phone number, and project details."
        },
        {
            title: "2. How We Use Your Information",
            content: "We use the information we collect to provide, maintain, and improve our services, including to respond to your comments and questions, and to send you related information, including confirmations and updates."
        },
        {
            title: "3. Sharing of Information",
            content: "We do not share your personal information with third parties except as described in this policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf."
        },
        {
            title: "4. Data Security",
            content: "We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction."
        },
        {
            title: "5. Contact Us",
            content: (
                <>
                    If you have any questions about this Privacy Policy, please contact us at{" "}
                    <a href="mailto:privacy@theark.com" className="text-accent hover:underline">
                        privacy@theark.com
                    </a>.
                </>
            )
        }
    ];

    return (
        <LegalPageLayout title="Privacy Policy" lastUpdated="October 24, 2026">
            <div className="space-y-12 text-gray-400 leading-relaxed font-light text-lg">
                <p>
                    At The Ark Design Studio, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website and services.
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
