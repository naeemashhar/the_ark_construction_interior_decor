"use client";

import HeroSection from "@/components/home/HeroSection";
import ServicesCarousel from "@/components/home/ServicesCarousel";
import ServicesSplit from "@/components/home/ServicesSplit";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSplit />
      <ServicesCarousel />

      {/* Short About Section to break up the flow */}
      <section className="py-24 md:py-32 container px-4 text-center">
        <p className="uppercase text-sm tracking-[0.2em] text-accent font-bold mb-6">About The Ark</p>
        <h2 className="text-3xl md:text-5xl font-heading font-medium leading-tight max-w-4xl mx-auto text-primary">
          We are a team of visionaries and builders, dedicated to transforming abstract concepts into concrete realities. With over 20 years of experience, we bring structure to imagination.
        </h2>
      </section>
    </main>
  );
}
