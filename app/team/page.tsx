import TeamGrid from "@/components/team/TeamGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Meet Our Team | The Ark Design Studio",
    description: "Meet the visionaries behind The Ark Design Studio.",
};

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-canvas pt-20">
            <TeamGrid />
        </main>
    );
}
