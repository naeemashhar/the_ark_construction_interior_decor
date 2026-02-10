import ContactForm from "@/components/contact/ContactForm";
import MapComponent from "@/components/contact/MapComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | The Ark Design Studio",
    description: "Get in touch with our team to start your project.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-primary text-white pt-24 pb-12">
            <div className="container px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Column - Visuals & Info */}
                    <div className="space-y-12">
                        <div>
                            <span className="text-accent uppercase tracking-[0.3em] text-xs font-bold block mb-4">Start a Project</span>
                            <h1 className="text-6xl md:text-8xl font-heading font-medium leading-tiny mb-8">
                                Let's Build <br /> <span className="opacity-50 italic font-serif">History.</span>
                            </h1>
                            <p className="text-xl text-gray-400 font-light max-w-lg leading-relaxed">
                                We partner with visionaries to create structures that defy expectation. Reach out to discuss your next landmark.
                            </p>
                        </div>

                        <div className="relative h-[400px] w-full bg-gray-900 rounded-sm overflow-hidden group">
                            <MapComponent />
                            {/* Overlay Contact Info */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-8 flex flex-col md:flex-row justify-between items-end">
                                <div>
                                    <h4 className="text-white font-heading font-bold mb-1">Headquarters</h4>
                                    <p className="text-gray-400 text-sm">Malegaon, Nashik</p>
                                </div>
                                <div className="text-right mt-4 md:mt-0">
                                    <p className="text-white font-heading font-bold">+91 9870000***</p>
                                    <p className="text-accent text-sm">info@theark.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="bg-white/5 p-8 md:p-12 border border-white/10 rounded-sm">
                        <ContactForm />
                    </div>

                </div>
            </div>
        </main>
    );
}
