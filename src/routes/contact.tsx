import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Riven Wood Workshop" },
      { name: "description", content: "Get in touch about orders, custom commissions or visiting the Riven Wood workshop." },
      { property: "og:title", content: "Contact — Riven Wood" },
      { property: "og:description", content: "Ask about a custom spoon, an order or a workshop visit." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const field = "w-full border-b border-primary/30 bg-transparent py-3 text-primary outline-none focus:border-secondary";
  return (
    <main className="grid gap-16 bg-background px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-28">
      <div>
        <p className="text-xs uppercase text-secondary">Contact</p>
        <h1 className="mt-4 font-serif text-6xl leading-[0.9] text-primary sm:text-7xl">Let's talk wood.</h1>
        <p className="mt-6 max-w-md leading-relaxed text-primary/70">Questions about an order, a custom piece, or visiting the workshop? Write to us and we'll reply within two days.</p>
        <dl className="mt-10 space-y-5 text-primary">
          <div><dt className="text-[11px] uppercase text-primary/50">Email</dt><dd className="mt-1 font-serif text-2xl"><a href="mailto:workshop@rivenwood.example">workshop@rivenwood.example</a></dd></div>
          <div><dt className="text-[11px] uppercase text-primary/50">Workshop</dt><dd className="mt-1 font-serif text-2xl">Serbia · visits by appointment</dd></div>
        </dl>
      </div>
      {sent ? (
        <p className="self-center font-serif text-4xl text-primary">Thank you — we'll be in touch soon.</p>
      ) : (
        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
          <input required placeholder="Your name" className={field} />
          <input required type="email" placeholder="Email" className={field} />
          <textarea required rows={5} placeholder="Your message" className={field} />
          <button className="bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-secondary">Send message</button>
        </form>
      )}
    </main>
  );
}
