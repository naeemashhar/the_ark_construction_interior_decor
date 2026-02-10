export default function MapComponent() {
    return (
        <div className="w-full h-[400px] md:h-full min-h-[400px] bg-gray-900 relative rounded-lg overflow-hidden grayscale contrast-125">
            {/* Placeholder for Map - Using an iframe for visual representation without API key for now, 
          or a static image would be better, but constructing a CSS grid map to match the 'Blueprint' vibe */}

            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            />

            {/* Topographic Lines Effect (CSS Radial Gradients) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    background: "radial-gradient(circle at 50% 50%, transparent 20%, #444 21%, transparent 22%, transparent 30%, #444 31%, transparent 32%)"
                }}
            />

            {/* Location Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="relative">
                    <div className="w-4 h-4 bg-accent rounded-full relative z-10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent/30 rounded-full animate-ping" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-accent/10 rounded-full animate-pulse" />
                </div>
                <div className="mt-4 bg-primary/90 px-4 py-2 rounded border border-white/10 text-center">
                    <p className="text-white font-heading font-bold text-sm">THE ARK HQ</p>
                    <p className="text-gray-400 text-xs font-mono">40.7128° N, 74.0060° W</p>
                </div>
            </div>
        </div>
    );
}
