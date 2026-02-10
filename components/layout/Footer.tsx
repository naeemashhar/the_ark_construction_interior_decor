import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-primary text-white pt-24 pb-12 font-body relative overflow-hidden">
            {/* Background Pattern */}
             {/* <div className="absolute inset-0 opacity-[0.01] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />  */}

            <div className="container px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-24">
                    {/* Brand Section */}
                    <div className="md:col-span-5 lg:col-span-4">
                        <Link href="/" className="inline-block mb-8 group">
                            <span className="font-heading text-5xl font-bold tracking-tighter text-white group-hover:text-accent transition-colors duration-300">
                                THE ARK
                            </span>
                        </Link>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-sm">
                            Merging brutalist integrity with modern sustainability. We create spaces that stand the test of time.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { name: 'Instagram', icon: Instagram },
                                { name: 'LinkedIn', icon: Linkedin },
                                { name: 'Twitter', icon: Twitter }
                            ].map((social) => (
                                <a key={social.name} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 group/icon">
                                    <span className="sr-only">{social.name}</span>
                                    <social.icon size={18} className="text-white group-hover/icon:text-primary transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="md:col-span-7 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12">
                        <div>
                            <h4 className="font-heading font-medium text-lg mb-6 text-white">Sitemap</h4>
                            <ul className="space-y-4 text-gray-400">
                                {['Services', 'Projects', 'Team', 'Dashboard'].map((item) => (
                                    <li key={item}>
                                        <Link href={`/${item.toLowerCase()}`} className="hover:text-accent transition-colors duration-200 block py-1">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-heading font-medium text-lg mb-6 text-white">Services</h4>
                            <ul className="space-y-4 text-gray-400">
                                <li><Link href="/services/construction" className="hover:text-accent transition-colors duration-200 block py-1">Construction</Link></li>
                                <li><Link href="/services/interior" className="hover:text-accent transition-colors duration-200 block py-1">Interior Design</Link></li>
                                <li><Link href="/services" className="hover:text-accent transition-colors duration-200 block py-1">Consultation</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-heading font-medium text-lg mb-6 text-white">Office</h4>
                            <address className="not-italic text-gray-400 space-y-4">
                                <p>123 Concrete Avenue<br />Floor 42, Suite 100<br />New York, NY 10012</p>
                                <p>
                                    <a href="mailto:hello@theark.com" className="hover:text-white transition-colors">hello@theark.com</a>
                                    <br />
                                    <a href="tel:+15550000000" className="hover:text-white transition-colors">+1 (555) 000-0000</a>
                                </p>
                            </address>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-black font-semibold">
                    <p>&copy; {new Date().getFullYear()} The Ark Design Studio</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
