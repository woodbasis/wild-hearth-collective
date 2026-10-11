import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-tools.jpg";
import workshopImage from "@/assets/riving-workshop.jpg";
import grainImage from "@/assets/grain-macro.jpg";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";

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

function Index() {
  return (
    <main className="overflow-hidden bg-background">

      <section id="top" className="home-hero relative flex flex-col bg-primary text-primary-foreground">
        <img src={heroImage} width={1376} height={768} alt="Carving knives, a hooked spoon knife, a damascus axe and two sharpening stones laid out on a sawdust-covered bench" className="home-hero-photo absolute inset-0 h-full w-full object-cover image-rise" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/25 sm:via-primary/40 sm:to-transparent" />
        <div className="home-hero-content relative z-10 flex flex-1 flex-col justify-end px-5 pb-14 pt-16 sm:px-8 lg:px-12 2xl:px-[84px]">
          <p className="mb-5 text-xs uppercase text-accent 2xl:mb-8 2xl:text-base">The grain decides the spoon</p>
          <h1 className="max-w-4xl font-serif text-7xl leading-[0.88] sm:text-8xl lg:text-9xl 2xl:max-w-6xl 2xl:text-[192px]">Rift & <br /><em className="text-secondary">Curve</em></h1>
          <div className="mt-8 flex max-w-3xl flex-col gap-6 border-t border-primary-foreground/30 pt-6 md:flex-row md:items-end md:justify-between 2xl:mt-12 2xl:max-w-[1344px] 2xl:gap-10 2xl:pt-10">
            <p className="min-w-0 max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base 2xl:max-w-[1000px] 2xl:text-xl">Long before the sawmill, wood was split, not cut. We still open every log with wedge and froe, let the timber choose its line, and carve spoons that keep the strength of the living tree.</p>
            <Button asChild variant="outline" className="h-11 shrink-0 self-start rounded-none border-0 px-6 text-sm text-primary md:self-auto 2xl:h-16 2xl:px-10 2xl:text-lg"><a href="#riving">How riving works</a></Button>
          </div>
        </div>
      </section>

      <div className="home-ticker overflow-hidden border-y border-primary/10 bg-background py-4">
        <div className="material-marquee flex w-max whitespace-nowrap">
          {[...fibres, ...fibres].map((fibre, index) => <span key={`${fibre}-${index}`} className={`px-8 font-serif text-2xl 2xl:px-12 2xl:text-3xl ${index % 3 === 1 ? "text-secondary" : index % 3 === 2 ? "text-accent-foreground" : "text-primary/70"}`}>{fibre} <i className="ml-8 text-primary/20 2xl:ml-12">◆</i></span>)}
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
        <img src={grainImage} width={896} height={1200} loading="lazy" alt="Eight hand-carved wooden spatulas, a spoon and a spreader standing in a row on a cream sheepskin rug, each showing its own grain, bark edges and carved handle" className="h-full max-h-[86svh] min-h-[55svh] w-full object-cover" />
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
          {products.filter((p) => p.featured).map((product, index) => (
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

    </main>
  );
}
