import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Riven Wood Spoons, Spatulas & Boards" },
      { name: "description", content: "Hand-carved spoons, spatulas, bowls and boards made from riven wood." },
      { property: "og:title", content: "Shop — Riven Wood" },
      { property: "og:description", content: "Browse hand-carved riven wood utensils. Every piece is one of a kind." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Shop,
});

function Shop() {
  return (
    <main className="bg-background px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <p className="text-xs uppercase text-secondary">The shop</p>
      <h1 className="mt-4 font-serif text-6xl text-primary sm:text-7xl">Carved by hand</h1>
      <p className="mt-6 max-w-2xl leading-relaxed text-primary/70">Every piece is unique — the grain, colour and shape vary from what you see here.</p>
      <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <article key={p.name}>
            <div className="overflow-hidden bg-muted"><img src={p.image} width={800} height={1008} loading="lazy" alt={p.alt} className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-[1.025]" /></div>
            <div className="mt-4 flex items-start justify-between gap-3">
              <div><h2 className="font-serif text-2xl text-primary">{p.name}</h2><p className="mt-1 text-[11px] uppercase text-primary/50">{p.material}</p></div>
              <p className="text-sm text-primary">{p.price}</p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-primary/70">{p.note}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
