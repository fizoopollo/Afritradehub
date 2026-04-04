export type ServicesTemplate = {
  slug: string;
  name: string;
  image: string;
  price: string;
  rating: string;
  tag: string;
  gradient: string;
  accent: string;
  tagline: string;
  description: string;
  services: { name: string; desc: string; price: string }[];
  testimonials: { name: string; text: string }[];
  stats: { value: string; label: string }[];
};

export const servicesTemplates: ServicesTemplate[] = [
  {
    slug: "genius",
    name: "Genius",
    image: "/assets/services/genius.jpg",
    price: "$350",
    rating: "97%",
    tag: "NEW",
    gradient: "linear-gradient(135deg, #ffd89b 0%, #19547b 50%, #ffd89b 100%)",
    accent: "blue",
    tagline: "Tech Support Excellence",
    description: "Premium tech support and IT services for businesses and individuals seeking genius-level solutions.",
    services: [
      { name: "24/7 Tech Support", desc: "Round-the-clock technical assistance via phone and chat.", price: "From $99/mo" },
      { name: "System Setup & Config", desc: "Complete system setup, network configuration, and optimization.", price: "From $199" },
      { name: "Security & Backup", desc: "Data backup solutions and cybersecurity implementation.", price: "From $149/mo" },
      { name: "Remote Troubleshooting", desc: "Fast remote diagnostics and problem resolution.", price: "From $79" },
    ],
    testimonials: [
      { name: "Tech Manager T.", text: "Saved us thousands in IT department costs." },
      { name: "Business Owner B.", text: "Genius-level support that actually understands tech." },
    ],
    stats: [
      { value: "5K+", label: "Clients Served" },
      { value: "97%", label: "Satisfaction" },
    ],
  },
  {
    slug: "noteable",
    name: "Noteable",
    image: "/assets/services/noteable.jpg",
    price: "$370",
    rating: "96%",
    tag: "",
    gradient: "linear-gradient(135deg, #ece2f0 0%, #c5cae9 50%, #3f51b5 100%)",
    accent: "indigo",
    tagline: "Exceptional Management Services",
    description: "Premium business management and consulting services for growing companies.",
    services: [
      { name: "Strategic Planning", desc: "Comprehensive business strategy and growth planning.", price: "From $2000/mo" },
      { name: "Operations Management", desc: "Streamlined operations and process optimization.", price: "From $1500/mo" },
      { name: "Financial Consulting", desc: "Budget planning and financial optimization guidance.", price: "From $1200/mo" },
      { name: "Team Development", desc: "HR consulting and team building programs.", price: "From $1000/mo" },
    ],
    testimonials: [
      { name: "CEO C.", text: "Transformed our entire business operations." },
      { name: "Manager M.", text: "Exceptional strategic guidance and support." },
    ],
    stats: [
      { value: "800+", label: "Companies Served" },
      { value: "96%", label: "Satisfaction" },
    ],
  },
  {
    slug: "tattoo",
    name: "Tattoo",
    image: "/assets/services/tattoo.jpg",
    price: "$340",
    rating: "95%",
    tag: "",
    gradient: "linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 50%, #ff6b6b 100%)",
    accent: "red",
    tagline: "Ink & Body Art",
    description: "Professional tattoo studio offering custom designs, professional artists, and safe practices.",
    services: [
      { name: "Custom Tattoo Design", desc: "Unique custom tattoo designs tailored to you.", price: "From $150" },
      { name: "Cover-Up Tattoos", desc: "Professional cover-up of old or unwanted tattoos.", price: "From $200" },
      { name: "Piercing Services", desc: "Professional body piercing with sterile equipment.", price: "From $40" },
      { name: "Tattoo Removal", desc: "Laser tattoo removal sessions available.", price: "From $250/session" },
    ],
    testimonials: [
      { name: "Ink Lover L.", text: "Amazing artists and clean, professional shop." },
      { name: "Tattoo Collector T.", text: "Best tattoo shop in the city. Worth the wait." },
    ],
    stats: [
      { value: "3K+", label: "Tattoos Created" },
      { value: "95%", label: "Satisfaction" },
    ],
  },
  {
    slug: "smile",
    name: "Smile",
    image: "/assets/services/smile.jpg",
    price: "$380",
    rating: "98%",
    tag: "PREMIUM",
    gradient: "linear-gradient(135deg, #fff9e6 0%, #fff59d 50%, #fbc02d 100%)",
    accent: "yellow",
    tagline: "Dental Excellence",
    description: "Premium dental practice offering comprehensive oral care and cosmetic dentistry services.",
    services: [
      { name: "General Dentistry", desc: "Checkups, cleanings, and cavity treatment.", price: "From $85" },
      { name: "Cosmetic Dentistry", desc: "Teeth whitening, veneers, and smile redesign.", price: "From $500" },
      { name: "Orthodontics", desc: "Braces, aligners, and teeth straightening.", price: "From $3000" },
      { name: "Implants & Restoration", desc: "Dental implants and restorative procedures.", price: "From $1500" },
    ],
    testimonials: [
      { name: "Happy Patient H.", text: "My smile has never looked better. Highly recommended." },
      { name: "Grateful Client G.", text: "Professional, gentle, and amazing results." },
    ],
    stats: [
      { value: "8K+", label: "Smiles Transformed" },
      { value: "98%", label: "Satisfaction" },
    ],
  },
  {
    slug: "aircon",
    name: "Aircon",
    image: "/assets/services/aircon.jpg",
    price: "$330",
    rating: "94%",
    tag: "",
    gradient: "linear-gradient(135deg, #b3e5fc 0%, #4fc3f7 50%, #0288d1 100%)",
    accent: "blue",
    tagline: "Climate Control Solutions",
    description: "HVAC and air conditioning services for residential and commercial properties.",
    services: [
      { name: "AC Installation", desc: "Professional air conditioning system installation.", price: "From $1500" },
      { name: "Maintenance Plans", desc: "Regular maintenance to keep systems running smoothly.", price: "From $150/visit" },
      { name: "Emergency Repair", desc: "24/7 emergency repair service for broken systems.", price: "From $200" },
      { name: "Energy Efficiency Upgrades", desc: "Upgrade to energy-efficient HVAC systems.", price: "From $3000" },
    ],
    testimonials: [
      { name: "Homeowner H.", text: "Reliable, professional, fair pricing." },
      { name: "Business Owner B.", text: "Keeps our systems running perfectly year-round." },
    ],
    stats: [
      { value: "6K+", label: "Systems Serviced" },
      { value: "94%", label: "Satisfaction" },
    ],
  },
  {
    slug: "sonik",
    name: "Sonik",
    image: "/assets/services/sonik.jpg",
    price: "$390",
    rating: "97%",
    tag: "NEW",
    gradient: "linear-gradient(135deg, #c0ca33 0%, #9ccc65 50%, #558b2f 100%)",
    accent: "green",
    tagline: "Audio & Sound Systems",
    description: "Professional audio installation, sound system design, and acoustic solutions.",
    services: [
      { name: "Home Audio Installation", desc: "Custom home theater and audio system setup.", price: "From $2000" },
      { name: "Studio Acoustics", desc: "Professional studio acoustics and soundproofing.", price: "From $3000" },
      { name: "Event Sound Systems", desc: "Sound system rental and setup for events.", price: "From $500" },
      { name: "Speaker & Equipment Sales", desc: "Premium audio equipment and speaker sales.", price: "Contact for pricing" },
    ],
    testimonials: [
      { name: "Audiophile A.", text: "Transformed the sound quality of my entire home." },
      { name: "Studio Engineer S.", text: "Professional-grade acoustics at great value." },
    ],
    stats: [
      { value: "2K+", label: "Installations" },
      { value: "97%", label: "Satisfaction" },
    ],
  },
  {
    slug: "printing",
    name: "Printing",
    image: "/assets/services/printing.jpg",
    price: "$350",
    rating: "95%",
    tag: "",
    gradient: "linear-gradient(135deg, #f4e4c1 0%, #e85d04 50%, #bb3e03 100%)",
    accent: "orange",
    tagline: "Print & Design Solutions",
    description: "Full-service printing and graphic design for businesses, events, and personal projects.",
    services: [
      { name: "Business Cards & Stationery", desc: "Custom printed cards, letterheads, and envelopes.", price: "From $50" },
      { name: "Large Format Printing", desc: "Banners, posters, and signage printing.", price: "From $75" },
      { name: "Graphic Design", desc: "Professional design services for all print projects.", price: "From $300" },
      { name: "Packaging Design & Printing", desc: "Custom packaging solutions for products.", price: "From $500" },
    ],
    testimonials: [
      { name: "Business Manager B.", text: "Quality prints at reasonable prices." },
      { name: "Marketing Agent M.", text: "Creative designs and fast turnaround." },
    ],
    stats: [
      { value: "15K+", label: "Projects Completed" },
      { value: "95%", label: "Satisfaction" },
    ],
  },
  {
    slug: "workflow",
    name: "Workflow",
    image: "/assets/services/workflow.jpg",
    price: "$360",
    rating: "96%",
    tag: "NEW",
    gradient: "linear-gradient(135deg, #e3f2fd 0%, #64b5f6 50%, #1565c0 100%)",
    accent: "blue",
    tagline: "Business Process Automation",
    description: "Workflow automation and business process optimization services for enhanced efficiency.",
    services: [
      { name: "Process Automation", desc: "Automate repetitive business processes.", price: "From $1500" },
      { name: "System Integration", desc: "Connect and integrate your business systems.", price: "From $2000" },
      { name: "Custom Workflows", desc: "Bespoke workflow solutions for unique needs.", price: "From $3000" },
      { name: "Staff Training", desc: "Comprehensive training on new automated systems.", price: "From $500" },
    ],
    testimonials: [
      { name: "Operations Director O.", text: "Cut our processing time in half." },
      { name: "Efficiency Expert E.", text: "Streamlined our entire workflow. Highly professional." },
    ],
    stats: [
      { value: "400+", label: "Processes Automated" },
      { value: "96%", label: "Satisfaction" },
    ],
  },
  {
    slug: "grain",
    name: "Grain",
    image: "/assets/services/grain.jpg",
    price: "$320",
    rating: "93%",
    tag: "",
    gradient: "linear-gradient(135deg, #d7ccc8 0%, #a1887f 50%, #6d4c41 100%)",
    accent: "brown",
    tagline: "Farming & Agricultural Services",
    description: "Agricultural consulting, crop management, and sustainable farming solutions.",
    services: [
      { name: "Crop Consulting", desc: "Expert advice on crop selection and management.", price: "From $200/mo" },
      { name: "Soil Analysis", desc: "Comprehensive soil testing and recommendations.", price: "From $300" },
      { name: "Sustainable Farming", desc: "Organic and sustainable farming practices.", price: "From $1000/mo" },
      { name: "Equipment Rental", desc: "Farm equipment rental and maintenance.", price: "From $100/day" },
    ],
    testimonials: [
      { name: "Farmer Fred", text: "Increased yields significantly with their guidance." },
      { name: "Agricultural Manager A.", text: "Knowledgeable, reliable, committed to sustainability." },
    ],
    stats: [
      { value: "500+", label: "Farms Served" },
      { value: "93%", label: "Satisfaction" },
    ],
  },
  {
    slug: "leap",
    name: "Leap",
    image: "/assets/services/leap.jpg",
    price: "$370",
    rating: "96%",
    tag: "PREMIUM",
    gradient: "linear-gradient(135deg, #fce4ec 0%, #f8bbd0 50%, #ec407a 100%)",
    accent: "pink",
    tagline: "Career & Personal Growth",
    description: "Professional coaching and career development services for career advancement.",
    services: [
      { name: "Career Coaching", desc: "One-on-one coaching for career transitions.", price: "From $150/session" },
      { name: "Resume & Interview Prep", desc: "Professional resume writing and interview coaching.", price: "From $300" },
      { name: "Leadership Development", desc: "Executive coaching and leadership training.", price: "From $500/session" },
      { name: "Skill Building Workshops", desc: "Group workshops for professional development.", price: "From $500/group" },
    ],
    testimonials: [
      { name: "Success Story S.", text: "Helped me land my dream job in tech." },
      { name: "Career Changer C.", text: "Guiding me to greater success and fulfillment." },
    ],
    stats: [
      { value: "1.2K+", label: "Careers Transformed" },
      { value: "96%", label: "Satisfaction" },
    ],
  },
  {
    slug: "panorama",
    name: "Panorama",
    image: "/assets/services/panorama.jpg",
    price: "$400",
    rating: "97%",
    tag: "NEW",
    gradient: "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 50%, #ff9800 100%)",
    accent: "orange",
    tagline: "Photography & Videography",
    description: "Professional photography and videography services for events, products, and storytelling.",
    services: [
      { name: "Event Photography", desc: "Professional coverage of weddings and events.", price: "From $1200" },
      { name: "Product Photography", desc: "High-quality product photos for e-commerce.", price: "From $300" },
      { name: "Video Production", desc: "Professional video production and editing.", price: "From $2000" },
      { name: "Drone Photography", desc: "Aerial drone photography and videography.", price: "From $500" },
    ],
    testimonials: [
      { name: "Bride B.", text: "Captured our special day perfectly and beautifully." },
      { name: "Business Owner B.", text: "Professional videos boosted our sales dramatically." },
    ],
    stats: [
      { value: "2.5K+", label: "Events Covered" },
      { value: "97%", label: "Satisfaction" },
    ],
  },
  {
    slug: "enthusiast",
    name: "Enthusiast",
    image: "/assets/services/enthusiast.jpg",
    price: "$340",
    rating: "94%",
    tag: "",
    gradient: "linear-gradient(135deg, #e8f5e9 0%, #81c784 50%, #2e7d32 100%)",
    accent: "green",
    tagline: "Hobby & Passion Services",
    description: "Services and resources for hobbyists, collectors, and enthusiasts of all kinds.",
    services: [
      { name: "Expert Consulting", desc: "Expert advice on your hobby or collection.", price: "From $100/hour" },
      { name: "Equipment Sales", desc: "Quality equipment and supplies for your hobby.", price: "Contact for pricing" },
      { name: "Repair & Restoration", desc: "Professional repair and restoration services.", price: "From $150" },
      { name: "Community Events", desc: "Events and meetups for enthusiasts.", price: "Free to $50/event" },
    ],
    testimonials: [
      { name: "Collector C.", text: "Found my tribe and expert guidance here." },
      { name: "Hobbyist H.", text: "Best place for everything I need for my passion." },
    ],
    stats: [
      { value: "3K+", label: "Active Enthusiasts" },
      { value: "94%", label: "Satisfaction" },
    ],
  },
];

export function getServicesTemplateBySlug(slug: string): ServicesTemplate | undefined {
  return servicesTemplates.find((t) => t.slug === slug);
}
