import { useState } from "react";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { ContactForm } from "@/components/contact-form";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight, Phone, Clock, Shield, User,
  Hammer, Wrench, Droplets, LayoutGrid,
  Zap, Paintbrush, ShowerHead, MessageSquare,
  Play, ChevronRight,
} from "lucide-react";
import { useListProjects } from "@workspace/api-client-react";

const VIDEOS = [
  "/videos/vonios-remontas-1.mp4",
  "/videos/vonios-remontas-2.mp4",
  "/videos/vonios-remontas-3.mp4",
];

function VideoCard({
  src,
  index,
}: {
  src: string;
  index: number;
}) {
  const [started, setStarted] = useState(false);

  return (
    <div
      className="relative overflow-hidden bg-black group"
      style={{
        aspectRatio: "9 / 16",
        border: "1px solid rgba(180,130,70,0.22)",
        boxShadow:
          "0 8px 32px rgba(0,0,0,0.55), 0 0 0 1px rgba(180,130,70,0.05)",
      }}
    >
      <video
        src={src}
        controls={started}
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
        aria-label={`Vonios remonto darbai – video ${index + 1}`}
        onPlay={() => setStarted(true)}
        onPause={(e) => {
          if (e.currentTarget.currentTime === 0) setStarted(false);
        }}
        onEnded={(e) => {
          e.currentTarget.currentTime = 0;
          setStarted(false);
        }}
      />

      {!started && (
        <button
          type="button"
          aria-label={`Paleisti vonios remonto video ${index + 1}`}
          onClick={(e) => {
            const video = e.currentTarget.previousElementSibling as HTMLVideoElement | null;

            if (video) {
              video.play();
              setStarted(true);
            }
          }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/15 hover:bg-black/25 transition-colors"
        >
          <span className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-black/70 border border-primary/60 backdrop-blur-sm shadow-2xl transition-transform group-hover:scale-110">
            <Play className="w-6 h-6 md:w-7 md:h-7 text-primary fill-current ml-1" />
          </span>

          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.18em] text-white/85 bg-black/55 px-3 py-1.5">
            Peržiūrėti
          </span>
        </button>
      )}
    </div>
  );
}

function VideoCarousel() {
  return (
    <div className="w-full max-w-[720px]">
      <div className="grid grid-cols-3 gap-2 md:gap-3">
        {VIDEOS.map((src, index) => (
          <VideoCard
            key={src}
            src={src}
            index={index}
          />
        ))}
      </div>

      <p className="mt-3 text-center text-[10px] md:text-xs uppercase tracking-[0.18em] text-foreground/40">
        Realūs atliktų darbų video
      </p>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const } }),
};

const services = [
  { icon: Hammer,      title: "Griovimo darbai ir paruošimas",     desc: "Senos apdailos pašalinimas, šiukšlių išvežimas, patalpos paruošimas remontui." },
  { icon: Wrench,      title: "Santechnikos darbai",                desc: "Vamzdynų keitimas, potinkinio WC, dušo trapo, maišytuvų montavimas." },
  { icon: LayoutGrid,  title: "Plytelių klijavimas ir apdaila",     desc: "Visų formatų plytelės — įskaitant 120×60, 120×120. Tikslūs 45° kampai." },
  { icon: Droplets,    title: "Hidroizoliacija",                    desc: "Daugiasluoksnė apsauga nuo drėgmės ir pelėsio drėgnose zonose." },
  { icon: Zap,         title: "Elektros instaliacija vonioje",      desc: "Šviestuvų, lizdų, grindinio šildymo pajungimas pagal normas." },
  { icon: Paintbrush,  title: "Gipso kartono konstrukcijos",        desc: "Karkasų, niešų ir pertvarų montavimas, paviršių glaistymas." },
  { icon: ShowerHead,  title: "Dušo, vonios, WC montavimas",       desc: "Galutinis santechnikos prietaisų ir baldų montavimas ir pajungimas." },
  { icon: MessageSquare, title: "Konsultacijos ir medžiagų parinkimas", desc: "Padėsiu išsirinkti plyteles, santechniką ir sudarysiu tikslią sąmatą." },
];

export default function Home() {
  const { data: projects = [] } = useListProjects();
  const previewProjects = projects.slice(0, 3);

  return (
    <Layout>
      <SEO
        title="Vonios remontas Klaipėdoje | Plytelių klijavimas"
        description="Aukščiausios kokybės vonios kambario įrengimas ir remontas Klaipėdoje. Daugiau nei 10 metų patirties. Visi darbai iš vienų rankų."
        path="/"
      />

      {/* ══ HERO ══ */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        {/* Background image — dark concrete bathroom (p3), right side dominant */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/projects/p3-main.jpg"
            alt="Tamsus premium vonios kambarys su apvaliu veidrodžiu ir stikliniu dušu"
            className="w-full h-full object-cover [object-position:70%_center] md:[object-position:65%_center]"
            loading="eager"
            fetchPriority="high"
          />
          {/* Gradient: heavy dark left for readability, reveals photo on right */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(90deg, rgba(8,8,8,0.98) 0%, rgba(8,8,8,0.90) 28%, rgba(8,8,8,0.55) 50%, rgba(8,8,8,0.12) 72%, rgba(8,8,8,0) 100%)" }}
          />
          {/* Bottom fade for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 via-transparent to-[#080808]/25" />
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-28 pb-20 md:pt-32 md:pb-24">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-20">

            {/* ── LEFT: unchanged hero content ── */}
            <div className="max-w-2xl lg:flex-1">
              {/* Eyebrow */}
              <motion.p
                className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-primary font-sans font-medium mb-6"
                variants={fadeUp} initial="hidden" animate="show" custom={0}
              >
                Vienas meistras — visas vonios remontas
              </motion.p>

              {/* H1 */}
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-semibold leading-[1.0] mb-8 text-foreground"
                variants={fadeUp} initial="hidden" animate="show" custom={1}
              >
                Vonios remontas
                <br />
                <em className="not-italic italic text-primary">Klaipėdoje</em>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                className="text-base md:text-lg text-foreground/70 mb-10 max-w-lg leading-relaxed"
                variants={fadeUp} initial="hidden" animate="show" custom={2}
              >
                Visi darbai iš vienų rankų — nuo griovimo iki paskutinės plytelės. Daugiau nei 10 metų patirties. Dirbu Klaipėdoje ir aplinkiniuose rajonuose.
              </motion.p>

              {/* Trust badges */}
              <motion.div
                className="flex flex-wrap gap-6 mb-10 text-sm text-foreground/60"
                variants={fadeUp} initial="hidden" animate="show" custom={3}
              >
                {[
                  { icon: Clock,  label: "10+ metų patirtis" },
                  { icon: Shield, label: "Pilnas vonios remontas" },
                  { icon: User,   label: "Vienas meistras — visa atsakomybė" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-primary shrink-0" strokeWidth={1.5} />
                    <span>{label}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3"
                variants={fadeUp} initial="hidden" animate="show" custom={4}
              >
                <a
                  href="#susisiekti"
                  className="inline-flex items-center justify-center px-8 h-13 bg-primary text-primary-foreground font-medium text-sm uppercase tracking-widest hover:bg-primary/90 transition-colors"
                >
                  Gauti pasiūlymą
                </a>
                <Link
                  href="/darbai"
                  className="inline-flex items-center justify-center gap-2 px-8 h-13 border border-white/15 text-foreground/80 font-medium text-sm uppercase tracking-widest hover:border-white/30 hover:text-foreground transition-colors group"
                >
                  Peržiūrėti darbus
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* ── RIGHT: Facebook Reel carousel ── */}
            {/* Desktop: right column in hero. Mobile: stacked below CTAs (before Services). */}
            <motion.div
              className="mt-12 lg:mt-0 flex justify-center lg:justify-end lg:flex-shrink-0"
              variants={fadeUp} initial="hidden" animate="show" custom={5}
            >
              <VideoCarousel />
            </motion.div>

          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-foreground/25 z-10 hidden md:flex">
          <span className="text-[10px] uppercase tracking-[0.2em]">Slinkti</span>
          <div className="w-px h-12 bg-gradient-to-b from-foreground/20 to-transparent" />
        </div>
      </section>

      {/* ══ SERVICES ══ */}
      <section className="py-28 bg-[#111111]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-20 items-start">
            {/* Left sticky text */}
            <div className="lg:sticky lg:top-32">
              <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-sans mb-4">Paslaugos</p>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-6">
                Visi darbai iš{" "}
                <em className="not-italic italic text-primary">vienų rankų</em>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm">
                Atlieku visus vonios remonto darbus — nuo paruošimo iki pilno įrengimo. Jums nereikia ieškoti kelių skirtingų meistrų.
              </p>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                Dažniausiai užduodami klausimai
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Right service grid */}
            <div className="grid sm:grid-cols-2 gap-px bg-white/5">
              {services.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={i}
                    className="bg-[#111111] p-6 md:p-8 group hover:bg-[#161616] transition-colors border border-transparent hover:border-white/5"
                  >
                    <Icon className="w-5 h-5 text-primary mb-4" strokeWidth={1.5} />
                    <h3 className="text-base font-serif font-medium mb-2 text-foreground">{svc.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5">
            <Link
              href="/vonios-remontas-klaipeda"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              Žiūrėti visas paslaugas
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ GALLERY PREVIEW ══ */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-sans mb-4">Atlikti darbai</p>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                Rezultatas matomas<br />
                <span className="text-foreground/50">geriau nei pažadai</span>
              </h2>
            </div>
            <Link
              href="/darbai"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group shrink-0"
            >
              Visi projektai
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {previewProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/darbai/${project.slug}`}
                className="group block relative overflow-hidden aspect-[3/4] bg-card"
              >
                <img
                  src={project.mainImage?.url}
                  alt={project.mainImage?.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary text-xs uppercase tracking-widest mb-1.5">{project.city}</p>
                  <h3 className="text-xl font-serif text-white leading-snug">{project.title}</h3>
                  {project.area && (
                    <p className="text-white/40 text-xs mt-1">{project.area}</p>
                  )}
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-white rotate-45" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="susisiekti" className="py-0 bg-[#111111] scroll-mt-0">
        <div className="grid lg:grid-cols-[2fr_3fr_1.5fr]">
          {/* Col 1 — atmospheric image + text */}
          <div className="relative hidden lg:block min-h-[600px]">
            <img
              src="/assets/hero.jpg"
              alt="Vonios remontas"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0b]/20 to-[#0b0b0b]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10">
              <h2 className="text-3xl font-serif text-white leading-snug mb-3">
                Papasakokite apie savo<br />
                <em className="not-italic italic text-primary">vonios remontą</em>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                Trumpai aprašykite darbus. Jei turite nuotraukų — pridėkite, tačiau tai nėra privaloma.
              </p>
            </div>
          </div>

          {/* Col 2 — form */}
          <div className="p-8 md:p-12 lg:p-14 border-x border-white/5">
            {/* Mobile heading */}
            <div className="lg:hidden mb-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-sans mb-3">Susisiekite</p>
              <h2 className="text-3xl font-serif leading-snug">
                Papasakokite apie savo{" "}
                <em className="not-italic italic text-primary">vonios remontą</em>
              </h2>
            </div>
            <ContactForm />
          </div>

          {/* Col 3 — contact info */}
          <div className="p-8 md:p-12 lg:p-14 bg-[#0f0f0f] flex flex-col justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-sans mb-8">Kontaktai</p>

              <div className="mb-8">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Telefonas</p>
                <a href="tel:+37067496909" className="text-2xl font-serif text-foreground hover:text-primary transition-colors">
                  +370 674 96909
                </a>
              </div>

              <div className="mb-8">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Regionas</p>
                <p className="text-foreground font-medium">Klaipėda</p>
                <p className="text-muted-foreground text-sm mt-1">Gargždai · Kretinga · Palanga</p>
              </div>

              <div className="p-5 border border-primary/15 bg-primary/5">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
                  <span className="text-xs uppercase tracking-wider text-primary font-medium">Greitas atsakymas</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Paprastai susisieku per 1–2 darbo dienas.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-xs text-muted-foreground">
                Arba skambinkite tiesiogiai — visuomet mielai atsakysiu į Jūsų klausimus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
