import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/terra-hero.jpg";
import hearthImage from "@/assets/terra-hearth.jpg";
import clayImage from "@/assets/terra-clay.jpg";
import cupImage from "@/assets/product-cup.jpg";
import throwImage from "@/assets/product-throw.jpg";
import bowlImage from "@/assets/product-bowl.jpg";
import matsImage from "@/assets/product-mats.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Terra & Stone — Organic Home Objects" },
      { name: "description", content: "Curated stoneware, woven textiles and reclaimed timber objects made slowly for considered homes." },
      { property: "og:title", content: "Terra & Stone — Organic Home Objects" },
      { property: "og:description", content: "Curated natural objects shaped by earth, fire and hand." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const materials = ["Raku-fired clay", "Hand-woven wool", "Reclaimed oak", "Waxed linen", "Raw brass", "River stone"];
const products = [
  { name: "Cup — Raku", material: "Stoneware", price: "$38", image: cupImage, alt: "Black raku ceramic cup" },
  { name: "Throw — Loom", material: "Wool", price: "$120", image: throwImage, alt: "Ochre and ivory woven wool throw" },
  { name: "Bowl — Turned", material: "Reclaimed oak", price: "$74", image: bowlImage, alt: "Hand-turned reclaimed oak bowl" },
  { name: "Mats — Waxed", material: "Linen, set of 2", price: "$56", image: matsImage, alt: "Clay and ivory waxed linen placemats" },
];

function Index() {
  return (
    <main className="overflow-hidden bg-background">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-primary-foreground/20 text-primary-foreground">
        <div className="flex items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#top" className="font-serif text-2xl leading-none">Terra &amp; Stone</a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-8 text-xs uppercase md:flex">
            <a href="#collection" className="transition-opacity hover:opacity-60">Collection</a>
            <a href="#materials" className="transition-opacity hover:opacity-60">Materials</a>
            <a href="#edit" className="transition-opacity hover:opacity-60">The edit</a>
          </nav>
          <a href="#edit" className="border-b border-primary-foreground/60 pb-1 text-xs uppercase">Bag · 0</a>
        </div>
      </header>

      <section id="top" className="relative min-h-[94svh] bg-primary text-primary-foreground">
        <img src={heroImage} width={1200} height={1408} alt="Massive oak table with a cast iron pan and rustic wooden spoon, thick weathered chopping board and a stoneware jug of colourful flowers, with a boulder-stone fireplace burning logs set far back across the flagstone floor" className="absolute inset-0 h-full w-full object-cover image-rise" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/35 to-transparent" />
        <div className="relative z-10 flex min-h-[94svh] flex-col justify-end px-5 pb-14 pt-28 sm:px-8 lg:px-12 lg:pb-20">
          <p className="mb-5 text-xs uppercase text-accent">Issue 04 · The Kiln Room</p>
          <h1 className="max-w-4xl font-serif text-6xl leading-[0.88] sm:text-7xl lg:text-9xl">Objects shaped<br /><em className="text-secondary">by earth &amp; fire.</em></h1>
          <div className="mt-8 flex max-w-3xl flex-col gap-6 border-t border-primary-foreground/30 pt-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">A quiet collection of vessels and surfaces, each fired, turned, or hand-stitched from traceable material. No two leave the studio the same.</p>
            <a href="#collection" className="shrink-0 bg-background px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-accent">Enter the collection</a>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-primary/10 bg-background py-4">
        <div className="material-marquee flex w-max whitespace-nowrap">
          {[...materials, ...materials].map((material, index) => <span key={`${material}-${index}`} className={`px-8 font-serif text-2xl ${index % 3 === 1 ? "text-secondary" : index % 3 === 2 ? "text-accent-foreground" : "text-primary/70"}`}>{material} <i className="ml-8 text-primary/20">◆</i></span>)}
        </div>
      </div>

      <section id="collection" className="bg-background">
        <div className="grid min-h-[86svh] lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col justify-between px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
            <span className="font-serif text-8xl text-primary/10">01</span>
            <div>
              <p className="text-xs uppercase text-secondary">The collection</p>
              <h2 className="mt-4 font-serif text-6xl leading-[0.9] text-primary sm:text-7xl">The Hearth<br />Series</h2>
              <p className="mt-7 max-w-md leading-relaxed text-primary/70">Low-glazed earthenware and turned hardwood, made to hold the everyday. Built for the morning table and the last light of evening.</p>
            </div>
            <p className="mt-12 text-xs uppercase text-primary/50">14 pieces · batch of 30</p>
          </div>
          <img src={hearthImage} width={1920} height={768} loading="lazy" alt="Oak dining table set with natural ceramics and linen" className="h-full min-h-[55svh] w-full object-cover" />
        </div>
      </section>

      <section id="materials" className="grid min-h-[86svh] bg-primary text-primary-foreground lg:grid-cols-2">
        <img src={clayImage} width={912} height={1200} loading="lazy" alt="Close detail of hand-marked raku clay" className="h-full max-h-[86svh] min-h-[55svh] w-full object-cover" />
        <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-16">
          <p className="text-xs uppercase text-accent">Material story · 02</p>
          <h2 className="mt-6 max-w-xl font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">Raku clay, reduced in open flame.</h2>
          <p className="mt-7 max-w-xl leading-relaxed text-primary-foreground/70">Pulled from a single source in the valley, our stoneware is fired at 1,240°C, then returned to the kiln. The metallic sheen is unrepeatable — a fingerprint of heat and ash.</p>
          <dl className="mt-10 grid grid-cols-3 border-y border-primary-foreground/20 py-6">
            <div><dt className="text-[10px] uppercase text-primary-foreground/50">Origin</dt><dd className="mt-2 font-serif text-xl">Valley clay</dd></div>
            <div><dt className="text-[10px] uppercase text-primary-foreground/50">Fire</dt><dd className="mt-2 font-serif text-xl">1,240°C</dd></div>
            <div><dt className="text-[10px] uppercase text-primary-foreground/50">Run</dt><dd className="mt-2 font-serif text-xl">30 pieces</dd></div>
          </dl>
        </div>
      </section>

      <section id="edit" className="bg-background px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="flex items-end justify-between border-b border-primary/20 pb-6">
          <div><p className="text-xs uppercase text-secondary">Objects for the everyday · 03</p><h2 className="mt-3 font-serif text-5xl text-primary sm:text-6xl">The small edit</h2></div>
          <span className="hidden text-sm text-primary/50 sm:block">Four pieces, chosen this season</span>
        </div>
        <div className="mt-10 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <article key={product.name} className={index % 2 ? "lg:mt-16" : ""}>
              <div className="overflow-hidden bg-muted"><img src={product.image} width={800} height={1008} loading="lazy" alt={product.alt} className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.025]" /></div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div><h3 className="font-serif text-2xl text-primary">{product.name}</h3><p className="mt-1 text-[11px] uppercase text-primary/50">{product.material}</p></div>
                <p className="text-sm text-primary">{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="bg-primary px-5 py-14 text-primary-foreground sm:px-8 lg:px-12">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div><p className="font-serif text-5xl">Terra &amp; Stone</p><p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/60">Made slowly in small batches. Where nature sets the pace, so do we.</p></div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-7 text-xs uppercase text-primary-foreground/60"><a href="#collection">Collection</a><a href="#materials">Materials</a><a href="#edit">Objects</a><a href="mailto:studio@terraandstone.example">Contact</a></nav>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-primary-foreground/15 pt-5 text-[10px] uppercase text-primary-foreground/40 sm:flex-row"><span>© 2026 Terra &amp; Stone Studio</span><span>Issue 04 · The Kiln Room</span></div>
      </footer>
    </main>
  );
}