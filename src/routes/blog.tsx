import { createFileRoute } from "@tanstack/react-router";
import grainImage from "@/assets/grain-macro.jpg";
import workshopImage from "@/assets/riving-workshop.jpg";
import heroImage from "@/assets/hero-tools.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Notes from the Riven Wood Workshop" },
      { name: "description", content: "Stories about riving, grain, tools and caring for wooden utensils." },
      { property: "og:title", content: "Journal — Riven Wood" },
      { property: "og:description", content: "Notes on green woodworking, grain and the slow craft of spoon carving." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Blog,
});

const posts = [
  { title: "Why a split spoon outlasts a sawn one", date: "Sep 2026", image: grainImage, excerpt: "When fibres run unbroken from handle to bowl, the spoon carries load along its full length. Here's what that means in your kitchen." },
  { title: "Reading a log before the first wedge", date: "Aug 2026", image: workshopImage, excerpt: "Knots, twists and the crook of a branch — how we decide where a log should open." },
  { title: "The tools on our bench", date: "Jul 2026", image: heroImage, excerpt: "A hook knife, a straight knife, an axe and two stones. Why we keep the kit small." },
];

function Blog() {
  return (
    <main className="bg-background px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <p className="text-xs uppercase text-secondary">Journal</p>
      <h1 className="mt-4 font-serif text-6xl text-primary sm:text-7xl">Notes from the bench</h1>
      <div className="mt-14 grid gap-12 md:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title}>
            <img src={p.image} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <p className="mt-5 text-[11px] uppercase text-primary/50">{p.date}</p>
            <h2 className="mt-2 font-serif text-3xl leading-tight text-primary">{p.title}</h2>
            <p className="mt-3 leading-relaxed text-primary/70">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
