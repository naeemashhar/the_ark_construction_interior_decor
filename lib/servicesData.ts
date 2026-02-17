export const servicesData = {
    construction: {
        title: "Construction",
        subtitle: "The Core",
        description: "Engineering the backbone of tomorrow. We specialize in high-rises, commercial complexes, and civil infrastructure that stands the test of time.",
        heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000",
        process: [
            { step: "01", title: "Feasibility & Planning", desc: "Rigorous site analysis, structural feasibility studies, and regulatory compliance checks." },
            { step: "02", title: "Structural Design", desc: "Advanced BIM modeling and load-bearing calculations to ensure absolute integrity." },
            { step: "03", title: "Excavation & Foundation", desc: "Laying the groundwork with precision piling and concrete reinforcement." },
            { step: "04", title: "Superstructure", desc: "Vertical construction using high-grade steel and sustainable concrete blends." }
        ],
        features: [
            { title: "High-Rise Commercial", detail: "Skyscrapers that redefine skylines using state-of-the-art structural systems." },
            { title: "Civil Infrastructure", detail: "Bridges, roads, and public works engineered for longevity and resilience." },
            { title: "Industrial Complexes", detail: "Optimized warehousing and manufacturing facilities focused on operational efficiency." },
            { title: "Sustainable Retrofitting", detail: "Modernizing existing structures to meet green building standards and improve energy efficiency." },
            { title: "Seismic Engineering", detail: "Advanced earthquake-resistant designs ensuring safety in geologically active zones." }
        ],
        gallery: [
            {
                id: "vertex-tower",
                title: "The Vertex Tower",
                category: "Commercial",
                location: "New York, NY",
                year: "2024",
                client: "Vertex Holdings",
                status: "Completed",
                duration: "36 Months",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
                description: "A 60-story sustainable skyscraper redefining the skyline with its aerodynamic form and green energy systems.",
                challenge: "Constructing a sway-resistant structure in a high-wind zone while maximizing natural light for all occupants.",
                solution: "Implemented a diagrid structural system and smart glass facades that adapt to sunlight intensity.",
                detailsGallery: [
                    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1460317442991-0ec2aa72af41?auto=format&fit=crop&q=80&w=800"
                ],
                sitePhotos: [
                    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400"
                ]
            },
            {
                id: "horizon-bridge",
                title: "Horizon Bridge",
                category: "Infrastructure",
                location: "San Francisco, CA",
                year: "2023",
                client: "State Department of Transportation",
                status: "Completed",
                duration: "48 Months",
                image: "https://images.unsplash.com/photo-1591588582259-e675bd2e6088?auto=format&fit=crop&q=80&w=800",
                description: "A suspension bridge connecting two major districts, designed to withstand seismic activity while offering pedestrian pathways.",
                challenge: "Minimizing environmental impact on the bay's ecosystem during foundation piling.",
                solution: "Used silent piling technology and floating construction platforms to protect marine life.",
                detailsGallery: [
                    "https://images.unsplash.com/photo-1591588582259-e675bd2e6088?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1513828583688-c29a7f557074?auto=format&fit=crop&q=80&w=800"
                ],
                sitePhotos: [
                    "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
                ]
            },
            {
                id: "echo-center",
                title: "Echo Cultural Center",
                category: "Public",
                location: "Oslo, Norway",
                year: "2025",
                client: "Ministry of Culture",
                status: "In Progress",
                duration: "30 Months",
                image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
                description: "A multi-purpose cultural hub featuring theaters, galleries, and public plazas woven into the landscape.",
                challenge: "Integrating a modern structure into a historic waterfront district without disrupting the visual harmony.",
                solution: "Designed a low-profile, undulating roof covered in native vegetation to blend seamlessly with the surroundings.",
                detailsGallery: [
                    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1550948537-130a1ce83314?auto=format&fit=crop&q=80&w=800"
                ],
                sitePhotos: [
                    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?auto=format&fit=crop&q=80&w=400"
                ]
            }
        ]
    },
    interior: {
        title: "Interior Design",
        subtitle: "The Shell",
        description: "Crafting soul within the structure. We curate bespoke living spaces and functional work environments that resonate with the human experience.",
        heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000",
        process: [
            { step: "01", title: "Concept & Moodboarding", desc: "Defining the aesthetic direction through texture, color palettes, and spatial flow." },
            { step: "02", title: "Spatial Planning", desc: "Optimizing layouts for functionality, ergonomics, and natural light integration." },
            { step: "03", title: "Material Selection", desc: "Sourcing premium materials, from Italian marble to sustainable timber." },
            { step: "04", title: "Fit-out & Styling", desc: "Precision installation of fixtures, bespoke furniture, and final decorative touches." }
        ],
        features: [
            { title: "Luxury Residential", detail: "From penthouses to private estates, we craft homes that are a true reflection of your lifestyle." },
            { title: "Corporate Workspaces", detail: "Productivity meets style. We design office environments that foster collaboration and innovation." },
            { title: "Hospitality & Retail", detail: "Creating unforgettable guest experiences through atmospheric lighting and tactile materials." },
            { title: "Bespoke Furniture", detail: "One-of-a-kind pieces designed specifically for your space by master craftsmen." },
            { title: "Lighting Design", detail: "Specialized lighting plans that enhance mood and define functional zones." }
        ],
        gallery: [
            {
                id: "zenith-penthouse",
                title: "Zenith Penthouse",
                category: "Residential",
                location: "London, UK",
                year: "2024",
                client: "Private Client",
                status: "Completed",
                duration: "14 Months",
                image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
                description: "A dual-level penthouse focusing on minimalism and panoramic city views.",
                challenge: "Creating a warm, inviting atmosphere within a stark, glass-walled structure.",
                solution: "Utilized warm wood paneling and textured fabrics to soften the acoustics and visuals.",
                detailsGallery: [
                    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=800"
                ],
                sitePhotos: [
                    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400"
                ]
            },
            {
                id: "oasis-lounge",
                title: "Oasis Hotel Lounge",
                category: "Hospitality",
                location: "Dubai, UAE",
                year: "2023",
                client: "Oasis Hospitality Group",
                status: "Completed",
                duration: "18 Months",
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
                description: "A luxury hotel lobby designed to evoke a desert oasis with water features and lush greenery.",
                challenge: "Managing humidity levels for indoor plants without compromising guest comfort.",
                solution: "Integrated a smart climate control system that creates microclimates for the vegetation.",
                detailsGallery: [
                    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800"
                ],
                sitePhotos: [
                    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
                ]
            },
            {
                id: "nova-workspace",
                title: "Nova Tech HQ",
                category: "Corporate",
                location: "Berlin, Germany",
                year: "2024",
                client: "Nova Technologies",
                status: "Completed",
                duration: "24 Months",
                image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=800",
                description: "A dynamic workspace for a tech giant, featuring modular breakdown areas and focus pods.",
                challenge: "Balancing open-plan collaboration with the need for deep focus work.",
                solution: "Created acoustic zones using sound-absorbing felt baffles and glass partitions.",
                detailsGallery: [
                    "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1504384308090-c54be3852f92?auto=format&fit=crop&q=80&w=800"
                ],
                sitePhotos: [
                    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400"
                ]
            }
        ]
    },
    residential: {
        title: "Residential",
        subtitle: "Living Spaces",
        description: "Modern living spaces designed for comfort and style. We create homes that are not just structures, but sanctuaries for life's best moments.",
        heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000",
        process: [
            { step: "01", title: "Consultation", desc: "Understanding your lifestyle and needs." },
            { step: "02", title: "Design", desc: "Crafting a blueprint for your dream home." },
            { step: "03", title: "Construction", desc: "Building with precision and care." },
            { step: "04", title: "Handover", desc: "Welcoming you to your new home." }
        ],
        features: [
            { title: "Custom Homes", detail: "Tailored to your unique specifications." },
            { title: "Renovations", detail: "Breathing new life into existing spaces." },
            { title: "Sustainable Living", detail: "Eco-friendly designs for a better future." }
        ],
        gallery: [
            {
                id: "serenity-villa",
                title: "Serenity Villa",
                category: "Residential",
                location: "Bali, Indonesia",
                year: "2023",
                client: "Private Client",
                status: "Completed",
                duration: "16 Months",
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
                description: "A tropical retreat blending indoor and outdoor living with an open-air pavilion design.",
                challenge: "Protecting the structure from tropical monsoons while maintaining an open feel.",
                solution: "Designed extended eaves and retractable glass walls for weather protection.",
                detailsGallery: [
                    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=800"
                ],
                sitePhotos: [
                    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
                ]
            },
            {
                id: "alpine-chalet",
                title: "Alpine Chalet",
                category: "Residential",
                location: "Aspen, CO",
                year: "2024",
                client: "Private Client",
                status: "Key Handover",
                duration: "20 Months",
                image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=800",
                description: "A modern ski chalet using stone and timber to reflect the rugged mountain landscape.",
                challenge: "Ensuring energy efficiency in extreme winter conditions.",
                solution: "Installed geothermal heating and triple-glazed panoramic windows.",
                detailsGallery: [
                    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800"
                ],
                sitePhotos: [
                    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400"
                ]
            },
            {
                id: "urban-loft",
                title: "Urban Loft",
                category: "Residential",
                location: "New York, NY",
                year: "2022",
                client: "Loft Conversions NYC",
                status: "Completed",
                duration: "12 Months",
                image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
                description: "Converting a historic warehouse into a chic, industrial-style family home.",
                challenge: "Preserving original brickwork while updating insulation and electrical systems.",
                solution: "Built internal 'floating' walls to house utilities without touching the historic shell.",
                detailsGallery: [
                    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1600566752355-35792bedcfe1?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80&w=800"
                ],
                sitePhotos: [
                    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
                ]
            }
        ]
    },
    commercial: {
        title: "Commercial",
        subtitle: "Workspaces",
        description: "Functional and aesthetic workspaces that drive productivity. We build environments where businesses thrive and innovation flourishes.",
        heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
        process: [
            { step: "01", title: "Strategy", desc: "Aligning space with business goals." },
            { step: "02", title: "Planning", desc: "Efficient layouts for maximum productivity." },
            { step: "03", title: "Execution", desc: "Delivering on time and on budget." },
            { step: "04", title: "Launch", desc: "Ready for business from day one." }
        ],
        features: [
            { title: "Office Towers", detail: "Iconic landmarks for modern enterprises." },
            { title: "Retail Spaces", detail: "Engaging environments for customer experiences." },
            { title: "Mixed-Use", detail: "Integrating work, life, and play." }
        ],
        gallery: [
            {
                id: "finance-hub",
                title: "Global Finance Hub",
                category: "Commercial",
                location: "Singapore",
                year: "2024",
                client: "Global Finance Corp",
                status: "Completed",
                duration: "32 Months",
                image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=800",
                description: "A state-of-the-art trading floor and office complex designed for high-frequency workflows.",
                challenge: "Accommodating massive data infrastructure without compromising aesthetic appeal.",
                solution: "Utilized raised access flooring and concealed server cooling integrated into the architecture.",
                detailsGallery: [
                    "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1504384308090-c54be3852f92?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800"
                ],
                sitePhotos: [
                    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400"
                ]
            },
            {
                id: "tech-park",
                title: "Innovation Tech Park",
                category: "Commercial",
                location: "Austin, TX",
                year: "2023",
                client: "TechStream Ventures",
                status: "Phase 1 Complete",
                duration: "Ongoing",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
                description: "A campus-style environment fostering creativity with outdoor meeting spaces and walking trails.",
                challenge: "Creating a cohesive feel across multiple distinct buildings.",
                solution: "Connected all structures with a unified canopy walkway and landscape design.",
                detailsGallery: [
                    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=800"
                ],
                sitePhotos: [
                    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
                ]
            },
            {
                id: "creative-studio",
                title: "The Creative Block",
                category: "Commercial",
                location: "London, UK",
                year: "2022",
                client: "Artisan Collective",
                status: "Completed",
                duration: "10 Months",
                image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
                description: "A co-working space for artists and designers, featuring abundant natural light.",
                challenge: "Providing flexible spaces that can adapt to different team sizes.",
                solution: "Installed movable acoustic walls and modular furniture systems.",
                detailsGallery: [
                    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1504384308090-c54be3852f92?auto=format&fit=crop&q=80&w=800"
                ],
                sitePhotos: [
                    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400"
                ]
            }
        ]
    },
    industrial: {
        title: "Industrial",
        subtitle: "Heavy Duty",
        description: "Robust structures engineered for heavy-duty operations. We deliver facilities that support complex logistics and manufacturing processes.",
        heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
        process: [
            { step: "01", title: "Logistics", desc: "Optimizing flow and capacity." },
            { step: "02", title: "Engineering", desc: "Structural integrity for heavy loads." },
            { step: "03", title: "Build", desc: "Rapid construction for faster ROI." },
            { step: "04", title: "Operation", desc: "Systems ready for peak performance." }
        ],
        features: [
            { title: "Warehousing", detail: "High-capacity storage solutions." },
            { title: "Manufacturing", detail: "Precision environments for production." },
            { title: "Distribution", detail: "Hubs that keep supply chains moving." }
        ],
        gallery: [
            {
                id: "logistics-prime",
                title: "Prime Logistics Center",
                category: "Industrial",
                location: "Hamburg, Germany",
                year: "2024",
                client: "Prime Logistics Group",
                status: "Completed",
                duration: "22 Months",
                image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800",
                description: "An automated distribution center processing over 1 million packages daily.",
                challenge: "Designing a floor slab to support heavy robotic automation equipment.",
                solution: "Engineered a fiber-reinforced concrete floor with ultra-high flatness tolerance.",
                detailsGallery: [
                    "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1565514020176-db937be70478?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
                ],
                sitePhotos: [
                    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
                ]
            },
            {
                id: "aero-factory",
                title: "AeroParts Manufacturing",
                category: "Industrial",
                location: "Seattle, WA",
                year: "2023",
                client: "AeroTech Components",
                status: "Operational",
                duration: "28 Months",
                image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kdXN0cmlhbHxlbnwwfHwwfHx8MA%3D%3D",
                description: "A precision manufacturing plant for aerospace components.",
                challenge: "Maintaing strict dust and temperature control in a massive volume space.",
                solution: "Implemented airlock systems and positive pressure ventilation.",
                detailsGallery: [
                    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kdXN0cmlhbHxlbnwwfHwwfHx8MA%3D%3D",
                    "https://images.unsplash.com/photo-1565514020176-db937be70478?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                ],
                sitePhotos: [
                    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
                ]
            },
            {
                id: "energy-plant",
                title: "Green Energy Plant",
                category: "Industrial",
                location: "Nevada, NV",
                year: "2022",
                client: "EcoPowerGen",
                status: "Active",
                duration: "36 Months",
                image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800",
                description: "A solar power processing facility geared towards sustainable energy production.",
                challenge: "Protecting sensitive equipment from desert sand and heat.",
                solution: "Designed aerodynamic shielding and high-efficiency cooling loops.",
                detailsGallery: [
                    "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1565514020176-db937be70478?auto=format&fit=crop&q=80&w=800"
                ],
                sitePhotos: [
                    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
                ]
            }
        ]
    },
    infrastructure: {
        title: "Infrastructure",
        subtitle: "Civil Works",
        description: "Building the backbone of modern cities with precision. From bridges to public spaces, we connect communities.",
        heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000",
        process: [
            { step: "01", title: "Survey", desc: "Detailed land and environmental analysis." },
            { step: "02", title: "Design", desc: "Engineering for durability and safety." },
            { step: "03", title: "Construction", desc: "Executing complex civil works." },
            { step: "04", title: "Maintenance", desc: "Ensuring long-term operational integrity." }
        ],
        features: [
            { title: "Bridges", detail: "Connecting landscapes with engineering marvels." },
            { title: "Roads", detail: "Paving the way for seamless transit." },
            { title: "Public Spaces", detail: "Parks and plazas for community gathering." }
        ],
        gallery: [
            {
                id: "metro-link",
                title: "Metro City Link",
                category: "Infrastructure",
                location: "Paris, France",
                year: "2024",
                client: "City Transport Authority",
                status: "Phase 2 Ongoing",
                duration: "60 Months",
                image: "https://images.unsplash.com/photo-1527335988388-b40ee248d80c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5mcmFzdHJ1Y3R1cmV8ZW58MHx8MHx8fDA%3D",
                description: "An expansion of the metro line including three new underground stations.",
                challenge: "Excavating beneath historic buildings without causing subsidence.",
                solution: "Used ground freezing techniques and real-time laser monitoring.",
                detailsGallery: [
                    "https://images.unsplash.com/photo-1527335988388-b40ee248d80c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5mcmFzdHJ1Y3R1cmV8ZW58MHx8MHx8fDA%3D",
                    "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
                ],
                sitePhotos: [
                    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
                ]
            },
            {
                id: "river-walk",
                title: "Riverfront Promenade",
                category: "Public",
                location: "Chicago, IL",
                year: "2023",
                client: "City Parks Dept",
                status: "Renovation Complete",
                duration: "24 Months",
                image: "https://images.unsplash.com/photo-1536408525595-8a6c1d3d71ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZnJhc3RydWN0dXJlfGVufDB8fDB8fHww",
                description: "Revitalizing the river bank into a vibrant public park and walking trail.",
                challenge: "Managing flood risks while keeping the river accessible to pedestrians.",
                solution: "Designed a terraced landscape that can safely submerge during high water levels.",
                detailsGallery: [
                    "https://images.unsplash.com/photo-1536408525595-8a6c1d3d71ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGluZnJhc3RydWN0dXJlfGVufDB8fDB8fHww",
                    "https://images.unsplash.com/photo-1513828583688-c29a7f557074?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1550948537-130a1ce83314?auto=format&fit=crop&q=80&w=800"
                ],
                sitePhotos: [
                    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
                ]
            },
            {
                id: "wind-farm",
                title: "Offshore Wind Farm",
                category: "Energy",
                location: "North Sea",
                year: "2022",
                client: "EcoEnergy EU",
                status: "Operational",
                duration: "6 Years",
                image: "https://images.unsplash.com/photo-1721595279388-085728677a50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZnJhc3RydWN0dXJlfGVufDB8fDB8fHww",
                description: "A massive renewable energy project powering over 500,000 homes.",
                challenge: "Installing turbines in deep, rough waters.",
                solution: "Utilized specialized jack-up vessels and floating gravity-based foundations.",
                detailsGallery: [
                    "https://images.unsplash.com/photo-1721595279388-085728677a50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGluZnJhc3RydWN0dXJlfGVufDB8fDB8fHww",
                    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800",
                    "https://images.unsplash.com/photo-1460317442991-0ec2aa72af41?auto=format&fit=crop&q=80&w=800"
                ],
                sitePhotos: [
                    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1590674899505-1c5c41951f89?auto=format&fit=crop&q=80&w=400",
                    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
                ]
            }
        ]
    }
};
