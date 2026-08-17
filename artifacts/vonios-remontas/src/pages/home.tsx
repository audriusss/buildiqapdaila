import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { useListProjects } from "@workspace/api-client-react";

export default function Home() {
  const { data: projects = [] } = useListProjects();
  const previewProjects = projects.slice(0, 4);

  return (
    <Layout>
      <SEO 
        title="Vonios remontas Klaipėdoje | Plytelių klijavimas"
        description="Aukščiausios kokybės vonios kambario įrengimas ir remontas Klaipėdoje. Daugiau nei 10 metų patirties. Visi darbai iš vienų rankų."
        path="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/80 md:bg-background/40 z-10" />
          <img 
            src="/assets/hero.jpg" 
            alt="Premium vonios kambario interjeras" 
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-serif text-foreground leading-[1.1] mb-6">
                Vonios remontas <br/>
                <span className="italic text-foreground/80">Klaipėdoje</span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-foreground/80 mb-10 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Visi darbai iš vienų rankų — nuo griovimo iki paskutinės plytelės. Daugiau nei 10 metų patirties. Dirbu Klaipėdoje ir aplinkiniuose rajonuose.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Button size="lg" asChild className="h-14 px-8 text-base">
                <a href="#susisiekti">Gauti pasiūlymą</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="h-14 px-8 text-base group bg-background/50 backdrop-blur-sm">
                <Link href="/darbai">
                  Peržiūrėti darbus
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="sticky top-32">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Visi vonios remonto darbai iš vienų rankų</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Jums nereikės ieškoti atskirų meistrų santechnikai, elektrai ar plytelėms. Atlieku pilną vonios kambario įrengimą — nuo A iki Z, užtikrindamas aukščiausią kokybę kiekviename etape.
              </p>
              <Button variant="link" asChild className="px-0 text-lg group">
                <Link href="/faq">
                  Dažniausiai užduodami klausimai
                  <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {[
                { title: "Griovimo darbai", desc: "Senų plytelių, santechnikos šalinimas, statybinių šiukšlių išvežimas." },
                { title: "Santechnika", desc: "Vamzdžių vedžiojimas, potinkinio WC, dušo trapo, maišytuvų montavimas." },
                { title: "Hidroizoliacija", desc: "Patikima apsauga nuo drėgmės ir pelėsio drėgnose zonose." },
                { title: "Plytelių klijavimas", desc: "Visų formatų plytelių klijavimas, įskaitant didelio formato (120x60, 120x120)." },
                { title: "Elektros darbai", desc: "Šviestuvų, rozečių, grindinio šildymo pajungimas." },
                { title: "Apdaila", desc: "Lubų ir sienų gipso montavimas, glaistymas, dažymas." }
              ].map((service, i) => (
                <div key={i} className="group">
                  <div className="mb-4">
                    <CheckCircle2 className="w-8 h-8 text-primary/40 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-xl font-serif mb-2">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-4xl md:text-5xl font-serif max-w-xl">Rezultatas matomas geriau nei pažadai</h2>
            <Button variant="outline" asChild className="border-background/20 text-background hover:bg-background hover:text-foreground">
              <Link href="/darbai">Visi projektai</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {previewProjects.map((project) => (
              <Link key={project.slug} href={`/darbai/${project.slug}`} className="group block relative overflow-hidden bg-background/5 aspect-[4/3]">
                <img 
                  src={project.mainImage?.url} 
                  alt={project.mainImage?.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <p className="text-primary font-medium mb-2">{project.city}</p>
                  <h3 className="text-2xl font-serif text-white">{project.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="susisiekti" className="py-24 bg-background scroll-mt-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Papasakokite apie savo vonios remontą</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Aprašykite, kokius darbus reikia atlikti, arba tiesiog paskambinkite. Padėsiu rasti geriausią sprendimą ir paruošiu preliminarią sąmatą.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 border border-border">
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
