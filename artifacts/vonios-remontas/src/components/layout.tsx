import { Link, useLocation } from "wouter";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-[100dvh] flex flex-col font-sans">
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-xl md:text-2xl font-serif font-medium tracking-tight">
            Voniosr<span className="text-primary">.</span>lt
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={cn("text-sm font-medium hover:text-primary transition-colors", location === "/" && "text-primary")}>
              Pradžia
            </Link>
            <Link href="/darbai" className={cn("text-sm font-medium hover:text-primary transition-colors", location.startsWith("/darbai") && "text-primary")}>
              Darbai
            </Link>
            <Link href="/faq" className={cn("text-sm font-medium hover:text-primary transition-colors", location === "/faq" && "text-primary")}>
              FAQ
            </Link>
            <a href="#susisiekti" className="text-sm font-medium flex items-center gap-2 group">
              <Phone className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
              +370 674 96909
            </a>
          </nav>

          <button 
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Meniu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-6 md:hidden shadow-lg animate-in fade-in slide-in-from-top-4">
            <Link href="/" className="text-lg font-serif">Pradžia</Link>
            <Link href="/darbai" className="text-lg font-serif">Darbai</Link>
            <Link href="/faq" className="text-lg font-serif">D.U.K.</Link>
            <a href="tel:+37067496909" className="text-lg font-serif flex items-center gap-3 text-primary">
              <Phone className="w-5 h-5" />
              +370 674 96909
            </a>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-foreground text-background py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <div className="text-2xl font-serif font-medium mb-6">
                Voniosr<span className="text-primary">.</span>lt
              </div>
              <p className="text-background/70 mb-6 max-w-sm">
                Aukščiausios kokybės vonios kambario įrengimas ir remontas Klaipėdoje. Viskas iš vienų rankų.
              </p>
              <a href="tel:+37067496909" className="text-2xl font-serif hover:text-primary transition-colors">
                +370 674 96909
              </a>
            </div>
            
            <div>
              <h4 className="font-serif text-lg mb-6">Nuorodos</h4>
              <ul className="space-y-4 text-background/70">
                <li><Link href="/" className="hover:text-background transition-colors">Pradžia</Link></li>
                <li><Link href="/darbai" className="hover:text-background transition-colors">Darbai</Link></li>
                <li><Link href="/faq" className="hover:text-background transition-colors">Klausimai-Atsakymai</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-6">Paslaugos & Informacija</h4>
              <ul className="space-y-4 text-background/70 text-sm">
                <li><Link href="/vonios-remontas-klaipeda" className="hover:text-background transition-colors">Vonios remontas Klaipėdoje</Link></li>
                <li><Link href="/plyteliu-klijavimas-klaipeda" className="hover:text-background transition-colors">Plytelių klijavimas</Link></li>
                <li><Link href="/santechnikos-darbai-klaipeda" className="hover:text-background transition-colors">Santechnikos darbai</Link></li>
                <li><Link href="/didelio-formato-plyteliu-klijavimas" className="hover:text-background transition-colors">Didelio formato plytelės</Link></li>
                <li><Link href="/vonios-griovimo-darbai" className="hover:text-background transition-colors">Griovimo darbai</Link></li>
                <li><Link href="/vonios-hidroizoliacija" className="hover:text-background transition-colors">Hidroizoliacija</Link></li>
                <li><Link href="/potinkinio-wc-montavimas" className="hover:text-background transition-colors">Potinkinis WC</Link></li>
                <li><Link href="/duso-trapo-montavimas" className="hover:text-background transition-colors">Dušo trapas</Link></li>
                <li><Link href="/grindu-betonavimas-klaipeda" className="hover:text-background transition-colors">Grindų betonavimas</Link></li>
                <li><Link href="/vonios-remonto-kaina" className="hover:text-background transition-colors">Vonios remonto kaina</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
            <p>© {new Date().getFullYear()} Vonios remontas Klaipėdoje. Visos teisės saugomos.</p>
            <p>Dirbame Klaipėdoje, Palangoje, Gargžduose, Kretingoje.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 flex gap-4 z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <a href="tel:+37067496909" className="flex-1 flex items-center justify-center gap-2 h-12 rounded-none border border-foreground text-foreground font-medium text-sm">
          <Phone className="w-4 h-4" />
          Skambinti
        </a>
        <a href="#susisiekti" className="flex-1 flex items-center justify-center h-12 rounded-none bg-foreground text-background font-medium text-sm">
          Gauti pasiūlymą
        </a>
      </div>
    </div>
  );
}
