import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/shop", label: "Shop" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-primary-foreground/15 bg-primary text-primary-foreground">
      <div className="flex items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link to="/" className="font-serif text-2xl leading-none">Riven Wood</Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-8 text-xs uppercase md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} activeOptions={{ exact: true }} className="border-b border-transparent pb-1 transition-opacity hover:opacity-70" activeProps={{ className: "border-accent text-accent" }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <button aria-label="Toggle menu" className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile navigation" className="flex flex-col border-t border-primary-foreground/15 px-5 py-4 md:hidden">
          {links.map((l) => (
            <Link key={l.to} to={l.to} activeOptions={{ exact: true }} onClick={() => setOpen(false)} className="py-3 text-sm uppercase" activeProps={{ className: "text-accent" }}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary px-5 py-14 text-primary-foreground sm:px-8 lg:px-12">
      <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
        <div><p className="font-serif text-5xl">Riven Wood</p><p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/60">A spoon carved from riven wood is not imposed on the wood. It is found within it.</p></div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-7 text-xs uppercase text-primary-foreground/60">
          {links.map((l) => <Link key={l.to} to={l.to} className="hover:text-primary-foreground">{l.label}</Link>)}
        </nav>
      </div>
      <div className="mt-12 border-t border-primary-foreground/15 pt-6">
        <p className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/50">Follow the workshop</p>
        <SocialLinks className="mt-4" tile />
      </div>
      <div className="mt-10 flex flex-col justify-between gap-2 border-t border-primary-foreground/15 pt-5 text-[10px] uppercase text-primary-foreground/40 sm:flex-row"><span>© 2026 Riven Wood Workshop</span><span>The grain decides the spoon</span></div>
    </footer>
  );
}
