"use client";


export default function ContactForm() {
    const inputClasses = "w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-accent transition-all duration-300 placeholder:text-white/20 font-heading text-lg focus:pl-4";
    const labelClasses = "text-xs uppercase tracking-widest text-gray-400 font-bold mb-2 block";

    return (
        <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="group">
                    <label htmlFor="name" className={labelClasses}>Name</label>
                    <input
                        type="text"
                        id="name"
                        className={inputClasses}
                        placeholder="John Doe"
                    />
                </div>
                <div className="group">
                    <label htmlFor="email" className={labelClasses}>Email</label>
                    <input
                        type="email"
                        id="email"
                        className={inputClasses}
                        placeholder="john@example.com"
                    />
                </div>
            </div>

            <div className="group">
                <label htmlFor="interest" className={labelClasses}>I&apos;m interested in...</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    {['Residential', 'Commercial', 'Interior', 'Consulting'].map((type) => (
                        <label key={type} className="cursor-pointer">
                            <input type="radio" name="interest" value={type} className="peer sr-only" />
                            <div className="border border-white/20 rounded-full py-3 px-6 text-center text-sm text-gray-400 peer-checked:bg-white peer-checked:text-primary peer-checked:border-white hover:border-white transition-all duration-300">
                                {type}
                            </div>
                        </label>
                    ))}
                </div>
            </div>

            <div className="group">
                <label htmlFor="message" className={labelClasses}>Project Details</label>
                <textarea
                    id="message"
                    rows={4}
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell us about your vision, timeline, and goals..."
                />
            </div>

            <div className="pt-8">
                <button
                    type="submit"
                    className="group relative bg-white text-primary px-12 py-5 rounded-sm font-bold uppercase tracking-widest overflow-hidden hover:bg-accent hover:text-white transition-colors duration-300"
                >
                    <span className="relative z-10 flex items-center gap-4">
                        Send Inquiry
                        <span className="block w-12 h-[1px] bg-current group-hover:w-16 transition-all duration-300" />
                    </span>
                </button>
            </div>
        </form>
    );
}
