import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function InfoPage({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  children: ReactNode;
}) {
  return (
    <main className="bg-background px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] uppercase tracking-[0.2em] text-secondary">{eyebrow}</p>
        <h1 className="mt-4 font-serif text-6xl leading-[0.95] text-primary sm:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary/70">{lead}</p>
        <div className="mt-14 space-y-12">{children}</div>
        <div className="mt-16 flex flex-wrap gap-6 border-t border-primary/15 pt-6 text-[11px] uppercase text-primary/50">
          <Link to="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/shop" className="transition-colors hover:text-primary">
            Shop
          </Link>
          <Link to="/contact" className="transition-colors hover:text-primary">
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}

export function InfoSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-serif text-3xl leading-tight text-primary">{heading}</h2>
      <div className="mt-3 space-y-3 leading-relaxed text-primary/70">{children}</div>
    </section>
  );
}
