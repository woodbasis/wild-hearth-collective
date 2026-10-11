import { Link, linkOptions } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/shop", label: "Shop" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

const footerMenus = [
  {
    heading: "Discover",
    links: [
      { label: "Buy & Sell", nav: linkOptions({ to: "/shop" }) },
      { label: "Merchant", nav: linkOptions({ to: "/merchant" }) },
      { label: "Giving back", nav: linkOptions({ to: "/giving-back" }) },
      { label: "Help & Support", nav: linkOptions({ to: "/contact" }) },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "Staff", nav: linkOptions({ to: "/staff" }) },
      { label: "Team", nav: linkOptions({ to: "/team" }) },
      { label: "Careers", nav: linkOptions({ to: "/careers" }) },
      { label: "Blog", nav: linkOptions({ to: "/blog" }) },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Security", nav: linkOptions({ to: "/security" }) },
      { label: "Global", nav: linkOptions({ to: "/global" }) },
      { label: "Charts", nav: linkOptions({ to: "/charts" }) },
      { label: "Privacy", nav: linkOptions({ to: "/privacy" }) },
    ],
  },
  {
    heading: "Social",
    links: [
      { label: "Facebook", href: "https://www.facebook.com" },
      { label: "Twitter", href: "https://x.com" },
      { label: "Instagram", href: "https://www.instagram.com" },
      { label: "Googleplus", href: "https://www.google.com" },
    ],
  },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-primary-foreground/15 bg-primary text-primary-foreground">
      <div className="grid h-[var(--site-header-height)] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:px-12 2xl:px-[84px]">
        <Link to="/" className="min-w-0 truncate font-serif text-2xl leading-none 2xl:text-4xl">Riven Wood</Link>
        <nav aria-label="Primary navigation" className="hidden shrink-0 items-center gap-8 text-xs uppercase md:flex 2xl:gap-14 2xl:text-base">
          {links.map((l) => (
            <Link key={l.to} to={l.to} activeOptions={{ exact: true }} className="border-b border-transparent pb-1 transition-opacity hover:opacity-70" activeProps={{ className: "border-accent text-accent" }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Button variant="ghost" size="icon" aria-label="Toggle menu" aria-expanded={open} className="shrink-0 hover:bg-primary-foreground/10 md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </Button>
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
      <div><p className="font-serif text-5xl">Riven Wood</p><p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/60">A spoon carved from riven wood is not imposed on the wood. It is found within it.</p></div>
      <div className="mt-12 border-t border-primary-foreground/15 pt-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/50">Follow the workshop</p>
        <SocialLinks className="mt-4 justify-center" tile />
      </div>
      <nav aria-label="Footer link menus" className="mt-14 grid gap-10 border-t border-primary-foreground/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
        {footerMenus.map((menu) => (
          <div key={menu.heading} className="border-t border-primary-foreground/15 pt-6 first:border-t-0 first:pt-0 sm:border-t-0 sm:pt-0 sm:pl-6 sm:odd:border-l-0 sm:odd:pl-0 lg:border-l lg:border-primary-foreground/15 lg:pl-8 lg:first:border-l-0 lg:first:pl-0">
            <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground">{menu.heading}</h2>
            <ul className="mt-4 space-y-3 text-xs text-primary-foreground/55">
              {menu.links.map((l) => (
                <li key={l.label}>
                  {"nav" in l ? (
                    <Link {...l.nav} className="transition-colors hover:text-primary-foreground">
                      {l.label}
                    </Link>
                  ) : (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary-foreground">
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      <div className="mt-12 flex flex-col justify-between gap-2 border-t border-primary-foreground/15 pt-5 text-[10px] uppercase text-primary-foreground/40 sm:flex-row"><span>© 2026 Riven Wood Workshop</span><span>The grain decides the spoon</span></div>
    </footer>
  );
}
