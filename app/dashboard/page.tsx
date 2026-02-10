import ProgressTracker from "@/components/dashboard/ProgressTracker";
import SiteFeed from "@/components/dashboard/SiteFeed";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Client Dashboard | The Ark Design Studio",
    description: "Track your project progress and updates.",
};

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-24 pb-12">
            <div className="container px-4">
                <div className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-heading font-medium text-primary mb-2">Project: The Vertex Tower</h1>
                    <p className="text-secondary opacity-60">Status: Phase 3 - Structural Framing</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-8 lg:sticky lg:top-28">
                        {/* Overview Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <p className="text-sm text-gray-400 font-mono mb-1">Budget Utilized</p>
                                <p className="text-3xl font-heading font-bold text-primary">42%</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <p className="text-sm text-gray-400 font-mono mb-1">Days Remaining</p>
                                <p className="text-3xl font-heading font-bold text-primary">128</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <p className="text-sm text-gray-400 font-mono mb-1">Next Milestone</p>
                                <p className="text-xl font-heading font-bold text-primary">HVAC Install</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 min-h-[300px]">
                            <h3 className="text-xl font-heading font-bold text-primary mb-4">Blueprints & Documents</h3>
                            <div className="space-y-4">
                                {["Structural_Plans_v4.pdf", "Permit_App_Approved.pdf", "Material_Specs_Concrete.pdf"].map((doc) => (
                                    <div key={doc} className="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-100 hover:bg-gray-100 transition-colors cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-500">PDF</div>
                                            <span className="font-medium text-sm text-secondary">{doc}</span>
                                        </div>
                                        <span className="text-xs text-primary font-bold uppercase tracking-wider">Download</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <ProgressTracker />
                        <SiteFeed />
                    </div>
                </div>
            </div>
        </main>
    );
}
