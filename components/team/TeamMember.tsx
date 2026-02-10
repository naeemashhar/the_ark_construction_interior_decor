"use client";

import Image from "next/image";
import { Linkedin, Mail, Twitter } from "lucide-react";

interface TeamMemberProps {
    name: string;
    role: string;
    image: string;
    bio?: string;
    socials?: {
        linkedin?: string;
        twitter?: string;
        email?: string;
    };
    isCEO?: boolean;
}

export default function TeamMember({ name, role, image, bio, socials, isCEO = false }: TeamMemberProps) {
    return (
        <div className={`group relative overflow-hidden rounded-lg bg-white/50 border border-gray-100 dark:bg-white/5 dark:border-white/10 ${isCEO ? 'md:flex md:items-center md:gap-8 p-6 md:p-12' : 'p-4'}`}>
            <div className={`relative overflow-hidden rounded-md bg-gray-200 ${isCEO ? 'w-full md:w-1/2 aspect-[3/4] md:aspect-square' : 'aspect-[3/4] w-full'}`}>
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
            </div>

            <div className={`${isCEO ? 'w-full md:w-1/2 mt-6 md:mt-0' : 'mt-4'}`}>
                <h3 className={`font-heading font-bold text-primary ${isCEO ? 'text-4xl mb-2' : 'text-xl'}`}>{name}</h3>
                <p className={`font-mono text-accent uppercase tracking-widest ${isCEO ? 'text-sm mb-6' : 'text-xs mb-2'}`}>{role}</p>

                {bio && (
                    <p className="text-secondary/70 font-body leading-relaxed mb-6">
                        {bio}
                    </p>
                )}

                {/* Social Links */}
                <div className="flex gap-4">
                    {socials?.linkedin && (
                        <a href={socials.linkedin} className="text-secondary/40 hover:text-primary transition-colors">
                            <Linkedin size={isCEO ? 24 : 18} />
                        </a>
                    )}
                    {socials?.twitter && (
                        <a href={socials.twitter} className="text-secondary/40 hover:text-primary transition-colors">
                            <Twitter size={isCEO ? 24 : 18} />
                        </a>
                    )}
                    {socials?.email && (
                        <a href={`mailto:${socials.email}`} className="text-secondary/40 hover:text-primary transition-colors">
                            <Mail size={isCEO ? 24 : 18} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
