import { Layout } from "@/components/layout";
import { SEO } from "@/components/seo";
import { Link } from "wouter";
import { useListProjects } from "@workspace/api-client-react";
import { galleryImages } from "@/data/gallery-images";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

function RealGalleryLightbox({
  index,
  onClose,
  onPrev,
  onNext,
}: {
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = galleryImages[index];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        type="button"
        className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors z-10"
        onClick={onClose}
        aria-label="Uždaryti"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Counter */}
      <span className="absolute top-5 left-5 text-white/40 text-xs tracking-wider">
        {index + 1} / {galleryImages.length}
      </span>

      {/* Prev */}
      <button
        type="button"
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors z-10"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Ankstesnė nuotrauka"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      {/* Image */}
      <img
        src={img.url}
        alt={img.alt}
        className="max-w-full max-h-full object-contain select-none"
        onClick={(e) => e.stopPropagation()}
        draggable={false}
      />

      {/* Next */}
      <button
        type="button"
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors z-10"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Kita nuotrauka"
      >
        <ChevronRight className="w-7 h-7" />
      </button>

      {/* Caption */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center px-4 pointer-events-none">
        <p className="text-white/80 text-sm font-medium">{img.title}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  const { data: projects = [], isLoading } = useListProjects();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length)),
    []
  );
  const nextImage = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % galleryImages.length)),
    []
  );

  return (
    <Layout>
      <SEO
        title="Atlikti darbai | Vonios Remontas Klaipėdoje"
        description="Peržiūrėkite mūsų atliktus vonios remonto darbus Klaipėdoje. Nuo minimalistinių iki prabangių sprendimų."
        path="/darbai"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "Realūs atlikti vonios remonto darbai",
            description:
              "Realiai atliktų vonios remonto, plytelių klijavimo, dušo zonų, potinkinių WC ir santechnikos darbų nuotraukos.",
            url: "https://buildiq.lt/darbai",
            image: galleryImages.map((img) => ({
              "@type": "ImageObject",
              contentUrl: `https://buildiq.lt${img.url}`,
              url: `https://buildiq.lt${img.url}`,
              name: img.title,
              caption: img.description,
              description: img.alt,
              representativeOfPage: false,
            })),
          }),
        }}
      />

      <div className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6">

          {/* ── Showcase projects ───────────────────────────────────── */}
          <div className="mb-16">
            <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-sans mb-4">ATLIKTI DARBAI</p>
            <h1 className="text-4xl md:text-6xl font-serif mb-4">Vonios remonto darbai</h1>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              Vonios remontas nuo griovimo ir paruošimo iki plytelių klijavimo, santechnikos montavimo ir galutinės apdailos.
              Žemiau – darbų pavyzdžiai ir realiai atliktų objektų nuotraukos.
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-[4/5] bg-card animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/darbai/${project.slug}`}
                  className="group block relative overflow-hidden aspect-[4/5] bg-card"
                >
                  <img
                    src={project.mainImage?.url}
                    alt={project.mainImage?.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-primary text-xs uppercase tracking-widest mb-1.5">{project.city}</p>
                    <h2 className="text-xl font-serif text-white leading-snug group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    {project.area && (
                      <p className="text-white/40 text-xs mt-1">{project.area}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* ── Real work gallery ────────────────────────────────────── */}
          <div>
            {/* Section header */}
            <div className="mb-12">
              <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-sans mb-4">
                Realūs darbai
              </p>
              <h2 className="text-3xl md:text-5xl font-serif mb-5">
                Realūs atlikti vonios remonto darbai
              </h2>
              <p className="text-muted-foreground max-w-2xl leading-relaxed">
                Keletas fragmentų iš realiai atliktų vonios remonto ir apdailos darbų. Plytelių
                klijavimas, dušo zonos, potinkiniai WC, santechnikos sprendimai ir galutinė apdaila.
              </p>
            </div>

            {/* Gallery grid – 3 col desktop, 2 col tablet, 1 col mobile */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-0">
              {galleryImages.map((img, i) => (
                <div key={img.url} className="break-inside-avoid mb-4">
                  <button
                    type="button"
                    className="group w-full text-left block relative overflow-hidden bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    onClick={() => openLightbox(i)}
                    aria-label={`Peržiūrėti: ${img.title}`}
                  >
                    {/* Photo */}
                    <div className={`overflow-hidden ${img.featured ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                      <img
                        src={img.url}
                        alt={img.alt}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        loading="lazy"
                        width={img.featured ? 600 : 800}
                        height={img.featured ? 800 : 600}
                      />
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
                  </button>

                  {/* Text below photo */}
                  <div className="pt-3 pb-1 px-0">
                    <span className="text-[9px] uppercase tracking-[0.22em] text-primary font-sans">
                      {img.category}
                    </span>
                    <h3 className="text-sm font-medium text-foreground mt-1 leading-snug">
                      {img.title}
                    </h3>
                    <p className="text-muted-foreground text-xs mt-1.5 leading-relaxed">
                      {img.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <RealGalleryLightbox
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </Layout>
  );
}
