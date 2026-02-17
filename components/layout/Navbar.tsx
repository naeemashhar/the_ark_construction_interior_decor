"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const isDarkPage =
        pathname === "/" ||
        pathname.startsWith("/services") ||
        pathname === "/contact" ||
        pathname === "/privacy" ||
        pathname === "/terms" ||
        pathname.startsWith("/projects");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { title: "Home", href: "/" },
        { title: "Services", href: "/services" },
        { title: "Projects", href: "/projects" },
        { title: "Team", href: "/team" },
        { title: "Dashboard", href: "/dashboard" },
        { title: "Contact", href: "/contact" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    // Dynamic Classes
    const getNavClasses = () => {
        if (scrolled) {
            return isDarkPage
                ? "py-4 bg-[#3D405B]/90  border-b border-white/10 shadow-lg"
                : "py-4 bg-canvas/90  border-b border-gray-200 shadow-sm";
        }
        // Gradient overlay for better text visibility on hero images
        return isDarkPage
            ? "py-6 bg-gradient-to-b from-black/60 to-transparent"
            : "py-6 bg-transparent";
    };

    const getTextColor = () => {
        if (scrolled) {
            return isDarkPage ? "text-white" : "text-secondary";
        }
        return isDarkPage ? "text-white" : "text-secondary";
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavClasses()}`}
            >
                <div className="container flex items-center justify-between">
                    <Link href="/" className="group flex flex-col items-start leading-none gap-0.5">
                        <span className={`text-[10px] font-bold uppercase tracking-[0.4em] transition-colors ${getTextColor()}`}>The</span>
                        <span className={`font-heading font-black text-3xl tracking-tighter transition-colors ${getTextColor()}`}>ARK</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                href={link.href}
                                className={`text-sm uppercase tracking-wide transition-colors font-body font-medium hover:opacity-70 ${getTextColor()}`}
                            >
                                {link.title}
                            </Link>
                        ))}
                        <Link href="/dashboard">
                            <MagneticButton className="border border-[#222433]" variant="primary">
                                For Client
                            </MagneticButton>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleMenu} className={`md:hidden p-2 transition-colors ${getTextColor()}`}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-40 bg-canvas flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                href={link.href}
                                onClick={toggleMenu}
                                className="text-3xl font-heading font-bold text-primary uppercase"
                            >
                                {link.title}
                            </Link>
                        ))}
                        <div className="mt-8">
                            <MagneticButton onClick={toggleMenu}>
                                For Client
                            </MagneticButton>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
