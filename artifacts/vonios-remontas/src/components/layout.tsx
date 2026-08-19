import { Link, useLocation } from "wouter";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Pradžia", active: location === "/" },
    { href: "/darbai", label: "Darbai", active: location.startsWith("/darbai") },
    { href: "/faq", label: "FAQ", active: location === "/faq" },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans bg-background">
      {/* ── HEADER ── */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-[#0b0b0b]/95 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-3 group shrink-0">
            <span className="text-xl md:text-2xl font-serif font-semibold text-foreground tracking-tight leading-none">
              Build<span className="text-primary">IQ</span>
            </span>
            <span className="hidden sm:flex flex-col leading-none text-muted-foreground text-[9px] uppercase tracking-[0.2em] font-sans font-medium">
              <span>Vonios remontas</span>
              <span>Klaipėdoje</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors",
                  link.active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
                {link.active && (
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-primary" />
                )}
              </Link>
            ))}
            <a
              href="/#susisiekti"
              className="ml-4 px-5 py-2 text-sm font-medium border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              Gauti pasiūlymą
            </a>
          </nav>

          {/* Phone */}
          <a
            href="tel:+37067496909"
            className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
            +370 674 96909
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Meniu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#0f0f0f] border-b border-white/5 px-6 py-8 flex flex-col gap-6 md:hidden shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base font-serif transition-colors",
                  link.active ? "text-primary" : "text-foreground/80 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:+37067496909" className="flex items-center gap-3 text-base font-medium text-primary">
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              +370 674 96909
            </a>
          </div>
        )}
      </header>

      {/* ── MAIN ── */}
      <main className="flex-1">{children}</main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Brand */}
            <div>
              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-2xl font-serif font-semibold text-foreground">
                  Build<span className="text-primary">IQ</span>
                </span>
                <span className="flex flex-col leading-none text-muted-foreground text-[9px] uppercase tracking-[0.2em] font-sans">
                  <span>Vonios remontas</span>
                  <span>Klaipėdoje</span>
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-6 max-w-xs leading-relaxed">
                Aukščiausios kokybės vonios kambario įrengimas ir remontas. Visi darbai iš vienų rankų.
              </p>
              <a
                href="tel:+37067496909"
                className="text-xl font-serif text-foreground hover:text-primary transition-colors"
              >
                +370 674 96909
              </a>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-sans mb-6">Navigacija</h4>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Pradžia" },
                  { href: "/darbai", label: "Atlikti darbai" },
                  { href: "/faq", label: "Klausimai & Atsakymai" },
                  { href: "/#susisiekti", label: "Gauti pasiūlymą" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* SEO links */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-sans mb-6">Paslaugos</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { href: "/vonios-remontas-klaipeda", label: "Vonios remontas Klaipėdoje" },
                  { href: "/vonios-remontas-palanga", label: "Vonios remontas Palangoje" },
                  { href: "/vonios-remontas-gargzdai", label: "Vonios remontas Gargžduose" },
                  { href: "/vonios-remontas-kretinga", label: "Vonios remontas Kretingoje" },
                  { href: "/vonios-remontas-silute", label: "Vonios remontas Šilutėje" },
                  { href: "/vonios-remontas-plunge", label: "Vonios remontas Plungėje" },
                  { href: "/vonios-remontas-siauliai", label: "Vonios remontas Šiauliuose" },
                  { href: "/vonios-remontas-kaunas", label: "Vonios remontas Kaune" },
                  { href: "/vonios-remontas-vilnius", label: "Vonios remontas Vilniuje" },
                  { href: "/kapitalinis-vonios-remontas", label: "Kapitalinis vonios remontas" },
                  { href: "/plyteliu-klijavimas-klaipeda", label: "Plytelių klijavimas" },
                  { href: "/plyteliu-fugavimas-silikonavimas", label: "Fugavimas ir silikonas" },
                  { href: "/santechnikos-darbai-klaipeda", label: "Santechnikos darbai" },
                  { href: "/gyvatuko-keitimas", label: "Gyvatuko keitimas" },
                  { href: "/wc-montavimas", label: "WC montavimas" },
                  { href: "/duso-kabinos-montavimas", label: "Dušo kabinos montavimas" },
                  { href: "/vonios-montavimas", label: "Vonios montavimas" },
                  { href: "/praustuvo-montavimas", label: "Praustuvo montavimas" },
                  { href: "/maisytuvo-montavimas", label: "Maišytuvo montavimas" },
                  { href: "/vandentiekio-vamzdziu-keitimas", label: "Vandentiekio vamzdžių keitimas" },
                  { href: "/kanalizacijos-vamzdziu-keitimas", label: "Kanalizacijos vamzdžių keitimas" },
                  { href: "/santechnikos-tasku-perkelimas", label: "Santechnikos taškų perkėlimas" },
                  { href: "/elektros-darbai-vonioje", label: "Elektros darbai vonioje" },
                  { href: "/gipso-darbai-vonioje", label: "Gipso darbai vonioje" },
                  { href: "/lubu-glaistymas-dazymas-vonioje", label: "Lubų glaistymas ir dažymas" },
                  { href: "/elektrinis-grindu-sildymas-vonioje", label: "Šildomos grindys vonioje" },
                  { href: "/vonios-remonto-kaina", label: "Vonios remonto kaina" },
                  { href: "/didelio-formato-plyteliu-klijavimas", label: "Didelio formato plytelės" },
                  { href: "/vonios-hidroizoliacija", label: "Hidroizoliacija" },
                  { href: "/sienu-lyginimas-tinkavimas-vonioje", label: "Sienų lyginimas ir tinkavimas" },
                  { href: "/potinkinio-wc-montavimas", label: "Potinkinis WC" },
                  { href: "/duso-trapo-montavimas", label: "Dušo trapas" },
                  { href: "/grindu-betonavimas-klaipeda", label: "Grindų betonavimas" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground/60">
            <p>© {new Date().getFullYear()} BuildIQ. Vonios remontas Klaipėdoje.</p>
            <p>Klaipėda · Palanga · Gargždai · Kretinga</p>
          </div>
        </div>
      </footer>

      {/* ── MOBILE STICKY CTA ── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0f0f0f]/95 backdrop-blur-md border-t border-white/5 p-3 flex gap-3 z-40">
        <a
          href="tel:+37067496909"
          className="flex-1 flex items-center justify-center gap-2 h-12 border border-white/10 text-foreground font-medium text-sm hover:border-primary/40 transition-colors"
        >
          <Phone className="w-4 h-4 text-primary" strokeWidth={1.5} />
          Skambinti
        </a>
        <a
          href="/#susisiekti"
          className="flex-1 flex items-center justify-center h-12 bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
        >
          Gauti pasiūlymą
        </a>
      </div>
    </div>
  );
}
