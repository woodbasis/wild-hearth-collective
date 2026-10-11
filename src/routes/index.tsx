import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-tools.jpg";
import workshopImage from "@/assets/riving-workshop.jpg";
import grainImage from "@/assets/grain-macro.jpg";
import spoonImage from "@/assets/product-spoon.jpg";
import spatulaImage from "@/assets/product-spatula.jpg";
import bowlImage from "@/assets/product-bowl.jpg";
import boardImage from "@/assets/product-board.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Riven Wood — The Grain Decides the Spoon" },
      { name: "description", content: "Spoons, spatulas and boards split from green wood, not sawn — every fibre runs whole from handle to bowl. Riven wood, carved slowly." },
      { property: "og:title", content: "Riven Wood — The Grain Decides the Spoon" },
      { property: "og:description", content: "Split, not sawn: utensils carved from riven green wood, where the grain decides the object." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const fibres = ["Split, not sawn", "Dry wood", "Whole fibres", "The crook of a branch", "Growth rings", "No two alike"];
const products = [
  { name: "Spoon — Crook", material: "Riven cherry", price: "$38", image: spoonImage, alt: "Hand-carved riven cherry spoon with a natural crook in the handle, grain flowing from handle tip into the bowl" },
  { name: "Spatula — Sweep", material: "Riven beech", price: "$32", image: spatulaImage, alt: "Hand-carved riven beech spatula with a thin swept blade and flowing grain" },
  { name: "Bowl — Turned", material: "Reclaimed oak", price: "$74", image: bowlImage, alt: "Hand-turned reclaimed oak bowl" },
  { name: "Board — Cleaved", material: "Riven birch", price: "$56", image: boardImage, alt: "Cleaved riven birch chopping board with whole fibres along the bark edge" },
];

function Index() {
  return (
    <main className="overflow-hidden bg-background">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-primary-foreground/20 text-primary-foreground">
        <div className="flex items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#top" className="font-serif text-2xl leading-none">Riven Wood</a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-8 text-xs uppercase md:flex">
            <a href="#riving" className="transition-opacity hover:opacity-60">Riving</a>
            <a href="#grain" className="transition-opacity hover:opacity-60">The grain</a>
            <a href="#utensils" className="transition-opacity hover:opacity-60">Utensils</a>
          </nav>
          <a href="#utensils" className="border-b border-primary-foreground/60 pb-1 text-xs uppercase">Bag · 0</a>
        </div>
      </header>

      <section id="top" className="relative flex flex-col bg-primary text-primary-foreground pb-16 md:h-[min(70svh,55.8vw)] md:min-h-[520px] md:pb-0">
        <img src={heroImage} width={1376} height={768} alt="Carving knives, a hooked spoon knife, a damascus axe and two sharpening stones laid out on a sawdust-covered bench" className="absolute inset-0 h-full w-full object-cover image-rise" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/25 sm:via-primary/40 sm:to-transparent" />
        <div className="relative z-10 flex flex-1 flex-col justify-end px-5 pb-14 pt-28 sm:px-8 lg:px-12 lg:pb-20">
          <p className="mb-5 text-xs uppercase text-accent">The grain decides the spoon</p>
          <h1 className="max-w-4xl font-serif text-6xl leading-[0.88] sm:text-7xl lg:text-9xl">Rift & <br /><em className="text-secondary">Curve</em></h1>
          <div className="mt-8 flex max-w-3xl flex-col gap-6 border-t border-primary-foreground/30 pt-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">Long before the sawmill, wood was split, not cut. We still open every log with wedge and froe, let the timber choose its line, and carve spoons that keep the strength of the living tree.</p>
            <a href="#riving" className="shrink-0 bg-background px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-accent">How riving works</a>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-primary/10 bg-background py-4">
        <div className="material-marquee flex w-max whitespace-nowrap">
          {[...fibres, ...fibres].map((fibre, index) => <span key={`${fibre}-${index}`} className={`px-8 font-serif text-2xl ${index % 3 === 1 ? "text-secondary" : index % 3 === 2 ? "text-accent-foreground" : "text-primary/70"}`}>{fibre} <i className="ml-8 text-primary/20">◆</i></span>)}
        </div>
      </div>

      <section id="riving" className="bg-background">
        <div className="grid min-h-[86svh] lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col justify-between px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
            <span className="font-serif text-8xl text-primary/10">01</span>
            <div>
              <p className="text-xs uppercase text-secondary">An ancient way of opening wood</p>
              <h2 className="mt-4 font-serif text-6xl leading-[0.9] text-primary sm:text-7xl">Wedge, froe<br />&amp; club</h2>
              <p className="mt-7 max-w-md leading-relaxed text-primary/70">Long before the sawmill, builders, coopers and carvers drove wedges into fresh logs and let the timber open along its own lines of weakness. The craftsman never forces a straight line — he reads the wood and guides the split. Fresh green wood splits most cleanly, and straight-grained birch, cherry, maple and beech reward the effort.</p>
            </div>
            <p className="mt-12 text-xs uppercase text-primary/50">Riving, or cleaving · still the foundation of green woodworking</p>
          </div>
          <img src={workshopImage} width={1920} height={768} loading="lazy" alt="Split birch logs and rough spoon blanks on a weathered workbench beside a froe and wooden club, shavings scattered in window light" className="h-full min-h-[55svh] w-full object-cover" />
        </div>
      </section>

      <section id="grain" className="grid min-h-[86svh] bg-primary text-primary-foreground lg:grid-cols-2">
        <img src={grainImage} width={912} height={1200} loading="lazy" alt="Close detail of freshly split wood, whole fibres and medullary rays running end to end" className="h-full max-h-[86svh] min-h-[55svh] w-full object-cover" />
        <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-16">
          <p className="text-xs uppercase text-accent">Why riven is stronger · 02</p>
          <h2 className="mt-6 max-w-xl font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">Every fibre whole, from end to end.</h2>
          <p className="mt-7 max-w-xl leading-relaxed text-primary-foreground/70">A saw cuts in a straight line however the tree grew, severing fibres wherever the grain twists. A split keeps every fibre unbroken, so the piece carries load along its full length — a thin spoon neck survives daily use. Splitting also reveals the true grain, so the wood shrinks and moves evenly as it dries, resists warping, and stays smooth after years of washing. And a split hides nothing: knots and spiral grain show themselves before the carving begins, not halfway through it.</p>
          <dl className="mt-10 grid grid-cols-3 border-y border-primary-foreground/20 py-6">
            <div><dt className="text-[10px] uppercase text-primary-foreground/50">Strength</dt><dd className="mt-2 font-serif text-xl">No cut fibres</dd></div>
            <div><dt className="text-[10px] uppercase text-primary-foreground/50">Stability</dt><dd className="mt-2 font-serif text-xl">Even shrinkage</dd></div>
            <div><dt className="text-[10px] uppercase text-primary-foreground/50">Honesty</dt><dd className="mt-2 font-serif text-xl">Faults revealed</dd></div>
          </dl>
        </div>
      </section>

      <section id="utensils" className="bg-background px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="flex items-end justify-between border-b border-primary/20 pb-6">
          <div><p className="text-xs uppercase text-secondary">The spoon follows the fibre · 03</p><h2 className="mt-3 font-serif text-5xl text-primary sm:text-6xl">Found in the wood</h2></div>
          <span className="hidden text-sm text-primary/50 sm:block">The carver looks for the curve already there</span>
        </div>
        <p className="mt-8 max-w-2xl leading-relaxed text-primary/70">In spoon making, the grain is not a background detail — it decides the object. The bowl and handle are laid out so the fibres flow continuously from the tip of the handle, through the neck, and around into the bowl. That is why a riven spoon can be thin and light yet strong, and why no two pieces are identical: each carries the memory of its branch.</p>
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
          <div><p className="font-serif text-5xl">Riven Wood</p><p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/60">A spoon carved from riven wood is not imposed on the wood. It is found within it, shaped by the same fibres that once carried water from the roots to the leaves.</p></div>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-7 text-xs uppercase text-primary-foreground/60"><a href="#riving">Riving</a><a href="#grain">The grain</a><a href="#utensils">Utensils</a><a href="mailto:workshop@rivenwood.example">Contact</a></nav>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-primary-foreground/15 pt-5 text-[10px] uppercase text-primary-foreground/40 sm:flex-row"><span>© 2026 Riven Wood Workshop</span><span>The grain decides the spoon</span></div>
      </footer>
    </main>
  );
}
