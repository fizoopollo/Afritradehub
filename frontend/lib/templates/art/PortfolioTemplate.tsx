import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight, Search, ShoppingBag, User, Moon, Star, Truck, RotateCcw, Shield } from "lucide-react";
import UseTemplateButton from "@/components/UseTemplateButton";

const heroImg = "/assets/portfolio/hero.jpg";
const art1 = "/assets/portfolio/art1.jpg";
const art2 = "/assets/portfolio/art2.jpg";
const art3 = "/assets/portfolio/art3.jpg";
const art4 = "/assets/portfolio/art4.jpg";
const art5 = "/assets/portfolio/art5.jpg";
const art6 = "/assets/portfolio/art6.jpg";
const artistImg = "/assets/portfolio/artist.jpg";

const BG = "#f8f5f0";
const DARK = "#1a1a1a";
const MUTED = "#8a8580";
const ACCENT = "#8b4513";

const collections = [
  {
    name: "Abstract Allure",
    items: [
      { image: art1, title: "Blue Reverie", price: "$480", artist: "Clara Duval" },
      { image: art4, title: "Horizon Glow", price: "$620", artist: "Marco Bellini" },
      { image: art6, title: "Orbital Forms", price: "$750", artist: "Yuki Sato" },
    ],
  },
  {
    name: "Monochromatic Mystique",
    items: [
      { image: art2, title: "Dark Convergence", price: "$890", artist: "James Holder" },
      { image: art5, title: "Fern Study", price: "$320", artist: "Lena Voss" },
      { image: art4, title: "Desert Light", price: "$540", artist: "Ama Owusu" },
    ],
  },
  {
    name: "Figurative Narratives",
    items: [
      { image: art3, title: "Blue Dress", price: "$1,200", artist: "Sofia Laurent" },
      { image: art1, title: "Wave Form", price: "$580", artist: "Kai Chen" },
      { image: art6, title: "Intersection", price: "$690", artist: "Ines Moreau" },
    ],
  },
];

const allProducts = [
  { image: art1, title: "Blue Reverie", price: "$480", comparePrice: "", badge: "", artist: "Clara Duval" },
  { image: art2, title: "Dark Convergence", price: "$890", comparePrice: "$1,100", badge: "Sale", artist: "James Holder" },
  { image: art3, title: "Blue Dress", price: "$1,200", comparePrice: "", badge: "New", artist: "Sofia Laurent" },
  { image: art4, title: "Horizon Glow", price: "$620", comparePrice: "", badge: "", artist: "Marco Bellini" },
  { image: art5, title: "Fern Study", price: "$320", comparePrice: "$400", badge: "Sale", artist: "Lena Voss" },
  { image: art6, title: "Orbital Forms", price: "$750", comparePrice: "", badge: "New", artist: "Yuki Sato" },
];

const heroSlides = [
  {
    title: "Explore. Dream.\nDiscover Art in Every Form",
    subtitle: "Experience a world of creativity at your fingertips, with our curated collection of unique art pieces designed to inspire, enchant, and stir the soul.",
  },
  {
    title: "Curate Your Space.\nLive with Art.",
    subtitle: "From bold abstracts to serene botanicals — find the perfect piece that speaks to your aesthetic and transforms your environment.",
  },
];

export default function PortfolioTemplate() {
  const [activeTab, setActiveTab] = useState(0);
  const [heroSlide, setHeroSlide] = useState(0);

  return (
    <div className="min-h-screen" style={{ backgroundColor: BG, color: DARK }}>
      <UseTemplateButton templateName="Portfolio" />

      {/* Announcement Bar */}
      <div className="text-center py-2.5 text-xs tracking-wide" style={{ backgroundColor: DARK, color: BG }}>
        Midseason Sale: 20% Off — Auto Applied at Checkout — Limited Time Only
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 border-b backdrop-blur-xl" style={{ backgroundColor: `${BG}ee`, borderColor: `${DARK}10` }}>
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-sm font-bold tracking-[0.25em] uppercase">PORTFOLIO</span>
            <div className="hidden md:flex items-center gap-6 text-sm" style={{ color: MUTED }}>
              {["Starter Sites", "Shop", "Sale", "Collections", "Features"].map((item) => (
                <button key={item} className="hover:text-black transition-colors">{item}</button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-6 text-sm" style={{ color: MUTED }}>
              {["About", "Stories", "Artists"].map((item) => (
                <button key={item} className="hover:text-black transition-colors">{item}</button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button className="text-xs border px-2 py-1 rounded" style={{ borderColor: `${DARK}20`, color: MUTED }}>CAD $</button>
              <button className="text-xs border px-2 py-1 rounded" style={{ borderColor: `${DARK}20`, color: MUTED }}>EN</button>
              <button className="hover:opacity-60 transition-opacity"><Moon className="h-4 w-4" /></button>
              <button className="hover:opacity-60 transition-opacity"><Search className="h-4 w-4" /></button>
              <button className="hover:opacity-60 transition-opacity"><User className="h-4 w-4" /></button>
              <button className="relative hover:opacity-60 transition-opacity">
                <ShoppingBag className="h-4 w-4" />
                <span className="absolute -top-1 -right-1.5 text-[9px] font-bold" style={{ color: ACCENT }}>0</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero — Split Layout */}
      <section className="grid lg:grid-cols-2 min-h-[70vh]">
        <div className="flex items-center px-8 md:px-16 py-16">
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={heroSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-medium leading-tight tracking-tight whitespace-pre-line mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                  {heroSlides[heroSlide].title}
                </h1>
                <p className="text-sm leading-relaxed mb-8 max-w-md" style={{ color: MUTED }}>
                  {heroSlides[heroSlide].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>
            <button
              className="px-8 py-3 text-xs font-medium tracking-wider uppercase rounded-sm"
              style={{ backgroundColor: DARK, color: BG }}
            >
              Shop All
            </button>
            <div className="flex items-center gap-3 mt-10">
              <div className="flex gap-1.5">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroSlide(i)}
                    className="w-2 h-2 rounded-full transition-all"
                    style={{ backgroundColor: i === heroSlide ? DARK : `${DARK}25` }}
                  />
                ))}
              </div>
              <button onClick={() => setHeroSlide((p) => (p - 1 + heroSlides.length) % heroSlides.length)} className="hover:opacity-60 transition-opacity">
                <ChevronLeft className="h-4 w-4" style={{ color: MUTED }} />
              </button>
              <button onClick={() => setHeroSlide((p) => (p + 1) % heroSlides.length)} className="hover:opacity-60 transition-opacity">
                <ChevronRight className="h-4 w-4" style={{ color: MUTED }} />
              </button>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <img src={heroImg} alt="Art interior" className="w-full h-full object-cover min-h-[400px]" />
        </div>
      </section>

      {/* Collection Tabs */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-8 mb-12 border-b overflow-x-auto" style={{ borderColor: `${DARK}15` }}>
            {collections.map((col, i) => (
              <button
                key={col.name}
                onClick={() => setActiveTab(i)}
                className="pb-3 text-lg md:text-xl whitespace-nowrap transition-all relative"
                style={{
                  fontFamily: "'Georgia', serif",
                  color: i === activeTab ? DARK : `${DARK}35`,
                }}
              >
                {col.name}
                {i === activeTab && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: DARK }}
                  />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {collections[activeTab].items.map((item, i) => (
                <div key={item.title} className="group cursor-pointer">
                  <div className="aspect-square overflow-hidden rounded-sm mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-sm font-medium">{item.title}</h3>
                  <p className="text-xs mt-0.5" style={{ color: MUTED }}>{item.artist}</p>
                  <p className="text-sm font-medium mt-1">{item.price}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-20 px-6" style={{ backgroundColor: `${DARK}05` }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl tracking-tight" style={{ fontFamily: "'Georgia', serif" }}>Shop All Art</h2>
            <button className="text-xs tracking-wider uppercase underline underline-offset-4 hover:opacity-60 transition-opacity" style={{ color: MUTED }}>
              View All
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {allProducts.map((product, i) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden rounded-sm mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {product.badge && (
                    <span
                      className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider rounded-sm"
                      style={{
                        backgroundColor: product.badge === "Sale" ? ACCENT : DARK,
                        color: BG,
                      }}
                    >
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-full py-2.5 text-xs font-medium tracking-wider uppercase rounded-sm" style={{ backgroundColor: DARK, color: BG }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
                <h3 className="text-sm font-medium">{product.title}</h3>
                <p className="text-xs mt-0.5" style={{ color: MUTED }}>{product.artist}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-medium">{product.price}</span>
                  {product.comparePrice && (
                    <span className="text-xs line-through" style={{ color: MUTED }}>{product.comparePrice}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Spotlight */}
      <section className="grid lg:grid-cols-2">
        <div className="overflow-hidden">
          <img src={artistImg} alt="Artist in studio" className="w-full h-full object-cover min-h-[400px]" />
        </div>
        <div className="flex items-center px-8 md:px-16 py-16" style={{ backgroundColor: BG }}>
          <div>
            <span className="text-xs tracking-[0.2em] uppercase mb-4 block" style={{ color: ACCENT }}>Featured Artist</span>
            <h2 className="text-3xl md:text-4xl tracking-tight leading-tight mb-6" style={{ fontFamily: "'Georgia', serif" }}>
              Meet Clara Duval
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED }}>
              Clara's work explores the intersection of colour, movement, and emotion. 
              Her abstract compositions are inspired by the rhythms of the natural world 
              and the quiet beauty of everyday moments.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: MUTED }}>
              Based in Lyon, France, Clara has exhibited internationally and her work 
              is held in private collections across Europe and North America.
            </p>
            <button
              className="px-6 py-3 text-xs font-medium tracking-wider uppercase border rounded-sm hover:bg-black hover:text-white transition-all"
              style={{ borderColor: DARK }}
            >
              View Collection
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl tracking-tight mb-14" style={{ fontFamily: "'Georgia', serif" }}>
            What Our Collectors Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Isabelle M.", text: "The quality and curation is unlike anything I've seen. Each piece arrives gallery-ready.", rating: 5 },
              { name: "Thomas R.", text: "Portfolio has transformed how I collect art. The online experience is seamless and personal.", rating: 5 },
              { name: "Eloise K.", text: "I've purchased three pieces so far, and each one brings something unique to our home.", rating: 5 },
            ].map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center gap-0.5 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5" style={{ fill: ACCENT, color: ACCENT }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-4 italic" style={{ color: MUTED }}>
                  "{review.text}"
                </p>
                <p className="text-xs font-medium tracking-wider uppercase">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-12 px-6 border-y" style={{ borderColor: `${DARK}10` }}>
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { icon: Truck, label: "Free Shipping", desc: "On orders over $200" },
            { icon: Shield, label: "Secure Checkout", desc: "SSL encrypted" },
            { icon: RotateCcw, label: "Easy Returns", desc: "30-day policy" },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label}>
              <Icon className="h-5 w-5 mx-auto mb-2" style={{ color: ACCENT }} />
              <p className="text-xs font-medium tracking-wider uppercase mb-0.5">{label}</p>
              <p className="text-[11px]" style={{ color: MUTED }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 text-center" style={{ backgroundColor: DARK }}>
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl md:text-3xl tracking-tight mb-4" style={{ fontFamily: "'Georgia', serif", color: BG }}>
            Stay Inspired
          </h2>
          <p className="text-sm mb-8" style={{ color: `${BG}70` }}>
            Subscribe for new arrivals, artist stories, and exclusive offers.
          </p>
          <div className="flex gap-0">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 text-sm border-0 outline-none rounded-l-sm"
              style={{ backgroundColor: `${BG}12`, color: BG }}
            />
            <button
              className="px-6 py-3 text-xs font-medium tracking-wider uppercase rounded-r-sm"
              style={{ backgroundColor: ACCENT, color: BG }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t" style={{ backgroundColor: BG, borderColor: `${DARK}10` }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            <div>
              <h4 className="text-xs font-medium tracking-[0.15em] uppercase mb-4">Shop</h4>
              <div className="space-y-2">
                {["All Art", "Abstract", "Figurative", "Botanical", "Photography"].map((item) => (
                  <p key={item} className="text-xs cursor-pointer hover:opacity-60 transition-opacity" style={{ color: MUTED }}>{item}</p>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-medium tracking-[0.15em] uppercase mb-4">About</h4>
              <div className="space-y-2">
                {["Our Story", "Artists", "Blog", "Press", "Careers"].map((item) => (
                  <p key={item} className="text-xs cursor-pointer hover:opacity-60 transition-opacity" style={{ color: MUTED }}>{item}</p>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-medium tracking-[0.15em] uppercase mb-4">Help</h4>
              <div className="space-y-2">
                {["FAQ", "Shipping", "Returns", "Contact Us", "Size Guide"].map((item) => (
                  <p key={item} className="text-xs cursor-pointer hover:opacity-60 transition-opacity" style={{ color: MUTED }}>{item}</p>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-medium tracking-[0.15em] uppercase mb-4">Follow</h4>
              <div className="space-y-2">
                {["Instagram", "Pinterest", "Twitter", "Facebook"].map((item) => (
                  <p key={item} className="text-xs cursor-pointer hover:opacity-60 transition-opacity" style={{ color: MUTED }}>{item}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t" style={{ borderColor: `${DARK}10` }}>
            <span className="text-sm font-bold tracking-[0.25em] uppercase">PORTFOLIO</span>
            <p className="text-[11px] mt-2 md:mt-0" style={{ color: MUTED }}>© 2026 Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Templates */}
      <section className="py-8 text-center" style={{ backgroundColor: `${DARK}05` }}>
        <Link href="/afrify/templates-store">
          <Button variant="ghost"><ArrowLeft className="h-4 w-4" /> Back to Templates</Button>
        </Link>
      </section>
    </div>
  );
}








