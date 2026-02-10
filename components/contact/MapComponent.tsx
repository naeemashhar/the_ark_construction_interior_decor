export default function MapComponent() {
    return (
        <div className="w-full h-[400px] md:h-full min-h-[400px] bg-zinc-900 relative rounded-lg overflow-hidden border border-white/5">
            <iframe
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full grayscale invert opacity-80 mix-blend-luminosity contrast-125 brightness-75"
                frameBorder="0"
                title="Office Location"
                scrolling="no"
                src="https://maps.google.com/maps?q=20.55499,74.53442&z=14&output=embed"
                style={{ filter: "grayscale(100%) invert(100%) contrast(1.2) brightness(0.8)" }}
            />

            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-zinc-900/50 pointer-events-none" />

            {/* Location Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
                <div className="relative">
                    <div className="w-4 h-4 bg-accent rounded-full relative z-10 box-shadow-lg shadow-accent/50" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent/30 rounded-full animate-ping" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/10 rounded-full animate-pulse duration-[3000ms]" />
                </div>
                <div className="mt-6 bg-zinc-900/90  px-6 py-3 rounded-xl border border-white/10 text-center shadow-2xl transform translate-y-2">
                    <p className="text-white font-heading font-bold tracking-wider">MALEGAON</p>
                    <p className="text-accent text-xs font-mono mt-1">20.55, 74.53</p>
                </div>
            </div>
        </div>
    );
}
