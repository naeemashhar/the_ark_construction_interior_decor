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

    const isDarkHero = ["/services", "/services/construction", "/"].includes(pathname);

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

    const textColorClass = scrolled ? "text-secondary" : (isDarkHero ? "text-white/90" : "text-secondary");
    const hoverColorClass = scrolled ? "hover:text-primary" : (isDarkHero ? "hover:text-white" : "hover:text-primary");
    const logoColorClass = scrolled ? "text-primary" : (isDarkHero ? "text-white" : "text-primary");

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4 bg-canvas/80 backdrop-blur-md border-b border-gray-200" : "py-6 bg-transparent"
                    }`}
            >
                <div className="container flex items-center justify-between">
                    <Link href="/" className={`font-heading font-bold text-2xl tracking-tighter transition-colors ${logoColorClass}`}>
                        THE ARK
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                href={link.href}
                                className={`text-sm uppercase tracking-wide transition-colors font-body font-medium ${textColorClass} ${hoverColorClass}`}
                            >
                                {link.title}
                            </Link>
                        ))}
                        <Link href="/dashboard">
                            <MagneticButton variant="primary">
                                Client Login
                            </MagneticButton>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleMenu} className={`md:hidden p-2 transition-colors ${logoColorClass}`}>
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
                                Client Login
                            </MagneticButton>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
