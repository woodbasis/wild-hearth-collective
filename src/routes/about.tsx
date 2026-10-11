import { createFileRoute } from "@tanstack/react-router";
import workshopImage from "@/assets/riving-workshop.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Riven Wood Workshop" },
      { name: "description", content: "Who we are and why we split wood instead of sawing it: the story behind Riven Wood." },
      { property: "og:title", content: "About — Riven Wood Workshop" },
      { property: "og:description", content: "A small workshop that lets the grain decide the shape of every spoon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <main className="bg-background">
      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <p className="text-xs uppercase text-secondary">About the workshop</p>
        <h1 className="mt-4 max-w-4xl font-serif text-6xl leading-[0.9] text-primary sm:text-7xl">We follow the wood, not the ruler.</h1>
        <p className="mt-8 max-w-2xl leading-relaxed text-primary/70">Riven Wood is a small workshop where every log is opened by hand with wedge, froe and club. Instead of cutting straight lines, we let the timber split along its natural grain — then carve what the wood already wants to be.</p>
      </section>
      <img src={workshopImage} width={1920} height={768} alt="Split birch logs and spoon blanks on a workbench beside a froe and club" className="h-[50svh] w-full object-cover" />
      <section className="grid gap-12 px-5 py-20 sm:px-8 md:grid-cols-3 lg:px-12">
        {[
          ["Split, not sawn", "Splitting keeps every fibre whole, so even a thin spoon stays strong for years."],
          ["Local timber", "We use cherry, birch, beech and maple from fallen or managed trees nearby."],
          ["Slow by choice", "Each piece is carved, dried and oiled by hand. No two are ever the same."],
        ].map(([t, d]) => (
          <div key={t} className="border-t border-primary/20 pt-6"><h2 className="font-serif text-3xl text-primary">{t}</h2><p className="mt-3 leading-relaxed text-primary/70">{d}</p></div>
        ))}
      </section>
    </main>
  );
}
