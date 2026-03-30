import { Map, MapMarker, MarkerContent } from "@/components/ui/map";

export default function MapComponent() {
    const center: [number, number] = [74.53442, 20.55499];

    return (
        <div className="w-full h-[400px] md:h-full min-h-[400px] bg-zinc-900 relative rounded-lg overflow-hidden border border-white/5">
            <div className="absolute inset-0 z-0">
                <Map
                    center={center}
                    zoom={14}
                    theme="dark"
                    // Subtle styling to match the site's aesthetic
                    className="w-full h-full grayscale-[0.5] contrast-[1.1] brightness-[0.8]"
                    dragPan={true}
                    scrollZoom={false}
                >
                    <MapMarker longitude={center[0]} latitude={center[1]}>
                        <MarkerContent>
                            <div className="flex flex-col items-center pointer-events-none -translate-y-8">
                                {/* <div className="relative">
                                    <div className="w-4 h-4 bg-accent rounded-full relative z-10 box-shadow-lg shadow-accent/50" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-accent/30 rounded-full animate-ping" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/10 rounded-full animate-pulse duration-[3000ms]" />
                                </div> */}
                                <div className="mt-4 bg-zinc-900/95 px-5 py-2.5 rounded-xl border border-white/10 text-center shadow-2xl backdrop-blur-md">
                                    <p className="text-white font-heading font-extrabold tracking-wider text-xs uppercase">MALEGAON</p>
                                    <p className="text-accent text-[10px] font-mono mt-0.5 opacity-80">20.55, 74.53</p>
                                </div>
                            </div>
                        </MarkerContent>
                    </MapMarker>
                </Map>
            </div>

            {/* Subtle Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-zinc-900/20 pointer-events-none z-10" />
        </div>
    );
}

